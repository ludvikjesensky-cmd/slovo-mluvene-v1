-- Slovo mluvené: private family catalogue and per-user listening progress.
-- Apply only after the dedicated Supabase project has been confirmed.
create extension if not exists pgcrypto;

create table public.archive_works (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  work_type text not null check (work_type in ('radio_play', 'serial_reading', 'short_story', 'audiobook', 'other')),
  author text,
  narrator text,
  description text,
  cover_object_key text,
  year integer check (year is null or year between 1400 and 2200),
  is_published boolean not null default false,
  sort_title text generated always as (lower(title)) stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.archive_episodes (
  id uuid primary key default gen_random_uuid(),
  work_id uuid not null references public.archive_works(id) on delete cascade,
  title text not null,
  episode_number integer not null default 1 check (episode_number > 0),
  audio_object_key text not null,
  duration_seconds integer check (duration_seconds is null or duration_seconds > 0),
  published_at date,
  created_at timestamptz not null default now(),
  unique (work_id, episode_number)
);

create table public.playback_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  episode_id uuid not null references public.archive_episodes(id) on delete cascade,
  position_seconds integer not null default 0 check (position_seconds >= 0),
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, episode_id)
);

create index archive_works_type_published_idx on public.archive_works(work_type, is_published);
create index archive_works_sort_title_idx on public.archive_works(sort_title);
create index archive_episodes_work_idx on public.archive_episodes(work_id, episode_number);
create index playback_progress_updated_idx on public.playback_progress(user_id, updated_at desc);

alter table public.archive_works enable row level security;
alter table public.archive_episodes enable row level security;
alter table public.playback_progress enable row level security;

grant select on public.archive_works, public.archive_episodes to authenticated;
grant select, insert, update, delete on public.playback_progress to authenticated;

create policy "Family can read published works"
  on public.archive_works for select to authenticated
  using (is_published);

create policy "Family can read episodes of published works"
  on public.archive_episodes for select to authenticated
  using (
    exists (
      select 1 from public.archive_works w
      where w.id = work_id and w.is_published
    )
  );

create policy "Users read own playback progress"
  on public.playback_progress for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users create own playback progress"
  on public.playback_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users update own playback progress"
  on public.playback_progress for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users delete own playback progress"
  on public.playback_progress for delete to authenticated
  using ((select auth.uid()) = user_id);

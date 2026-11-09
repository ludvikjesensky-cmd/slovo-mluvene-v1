-- Require explicit family membership before any catalogue or playback access.
create table public.family_members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  added_at timestamptz not null default now()
);

alter table public.family_members enable row level security;

revoke all on public.family_members from anon, authenticated;
grant select on public.family_members to authenticated;

create policy "Users can read their own family membership"
  on public.family_members for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy "Family can read published works" on public.archive_works;
create policy "Family members can read published works"
  on public.archive_works for select to authenticated
  using (
    is_published
    and exists (
      select 1 from public.family_members fm
      where fm.user_id = (select auth.uid())
    )
  );

drop policy "Family can read episodes of published works" on public.archive_episodes;
create policy "Family members can read episodes of published works"
  on public.archive_episodes for select to authenticated
  using (
    exists (
      select 1
      from public.archive_works w
      join public.family_members fm on fm.user_id = (select auth.uid())
      where w.id = work_id and w.is_published
    )
  );

drop policy "Users read own playback progress" on public.playback_progress;
create policy "Family members read own playback progress"
  on public.playback_progress for select to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.family_members fm
      where fm.user_id = (select auth.uid())
    )
  );

drop policy "Users create own playback progress" on public.playback_progress;
create policy "Family members create own playback progress"
  on public.playback_progress for insert to authenticated
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.family_members fm
      where fm.user_id = (select auth.uid())
    )
  );

drop policy "Users update own playback progress" on public.playback_progress;
create policy "Family members update own playback progress"
  on public.playback_progress for update to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.family_members fm
      where fm.user_id = (select auth.uid())
    )
  )
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.family_members fm
      where fm.user_id = (select auth.uid())
    )
  );

drop policy "Users delete own playback progress" on public.playback_progress;
create policy "Family members delete own playback progress"
  on public.playback_progress for delete to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.family_members fm
      where fm.user_id = (select auth.uid())
    )
  );

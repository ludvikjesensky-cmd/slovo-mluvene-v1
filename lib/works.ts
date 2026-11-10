export type Work = {
  id: string;
  title: string;
  kind: string;
  category: string;
  year: string;
  length: string;
  author: string;
  cast: string;
  description: string;
  cover: string;
  episodes: string[];
  collection: string;
  themes: string[];
  detail: string;
};

export const works: Work[] = [
  {
    id: "nocni-spoj",
    title: "Poslední noční spoj",
    kind: "Rozhlasová hra",
    category: "Hra",
    year: "2021",
    length: "52 min",
    author: "Ukázkový autor",
    cast: "Ukázkové obsazení",
    description: "Když Anna nastoupí do posledního vlaku, cestující tvrdí, že ji už dlouho čekají. Komorní příběh o návratech, které si člověk neplánoval.",
    cover: "/covers/night-train.svg",
    episodes: ["Jedno nástupiště navíc · 52 min"],
    collection: "Večerní rozhlasové hry",
    themes: ["Návraty", "Tajemství", "Cesta"],
    detail: "Noční nádraží, poslední spoj a několik cestujících, kteří Annu oslovují, jako by ji znali odjakživa. Komorní příběh postupně odkrývá, proč se některá setkání nedají odložit na příště.",
  },
  {
    id: "zahrada",
    title: "Zahrada za mlhou",
    kind: "Četba na pokračování",
    category: "Četba",
    year: "2019",
    length: "8 dílů",
    author: "Ukázková autorka",
    cast: "Čte ukázkový interpret",
    description: "Dům na konci zahrady zůstává zamčený. Když se po letech vrátí jeho nová majitelka, mlha začne odkrývat víc než jen cestu.",
    cover: "/covers/garden.svg",
    episodes: ["1. díl · 31 min", "2. díl · 28 min", "3. díl · 34 min", "4. díl · 30 min", "5. díl · 32 min", "6. díl · 29 min", "7. díl · 35 min", "8. díl · 33 min"],
    collection: "Četby na pokračování",
    themes: ["Rodinné tajemství", "Dětství", "Paměť"],
    detail: "Po letech se Klára vrací do domu, který zdědila po tetě. V zarostlé zahradě nachází stopy dávného příběhu a dopisy, které měly zůstat ukryté. Osmidílná četba propojuje vzpomínky s přítomností.",
  },
  {
    id: "hlas-ve-studiu",
    title: "Hlas ve studiu",
    kind: "Rozhlasová hra",
    category: "Hra",
    year: "2023",
    length: "46 min",
    author: "Ukázkový autor",
    cast: "Ukázkové obsazení",
    description: "Noční technik zachytí na staré nahrávce hlas, který do studia nikdy nepřišel.",
    cover: "/covers/radio-room.svg",
    episodes: ["Hlas ve studiu · 46 min"],
    collection: "Večerní rozhlasové hry",
    themes: ["Rádio", "Samota", "Nevysvětlitelné"],
    detail: "Když zvukař Marek digitalizuje pásky z opuštěného studia, objeví se na jedné z nich hlas, který nikdo z pamětníků nepoznává. Hra o tom, co všechno může zůstat zachyceno mezi dvěma hlasy.",
  },
  {
    id: "modry-dum",
    title: "Dům, který čekal",
    kind: "Povídka",
    category: "Povídka",
    year: "2020",
    length: "24 min",
    author: "Ukázková autorka",
    cast: "Čte ukázkový interpret",
    description: "Krátká povídka o místě, které si pamatuje všechny své obyvatele.",
    cover: "/covers/blue-house.svg",
    episodes: ["Dům, který čekal · 24 min"],
    collection: "Povídky pro tichý večer",
    themes: ["Domov", "Čas", "Vzpomínky"],
    detail: "Do starého domu se po dlouhé době vrací jeho někdejší obyvatel. Každý pokoj v něm probouzí jinou vzpomínku a dům jako by si pamatoval i to, na co lidé zapomněli.",
  },
  {
    id: "dopisy",
    title: "Dopisy z druhého břehu",
    kind: "Četba na pokračování",
    category: "Četba",
    year: "2018",
    length: "6 dílů",
    author: "Ukázkový autor",
    cast: "Čte ukázková interpretka",
    description: "Z krabice po babičce se vynoří dopisy, které měly zůstat neodeslané.",
    cover: "/covers/garden.svg",
    episodes: ["1. díl · 27 min", "2. díl · 30 min", "3. díl · 29 min", "4. díl · 31 min", "5. díl · 28 min", "6. díl · 33 min"],
    collection: "Četby na pokračování",
    themes: ["Dopisy", "Generace", "Rodina"],
    detail: "Krabice odložená na půdě obsahuje dopisy, které babička nikdy neposlala. Každý další list mění rodinné vyprávění a přibližuje dvě generace, které spolu už nemohou mluvit přímo.",
  },
];

export const categories = ["Vše", "Hry", "Četby", "Povídky"];
export const featuredIds = ["nocni-spoj", "hlas-ve-studiu", "zahrada"];
export const imageSource = (path: string) => (process.env.NEXT_PUBLIC_BASE_PATH || "") + path;

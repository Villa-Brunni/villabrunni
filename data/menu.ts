
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  dietary?: string;
};

export type MenuCategory = {
  id: string;
  category: string;
  items: MenuItem[];
  sharedDescription?: string;
  sauces?: string[];
};

export const alacarteMenu: MenuCategory[] = [
  {
    id: "alkuruoat",
    category: "Alkuruoat",
    items: [
      {
        name: "Pane Special",
        description: "Valkosipuli-rosmariini pizzaleipä",
        price: "6,00 €",
      },
      {
        name: "Bruschetta",
        description:
          "Paahdettu leipä, tomaatti, kapris, sipuli, basilika, valkosipuli, parmesan",
        price: "8,00 €",
      },
    ],
  },
  {
    id: "bowlit",
    category: "Bowlit",
    items: [
      { name: "Bowl", description: "", price: "12,90 €" },
      { name: "Tofulla", description: "", price: "14,90 €" },
      { name: "Kanalla", description: "", price: "14,90 €" },
      { name: "Lohilla", description: "", price: "15,90 €" },
      {
        name: "Katkaravulla",
        description: "",
        price: "16,90 €",
      },
    ],
    sharedDescription:
      "Sisältää tummaa riisiä, paahdettua kukkakaalia, hummusta, salaattia, kurkkuja, kirsikkatomaatteja, avokadoa, edamamepapuja, pikkelöityä punasipulia, seesamia, auringonkukansiemeniä, kurpitsansiemeniä",
    sauces: [
      "Sitruskastike",
      "Chilimajoneesi",
      "Talon mango-etikkakastike",
    ],
  },
  {
    id: "uuniruoat",
    category: "Uuniruoat",
    items: [
      {
        name: "Lasagne Della Casa",
        description:
          "Naudan jauheliha, bechamel, tomaatti-kermakastike, mozzarella ja parmesanjuusto",
        price: "14,90 €",
      },
      {
        name: "Cannelloni al Forno",
        description:
          "Täytetty ricotta-pinaattipasta, tomaatti-kermakastike, mozzarella ja parmesanjuusto",
        price: "14,50 €",
      },
      {
        name: "Parmigiano Melanzane",
        description:
          "Munakoiso, basilika, tomaatti-kermakastike, mozzarella ja parmesanjuusto",
        price: "14,90 €",
      },
      {
        name: "Moussaka",
        description:
          "Munakoiso, naudan jauheliha, kesäkurpitsa, peruna, tomaatti-kermakastike, mozzarella ja parmesanjuusto",
        price: "16,90 €",
      },
    ],
  },
  {
    id: "kalat",
    category: "Kalat",
    items: [
      {
        name: "Kuhafile",
        description:
          "Kuhafilettä, grillattu parsa, marinoidut kasvikset, yrttiöljy ja lohkoperuna",
        price: "19,50 €",
        dietary: "L, G",
      },
      {
        name: "Salmone al Hollandaise",
        description:
          "Grillattu lohi, hollandaisekastike, grillattu parsa, marinoidut kasvikset ja lohkoperuna",
        price: "20,50 €",
        dietary: "L, G",
      },
    ],
  },
  {
    id: "lihat",
    category: "Lihat",
    items: [
      {
        name: "Lehtipihvi",
        description:
          "Naudan ulkofileepihvi 200 g, marinoidut kasvikset, ranskanperuna, maustevoi",
        price: "24,50 €",
        dietary: "L, G",
      },
      {
        name: "Villa Brunnin Special Pihvi",
        description:
          "Naudan ulkofileepihvi 200 g, marinoidut kasvikset, lohkoperuna, pestokastike, ruskea kastike",
        price: "25,50 €",
        dietary: "G",
      },
    ],
  },
  {
    id: "le-pizze",
    category: "Le Pizze",
    items: [
      {
        name: "Pizza Diavola",
        description:
          "San Marzano tomaatti, fior di latte mozzarella, nduja, salami pikante, parmesanjuusto ja persilja",
        price: "16,90 €",
      },
      {
        name: "Pizza Di Parma",
        description:
          "San Marzano tomaatti, fior di latte mozzarella, prosciutto, rucola ja buffalomozzarella",
        price: "15,90 €",
      },
      {
        name: "Pizza Con Pollo",
        description:
          "Fior di latte mozzarella, kana, gorgonzola, rucola ja öljy (valkoinen pizza)",
        price: "15,90 €",
      },
      {
        name: "Pizza Tonno e Limone",
        description:
          "San Marzano tomaatti, fior di latte mozzarella, tonnikala, sitruuna ja punasipuli",
        price: "15,90 €",
      },
      {
        name: "Pizza 4 Formaggi",
        description:
          "Fior di latte mozzarella, gorgonzola, parmesanjuusto ja mascarpone (valkoinen pizza)",
        price: "14,90 €",
      },
      {
        name: "Pizza La Finlandese",
        description:
          "San Marzano tomaatti, fior di latte mozzarella, palvikinkku, ananas ja gorgonzola",
        price: "15,90 €",
      },
      {
        name: "Pizza e Scampi",
        description:
          "Fior di latte mozzarella, jättikatkarapu, parmesanjuusto, chili ja persilja (valkoinen pizza)",
        price: "18,90 €",
      },
      {
        name: "Pizza Melanzane",
        description:
          "San Marzano tomaatti, fior di latte mozzarella, munakoiso, basilika, valkosipuli ja parmesanjuusto",
        price: "16,90 €",
      },
      {
        name: "Pizza Cervo",
        description:
          "San Marzano tomaatti, fior di latte mozzarella, poronjauheliha, punasipuli, mascarpone ja rucola",
        price: "18,90 €",
      },
      {
        name: "Pizza Al Salmone",
        description:
          "Fior di latte mozzarella, kylmäsavulohi, punasipuli, smetana-valkosipulikastike ja rucola",
        price: "17,90 €",
      },
      {
        name: "Pizza Brunni Speciale",
        description:
          "Fior di latte mozzarella, gorgonzola, saksanpähkinä, päärynä ja hunaja",
        price: "17,90 €",
      },
    ],
  },
  {
    id: "smash-burgerit",
    category: "Smash Burgerit",
    items: [
      {
        name: "Classic Double Smash Burger",
        description:
          "2 smash-pihviä, cheddar, pikkelöity punasipuli, maustekurkku, burger mayo ja hard cheese mayo",
        price: "12,90 €",
      },
      {
        name: "Bacon Melt Smash Burger",
        description:
          "2 smash-pihviä, cheddar, rapea pekoni, pikkelöity punasipuli, maustekurkku, Rolling Ross ja Creamy Bacon Sauce",
        price: "13,90 €",
      },
      {
        name: "Forest Mushroom Smash",
        description:
          "2 smash-pihviä, sieniä, cheddar, pikkelöity punasipuli, maustekurkku, mushroom mayo",
        price: "14,90 €",
      },
      {
        name: "Red Hot Boss",
        description:
          "2 smash-pihviä, cheddar, jalapeño, pikkelöity punasipuli, maustekurkku, Red Hot Chili Mayo",
        price: "13,90 €",
      },
      {
        name: "Smokey BBQ Honey",
        description:
          "2 smash-pihviä, cheddar, pikkelöity punasipuli, maustekurkku, karamellisoitu sipuli, Sweet Smokey BBQ Honey",
        price: "13,90 €",
      },
    ],
  },
  {
    id: "kana-burgerit",
    category: "Kana Burgerit",
    items: [
      {
        name: "Hot Chicken",
        description:
          "Rapeaa kanafileetä, salaatti, maustekurkku, pikkelöity punasipuli, Creamy Style Sriracha, Jalapeño Mayo",
        price: "11,90 €",
      },
      {
        name: "Southern Crunch",
        description:
          "Rapeaa kanafileetä, coleslaw, maustekurkku, Honey Mustard, Burger Mayo",
        price: "12,90 €",
      },
    ],
  },
];

export const burgerExtras = [
  {
    name: "Ateria (limu ja ranskalaiset)",
    price: "5,00 €",
  },
  {
    name: "Gluteeniton sämpylä",
    price: "3,00 €",
  },
  {
    name: "Lisäpihvi",
    price: "4,00 €",
  },
  {
    name: "Lisäpekoni",
    price: "2,50 €",
  },
  {
    name: "Lisädippi",
    price: "2,00 €",
  },
];

export const burgerInformation = [
  "Hankimme hampurilaissämpylän alueen paikalliselta leipomolta.",
  "Voit vaihtaa haluamasi pihvin (naudanlihapihvi / plantbasedpihvi).",
  "Saadaksesi lisätietoja ruoan ja ainesosien mahdollisista allergeeneista, ota yhteyttä henkilökuntaamme.",
  "Käyttämämme naudanliha on kotimaista eikä pakastettua, ja juustomme on EU:sta peräisin olevaa.",
];

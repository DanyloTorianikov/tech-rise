export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: ITranslation;
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    BBD: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[]
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    eng: string;
  };
  translations: {
    ara: ITranslation;
    bre: ITranslation;
    ces: ITranslation;
    cym: ITranslation;
    deu: ITranslation;
    est: ITranslation;
    fin: ITranslation;
    fra: ITranslation;
    hrv: ITranslation;
    hun: ITranslation;
    ita: ITranslation;
    jpn: ITranslation;
    kor: ITranslation;
    nld: ITranslation;
    per: ITranslation;
    pol: ITranslation;
    por: ITranslation;
    rus: ITranslation;
    slk: ITranslation;
    spa: ITranslation;
    swe: ITranslation;
    tur: ITranslation;
    urd: ITranslation;
    zho: ITranslation;
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    eng: IDemonyms;
    fra: IDemonyms
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  },
  population: number;
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: IFlag;
  coatOfArms: IFlag;
  startOfWeek: string;
  capitalInfo: {
    latlng: string[]
  };
  postalCode: {
    format: string;
    regex: string;
  };
}

interface ITranslation {
  official: string;
  common: string;
}

interface IDemonyms {
  f: string;
  m: string;
}

interface IFlag {
  png: string;
  svg: string;
}
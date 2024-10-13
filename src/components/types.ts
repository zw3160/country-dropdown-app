export interface flags {
    svg: string;
    png: string;
}

export interface currency {
    symbol: string;
    code: string;
    name: string;
}

export interface Country {
    name: string;
    capital: string;
    region: string;
    flags: flags;
    currencies: currency[];
  };

  export interface CountryRow {
    value: string;
    label: JSX.Element;
  }
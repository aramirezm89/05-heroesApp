export interface Heroe {
  id: ID;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export interface ID {
  timestamp: number;
  machine: number;
  pid: number;
  increment: number;
  creationTime: Date;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

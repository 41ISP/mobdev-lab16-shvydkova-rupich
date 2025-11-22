export interface IAuthor {
  name: string;
  bio: Bio;
  personal_name: string;
  remote_ids: Remoteids;
  alternate_names: string[];
  links: Link[];
  photos: number[];
  fuller_name: string;
  death_date: string;
  source_records: string[];
  type: Type;
  birth_date: string;
  key: string;
  latest_revision: number;
  revision: number;
  created: Bio;
  last_modified: Bio;
}

export interface Link {
  title: string;
  url: string;
  type: Type;
}

export interface Type {
  key: string;
}
export interface Remoteids {
  viaf: string;
  storygraph: string;
  amazon: string;
  wikidata: string;
  isni: string;
  goodreads: string;
  project_gutenberg: string;
  musicbrainz: string;
  bookbrainz: string;
  imdb: string;
  lc_naf: string;
  librarything: string;
  librivox: string;
  opac_sbn: string;
}

export interface Bio {
  type: string;
  value: string;
}
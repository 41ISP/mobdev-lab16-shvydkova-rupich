export interface IWork {
  first_publish_date: string;
  title: string;
  covers: number[];
  lc_classifications: string[];
  key: string;
  authors: Author2[];
  dewey_number: string[];
  type: Author;
  subjects: string[];
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: Created;
}

export interface Created {
  type: string;
  value: string;
}

export interface Author2 {
  author: Author;
  type: Author;
}

export interface Author {
  key: string;
}
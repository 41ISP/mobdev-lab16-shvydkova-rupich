export interface IBookDescription {
  description: Description;
  key: string;
  title: string;
  subtitle: string;
  covers: number[];
  authors: Array<{ author: { key: string } }>;
  first_publish_date: string;
  publish_date: string;
  created: { value: string };
  revision: number;
  number_of_pages: number;
  isbn: string[];
  subjects: string[];
  subject_people: string[];
  subject_places: string[];
  subject_times: string[];
  type: string;
  value: string;
}
export interface Author {
  type: Type;
  author: Type;
}

export interface Type {
  key: string;
}

export interface Description {
  type: string;
  value: string;
}

export interface IAuthorName {
  key: string;
  name: string;
}


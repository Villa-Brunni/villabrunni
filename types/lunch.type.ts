export type Weekday =
  | "maanantai"
  | "tiistai"
  | "keskiviikko"
  | "torstai"
  | "perjantai";

export type LunchItem = {
  name: string;
  description?: string;
};

export type LunchDay = {
  day: Weekday;
  label: string;
  items: LunchItem[];
};
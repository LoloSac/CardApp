export type CardTheme = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
};

export type CardStyleDefinition = {
  id: string;
  name: string;
  description: string;
  className: string;
};

export type CardSizeStandard = {
  width: number;
  height: number;
  aspectRatio: string;
};

export type CardData = {
  name: string;
  type: string;
  cost: string;
  attack: string;
  defense: string;
  effect: string;
  flavor: string;
  imageUrl: string;
  themeId: string;
  styleId: string;
};

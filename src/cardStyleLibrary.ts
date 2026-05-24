import type { CardSizeStandard, CardStyleDefinition } from './types';

export const defaultCardStyleId = 'html-fantasy';

export const cardSizeStandard: CardSizeStandard = {
  width: 260,
  height: 390,
  aspectRatio: '2 / 3',
};

export const cardStyles: CardStyleDefinition[] = [
  {
    id: defaultCardStyleId,
    name: 'HTML Fantasy',
    description: 'Fantasy card style from the reference HTML.',
    className: 'card-template--html-fantasy',
  },
  {
    id: 'large-scroll',
    name: 'Scroll Panel',
    description: 'Parchment-panel variant using the shared card size standard.',
    className: 'card-template--large-scroll',
  },
];

export const getCardStyleById = (styleId: string): CardStyleDefinition =>
  cardStyles.find((style) => style.id === styleId) ?? cardStyles[0];

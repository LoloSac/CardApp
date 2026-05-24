import type { CardTheme } from './types';

export const cardThemes: CardTheme[] = [
  {
    id: 'twilight',
    name: 'Twilight',
    primary: '#3d2a6e',
    secondary: '#5c3d9e',
    accent: '#d8ccff',
    text: '#ffffff',
  },
  {
    id: 'crimson',
    name: 'Crimson',
    primary: '#6e2a2a',
    secondary: '#9e3d3d',
    accent: '#ffc8c8',
    text: '#ffffff',
  },
  {
    id: 'forest',
    name: 'Forest',
    primary: '#1e4d2b',
    secondary: '#2e7a42',
    accent: '#c9f2d1',
    text: '#ffffff',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    primary: '#1a3d6e',
    secondary: '#2a5fa0',
    accent: '#c6dcff',
    text: '#ffffff',
  },
  {
    id: 'amber',
    name: 'Amber',
    primary: '#5c3d0a',
    secondary: '#8c6010',
    accent: '#f5d38a',
    text: '#ffffff',
  },
  {
    id: 'slate',
    name: 'Slate',
    primary: '#2a2d3a',
    secondary: '#40455a',
    accent: '#d1d5e4',
    text: '#ffffff',
  },
  {
    id: 'rose',
    name: 'Rose',
    primary: '#6e2a4a',
    secondary: '#9e3d6a',
    accent: '#ffc6df',
    text: '#ffffff',
  },
];

export const getThemeById = (themeId: string): CardTheme =>
  cardThemes.find((theme) => theme.id === themeId) ?? cardThemes[0];

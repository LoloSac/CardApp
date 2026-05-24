import type { CardTheme } from '../types';

type ColorPickerProps = {
  themes: CardTheme[];
  selectedThemeId: string;
  onChange: (themeId: string) => void;
};

export function ColorPicker({
  themes,
  selectedThemeId,
  onChange,
}: ColorPickerProps) {
  return (
    <fieldset className="color-picker">
      <legend>Card color</legend>
      <div className="color-picker__options">
        {themes.map((theme) => (
          <label
            className={`color-picker__option ${
              selectedThemeId === theme.id ? 'is-selected' : ''
            }`}
            key={theme.id}
          >
            <input
              checked={selectedThemeId === theme.id}
              name="card-theme"
              onChange={() => onChange(theme.id)}
              type="radio"
              value={theme.id}
            />
            <span
              aria-hidden="true"
              className="color-picker__swatch"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              }}
            />
            <span>{theme.name}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

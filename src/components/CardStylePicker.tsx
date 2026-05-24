import type { CardStyleDefinition } from '../types';

type CardStylePickerProps = {
  selectedStyleId: string;
  styles: CardStyleDefinition[];
  onChange: (styleId: string) => void;
};

export function CardStylePicker({
  selectedStyleId,
  styles,
  onChange,
}: CardStylePickerProps) {
  return (
    <label className="form-grid__wide">
      Card style
      <select
        onChange={(event) => onChange(event.target.value)}
        value={selectedStyleId}
      >
        {styles.map((style) => (
          <option key={style.id} value={style.id}>
            {style.name}
          </option>
        ))}
      </select>
    </label>
  );
}

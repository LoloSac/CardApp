import type { CardData, CardStyleDefinition, CardTheme } from '../types';
import { ColorPicker } from './ColorPicker';
import { CardStylePicker } from './CardStylePicker';
import { ImageUploader } from './ImageUploader';

type CardFormProps = {
  card: CardData;
  cardStyles: CardStyleDefinition[];
  themes: CardTheme[];
  onCardChange: (nextCard: CardData) => void;
};

export function CardForm({
  card,
  cardStyles,
  themes,
  onCardChange,
}: CardFormProps) {
  const updateField = (field: keyof CardData, value: string) => {
    onCardChange({ ...card, [field]: value });
  };

  return (
    <form className="card-form">
      <div className="form-grid">
        <label>
          Card name
          <input
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Ashen Vanguard"
            type="text"
            value={card.name}
          />
        </label>

        <label>
          Type / Category
          <input
            onChange={(event) => updateField('type', event.target.value)}
            placeholder="Creature - Knight"
            type="text"
            value={card.type}
          />
        </label>

        <label>
          Cost / Mana
          <input
            onChange={(event) => updateField('cost', event.target.value)}
            placeholder="3"
            type="text"
            value={card.cost}
          />
        </label>

        <label>
          Attack
          <input
            onChange={(event) => updateField('attack', event.target.value)}
            placeholder="4"
            type="text"
            value={card.attack}
          />
        </label>

        <label>
          Defense
          <input
            onChange={(event) => updateField('defense', event.target.value)}
            placeholder="2"
            type="text"
            value={card.defense}
          />
        </label>

        <label className="form-grid__wide">
          Effect / Description
          <textarea
            onChange={(event) => updateField('effect', event.target.value)}
            placeholder="When this card enters play, draw one card."
            rows={5}
            value={card.effect}
          />
        </label>

        <label className="form-grid__wide">
          Flavor text
          <textarea
            onChange={(event) => updateField('flavor', event.target.value)}
            placeholder="The old banners still burn at dawn."
            rows={3}
            value={card.flavor}
          />
        </label>

        <CardStylePicker
          onChange={(styleId) => updateField('styleId', styleId)}
          selectedStyleId={card.styleId}
          styles={cardStyles}
        />
      </div>

      <ImageUploader
        imageUrl={card.imageUrl}
        onImageChange={(imageUrl) => updateField('imageUrl', imageUrl)}
      />

      <ColorPicker
        onChange={(themeId) => updateField('themeId', themeId)}
        selectedThemeId={card.themeId}
        themes={themes}
      />
    </form>
  );
}

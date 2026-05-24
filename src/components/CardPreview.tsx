import type { RefObject } from 'react';
import type { CardData, CardStyleDefinition, CardTheme } from '../types';
import { CardTemplate } from './CardTemplate';

type CardPreviewProps = {
  card: CardData;
  cardStyle: CardStyleDefinition;
  theme: CardTheme;
  previewRef: RefObject<HTMLDivElement | null>;
};

export function CardPreview({
  card,
  cardStyle,
  theme,
  previewRef,
}: CardPreviewProps) {
  return (
    <div className="preview-shell">
      <div className="preview-card-target" ref={previewRef}>
        <CardTemplate card={card} cardStyle={cardStyle} theme={theme} />
      </div>
    </div>
  );
}

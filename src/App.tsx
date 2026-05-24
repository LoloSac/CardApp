import { useMemo, useRef, useState } from 'react';
import {
  cardStyles,
  defaultCardStyleId,
  getCardStyleById,
} from './cardStyleLibrary';
import { cardThemes, getThemeById } from './cardThemes';
import { CardForm } from './components/CardForm';
import { CardPreview } from './components/CardPreview';
import { ExportButton } from './components/ExportButton';
import type { CardData } from './types';

const emptyCard: CardData = {
  name: '',
  type: '',
  cost: '',
  attack: '',
  defense: '',
  effect: '',
  flavor: '',
  imageUrl: '',
  themeId: 'twilight',
  styleId: defaultCardStyleId,
};

function App() {
  const [card, setCard] = useState<CardData>(emptyCard);
  const previewRef = useRef<HTMLDivElement>(null);
  const selectedTheme = useMemo(() => getThemeById(card.themeId), [card.themeId]);
  const selectedCardStyle = useMemo(
    () => getCardStyleById(card.styleId),
    [card.styleId],
  );
  const resetCard = () => setCard(emptyCard);

  return (
    <main className="app-shell">
      <section className="app-header">
        <div>
          <p className="eyebrow">Board game card maker</p>
          <h1>Create a custom fantasy card</h1>
        </div>
        <div className="app-actions">
          <ExportButton targetRef={previewRef} />
          <button className="button button--secondary" onClick={resetCard} type="button">
            New card
          </button>
        </div>
      </section>

      <section className="editor-layout">
        <aside className="editor-panel" aria-label="Card fields">
          <CardForm
            card={card}
            cardStyles={cardStyles}
            onCardChange={setCard}
            themes={cardThemes}
          />
        </aside>

        <section className="preview-panel" aria-label="Live card preview">
          <CardPreview
            card={card}
            cardStyle={selectedCardStyle}
            previewRef={previewRef}
            theme={selectedTheme}
          />
        </section>
      </section>
    </main>
  );
}

export default App;

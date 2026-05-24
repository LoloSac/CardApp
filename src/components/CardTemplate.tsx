import type { CSSProperties } from 'react';
import { cardSizeStandard } from '../cardStyleLibrary';
import type { CardData, CardStyleDefinition, CardTheme } from '../types';
import './CardTemplate.css';

type CardTemplateProps = {
  card: CardData;
  cardStyle: CardStyleDefinition;
  theme: CardTheme;
};

export function CardTemplate({ card, cardStyle, theme }: CardTemplateProps) {
  return (
    <article
      className={`card-template ${cardStyle.className}`}
      style={
        {
          '--card-background': `linear-gradient(160deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          '--card-accent': theme.accent,
          '--card-text': theme.text,
          '--card-standard-width': `${cardSizeStandard.width}px`,
          '--card-standard-height': `${cardSizeStandard.height}px`,
          '--card-scale': cardSizeStandard.width / 200,
        } as CSSProperties
      }
    >
      <div className="card-template__canvas">
        <div className="card-template__bg" />
        <div className="card-template__border" />
        <div className="card-template__corner card-template__corner--tl" />
        <div className="card-template__corner card-template__corner--tr" />
        <div className="card-template__corner card-template__corner--bl" />
        <div className="card-template__corner card-template__corner--br" />

        <header className="card-template__header">
          <h2 className="card-template__name">{card.name || 'Card Name'}</h2>
          <span className="card-template__cost">{card.cost || '0'}</span>
        </header>

        <div className="card-template__type">
          {card.type || 'Type - Category'}
        </div>

        <div className="card-template__image">
          {card.imageUrl ? (
            <img alt="Card art" src={card.imageUrl} />
          ) : (
            <div className="card-template__image-placeholder">
              <span>Card Art</span>
            </div>
          )}
        </div>

        <section className="card-template__text">
          <p className="card-template__effect">
            {card.effect || 'Your card effect text will appear here.'}
          </p>
          {card.flavor ? (
            <p className="card-template__flavor">{card.flavor}</p>
          ) : null}
        </section>

        <footer className="card-template__footer">
          <div className="card-template__stat">
            <span className="card-template__stat-value">{card.attack || '0'}</span>
            <span className="card-template__stat-label">Atk</span>
          </div>
          <span className="card-template__divider" aria-hidden="true">
            *
          </span>
          <div className="card-template__stat">
            <span className="card-template__stat-value">{card.defense || '0'}</span>
            <span className="card-template__stat-label">Def</span>
          </div>
        </footer>
      </div>
    </article>
  );
}

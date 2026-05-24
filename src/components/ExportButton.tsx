import type { RefObject } from 'react';
import { toPng } from 'html-to-image';

type ExportButtonProps = {
  targetRef: RefObject<HTMLElement | null>;
};

export function ExportButton({ targetRef }: ExportButtonProps) {
  const handleExport = async () => {
    if (!targetRef.current) {
      return;
    }

    const dataUrl = await toPng(targetRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement('a');
    link.download = 'custom-board-game-card.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <button className="button button--primary" onClick={handleExport} type="button">
      Export PNG
    </button>
  );
}

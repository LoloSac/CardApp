import type { ChangeEvent } from 'react';
import { useEffect, useRef } from 'react';

type ImageUploaderProps = {
  imageUrl: string;
  onImageChange: (imageUrl: string) => void;
};

export function ImageUploader({ imageUrl, onImageChange }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!imageUrl && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [imageUrl]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onImageChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-uploader">
      <label htmlFor="card-image">Card image</label>
      <input
        accept="image/*"
        id="card-image"
        onChange={handleFileChange}
        ref={inputRef}
        type="file"
      />
      {imageUrl ? (
        <button
          className="button button--ghost"
          onClick={() => onImageChange('')}
          type="button"
        >
          Remove image
        </button>
      ) : null}
    </div>
  );
}

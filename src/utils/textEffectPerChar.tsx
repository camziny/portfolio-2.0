import { TextEffect } from "./textEffects";

type TextEffectPerCharProps = {
  text: string;
  className?: string;
};

export function TextEffectPerChar({ text, className }: TextEffectPerCharProps) {
  const processedText = text.split(" ").join("\u00A0");

  return (
    <div className={className}>
      <TextEffect per="char" preset="fade">
        {processedText}
      </TextEffect>
    </div>
  );
}

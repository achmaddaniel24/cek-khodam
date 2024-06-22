import { prepositions } from "./word/prepositions";
import { afterpieces } from "./word/afterpieces";

function getRandomItem(array: string[]): string {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateRandomSentence(): string {
  const randomPreposition = getRandomItem(prepositions);
  const randomAfterpiece =
    randomPreposition === "tidak ada" ? "" : " " + getRandomItem(afterpieces);

  return `${randomPreposition}${randomAfterpiece}`;
}

import { Input, parseInput } from './input';
import { PAPER, ROCK, SCISSORS, score, Weapon } from './game';

const moves: Record<Input, Weapon> = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS,
  X: ROCK,
  Y: PAPER,
  Z: SCISSORS,
} as const;

export function solvePart1(input: string): number {
  const parsedInput = parseInput(input);

  const rounds = parsedInput.map(([opponent, me]) => {
    const myMove = moves[me];
    const opponentMove = moves[opponent];

    return score(myMove, opponentMove);
  });

  return rounds.reduce((a, b) => a + b, 0);
}

import { Move, PAPER, parseInput, play, ROCK, SCISSORS, Weapon } from './input';

const moves: Record<Move, Weapon> = {
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

    const result = play(myMove, opponentMove);

    return result * 3 + myMove + 1;
  });

  return rounds.reduce((a, b) => a + b, 0);
}

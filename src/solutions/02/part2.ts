import { parseInput } from './input';
import { PAPER, play, Result, ROCK, SCISSORS, score, Weapon } from './game';

const moves: { [x: string]: Weapon } = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS,
} as const;

const results: { [x: string]: Result } = {
  X: ROCK,
  Y: PAPER,
  Z: SCISSORS,
} as const;

export function solvePart2(input: string): number {
  const parsedInput = parseInput(input);

  const rounds = parsedInput.map(([opponent, outcome]) => {
    const opponentMove: Weapon = moves[opponent] ?? 0;
    const result = results[outcome];

    const myMove =
      [ROCK, PAPER, SCISSORS].find(
        (move) => play(move as Weapon, opponentMove) === result
      ) ?? 0;

    return score(myMove as Weapon, opponentMove);
  });

  return rounds.reduce((a, b) => a + b, 0);
}

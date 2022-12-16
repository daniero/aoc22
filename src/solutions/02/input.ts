export type Move = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z';

export function parseInput(input: string): Move[][] {
  const lines = input.trim().split(/\n/);
  return lines.map((line) => line.split(' ') as Move[]);
}

export const ROCK = 0;
export const PAPER = 1;
export const SCISSORS = 2;
export type Weapon = typeof ROCK | typeof PAPER | typeof SCISSORS;

export const LOSE = 0;
export const DRAW = 1;
export const WIN = 2;
export type Result = typeof LOSE | typeof DRAW | typeof WIN;

export function play(a: Weapon, b: Weapon): Result {
  return ((4 + a - b) % 3) as Result;
}

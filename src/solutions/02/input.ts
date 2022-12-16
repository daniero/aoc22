export type Input = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z';

export function parseInput(input: string): Input[][] {
  const lines = input.trim().split(/\n/);
  return lines.map((line) => line.split(' ') as Input[]);
}

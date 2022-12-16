import { ChangeEvent, useState } from 'react';
import design from '../design.module.css';
import sampleInput from './sample-input.txt?raw';

/* eslint-disable @typescript-eslint/no-non-null-assertion */

function parseInput(input: string): number[][] {
  return input
    .trim()
    .split('\n')
    .map((line) => [...line.match(/\d+/g)!].map((n) => parseInt(n)));
}

function solvePart1(input: string): number {
  return parseInput(input)
    .map(([a, b, c, d]) => (a <= c && b >= d) || (c <= a && d >= b))
    .reduce((sum, b) => (b ? sum + 1 : sum), 0);
}

export default function Day04(): JSX.Element {
  const [input, setInput] = useState(sampleInput);
  const [answer, setAnswer] = useState<number | null>(null);

  return (
    <>
      <h1>Day 3: Rucksack Reorganization</h1>

      <div className={design.solution}>
        <div>
          <label htmlFor="input">Input</label>
          <br />
          <textarea
            id="input"
            rows={10}
            value={input}
            onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInput(e.target.value)
            }
          />
        </div>
        <div>
          <button onClick={() => setAnswer(solvePart1(input))}>Part 1</button>
          {answer !== null && <pre>{JSON.stringify(answer, undefined, 2)}</pre>}
        </div>
      </div>
    </>
  );
}

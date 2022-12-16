import { ChangeEvent, useState } from 'react';
import design from '../design.module.css';
import sampleInput from './sample-input.txt?raw';

function priority(c: string): number {
  if (c === c.toLowerCase()) {
    return c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  } else {
    return c.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
  }
}

function solvePart1(input: string): any {
  return input
    .split('\n')
    .flatMap((line) => {
      const a = [...line.substring(0, line.length / 2)];
      const b = [...line.substring(line.length / 2)];
      return [...new Set(a)].filter((c) => b.includes(c));
    })
    .map(priority)
    .reduce((a, b) => a + b, 0);
}

export default function Day03(): JSX.Element {
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

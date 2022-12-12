import { ChangeEvent, useState } from 'react';
import sampleInput from './sample-input.txt?raw';

function solvePart1(input: string): string {
  const totals = getTotals(input);

  return totals.reduce((a, b) => Math.max(a, b), 0).toString();
}

function solvePart2(input: string): string {
  const totals = getTotals(input);

  return totals
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, 3)
    .reduce((a, b) => a + b, 0)
    .toString();
}

function getTotals(input: string): number[] {
  return input
    .trim()
    .split('\n\n')
    .map((chunk) =>
      chunk
        .split('\n')
        .map((line) => parseInt(line))
        .reduce((a, b) => a + b, 0)
    );
}

export default function Day01(): JSX.Element {
  const [input, setInput] = useState(sampleInput);
  const [answerA, setAnswerA] = useState<string | null>(null);
  const [answerB, setAnswerB] = useState<string | null>(null);

  return (
    <>
      <h1>Day 1: Calorie Counting</h1>

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
      <br />
      <button onClick={() => setAnswerA(solvePart1(input))}>Part 1</button>
      <button onClick={() => setAnswerB(solvePart2(input))}>Part 2</button>

      {answerA !== null && <p>Answer 1: {answerA}</p>}
      {answerB !== null && <p>Answer 2: {answerB}</p>}
    </>
  );
}

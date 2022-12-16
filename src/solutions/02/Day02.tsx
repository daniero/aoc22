import { ChangeEvent, useEffect, useState } from 'react';
import design from './design.module.css';
import sampleInput from './sample-input.txt?raw';
import { solvePart1 } from './part1';

export default function Day02(): JSX.Element {
  const [input, setInput] = useState(sampleInput);
  const [answer, setAnswer] = useState<any>(null);

  useEffect(() => {
    solvePart1(input);
  }, [input]);

  return (
    <>
      <h1>Day 2: Rock Paper Scissors</h1>

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

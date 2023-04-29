/// <reference types="chrome" />
import './MyDiv.css';

import { useState } from 'react';

type ComponentProps = {
  className: string;
  id: string;
  onClick?: any;
  word: string;
};

function MyDiv({ className, id, onClick, word }: ComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={'MyDiv ' + className}
      role="img"
      aria-describedby={id}
      onClick={(e) => {
        onClick(e);
        setCount(count + 1);
      }}
    >
      {word}: {count}
    </div>
  );
}

export default MyDiv;

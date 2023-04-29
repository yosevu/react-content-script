/// <reference types="chrome" />

import { useEffect, useState } from 'react';
import MyDiv from '../components/MyDiv';
import './App.css';

type ComponentProps = {
  word?: string;
};

function App({ word: wordProp = '' }: ComponentProps) {
  const list = [1, 2, 3];

  const [word, setWord] = useState(wordProp);
  const [promisedData, setPromisedData] = useState({});

  // ПОСТАВИТЬ на ОБРАБОТЧИК СООБЩЕНИЯ или кастомного события 
  setTimeout(() => {
    setWord('kasha-inside');
  }, 5000);

  const loadData = async (word: string) => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const json = await res.json();

    setPromisedData(json);
  };

  useEffect(() => {
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    console.log(`word is now "${word}"`);

    if (word) {
      loadData(word);
    }
  }, [word]);

  const handleClick = async (event: React.MouseEvent<HTMLElement>, index: number) => {
    console.log('You clicked me!', { index, event });
  };

  return (
    <div className="App">
      <header className="App-header">
        {list.map((el: number, index: number) => (
          <MyDiv
            key={index}
            className={'App-logo-' + (index + 1)}
            id={String(index)}
            onClick={(e: any) => handleClick(e, index)}
            word={word}
          />
        ))}
        <pre className="MyDiv-data">{JSON.stringify(promisedData, null, 2)}</pre>

        <p>I'm a Content Script!</p>
      </header>
    </div>
  );
}

export default App;

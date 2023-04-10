import React, { useEffect, useState } from "react";
import Game from "./Components/Game";
import GameOver from "./Components/GameOver";

let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
alphabet = alphabet.split('');

function App() {
  const [currentLetter, setCurrentLetter] = useState("A"); // текущая буква
  const [randomLetters, setRandomLetters] = useState([]); // массив рандомных букв
  const [timer, setTimer] = useState(0); // таймер
  const [allTime, setAllTime] = useState(0);
  const [startTime, setStartTime] = useState(0); // время начала игры
  const [gameOver, setGameOver] = useState(false);

  // Запуск таймера при начале игры

  useEffect(() => {
    if (!gameOver) {
      getRandomLetters()
      setStartTime(Date.now());
      const interval = setInterval(() => {
        setTimer(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameOver, startTime]);

  const getRandomLetters = () => {
    const count = 15; // количество случайных элементов
    const shuffledArray = alphabet.sort(() => 0.5 - Math.random());
    const selectedElements = [currentLetter, shuffledArray.slice(0, count)];
    setRandomLetters(selectedElements);
  };

  // Обработчик нажатия на букву
  const handleLetterClick = letter => {
    if (letter === alphabet[0]) {
      if (letter === "Я") {
        // Если нажата последняя буква, завершаем игру
        setGameOver(true);
        setAllTime(timer);
      } else {
        getRandomLetters();
        setCurrentLetter(alphabet[0]);
      }
    }
  };

  // Обработчик окончания игры
  const handleGameOver = () => {
    // Записываем результат в БД (localStorage в данном случае)
    const endTime = Date.now();
    const elapsedTime = Math.floor((endTime - startTime) / 1000);
    localStorage.setItem("gameResult", elapsedTime);
  };

  return (
    <div className="App flex flex-col gap-4 items-center justify-center min-h-screen text-center text-[14px] font-mono max-w-3xl mx-auto p-4">
      {!gameOver ? (
        <Game handleLetterClick={handleLetterClick} randomLetters={randomLetters} currentLetter={currentLetter} timer={timer}  />
      ) : (
        <GameOver handleGameOver={handleGameOver} allTime={allTime} />
      )}
    </div>
  );
}

export default App;

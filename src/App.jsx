import React, { useEffect, useState } from "react";
import Game from "./Components/Game";
import GameOver from "./Components/GameOver";
import MyBtn from "./UI/MyBtn";
import axios from "axios";
import SubmitResultModal from "./Components/SubmitResultModal";
import AllResultsModal from "./Components/AllResultsModal";

function App() {
  const [alphabet, setAlphabet] = useState([
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
  ]);
  const updatedAlphabet = [...alphabet];
  const [currentLetter, setCurrentLetter] = useState("А");
  const [randomLetters, setRandomLetters] = useState([]);
  const [startTime, setStartTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [allTime, setAllTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [resultModal, setResultModal] = useState(false);
  const [allResultsModal, setAllResultsModal] = useState(false);

  const [resultsData, setResultsData] = useState([]);
  const [newResultName, setNewResultName] = useState([]);

  useEffect(() => {
    axios
      .get("https://64355b0983a30bc9ad5e75ef.mockapi.io/results")
      .then(response => {
        setResultsData(response.data.reverse());
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!gameOver) {
      getRandomLetters();
      setStartTime(Date.now());
      if (gameStarted) {
        const interval = setInterval(() => {
          setTimer(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);
        return () => clearInterval(interval);
      }
    }
  }, [gameStarted, gameOver, startTime]);

  const getRandomLetters = () => {
    const count = 16;
    const randomWithCurrent = [
      updatedAlphabet[0],
      ...updatedAlphabet.slice(1).sort(() => 0.5 - Math.random()),
    ];
    const selectedElements = randomWithCurrent.slice(0, count);
    const shuffledArray = selectedElements.sort(() => 0.5 - Math.random());
    setRandomLetters(shuffledArray);
  };

  const handleLetterClick = letter => {
    if (letter === currentLetter) {
      switch (letter) {
        case "А": {
          setGameStarted(true);
          updatedAlphabet.shift();
          setAlphabet(updatedAlphabet);
          setCurrentLetter(updatedAlphabet[0]);
          getRandomLetters();
          break;
        }
        case "Я": {
          setAllTime(timer);
          setGameOver(true);
          break;
        }
        case currentLetter: {
          updatedAlphabet.shift();
          setAlphabet(updatedAlphabet);
          setCurrentLetter(updatedAlphabet[0]);
          getRandomLetters();
          break;
        }
        default: {
          console.log("Error");
        }
      }
    }
  };

  const onResultModal = () => {
    setResultModal(!resultModal);
  };

  const onAllResultsModal = () => {
    setAllResultsModal(!allResultsModal);
  };

  const onSubmitResult = e => {
    e.preventDefault();
    const newResult = {
      id: Date.now(),
      name: newResultName,
      result: `${allTime}c.`,
    };
    if (newResultName.length) {
      axios
        .post("https://64355b0983a30bc9ad5e75ef.mockapi.io/results", newResult)
        .then(response => {
          setResultsData([newResult, response.data]);
          setNewResultName("");
          setResultModal(false);
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const onInputChange = event => {
    setNewResultName(event.target.value);
  };

  return (
    <div className="App flex flex-col gap-4 items-center justify-center min-h-screen text-center text-[14px] font-mono max-w-3xl mx-auto p-4">
      {!gameOver ? (
        <Game
          handleLetterClick={handleLetterClick}
          randomLetters={randomLetters}
          currentLetter={currentLetter}
          timer={timer}
          gameStarted={gameStarted}
        />
      ) : (
        <GameOver
          allTime={allTime}
          modal={resultModal}
          setModal={setResultModal}
          onResultModal={onResultModal}
        />
      )}
      <MyBtn onClick={onAllResultsModal}>Все результаты</MyBtn>
      <SubmitResultModal
        modal={resultModal}
        setModal={setResultModal}
        onSubmit={onSubmitResult}
        allTime={allTime}
        onInputChange={onInputChange}
      />
      <AllResultsModal
        modal={allResultsModal}
        setModal={setAllResultsModal}
        resultsData={resultsData}
      />
    </div>
  );
}

export default App;

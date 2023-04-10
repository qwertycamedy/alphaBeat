import React from "react";
import MyTitle from "../UI/MyTitle";
import MyBtn from "../UI/MyBtn";

const Game = ({ handleLetterClick, randomLetters, currentLetter, timer }) => {
  return (
    <>
      {/* при старте менять заголовок на нужную букву */}
      <MyTitle>От А до Я</MyTitle>
      {/* убрать описание игры в модалку */}
      <p className="max-w-lg">
        Нажимайте на буквы настолько быстро, насколько это возможно! Таймер
        будет запущен автоматически.
      </p>
      <div className="grid grid-cols-4 gap-2">
        {
            randomLetters.map(letter => (
                letter ? (
                    <button
                      className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-blue-400 text-white text-[24px]"
                      onClick={() => handleLetterClick(currentLetter)}
                      key={letter}
                    >
                      {letter}
                    </button>
                ) : (
                    <div
                      className="col-span-1 rounded-xl flex w-[60px] h-[60px] bg-slate-400"
                      onClick={() => handleLetterClick(currentLetter)}
                      key={letter}
                    >
                    </div>
                )
            ))
        }
      </div>
      <p className="text-[18px]">Таймер: {timer}с.</p>

      <MyBtn bg={'bg-yellow-400'} onClick={() => window.location.reload()}>Начать сначала</MyBtn>
    </>
  );
};

export default Game;

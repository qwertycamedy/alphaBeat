import React from "react";
import MyTitle from "../UI/MyTitle";
import MyBtn from "../UI/MyBtn";

const Game = ({
  gameStarted,
  handleLetterClick,
  randomLetters,
  currentLetter,
  timer,
}) => {
  return (
    <>
      {/* при старте менять заголовок на нужную букву */}
      <MyTitle>От А до Я</MyTitle>
      {/* убрать описание игры в модалку */}

      {!gameStarted ? (
        <p className="max-w-lg h-[65px] flex items-center">
          Нажимайте на буквы настолько быстро, насколько это возможно! Таймер
          будет запущен автоматически.
        </p>
      ) : (
        <p className="max-w-lg h-[65px] flex items-center">
          Текущая буква: {currentLetter}
        </p>
      )}
      <div className="relative z-10">
      <div className="grid grid-cols-4 grid-rows-4 gap-2 w-[264px] h-[264px]">
        {randomLetters.map(letter =>
            <button
              className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-blue-400 text-white text-[24px]"
              onClick={() => handleLetterClick(letter)}
              key={letter}
            >
              {letter}
            </button>
            )}
      </div>
      <div className="absolute -z-10 top-0 left-0 w-[264px] h-[264px] grid grid-cols-4 grid-rows-4 gap-2">
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
        <div className="col-span-1 rounded-xl flex items-center justify-center w-[60px] h-[60px] bg-slate-400"></div>
      </div>
      </div>
      <p className="text-[18px]">Таймер: {timer}с.</p>

      <MyBtn bg={"bg-yellow-400 hover:bg-yellow-500"} onClick={() => window.location.reload()}>
        Начать сначала
      </MyBtn>
    </>
  );
};

export default Game;

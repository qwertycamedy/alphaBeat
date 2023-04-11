import React from "react";
import MyBtn from "../UI/MyBtn";
import MyTitle from "../UI/MyTitle";

const GameOver = ({ allTime, onResultModal }) => {
  return (
    <>
      <MyTitle>Поздравляем, Вы выиграли!</MyTitle>
      <p>Время прохождения: {allTime}с.</p>
      <MyBtn onClick={onResultModal}>Сохранить результат</MyBtn>
      <MyBtn bg={"bg-yellow-400 hover:bg-yellow-500"} onClick={() => window.location.reload()}>
        Начать сначала
      </MyBtn>
    </>
  );
};

export default GameOver;

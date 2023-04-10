import React from "react";
import MyBtn from "../UI/MyBtn";
import MyTitle from "../UI/MyTitle";

const GameOver = ({ handleGameOver, allTime }) => {
  return (
    <>
      <MyTitle>Поздравляем, Вы выиграли!</MyTitle>
      <p>Время прохождения: {allTime}с.</p>
      <MyBtn onClick={handleGameOver}>Сохранить результат</MyBtn>
      <MyBtn bg={"bg-yellow-400"} onClick={() => window.location.reload()}>
        Начать сначала
      </MyBtn>
    </>
  );
};

export default GameOver;

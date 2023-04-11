import React, { useEffect } from "react";
import MyBtn from "./MyBtn";

const MyModal = ({ children, setModal, modal, onSubmit }) => {
  const onOverlay = () => {
    setModal(!modal);
  };

  useEffect(() => {
    document.addEventListener('keydown', onEscDown)
    return () => document.removeEventListener('keydown', onEscDown)
  });

  const onEscDown = e => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };
  return (
    <div
      className={
        !modal
          ? "overlay bg-slate-400 bg-opacity-70 fixed z-20 backdrop-blur-sm left-0 top-0 right-0 bottom-0 flex flex-col items-center justify-center gap-4 p-4 transition-opacity ease-linear duration-200 opacity-0 pointer-events-none"
          : "overlay bg-slate-400 bg-opacity-70 fixed z-20 backdrop-blur-sm left-0 top-0 right-0 bottom-0 flex flex-col items-center justify-center gap-4 p-4 transition-opacity ease-linear duration-200 opacity-1 pointer-events-all"
      }
      onClick={onOverlay}
      onKeyDown={onEscDown}
      autoFocus
    >
      <form
        className={
          !modal
            ? "inner bg-white shadow-md rounded-xl flex flex-col gap-4 p-4  transition-transform ease-linear duration-200 -translate-y-8"
            : "inner bg-white shadow-md rounded-xl flex flex-col gap-4 p-4  transition-transform ease-linear duration-200 translate-y-0"
        }
        onClick={e => e.stopPropagation()}
        onSubmit={onSubmit}
      >
        {children}
      </form>
      <MyBtn
        onClick={onOverlay}
        bg={"bg-red-400 text-white hover:bg-red-500 hover:text-white"}
      >
        Закрыть
      </MyBtn>
    </div>
  );
};

export default MyModal;

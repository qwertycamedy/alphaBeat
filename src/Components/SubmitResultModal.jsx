import React from 'react'
import MyModal from "../UI/MyModal";
import MyInput from "../UI/MyInput";
import MyBtn from '../UI/MyBtn';

const SubmitResultModal = ({modal, setModal, onSubmit, onInputChange, allTime}) => {
  return (
  <MyModal
    modal={modal}
    setModal={setModal}
    onSubmit={onSubmit}
  >
    <MyInput placeholder={"Ваше имя.."} onChange={onInputChange} />
    <p>Ваше время прохождения: {allTime}с.</p>
    <MyBtn type="submit">Отправить</MyBtn>
  </MyModal>
  )
}

export default SubmitResultModal
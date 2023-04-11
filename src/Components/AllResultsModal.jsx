import React from "react";
import MyModal from "../UI/MyModal";
import MyTitle from "../UI/MyTitle";

const AllResultsModal = ({modal, setModal, resultsData}) => {
  return (
    <MyModal modal={modal} setModal={setModal}>
      <div className="flex flex-col gap-4">
        <MyTitle>Результаты всех участников:</MyTitle>
        <div className="flex flex-col gap-4 max-h-[350px] overflow-y-auto">
          {resultsData.length > 0 ? (
            resultsData.map(result => (
              <div
                className="flex items-center justify-between gap-4"
                key={result.id}
              >
                <span>{result.name}:</span>
                <span>{result.result}</span>
              </div>
            ))
          ) : (
            <p className="text-slate-600 font-bold">
              Результатов нет. <br /> Стань первым!
            </p>
          )}
        </div>
      </div>
    </MyModal>
  );
};

export default AllResultsModal;

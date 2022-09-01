import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import LabeledInput from "./LabeledInput";

import { appendRow, distribute } from "../store";

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const addLine = useCallback(() => {
    dispatch(appendRow({ name, cost: Number(cost) }));
  }, [name, cost, dispatch]);

  return (
    <>
      <LabeledInput
        type="text"
        name="Название"
        value={name}
        setValue={setName}
      />
      <LabeledInput
        type="number"
        name="Стоимость"
        value={cost}
        setValue={setCost}
      />
      <button type="submit" onClick={addLine}>
        Добавить
      </button>
      <button type="button" onClick={() => dispatch(distribute())}>
        Распределить
      </button>
    </>
  );
};

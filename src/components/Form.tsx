import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";

import LabeledInput from "./LabeledInput";

import appendRow from "../store/actionCreators/appendRow";
import distribute from "../store/actionCreators/distribute"

const Form = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");

    const addLine = useCallback(() => {
        dispatch(appendRow({name, cost: Number(cost)}))
    }, [name, cost, dispatch]);

    return (
        <div>
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
            <button id="add-button" onClick={addLine}>
                Добавить
            </button>
            <button id="distribute-button" onClick={() => dispatch(distribute())}>
                Распределить
            </button>
        </div>
    );
}

export default Form;
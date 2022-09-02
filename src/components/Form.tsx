import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {Grid, Box, Button} from "@mui/material";

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
    <Box
        justifyContent="flex-start"
        sx={{ flexGrow: 1 }}
        width={300}
    >
        <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
        >
            <Grid item xs={6}>
              <LabeledInput
                type="text"
                name="Название"
                value={name}
                setValue={setName}
              />
            </Grid>
            <Grid item xs={6}>
              <LabeledInput
                type="number"
                name="Стоимость"
                value={cost}
                setValue={setCost}
              />
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" fullWidth={true} onClick={addLine}>
                    Добавить
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={() => dispatch(distribute())}>
                    Распределить
                </Button>
            </Grid>
        </Grid>
    </Box>
  );
};

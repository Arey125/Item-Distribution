import { useCallback, useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import { LabeledInput } from "./LabeledInput";

import { appendRow, distribute } from "./tableSlice";
import { useAppDispatch } from "../store";

export const Form = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const addLine = useCallback(() => {
    dispatch(appendRow({ name, cost: Number(cost) }));
  }, [name, cost, dispatch]);

  const distributeButtonCallback = useCallback(
    () => dispatch(distribute()),
    [dispatch]
  );

  return (
    <Box justifyContent="flex-start" sx={{ flexGrow: 1 }} width={300}>
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
          <Button variant="contained" fullWidth onClick={addLine}>
            Добавить
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={distributeButtonCallback}>
            Распределить
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

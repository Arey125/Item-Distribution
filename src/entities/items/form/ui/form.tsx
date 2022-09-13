// eslint-disable-next-line
import { TItem } from "../model";
import { Grid, Button } from "@mui/material";
// eslint-disable-next-line import/no-internal-modules
import { useAppDispatch } from "app/store";
import { useCallback, useState } from "react";
import { AnyAction } from "redux";
import { LabeledInput } from "shared/ui";

type TProps = {
  add: (item: TItem) => AnyAction;
};

export const Form = ({ add }: TProps) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const dispatch = useAppDispatch();

  const addButtonCallback = useCallback(() => {
    dispatch(add({ name, cost: Number(cost) }));
  }, [name, cost, add, dispatch]);

  return (
    <Grid
      container
      justifyContent="flex-start"
      sx={{ flexGrow: 1 }}
      spacing={1}
    >
      <Grid item xs={4}>
        <LabeledInput
          type="text"
          name="Название"
          value={name}
          setValue={setName}
        />
      </Grid>
      <Grid item xs={4}>
        <LabeledInput
          type="number"
          name="Стоимость"
          value={cost}
          setValue={setCost}
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" fullWidth onClick={addButtonCallback}>
          Добавить
        </Button>
      </Grid>
    </Grid>
  );
};

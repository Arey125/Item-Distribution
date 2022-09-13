import { useCallback, useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import { AnyAction } from "redux";

// eslint-disable-next-line import/no-internal-modules
import { useAppDispatch } from "app/store";
import { LabeledInput } from "shared/ui";
import { TItem } from "../model";

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
    <Box justifyContent="flex-start" sx={{ flexGrow: 1 }} width={300}>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <LabeledInput
            type="text"
            name="Название"
            value={name}
            setValue={setName}
          />
        </Grid>
        <Grid item xs={3}>
          <LabeledInput
            type="number"
            name="Стоимость"
            value={cost}
            setValue={setCost}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" fullWidth onClick={addButtonCallback}>
            Добавить
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

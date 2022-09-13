import { Button as MUIButton } from "@mui/material";
// eslint-disable-next-line import/no-internal-modules
import { useAppDispatch } from "app/store";
import { useCallback } from "react";
import { AnyAction } from "redux";

type TProps = {
  distribute: () => AnyAction;
};

export const Button = ({ distribute }: TProps) => {
  const dispatch = useAppDispatch();
  const distributeButtonCallback = useCallback(() => {
    dispatch(distribute());
  }, [dispatch, distribute]);

  return (
    <MUIButton variant="contained" onClick={distributeButtonCallback}>
      Распределить
    </MUIButton>
  );
};

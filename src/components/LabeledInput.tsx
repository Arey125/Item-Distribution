import React, { ChangeEventHandler } from "react";
import { InputBaseComponentProps, TextField } from "@mui/material";

type TProps = {
  type: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const INPUT_PARAMS: InputBaseComponentProps = {
  inputMode: "numeric",
  pattern: "[0-9]*",
};

const LabeledInput = ({ type, name, value, setValue }: TProps) => {
  // @ts-ignore
  const textChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };
  return (
    <TextField
      label={name}
      inputProps={type === "text" ? undefined : INPUT_PARAMS}
      value={value}
      size="small"
      onChange={textChange}
    />
  );
};

export { LabeledInput };

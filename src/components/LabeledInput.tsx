import React from "react";
import {TextField} from "@mui/material";

type Props = {
  type: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const LabeledInput: React.FC<Props> = ({ type, name, value, setValue }) => (
    <TextField
        label={name}
        inputProps={type === 'text' ? undefined : { inputMode: 'numeric', pattern: '[0-9]*' }}
        value={value}
        size="small"
        onChange={event => setValue(event.target.value)}
    />
);

export default LabeledInput;

import React from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const LabeledInput: React.FC<Props> = ({ type, name, value, setValue }) => (
  <label>
    {name}
    <input
      type={type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  </label>
);

export default LabeledInput;

// eslint-disable-next-line
import { add, remove, distribute } from "../model";
import { Stack } from "@mui/material";
import { Form, Table } from "entities/items";
import { Button } from "features/items";

export const Items = () => (
  <Stack width={400} spacing={1}>
    <Form add={add} />
    <Button distribute={distribute} />
    <Table remove={remove} />
  </Stack>
);

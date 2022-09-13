import { Form, Table } from "entities/items";

// eslint-disable-next-line import/no-internal-modules
import { add, remove } from "shared/slices/items";

export const Items = () => (
  <>
    <Form add={add} />
    <Table remove={remove} />
  </>
);

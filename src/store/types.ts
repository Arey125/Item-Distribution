type Item = {
    name: string,
    cost: number,
}

type Row = Item & {
    type: string | null
}

type Table = {
    [id: string]: Row
}

type State = {
    table: Table
}

type Append = {
    type: 'APPEND',
    item: Item
}
type Delete = {
    type: 'DELETE',
    id: string
}
type Distribute = {
    type: 'DISTRIBUTE'
}

type Payload = Append | Delete | Distribute

export type {Row, Item, Table, State, Payload};
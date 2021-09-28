import * as React from "react";
import { Show, SimpleShowLayout, Create, List, Datagrid, TextField, TextInput, SimpleForm, NumberInput, NumberField, required} from 'react-admin';



export const CheckpointList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField label="Id" source="_id" />
            <TextField source="tag" />
             <NumberField source="x" />
             <NumberField source="y" />
             <TextField source="floor" /> 
        </Datagrid>
    </List>
);

export const CheckpointCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput label="Tag" source="tag"  validate={required()} />
        <NumberInput label="Pos X" source="x"  validate={required()} />
        <NumberInput label="Pos Y" source="y"  validate={required()} />
        <TextInput label="Floor" source="floor" />
        </SimpleForm>
    </Create>
);

export const CheckpointEdit = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput disabled label="Id" source="_id" />
        <TextInput label="Tag" source="tag"  validate={required()} />
        <NumberInput label="Pos X" source="x"  validate={required()} />
        <NumberInput label="Pos Y" source="y"  validate={required()} />
        <TextInput label="Floor" source="floor" />
        </SimpleForm>
    </Create>
);

export const CheckpointShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField label="Id" source="_id" />
            <TextField source="tag" />
             <NumberField source="x" />
             <NumberField source="y" />
             <TextField source="floor" /> 
        </SimpleShowLayout>
    </Show>
);
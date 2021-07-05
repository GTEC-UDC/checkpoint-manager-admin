import * as React from "react";
import {Edit, required, Create, SimpleForm,ArrayInput, SimpleFormIterator,NumberInput,  SimpleShowLayout, Show, List, Datagrid, TextField, DateField, ArrayField , SingleFieldList, ChipField, NumberField, TextInput} from 'react-admin';

export const RouteList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="tag" />
            <DateField source="createdAt" showTime />
            <ArrayField source="points">
                <SingleFieldList>
                    <ChipField source="tag" />
                </SingleFieldList>
            </ArrayField>
        </Datagrid>
    </List>
);

export const RouteShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="tag" />
            <DateField source="createdAt" showTime />
            <ArrayField source="points">
                    <Datagrid>
                        <TextField source="tag" />
                        <NumberField source="x" />
                        <NumberField source="y" />
                        <TextField source="floor" />
                    </Datagrid>
                </ArrayField>
        </SimpleShowLayout>
    </Show>
);


export const RouteCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tag"/>
            <ArrayInput label="Points" source="points">
                <SimpleFormIterator>
                <TextInput label="Tag" source="tag"  validate={required()} />
                    <NumberInput label="Pos X" source="x"  validate={required()} />
                    <NumberInput label="Pos Y" source="y"  validate={required()} />
                    <TextInput label="Floor" source="floor" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);


export const RouteEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
        <TextInput disabled label="Id" source="_id" />
        <TextInput source="tag"/>
            <ArrayInput label= "Points" source="points">
                <SimpleFormIterator>
                    <TextInput label="Tag" source="tag"  validate={required()} />
                    <NumberInput label="Pos X" source="x"  validate={required()} />
                    <NumberInput label="Pos Y" source="y"  validate={required()} />
                    <TextInput label="Floor" source="floor" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
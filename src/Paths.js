import * as React from "react";
import {EmailField,  ReferenceField, SimpleShowLayout, Show, List, Datagrid, TextField, DateField, ArrayField , NumberField} from 'react-admin';

export const PathList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="routeId" reference="routes">
                <TextField source="tag" />
            </ReferenceField>
            <ReferenceField source="ownerId" reference="users">
                <EmailField source="email" />
            </ReferenceField>
            <DateField source="createdAt" showTime />
        </Datagrid>
    </List>
);


export const PathShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField source="id" />
            <ReferenceField source="routeId" reference="routes">
                <TextField source="tag" />
            </ReferenceField>
            <ReferenceField source="ownerId" reference="users">
                <EmailField source="email" />
            </ReferenceField>
            <DateField source="createdAt" showTime />
            <ArrayField source="checkpoints">
                    <Datagrid>
                        <TextField source="tag" />
                        <NumberField source="x" />
                        <NumberField source="y" />
                        <TextField source="floor" />
                        <NumberField source="timestamp" />
                    </Datagrid>
                </ArrayField>
        </SimpleShowLayout>
    </Show>
);


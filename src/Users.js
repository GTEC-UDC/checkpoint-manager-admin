import * as React from "react";
import { Show, SimpleShowLayout, Create, List, Datagrid, TextField, EmailField, DateField, TextInput, SimpleForm, PasswordInput} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <EmailField source="email" />
            <DateField source="createdAt" showTime locales="es-ES" options={{
        year: 'numeric', month: 'numeric',  day: 'numeric', 
        hour: 'numeric', minute: 'numeric', 
        second: 'numeric', fractionalSecondDigits: 3,
        hour12: false
    }}/>
        </Datagrid>
    </List>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" type="email" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>
);

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <EmailField source="email" />
            <DateField label="Creation" source="createdAt" showTime locales="es-ES" options={{
        year: 'numeric', month: 'numeric',  day: 'numeric', 
        hour: 'numeric', minute: 'numeric', 
        second: 'numeric', fractionalSecondDigits: 3,
        hour12: false
    }} />
        </SimpleShowLayout>
    </Show>
);

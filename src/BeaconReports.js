import * as React from "react";
import { Show, SimpleShowLayout, List, Datagrid, TextField, EmailField, DateField, ReferenceField, ArrayField, NumberField} from 'react-admin';

export const BeaconReportList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <ReferenceField source="ownerId" reference="users">
                <EmailField label="User" source="email" />
            </ReferenceField>
            <DateField source="createdAt" showTime  />
        </Datagrid>
    </List>
);


export const BeaconReportShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField label="Id" source="id" />
            <ReferenceField source="ownerId" reference="users">
                <EmailField label="User" source="email" />
            </ReferenceField>
            <DateField label="Creation" source="createdAt" showTime />
            <ArrayField label="Beacons detected" source="scans">
                    <Datagrid>
                        <TextField source="uuid" />
                        <NumberField source="major" />
                        <NumberField source="minor" />
                        <NumberField source="rssi" />
                    </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

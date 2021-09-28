import * as React from "react";
import {EmailField,  ReferenceField, SimpleShowLayout, Show, List, Datagrid, TextField, DateField, ArrayField , NumberField} from 'react-admin';
import { useRecordContext } from 'react-admin';


function tsToDate(ts){



    var date = new Date(ts * 1000);
    var day = date.getDate();
    var year = date.getFullYear();
  var month = date.getMonth()+1;

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var mili = "00" + date.getMilliseconds();

    var formattedTime = day + '/'+ month+'/'+year +' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    

    return formattedTime;

};

const UnixTSField = ({ source }) => {
    const record = useRecordContext();
    const milliseconds = Number(record[source]) * 1000;
    const dateObject = new Date(milliseconds);
    //const humanDateFormat = dateObject.toLocaleString();
    const humanDateFormat = tsToDate(Number(record[source]));

    return (<span>{humanDateFormat}</span>);
};


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
                        <UnixTSField source="timestamp" />
                    </Datagrid>
                </ArrayField>
        </SimpleShowLayout>
    </Show>
);


import * as React from "react";
import {EmailField,  ReferenceField, SimpleShowLayout, Show, List, Datagrid, TextField, DateField, ArrayField , NumberField} from 'react-admin';
import { useRecordContext } from 'react-admin';


function tsToDate(ts){



    var date = new Date(ts);
    var day = date.getDate();
    var year = date.getFullYear();
  var month = date.getMonth()+1;

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var mili = "00" + date.getMilliseconds();

    var formattedTime = day + '/'+ month+'/'+year +' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)+"."+mili.substr(-3);
    

    return formattedTime;

};

const UnixTSField = ({ source }) => {
    const record = useRecordContext();
    const humanDateFormat = tsToDate(Number(record[source]));

    return (<span>{humanDateFormat}</span>);
};


export const TimeSyncList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="ownerId" reference="users">
                <EmailField source="email" />
            </ReferenceField>
            <DateField source="createdAt" showTime  locales="es-ES" options={{
        year: 'numeric', month: 'numeric',  day: 'numeric', 
        hour: 'numeric', minute: 'numeric', 
        second: 'numeric', fractionalSecondDigits: 3,
        hour12: false
    }}/>
        <UnixTSField source="timestamp" />
        <NumberField source="seq" />
        </Datagrid>
    </List>
);


export const TimeSyncShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField source="id" />
            <ReferenceField source="ownerId" reference="users">
                <EmailField source="email" />
            </ReferenceField>
                <DateField source="createdAt" showTime locales="es-ES" options={{
            year: 'numeric', month: 'numeric',  day: 'numeric', 
            hour: 'numeric', minute: 'numeric', 
            second: 'numeric', fractionalSecondDigits: 3,
            hour12: false
        }}/>
            <UnixTSField source="timestamp" />
            <NumberField source="seq" />
        </SimpleShowLayout>
    </Show>
);


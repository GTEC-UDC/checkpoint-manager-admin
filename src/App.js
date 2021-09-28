import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { restClient, authClient } from 'ra-data-feathers';
import client from './feathers';

import { UserList, UserCreate, UserShow } from './Users';
import { RouteList, RouteShow, RouteCreate, RouteEdit} from './Routes';
import { PathList, PathShow } from './Paths';
import { CheckpointList, CheckpointCreate, CheckpointShow, CheckpointEdit } from './Checkpoints';
import { BeaconReportList, BeaconReportShow } from './BeaconReports';

const restClientOptions = {
  id: '_id', 
  usePatch: true
};

const authClientOptions = {
  usernameField: 'email',
  redirectTo: '/login',
  storageKey: 'feathers-jwt'
}

const App = () => (
<Admin 
    dataProvider={restClient(client, restClientOptions)}
    authProvider={authClient(client, authClientOptions)}>

  <Resource name="users" list={UserList} create={UserCreate} show={UserShow}/>
  <Resource name="checkpoints" list={CheckpointList} create={CheckpointCreate} show={CheckpointShow} edit={CheckpointEdit}/>
  <Resource name="routes" list={RouteList} show={RouteShow} create={RouteCreate} edit={RouteEdit}/>
  <Resource name="paths" list={PathList} show={PathShow}/>
  <Resource name="beaconreports" list={BeaconReportList} show={BeaconReportShow}/>


</Admin>);

export default App;
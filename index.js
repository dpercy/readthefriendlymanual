import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { 
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient('rtfm-wysqi');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rtfm');
// TODO query the db to make sure we can

const LoginPage = () =>   (<div>"login page!"</div>);
const ViewDocPage = () => (<div>"view doc page!"</div>);
const EditDocPage = () => (<div>"edit doc page!"</div>);

const App = () => (
    <Router>
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/doc/:docId" component={ViewDocPage} />
            <Route exact path="/doc/:docId/draft"
                render={(props) =>
                    <ViewDocPage
                        {...props}
                        state="draft"
                    />}
                />
            <Route exact path="/doc/:docId/edit" component={EditDocPage} />
        </Switch>
    </Router>
);


console.log('hello from index.js!');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";

import { StitchClient } from './src/credentials';
import LoginPage from './src/LoginPage';

const db = StitchClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rtfm');
// TODO query the db to make sure we can

const ViewDocPage = () => (<div>"view doc page!"</div>);
const EditDocPage = () => (<div>"edit doc page!"</div>);


class DebugPage extends React.Component {

    constructor(props) {
        console.log('super');
        super(props);
        console.log('constructor');
        this.state = {
            docs: null,
        }
        this.queryFinished = this.queryFinished.bind(this);
    }
    componentDidMount() {
        console.log('componentDidMount');
        db.collection('docs').find().asArray().then(this.queryFinished);
    }
    queryFinished(docs) {
        console.log('queryFinished', docs);
        this.setState({ docs });
    }
    render() {
        console.log('render');
        if (this.state.docs == null) {
            return <div>not loaded yet</div>;
        } else {
            return (
                <div>
                    got {this.state.docs.length} docs:
                    <ul>
                        {this.state.docs.map(doc => <li key={doc._id}>{JSON.stringify(doc)}</li>)}
                    </ul>
                </div>
            );
        }
    }
}

const App = () => (
    <Router>
        <Switch>
            <Route path="/debug" component={DebugPage} />
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

// console.log('logging into stitch...');
// StitchClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    // console.log('logged into stitch as', user);
    ReactDOM.render(<App />, document.getElementById('reactRoot'));
// });

console.log('hello from index.js!');

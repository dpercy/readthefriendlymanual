import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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


ReactDOM.render(<App />, document.getElementById("reactRoot"));

console.log('hello from index.js!');

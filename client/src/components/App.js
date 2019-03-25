// ES2015 modules are available because of Babel and Webpack
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>
const DashboardNew = () => <h2>DashboardNew</h2>

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                {/* browser router takes only 1 child component 
                exact = {true}*/}
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/dashboard/new" component={DashboardNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }

}


export default connect(null, actions)(App);
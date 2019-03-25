// ES2015 modules are available because of Babel and Webpack
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

//const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
//const Landing = () => <h2>Landing</h2>

// const App = () => {

//         return (
//             <div className="container">
//                 {/* browser router takes only 1 child component 
//             exact = {true}*/}
//                 <BrowserRouter>
//                     <div>
//                         <Header />
//                         <Route exact path="/" component={Landing} />
//                         <Route exact path="/surveys" component={Dashboard} />
//                         <Route path="/surveys/new" component={SurveyNew} />
//                     </div>
//                 </BrowserRouter>
//             </div>
//         )

// };

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
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }

}


export default connect(null, actions)(App);
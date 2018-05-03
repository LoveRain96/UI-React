import React, { Component } from 'react';
import './App.css';
import Layout from "./Layout";
import Main from "./Main";

class App extends Component {

    render() {
        return (
            <div>
                <Layout/>
                <Main/>
            </div>
        );
    }
}

export default App;

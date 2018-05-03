import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import  { BrowserRouter } from  'react-router-dom';
import App from "./components/App";
const app = document.getElementById('root');

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
),app);


registerServiceWorker();

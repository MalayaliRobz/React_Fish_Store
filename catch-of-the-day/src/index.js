import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Match,Miss} from 'react-router';


import App from './components/App';
import NotFound from './components/notFound';
import './css/style.css';
import StorePicker from './components/StorePicker';

const Root= () =>{
    return (
        <BrowserRouter>
            <div>
            <Match exactly pattern="/" component={StorePicker}/>
            <Match exactly pattern="/store/:storeId" component={App}/>
            <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(<Root/>,document.querySelector('#main'));

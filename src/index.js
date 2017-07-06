import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './js-css/index.css';
// import './js-css/text';
// import './js-css/drawing';
import './js-css/addToCanvas';


import store from './store';
import router from './router';

ReactDOM.render(

    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);


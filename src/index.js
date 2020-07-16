import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom'
import App from './AppContainer/app';


ReactDOM.render(<BrowserRouter>
                    <App/>
                </BrowserRouter>,document.getElementById('root'));

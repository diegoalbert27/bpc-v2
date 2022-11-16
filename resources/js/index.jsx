import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from './App'

import '../css/index.css'
import './bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import app from './app';
import ReportWebVitals from './ReportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <app />
    </React.StrictMode>
);

ReportWebVitals();

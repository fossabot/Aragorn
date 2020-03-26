import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.less';

const mainElement = document.createElement('div');
mainElement.id = 'root';
document.body.appendChild(mainElement);

ReactDOM.render(<App />, mainElement);
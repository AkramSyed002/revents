import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import App from '../src/app/layout/App.jsx'

ReactDOM.render(<App/>,document.getElementById('root'));


// const rootEl=document.getElementById('root');

// function render(){
//   ReactDOM.render(<App />,rootEl);
  
// }

// if(module.hot){
//   module.hot.accept('./app/layout/App',function(){
//     setTimeout(render);
//   })
// }



    

reportWebVitals();

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Routing from './components/Routing';

function App() {
  return (
    <React.Fragment>
    <Header />
        <Routing />
    </React.Fragment>
  );
}

export default App;

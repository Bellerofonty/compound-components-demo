import React from 'react';
import {DemoCardStatic} from './components/DemoCardStatic'
import {DemoCardActive} from './components/DemoCardActive'

function App() {
    return (
        <div className="container">
            <DemoCardActive />
            <DemoCardStatic />
        </div>
    );
}

export default App;

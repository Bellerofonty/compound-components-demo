import React from 'react';
import {ButtonGroup} from './components/ButtonGroup'

function App() {
    return (
        <div className="app">
            <ButtonGroup
                props={{
                    title: "Title",
                    counterValue: 3
                }}
            >
                <ButtonGroup.Button/>
                <ButtonGroup.Counter/>
                <ButtonGroup.ProgressIndicator/>
            </ButtonGroup>
        </div>
    );
}

export default App;

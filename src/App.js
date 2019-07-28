import React from 'react';
import Board from "./components/Board";
import {getPhotos} from "./helpers/photoHandler";

const App = () => {
    return (
        <div className="App">
            <Board images={getPhotos()} />
        </div>
    );
};

export default App;

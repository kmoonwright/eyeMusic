import React from 'react';

import LibraryNav from './library_nav'
import LibraryMain from './library_main'

class Library extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="library-container">
                <LibraryNav></LibraryNav>
                <LibraryMain><h1>VVELCOME TO LibraryMain</h1></LibraryMain>
                <h1>VVELCOME TO Library</h1>
            </div>
        )
    }
}

export default Library;
import React from 'react';

import LibraryNav from './library_nav'

class Library extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="library-container">
                <LibraryNav></LibraryNav>
                <h1>VVELCOME TO Library</h1>
            </div>
        )
    }
}

export default Library;
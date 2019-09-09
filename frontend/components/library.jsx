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
                <LibraryMain></LibraryMain>
            </div>
        )
    }
}

export default Library;
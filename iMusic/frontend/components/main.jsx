import React from 'react'
import { connect } from 'react-redux';
import { ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container';

class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <Switch>
                    <ProtectedRoute path="/" component={NavBarContainer} />
                </Switch>
            </div>
        )
    }
}

const msp = state => ({
    currentUser: state.session.id
})

export default connect(undefined, msp)(Main);
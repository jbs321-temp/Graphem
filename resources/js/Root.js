import React from 'react'
import { connect } from 'react-redux'
import Menu from 'components/menu'

class Root extends React.Component {
    render () {
        return (
            <div className={"container"}>
                <Menu/>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps)(Root)

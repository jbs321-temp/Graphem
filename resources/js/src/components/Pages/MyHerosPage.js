import React from 'react'
import {fetchHeroes} from 'actions/heroes'
import { connect } from 'react-redux'
import HeroList from 'components/List/HeroList'

class MyHerosPage extends React.Component {
    render () {
        return (
            <div className="content">
                <div className="title m-b-md">My Heroes</div>
                <div>
                    <HeroList/>
                </div>
            </div>

        )
    }
}

export default MyHerosPage

import React from 'react'
import {fetchHeroes} from 'actions/heroes'
import { connect } from 'react-redux'
import HeroList from 'components/List/HeroList'

class CreateTeamPage extends React.Component {
    render () {
        return (
            <div className="content">
                <div className="title m-b-md">My Team</div>
                <div>
                    This is where a Team Page should be
                </div>
                <div>
                    <HeroList/>
                </div>
            </div>

        )
    }
}

export default CreateTeamPage

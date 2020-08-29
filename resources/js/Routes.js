import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MyHerosPage from 'components/Pages/MyHerosPage'
import CreateHeroPage from 'components/Pages/CreateHeroPage'
import CreateTeamPage from './src/components/Pages/CreateTeamPage'

class Routes extends React.Component {
    render () {
        return (
            <div className="container">
                <Switch>
                    <Route path="/myheroes" exact component={MyHerosPage}/>
                    <Route path="/create-hero" exact component={CreateHeroPage}/>
                    <Route path="/myheroes/createteam" exact component={CreateTeamPage}/>
                </Switch>
            </div>
        )
    }
}

export default Routes

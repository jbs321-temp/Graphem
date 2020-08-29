import React from 'react'
import CreateHeroForm from 'components/Form/CreateHeroForm'
import HeroList from '../List/HeroList'

class CreateHeroPage extends React.Component {
    render () {
        return <div>
            <div className="title m-b-md">My Hero</div>
            <CreateHeroForm />
            <HeroList/>
        </div>
    }
}

export default CreateHeroPage

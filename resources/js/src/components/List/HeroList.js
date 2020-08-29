import React from 'react'
import { connect } from 'react-redux'
import { fetchHeroes } from '../../actions/heroes'

class HeroList extends React.Component {
    componentDidMount () {
        this.props.fetchHeroes()
    }

    renderHeader () {
        return (
            <thead>
            <tr>
                <th>Name</th>
                <th>Side</th>
                <th>Hit Points</th>
                <th>Attack</th>
                <th>Special Ability</th>
            </tr>
            </thead>
        )
    }

    renderBody () {
        const { heroes } = this.props
        return (
            <tbody>
            {_.map(heroes, (hero, idx) => (
                <tr key={idx}>
                    <td>{hero.name}</td>
                    <td>{hero.side}</td>
                    <td>{hero['hit-points']}</td>
                    <td>{hero.attack}</td>
                    <td>{hero['special-ability']}</td>
                </tr>
            ))}
            </tbody>
        )
    }

    render () {
        return (
            <table style={{width:'100%'}}>
                {this.renderHeader()}
                {this.renderBody()}
            </table>
        )
    }
}

export default connect(state => state, { fetchHeroes })(HeroList)

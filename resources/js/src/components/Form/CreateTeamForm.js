import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createHero } from 'actions/heroes'

const renderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
    <div className="form-group">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} className="form-control"/>
            {touched && error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    </div>
)

class CreateHeroForm extends React.Component {
    constructor () {
        super();

        this.state = {
            status: "",
        }
    }

    renderSubmitMessage(saved) {
        const { reset } = this.props
        if(saved) {
            this.setState({status: <div style={{color:'green'}}>Saved</div>})
            reset()
        } else {
            this.setState({status: <div style={{color:'red'}}>Oops somethings is wrong... </div>})
        }
    }

    onSubmit (data) {
        this.props.createHero(data, (saved) => this.renderSubmitMessage(saved));
    }

    render () {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="name" component={renderField} label="Hero Name" placeholder='e.g. Superman...'/>

                <div className="form-group">
                    <label>Side</label>
                    <Field name="side" component="select" className="form-control">
                        <option defaultValue value="dark">dark</option>
                        <option value="light">light</option>
                    </Field>
                </div>

                <Field name="hit-points" component={renderField} type="number" label="Hit Points"/>
                <Field name="attack" component={renderField} type="number" label="Attack Points"/>
                <Field name="special-ability" component={renderField} type="text" label="Special Ability" placeholder={"e.g. Flying..."}/>

                <div className="form-group">
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>

                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>

                <div style={{color:"green"}}>
                    {this.state.status}
                </div>
            </form>
        )
    }
}

const validate = values => {
    const errors = {}
    const requiredFields = ['name', 'side', 'hit-points', 'attack', 'special-ability']

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })

    //TODO::Validate Min/Max values for integers
    //TODO:: Validate from Server Side

    return errors
}

export default reduxForm({
    form: 'createHeroForm',
    validate
})(
    connect(state => state, { createHero })(CreateHeroForm)
)

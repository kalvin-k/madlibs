import React, { Component } from 'react'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                noun: '',
                adj: '',
                adj2: '',
                adverb: '',
                verb: '',
            },
            userForm: {
                    noun: '',
                    adj: '',
                    adj2: '',
                    adverb: '',
                    verb: '',
            }
    }
}

    handleChange = (e) => {
        const { userForm } = this.state
        userForm[e.target.name] = e.target.value
        this.setState({userForm: userForm})
        console.log(userForm);
    }

    handleSubmit = (e) => {
        const { form, userForm } = this.state
        this.setState({form: userForm})
}

    clearForm = () => {
        const { userForm } = this.state

        const userForm2 = {
            noun: '',
            adj: '',
            adj2: '',
            adverb: '',
            verb: '',
        }

        this.setState({userForm: userForm2})

}


    render() {

        let { noun, adj, adverb, verb, adj2 } = this.state.userForm

        return (
          <div>
          <center>
          <h1> MabLibs!! </h1> 
            <div id = 'testing'>
                <h3> Noun: </h3>
                <input
                name = 'noun'
                value = {noun}
                onChange = {this.handleChange}
                />
                <br />
                <h3> Adjective: </h3>
                <input
                name = 'adj'
                value = {adj}
                onChange = {this.handleChange}
                />
                <br />
                <h3> Adjective 2: </h3>
                <input
                name = 'adj2'
                value = {adj2}
                onChange = {this.handleChange}
                />
                <br/>
                <h3> Adverb:  </h3>
                <input
                name = 'adverb'
                value = {adverb}
                onChange = {this.handleChange}
                />
                <br />
                <h3> Verb </h3>
                <input
                name = 'verb'
                value = {verb}
                onChange = {this.handleChange}
                />
                <br/>
            </div>
            <div>
                <p>
                Be kind to your {this.state.form.noun}-footed cats, for a duck may be somebody's {this.state.form.noun}. Coding is {this.state.form.adj} but somtimes its also {this.state.form.adj2}.
                When I {this.state.form.verb} I get tired. so {this.state.form.adverb} running...
                </p>
            </div>
            <button onClick = {this.handleSubmit}>
                Submit
            </button>
            <button onClick = {this.clearForm}>
                Clear
            </button>
            </center>
          </div>
        );
      }
    }


export default App;

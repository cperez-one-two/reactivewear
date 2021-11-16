import React from 'react';

// TODO :: import css

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <input name="email" value={this.state.email} required />
                </form>
            </div>
        )
    }

}

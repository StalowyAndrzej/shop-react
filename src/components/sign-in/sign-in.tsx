import React from 'react';

import './sign-in.styles.scss'
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up';


interface IProps {}

interface ISignInState {
    email: string,
    password: string,
}

type NameAndValue ={
    email: string;
    password: string;
}

class SignIn extends React.Component<IProps, ISignInState> {
    constructor(props: IProps){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }


    // handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {value, name} = e.target;
    //     this.setState({[name]: value})
    // }
    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
       
        this.setState({email: e.currentTarget.value});
      }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' onChange={this.handleChange} type='email' value={this.state.email} required/><label>Email</label>
                    <input name='password'  type='password' value={this.state.password} required/><label>Password</label>
                    <input type='submit' value='Submit form'/>
                </form>
            </div>
        )
    }
}

export default SignIn;
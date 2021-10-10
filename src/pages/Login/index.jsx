import React from 'react'
import { LoginAgreement, LoginContainer, LoginForm, LoginInputUser, LoginLinks, LoginSubmitBtn, LoginTitle, LoginWrapper } from './LoginElements'

const Login = () => {
    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginTitle>
                    SIGN IN
                </LoginTitle>

                <LoginForm>
                    <LoginInputUser placeholder="name"/>
                    <LoginInputUser placeholder="password"/>
                    
                    <LoginSubmitBtn>
                        Login
                    </LoginSubmitBtn>
                    <LoginLinks>
                        Forgot your password?
                    </LoginLinks>
                    <LoginLinks>
                        Create your account
                    </LoginLinks>
                </LoginForm>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Login

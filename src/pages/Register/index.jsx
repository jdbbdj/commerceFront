import React from 'react'
import { RegisterAgreement, RegisterContainer, RegisterForm, RegisterInputUser, RegisterSubmitBtn, RegisterTitle, RegisterWrapper } from './RegisterElements'

const Register = () => {
    return (
        <RegisterContainer>
            <RegisterWrapper>
                <RegisterTitle>
                    CREATE AN ACCOUNT
                </RegisterTitle>

                <RegisterForm>
                    <RegisterInputUser placeholder="name"/>
                    <RegisterInputUser placeholder="last name"/>
                    <RegisterInputUser placeholder="username"/>
                    <RegisterInputUser placeholder="email"/>

                    <RegisterInputUser placeholder="password"/>
                    <RegisterInputUser placeholder="confirm password"/>

                    <RegisterAgreement>
                        By creating an account, I consent to the processsing of my
                        personal data in accorance with the <b> Privacy Policy </b>

                    </RegisterAgreement>

                    <RegisterSubmitBtn>
                        Register
                    </RegisterSubmitBtn>
                </RegisterForm>
            </RegisterWrapper>
        </RegisterContainer>
    )
}

export default Register

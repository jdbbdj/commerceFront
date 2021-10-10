import React from 'react'
import { FooterIcon1,FooterIcon2,FooterIcon3,FoooterLeftIcons,FooterContactItem, FooterCenter, FooterCenterList, FooterCenterListItem, FooterCenterTitle, FooterContainer, FooterFacebook, FooterInstagram, FooterLeft, FooterLeftDesc, FooterLeftLogo, FooterLeftSocialCont, FooterPinterest, FooterRight, FooterRightTitle, FooterTwitter, FooterPayment } from './FooterElements'



const Footer = () => {
    return (
        <FooterContainer>

            <FooterLeft>
                <FooterLeftLogo>
                Kay'U
                </FooterLeftLogo>
                <FooterLeftDesc>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ... The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </FooterLeftDesc>

                <FooterLeftSocialCont>
                    <FoooterLeftIcons color="385999">
                    <FooterFacebook/>
                    </FoooterLeftIcons>
                    <FoooterLeftIcons color="E4405F">
                    <FooterInstagram/>
                    </FoooterLeftIcons>
                    <FoooterLeftIcons color="55ACEE">
                    <FooterTwitter/>
                    </FoooterLeftIcons>
                    <FoooterLeftIcons color="E60023">
                    <FooterPinterest/>
                    </FoooterLeftIcons>
                </FooterLeftSocialCont>
            </FooterLeft>

            <FooterCenter>
                <FooterCenterTitle>
                    Useful Links
                </FooterCenterTitle>
                <FooterCenterList>
                    <FooterCenterListItem>
                    Home
                    </FooterCenterListItem>
                    <FooterCenterListItem>
                    Cart
                    </FooterCenterListItem>
                    <FooterCenterListItem>
                    Man Fasion
                    </FooterCenterListItem>
                    <FooterCenterListItem>
                    Woman Fashion
                    </FooterCenterListItem>
                    <FooterCenterListItem>
                    Accesssories
                    </FooterCenterListItem>
                    <FooterCenterListItem>
                    My Account
                    </FooterCenterListItem>
                    <FooterCenterListItem>
                    Order Tracking
                    </FooterCenterListItem>
                    <FooterCenterListItem>
                    Wishlist
                    </FooterCenterListItem>
                    <FooterCenterListItem>
                    Terms
                    </FooterCenterListItem>
                </FooterCenterList>
            </FooterCenter>

            <FooterRight>
                <FooterRightTitle>
                    Contact
                </FooterRightTitle>

                <FooterContactItem>
                    <FooterIcon1/>522 Dixie Path, South Tobinchester 98336
                </FooterContactItem>

                <FooterContactItem>
                <FooterIcon2/>+1 234 56 78
                </FooterContactItem>

                <FooterContactItem>
                <FooterIcon3/>contact@kayu.dev
                </FooterContactItem>
            <FooterPayment src="https://i.ibb.co/Qfvn4z6/payment.png" alt =""/>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer

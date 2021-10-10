import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../../responsive';

export const FooterContainer = styled.div`

    height:40vh;
    display:flex;


    ${mobile(
        {
            flexDirection:"column"
        }
        )}
`;

export const FooterLeft = styled.div`
flex:1;
display:flex;
flex-direction: column;
padding:20px;
`;

export const FooterLeftLogo = styled.h1`

`;

export const FooterLeftDesc = styled.p`
margin:20px 0px;
`;

export const FooterLeftSocialCont = styled.div`
display:flex;
justify-content:flex-start;

`;

export const FoooterLeftIcons = styled.div`
width:40px;
height:40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color};
display:flex;
justify-content: center;
align-items: center;
cursor:pointer;
margin-left: 40px;
&:hover{
    transition: 1.5s all ease-in-out;
    transform:scale(1.1);
}
`;

export const FooterFacebook = styled(Facebook)``;

export const FooterInstagram = styled(Instagram)``;

export const FooterPinterest = styled(Pinterest)``;

export const FooterTwitter = styled(Twitter)``;

export const FooterCenter = styled.div`
flex:1;
padding:20px;
${mobile(
        {
            display:"none"
        }
        )}
`;

export const FooterCenterTitle =styled.h3`
    margin-bottom: 30px;
`;

export const FooterCenterList = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
    
`;

export const FooterCenterListItem = styled.li`
    width:50%;
    margin-bottom: 10px;
`;

export const FooterRight = styled.div`
flex:1;
padding:20px;
${mobile(
        {
            backgroundColor:"#E8E8E8"
        }
        )}
`;

export const FooterRightTitle = styled.h1`
margin-bottom: 20px;
`;

export const FooterContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;
`;

export const FooterIcon1 = styled(Room)`
margin-right: 10px;
`;

export const FooterIcon2 = styled(Phone)`
margin-right: 10px;
`;

export const FooterIcon3 = styled(MailOutlined)`
margin-right: 10px;
`;

export const FooterPayment = styled.img`
width:50%;
`;


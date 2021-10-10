import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import { mobile } from '../../responsive';

export const NavBarCont = styled.div`
 
    height:60px;
    ${mobile(
        {
            height:"50px"
    
    }
        )}

`;

export const NavBarWrapper = styled.div`

padding:20px 10px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile(
        {
            padding:"10px 0px"
    
    }
        )}

`;

export const NavBarWrapperLeft = styled.div`

padding:5px 5px;
flex:1;
display:flex;
align-items:center;
    
`;

export const SearchIcon = styled(Search)`
color:gray;
font-size:16px !important;

`;

export const NavBarLanguage = styled.span`
font-size: 14px;
${mobile(
        {
            display:"none"
    
    }
        )}
`;

export const NavBarLeftSearchCont = styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;



export const NavBarLeftInput = styled.input`
    border:none;
    ${mobile(
        {
            width:"50px"
    
    }
        )}
`;

export const NavBarWrapperCenter = styled.div`

padding:5px 5px;
flex:1;
text-align: center;
`;

export const NavBarWrapperLogo = styled.h1`
font-weight: 600;
${mobile(
        {
            fontSize:"24px"
    
    }
        )}
`;

export const NavBarWrapperRight = styled.div`
padding:5px 5px;
flex:1;
display:flex;
align-items:center;
justify-content: flex-end;
${mobile(
        {
            justifyContent:"center",
            flex:"2"
    
    }
        )}
`;

export const NavBarWrapperMenuItem = styled.div`
font-size: 15px;
cursor:pointer;
margin-left: 25px;
${mobile(
        {
            fontSize:"12px",
            marginLeft:"10px"
    
    }
        )}
`;

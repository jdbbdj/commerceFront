
import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

import { NavBarCont,
    NavBarWrapper,
    NavBarWrapperLeft,
    NavBarWrapperRight,
    NavBarWrapperCenter,
    NavBarLanguage, 
    NavBarLeftSearchCont,
    NavBarLeftInput,
    NavBarWrapperLogo,
    NavBarWrapperMenuItem,
    SearchIcon
    } from './NavBarElements';



const NavBar = () => {
    return (
        <NavBarCont>
            <NavBarWrapper>
                <NavBarWrapperLeft>
                    <NavBarLanguage>
                        EN
                    </NavBarLanguage>
                    <NavBarLeftSearchCont>
                        <NavBarLeftInput/>
                        <SearchIcon/>
                    </NavBarLeftSearchCont>
                </NavBarWrapperLeft>
                <NavBarWrapperCenter>
                    <NavBarWrapperLogo>
                        Kay'U
                    </NavBarWrapperLogo>
                </NavBarWrapperCenter>
                <NavBarWrapperRight>
                    <NavBarWrapperMenuItem>
                    Register
                    </NavBarWrapperMenuItem>
                    <NavBarWrapperMenuItem>
                    Sign In
                    </NavBarWrapperMenuItem>
                    <NavBarWrapperMenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart/>
                        </Badge>
                    </NavBarWrapperMenuItem>
                </NavBarWrapperRight>
            </NavBarWrapper>
        </NavBarCont>
    )
}

export default NavBar

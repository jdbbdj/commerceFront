import styled from 'styled-components';
import { mobile } from '../../responsive';

export const CategoriesContainer = styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
    overflow: hidden;


    ${mobile(
        {
            flexDirection:"column"
    
    }
        )}
    
`;
import styled from "styled-components";
import { mobile } from "../../responsive";


export const ProductListPageCont = styled.div`

`;

export const ProductPageTitle = styled.h1`
margin: 20px;
`;


export const ProductFilterCont  = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 20px;
`;

export const ProductFilter = styled.div`
    margin: 20px;
    ${mobile(
        {
            margin:"0px 20px",
            display:"flex",
            flexDirection:"column"
        }
        )}
`;

export const ProductFilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile(
        {
            marginRight:"0px"
        }
        )}
`;


export const FilterOption = styled.option`
    background-color: #${props=>props.textColor};
    color:${props=>props.color};
    font-size: 19px;
    height: 20px !important;
    border:none;

`;


export const FilterSelect = styled.select`
    padding:10px;
    margin-right: 20px;
    border:none;

    ${mobile(
        {
            margin:"10px 0px"
        }
        )}

     & ${FilterOption}:nth-child(2) {

      }

      & ${FilterOption}:nth-child(3) {

      }

      & ${FilterOption}:nth-child(4) {

      }

      & ${FilterOption}:nth-child(5) {
        
      }

      & ${FilterOption}:nth-child(6) {

      }
`;

import { Card } from "antd";
import styled from "styled-components";
export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img{
        height: 200px;
        width: 200px;
    },
    position: relative;
    background-color: ${props => props.disabled ? '#ccc' : '#fff'} ;
    cursor : ${props => props.disabled ? 'not-allowed' : 'pointer'}
    
`

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-weight: 16px;
    color: rgb(56, 56, 61);
    font-weight: bold;
    text-align: center; 
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 8px 0;
    
    &:hover {
        white-space: normal; 
        overflow: visible; 
        text-overflow: unset; 
        background-color: rgb(26,148,255); 
        z-index: 1; 
        position: absolute; 
        top: 80%;
        color: rgb(255, 255, 255); 
        left: 50%; 
        transform: translate(-50%, -50%); 
        padding: 12px;        
        width: 90%;
        height: 18%;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); 
        border-radius: 4px;
    }
`

export const WrapperReportTest = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`

export const WrapperPriceTest = styled.div`
    color: black;
    font-size: 16px;
    font-weight:500;
    
`

export const WrapperPriceTextProduct = styled.div`
    span.origin-price{
        font-size: 16px;
        line-height: 40px;
        font-weight: 500;
    },
    span.discount-price {
        font-size: 16px;
        line-height: 40px;
       
        font-weight: 500;
        
        color: red
    }
`

export const WrapperDiscountTest = styled.span`
    color: rgb(255, 66, 78);
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 4px;
    background-color: rgba(255, 66, 78, 0.1);
    border-radius: 4px;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-weight: 24px;
    color: rgb(120,120,120)
`
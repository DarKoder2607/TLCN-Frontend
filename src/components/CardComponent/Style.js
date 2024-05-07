import { Card } from "antd";
import styled from "styled-components";
export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img{
        height: 200px;
        width: 200px;
    },
    position: relative;
`

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-weight: 16px;
    color: rgb(56, 56, 61);
    font-weight: 400;
`

export const WrapperReportTest = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`

export const WrapperPriceTest = styled.div`
    color: rgb(255,66,78);
    font-size: 16px;
    font-weight:500;
    
`

export const WrapperDiscountTest = styled.span`
    color: rgb(255,66,78);
    font-size: 12px;
    font-weight:500
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-weight: 24px;
    color: rgb(120,120,120)
`
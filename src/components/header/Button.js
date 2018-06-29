import React from 'react';
import pink from '@material-ui/core/colors/pink';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: ${pink[500]};
    padding: 8px 16px;
    font-size: 0.875rem;
    min-width: 88px;
    box-sizing: border-box;
    min-height: 36px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.4em;
    border-radius: 4px;
    text-transform: uppercase;
    display: inline-flex;
    outline: none;
    position: relative;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    padding: 10px 0;
`

const StyleButton = ({children, action}) => {
    return (
        <StyledButton onClick={() => action()}>{children}</StyledButton>
    )
}

export default StyleButton 
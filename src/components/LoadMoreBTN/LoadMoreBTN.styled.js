import styled from "styled-components";

export const LoadMoreButton = styled.button`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: blue;
    color: yellow;
    border: none;
    transition-property: background-color, color, border;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: yellow;
        color: blue;
        border: 2px solid blue;
    }
`
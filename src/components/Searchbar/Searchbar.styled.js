import styled from "styled-components";

const Header = styled.header`
    padding: 15px;
    text-align: center;
    margin-bottom: 20px
`

const FormBox = styled.form``

const SearchBTN = styled.button`
    background-color: white;
    border: 2px solid aqua;
    border-radius: 5px;
    padding: 10px;
    margin-right: 15px;
    transition-property: background-color, border;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        border: 1px solid red;
        background-color: aqua;
    }
`

const SearchBTNIcon = styled.span``

const SearchInput = styled.input`
    height: 37px;
    width: 300px;
    border-radius: 5px;
    color: blue;
    border: 2px solid aqua;
    outline-color: red;
    padding-left: 10px;
`

export {Header, FormBox, SearchBTN, SearchBTNIcon, SearchInput}
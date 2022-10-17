import styled from "styled-components";

const GalleryList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-top: -10px
`
const GalleryItem = styled.li`
    width: calc(100% / 2 - 10px);
    margin-right: 10px;
    margin-top: 10px
`
const GalleryImage = styled.img`
    width: 580px;
    height: auto
`

export {GalleryList, GalleryItem, GalleryImage}
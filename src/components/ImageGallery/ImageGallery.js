import { PureComponent } from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";
import {GalleryList} from "./ImageGallery.styled"

export class ImageGallery extends PureComponent {

    render() {
        return (
            <GalleryList>
                {this.props.imageArr.map(image => {
                    const {id, webformatURL, largeImageURL, tags} = image
                    return (
                        <ImageGalleryItem id={id} key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} openLarge={this.props.openLarge}/>
                    )
                })}
            </GalleryList>
        )
    }
}
import { PureComponent } from "react";
import {GalleryItem, GalleryImage} from "./ImageGallery.styled"

export class ImageGalleryItem extends PureComponent {
    openLargeImage = evt => {
        this.props.openLarge(evt)
    }
    render() {
        return (
            <GalleryItem key={this.props.id}>
                <GalleryImage data-id={this.props.id} src={this.props.webformatURL} data-src={this.props.largeImageURL} alt={this.props.tags} onClick={this.openLargeImage} />
            </GalleryItem>
        )
    }
}
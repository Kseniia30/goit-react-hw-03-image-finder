import { PureComponent } from "react";

export class BackdropImage extends PureComponent {

    render() {
        return (
            <img key={this.props.id} src={this.props.largeIMG} alt={this.props.modalTags} width="1000" height="auto"/>
        )
    }
}
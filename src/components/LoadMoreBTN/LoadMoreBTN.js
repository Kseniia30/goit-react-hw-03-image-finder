import { PureComponent } from "react";
import {LoadMoreButton} from "./LoadMoreBTN.styled"

export class Button extends PureComponent {
    state = {
        page: 1
    }
    loadMore = evt => {
        const page = this.state.page
        this.props.onPage(page)
    }

    render() {
        return (
            <LoadMoreButton type="button" onClick={this.loadMore}>Load More</LoadMoreButton>
        )
    }
}
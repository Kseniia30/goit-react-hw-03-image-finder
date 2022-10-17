import { PureComponent } from "react";
import { Header } from "./Searchbar.styled";
import { SearchBox } from "./SearchForm";

export class Searchbar extends PureComponent {
    state = {
        images: [],
    }
    addImages = query => {
        this.props.onResult(query)
    }

    render() {
        return (
            <Header>
                <SearchBox onSubmit={this.addImages} />
            </Header>
        )
    }
}
import { PureComponent } from "react";
import { FormBox, SearchBTN, SearchInput, SearchBTNIcon } from "./Searchbar.styled";
import { BsSearch } from "react-icons/bs";
import Notiflix from 'notiflix';

export class SearchBox extends PureComponent {
    state = {
        query: "",
        page: 1,
        images: []
    }

    submitImages = evt => {
        evt.preventDefault()
        if (evt.target.elements.query.value === "") {
            Notiflix.Notify.failure('Please, enter search query');
        }
        else {
            const query = evt.target.elements.query.value
            this.props.onSubmit(query)
        }
    }

    render() {
        return (
            <FormBox onSubmit={this.submitImages}>
                <SearchBTN type="submit">
                    <SearchBTNIcon>
                        <BsSearch />
                    </SearchBTNIcon>
                </SearchBTN>

                <SearchInput
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"/>
            </FormBox>
        )
    }
}
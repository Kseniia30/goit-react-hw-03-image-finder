import { Modal } from "components/Backdrop/Backdrop";
import { BackdropImage } from "components/Backdrop/BackdropImage";
import { fetchImages } from "components/fetchImg";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/LoadMoreBTN/LoadMoreBTN";
import { Searchbar } from "components/Searchbar/Searchbar";
import { PureComponent } from "react";
import { ProgressBar, Dna } from 'react-loader-spinner'
import {MainSection, BackPicture} from "./App.styled"

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

export class AppBox extends PureComponent {
    state = {
        query: "",
        page: 1,
        images: [],
        showModal: false,
        largeIMG: "",
        modalTags: "",
        modalImageId: "",
        status: Status.IDLE,
        error: null
    }
    componentDidUpdate(_, prevState) {
        if (prevState.query !== this.state.query) {
            this.setState({ status: Status.PENDING });
        }
        if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
            fetchImages({ query: this.state.query, page: this.state.page })
                .then(res => {
                    const results = res.data.hits
                    this.setState({ status: Status.RESOLVED })
                    this.setState({images: [...this.state.images, ...results]})
            })
            .catch(error => { this.setState({ error, status: Status.REJECTED }) })
        }
    }
    submitInfo = (query) => {
        this.setState({
            query: query,
            page: 1,
            images: []
        })
    }
    loadMore = page => {
        this.setState({page: this.state.page + 1})
    }
    toggleModal = (evt) => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }))
    }
    openLargeImage = evt => {
        this.toggleModal()
        this.setState({
            largeIMG: evt.target.dataset.src,
            modalTags: evt.target.alt,
            modalImageId: evt.target.dataset.id
        })
    }
    render() {
        return (
            <>
                <Searchbar onResult={this.submitInfo} />

                {this.state.status === "pending" &&
                    <ProgressBar
                        height="100"
                        width="1200"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor = '#F4442E'
                        barColor='#51E5FF' />}
                <MainSection>
                    {this.state.status === "idle" && 
                        <BackPicture src="https://armyinform.com.ua/wp-content/uploads/2022/02/gerb-960x540.jpg" alt="Slava Ukraini"/>
                    }
                    
                {this.state.status === "resolved" && 
                    <ImageGallery imageArr={this.state.images} openLarge={this.openLargeImage} />}
                {this.state.images.length !== 0 &&
                    <Button onPage={this.loadMore} />}
                
                </MainSection>
                {this.state.showModal && 
                    <Modal onClose={this.toggleModal}>
                        <BackdropImage key={this.state.modalImageId} largeIMG={this.state.largeIMG} modalTags={this.state.modalTags}/>
                    </Modal> 
                }
            </>
        )
    }
}
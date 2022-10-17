import { Modal } from "components/Backdrop/Backdrop";
import { BackdropImage } from "components/Backdrop/BackdropImage";
import { fetchImages } from "components/fetchImg";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/LoadMoreBTN/LoadMoreBTN";
import { Searchbar } from "components/Searchbar/Searchbar";
import { PureComponent } from "react";
import { MainSection } from "./App.styled"
import { Loader } from "components/Loader/Loader";
import { StartPicture } from "components/StartPicture/StartPicture";
import { ToTopBTN } from "components/ToTopBTN/ToTopBTN";

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
    backToTop() {
        const timer = () => {window.scrollBy(0, -300);}
        const interval = setInterval(timer, 10)
        setTimeout(() => {
            clearInterval(interval)
        }, 1000);
    }

    render() {
        return (
            <>
                <Searchbar onResult={this.submitInfo} />

                {this.state.status === "pending" &&
                    <Loader/>}
                
                <MainSection>

                    {this.state.status === "idle" && 
                        <StartPicture/>}
                    
                {this.state.status === "resolved" && 
                    <ImageGallery imageArr={this.state.images} openLarge={this.openLargeImage} />}
                    
                    {this.state.images.length !== 0 &&
                        <>
                        <Button onPage={this.loadMore} />
                        <ToTopBTN backToTop={this.backToTop}/>
                        </>}
                    
                </MainSection>

                {this.state.showModal && 
                    <Modal onClose={this.toggleModal}>
                        <BackdropImage key={this.state.modalImageId} largeIMG={this.state.largeIMG} modalTags={this.state.modalTags}/>
                    </Modal> }
            </>
        )
    }
}
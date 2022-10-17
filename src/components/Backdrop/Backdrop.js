import { PureComponent } from "react";
import { createPortal } from "react-dom";
import {BackdropBox, ModalBox} from "./Backdrop.styled"

const modalRoot = document.querySelector("#modal-root")

export class Modal extends PureComponent {
    componentDidMount() {
        window.addEventListener("keydown", this.handleEsc)
        window.addEventListener("click", this.handleClick)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleEsc)
        window.removeEventListener("click", this.handleClick)
    }
    handleEsc = evt => {
        evt.preventDefault()
            if (evt.code === "Escape") {
                this.props.onClose()
            }
    }
    handleClick = evt => {
        if (evt.target === document.querySelector("#\\#backdrop")) {
            this.props.onClose()
        }
    }
    render() {
        return createPortal(
            <BackdropBox id="#backdrop">
                <ModalBox>
                    {this.props.children}
                </ModalBox>
            </BackdropBox>,
            modalRoot
        )
    }
}


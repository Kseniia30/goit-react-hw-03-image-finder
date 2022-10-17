import { PureComponent } from "react";
import { TbArrowBigUpLine } from "react-icons/tb";
import { TopBTN } from "../App/App.styled"

export class ToTopBTN extends PureComponent {
    render() {
        return (
            <TopBTN onClick={this.props.backToTop}>
                <TbArrowBigUpLine/>
            </TopBTN>
        )
    }
}
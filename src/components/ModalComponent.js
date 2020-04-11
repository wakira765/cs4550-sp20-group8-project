import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class ModalComponent extends React.Component {

    state = {
        ndc: []
    }

    render() {
        if(!this.props.showModal) {
            return null;
        }
        return (
            <div className={"modal-component " + this.props.className}>
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h2 className="modal-header">{this.props.title}</h2>
                        <button onClick={this.props.closeModal} className="close-button">
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </button>
                        <div className="modal-content">{this.props.children}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalComponent

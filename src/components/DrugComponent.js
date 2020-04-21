import React from "react";
import DrugInformationComponent from "./DrugInformationComponent";
import DrugService from "../services/DrugService";
import DrugCommentService from "../services/DrugCommentService";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {findDrugDataAction, findDrugCommentsAction, createDrugCommentAction, subscribeToDrugAction, userAction, userSubscriptionsAction} from "../actions/DrugActions";
import SubscriptionService from "../services/SubscriptionService";
import UserService from "../services/UserService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";

class DrugComponent extends React.Component {

    state = {
        comment: ""
    }

    componentDidMount() {
        this.props.findDrugData(this.props.drugName);
        this.props.findDrugCommentsByNdc(this.props.drugName);
        this.props.findCurrentUserSubscriptions();
        this.props.findCurrentUser();
    }

    updateForm = (newState) => {
        this.setState(newState);
    }

    createDrugComment = (text) => {
        let today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth()+1;
        const yyyy = today.getFullYear();

        today = mm+'/'+dd+'/'+yyyy;
        const newComment = {
            text: text,
            date: today,
            productNdc: this.props.drugName
        };

        this.setState({comment: ""});
        this.props.createDrugComment(newComment);
    }

    subscribeToDrug = () => {
        const subscribeObject = {
            productNdc: this.props.drugName
        };
        this.props.subscribeToDrug(subscribeObject);
    }

    render() {
        return (
            <div className="drug-component">
                {this.props.drugInfo.properties && <div className="drug-container">
                    <nav className="drug-header-bar">
                        <button onClick={() => this.props.history.goBack()} className="close-button">
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </button>
                        <h2 className="drug-name">{this.props.drugInfo.properties.openfda.brand_name}</h2>
                    </nav>
                    {this.props.user.userName && <button className="subscribe-button" disabled={this.props.subscriptions.includes(this.props.drugName)} onClick={() => this.subscribeToDrug()}>{this.props.subscriptions.includes(this.props.drugName) ? "Subscribed" : "Subscribe"}</button>}
                    <DrugInformationComponent drugInfo={this.props.drugInfo}/>
                    <div className="comments-section">
                        <h3 className="comments-section-header">Comments Section</h3>
                        {
                            this.props.comments && this.props.comments.length > 0 && this.props.comments.map((comment, index) => {
                                return (
                                    <div key={index} className={"comment comment-"+index}>
                                        {comment.isDoctor ? <FontAwesomeIcon className="user-doctor-icon user-icon" icon={faUserMd}></FontAwesomeIcon> : <FontAwesomeIcon className="user-icon" icon={faUser}></FontAwesomeIcon>}
                                        <Link to={`/profile/${comment.author}`} className="comment-author">{comment.isDoctor ? "Dr. " : ""}{comment.author}</Link>
                                        {comment.isDoctor && <FontAwesomeIcon className="plus-icon" icon={faPlus}></FontAwesomeIcon>}
                                        <p className="comment-date">Posted: {comment.date}</p>
                                        <p className="comment-text">{comment.text}</p>
                                    </div>
                                )
                            })
                        }
                        {this.props.user.userName && <div className="post-comment-section">
                            <label className="post-comment-label" htmlFor="post-comment-input">Post a comment</label>
                            <textarea className="post-comment-textfield"
                              id="post-comment-input"
                              onChange={(e) => this.updateForm({
                                comment: e.target.value
                              })}
                              value={this.state.comment}>
                            </textarea>
                            <button onClick={() => this.createDrugComment(this.state.comment)} className="post-comment-button">Post Comment</button>
                        </div>}
                        {!this.props.user.userName && <div className="login-comment-section">
                            <Link to={`/login`} className="login-link">Please log in to leave a comment</Link>
                        </div>}
                    </div>

                </div>}
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return ({
        drugInfo: state.drug.drugInfo,
        comments: state.drug.comments,
        subscriptions: state.drug.subscriptions,
        user: state.drug.user
    })
};

const dispatchToPropertyMapper = (dispatch) => {
    return ({
        findDrugData: (drugName) =>
            DrugService.findDrugByNdc(drugName)
                .then(infos => dispatch(findDrugDataAction(infos))),
        findDrugCommentsByNdc: (ndc) =>
            DrugService.findDrugCommentsByNdc(ndc)
                .then(comments => dispatch(findDrugCommentsAction(comments))),
        createDrugComment: (comment) =>
            DrugCommentService.createDrugComment(comment)
                .then(newComment => dispatch(createDrugCommentAction(newComment))),
        subscribeToDrug: (ndc) =>
            SubscriptionService.createDrugSubscription(ndc)
                .then(subscription => dispatch(subscribeToDrugAction(subscription))),
        findCurrentUserSubscriptions: () =>
            SubscriptionService.findCurrentUserSubscriptions()
                .then(subscriptions => dispatch(userSubscriptionsAction(subscriptions))),
        findCurrentUser: () =>
            UserService.findUserProfile()
                .then(user => dispatch(userAction(user)))
    })
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(DrugComponent)

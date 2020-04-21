import {SOURCE} from "../constants";

/**
 * Creates a new drug comment.
 * The field required to create a comment are:
 * - text: the text of the comment
 * - date: the string version of the date
 * - productNdc: the product ndc that the comment refers to
 * The author of the post will be set in the back-end
 * NOTE: the field names have to match the above.
 * @param comment
 * @returns {Promise<any>}
 */
export const createDrugComment = (comment) => {
    return fetch(`${SOURCE}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

export const findDrugCommentsByUsername = (username) => {
    return fetch(`${SOURCE}/users/${username}/comments`)
        .then(response => response.json())
};

export default {
    createDrugComment,
    findDrugCommentsByUsername
}

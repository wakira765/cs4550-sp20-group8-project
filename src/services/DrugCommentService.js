import {LOCALHOST_API} from "../constants";

/**
 * Creates a new drug comment.
 * The field required to create a comment are:
 * - text: the text of the comment
 * - date: the string version of the date
 * - productNdc: the product ndc that the comment refers to
 * - author: the author of the post
 * NOTE: the field names have to match the above.
 * @param comment
 * @returns {Promise<any>}
 */
export const createDrugComment = (comment) => {
    return fetch(`${LOCALHOST_API}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

export const findDrugCommentsByUsername = (username) => {
    return fetch(`${LOCALHOST_API}/users/${username}/comments`)
        .then(response => response.json())
};

export default {
    createDrugComment,
    findDrugCommentsByUsername
}

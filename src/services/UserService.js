/**
 * Sends a registration request.
 * The minimum data required to register a user are:
 * - userName
 * - password
 * - isDoctor
 * - medicalId (only if doctor)
 * The new user created is returned.
 * @param user
 */
import {SOURCE} from "../constants";

export const registerUser = (user) => {
    return fetch(`${SOURCE}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

/**
 * Updated the information of a user.
 * The information that can be stored are the followings:
 * - firstName
 * - lastName
 * - email
 * - dob (date of birth)
 * - isDoctor
 * - medicalId (the medical id of the user if it is a doctor)
 * NOTE: names of fields must match
 *
 * @param userId
 * @param user
 * @returns {Promise<any>}
 */
export const updateUser = (userId, user) => {
    return fetch(`${SOURCE}/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

/**
 * Gets a user profile from the current session.
 * @returns {Promise<any>}
 */
export const findUserProfile = () => {
    return fetch(`${SOURCE}/profile`, {
        method: 'POST',
        credentials: 'include'
    }).then(response => response.json())
};

/**
 * Checks whether a user with given credentials exists.
 * Returns 1 for success and 0 if not found.
 * @param username
 * @param password
 * @returns {Promise<any>}
 */
export const findUserByCredentials = (username, password) => {
    return fetch(`${SOURCE}/login`, {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

export default {
    registerUser,
    updateUser,
    findUserProfile,
    findUserByCredentials
}

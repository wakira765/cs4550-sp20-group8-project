import {SOURCE} from "../constants";
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
 * - gender: gender can be one of MALE/FEMALE/UNDEFINED
 * - height: height is represented in centimeters
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
        credentials: 'include',
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
        method: 'GET',
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
        body: JSON.stringify({userName: username, password: password}),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

export const findUserByUsername = (username) => {
<<<<<<< HEAD
    return fetch(`${SOURCE}/users/{userId}`)
=======
    return fetch(`${LOCALHOST_API}/users/${username}`)
>>>>>>> fe05e898b8867b31ab89054f24e4f41d1e08af05
        .then(response => response.json())
};

export default {
    registerUser,
    updateUser,
    findUserProfile,
    findUserByCredentials,
    findUserByUsername
}

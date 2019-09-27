import { combineReducers } from 'redux';
import * as C from '../actions/types';


export function user(userState = {
    pending: false,
    user: {
        email: "",
        password: "",
        name: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        aboutme: ""
    },
    error: null
}, action) {
    switch (action.type) {
        case C.LOGIN_PENDING:
            return {
                ...userState,
                pending: true
            }
        case C.LOGIN_SUCCESS:
            return {
                ...userState,
                pending: false,
                user: action.payload
            }
        case C.LOGIN_ERROR:
            return {
                ...userState,
                pending: false,
                error: action.error
            }
        default:
            return userState
    }
}

export function contacts(contactsState = {
    pending: false,
    contacts: [],
    error: null
}, action) {
    switch (action.type) {
        case C.FETCH_CONTACTS_PENDING:
            return {
                ...contactsState,
                pending: true
            }
        case C.FETCH_CONTACTS_SUCCESS:
            return {
                ...contactsState,
                pending: false,
                contacts: action.payload
            }
        case C.FETCH_CONTACTS_ERROR:
            return {
                ...contactsState,
                pending: false,
                error: action.error
            }
        default:
            return contactsState;
    }
}


export function contact(contactState = {
    pending: false,
    contact: {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        social_link: ""
    },
    error: null
}, action) {
    switch (action.type) {
        case C.FETCH_ONECONTACT_PENDING:
            return {
                ...contactState,
                pending: true
            }
        case C.FETCH_ONECONTACT_SUCCESS:
            return {
                ...contactState,
                pending: false,
                contact: action.payload
            }
        case C.FETCH_ONECONTACT_ERROR:
            return {
                ...contactState,
                pending: false,
                error: action.error
            }
        default:
            return contactState
    }
}

export function notice(notice = null, action) {
    switch (action.type) {
        case C.ADD_NOTICE:
            return action.payload
        default:
            return notice
    }
}


export default combineReducers({ user, contacts, contact, notice })
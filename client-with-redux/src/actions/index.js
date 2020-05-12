import * as C from './types';
import axios from 'axios';
import { RSAA } from 'redux-api-middleware';

// prod url: http://ec2-54-196-72-152.compute-1.amazonaws.com:8080
const API_URL = 'https://pacific-waters-15646.herokuapp.com';

export const signupPostPending = () => {
    return {
        type: C.SIGNUP_PENDING
    }
}
export const signupPostSuccess = (status) => {
    return {
        type: C.SIGNUP_SUCCESS,
        payload: status
    }
}
export const signupPostError = (error) => {
    return {
        type: C.SIGNUP_ERROR,
        payload: error
    }
}

export const loginPostPending = () => {
    return {
        type: C.LOGIN_PENDING,
    }
}
export const loginPostSuccess = (status) => {
    return {
        type: C.LOGIN_SUCCESS,
        payload: status
    }
}
export const loginPostError = (error) => {
    return {
        type: C.LOGIN_ERROR,
        payload: error
    }
}


// export const fetchContactsPending = () => {
//     return {
//         type: C.FETCH_CONTACTS_PENDING
//     }
// }
// export const fetchContactsSuccess = (data) => {
//     return {
//         type: C.FETCH_CONTACTS_SUCCESS,
//         payload: data
//     }
// }
// export const fetchContactsError = (error) => {
//     return {
//         type: C.FETCH_CONTACTS_ERROR,
//         payload: error
//     }
// }




export const fetchContactPending = () => {
    return {
        type: C.FETCH_ONECONTACT_PENDING
    }
}
export const fetchContactSuccess = (data) => {
    return {
        type: C.FETCH_ONECONTACT_SUCCESS,
        payload: data
    }
}
export const fetchContactError = (error) => {
    return {
        type: C.FETCH_ONECONTACT_ERROR,
        payload: error
    }
}

export const postContactPending = () => {
    return {
        type: C.POST_ONECONTACT_PENDING
    }
}
export const postContactSuccess = (data) => {
    return {
        type: C.POST_ONECONTACT_SUCCESS,
        payload: data
    }
}

export const postContactError = (error) => {
    return {
        type: C.POST_ONECONTACT_ERROR,
        payload: error
    }
}


export const putContactPending = () => {
    return {
        type: C.PUT_ONECONTACT_PENDING
    }
}
export const putContactSuccess = (data) => {
    return {
        type: C.PUT_ONECONTACT_SUCCESS,
        payload: data
    }
}

export const putContactError = (error) => {
    return {
        type: C.PUT_ONECONTACT_ERROR,
        payload: error
    }
}


export const deleteContactPending = () => {
    return {
        type: C.DELETE_ONECONTACT_PENDING
    }
}
export const deleteContactSuccess = () => {
    return {
        type: C.DELETE_ONECONTACT_SUCCESS,
    }
}
export const deleteContactError = (error) => {
    return {
        type: C.DELETE_ONECONTACT_ERROR,
        payload: error
    }
}

export const putOnNotice = (text) => {
    return {
        type: C.ADD_NOTICE,
        payload: text
    }
}

export const refreshPage = () => {
    return {
        type: C.REFRESH_PAGE
    }
}

export const userLogout = () => {
    return {
        type: C.USER_LOGOUT
    }
}


// export const fetchContacts = () => (dispatch, getState) => {
//actually, 如果thunk里不需要dispatch什么action或者不需要从store里getState的话，可以不用(dispatch, getState))占位；直接列出()就可以。如果需要其中一个，如果是dispatch，可以写成(dispatch),第二个getState忽略；如果是getState，因为有position的问题，需要dispatch的位置占位(_, getState);
//     dispatch(fetchContactsPending());
//     axios.get('http://localhost:8080/api/contacts/', {withCredentials: true})
//         .then(res => {
//             if (res.error) {
//                 throw (res.error);
//             }
//             dispatch(fetchContactsSuccess(res.data.contacts),

//             )

//         })
// }

export const fetchContactsList = () => ({
    [RSAA]: {
        endpoint: API_URL + '/api/contacts/',
        method: 'GET',
        //   headers: state => {
        //     const contentTypeHeader = { 'Content-Type': 'application/json' };
        //   },
        credentials: "include",
        types: [
            C.FETCH_CONTACTS_PENDING,
            C.FETCH_CONTACTS_SUCCESS,
            C.FETCH_CONTACTS_ERROR
        ],
    },
});


// export const fetchOneContact = (id) => (dispatch) => {

//     dispatch(fetchContactPending());
//     axios.get(API_URL + `/api/contacts/${id}`, {withCredentials: true})
//         .then(res => {
//             if (res.error) {
//                 dispatch(fetchContactError(res.error));
//                 //throw (res.error);                
//             }
//             dispatch(fetchContactSuccess(res.data.contacts[0]),

//             )

//         })
// }
export const fetchOneContact = (id) => ({
    [RSAA]: {
        endpoint: API_URL + `/api/contacts/${id}`,
        method: 'GET',
        credentials: "include",
        types: [
            C.FETCH_ONECONTACT_PENDING,
            C.FETCH_ONECONTACT_SUCCESS,
            C.FETCH_ONECONTACT_ERROR,

        ]
    }
})

// export const postOneContact = ( data ) => (dispatch) => 
// {
//     dispatch(postContactPending());
//     axios.post( API_URL + '/api/contact/', data, {headers: {
//           'content-Type':
//           'multipart/form-data'
//         }, withCredentials: true})
//         .then(res => {
//             if (res.error) {
//                 throw (res.error);
//             }
//             dispatch(postContactSuccess(data)
//             )

//             dispatch(fetchContactsList())

//             // return axios.get('http://localhost:8080/api/contacts/',  {withCredentials: true})
//         })
//         //     .then(res => {
//         //         if (res.error) {
//         //             throw (res.error);
//         //         }
//         //         dispatch(fetchContactsSuccess(res.data.contacts)
//         //         )
//         // })
// }

export const postOneContact = (data) => ({
    [RSAA]: {
        endpoint: API_URL + '/api/contact/',
        method: 'POST',
        body: data,
        // headers: {
        //     'content-Type': 'multipart/form-data'
        //   },
        credentials: "include",
        types: [
            C.FETCH_ONECONTACT_PENDING,
            C.FETCH_ONECONTACT_SUCCESS,
            C.FETCH_ONECONTACT_ERROR,

        ]
    }
})

export const postOneAndfetchAll = (data) => {
    return async (dispatch, getState) => {
        await dispatch(postOneContact(data));
        await dispatch(fetchContactsList());
    }
}

export const updateOneContact = (id, contact) => ({
    [RSAA]: {
        endpoint: API_URL + `/api/contact/${id}`,
        method: 'PUT',
        body: contact,
        // headers: {
        //     'content-Type': 'multipart/form-data'
        //   },
        credentials: "include",
        types: [
            C.FETCH_ONECONTACT_PENDING,
            C.FETCH_ONECONTACT_SUCCESS,
            C.FETCH_ONECONTACT_ERROR,

        ]
    }
})

export const updateOneAndfetchAll = (id, contact) => {
    return async (dispatch, getState) => {
        await dispatch(updateOneContact(id, contact));
        return dispatch(fetchContactsList());
    }
}

// export const updateOneContact = (id, contact) => (dispatch) => {

//     dispatch(putContactPending());
//     axios.put(API_URL + `/api/contact/${id}`, contact, {
//         headers: {
//             'content-Type':
//                 'multipart/form-data'
//         }, withCredentials: true
//     })
//         .then(res => {
//             if (res.error) {
//                 throw (res.error);
//             }
//             dispatch(putContactSuccess(contact)
//             )

//             dispatch(fetchContactsList())

//             // return axios.get('http://localhost:8080/api/contacts/',  {withCredentials: true})
//         })
//     //     .then(res => {
//     //         if (res.error) {
//     //             throw (res.error);
//     //         }
//     //         dispatch(fetchContactsSuccess(res.data.contacts)
//     //         )
//     // })
// }

// export const fetchOneContact = (id) => ({
//     [RSAA]: {
//         endpoint: API_URL + `/api/contacts/${id}`,
//         method:'GET',
//         credentials: "include",
//         types: [
//             C.FETCH_ONECONTACT_PENDING,
//             C.FETCH_ONECONTACT_SUCCESS,
//             C.FETCH_ONECONTACT_ERROR,

//         ]
//     }
// })

export const deleteOneContact = (id) => ({
    [RSAA]: {
        endpoint: API_URL + `/api/contact/${id}`,
        method: 'DELETE',
        credentials: 'include',
        types: [
            C.DELETE_ONECONTACT_PENDING,
            C.DELETE_ONECONTACT_SUCCESS,
            C.DELETE_ONECONTACT_ERROR,
        ]
    }
    // dispatch(deleteContactPending());
    // axios.delete( API_URL + `/api/contact/${id}`, {withCredentials: true})
    //     .then(res => {
    //         if (res.error) {
    //             throw (res.error);
    //         }
    //         dispatch(deleteContactSuccess())

    //     dispatch(fetchContactsList())

    // })

})

export const deleteOneAndfetchAll = (id) => {
    return async (dispatch, getState) => {
        await dispatch(deleteOneContact(id));
        return dispatch(fetchContactsList());
    }
}

export const loginAccount = (data) => (dispatch) => {
    let user = {
        email: data.email,
        password: data.password
    }
    console.log("user:" + JSON.stringify(user));
    dispatch(loginPostPending());
    axios.post(API_URL + "/api/login", user, { withCredentials: true })
        .then((res) => {
            console.log("response: " + JSON.stringify(res.status));
            if (res.status === 200) {
                dispatch(loginPostSuccess())
            }

        }, (error) => {
            //console.log(error.response.status);
            dispatch(loginPostError(error));
            if (error.response === undefined) {
                dispatch(putOnNotice("Our service has encountered some unexpected issues, please try again later."))
            } else if (error.response.status === 401) {
                dispatch(putOnNotice("Either username or password is incorrect!"))
            } else {
                dispatch(putOnNotice("Oops! Something went wrong."))
            }
        });
}

export const signupAccount = (data) => (dispatch) => {
    let newuser = {
        email: data.username,
        password: data.password
    }
    console.log("user:" + JSON.stringify(newuser));
    dispatch(signupPostPending());
    axios.post(API_URL + '/api/signup', newuser, { withCredentials: true })
        .then((res) => {
            console.log("response: " + JSON.stringify(res.status));
            if (res.status === 200) {
                dispatch(signupPostSuccess())
                dispatch(putOnNotice("You've successfully registered to Eleable!"))
                setTimeout(() => window.location.replace('login'), 3000);
            } else {
                dispatch(putOnNotice("Our service has encountered some unexpected issues, please try again later."))
            }

        }, (error) => {
            console.log(error);
            dispatch(signupPostError(error));
            dispatch(putOnNotice("Sorry, please check your username and register again."))
        });
}


export const logout = () => (dispatch) => {
    dispatch(userLogout());
    //  axios.get("http://localhost:8080/logout", { withCredentials: true} ).then((res)=>{
    //     console.log("response: " + JSON.stringify(res.status));
    //   if (res.status === 200) {
    //     res.send(status).end()
    //   } else {
    //     dispatch(putOnNotice("Oops, some thing went wrong~"))
    //   }
    // })
}  

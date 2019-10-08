import * as C from './types';
import axios from 'axios';

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


export const fetchContactsPending = () => {
    return {
        type: C.FETCH_CONTACTS_PENDING
    }
}
export const fetchContactsSuccess = (data) => {
    return {
        type: C.FETCH_CONTACTS_SUCCESS,
        payload: data
    }
}
export const fetchContactsError = (error) => {
    return {
        type: C.FETCH_CONTACTS_ERROR,
        payload: error
    }
}



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


export const fetchContacts = () => (dispatch, getState) => {

    dispatch(fetchContactsPending());
    axios.get('http://localhost:8080/api/contacts/', {withCredentials: true})
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(fetchContactsSuccess(res.data.contacts),

            )

        })
}

export const fetchOneContact = (id) => (dispatch, getState) => {

    dispatch(fetchContactPending());
    axios.get(`http://localhost:8080/api/contacts/${id}`, {withCredentials: true})
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(fetchContactSuccess(res.data.contacts[0]),

            )

        })
}

export const postOneContact = ( data ) => (dispatch, getState) => 
{
    dispatch(postContactPending());
    axios.post(`http://localhost:8080/api/contact/`, data, {headers: {
          'content-Type':
          'multipart/form-data'
        }, withCredentials: true})
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(postContactSuccess(data)
            )

            dispatch(fetchContactsPending())

            return axios.get('http://localhost:8080/api/contacts/',  {withCredentials: true})
        })
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchContactsSuccess(res.data.contacts)
                )
        })
}


export const updateOneContact = (id, contact) => (dispatch, getState) => {

    dispatch(putContactPending());
    axios.put(`http://localhost:8080/api/contact/${id}`,  contact, {headers: {
          'content-Type':
          'multipart/form-data'
        }, withCredentials: true})
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(putContactSuccess(contact)
            )

            dispatch(fetchContactsPending())

            return axios.get('http://localhost:8080/api/contacts/',  {withCredentials: true})
        })
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchContactsSuccess(res.data.contacts)
                )
        })
}


export const deleteOneContact = (id) => (dispatch, getState) => {

    dispatch(deleteContactPending());
    axios.delete(`http://localhost:8080/api/contact/${id}`, {withCredentials: true})
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(deleteContactSuccess()
            )

            dispatch(fetchContactsPending())

            return axios.get('http://localhost:8080/api/contacts/',  {withCredentials: true})
        })
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchContactsSuccess(res.data.contacts)
                )
        })
}

export const loginAccount = (data) => (dispatch, getState) => {
    let user = {
        email: data.email,
        password: data.password
    }
    console.log("user:" + JSON.stringify(user));
    dispatch(loginPostPending());
    axios.post("http://localhost:8080/api/login", user, { withCredentials: true})
      .then((res)=>{
          console.log("response: " + JSON.stringify(res.status));
        if (res.status === 200) {
            dispatch(putOnNotice("Login success!"))
            dispatch(loginPostSuccess())
        setTimeout(() =>window.location.replace('/'), 2000);
        } else {
            dispatch(putOnNotice("Our service has encountered some unexpected issues, please try again later."))
        }
    
      }, (error) => {
            console.log(error);
            dispatch(loginPostError(error));
            dispatch(putOnNotice("Either username or password is incorrect!"))
      });
}

export const signupAccount = (data) => (dispatch, getState) => {
    let newuser = {
        email: data.username,
        password: data.password
    }
    console.log("user:" + JSON.stringify(newuser));
    dispatch(signupPostPending());
    axios.post("http://localhost:8080/api/signup", newuser, { withCredentials: true})
      .then((res)=>{
          console.log("response: " + JSON.stringify(res.status));
        if (res.status === 200) {
            dispatch(signupPostSuccess())
            dispatch(putOnNotice("You've successfully registered to Eleable!"))
            setTimeout(() =>window.location.replace('login'), 3000);
        } else {
            dispatch(putOnNotice("Our service has encountered some unexpected issues, please try again later."))
        }
    
      }, (error) => {
            console.log(error);
            dispatch(signupPostError(error));
            dispatch(putOnNotice("Sorry, please check your username and register again."))
      });
}


export const logout = () => (dispatch, getState) => {
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

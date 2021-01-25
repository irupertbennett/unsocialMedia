export const signUp = (newUser) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        
        const firebase = getFirebase();
        const firestore = getFirestore();
        const accountType = 2;
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                email: newUser.email,
                accountType: accountType,
                city: "",
                id: ""
            })
        }).then(() => {
            var user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function() {
                dispatch({type:'VALIDATE_EMAIL'});
            }).catch(function(err) {
                dispatch({type:'VALIDATE_EMAIL_ERROR', err});
            });
        }).catch(function(err) {
           dispatch({type:'CREATE_EMAIL_ERROR', err});
       })
    }
}

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            var user = firebase.auth().currentUser;
            user.reload();
            if(user.emailVerified){
                dispatch({type: 'LOGIN_SUCCESS'});
            }
            else{
                user.sendEmailVerification()
                dispatch({type: 'VERIFY_EMAIL'});
            }
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const updateBio = () => {
    return (dispatch, getState, {getFirestore}) => {
        
    }
}

export const updateDetails = (newDetails) => {
    console.log(newDetails)
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(newDetails.id).update({
            ...newDetails
        }).then(() => {
            dispatch({ type: 'UPDATE_USER', newDetails})
        }).catch((error) => {
            dispatch({ type: 'UPDATE_USER_ERROR', newDetails})
        })
    }
}
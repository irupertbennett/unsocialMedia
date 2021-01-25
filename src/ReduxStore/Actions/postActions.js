export const getPosts = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const createPost = (post) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile
        console.log(profile)
        const authorId = getState().firebase.auth.uid
        firestore.collection('posts').add({
            post,
            postCreated: new Date(),
            createdBy: profile.firstName + " " + profile.lastName,
            authorId: authorId,
            likes: 0,
            loves: 0,
            hates: 0,
            laughs: 0
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post})
        }).catch((error) => {
            dispatch({ type: 'CREATE_POST_ERROR', error})
        })
    }
};

export const updatePost = (post) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('posts').doc(post.id).update({
            ...post
        }).then(() => {
            dispatch({ type: 'UPDATE_POST', post})
        }).catch((error) => {
            dispatch({ type: 'UPDATE_POST_ERROR', error})
        })
    }
};

export const deletePost = (post) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('posts').doc(post).delete().then(() => {
            dispatch({type: 'DELETE_POST', post})
        }).catch((error) => {
            dispatch({type: 'DELETE_POST_ERROR', error})
        })
    }
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postMessage: [
        {id: 1, message: 'hi', likesCount: 22},
        {id: 2, message: 'hi', likesCount: 2},
        {id: 3, message: 'yo', likesCount: 12},
        {id: 0, message: 'it\`s my first post', likesCount: 9}
    ],
     newPostText: 'enter youre text'
}
const profileReducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            state.postMessage.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText; 
            return state;
            default:
                return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export  const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text}) 

export default profileReducer;
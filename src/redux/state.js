import {rerenderEntireTree} from '../render';


let state = {
    pointBlog: {
        postMessage: [
            {id: 1, message: 'hi', likesCount: 22},
            {id: 2, message: 'hi', likesCount: 2},
            {id: 3, message: 'yo', likesCount: 12},
            {id: 0, message: 'it\`s my first post', likesCount: 9}
        ],
         newPostText:['enter youre text']
    },
    pointMessages: {
        dialogItem: [
           {id: 0, name: 'Kat' } ,
           {id: 1, name:'Dan'},
           {id: 2, name:'Lisa'}
        ],
        messageData: [
            {id: 0, message: 'hi'},
            {id: 1, message: 'are you besy?'},
            {id: 2, message: 'yes'}
        ]
    },
    sidbar:{}
}
// export let addPost = (postLastMessage) => {
//     let newPost = {
//         id: 4,
//         message: postLastMessage,
//         likesCount: 0
//     };
//     state.pointBlog.postMessage.push(newPost);
//     rerenderEntireTree(state);
// }
export let addPost = () => {
        let newPost = {
            id: 4,
            message: state.pointBlog.newPostText,
            likesCount: 0
        };
        state.pointBlog.postMessage.push(newPost);
        state.pointBlog.newPostText = '';

        rerenderEntireTree(state);
    }
export let updateNewPostText = (newText) => {
   
    state.pointBlog.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;
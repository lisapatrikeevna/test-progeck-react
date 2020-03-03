import {rerenderEntireTree} from '../render';


let state = {
    pointBlog: {
        postMessage: [
            {id: 1, message: 'hi', likesCount: 22},
            {id: 2, message: 'hi', likesCount: 2},
            {id: 3, message: 'yo', likesCount: 12},
            {id: 0, message: 'it\`s my first post', likesCount: 9}
        ],
        // newPostText:['']
    },
    pointMessages: {
        dialogItem: [
           {id: 0, name: 'Kat'} ,
           {id: 1, name:'Dan'},
           {id: 2, name:'Lisa'}
        ]
    },
    sidbar:{}
}
export let addPost = (postLastMessage) => {
    let newPost = {
        id: 4,
        message: postLastMessage,
        likesCount: 0
    };
    state.pointBlog.postMessage.push(newPost);
    rerenderEntireTree(state);
}


export default state;
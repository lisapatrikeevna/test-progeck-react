import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    pointBlog: dialogsReducer,
    pointMessages: profileReducer,
    sidbar: sidebarReducer
});
let store = createStore(reducers);

export default store;








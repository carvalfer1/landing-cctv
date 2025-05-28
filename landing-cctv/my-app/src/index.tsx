import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counterReducer from './store/reducers/counterReducer';
import historyReducer from './store/reducers/historyReducer';
import iniReducer from './store/reducers/iniReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';


// This import loads the firebase namespace along with all its type information.
import * as Firebase from 'firebase/app';
 
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

debugger;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHjL1FsFgueXTi6TBzbAgYbY9sHhJCPdQ",
    authDomain: "express-app-7b4a8.firebaseapp.com",
    databaseURL: "https://express-app-7b4a8.firebaseio.com",
    projectId: "express-app-7b4a8",
    storageBucket: "",
    messagingSenderId: "274537466728",
    appId: "1:274537466728:web:9caf899e97e20368"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

// -- Realtime Database -- 
const db = Firebase.database();
var ref = db.ref("jestCounter");
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot:any) {
    console.log("Firebase ----------------------> ", snapshot.val());
}, function (errorObject:any) {
    console.log("The read failed: " + errorObject.code);
});

// -- Cloud FireStore --
const dbFireStore = Firebase.firestore();
dbFireStore.collection('votes').doc('results').get()
.then((snapshot:any) => {
    debugger;
    console.log(snapshot.data());
    const description = 'jestCounter';
    // const buf = snapshot.data() ? JSON.parse(snapshot.data()) : null;
    console.log({vote: description, value: snapshot.data()[description]});

    dbFireStore.collection('votes').doc("results").update({ [description]: snapshot.data()[description] + 1});

    // snapshot.forEach((doc) => {
    // console.log(doc.id, '=>', doc.data());
    // });
})
.catch((err) => {
    console.log('Error getting documents', err);
});

const rootReducer = combineReducers({
    archive: historyReducer,
    counter: counterReducer,
    ini: iniReducer
});

// The middlewares runs between the dispatching of an action and the point of the action reaches the reducer.
// action - middlewares - reducer 
// This is a function with a specific structure gived for redux as the official way to use customized middlewares.
const logger = (store:any) => {
    return (next:any) => {
        return (action:any) => {
            console.log("[Custom Middleware Index.tsx] -> Dispatching Action: ", action);
            const result = next(action); // nex() send the action to the store
            console.log("[Custom Middleware Index.tsx] -> next state", store.getState()); // at this moment, the store is already updated
            return result;
        }
    }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk))); // applyMiddleware allow include severals middlewares, can add them separetes wiht comas ','

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import firebase from 'firebase';

// Initialize Firebase
try{
  var config = {
    apiKey: "AIzaSyCiu4OWrrXHRhfVEGJRtMu_qyXGRyXSQ44",
    authDomain: "react-redux-todo-app-8c2a4.firebaseapp.com",
    databaseURL: "https://react-redux-todo-app-8c2a4.firebaseio.com",
    projectId: "react-redux-todo-app-8c2a4",
    storageBucket: "react-redux-todo-app-8c2a4.appspot.com",
    messagingSenderId: "772962937978"
  };

  firebase.initializeApp(config);
}catch(err){

}

export var firebaseRef = firebase.database().ref();
export default firebase;

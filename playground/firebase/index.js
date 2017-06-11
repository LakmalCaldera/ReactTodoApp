import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiu4OWrrXHRhfVEGJRtMu_qyXGRyXSQ44",
    authDomain: "react-redux-todo-app-8c2a4.firebaseapp.com",
    databaseURL: "https://react-redux-todo-app-8c2a4.firebaseio.com",
    projectId: "react-redux-todo-app-8c2a4",
    storageBucket: "react-redux-todo-app-8c2a4.appspot.com",
    messagingSenderId: "772962937978"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    appName: 'Todo App',
    isRunning: true,
    user: {
      firstname: 'lakmal',
      lastname: 'caldera',
      age: 27
    }
  }).then(()=>{
    console.log('Saved to firebase');
  }, (error) => {
    console.log('Firebase error, rollback! error - ', error);
  });

  // firebaseRef.set({
  //   appName: 'Todo Application'
  // });

  // firebaseRef.child('user').set({
  //   firstname: 'upeksha'
  // });


  firebaseRef.update({
    isRunning: false,
    "user/firstname": "champa"
  });

  firebaseRef.child('user').update({
    "firstname": "Upek"
  }).then(() => {
    console.log('Update worked!!');
  }, () => {
    console.log('Update failed!!');
  });

  // firebaseRef.remove();

  firebaseRef.child('user/firstname').remove();
  firebaseRef.update({
    isRunning: null
  });


  // Listen to event value
  firebaseRef.once('value').then((snapshot) => {
    console.log('Entire Database - ', snapshot.key, snapshot.val());
  }, (e) => {
    console.log(e);
  });

  firebaseRef.child('user').once('value').then((snapshot) => {
    console.log('Entire Database - key: value', snapshot.key, ":",snapshot.val());
  }, (e) => {
    console.log(e);
  });

  const logData = (snapshot) => {
    console.log('New state on firebase - ', snapshot.val());
  };
  firebaseRef.on('value', logData);


  // firebaseRef.off();
    firebaseRef.off('value', logData);
    firebaseRef.update({'user/firstname' : 'lakmal'});


  // Creating a notes array in firebase
  var notesRef = firebaseRef.child('notes');

  notesRef.on('child_added', (snapshot) => {
    console.log('child added, ', snapshot.key, snapshot.val());
  });

  notesRef.on('child_changed', (snapshot) => {
    console.log('child changed, ', snapshot.key, snapshot.val());
  });

  notesRef.on('child_removed', (snapshot) => {
    console.log('child removed, ', snapshot.key, snapshot.val());
  });

  var newNotesRef = notesRef.push();
  newNotesRef.set({
    text: 'finish firebase authentication'
  });

  notesRef.push({
    text: 'this is awesome mate!!!'
  })

  // Creating a todoArray in firebase
  var todosRef = firebaseRef.child('todos');

  // Setup event listeners
  todosRef.on('child_added', (snapshot) => {
    console.log(`New Todo Item added(key => value): ${snapshot.key} => ${JSON.stringify(snapshot.val())}`);
  });
  todosRef.on('child_changed', (snapshot) => {
    console.log(`Todo Item changed(key => value): ${snapshot.key} => ${JSON.stringify(snapshot.val())}`);
  });
  todosRef.on('child_removed', (snapshot) => {
    console.log(`Todo Item removed(key => value): ${snapshot.key} => ${JSON.stringify(snapshot.val())}`);
  });

  // Pushing data
  todosRef.push({
    text: 'Brush you teeth',
    completed: false
  });
  todosRef.push({
    text: 'Go to sleep',
    completed: false
  });

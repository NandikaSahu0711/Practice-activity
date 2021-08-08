// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqvi5eGWmMH6vAUtfQ6ZAa8Ul2sm3fdOo",
    authDomain: "kwitter-1ebfd.firebaseapp.com",
    databaseURL: "https://kwitter-1ebfd-default-rtdb.firebaseio.com",
    projectId: "kwitter-1ebfd",
    storageBucket: "kwitter-1ebfd.appspot.com",
    messagingSenderId: "341299497170",
    appId: "1:341299497170:web:21a338ca51edf1cbd0450b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }
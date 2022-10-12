const firebaseConfig = {
    apiKey: "AIzaSyArwXqhGcbyijuXc19rFwiB9WIIaMy2MaY",
    authDomain: "kwitter-project-3b12d.firebaseapp.com",
    databaseURL: "https://kwitter-project-3b12d-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-3b12d",
    storageBucket: "kwitter-project-3b12d.appspot.com",
    messagingSenderId: "1066874635664",
    appId: "1:1066874635664:web:9c9f6748143ee97ef9df15"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
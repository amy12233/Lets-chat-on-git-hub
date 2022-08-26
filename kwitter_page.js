//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDvy0sKzOc48kYog4C-CxKJjwdGNa9-HH4",
    authDomain: "kwitter-ba24f.firebaseapp.com",
    databaseURL: "https://kwitter-ba24f-default-rtdb.firebaseio.com",
    projectId: "kwitter-ba24f",
    storageBucket: "kwitter-ba24f.appspot.com",
    messagingSenderId: "787896984146",
    appId: "1:787896984146:web:4a021b18acac20d061b58b"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");


   function send()
   {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

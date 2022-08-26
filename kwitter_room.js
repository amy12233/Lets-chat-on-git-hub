//ADD YOUR FIREBASE LINKS HERE
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

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name+ " !"


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Names -" + Room_names);
row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
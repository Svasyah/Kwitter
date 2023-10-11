var firebaseConfig = {
      apiKey: "AIzaSyBoZnGwANzMDElF7vO5qiAOCFADi7fsPJM",
      authDomain: "kwitter-3b451.firebaseapp.com",
      databaseURL: "https://kwitter-3b451-default-rtdb.firebaseio.com",
      projectId: "kwitter-3b451",
      storageBucket: "kwitter-3b451.appspot.com",
      messagingSenderId: "192471882982",
      appId: "1:192471882982:web:5ca51fcec7cb59b949af27",
      measurementId: "G-287PB0QR0W"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user").innerHTML="welcome" + user_name + "!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

}
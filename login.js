    function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
    });


    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            setCookie("userLogin", 'TRUE', 30);
            window.location = "index.html";
        }
    });
  }
  
const uid = 'spIn4yU6jXYq1XdfdbdbdfsQmdL2';

getAuth()
  .createCustomToken(uid)
  .then((customToken) => {
    console.log('test');
    // Send token back to client
  })
  .catch((error) => {
    console.log('Error creating custom token:', error);
  });

//   firebase.auth().signInWithCustomToken(token)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

/*NOTIFICATIONS*/
//NEW PROJECT WAS CREATED
//create notification and store it in the firestore collection
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => {
      console.log("notification added", doc);
    });
};

//create notification with first name and last name of use who created it and serverStanm  - returns time whne was created
//creates a trigger when a new workout created and added to firestore db
exports.projectCreated = functions.firestore
  .document("workouts/{workoutId}")
  .onCreate(document => {
    //workout data title, author, id,...
    const workout = document.data();
    //create notification
    const notification = {
      content: "added new workout",
      user: `${workout.authorFirstName} ${workout.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

//A NEW USER SIGNED UP
//new user signed in notification
//create a trigger when a new account is created
exports.userSignedUp = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Created an account",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});

// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }

// IF IN BROWSER SIDE.
// THEN
if (Meteor.isClient) {
  // Initialize the counter to 0
  let counter = 0;

  // Define the helper for the 'hello' template
  Template.hello.onRendered(function () {
    // Set the initial counter value in the DOM
    document.getElementById("counterValue").textContent = counter;
  });

  // Define event for button click in the 'hello' template
  Template.hello.events({
    "click #incrementBtn": function () {
      // Increment the counter and update the DOM
      counter++;
      document.getElementById("counterValue").textContent = counter;
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Code to run on server startup (if needed)
  });
}

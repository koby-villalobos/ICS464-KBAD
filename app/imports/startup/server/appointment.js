import { Meteor } from 'meteor/meteor';
import { Appointments } from '../../api/appointment/appointment.js';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Appointments.collection.insert(data);
}

// Initialize the AppointmentsCollection if empty.
if (Appointments.collection.find().count() === 0) {
  if (Meteor.settings.defaultAppointments) {
    console.log('Creating default data.');
    Meteor.settings.defaultAppointments.map(data => addData(data));
  }
}

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Appointments.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Appointments.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Appointments.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Appointments.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

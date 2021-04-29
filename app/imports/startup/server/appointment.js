import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Appointments } from '/imports/api/appointment/appointment';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Appointments.insert(data);
}

/** Initialize the collection if empty. */
if (Appointments.find().count() === 0) {
  if (Meteor.settings.defaultAppointments) {
    console.log('Creating default Appointment.');
    Meteor.settings.defaultAppointments.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Appointments', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Appointments.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('AppointmentsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Appointments.find();
  }
  return this.ready();
});

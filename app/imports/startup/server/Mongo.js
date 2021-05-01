import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Appointments } from '../../api/appointment/Appointment.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

// Initialize the database with a default data document.
function addData2(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Appointments.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

// Initialize the StuffsCollection if empty.
if (Appointments.collection.find().count() === 0) {
  if (Meteor.settings.defaultAppointments) {
    console.log('Creating default data.');
    Meteor.settings.defaultAppointments.map(data => addData2(data));
  }
}

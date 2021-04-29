import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Appointments = new Mongo.Collection('Appointments');

/** Create a schema to constrain the structure of documents associated with this collection. */
const AppointmentSchema = new SimpleSchema({
  date: String,
  time: String,
  location: String,
  vaccine: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Appointments.attachSchema(AppointmentSchema);

/** Make the collection and schema available to other code. */
export { Appointments, AppointmentSchema };

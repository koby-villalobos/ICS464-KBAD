import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Appointments } from '../../api/appointment/Appointment';
import Appointment from '../components/Appointment';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListAppointments extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Appointments</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Vaccine</Table.HeaderCell>
                <Table.HeaderCell>Select</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.appointments.map((appointment) => <Appointment key={appointment._id} appointment={appointment} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListAppointments.propTypes = {
  appointments: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Appointments.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const appointments = Appointments.collection.find({}).fetch();
  return {
    appointments,
    ready,
  };
})(ListAppointments);

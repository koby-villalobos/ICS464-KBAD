import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Appointment extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.appointment.date}</Table.Cell>
        <Table.Cell>{this.props.appointment.time}</Table.Cell>
        <Table.Cell>{this.props.appointment.location}</Table.Cell>
        <Table.Cell>{this.props.appointment.vaccine}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.appointments._id}`}>Edit</Link>
          {/*{this.props.stuff.vaccine}*/}
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
Appointment.propTypes = {
  appointment: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.number,
    location: PropTypes.string,
    vaccine: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Appointment);

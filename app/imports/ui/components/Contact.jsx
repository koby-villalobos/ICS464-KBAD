import React from 'react';
import { Card, Image, Table, Icon, Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Contact extends React.Component {
  render() {
    return (
        <Container>
        <Card centered>
          <Image src={this.props.contact.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.contact.firstName} {this.props.contact.lastName}</Card.Header>
            <Card.Meta>
              <span className='date'>{this.props.contact.address}</span>
            </Card.Meta>
            <Card.Description>
                {this.props.contact.description}
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <Link to={`/edit/${this.props.contact._id}`}>Edit</Link>
          </Card.Content>
        </Card>

          <Header as="h2" textAlign="center">Your Appointments</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Vaccine</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>5/1/21</Table.Cell>
                <Table.Cell>9:00 AM</Table.Cell>
                <Table.Cell>Queen's Punchbowl</Table.Cell>
                <Table.Cell>Pfizer (first dose)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5/15/21</Table.Cell>
                <Table.Cell>2:00 PM</Table.Cell>
                <Table.Cell>Queen's Punchbowl</Table.Cell>
                <Table.Cell>Pfizer (second dose)</Table.Cell>
              </Table.Row>
            </Table.Body>


            {/*<Table.Body>*/}
            {/*{this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} />)}*/}
            {/*</Table.Body>*/}
          </Table>
          <div className="ui grid">
            <div className="eight wide column">
              <div id="reschedule">
                <p>Need to reschedule?</p>
              </div>
            </div>
            <div className="eight wide column">
              <NavLink exact to="/list">
                <button className="big teal ui right labeled icon button">
                  <i className="right arrow icon"></i>
                  See available appointments
                </button>
              </NavLink>
            </div>
          </div>
        </Container>
    );
  }
}

// Require a document to be passed to this component.
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Contact);
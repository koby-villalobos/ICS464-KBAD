import React from 'react';
// import { Grid, Image } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Grid, Image, Label} from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItem from '../components/StuffItem';

// /** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
// class ListStuff extends React.Component {
//
//   // If the subscription(s) have been received, render the page, otherwise show a loading icon.
//   render() {
//     return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
//   }
//
//   // Render the page once subscriptions have been received.
//   renderPage() {
//     return (
//         <Container>
//           <Header as="h2" textAlign="center">Your Appointments</Header>
//           <Table celled>
//             <Table.Header>
//               <Table.Row>
//                 <Table.HeaderCell>Date</Table.HeaderCell>
//                 <Table.HeaderCell>Time</Table.HeaderCell>
//                 <Table.HeaderCell>Location</Table.HeaderCell>
//                 <Table.HeaderCell>Vaccine</Table.HeaderCell>
//               </Table.Row>
//             </Table.Header>
//             <Table.Body>
//               {this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} />)}
//             </Table.Body>
//           </Table>
//         </Container>
//     );
//   }
// }
//
// // Require an array of Stuff documents in the props.
// ListStuff.propTypes = {
//   stuffs: PropTypes.array.isRequired,
//   ready: PropTypes.bool.isRequired,
// };
//
// // withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
// export default withTracker(() => {
//   // Get access to Stuff documents.
//   const subscription = Meteor.subscribe(Stuffs.userPublicationName);
//   // Determine if the subscription is ready
//   const ready = subscription.ready();
//   // Get the Stuff documents
//   const stuffs = Stuffs.collection.find({}).fetch();
//   return {
//     stuffs,
//     ready,
//   };
// })(ListStuff);


/** A simple static component to render some text for the landing page. */
class Profile extends React.Component {
  render() {
    return (
        <Container>
                    <Header as="h2" textAlign="center">Your Appointments</Header>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Label ribbon>First</Label>
                          </Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                      </Table.Body>


                      {/*<Table.Body>*/}
                         {/*{this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} />)}*/}
                       {/*</Table.Body>*/}

                     </Table>
                   </Container>
    );
  }
}

export default Profile;

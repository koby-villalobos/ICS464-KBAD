import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItem from '../components/StuffItem';
import Contact from '../components/Contact'

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListContacts extends React.Component {

  contacts = [{
    firstName: 'Philip', lastName: 'Johnson', address: 'POST 307, University of Hawaii',
    image: 'https://philipmjohnson.github.io/images/philip2.jpeg',
    description: 'I am a Professor of Information and Computer Sciences at the University of Hawaii, Director ' +
        'of the Collaborative Software Development Laboratory, and the CEO of OpenPowerQuality.com.',
  },
    {
      firstName: 'Henri', lastName: 'Casanova', address: 'POST 307, University of Hawaii',
      image: 'https://avatars0.githubusercontent.com/u/7494478?s=460&v=4',
      description: 'I am originally from France. I maintain a list of reports from my surf sessions. I have proof ' +
          'that I ran the Hana relay with an actual Team.',
    },
    {
      firstName: 'Kim', lastName: 'Binsted', address: 'POST 307, University of Hawaii',
      image: 'data:image/jpeg;base64,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',
      description: 'Kim Binsted received her BSc in Physics at McGill (1991), and her PhD in Artificial Intelligence' +
          'from the University of Edinburgh (1996). Her thesis topic was the computational modeling and generation of ' +
          'punning riddles, and her program, JAPE (Joke Analysis and Production Engine), generated puns such as ' +
          '"What do you call a Martian who drinks beer? An ale-ien!".',
    },
  ];

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Stuff</Header>
          {/*<Card>{this.contacts[1]}</Card>*/}
          <Card.Group>{this.contacts.map((contact, index) => <Contact key = {index} contact={contact} /> )}</Card.Group>
        </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListContacts.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const stuffs = Stuffs.collection.find({}).fetch();
  return {
    stuffs,
    ready,
  };
})(ListContacts);
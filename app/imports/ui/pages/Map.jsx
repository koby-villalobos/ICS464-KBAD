import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';

// http://courses.ics.hawaii.edu/ReviewICS314/morea/meteor-2/experience-meteor-application-template-react.html
// http://courses.ics.hawaii.edu/ics314f20/modules/meteor-1/
// https://tomchentw.github.io/react-google-maps/

const MyMapComponent = withScriptjs(withGoogleMap((props) => <GoogleMap
  defaultZoom={10}
  defaultCenter={{ lat: 21.474646, lng: -157.969892 }}
>
  {props.isMarkerShown && <Marker position={{ lat: 21.474646, lng: -157.969892 }} />}
</GoogleMap>));

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Map extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">Map *Would show locations of actual vaccine places if implemented*</Header>

        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
Map.propTypes = {
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
})(Map);

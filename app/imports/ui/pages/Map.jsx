import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import GoogleMap from 'google-map-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import { NavLink } from 'react-router-dom';

const _ = require('lodash');

// http://courses.ics.hawaii.edu/ReviewICS314/morea/meteor-2/experience-meteor-application-template-react.html
// http://courses.ics.hawaii.edu/ics314f20/modules/meteor-1/
// https://tomchentw.github.io/react-google-maps/

const K_WIDTH = 40;
const K_HEIGHT = 40;

const places = [
  {
    lat: 21.286860,
    lng: -157.812500,
    text: 'My Marker',
    id: 123,
    name: 'Longs Drugs',
    show: false,
    address: '1029 Kapahulu Ave, Honolulu, HI 96816',
  },
  {
    lat: 21.309348,
    lng: -157.860533,
    text: 'My Marker2',
    id: 132,
    name: 'CVS Pharmacy',
    show: false,
    address: '1088 Bishop St, Honolulu, HI 96813',
  },
  {
    lat: 21.3803191,
    lng: -157.7576345,
    text: 'My Marker3',
    id: 142,
    name: 'Castle Medical Center',
    show: false,
    address: '640 Ulukahiki St, Kailua, HI 96734',
  },
];

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
};

// InfoWindow component
const InfoWindow = (props) => {
  const { place } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 80,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16, paddingBottom: 6 }}>
        {place.name}
      </div>
      <div style={{ fontSize: 12, paddingBottom: 2 }}>
        {place.address}
      </div>
      <NavLink exact to="/list">
        <div style={{ fontSize: 12, color: 'blue' }} onClick={console.log('Schedulesdddd!!!')}>
          {'Schedule'}
        </div>
      </NavLink>
    </div>
  );
};

const Marker = ({ show, place }) => {
  const markerStyle = {
    border: '1px solid white',
    borderRadius: '50%',
    height: 10,
    width: 10,
    backgroundColor: show ? 'red' : 'blue',
    cursor: 'pointer',
    zIndex: 10,
  };

  return (
    <div>
      <div style={markerStyle} />
      {show && <InfoWindow place={place} />}
    </div>
  );
};


class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 21.474646,
      lng: -157.969892,
    },
    zoom: 10.8,
  };

  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    this.setState({ places: places });
  }

  onMarkerPress = (key) => {
    console.log(key);
  }

  onChildClickCallback = (key) => {
    this.setState((state) => {
      const index = _.findIndex(state.places, (e) => e.id == key);
      // const index = state.places.findIndex((e) => e.id === key);
      console.log(index);
      state.places[index].show = !state.places[index].show; // eslint-disable-line no-param-reassign
      return { places: state.places };
    });
  };

  render() {
    console.log(places);
    return (
      // Important! Always set the container height explicitly
      <Container>

        <Header as="h2" textAlign="center">Map</Header>
        <div style={{ height: '70vh', width: '100%' }}>
          <GoogleMap
            bootstrapURLKeys={{ key: 'AIzaSyA0Ah_XOmm-nXV26fKq5IUpm5yJpM9F4dc' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            // onChildClick={() => this.onMarkerPress()}
            onChildClick={this.onChildClickCallback}
          >

            { _.map(places, (place) => (
              <Marker
                key={place.id}
                lat={place.lat}
                lng={place.lng}
                text={place.text}
                show={place.show}
                address={place.address}
                place={place}
              />
            ))}
          </GoogleMap>
        </div>
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

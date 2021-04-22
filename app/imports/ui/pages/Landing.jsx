import React from 'react';
import { Grid, Image, Statistic } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='top' textAlign='left' container>

        {/*<Grid.Column width={4}>*/}
        {/*  <Image size='small' circular src="/images/meteor-logo.png"/>*/}
        {/*</Grid.Column>*/}

        <Grid.Column width={8}>
          <h1>Welcome to K-BAD</h1>
          <h2>Your only vaccine scheduler</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <h2>See Nearby Locations</h2>
          <h2>Scheduling an appointment</h2>
          <h2>Check your current appointments</h2>
        </Grid.Column>

        <Grid.Column width={8}>
          <br/>
          <br/>
          <h3>Hawaii's Vaccination Outlook</h3>
          <Statistic.Group horizontal>
            <Statistic>
              <Statistic.Value>1,000,000</Statistic.Value>
              <Statistic.Label>Vaccinations</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>30%</Statistic.Value>
              <Statistic.Label>Ages 16-25 Vaccinated</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>25%</Statistic.Value>
              <Statistic.Label>Ages 25-50 Vaccinated</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>40%</Statistic.Value>
              <Statistic.Label>Ages 50+ Vaccinated</Statistic.Label>
            </Statistic>
          </Statistic.Group>


        <br/>
        <p>See more info at https://www.cdc.gov</p>

        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;

import React, {Component} from 'react';
import {Container, Navbar, Grid, Cell} from '../styles/layout';
import {Button} from '../styles/ui-components';

class Missions extends Component {
  render() {
    const missionData = [
      {
        "title": "Throwing a surprise party",
        "subtitle": "Coming to a group decision",
        "levels": "A2, B1, B2"
      },
      {
        "title": "The awkward dinner party",
        "subtitle": "Practicing your conversation table manners",
        "levels": "A2, B1"
      },
      {
        "title": "Getting lost in the city",
        "subtitle": "Asking for directions",
        "levels": "A1, A2, B1, B2"
      },
      {
        "title": "You're going the wrong way!",
        "subtitle": "Refuting the Uber driver",
        "levels": "B1, B2"
      },
      {
        "title": "Heavy accents",
        "subtitle": "Deciphering English all around the world",
        "levels": "B1, B2, C1"
      },
      {
        "title": "The wrong reservation",
        "subtitle": "Negotating with service representative",
        "levels": "B2, C1, C2"
      }
    ];

    return (
      <Container>
        <h2>English Speaking Missions</h2>
        <Grid>
          {
            missionData.map(mission => {
              return <Cell>
                <div>
                  <h3>{mission.title}</h3>
                  <h4>{mission.subtitle}</h4>
                </div>
                <div>
                  <h4>Available for: {mission.levels}</h4>
                  <Button primary>Join Mission</Button>
                </div>
              </Cell>
            })
          }
          <Cell>
            <div>
              <h3>Request a mission</h3>
              <h4>Don't see an interesting topic for conversation here? Have a different language challenge in mind? Send us your ideas!</h4>
            </div>
            <Button primary>Contact us</Button>
          </Cell>
        </Grid>
      </Container>
    );
  }
};

export default Missions;
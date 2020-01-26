import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Grid, Cell} from '../styles/layout';
import {Button} from '../styles/ui-components';

//content
import missionData from '../content/missions.json';

class Missions extends Component {
  render() {


    return (
      <Container>
        <h2>English Speaking Missions</h2>
        <Grid>
          {
            missionData.map(mission => {
              return <Cell>
                <div>
                  <h4>{mission.title}</h4>
                  <h5>{mission.subtitle}</h5>
                </div>
                <div>
                  <p>Available for: {mission.levels}</p>
                  <Link to='/apply'><Button primary>Join Mission</Button></Link>
                </div>
              </Cell>
            })
          }
          <Cell>
            <div>
              <h4>Request a mission</h4>
              <h5>Don't see an interesting topic for conversation here? Have a different language challenge in mind? Send us your ideas!</h5>
            </div>
            <Button primary>Contact us</Button>
          </Cell>
        </Grid>
      </Container>
    );
  }
};

export default Missions;
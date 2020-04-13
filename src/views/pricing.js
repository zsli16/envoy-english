import React, {Component} from 'react';
import {Container, PricingCard, Row} from '../styles/layout';
import {Link} from 'react-router-dom';
import {Button} from '../styles/ui-components';

class PricingTable extends Component {

  render() {
    const {translations} = this.props;
    const Pricing = translations;

    return (
      <Container>
        <h1>{Pricing.title}</h1>
        <Row style={{alignItems: 'center', flexWrap: 'wrap', height: '100%', paddingTop: '2%'}}>
          <PricingCard>
            <h3>{Pricing.single}</h3>
            <h4>{Pricing.single_usp}</h4>
            <h2 style={{textAlign: 'left', fontWeight: '800'}}>{Pricing.price_single} </h2>
            <br/>
            <Link to='/apply'><Button primary>{Pricing.beta_trial}</Button></Link>
            <h4>{Pricing.whats_included}</h4>
            <div style={{margin: '0 5%'}}>
              <ul>
                <li>{Pricing.whats_included_single}</li>
                <li>{Pricing.whats_included_instructor}</li>
                <li>{Pricing.whats_included_smallgroup}</li>
                <li>{Pricing.whats_included_feedback}</li>
              </ul>
            </div>
          </PricingCard>
          <PricingCard style={{boxShadow: '0px 0px 13px 9px #a9a7a7'}}>
            <h3>{Pricing.package}</h3>
            <h4>{Pricing.package_usp}</h4>
            <div>
            <h2 style={{textAlign: 'left', fontWeight: '800'}}>{Pricing.price_package} </h2>
            <h4 style={{textAlign: 'left', fontWeight: '100', margin: '0'}}>{Pricing.price_package_perclass} </h4>
            </div>
            <br/>
            <Link to='/apply'><Button primary>{Pricing.beta_trial}</Button></Link>
            <h4>{Pricing.whats_included}</h4>
            <div style={{margin: '0 5%'}}>
              <ul>
                <li>{Pricing.whats_included_package}</li>
                <li>{Pricing.whats_included_instructor}</li>
                <li>{Pricing.whats_included_smallgroup}</li>
                <li>{Pricing.whats_included_feedback}</li>
              </ul>
            </div>
          </PricingCard>
          <PricingCard>
            <h3>{Pricing.business}</h3>
            <h4>{Pricing.business_usp}</h4>
            <h2 style={{textAlign: 'left', fontWeight: '800'}}>{Pricing.price_business} </h2>
            <br/>
            <Link to='/business'><Button primary>{Pricing.get_quote}</Button></Link>
            <h4>{Pricing.whats_included}</h4>
            <div style={{margin: '0 5%'}}>
              <ul>
                <li>{Pricing.whats_included_business}</li>
                <li>{Pricing.whats_included_instructor}</li>
                <li>{Pricing.whats_included_smallgroup}</li>
                <li>{Pricing.whats_included_feedback}</li>
              </ul>
            </div>
          </PricingCard>
        </Row>
      </Container>
    );
  }
};

export default PricingTable;
import React, {Component} from 'react';
import {Container, PricingCard, Row} from '../styles/layout';
import {Button, Circle, LevelDescription, Tube} from '../styles/ui-components';
import {Link} from 'react-router-dom';
import Header from '../components/header';

//content
import EN from '../content/products_en.json';
import ES from '../content/products_es.json';

const translations = {EN, ES};

class ProductsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      messages: EN
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const lang = event.target.value;
    this.setState({language: lang});
    this.setState({messages: translations[lang]});
  }

  render() {
    
    const {messages} = this.state;
    const Products = messages.Products;

    return (
      <>
      <Header 
        handleChange={(e) => this.handleChange(e)}
        buttonText={messages.Hero.button_2}
        language={this.state.language}
      />
      <Container style={{marginLeft: '0px', marginRight: '0px'}}>
        <h1>{Products.title}</h1>
        <Tube style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'space-around', alignItems: 'center'}}>
            <Circle>A2</Circle>
            <h4>{Products.class_a2_am}</h4>
          </div>
          <div style={{display: 'flex', flexDirection: 'space-around', alignItems: 'center'}}>
            <h4>{Products.schedule_a2_am}</h4>
            <p>({Products.dates_a2_am})</p>
            <Button value={this.state.data[0] && this.state.data[0].sku} onClick={this.handleSubmit}>{Products.buy_now}</Button>
          </div>
        </Tube>

        <Tube style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'space-around', alignItems: 'center'}}>
            <Circle>A2</Circle>
            <h4>{Products.class_a2_pm}</h4>
          </div>
          <div style={{display: 'flex', flexDirection: 'space-around', alignItems: 'center'}}>
            <h4>{Products.schedule_a2_pm}</h4>
            <p>({Products.dates_a2_pm})</p>
            <Button value={this.state.data[1] && this.state.data[1].sku} onClick={this.handleSubmit}>{Products.buy_now}</Button>
          </div>
        </Tube>

        <Tube style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'space-around', alignItems: 'center'}}>
            <Circle>B1</Circle>
            <h4>{Products.class_b1_pm}</h4>
          </div>
          <div style={{display: 'flex', flexDirection: 'space-around', alignItems: 'center'}}>
            <h4>{Products.schedule_b1_pm}</h4>
            <p>({Products.dates_b1_pm})</p>
            <Button value={this.state.data[2] && this.state.data[2].sku} onClick={this.handleSubmit}>{Products.buy_now}</Button>
          </div>
        </Tube>


      </Container>
      </>
    );
  }
};

export default ProductsTable;
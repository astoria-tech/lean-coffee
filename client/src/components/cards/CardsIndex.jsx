import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import * as cardsActions from '../../actions/cards';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CardsIndex extends Component {
  componentDidMount() {
    console.log(this)
    this.props.actions.cardsActions.getCards();
  }

  submit = values => {
    this.props.actions.cardsActions.createCard(values.card);
  }

  render() {
    return (
      <div>
        <h1> Astoria-arch Lean Coffee </h1>
        <h3>Add Your Topic</h3>
        <Form onSubmit={this.submit} />
        {this.props.cards.map(function(card) {
          return(<p>{card.title}</p>)
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      form: state.form.card,
      cards: state.cards.cards,
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      cardsActions: bindActionCreators(cardsActions, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);

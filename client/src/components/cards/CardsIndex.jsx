import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Form from './Form';
import * as cardsActions from '../../actions/cards';

const styles = {
  card: {
    width: 275,
    marginBottom: 10,
  },
}

class CardsIndex extends Component {
  componentDidMount() {
    console.log(this)
    this.props.actions.cardsActions.getCards();
  }

  submit = values => {
    this.props.actions.cardsActions.createCard(values.card);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1> Astoria-arch Lean Coffee </h1>
        <h3>Add Your Topic</h3>
        <Form onSubmit={this.submit} />
        {this.props.cards.map(function(card) {
          return(
            <Card className={classes.card}>
              <CardContent>
                {card.title}
              </CardContent>
              <CardActions>
                <Button>
                  EDIT
                </Button>
                <Button>
                  VOTE
                </Button>
              </CardActions>
            </Card>
          )
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CardsIndex));

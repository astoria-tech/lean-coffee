import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import * as cardsActions from '../../actions/cards';
import * as votesActions from '../../actions/votes';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
})

class CardsIndex extends Component {
  constructor(props) {
    super(props)
    this.vote = this.vote.bind(this)
  }

  componentDidMount() {
    console.log(this)
    this.props.actions.cardsActions.getCards();
  }

  submit = values => {
    this.props.actions.cardsActions.createCard(values.card);
  }

  vote(cardId) {
    this.props.actions.votesActions.createVote(cardId);
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Astoria Arc - Lean Coffee
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                What do you want to talk about?
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Add and vote on the topics you would like to talk about at the <b>Meetup Wednesday, March 6th.</b>
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Form onSubmit={this.submit} />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {this.props.cards.map(card => (
                <Grid item key={card} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {card.title}
                      </Typography>
                      <p>{card.votes}</p>
                    </CardContent>
                    <CardActions>
                      <Button size="large" color="primary" onClick={(e) => this.vote(card.id)}>
                        Vote
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Astoria Arc - Lean Coffee
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            An Archipelago group.
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
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
      votesActions: bindActionCreators(votesActions, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CardsIndex));

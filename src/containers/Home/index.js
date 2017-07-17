import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Title, Container } from '../../components/Common';
import { JackPot, TicketInfo, TicketPrice, AvailableTickets, BuyTicket } from '../../components/Home';

import { connectToBlockchain } from './state';

class Home extends Component {
  componentDidMount() {
    this.props.connectToBlockchain();
  }
  render() {
    const { contract } = this.props;
    return contract
      ? (
        <Container>
          <Title>{contract.name()}</Title>
          <JackPot>{contract.JackPot().toNumber()}</JackPot>
          <TicketInfo>
            <TicketPrice>{contract.ticketPrice().toNumber()}</TicketPrice>
            <AvailableTickets>{contract.availableTickets().toNumber()}</AvailableTickets>
          </TicketInfo>
          <BuyTicket onClick={() => this.props.history.push('/tickets')} />
        </Container>
      )
      : (<div>Loading...</div>);
  }
}

export default connect(
  (state) => ({ ...state.home }),
  { connectToBlockchain }
)(Home);

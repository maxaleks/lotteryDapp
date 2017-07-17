import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

import { Container } from '../../components/Common';

const Ticket = ({ ticketOwner, index }) => (
  <div>
    <span>Ticket №{index + 1}</span>
    <span> - </span>
    <span>{ticketOwner}</span>
  </div>
)

class Tickets extends Component {
  renderTickets() {
    const { contract } = this.props;
    const tickets = [];
    for (let i = 0; i < contract.countTickets(); i++) {
      const ticketOwner = contract.tickets(i) === '0x0000000000000000000000000000000000000000'
                          ? 'Available'
                          : contract.tickets(i);
      tickets.push(<Ticket ticketOwner={ticketOwner} index={i} key={i} />);
    }
    return tickets;
  }
  render() {
    const { contract } = this.props;
    return contract
      ? (
        <Container>
          {this.renderTickets()}
        </Container>
      )
      : (<div>Loading...</div>);
  }
}

export default connect(
  (state) => ({ contract: state.home.contract })
)(Tickets);

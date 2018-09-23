import React, { Component } from 'react';
import { Container, ListGroupItem, ListGroup, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    //This function runs when the component is mount, that's where we usually make request to our API or calling an action
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    //this.props.item.items; item represents the complete state while items represent the array of items inside the state
    const { items } = this.props.item; //Same from above

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}>
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
//When we pass actions from redux they will be stores as props
ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  item: state.item //In the root reducer we set to 'item' the item reducer
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);

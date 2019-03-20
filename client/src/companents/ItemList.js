import React, { Component } from 'react'
import {Container , ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {connect} from 'react-redux'
import {getItems, DeleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types'

class ItemList extends Component {
    componentDidMount(){
        this.props.getItems()
    }

    onDeleteClick(id) {
        this.props.DeleteItem(id)
        
    }
    render() {
        let { items } = this.props.item
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='item-list'>
                        {items.map(({_id,name}) =>(
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    {this.props.isAuthenticated ? <Button
                                    className='remove-btn'
                                    color='danger'
                                    size='sm'
                                    onClick={this.onDeleteClick.bind(this,_id)}
                                    >&times;</Button>:null}
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

ItemList.protoType={
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated:PropTypes.bool
}
const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{ getItems, DeleteItem }) (ItemList);
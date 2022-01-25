import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.activeCity(this.props.city)
  }

  render() {
    return (
      <li className='list-group-item' onClick={this.handleClick}>
        {this.props.city.name}
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {activeCity: activeCity},
    dispatch
  )
}

export default connect(null, mapDispatchToProps) (City);

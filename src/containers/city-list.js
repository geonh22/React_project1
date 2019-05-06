import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions';
import { bindActionCreators } from 'redux';
import './city-list';

class CityList extends Component {
  renderList(cities) {
    return cities.map(city => (
      <li
        key={city.title}
        onClick={() => this.props.selectCity(city)}
        className='list-group-item'
      >
        {city.title}
      </li>
    ));
  }

  render() {
    if (!this.props.cities) {
      return <div> No Cities </div>;
    }
    return (
        <div class="box">

            {this.renderList(this.props.cities)}

        </div>
    );
  }
}

function mapStateToProps({ cities }) {
  return {
    cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList);


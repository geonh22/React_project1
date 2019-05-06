import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityDetail extends Component {
  render() {
    if (!this.props.selected) {
      return <div> 지역을 선택해주세요. </div>;
    }

    return (
      <div className='list-group col-sm-8'>
        {this.props.selected.detail}
      {/* 여기서 detail을 지정하면 reducers의 cities_reducer의 detail이 보여지네? */}
      </div>
    );
  }
}

function mapStateToProps({selected}) {
  return {
    selected: selected
  };
}

export default connect(mapStateToProps)(CityDetail);


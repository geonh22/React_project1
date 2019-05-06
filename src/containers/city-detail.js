import React, { Component } from 'react';
import { connect } from 'react-redux';
import './city-detail.css';
class CityDetail extends Component {
  render() {
    if (!this.props.selected) {
      return <div className="select"> 지역을 선택해주세요. </div>;
    }

    return (
      <div className='list-group'>
        <div className='detail'>
          {this.props.selected.detail}
        </div>
        <div className='avg'>
          <div>{this.props.selected.title}의 </div>
          <div>평균 미세 먼지 농도: {this.props.selected.pm}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ selected }) {
  return {
    selected: selected
  };
}

export default connect(mapStateToProps)(CityDetail);


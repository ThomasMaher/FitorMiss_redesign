import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="dropdown top-bar__dropdown">
        <div className="dropdown__title">
          {this.props.title}
        </div>
        
        <div className="dropdown__arrow">
          <img src="/images/dropdown_arrow.png" />
        </div>
      </div>
    )
  }
}






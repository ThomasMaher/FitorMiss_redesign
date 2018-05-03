import React from 'react';

export default class ClassDetails extends React.Component {
  render() {
    this.props = this.props.props;
    return(
      <div className="class_row class-detail">
        <div className="col-1-of-3">
          <img src={this.props.img} className="class-detail__img"/>
        </div>
        
        <div className="col-1-of-3 class-detail__info">
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </div>
        
        <div className="col-1-of-3 class-detail__info">
          <div className="class-detail__type-logos">
            <div className="type-logo">
              Yoga
            </div>
            <div className="type-logo">
              Cardio
            </div>
          </div>
          
          {this.props.timeRange}
        </div>
      </div>
    )
  }
}
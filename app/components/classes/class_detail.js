import React from 'react';

export default class ClassDetails extends React.Component {
  render() {
    this.props = this.props.props;
    return(
      <div className="class_row class-detail">
        <div className="col-1-of-3">
          <img src={this.props.img} className="class-detail__img"/>
        </div>

        <div
          className="col-3-of-6 class-detail__info"
          style={{marginLeft: "-2rem", padding: "1rem 0", paddingLeft: "1rem"}}>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
          <div className="class-detail__info-prices">
            <h5>WAS&nbsp;</h5><h2>${this.props.was}&nbsp;&nbsp;</h2>
            <h5 style={{color: "#6FDCC1"}}>NOW&nbsp;</h5>
            <h2 style={{color: "#6FDCC1"}}>${this.props.now}</h2>
            <h5> {this.props.left} Left</h5>
          </div>
        </div>

        <div className="col-10-of-33 class-detail__info">
          <div className="class-detail__type-logos">
            <div className="type-logo">
              Yoga
            </div>
            <div className="type-logo">
              Cardio
            </div>
          </div>

          <div>
            <h3>Today, {this.props.timeRange}</h3>
          </div>

          <div>
            <button className="btn">Buy Pass</button>
          </div>
        </div>
      </div>
    )
  }
}

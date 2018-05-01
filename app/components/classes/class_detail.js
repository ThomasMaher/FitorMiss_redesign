import React from 'react';

export default class ClassDetails extends React.Component {
  render() {
    this.props = this.props.props;
    console.log(this.props);
    return(
      <div className="class_row class-detail">
        <div className="col-1-3 class-detail__img">
          <img src={this.props.img} />
        </div>
        
        <div className="col-1-3 class-detail__info">
          {this.props.title}
          {this.props.desc}
        </div>
        
        <div className="col-1-3 class-detail__reg">
          {this.props.timRange}
        </div>
      </div>
    )
  }
}
import React from 'react';

export default class TimeScroll extends React.Component {
  render() {
    return(
      <section className="timescroll">
        <div className="timescroll__bar">
          <p className="timescroll__text timescroll__text-sooner">
            Sooner
          </p>
          
          <div className="timescroll__slot">
            <div className="timescroll__switch" />
          </div>
          
          <p className="timescroll__text timescroll__text-later">
            Later
          </p>
        </div>
      </section>
    )
  }
}
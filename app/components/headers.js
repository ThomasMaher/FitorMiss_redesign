import React from 'react';

import Dropdown from './dropdown';

export default class Header extends React.Component {
  render() {
    return (
      <section className="top-bar">
        <div className="top-bar__main">
          
            <img
              className=".top-bar__title"
              style={{height: "4.5rem"}}
              src="/images/logo.png" 
              alt="FitorMiss" />
            
            <Dropdown title={'location'}/>
            <Dropdown title={'Class Type'}/>
            <Dropdown title={'Amenities'}/>
          
        </div>
        
        <div className="top-bar__profile">
          <img
            className=".top-bar__menu"
            style={{top: '-.9rem'}}
            src="/images/menu.png" 
            alt="FitorMiss" />
          
          <img
            className=".top-bar__pic"
            src="/images/profile.png" 
            alt="FitorMiss" />
        </div>
        
      </section>
    )
  }
}


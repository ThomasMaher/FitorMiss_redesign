import React from 'react';

import TimeScroll from './timescroll';
import ClassDetail from './class_detail';

const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default class Classes extends React.Component {
  render() {
    return (
      <div className="classes__container">
      <TimeScroll />

      <section className="classlist">

      <ClassDetail props={{
        img: "/images/gym_pic.png",
        title: "Restorative Yoga",
        desc,
        was: '35',
        now: '17',
        type: ['Yoga', 'Cardio'],
        countdown: "4hr 5min 30sec",
        timeRange: "6:30PM - 7:15PM",
        left: "4hr 5min"
      }}/>

      <ClassDetail props={{
        img: "/images/gym_pic.png",
        title: "Restorative Yoga",
        desc,
        was: '35',
        now: '17',
        type: ['Yoga', 'Cardio'],
        countdown: "4hr 5min 30sec",
        timeRange: "6:30PM - 7:15PM",
      }}/>

      <ClassDetail props={{
        img: "/images/gym_pic.png",
        title: "Restorative Yoga",
        desc,
        was: '35',
        now: '17',
        type: ['Yoga', 'Cardio'],
        countdown: "4hr 5min 30sec",
        timeRange: "6:30PM - 7:15PM",
      }}/>

      <ClassDetail props={{
        img: "/images/gym_pic.png",
        title: "Restorative Yoga",
        desc,
        was: '35',
        now: '17',
        type: ['Yoga', 'Cardio'],
        countdown: "4hr 5min 30sec",
        timeRange: "6:30PM - 7:15PM",
      }}/>

      </section>
      </div>
    )
  }
}


// In reality this will be a list of classes coming in as props.
// Each classe's props will still be passed down as props'.

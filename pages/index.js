import Head from 'next/head';
import Image from 'next/image';
import * as React from "react";
import Appbar from "../components/navBar/Appbar";
import Grid from "@mui/material/Grid";
import Waitlist from "../components/waitlistDir/Waitlist";

// import styles from '../styles/Home.module.css'

export default function Home() {
  const [days, setDays] = React.useState();
  const [hours, setHours] = React.useState();
  const [minutes, setMinutes] = React.useState();
  const [seconds, setSeconds] = React.useState();
  
  let interval;

  const starttime = () => {
    const countDownTo = new Date("August 30,2022").getTime();
    interval = setInterval(() => {
      const current = new Date().getTime();
      const diff = countDownTo - current;
      const _days = Math.floor(
        diff / (24 * 60 * 60 * 1000)
      );
      const _hour = Math.floor(
        (diff % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const _minute = Math.floor(
        (diff % (60 * 60 * 1000)) / (1000 * 60)
      );
      const _seconds = Math.floor(
        (diff % (60 * 1000)) / (1000)
      );

      // @dev Halts the timer if less than zero otherwise constantly update until deadline time
      if(interval < 0) {
        clearInterval(interval.current);
      } else {
        setDays(_days);
        setHours(_hour);
        setMinutes(_minute);
        setSeconds(_seconds);
      }

    });
  };
  
  React.useEffect(() => {
    starttime();
  }, []);

  return (
      <React.Fragment >
        {/* <Appbar /> */}
        <Waitlist 
          countDown_days={days}
          countDown_hours={hours}
          countDown_minute={minutes}
          countDown_seconds={seconds}
        />
      </React.Fragment>
  )
}

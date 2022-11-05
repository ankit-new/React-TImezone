import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Badge,
  Button,
  Card,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import DaySchedule from "./DaySchedule";
import { useState } from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function NewCalendar() {
  const todayDate = new Date();
  var mondayy = new Date();

  let incrementDay = 0;
  let thisDay = mondayy.getDay();

  if (thisDay === 0) {
    incrementDay = 1;
  } else if (thisDay === 6) {
    incrementDay = 2;
  } else {
    incrementDay = 1 - thisDay;
  }
  mondayy.setDate(mondayy.getDate() + incrementDay);

  var tuesdayy = new Date();
  var wednesdayy = new Date();
  var thursdayy = new Date();
  var fridayy = new Date();

  tuesdayy.setDate(mondayy.getDate() + 1);
  wednesdayy.setDate(mondayy.getDate() + 2);
  thursdayy.setDate(mondayy.getDate() + 3);
  fridayy.setDate(mondayy.getDate() + 4);

  const [monDate, setMonDate] = useState(mondayy);
  const [tueDate, setTueDate] = useState(tuesdayy);
  const [wedDate, setWedDate] = useState(wednesdayy);
  const [thuDate, setThuDate] = useState(thursdayy);
  const [friDate, setFriDate] = useState(fridayy);
  const [timeZone, setTimeZone] = useState(8);

  function onPreviousHandler() {
    setMonDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(monDate.getDate() - 7);
      return temppDate;
    });
    setTueDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(tueDate.getDate() - 7);
      return temppDate;
    });
    setWedDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(wedDate.getDate() - 7);
      return temppDate;
    });
    setThuDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(thuDate.getDate() - 7);
      return temppDate;
    });
    setFriDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(friDate.getDate() - 7);
      return temppDate;
    });
  }

  function onNextHandler() {
    setMonDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(monDate.getDate() + 7);
      return temppDate;
    });
    setTueDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(tueDate.getDate() + 7);
      return temppDate;
    });
    setWedDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(wedDate.getDate() + 7);
      return temppDate;
    });
    setThuDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(thuDate.getDate() + 7);
      return temppDate;
    });
    setFriDate((prevState) => {
      var temppDate = new Date(prevState);
      temppDate.setDate(friDate.getDate() + 7);
      return temppDate;
    });
  }

  function onTodayHandler() {
    setMonDate(mondayy);
    setTueDate(tuesdayy);
    setWedDate(wednesdayy);
    setThuDate(thursdayy);
    setFriDate(fridayy);
  }

  function updateTimeZoneHandler(value) {
    var temptime = 0;
    if (value === "1") temptime = 8;
    else temptime = 3;
    setTimeZone(temptime);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={12}>
        <Card>
          <TableRow>
            <TableCell>
              <Button variant="outlined" onClick={onPreviousHandler}>
                Prev
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="outlined" onClick={onNextHandler}>
                Next
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="contained" onClick={onTodayHandler}>
                <Badge>
                  {months[todayDate.getMonth()]} {todayDate.getDate()},
                  {todayDate.getFullYear()}
                </Badge>
              </Button>
            </TableCell>
          </TableRow>
        </Card>
      </Grid>
      <TableRow>
        <TableCell width="230">
          <Typography margin="20px 0px 15px 20px" variant="h6" color="gray">
            TIMEZONE
          </Typography>
        </TableCell>
        <TableCell width="800">
          <Select
            fullWidth
            onChange={(e) => updateTimeZoneHandler(e.target.value)}
          >
            <MenuItem key="1" value="1">
              UTC (0:00)
            </MenuItem>
            <MenuItem key="2" value="2">
              IST (+5:00)
            </MenuItem>
          </Select>
        </TableCell>
      </TableRow>
      <Grid item xs={6} md={12}>
        <DaySchedule
          day="MONDAY"
          date={monDate}
          timeZone={timeZone}
        ></DaySchedule>
      </Grid>
      <Grid item xs={6} md={12}>
        <DaySchedule
          day="TUESDAY"
          date={tueDate}
          timeZone={timeZone}
        ></DaySchedule>
      </Grid>
      <Grid item xs={6} md={12}>
        <DaySchedule
          day="WEDNESDAY"
          date={wedDate}
          timeZone={timeZone}
        ></DaySchedule>
      </Grid>
      <Grid item xs={6} md={12}>
        <DaySchedule
          day="THURSDAY"
          date={thuDate}
          timeZone={timeZone}
        ></DaySchedule>
      </Grid>
      <Grid item xs={6} md={12}>
        <DaySchedule
          day="FRIDAY"
          date={friDate}
          timeZone={timeZone}
        ></DaySchedule>
      </Grid>
    </Grid>
  );
}

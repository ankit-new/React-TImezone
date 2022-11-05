import {  TableCell, TableRow, Typography } from "@mui/material";
import TimeBlocks from "./TimeBlocks";

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
export default function DaySchedule({ day, date, timeZone }) {
  const datee = date.getDate();
  const monthh = date.getMonth();
  const yearr = date.getFullYear();

  let isPast = date < new Date() ? false : true;
  return (
    <TableRow>
      <TableCell width="200">
        <Typography variant="h5">{day}</Typography>
        <Typography>
          {datee}/{months[monthh]}/{yearr}
        </Typography>
      </TableCell>
      <TableCell>
        {isPast ? (
          <TimeBlocks initialTime={timeZone}></TimeBlocks>
        ) : (
          <Typography>Past</Typography>
        )}
      </TableCell>{" "}
    </TableRow>
  );
}

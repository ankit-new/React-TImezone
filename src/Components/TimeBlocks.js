import { Checkbox, Grid, TableCell, Typography } from "@mui/material";

export default function TimeBlocks(initialTime) {
  const initialVal = parseInt(initialTime.initialTime);
  var labelsArr = [];
  for (let i = initialVal; i <= initialVal + 14; i++) {
    if (i < 11) {
      labelsArr.push(`${i}am-${i + 1}am`);
    } else if (i === 11) {
      labelsArr.push(`${i}am-${i + 1}pm`);
    } else {
      let vali = i === 12 ? i : i % 12;
      labelsArr.push(`${vali}pm-${vali + 1 === 13 ? 1 : vali + 1}pm`);
    }
  }

  return (
    <Grid>
      {labelsArr.map((item) => (
        <TableCell>
          <Checkbox size="small" />
          <Typography variant="overline" color="green">
            {item}
          </Typography>
        </TableCell>
      ))}
    </Grid>
  );
}

import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  MonthView,
  DayView,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "./MonthAppointments.js";

export default class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState
            // defaultCurrentDate="2022-10-29"
            defaultCurrentViewName="Day"
          />

          <DayView />
          <WeekView startDayHour={7} endDayHour={19} />
          <MonthView />

          <DateNavigator />
          <Toolbar />
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}

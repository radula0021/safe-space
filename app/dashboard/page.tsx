"use client";
import Navbar from "@/components/Navbar";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { use, useEffect, useState } from "react";
import en from "date-fns/locale/en-GB";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DailyJournal from "@/components/forms/DailyJournal";

type Props = {};

const Dashboard = (props: Props) => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [write, setWrite] = useState(false);
  const [cardDate, setCardDate] = useState<Date>();

  const handleButtonClick = () => {
    setWrite(true);
  };

  useEffect(() => {
    if (write === true && value !== null) {
      {
        setCardDate(value);
      }
    }
  }, [value]);

  return (
    <div className="flex flex-col h-screen bg-bg-100">
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={en}>
        <Navbar />

        {cardDate === value ? (
          <DailyJournal date={cardDate} />
        ) : (
          <>
            <Button onClick={handleButtonClick}>Journal</Button>
            {write && <p>Chose a day...</p>}
            <div className="flex">
              <DateCalendar
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </div>
          </>
        )}
      </LocalizationProvider>
    </div>
  );
};

export default Dashboard;

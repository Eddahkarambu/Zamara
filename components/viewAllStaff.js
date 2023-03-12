import React, { useState, useEffect } from "react";
import { StaffCard } from "./staffCard";
import { GetStaff } from "../API/staff";
import { ScrollView } from "react-native";
export const ViewAllStaff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(async () => {
    const allStaff = await GetStaff();
    console.log(allStaff);
    setStaff(allStaff);
  }, []);

  return (
    <ScrollView>
      {staff.map((staf) => (
        <StaffCard
          staffName={staf.staffName}
          staffEmail={staf.staffEmail}
          staffNumber={staf.staffNumber}
          department={staf.department}
          salary={staf.salary}
        />
      ))}
    </ScrollView>
  );
};

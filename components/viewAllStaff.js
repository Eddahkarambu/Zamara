import React, { useState, useEffect } from "react";
import { StaffCard } from "./staffCard";
import { GetStaff } from "../API/staff";
import { ScrollView } from "react-native";
import { DeleteStaff } from "../API/staff";
import { SendDeleteEmail } from "../email/mail";

export const ViewAllStaff = ({ onEdit }) => {
  const [staff, setStaff] = useState([]);

  useEffect(async () => {
    const allStaff = await GetStaff();
    console.log(allStaff);
    setStaff(allStaff);
  }, []);

  const deleteSingleStaff = async (staff) => {
    console.log(staff._id);
    await DeleteStaff(staff._id);
    SendDeleteEmail(staff.staffName, staff.staffEmail);
    const allStaff = await GetStaff();
    console.log(allStaff);
    setStaff(allStaff);
  };

  return (
    <ScrollView>
      {staff.map((staf) => (
        <StaffCard
          staff={staf}
          edit={onEdit}
          staffName={staf.staffName}
          staffEmail={staf.staffEmail}
          staffNumber={staf.staffNumber}
          department={staf.department}
          salary={staf.salary}
          deleteStaff={deleteSingleStaff}
        />
      ))}
    </ScrollView>
  );
};

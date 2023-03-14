import { ToastAndroid } from "react-native";

export const StaffCreate = (data) => {
  return fetch(
    "https://crudcrud.com/api/d1a9fff0bc8846cb87c331a8b7eeaecb/zamara",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    }
  );
};

export const GetStaff = () => {
  return fetch(
    "https://crudcrud.com/api/d1a9fff0bc8846cb87c331a8b7eeaecb/zamara",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
};

export const DeleteStaff = (id) => {
  return fetch(
    `https://crudcrud.com/api/d1a9fff0bc8846cb87c331a8b7eeaecb/zamara/${id}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((responseData) => {
      ToastAndroid.show("Staff deleted successfully!", ToastAndroid.SHORT);
      return responseData;
    });
};

export const UpdateStaff = (id, data) => {
  return fetch(
    `https://crudcrud.com/api/d1a9fff0bc8846cb87c331a8b7eeaecb/zamara/${id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    }
  );
};

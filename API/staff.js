export const StaffCreate = (data) => {
  return fetch(
    "https://crudcrud.com/api/2efb96f081eb4ebb82773c45226f9154/zamara",
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
    "https://crudcrud.com/api/2efb96f081eb4ebb82773c45226f9154/zamara",
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

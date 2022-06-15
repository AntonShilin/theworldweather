

export const ConvertToHours = (props) => {
  const dMill = new Date(0);
  dMill.setUTCSeconds(+props.dt);
  const d = new Date(dMill);

  return (
    <>
      {d.getHours()}:0{d.getMinutes()}
    </>
  );
};

export const ConvertToDay = (props) => {
  const dMill = new Date(0);
  dMill.setUTCSeconds(+props.dt);
  const d = new Date(dMill);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const i = d.getMonth();

  return (
    <>
      {d.getDay()} {month[i]}
    </>
  );
};

type timeProp = {
  time: number;
  index: number;
};
const TimeAmPm = ({ time, index }: timeProp): JSX.Element => {
  const hours = new Date(time * 1000).getUTCHours();
  const period = hours >= 12 ? "PM" : "AM  ";
  const formatHours = hours % 12 || 12;

  return <p> {index === 0 ? "Now" : `${formatHours} ${period}`}</p>;
};
export default TimeAmPm;

type degreeProp = {
  temp: number;
};
const Degree = ({ temp }: degreeProp): JSX.Element => {
  return (
    <span>
      {temp}
      <sup>o</sup>
    </span>
  );
};
export default Degree;

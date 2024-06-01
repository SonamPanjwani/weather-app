import Feels from "./icons/Feels";
import Humidity from "./icons/Humidity";
import Pop from "./icons/Pop";
import Pressure from "./icons/Pressure";
import Visibility from "./icons/Visibility";
import Wind from "./icons/Wind";

type Props = {
  icon: "wind" | "Feel" | "humidity" | "visibility" | "pop" | "Pressure";
  title: string;
  info: string | JSX.Element;
  description: string;
};
const icons = {
  wind: Wind,
  Feel: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pop: Pop,
  Pressure: Pressure,
};
const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon];

  return (
    <article
      className="w-[150px] h-[90px] text-xs font-bold flex flex-col
    items-center bg-white/20 backdrop:blur-lg rounded 
    drop-shadow-lg p-2 mb-1"
    >
      <div>
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3> {info}</h3>
      <p> {description}</p>
    </article>
  );
};
export default Tile;

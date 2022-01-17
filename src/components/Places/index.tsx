import { NearBy } from "@/services/businesses/types";
import { Link } from "react-router-dom";
import { Place } from "./place";
import styles from "./places.module.css";

interface Props {
  places: NearBy[];
}

export const Places: React.FC<Props> = ({ places }) => {
  return (
    <div className={styles.container}>
      <h4>Nearby Places</h4>
      <ul>
        {places.map((place) => {
          return (
            <Link to={`/businesses/${place.id}`} key={place.address}>
              <Place name={place.name} address={place.address} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

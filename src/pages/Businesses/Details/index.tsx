import { HeroImage } from "@/components/HeroImage";
import { useBusinesses } from "@/providers/Businesses";
import { NotFoundError } from "@/utils/errors/not-found";
import { Link, useParams } from "react-router-dom";

import styles from "./details.module.css";

export const BusinessDetails: React.FC = () => {
  const params = useParams<Record<"businessId", "string">>();

  const { getBusinessDetailsById } = useBusinesses();

  const business = getBusinessDetailsById(params.businessId!);

  if (!business) {
    throw new NotFoundError();
  }

  return (
    <>
      <HeroImage src={business!.image} alt={business!.name} />
      <div className={styles["details-container"]}>
        <div>
          <div className={styles["contacts-container"]}>
            <div className={styles.contact}>
              <h4>Address</h4>
              <p>
                {business.address.number} {business.address.street}
              </p>
              <p>
                {business.address.city}, {business.address.zip}
              </p>
            </div>
            <div className={styles.contact}>
              <h4>Contact</h4>
              <p>{business.phone}</p>
              <p>{business.email}</p>
            </div>
          </div>
        </div>
        <div className={styles["places-container"]}>
          <h4>Nearby Places</h4>
          <ul>
            {business.nearBy.map((place) => {
              return (
                <Link to={`/businesses/${place.id}`} key={place.address}>
                  <li>
                    <span>{place.name}</span> <span>{place.address}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

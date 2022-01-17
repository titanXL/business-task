import { Contact } from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import { Places } from "@/components/Places";
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
            <Contact header="Address">
              <p>
                {business.address.number} {business.address.street}
              </p>
              <p>
                {business.address.city}, {business.address.zip}
              </p>
            </Contact>
            <Contact header="Contact">
              <p>{business.phone}</p>
              <p>{business.email}</p>
            </Contact>
          </div>
        </div>
        <Places places={business.nearBy} />
      </div>
    </>
  );
};

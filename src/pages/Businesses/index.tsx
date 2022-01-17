import { Row } from "@/components/Row";
import { useBusinesses } from "@/providers/Businesses";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./businesses.module.css";

export const Businesses: React.FC = () => {
  const { businesses } = useBusinesses();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headers}>
          <span className={`${styles.content} ${styles["content-header"]}`}>
            Name
          </span>
          <span className={`${styles.content} ${styles["content-header"]}`}>
            Description
          </span>
        </div>
        {businesses?.map((business) => {
          return (
            <Link to={`/businesses/${business.id}`} key={business.id}>
              <Row>
                <span className={styles.content}>{business.name}</span>
                <span className={styles.content}>{business.description}</span>
              </Row>
            </Link>
          );
        })}
      </div>
    </>
  );
};

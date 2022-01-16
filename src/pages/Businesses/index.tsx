import { useBusinesses } from "@/providers/Businesses";
import React from "react";
import { Outlet, Link } from "react-router-dom";

import styles from "./businesses.module.css";

export const Businesses: React.FC = () => {
  const { businesses } = useBusinesses();
  console.log(businesses);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <span className={`${styles.content} ${styles["content-header"]}`}>
            Name
          </span>
          <span className={`${styles.content} ${styles["content-header"]}`}>
            Description
          </span>
        </div>
        {businesses?.map((business) => {
          return (
            <Link
              to={`/businesses/${business.id}`}
              key={business.id}
              className={styles.row}
            >
              <span className={styles.content}>{business.name}</span>
              <span className={styles.content}>{business.description}</span>
            </Link>
          );
        })}
      </div>
      <Outlet></Outlet>
    </>
  );
};

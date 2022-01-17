import styles from "./row.module.css";

export const Row: React.FC = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

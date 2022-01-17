import { Link } from "react-router-dom";
import styles from "./logo.module.css";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      Logo
    </Link>
  );
};

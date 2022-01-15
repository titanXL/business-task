import { Logo } from "../Logo";

import styles from "./navbar.module.css";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
    </div>
  );
};

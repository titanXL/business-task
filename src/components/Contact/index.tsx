import styles from "./contact.module.css";

interface Props {
  header: string;
}

const Contact: React.FC<Props> = ({ header, children }) => {
  return (
    <div className={styles.container}>
      <h4>{header}</h4>
      {children}
    </div>
  );
};

export { Contact };

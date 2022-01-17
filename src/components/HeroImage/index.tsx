import styles from "./image.module.css";

interface Props {
  src: string;
  alt: string;
}

export const HeroImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={styles["img-container"]}>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

interface Props {
  address: string;
  name: string;
}

export const Place: React.FC<Props> = ({ address, name }) => {
  return (
    <li>
      <span>{name}</span> <span>{address}</span>
    </li>
  );
};

import { BusinessDetails as BusinessDetailsType } from "@/services/businesses/types";

interface Props {
  business: BusinessDetailsType;
}

export const BusinessDetails: React.FC<Props> = ({ business }) => {
  return <div>Business details {business.name}</div>;
};

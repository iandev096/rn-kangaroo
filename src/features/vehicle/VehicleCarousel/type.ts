import { ImageSourcePropType } from "react-native";

export type Variant = { label: string; value: string };
export type VehicleCarouselItem = {
  variants: Variant[];
  image: ImageSourcePropType;
  vehicleType: string;
  price: number;
};

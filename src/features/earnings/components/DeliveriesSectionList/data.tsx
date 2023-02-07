import BicycleDeliveryIcons from "src/components/SvgComponents/BicycleDeliveryIcon";
import MotorcycleDeliveryIcon from "src/components/SvgComponents/MotorcycleDeliveryIcon";
import TaxiDeliveryIcon from "src/components/SvgComponents/TaxiDeliveryIcon";
import TruckDeliveryIcon from "src/components/SvgComponents/TruckDeliveryIcon";
import { Vehicle } from "src/types/vehicle";
import { DeliveriesSection } from "./type";

export const deliveryVehicleIcon = new Map<Vehicle, React.ReactNode>();
deliveryVehicleIcon.set("Truck", <TruckDeliveryIcon />);
deliveryVehicleIcon.set("Bicycle", <BicycleDeliveryIcons />);
deliveryVehicleIcon.set("Motorcycle", <MotorcycleDeliveryIcon />);
deliveryVehicleIcon.set("Taxi", <TaxiDeliveryIcon />);

export const deliveryVehicleTitle = new Map<Vehicle, string>();
deliveryVehicleTitle.set("Truck", "Truck Delivery");
deliveryVehicleTitle.set("Bicycle", "Bicycle Delivery");
deliveryVehicleTitle.set("Motorcycle", "Motorcycle Delivery");
deliveryVehicleTitle.set("Taxi", "Taxi Delivery");

export const DELIVERIES_SECTIONS: DeliveriesSection[] = [
  {
    title: {
      dayStr: "Today",
      dateStr: "Sep 15",
      totalAmt: "GHS32",
      paymentStatus: "pending",
    },
    data: [
      {
        deliveryVehicle: "Truck",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Motorcycle",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Bicycle",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Taxi",
        amount: "GHS7",
        time: "11:35AM",
      },
    ],
  },
  {
    title: {
      dayStr: "Yesterday",
      dateStr: "Sep 15",
      totalAmt: "GHS32",
      paymentStatus: "paid",
    },
    data: [
      {
        deliveryVehicle: "Truck",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Motorcycle",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Bicycle",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Taxi",
        amount: "GHS7",
        time: "11:35AM",
      },
    ],
  },
  {
    title: {
      dayStr: "Last Week",
      dateStr: "Sep 15",
      totalAmt: "GHS32",
      paymentStatus: "pending",
    },
    data: [
      {
        deliveryVehicle: "Truck",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Motorcycle",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Bicycle",
        amount: "GHS7",
        time: "11:35AM",
      },
      {
        deliveryVehicle: "Taxi",
        amount: "GHS7",
        time: "11:35AM",
      },
    ],
  },
];

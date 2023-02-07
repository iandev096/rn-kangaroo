import { Vehicle } from "src/types/vehicle";

export type PaymentStatus = "paid" | "pending";

export type DeliveriesTitle = {
  dayStr: string;
  dateStr: string;
  totalAmt: string;
  paymentStatus: PaymentStatus;
};

export type DeliveriesData = {
  deliveryVehicle: Vehicle;
  amount: string;
  time: string;
};

export type DeliveriesSection = {
  title: DeliveriesTitle;
  data: DeliveriesData[];
};

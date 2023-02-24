export type NotificationData = {
  image: any;
  title: string;
  timeStr: string;
  isNew: boolean;
};
export type NotificationSection = {
  title: string;
  data: NotificationData[];
};

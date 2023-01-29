export type VerticalStepperProps = {
  children: React.ReactElement<StepProps> | React.ReactElement<StepProps>[];
};

export type StepProps = {
  icon: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  ICON_CONTAINER_WIDTH?: number;
  ICON_CONTAINER_HEIGHT?: number;
};

export type FullStepProps = StepProps & {
  showStepLine?: boolean;
};

export type StyleProps = {
  iconHeight: number;
  showStepLine?: boolean;
  ICON_CONTAINER_HEIGHT: number;
  ICON_CONTAINER_WIDTH: number;
};

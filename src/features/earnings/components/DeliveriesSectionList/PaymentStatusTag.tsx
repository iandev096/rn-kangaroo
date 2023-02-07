import React from "react";
import CheckIconXs from "src/components/SvgComponents/CheckIconXs";
import SyncIconXs from "src/components/SvgComponents/SyncIconXs";
import Tag, { TagProps } from "src/components/Tag";
import { PaymentStatus } from "./type";

type Props = { status: PaymentStatus };

const tagProps: Record<PaymentStatus, TagProps> = {
  paid: {
    left: <CheckIconXs pathFill="#03703C" />,
    title: "Paid",
    variant: "success",
  },
  pending: {
    left: <SyncIconXs />,
    title: "Pending Payout",
    variant: "normal",
  },
};

function PaymentStatusTag({ status }: Props) {
  return <Tag {...tagProps[status]} />;
}

export default PaymentStatusTag;

export const initialState = {
  list: [
    {
      name: "deliveryStatus",
      label: "Delivery Status",
    },
    {
      name: "earningsReport",
      label: "Earnings Report",
    },
    {
      name: "settlements",
      label: "Settlements",
    },
    {
      name: "pushNotification",
      label: "Push Notification",
    },
  ],
  isActiveMap: new Map(),
};

type State = typeof initialState;

export type Action = {
  type: "SET_ACTIVE";
  payload: { name: string; value: boolean };
};

export default function notificationListReducer(
  state: State = initialState,
  action: Action
): State {
  const payload = action?.payload;

  if (action.type === "SET_ACTIVE" && payload) {
    const { name, value } = payload;
    const newIsActiveMap = new Map([...state.isActiveMap]);
    newIsActiveMap.set(name, value);
    return { ...state, isActiveMap: newIsActiveMap };
  }

  return state;
}

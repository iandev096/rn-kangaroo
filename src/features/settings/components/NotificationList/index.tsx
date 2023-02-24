import React, { useReducer } from "react";
import { View } from "react-native";
import Switch from "src/components/Switch";
import { isLastItem } from "src/utils/array";
import NotificationListItem from "../NotificationListItem";
import notificationListReducer, { initialState } from "./reducer";
import { styles } from "./styles";

type Props = {};

const LIST = [
  { title: "Delivery Status" },
  { title: "Earnings Report" },
  { title: "Settlements" },
  { title: "Push Notification" },
];

function NotificationList({}: Props) {
  const [{ isActiveMap, list }, dispatch] = useReducer(
    notificationListReducer,
    initialState
  );

  const toggleItem = (name: string) => {
    const curActive = isActiveMap.get(name);
    dispatch({ type: "SET_ACTIVE", payload: { name, value: !curActive } });
  };

  return (
    <View style={styles.container}>
      {list.map((item, idx, arr) => (
        <NotificationListItem
          key={item.name}
          title={item.label}
          onPress={() => toggleItem(item.name)}
          style={[!isLastItem(idx, arr) && styles.separator]}
          right={
            <Switch
              value={isActiveMap.get(item.name)}
              onPress={() => toggleItem(item.name)}
            />
          }
        />
      ))}
    </View>
  );
}

export default NotificationList;

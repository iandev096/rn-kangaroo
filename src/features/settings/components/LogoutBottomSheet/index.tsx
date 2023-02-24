import React from "react";
import { Text, View } from "react-native";
import BottomSheet from "src/components/BottomSheet";
import Button from "src/components/Button";
import { styles } from "./styles";

type Props = {
  show: boolean;
  onClose: () => any;
};

function LogoutBottomSheet({ show, onClose }: Props) {
  return (
    <BottomSheet show={show} onClose={onClose} gestureEnabled={false}>
      <View style={styles.container}>
        <Text style={styles.queryText}>Are you sure you want to logout?</Text>
        <View>
          <Button title="Cancel" variant="alternate" />
          <Button title="Yes, log out" style={{ marginTop: 10 }} />
        </View>
      </View>
    </BottomSheet>
  );
}

export default LogoutBottomSheet;

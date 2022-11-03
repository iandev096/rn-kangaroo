import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Backdrop from "./Backdrop";
import { WIDTH } from "./constants";
import DrawerContent from "./DrawerContent";
import useDrawerAnimations from "./useDrawerAnimations";

type Props = { show: boolean; onClose: () => any };

function Drawer({ show, onClose }: Props) {
  const { gesture, translateX, handleClose } = useDrawerAnimations({
    show,
    onClose,
  });

  return (
    <>
      {show ? (
        <GestureDetector gesture={gesture}>
          <View style={[styles.container]}>
            <Backdrop onPress={() => handleClose()} translateX={translateX} />
            <DrawerContent translateX={translateX} />
          </View>
        </GestureDetector>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, position: "absolute", left: 0, width: WIDTH },
});

export default Drawer;

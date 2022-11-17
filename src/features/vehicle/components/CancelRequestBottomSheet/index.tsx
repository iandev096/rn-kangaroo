import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet from "src/components/BottomSheet";
import Button from "src/components/Button";
import CircularCheckSolidIcon from "src/components/SvgComponents/CircularCheckSolidIcon";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  show: boolean;
  onClose: () => any;
  onCancel: () => any;
};

function CancelRequestBottomSheet({ show, onClose, onCancel }: Props) {
  const [cancelled, setCancelled] = useState(false);

  const handleClose = () => {
    onClose();
    setCancelled(false);
  };

  const handleCancel = () => {
    onCancel();
    setCancelled(true);
  };

  useEffect(function postCancel() {
    let timeout;
    let mounted = true;
    if (cancelled) {
      timeout = setTimeout(() => {
        onClose();
        if (mounted) setCancelled(false);
      }, 1000)
    }
    return () => {
      mounted = false;
    }
  }, [cancelled])
  

  const cancelQueryView = (
    <View style={[styles.cancelQueryView, styles.container]}>
      <Text style={styles.title}>
        Are you absolutely sure about canceling this order?
      </Text>
      <View style={styles.btnGroup}>
        <Button
          onPress={handleClose}
          style={styles.btnGap}
          title="Back"
          variant="alternate"
        />
        <Button title="Yes, Cancel Order" onPress={handleCancel} />
      </View>
    </View>
  );

  const cancelledView = (
    <View style={[styles.cancelledView, styles.container]}>
      <CircularCheckSolidIcon />
      <Text style={styles.cancelledText}>Order Cancelled</Text>
    </View>
  );

  return (
    <BottomSheet show={show} onClose={handleClose} gestureEnabled={false}>
      {cancelled ? cancelledView : cancelQueryView}
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 313,
  },
  title: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 32,
    fontSize: 24,
    color: COLOR.PRIMARY_A,
  },
  cancelQueryView: {
    paddingHorizontal: 24,
    paddingTop: 38,
    paddingBottom: 42,
  },
  cancelledView: {
    justifyContent: "center",
    alignItems: "center",
  },
  cancelledText: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 18,
    lineHeight: 24,
    marginTop: 28,
    textAlign: "center",
  },
  btnGroup: {
    marginTop: 48,
  },
  btnGap: {
    marginBottom: 10,
  },
});

export default CancelRequestBottomSheet;

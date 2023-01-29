import React from "react";
import { Modal, Text, View } from "react-native";
import CircularLoader from "src/components/CircularLoader";
import CircularCheckSolidIcon from "src/components/SvgComponents/CircularCheckSolidIcon";
import { styles } from "./styles";

export type SubmitProgress = "SENDING" | "SENT" | "FAILED";

type Props = {
  show: boolean;
  onClose?: () => any;
  progress: SubmitProgress;
};

function SubmitProgressModal({ show, onClose, progress }: Props) {
  const progressIndicator: Record<SubmitProgress, React.ReactNode> = {
    SENDING: <CircularLoader />,
    SENT: <CircularCheckSolidIcon />,
    FAILED: null,
  };
  const progressBottom: Record<SubmitProgress, React.ReactNode> = {
    SENDING: <Text style={styles.progressText}>Sending report</Text>,
    SENT: <Text style={styles.progressText}>Report sent!</Text>,
    FAILED: null,
  };

  return (
    <Modal visible={show} animationType="fade" transparent>
      <View style={styles.stage}>
        <View style={styles.backdrop} />
        <View style={styles.modalContent}>
          <View style={styles.modalContentInner}>
            <View style={styles.progressIndicator}>
              {progressIndicator[progress]}
            </View>
            <View>{progressBottom[progress]}</View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default SubmitProgressModal;

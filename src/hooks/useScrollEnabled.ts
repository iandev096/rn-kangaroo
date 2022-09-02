import { useState } from "react";
import { LayoutChangeEvent, useWindowDimensions } from "react-native";

/**
 * This hook is intended to be used with any scrollable view.
 * It compares the height of a view to the height of the current window and if the height
 * of the view is greater than the current window, ```scollEnabled``` is set to true; otherwise false.
 * ```onLayout``` must be set on the view in question.
 */

function useScrollEnabled() {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const windowHeight = useWindowDimensions().height;
  const onLayout = (ev: LayoutChangeEvent) => {
    if (ev.nativeEvent.layout.height > windowHeight) {
      setScrollEnabled(true);
    }
  };

  return { scrollEnabled, onLayout };
}

export default useScrollEnabled;

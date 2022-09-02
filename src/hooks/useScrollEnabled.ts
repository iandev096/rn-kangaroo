import { useEffect, useState } from "react";
import { Keyboard, LayoutChangeEvent, useWindowDimensions } from "react-native";

/**
 * This hook is intended to be used with any scrollable view.
 * It compares the height of a view to the height of the current window and if the height
 * of the view is greater than the current window, ```scollEnabled``` is set to true; otherwise false.
 * When Keyboard is open, we also set ```scrollEnabled``` to true; otherwise false
 * ```onLayout``` must be set on the view in question.
 */

function useScrollEnabled() {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [viewOverflows, setviewOverflows] = useState(false);

  const scrollEnabled = viewOverflows || keyboardShown;

  useEffect(function handleKeyboardVisibility() {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardShown(true)
    );
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardShown(false)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const windowHeight = useWindowDimensions().height;
  const onLayout = (ev: LayoutChangeEvent) => {
    if (ev.nativeEvent.layout.height > windowHeight) {
      setviewOverflows(true);
    }
  };

  return { scrollEnabled, onLayout };
}

export default useScrollEnabled;

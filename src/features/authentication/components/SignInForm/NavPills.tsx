import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Pill from "src/components/Pill";
import MailOpenIcon from "src/components/SvgComponents/MailOpenIcon";
import TelephoneIcon from "src/components/SvgComponents/TelephoneIcon";
import { Selected } from "./types";

type Props = {
  onSelect: (selected: Selected) => void;
};

const initialSelected = "Phone";

function NavPills({ onSelect }: Props) {
  const [selected, setSelected] = useState<Selected>(initialSelected);

  useEffect(function initSelected() {
    onSelect(initialSelected);
  }, []);

  function handleSelect(selected: Selected) {
    onSelect(selected);
    setSelected(selected);
  }

  const emailSelected = selected === "Email";
  const phoneSelected = selected === "Phone";

  return (
    <View style={{ flexDirection: "row", marginTop: 16 }}>
      <Pill
        title="Phone"
        size="md"
        variant={phoneSelected ? "normal" : "alternate"}
        onPress={() => handleSelect("Phone")}
        left={
          <TelephoneIcon
            width={16}
            height={16}
            fill={phoneSelected ? "#fff" : "#000"}
            style={{ marginRight: 8 }}
          />
        }
      />
      <View style={{ marginLeft: 16 }}>
        <Pill
          title="Email"
          size="md"
          variant={emailSelected ? "normal" : "alternate"}
          onPress={() => handleSelect("Email")}
          left={
            <MailOpenIcon
              height={16}
              width={16}
              fill={emailSelected ? "#fff" : "#000"}
              style={{ marginRight: 8 }}
            />
          }
        />
      </View>
    </View>
  );
}

export default NavPills;

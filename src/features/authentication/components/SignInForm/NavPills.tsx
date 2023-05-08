import React, { useState } from "react";
import { View } from "react-native";
import Pill from "src/components/Pill";
import MailOpenIcon from "src/components/SvgComponents/MailOpenIcon";
import TelephoneIcon from "src/components/SvgComponents/TelephoneIcon";

type Props = {};
type Selected = "Phone" | "Email";

function NavPills({}: Props) {
  const [selected, setSelected] = useState<Selected>("Phone");
  const emailSelected = selected === "Email";
  const phoneSelected = selected === "Phone";

  return (
    <View style={{ flexDirection: "row" }}>
      <Pill
        title="Phone"
        size="md"
        variant={phoneSelected ? "normal" : "alternate"}
        onPress={() => setSelected("Phone")}
        left={
          <TelephoneIcon
            width={16}
            height={16}
            fill={phoneSelected ? "#fff" : "#000"}
            style={{ marginRight: 8 }}
          />
        }
      />
      <Pill
        title="Email"
        size="md"
        variant={emailSelected ? "normal" : "alternate"}
        onPress={() => setSelected("Email")}
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
  );
}

export default NavPills;

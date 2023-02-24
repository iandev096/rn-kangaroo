import React from "react";
import { View } from "react-native";
import MailOpenIcon from "src/components/SvgComponents/MailOpenIcon";
import TelegramIcon from "src/components/SvgComponents/TelegramIcon";
import TelephoneIcon from "src/components/SvgComponents/TelephoneIcon";
import WhatsappIcon from "src/components/SvgComponents/WhatsappIcon";
import ContactListItem from "../ContactListItem";

type Props = {};

const LIST = [
  {
    label: "Call customer support",
    value: "Call customer support",
    icon: <TelephoneIcon />,
  },
  {
    label: "Telegram",
    value: "Telegram",
    icon: <TelegramIcon />,
  },
  { label: "WhatsApp", value: "WhatsApp", icon: <WhatsappIcon /> },
  {
    label: "Send us an Email",
    value: "Send us an Email",
    icon: <MailOpenIcon />,
  },
];

function ContactUsList({}: Props) {
  return (
    <View>
      {LIST.map((item) => (
        <ContactListItem
          key={item.label}
          title={item.label}
          icon={item.icon}
          onPress={() => console.log(item.value)}
        />
      ))}
    </View>
  );
}

export default ContactUsList;

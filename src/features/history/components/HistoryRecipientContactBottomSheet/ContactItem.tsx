import React from "react";
import { ImageSourcePropType, Text, View } from "react-native";
import Avatar from "src/components/Avatar";
import ContactTelephoneIcon from "src/components/SvgComponents/ContactTelephoneIcon";
import { styles } from "./styles";

type Props = {
  profileImg: ImageSourcePropType;
  name: string;
  contactNo: string;
};

function ContactItem({ profileImg, name, contactNo }: Props) {
  return (
    <View style={styles.contactItem}>
      <Avatar source={profileImg} size={48} />
      <View style={styles.infoGroup}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <View style={styles.contactGroup}>
          <View style={styles.contactIconContainer}>
            <ContactTelephoneIcon />
          </View>
          <Text numberOfLines={1} style={styles.contactNo}>
            {contactNo}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ContactItem;

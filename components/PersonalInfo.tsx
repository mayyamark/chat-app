import { Button, Image, Text, TextInput, View } from "react-native";
import React from "react";
import Styles from "./Styles";

const PersonalInfo = () => {
  return (
    <View style={Styles.personalInfoContainer}>
      <Image
        style={Styles.logo}
        source={require("../assets/wired-brain-coffee-logo.png")}
      />

      <View style={Styles.enterYourName}>
        <Text style={Styles.nameText}>Please enter your name..</Text>
        <TextInput style={Styles.nameTextInput} />
      </View>

      <Button title="Start chatting!" onPress={() => {}} />
    </View>
  );
};

export default PersonalInfo;

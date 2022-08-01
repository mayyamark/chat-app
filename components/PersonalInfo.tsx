import { Button, Image, Text, TextInput, View } from "react-native";
import React from "react";

const PersonalInfo = () => {
  return (
    <View>
      <Image source={require("../assets/wired-brain-coffee-logo.png")} />

      <View>
        <Text>Please enter your name</Text>
        <TextInput />
      </View>

      <Button title="Start chatting!" onPress={() => {}} />
    </View>
  );
};

export default PersonalInfo;

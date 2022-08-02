import { Button, Image, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Styles from "./Styles";
import ImageChooser from "./ImageChooser";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <View style={Styles.personalInfoContainer}>
      <Image
        style={Styles.logo}
        source={require("../assets/wired-brain-coffee-logo.png")}
      />

      <View style={Styles.enterYourName}>
        <Text style={Styles.nameText}>Please enter your name..</Text>
        <TextInput
          style={Styles.nameTextInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <ImageChooser onChangeImage={(image) => setImage(image)} />

      <Button title="Start chatting!" onPress={() => {}} />
    </View>
  );
};

export default PersonalInfo;

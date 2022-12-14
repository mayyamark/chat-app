import { Button, Image, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Styles from "./Styles";
import ImageChooser from "./ImageChooser";

interface IPersonalInfoProps {
  onPress: (name: string, image: string) => void;
}

const PersonalInfo: React.FC<IPersonalInfoProps> = ({ onPress }) => {
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

      <Button title="Start chatting!" onPress={() => onPress(name, image)} />
    </View>
  );
};

export default PersonalInfo;

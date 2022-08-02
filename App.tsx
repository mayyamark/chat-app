import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import PersonalInfo from "./components/PersonalInfo";
import Styles from "./components/Styles";
import React, { useState } from "react";
import Chat from "./components/Chat";

const App = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  const handlePressStartChatting = (name: string, image: string) => {
    setImage(image);
    setUsername(name);
  };

  return (
    <SafeAreaView style={Styles.container}>
      {username ? (
        <Chat username={username} image={image} />
      ) : (
        <PersonalInfo onPress={handlePressStartChatting} />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

import React from "react";
import { View, Text } from "react-native";

type ChatProps = {
  username: string;
  image: string;
};

const Chat: React.FC<ChatProps> = ({ username, image }) => {
  return (
    <View style={{ marginTop: 200, alignSelf: "center" }}>
      <Text>Hi, {username}! You can chat here shortly!</Text>
    </View>
  );
};

export default Chat;

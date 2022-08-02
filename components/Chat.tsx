import React, { useState } from "react";
import { View, TextInput, Button, FlatList } from "react-native";
import ChatItem, { IChatItem } from "./ChatItem";
import Styles from "./Styles";

interface IChatProps {
  username: string;
  image: string;
}

const Chat: React.FC<IChatProps> = ({ username, image }) => {
  const [chatInput, setChatInput] = useState("");
  const [chatItems, setChatItems] = useState<IChatItem[]>([]);

  return (
    <View style={Styles.container}>
      <FlatList
        inverted
        data={[...chatItems].sort((a, b) => b.timestamp - a.timestamp)}
        keyExtractor={(item) => item.id.toLocaleString()}
        renderItem={({ item }) => (
          <ChatItem username={username} chatItem={item} />
        )}
      />

      <View style={Styles.sendSection}>
        <TextInput
          style={Styles.chatTextInput}
          value={chatInput}
          onChangeText={(text) => setChatInput(text)}
        />
        <Button
          title="Send"
          onPress={() => {
            setChatItems([
              ...chatItems,
              {
                id: chatItems.length + 1,
                text: chatInput,
                image,
                timestamp: Date.now(),
                by: username,
              },
            ]);
            setChatInput("");
          }}
        />
      </View>
    </View>
  );
};

export default Chat;

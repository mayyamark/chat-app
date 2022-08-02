import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList } from "react-native";
import ChatItem, { IChatItem } from "./ChatItem";
import Styles from "./Styles";
import Socket from "./Socket";

interface IChatProps {
  username: string;
  image: string;
}

const Chat: React.FC<IChatProps> = ({ username, image }) => {
  const [chatInput, setChatInput] = useState("");
  const [chatItems, setChatItems] = useState<IChatItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        if (Socket.state === "Disconnected") {
          await Socket.start();
        }
      } catch (error) {
        console.warn(error);
      }
    })();

    Socket.on("ReceiveMessage", (chatItem) => {
      setChatItems((prevState) => {
        if (prevState.find((item) => item.id === chatItem.id)) {
          return prevState;
        }
        return [...prevState, chatItem];
      });
    });
  }, []);

  return (
    <View style={Styles.container}>
      <FlatList
        inverted
        data={[...chatItems].sort((a, b) => b.timeStamp - a.timeStamp)}
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
          onPress={async () => {
            await Socket.invoke("SendMessage", {
              id: `${chatItems.length + 1}`,
              text: chatInput,
              image,
              timeStamp: Date.now(),
              by: username,
            });
            setChatInput("");
          }}
        />
      </View>
    </View>
  );
};

export default Chat;

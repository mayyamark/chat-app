import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import PersonalInfo from "./components/PersonalInfo";
import Styles from "./components/Styles";
import React, { useEffect, useState } from "react";
import Chat from "./components/Chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

export const storageUsernameKey = "chatapp-username";
export const storageImageKey = "chatapp-image";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [isAppReady, setIsAppReady] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchedImage = await AsyncStorage.getItem(storageImageKey);
        const image = fetchedImage ? fetchedImage : "";

        const fetchedUsername = await AsyncStorage.getItem(storageUsernameKey);
        const username = fetchedUsername ? fetchedUsername : "";

        setImage(image);
        setUsername(username);
      } catch (err) {
        console.warn(err);
      } finally {
        setIsAppReady(true);
      }
    })();
  }, []);

  const handlePress = async (name: string, image: string) => {
    await AsyncStorage.setItem(storageImageKey, image);
    await AsyncStorage.setItem(storageUsernameKey, username);

    setImage(image);
    setUsername(name);
  };

  return (
    <SafeAreaView
      style={Styles.container}
      onLayout={async () => {
        if (isAppReady) {
          await SplashScreen.hideAsync();
        }
      }}
    >
      {username ? (
        <Chat username={username} image={image} />
      ) : (
        <PersonalInfo onPress={handlePress} />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

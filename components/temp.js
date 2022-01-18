import React from "react"
import { StyleSheet, Text, View, Image, NativeModules, Button } from 'react-native'

const { StatusBarManager } = NativeModules

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.iconBar}>
        <Image style={styles.menuIcon} source={require("../assets/menu.png")} resizeMode='contain' />
        <Image style={styles.icon} source={require("../assets/hka-icon.png")} resizeMode='cover' />
        <View style={{ flex: 1 }} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    top: StatusBarManager.HEIGHT
  },
  iconBar: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderColor: "#C0C0C0",
    position: "absolute",
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center"
  },
  menuIcon: {
    flex: 2.5,
    height: "50%",
    width: "50%"
  },
  icon: {
    flex: 9,
    height: "80%",
  },
});

import { Text, View, StyleSheet, Button } from 'react-native'

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>About HKA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
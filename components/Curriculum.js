import { Text, View, StyleSheet } from 'react-native'

export default function Curriculum() {
  return (
    <View style={styles.container}>
      <Text>Curriculum</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  }
})
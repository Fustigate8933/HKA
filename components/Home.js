import React, { useState } from "react"
import { StyleSheet, View, Image, ScrollView, Dimensions, Text } from 'react-native'
import { Montez_400Regular } from '@expo-google-fonts/montez'
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"
import { Title } from 'react-native-paper'

const { width } = Dimensions.get("window")
const height = width * 0.6
const images = {
  image1: require('../assets/image1.jpg'),
  image2: require('../assets/image2.jpg'),
  image3: require('../assets/image3.jpg'),
  image4: require('../assets/image4.jpg'),
  image5: require('../assets/image5.jpg'),
  image6: require('../assets/image6.jpg'),
  image7: require('../assets/image7.jpg'),
}

export default function Home() {
  const [active, setActive] = useState(0)

  let [fontsLoaded, error] = useFonts({
    Montez_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const handleScroll = ({ nativeEvent }) => {
    const { "contentOffset": offset } = nativeEvent
    const { "layoutMeasurement": measurement } = nativeEvent
    const width = measurement["width"]
    const x = offset["x"]
    const dotActive = (Math.ceil(x / width))
    if (dotActive !== active) {
      setActive(dotActive)
    }
  }

  return (
    <View style={styles.container}>
      <View stye={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
        <Image style={styles.icon} source={require("../assets/hka-icon.png")} resizeMode='contain' />
        <View style={{ position: "relative" }}>
          <ScrollView contentContainerStyle={styles.mainScroll}>
            <View style={styles.carouselView}>
              <ScrollView
                pagingEnabled
                horizontal
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
                style={styles.carousel}
              >
                {
                  Object.keys(images).map((item, index) =>
                    <Image
                      key={index}
                      style={styles.carouselImage}
                      source={images[item]}
                      resizeMode="cover"
                    />
                  )
                }
              </ScrollView>
              <View style={styles.dotView}>
                {
                  Object.keys(images).map((item, index) =>
                    <Text key={index} style={index === active ? styles.activeDot : styles.dot}>⬤</Text>
                  )
                }
              </View>
            </View>
            <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
              <Text style={styles.keyFacts}>Key facts about our school</Text>
              <Image source={require("../assets/line.png")} />
              <Title style={{ color: "#4647AB" }}>
                Nanjing Hankai Academy offers to its' students a truly global experience
                where their personal dreams are nurtured through inspiration from our
                excellent teachers and challenged by exceptional learning opportunities.
              </Title>
              <Image source={require("../assets/line.png")} />
              <Image source={require("../assets/languages.png")} />
            </View>
          </ScrollView>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  icon: {
    position: "absolute",
    width: "100%",
    height: 120
  },
  carouselView: {
    paddingHorizontal: 15,
    marginTop: 120,
    width: "100%",
    height,
    justifyContent: "space-between"
  },
  mainScroll: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  carousel: {
    width: "100%",
    height
  },
  carouselImage: {
    flex: 1,
    width: width - 30,
    height,
    borderRadius: 20,
  },
  dotView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center"
  },
  dot: {
    color: "#888",
    margin: 3
  },
  activeDot: {
    color: "#FFF",
    margin: 3
  },
  keyFacts: {
    marginTop: 10,
    fontSize: 43,
    color: "#4647AB",
    fontFamily: "Montez_400Regular",
  }
});

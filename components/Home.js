import React, { useState } from "react"
import { StyleSheet, View, Image, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native'
import { Montez_400Regular } from '@expo-google-fonts/montez'
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"
import { Title } from 'react-native-paper'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat'

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

export default function Home({ navigation }) {
  const [active, setActive] = useState(0)

  let [fontsLoaded, error] = useFonts({
    Montez_400Regular,
    Roboto_400Regular,
    Montserrat_800ExtraBold,
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

  const handleOnPress = () => {
    navigation.navigate("Curriculum")
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
              <Title style={{ color: "#4647AB", fontFamily: "Roboto_400Regular" }}>
                Nanjing Hankai Academy offers to its' students a truly global experience
                where their personal dreams are nurtured through inspiration from our
                excellent teachers and challenged by exceptional learning opportunities.
              </Title>
              <Image source={require("../assets/line.png")} style={{ marginVertical: 10 }} />

              <Image source={require("../assets/languages.png")} style={{ marginVertical: 5 }} />
              <Title style={{ color: "#4647AB", fontFamily: "Montserrat_800ExtraBold", marginVertical: 10 }}>
                Languages Taught
              </Title>
              <Title style={{ color: "#4647AB", fontFamily: "Roboto_400Regular" }}>
                English, Spanish, Chinese, Japanese
              </Title>

              <Image source={require("../assets/englandFlag.png")} style={styles.flag} resizeMode="contain" />
              <Title style={{ color: "#4647AB", fontFamily: "Montserrat_800ExtraBold", marginVertical: 10 }}>
                Curriculums
              </Title>
              <Title style={{ color: "#4647AB", fontFamily: "Roboto_400Regular", marginBottom: 20 }}>
                IGCSE, Checkpoint, A Level, LAMDA, NCC, ASDAN
              </Title>

              <Image source={require("../assets/globe.png")} />
              <Title style={{ color: "#4647AB", fontFamily: "Montserrat_800ExtraBold", marginVertical: 10 }}>
                10+ Nationalities
              </Title>

              <Image source={require("../assets/ts.png")} style={{ marginTop: 40 }} />
              <Title style={{ color: "#4647AB", fontFamily: "Montserrat_800ExtraBold", marginVertical: 10 }}>
                Teacher to Students Ratio
              </Title>
              <Title style={{ color: "#4647AB", fontFamily: "Roboto_400Regular" }}>
                5 : 1
              </Title>

              <Image source={require("../assets/ageGroup.png")} style={{ marginTop: 40 }} />
              <Title style={{ color: "#4647AB", fontFamily: "Montserrat_800ExtraBold", marginVertical: 10 }}>
                Age Group
              </Title>
              <Title style={{ color: "#4647AB", fontFamily: "Roboto_400Regular" }}>
                6 - 18
              </Title>

              <Image source={require("../assets/students.png")} style={{ marginTop: 40 }} />
              <Title style={{ color: "#4647AB", fontFamily: "Montserrat_800ExtraBold", marginVertical: 10 }}>
                Students
              </Title>
              <Title style={{ color: "#4647AB", fontFamily: "Roboto_400Regular" }}>
                1500
              </Title>

              <Image source={require("../assets/fh.png")} style={{ marginTop: 40 }} />
              <Title style={{ color: "#4647AB", fontFamily: "Montserrat_800ExtraBold", marginVertical: 10 }}>
                Facilities Highlights
              </Title>

              <Image source={require("../assets/dbs.png")} style={{ marginTop: 40 }} />
              <Title style={{ color: "#4647AB", fontFamily: "Montserrat_800ExtraBold", marginVertical: 10 }}>
                Day and Boarding School
              </Title>

              <Image source={require("../assets/line.png")} style={{ marginVertical: 10 }} />
              <TouchableOpacity style={styles.curriculum} onPress={handleOnPress}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={styles.keyFacts}>Our Curriculum</Text>
                </View>
              </TouchableOpacity>
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
    width: "100%",
    height: 120,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  carouselView: {
    paddingHorizontal: 15,
    marginTop: 20,
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
    marginTop: 20,
    fontSize: 43,
    color: "#4647AB",
    fontFamily: "Montez_400Regular",
    alignSelf: "center",
  },
  flag: {
    marginTop: 50,
    marginVertical: 5,
    width: 200,
    height: 100
  },
  curriculum: {
    marginTop: 10,
    backgroundColor: "#F5F5F5",
    width: 300,
    marginBottom: 300,
    borderWidth: 1,
    borderColor: "#1E80C1",
    borderRadius: 50,
    paddingBottom: 15
  }
});

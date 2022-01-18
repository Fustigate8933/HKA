import React from "react"
import { StyleSheet, View, Image, ScrollView } from 'react-native'

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg"
]

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.icon} source={require("../assets/hka-icon.png")} resizeMode='contain' />
        <View style={styles.carousel}>
          {
            images.map((item, index) => {
              return (
                <Image
                  key={index}
                  style={styles.carouselImage}
                  source={require(`./../assets/${item}`)}
                  resizeMode="contain"
                />
              )
            })
          }
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 15
  },
  icon: {
    position: "absolute",
    width: "100%",
    height: 100
  },
  carousel: {
    top: 50,
  },
  carouselImage: {
    width: "100%",
    height: 300,
    borderRadius: 15
  }
});

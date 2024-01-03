import { StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ImageViewer({PlaceHolderImageSource}) {
  return (
    <Image source={PlaceHolderImageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
      }
})
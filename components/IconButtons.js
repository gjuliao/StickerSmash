import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function IconButtons({icon, label}) {
  return (
    <View>
      <Pressable style={styles.IconButton}>
        <MaterialIcons name={icon} size={24} color='#fff' />
        <Text>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    IconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }
})
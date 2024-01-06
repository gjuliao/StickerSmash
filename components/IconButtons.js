import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function IconButtons({icon, label, onPres}) {
  return (
    <View>
      <Pressable style={styles.iconButton}>
        <MaterialIcons name={icon} size={24} color='#fff' />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    iconButtonLabel: {
      color: '#fff',
      marginTop: 12,
    }
})
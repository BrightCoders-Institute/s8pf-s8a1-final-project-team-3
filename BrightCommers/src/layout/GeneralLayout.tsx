import React from 'react'
import { StyleSheet, View } from 'react-native'

export const GeneralLayout = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        paddingHorizontal: 16,
        paddingVertical: 20,
    }
})
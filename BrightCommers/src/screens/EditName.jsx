import React from 'react'
import { Text, View } from 'react-native'


const EditName = () => {
  return (
    <View style={styles.container}>
        <Text> Name edit screen</Text>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   
},

}

export default EditName

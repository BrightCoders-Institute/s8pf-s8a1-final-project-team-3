import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Safearea = ({ children } : {children : any}) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={Platform.OS === 'ios' ? { flex: 1, backgroundColor: 'white', paddingTop: top }: {flex: 1}}>
            {children}
        </View>
    )
}

export default Safearea

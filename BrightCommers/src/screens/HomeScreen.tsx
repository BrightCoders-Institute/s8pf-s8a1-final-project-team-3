import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { GeneralLayout } from '../layout/GeneralLayout'

export const HomeScreen = () => {
    return (
        <GeneralLayout>
            <View>
                <Text >asd </Text>
                <Icon name="home-outline" size={30} color="#4F8EF6" />
            </View>
        </GeneralLayout>
    )
}

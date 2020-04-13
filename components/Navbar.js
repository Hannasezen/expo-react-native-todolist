import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Navbar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: '#5F2580',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff'
    },
})
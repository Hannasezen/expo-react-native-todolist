import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Logo</Text>
            <Text style={styles.text}>Title</Text>
            <Text style={styles.text}>Account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        paddingHorizontal: 10,
        paddingTop: 20,
        backgroundColor: '#5F2580',        
    },
    text: {
        fontSize: 20,
        color: '#fff'
    },
})
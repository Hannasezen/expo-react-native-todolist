import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const [ value, setValue ] = useState('')

    const changeHandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        }
    }

    return (
        <View style={styles.textForm}>
            <TextInput
                style={styles.textInput}
                placeholder="Add your todo"
                value={value} 
                onChangeText={setValue}
            />
            <TouchableOpacity style={styles.button} onPress={changeHandler}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textForm: {
        height: 40,
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        marginLeft: 10,
        borderRadius: 2,
        backgroundColor: '#AD66D5',
    },
    buttonText: {
        fontSize: 25,
        textAlignVertical: 'center',
        color: '#fff',
    },
    textInput: {
        flex: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#5F2580',
    },
})
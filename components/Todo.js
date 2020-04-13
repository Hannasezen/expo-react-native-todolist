import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const Todo = ({ todo }) => {
    return (
        <View style={styles.todo}>
            <View style={styles.todoDescription}>
                <Text style={styles.categoryIcon}>*</Text>
                <Text style={styles.todoText}>{todo.title}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteText}>x</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#999',
        marginBottom: 5,
        borderRadius: 2,
    },
    todoDescription: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    categoryIcon: {
        width: 40,
        marginRight: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#fff',
    },
    todoText: {
        textAlignVertical: 'center'
    },
    deleteButton: {
        backgroundColor: '#fff',
        width: 40,
        marginLeft: 10,
    },
    deleteText: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})
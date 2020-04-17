import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const Todo = ({ todo, onRemove }) => {

    const removeTodo = () => {
        onRemove(todo.id);
    }

    return (
        <View style={styles.todo}>
            <View style={styles.todoDescription}>
                <Text style={styles.todoText}>{todo.title}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={removeTodo}>
                <Text style={styles.deleteText}>x</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        height: 40,
        marginBottom: 5,
        borderRadius: 2,
        backgroundColor: '#E6E7E8',
    },
    todoDescription: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    todoText: {
        textAlignVertical: 'center'
    },
    deleteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        marginLeft: 10,
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
        backgroundColor: '#D1D3D4',
    },
    deleteText: {
        fontSize: 20,
    },
})
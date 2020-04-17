import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { AddTodo } from './components/AddTodo'
import { Todo } from './components/Todo'

export default function App() {

  const [ todos, setTodos ] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          title,
        }
      ]
    )
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <AddTodo onSubmit={addTodo}/>
        <View style={styles.todolist}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Todo todo={item} onRemove={deleteTodo} />}
            keyExtractor={todo => todo.id.toString()}            
          />
        </View>
      </View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  main: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  todolist: {
    flex: 1,
  },
});

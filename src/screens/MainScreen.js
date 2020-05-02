import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo }) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={todos}
                renderItem={({ item }) => {
                    return <Todo todo={item} onRemove={removeTodo} />;
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({});

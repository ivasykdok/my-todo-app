import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log(`Ви натиснули на: ${todo.id}`)}
            onLongPress={onRemove.bind(null, todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    todo: {
        borderWidth: 2,
        borderColor: '#eee',
        borderRadius: 5,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'column',
    },
});

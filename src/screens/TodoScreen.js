import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <Button title="Назад" onPress={goBack} />
        </View>
    );
};
const styles = StyleSheet.create({});

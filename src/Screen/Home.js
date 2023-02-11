import { View, StyleSheet, Text, Button, Pressable, TextInput } from "react-native";
import { useState } from "react";

export default function Home(props) {
    const navigation = props.navigation;
    const [nameState, setName] = useState('');

    const changeScreen = (name, data = {}) => {
        navigation.navigate(name, data);
    };

    const route = props.route;
    const test = route.params?.test;

    return (
        <View>
            <Text>Home</Text>
            <Pressable style={styles.pressable} onPress={() => changeScreen('Info', { name: "Lê Hùng", msv: 'PH25613' })}>
                <Text>Info</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => changeScreen('UserList')}>
                <Text>List</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => changeScreen('Manager')}>
                <Text>Manager</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => changeScreen("Product")}>
                <Text>Product</Text>
            </Pressable>
            <Text>{test}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "#E0F7FA",
        padding: 10,
        margin: 10,
        borderRadius: 5
    }
});
import { View, Image, Text, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";

export default function Info(props) {
    const navigation = props.navigation;

    const [nameState, setName] = useState('');
    const [emailState, setEmail] = useState('');
    const [addressState, setAddress] = useState('');

    const [count, setCount] = useState(0);

    const route = props.route;

    const name = route.params.name;
    const msv = route.params.msv;

    const changeScreen = (name, data = {}) => {
        navigation.navigate(name, data);
    };

    useEffect(() => {
        setEmail("hunglctph25613")
        setAddress("HN")
    },[])

    useEffect(() => {
        if(count===2){
            setEmail(addressState+"-"+emailState);
        }
    },[count])

    return (
        <View>
            <Text>{name}</Text>
            <Text>{msv}</Text>
            <Text>{emailState}</Text>
            <Text>{addressState}</Text>
            <Image style={{ with: 60, height: 360 }}
                source={require('../ProductImage/avatar.jpg')} />
            <TextInput value={nameState} onChangeText={setName} placeholder="Name"
                style={{ width: '100%', height: 60, fontSize: 24, borderWidth: 1 }} />
            <Button title="Change" onPress={() => changeScreen('Home', { test: nameState })} />
            <Button title="Increase" onPress={() => {
                setCount(count + 1);
            }}/>
        </View>
    );
}
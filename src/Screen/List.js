import { View, FlatList, Text } from "react-native";
import { useState } from "react";

export default function List(props) {
   
    const data = [
        {id:"1", name:"Hung",age:"18"},
        {id:"2", name:"Hung1",age:"19"},
        {id:"3", name:"Hung2",age:"20"},
    ]

    const [list,setList] = useState(data);

    return(
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => <>
                    <Text>Id: {item.id}</Text>
                    <Text>Name: {item.name}</Text>
                    <Text>Age: {item.age}</Text>
                </>}
            />
        </View>
    );
}
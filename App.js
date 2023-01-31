import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [showState, changeShowState] = useState(false);

  const [nameState, changeNameState] = useState('');
  const [descState, changeDescState] = useState('');
  const [imgState, changeImgState] = useState('');

  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { nameState, descState, imgState }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Họ tên : Lê Công Tuấn Hùng</Text>
      <Text style={styles.header}>MSV : PH25613</Text>
      <Button title="Thêm mới" onPress={() => changeShowState(true)} />
      {showState ? (
        <>
          <TextInput style={styles.textInput} onChangeText={changeNameState} placeholder='Họ tên' />
          <TextInput style={styles.textInput} onChangeText={changeDescState} placeholder='Mô tả' />
          <TextInput style={styles.textInput} onChangeText={changeImgState} placeholder='Avatar' />
          <View style={{flexDirection:"row"}}>
            <Button title='Hủy' onPress={() => changeShowState(false)} color='#Ff0000'/>
            <Button title='Thêm' onPress={addData}/>
          </View>
        </>
      ) : (
        null
      )}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image style={styles.avatar} source={{ uri: item.imgState }} />
              <View style={styles.text}>
                <Text>Họ tên: {item.nameState}</Text>
                <Text>Desc: {item.descState}</Text>
              </View>
            </View>
          </>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
  }
  , textInput: {
    width: 320,
    height: 64,
    fontSize: 32,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#B762bd'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  text: {
    marginLeft: 30
  }
});

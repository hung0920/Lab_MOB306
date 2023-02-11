import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View, Modal ,Pressable} from 'react-native';
import { useState } from 'react';

export default function ManagerApp() {

  const [showState, changeShowState] = useState(false);

  const [nameState, changeNameState] = useState('');
  const [descState, changeDescState] = useState('');
  const [imgState, changeImgState] = useState('https://reactjs.org/logo-og.png');

  const [data, setData] = useState([ {id: 1, name: 'ABC', desc: 'Mo ta ABC'}]);
  const [editIdState, changeEditIdState] = useState(0);

  console.log(data.length);

  const addData = () => {

    if(editIdState!==0){
      const newList = data.map(item => {
        if (item.id == editIdState) {
          item.name = nameState;
          item.desc = descState;
          item.img = imgState;
        }
        return item;
      });
      setData(newList);
      // Đóng modal và cập nhật lại gt mặc định
      onClose();
      return;
    }

    const newItem = {
      name: nameState,
      desc: descState,
      img : imgState,
      // mảng k có pt thì id = 1,
      // mảng có pt thì id cuối cùng  + 1
      id: data.length == 0
        ? 1
        : data[data.length - 1].id + 1
    };
    const newList = [...data, newItem];
    setData(newList);
    changeShowState(false);
  };

  const onClose = () => {
    changeShowState(false);
    changeNameState(''); changeDescState('');changeImgState(''); changeEditIdState(0);
  };

  const onDelete = (deleteId) => {
    const newList = data.filter((item) => {
      return item.id !== deleteId;
    });
    setData(newList);
  }

  const onEdit = (editId) => {
    changeShowState(true);
    const editItem = data.find((item) => {
      return item.id == editId;
    });
    changeNameState(editItem.name);
    changeDescState(editItem.desc);
    changeImgState(editItem.img);
    changeEditIdState(editItem.id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Họ tên : Lê Công Tuấn Hùng</Text>
      <Text style={styles.header}>MSV : PH25613</Text>
      {showState ? null : <>
        <Button title="Thêm mới" onPress={() => changeShowState(true)} />
      </>}
      <Modal visible={showState} animationType="slide">
        <View style={styles.container}>
          <TextInput style={styles.textInput} onChangeText={changeNameState} value={nameState} placeholder='Họ tên' />
          <TextInput style={styles.textInput} onChangeText={changeDescState} value={descState} placeholder='Mô tả' />
          <TextInput style={styles.textInput} onChangeText={changeImgState} value={imgState} placeholder='Avatar' />
          <View style={{ flexDirection: "row", width: "35%", justifyContent: "space-between" }}>
            <Button title='Hủy' onPress={() => onClose()} color='#Ff0000' />
            <Button title='Thêm' onPress={addData} />
          </View>
        </View>
      </Modal>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image style={styles.avatar} source={{ uri: item.img }} />
              <View style={styles.text}>
                <Text>Id: {item.id}</Text>
                <Text>Họ tên: {item.name}</Text>
                <Text>Desc: {item.desc}</Text>
              </View>
              <Pressable onPress={() => onDelete(item.id)}>
                <Text>Xóa</Text>
              </Pressable>
              <Pressable onPress={() => onEdit(item.id)}>
                <Text>Sửa</Text>
              </Pressable>
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

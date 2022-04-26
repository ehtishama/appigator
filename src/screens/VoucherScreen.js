/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../config/colors';
const DATA = [
  {
    id: '1',
    name: 'Blue Silk Tuxedo',
    title: '70:00',
    images: 'https://static-01.daraz.pk/p/be08ae6469685f81a1de7d139621762f.jpg',
  },
  {
    id: '2',
    name: 'Dainty Gold Naclace',
    title: '63.99',
    images:
      'https://i.pinimg.com/564x/9a/33/ec/9a33ecdd1079548fc23f99ef428e9d4c.jpg',
  },
  {
    id: '3',
    name: 'Red Sports Tee',
    title: '50.00',
    images:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINqF39Eez58dB55z7h72gJPx0nurKSmGlPw&usqp=CAU',
  },
];

export default function WishlistScreen(params) {
  const [selectedId, setSelectedId] = useState(null);
  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.textName]}>{item.name}</Text>
        <Text style={[styles.textPrice]}>{'PKR ' + item.title}</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginLeft: '13%'}}></View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 14,
    height: 130,
    borderRadius: 8,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.LIGHT,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 160,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 1,
  },
  textPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: '20%',
  },
  image: {
    resizeMode: 'cover',
    height: 110,
    width: 110,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

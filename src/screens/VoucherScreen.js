/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors} from '../config/colors';
const DATA = [
  {
    id: '1',
    name: 'Blue Silk Tuxedo',
    title: '10:00 % OFF',
    code: 'h4hdjjsu',
    images: 'https://static-01.daraz.pk/p/be08ae6469685f81a1de7d139621762f.jpg',
  },
  {
    id: '2',
    name: 'Dainty Gold Naclace',
    title: '63.99 (Excal Tax)',
    code: 'h4hdjjsu',
    images:
      'https://i.pinimg.com/564x/9a/33/ec/9a33ecdd1079548fc23f99ef428e9d4c.jpg',
  },
  {
    id: '3',
    name: 'Red Sports Tee',
    title: '50.00 % OFF',
    code: 'h4hdjjsu',
    images:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINqF39Eez58dB55z7h72gJPx0nurKSmGlPw&usqp=CAU',
  },
];

export default function WishlistScreen(params) {
  const [selectedId, setSelectedId] = useState(null);
  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 5,
        }}>
        <Text style={[styles.textName]}>{item.name}</Text>
        <Text style={[styles.textPrice]}>{item.title}</Text>
      </View>
      <View>
        <Text style={{marginHorizontal: 10}}>{item.code}</Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            top: 16,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.3,
          }}>
          <Text style={{fontSize: 15}}>Minimum purshase</Text>
          <Text style={{fontSize: 15}}>500.00</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            top: 20,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Valif Till: 31 jan 2022
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            No of Voucher:01
          </Text>
        </View>
      </View>
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
    position: 'relative',
    height: 140,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.LIGHT,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 1,
  },
  textPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  image: {
    resizeMode: 'cover',
    height: 110,
    width: 110,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

import React from 'react';
import {AppRegistry} from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title:'Pupusas',
    desc:'Son el platillo típico más conocido y consumido de El salvador y también son conocidas a nivel internacional. Es común que cuando turistas o extranjeros visitan nuestro país, no se vayan sin antes haber probado las pupusas. Son básicamente una tortilla, pero la diferencia es que en su interior se les agregan otros ingredientes que le dan un sabor único.',
    src:require('./src/imgs/pupusas.jpeg'),
  },
  {
    id: '2',
    title:'Nuégados',
    desc:'Los Nuégados o buñuelos, es un platillo dulce que suele degustarse como antojito o postre. Hay nuégados de masa, nuégados de huevo y también hay nuégados de yuca, y generalmente pueden ser acompañadas del típico chilate, un platillo típico de la gastronomía salvadoreña.',
    src:require('./src/imgs/nuegados.jpg'),
  },
  {
    id: '3',
    title:'Torrejas',
    desc:'son un platillo típico que no puede faltar en Semana Santa, aunque pueden ser preparadas en cualquier época del año que lo desee para degustar su excelente sabor.la receta de torrejas incluye principalmente ingredientes como el pan de yema, huevos y dulce de panela.',
    src:require('./src/imgs/torrejas.jpg'),
  },
  {
    id: '4',
    title:'Atol chuco',
    desc:'Es la bebida típica caliente más antigua de El Salvador, elaborada a base maíz fermentado. Se prepara con maíz de color negro o morado por su sabor distinto, aunque si lo desea también se puede usar maíz normal.',
    src:require('./src/imgs/atol-chuco.jpg'),
  },
  {
    id: '5',
    title:'José Lira',
    desc:'Guia 3 DPS-Ejercicio complementario. Comidas típicas salvadoreñas, usando los elementos card de react-native-elements',
    src:require('./src/imgs/foto.jpeg'),
  },
];
const Item = ({ title, img, desc }) => (
  <View style={styles.item}>
  <Card style={styles.card}>
    <Card.Title style={{fontSize:20, color:'#239B56', opacity:0.8}}>{title}</Card.Title>
    <Card.Divider />
    <Card.Image style={styles.img} source={img} />
    <Card.Divider />
    <Text style={styles.title}>Descripción: {''}</Text>
    <Text style={styles.descri}>{desc}</Text>
  </Card>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} desc={item.desc} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item:{
    backgroundColor: '#186A3B',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  title:{
    marginTop:5,
    fontSize: 12,
    fontWeight:'bold'
  },
  descri:{
    fontSize: 12,
    textAlign:'justify'
  },
  img:{
    width:200,
    height:200,
    borderWidth:1,
    borderColor:'#82E0AA',
    borderRadius:99,
    resizeMode: 'contain',
    margin:'auto',
    marginBottom:10
  }
});
export default App;
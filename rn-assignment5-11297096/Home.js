import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

export default function HomeScreen({ navigation, isDarkTheme }) {
  const data = [
    { id: '1', title: 'Apple Store', description: 'Entertainment', price: '- $5,99', image: require('./images/apple.png') },
    { id: '2', title: 'Spotify', description: 'Music', price: '- $12,99', image: require('./images/spotify.png') },
    { id: '3', title: 'Money Transfer', description: 'Transaction', price: '$300', image: require('./images/moneyTransfer.png') },
    { id: '4', title: 'Grocery', description: 'Foodstuff', price: '- $88', image: require('./images/grocery.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, isDarkTheme && styles.itemContainerDark]}>
      <Image source={item.image} style={styles.itemImage}></Image>
      <View>
        <Text style={[styles.itemTitle, isDarkTheme && styles.darkText]}>{item.title}</Text>
        <Text style={[styles.itemDescription, isDarkTheme && styles.darkText]}>{item.description}</Text>
        <Text style={[styles.itemPrice, isDarkTheme && styles.darkText]}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.ant, isDarkTheme && styles.darkTheme]}>
      <Image source={require('./images/profile.png')} style={styles.two}></Image>
      <Text style={[styles.one, isDarkTheme && styles.darkText]}>Welcome back,</Text>
      <Text style={[styles.three, isDarkTheme && styles.darkText]}>Kwaku Asare</Text>
      <Image source={require('./images/search.png')} style={styles.four}></Image>
      <Image source={require('./images/Card.png')} style={styles.five}></Image>
      <Image source={require('./images/send.png')} style={styles.six}></Image>
      <Image source={require('./images/recieve.png')} style={styles.seven}></Image>
      <Image source={require('./images/loan.png')} style={styles.eight}></Image>
      <Image source={require('./images/topUp.png')} style={styles.nine}></Image>
      <View>
        <Text style={[styles.ten, isDarkTheme && styles.darkText]}>Transaction</Text>
        <Text style={styles.eleven}>See all</Text>
        <ScrollView vertical={true}>
          <FlatList style={styles.twelve} data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    height: '7rem',
  },
  itemContainerDark: {
    backgroundColor: '#333',
  },
  itemImage: {
    width: '2rem',
    height: '2rem',
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '-1.5rem',
    marginLeft: 70,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 52,
    marginLeft: 70,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 250,
    marginTop: '-5rem',
  },
  ant: {
    backgroundColor: 'white',
    width: '100vw',
    height: '100vh',
  },
  darkTheme: {
    backgroundColor: '#000',
  },
  one: {
    fontSize: '1rem',
    marginLeft: '7rem',
    marginTop: '-2rem',
  },
  two: {
    width: '4rem',
    height: '4rem',
    marginLeft: '1.5rem',
    marginTop: '1rem',
  },
  three: {
    fontSize: '1rem',
    marginLeft: '7rem',
    marginTop: '-3rem',
    fontWeight: 'bold',
  },
  four: {
    width: '2rem',
    height: '2rem',
    marginLeft: '85vw',
    marginTop: '-1rem',
    backgroundColor: '#f6f7fc',
    borderRadius: '5rem',
  },
  five: {
    width: '21.5rem',
    height: '13rem',
    marginLeft: '1.5rem',
    marginTop: '4rem',
    borderRadius: '2rem',
  },
  six: {
    width: '2rem',
    height: '2rem',
    marginLeft: '1.5rem',
    marginTop: '2.5rem',
    backgroundColor: '#f6f7fc',
    borderRadius: '5rem',
  },
  seven: {
    width: '2rem',
    height: '2rem',
    marginLeft: '8rem',
    marginTop: '-2rem',
    backgroundColor: '#f6f7fc',
    borderRadius: '5rem',
  },
  eight: {
    width: '2rem',
    height: '2rem',
    marginLeft: '14rem',
    marginTop: '-2rem',
    backgroundColor: '#f6f7fc',
    borderRadius: '5rem',
  },
  nine: {
    width: '2rem',
    height: '2rem',
    marginLeft: '85vw',
    marginTop: '-2rem',
    backgroundColor: '#f6f7fc',
    borderRadius: '5rem',
  },
  ten: {
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginLeft: '1.5rem',
  },
  eleven: {
    fontSize: '1rem',
    marginTop: '-1rem',
    marginLeft: '85vw',
    color: 'blue',
  },
  twelve: {
    marginLeft: '1.5rem',
    width: '21.5rem',
    height: '15rem',
    marginTop: '2rem',
  },
  darkText: {
    color: '#fff',
  },
});

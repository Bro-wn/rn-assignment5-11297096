import React, { useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export default function SettingsScreen({ isDarkTheme, toggleTheme }) {
  const data = [
    { id: '1', title: 'Language', image: require('./images/right.png') },
    { id: '2', title: 'My Profile', image: require('./images/right.png') },
    { id: '3', title: 'Contact Us', image: require('./images/right.png') },
    { id: '4', title: 'Change Password', image: require('./images/right.png') },
    { id: '5', title: 'Privacy Policy', image: require('./images/right.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, isDarkTheme && styles.itemContainerDark]}>
      <Image source={item.image} style={styles.itemImage} />
      <View>
        <Text style={[styles.itemTitle, isDarkTheme && styles.darkText]}>{item.title}</Text>
      </View>
    </View>
  );

  const translateX = useRef(new Animated.Value(0)).current;
  const buttonWidth = 40; 

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const endValue = event.nativeEvent.translationX > buttonWidth / 2
        ? buttonWidth
        : 0;

      Animated.spring(translateX, {
        toValue: endValue,
        useNativeDriver: true,
      }).start(toggleTheme);
    }
  };

  return (
    <View style={[styles.container, isDarkTheme && styles.darkTheme]}>
      <Text style={[styles.settingsHeader, isDarkTheme && styles.darkText]}>Settings</Text>

      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Text style={[styles.themeHeader, isDarkTheme && styles.darkText]}>Theme</Text>

      <View style={styles.slidingButtonContainer}>
        <View style={styles.track}></View>

        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View style={[styles.button, { transform: [{ translateX }] }]}>
            <Text style={styles.buttonText}>Slide</Text>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20, 
  },
  darkTheme: {
    backgroundColor: '#000',
  },
  itemContainer: {
    flexDirection: 'column',  
    padding: 10,
    margin: 5, 
    backgroundColor: 'white', 
    borderRadius: 8,
    height: '3rem',
    width: '25rem',
    marginLeft: '-2rem',
  },
  itemContainerDark: {
    backgroundColor: '#333',
  },
  itemImage: {
    width: '2rem',
    height: '2rem',
    marginLeft: '20rem',
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: '-1.5rem', 
    marginLeft: '2rem',
  },
  twelve: {
    marginLeft: '1.5rem',
    width: '21.5rem',
    height: '35rem',
    marginTop: '5rem',
  },
  up: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginTop: '2rem', 
    marginLeft: '8rem',
  },
  down: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginTop: '-10rem', 
    marginLeft: '2rem',
  },
  themeHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20, 
  },
  slidingButtonContainer: {
    width: '5rem', 
    height: 40, 
    backgroundColor: 'lightgray',
    borderRadius: 20, 
    padding: 2,
    justifyContent: 'center', 
  },
  track: {
    flex: 1,
    backgroundColor: 'gray', 
    borderRadius: 20, 
  },
  button: {
    width: 40, 
    height: 36, 
    borderRadius: 18,
    backgroundColor: 'blue', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  settingsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  darkText: {
    color: '#fff',
  },
});

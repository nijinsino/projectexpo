import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated, PanResponder,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { Linking } from 'react-native';
const About1 = ({ navigation }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const drawerOpacity = useRef(new Animated.Value(0)).current;
  const drawerTranslateX = useRef(new Animated.Value(-300)).current; // Start from the left side

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
    // Toggle animation
    Animated.parallel([
      Animated.timing(drawerOpacity, {
        toValue: showDrawer ? 0 : 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(drawerTranslateX, {
        toValue: showDrawer ? -300 : 0, // Slide in from the left
        duration: 400,
        useNativeDriver: true,
      })
    ]).start();
  };
  
  const closeDrawer = () => {
    setShowDrawer(false);
    // Toggle animation
    Animated.parallel([
      Animated.timing(drawerOpacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(drawerTranslateX, {
        toValue: -300, // Slide out to the left
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  };


 

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < -100) {
          closeDrawer();
        }
      },
    })
  ).current;
  const openWhatsApp = () => {
    const phoneNumber = '9847416627'; 

  
    const whatsappURL = `whatsapp://send?phone=9847416627`;

    Linking.canOpenURL(whatsappURL)
      .then((supported) => {
        if (!supported) {
          console.log('WhatsApp is not installed on your device');
        } else {
          return Linking.openURL(whatsappURL);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };
  const navigateToHome1 = () => {
    navigation.navigate('Home1');
  };
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
  <Image
  source={require('../assets/Your paragraph text.png')} // Assuming the image is located in the assets folder of your project
  style={styles.logo}
/>
<Image
  source={require('../assets/Your paragraph text (1).png')} // Assuming the image is located in the assets folder of your project
  style={styles.copyrightlogo}
/>

      <TouchableOpacity style={styles.iconContainer} onPress={toggleDrawer}>
        <Icon name="bars" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>About the App</Text>
      {showDrawer && (
        <Animated.View style={[styles.sideDrawer, { opacity: drawerOpacity, transform: [{ translateX: drawerTranslateX }] }]}>
          <TouchableOpacity style={styles.drawerItem} onPress={navigateToHome1} >
            <Icon name="home" size={20} color="black" style={styles.drawerIcon} />
            <Text style={styles.drawerText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={openWhatsApp}>
            <Icon name="address-book" size={20} color="black" style={styles.drawerIcon} />
            <Text style={styles.drawerText}>Contact the team</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.drawerItem}>
            <Icon name="info-circle" size={20} color="black" style={styles.drawerIcon} />
            <Text style={styles.drawerText}>About the App</Text>
          </TouchableOpacity>
          <Image
  source={require('../assets/Your paragraph text (1).png')} 
  style={styles.image}
/>

        </Animated.View>
      )}

      <Text style={styles.copyRightText}>Copyright © HomelyFarms-2024
       version 2.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom:482,
  },
  iconContainer: {
    position: 'absolute',
    top: 77,
    left: 20,
    zIndex: 1,
  },
  sideDrawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    width: '70%',
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  drawerIcon: {
    marginRight: 15,
    fontSize: 24,
    color: '#555',
  },
  drawerText: {
    fontSize: 18,
    color: '#444',
    fontWeight: 'bold',
  },
  
  copyRightText: {
    position: 'absolute',
    bottom: 300,
  },
  image: {
    width: 240,
    height: 150,
    top:200,
    marginLeft:-10,
  },
  logo: {
    width: 55,
    height: 72,
    top:100,
    left:330,
  },
  copyrightlogo:{
    width:250,
    height:200,
  }
});

export default About1;

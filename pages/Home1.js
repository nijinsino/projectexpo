import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput, ScrollView, PanResponder, Image, Pressable, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPrescriptionBottle, faWheatAwn, faBug, faVirus, faFlask } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'react-native-swiper';
import { Linking } from 'react-native';

const Home1 = ({ navigation }) => {
  
  const [searchText] = useState('');
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Get window dimensions
  const { width, height } = useWindowDimensions();
  
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
  const drawerOpacity = useRef(new Animated.Value(0)).current;
  const drawerTranslateX = useRef(new Animated.Value(-300)).current; 

const toggleDrawer = () => {
  setShowDrawer(!showDrawer);
 
  Animated.parallel([
    Animated.timing(drawerOpacity, {
      toValue: showDrawer ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.timing(drawerTranslateX, {
      toValue: showDrawer ? -300 : 0,
      duration: 400,
      useNativeDriver: true,
    })
  ]).start();
};

const closeDrawer = () => {
  setShowDrawer(false);
 
  Animated.parallel([
    Animated.timing(drawerOpacity, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }),
    Animated.timing(drawerTranslateX, {
      toValue: -300, 
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

  
  const [categoryHeadings, setCategoryHeadings] = useState({
    Crops: 'CROPS',
    Pesticides: 'PESTICIDES',
    Diseases: 'DISEASES',
    Insects: 'INSECTS',
    Fertilizers: 'FERTILIZERS',
  });
  
  const data = [
    { name: 'Crops', icon: faWheatAwn },
    { name: 'Pesticides', icon: faPrescriptionBottle },
    { name: 'Diseases', icon: faVirus },
    { name: 'Insects', icon: faBug },
    { name: 'Fertilizers', icon: faFlask }
  ];

  const categoryImages = {
    Crops: [
      { imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/220px-Solanum_melongena_24_08_2012_%281%29.JPG', text: 'Brinjal', route: 'Brinjal' },
      { imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bittergourd.jpg/220px-Bittergourd.jpg', text: 'Bitter Melon', route: 'Bittermelon' },
      { imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/220px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg', text: 'Water melon', route: 'Watermelon' },
      { imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/ARS_red_onion.jpg/220px-ARS_red_onion.jpg', text: 'Onion', route: 'Onion' },
    ],
    Pesticides: [
      { imageUri: 'https://www.jiomart.com/images/product/original/rvqlteupaz/chinpack-organic-vermicompost-fertilizer-organic-manure-for-plants-2-5-kg-product-images-orvqlteupaz-p599026047-3-202303030801.jpg?im=Resize=(420,420)', text: 'Mixture of Nitrates', route: 'Nitrates' },
      { imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2006-02-13_Drop_before_impact.jpg/264px-2006-02-13_Drop_before_impact.jpg', text: 'Water', route: 'Water' },
      { imageUri: 'https://krishisevakendra.in/cdn/shop/files/aceto.webp?v=1699602730&width=600', text: 'Azospirillum', route: 'Azospirilium' },
      { imageUri: 'https://krishisevakendra.in/cdn/shop/files/azobacter.webp?v=1699602711&width=600', text: 'Azotobacter', route: 'Azostobacter' },
    ],
    Insects: [
      { imageUri: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Hispid_beetle.jpg', text: 'Hispid Beetle', route: 'Hispid' },
      { imageUri: 'https://www.lawnstarter.com/blog/wp-content/uploads/2022/09/Agriculture-crops-damager-worm-289144-pixahive-768x1024-2-1-1.jpg', text: 'Worms', route: 'Worms' },
      { imageUri: 'https://www.planetnatural.com/wp-content/uploads/2012/12/leafhopper-control-1.jpg', text: 'Leafhopper', route: 'Leafhopper' },
      { imageUri: 'https://hips.hearstapps.com/hmg-prod/images/colorado-beetle-eats-a-potato-leaves-young-royalty-free-image-542328690-1531259828.jpg?crop=0.738xw:0.558xh;0.221xw,0.183xh&resize=1200:*', text: 'Aphids', route: 'Aphids' },
    ],
    Diseases: [
      { imageUri: 'http://ucanr.edu/blogs/SalinasValleyAgriculture/blogfiles/31936.jpg', text: 'Leaf Roll Disease', route: 'Leafroll' },
      { imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/%27Cercospora_capsici.jpg/220px-%27Cercospora_capsici.jpg', text: 'Leaf Spots', route: 'Leafspots' },
      { imageUri: 'https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/keep-your-garden-free-from-fungal-disease/keep_garden-brown_spots.jpg', text: 'Fungal Disease', route: 'Fungal' },
      { imageUri: 'https://www.agrifarming.in/wp-content/uploads/2022/10/Controlling-Mosaic-Viruses-in-Plants1.jpg', text: 'Mosaic Disease', route: 'Mosaic' },
    ],
    Fertilizers: [
      { imageUri: 'https://housing.com/news/wp-content/uploads/2022/11/What-is-manure-Manure-types-and-benefits-t.jpg', text: 'Manure', route: 'Manure' },
      { imageUri: 'https://ngorisefoundation.files.wordpress.com/2022/06/edited_compostingboy.jpg', text: 'Compost', route: 'Compost' },
      { imageUri: 'https://cdn.cdnparenting.com/articles/2021/07/16191322/380433403.webp', text: 'Organic Fertilizers', route: 'Organic' },
      { imageUri: 'https://cdn.shopify.com/s/files/1/0663/9613/files/caroline-attwood-K9pO8lHUelE-unsplash_grande.jpg?v=1596628516', text: 'Egg Shells', route: 'Eggshell' },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const navigateToRoute = (Brinjal) => {
    navigation.navigate(Brinjal);
  };

  const navigateToBrinjal = () => {
    navigation.navigate('Brinjal');
  };
  const navigateToWater = () => {
    navigation.navigate('Water');
  };
  const navigateToNitrates = () => {
    navigation.navigate('Nitrates');
  };
  const navigateToWatermelon = () => {
    navigation.navigate('Watermelon');
  };
  const navigateToOnion = () => {
    navigation.navigate('Onion');
  };
  const navigateToAzospirilium = () => {
    navigation.navigate('Azospirilium');
  };
  const navigateToAzostobacter = () => {
    navigation.navigate('Azostobacter');
  };
  const navigateToWorms = () => {
    navigation.navigate('Worms');
  };
  const navigateToHispid = () => {
    navigation.navigate('Hispid');
  };
  const navigateToAphids = () => {
    navigation.navigate('Aphids');
  };
  const navigateToLeafhopper = () => {
    navigation.navigate('Leafhopper');
  };
  const navigateToFungal = () => {
    navigation.navigate('Fungal');
  };
  const navigateToMosaic = () => {
    navigation.navigate('Mosaic');
  };
  const navigateToLeafroll = () => {
    navigation.navigate('Leafroll');
  };
  const navigateToLeafspots = () => {
    navigation.navigate('Leafspots');
  };
  const navigateToManure = () => {
    navigation.navigate('Manure');
  };
  const navigateToCompost = () => {
    navigation.navigate('Compost');
  };
  const navigateToOrganic = () => {
    navigation.navigate('Organic');
  };
  const navigateToEggshell = () => {
    navigation.navigate('Eggshell');
  };
  const navigateToImage1 = () => {
    navigation.navigate('Image1');
  };
  const navigateToImage2 = () => {
    navigation.navigate('Image2');
  };
  const navigateToAbout1 = () => {
    navigation.navigate('About1');
  };





  
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <TouchableOpacity style={styles.iconContainer} onPress={toggleDrawer}>
        <Icon name="bars" size={25} color="black" />
      </TouchableOpacity>
      <Image
  source={require('../assets/Your paragraph text.png')} 
  style={styles.logo}
/>
      <Text style={styles.title}>Homely Farms</Text>
      <Text style={styles.subtitle}>Let's move forward together for non-toxic vegetables</Text>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="pesticides, crops, diseases"
          placeholderTextColor="#A9A9A9"
          value={searchText}
        />
      </View>
<View>
  
<ScrollView horizontal={true}>
        <View style={styles.gridContainer}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.gridItem} onPress={() => handleCategoryClick(item.name)}>
              <FontAwesomeIcon icon={item.icon} style={styles.icon} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
</View>

{showDrawer && (
        <Animated.View style={[styles.sideDrawer, { opacity: drawerOpacity, transform: [{ translateX: drawerTranslateX }] }]}>
          <TouchableOpacity style={styles.drawerItem}>
            <Icon name="home" size={20} color="black" style={styles.drawerIcon} />
            <Text style={styles.drawerText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={openWhatsApp}>
            <Icon name="address-book" size={20} color="black" style={styles.drawerIcon} />
            <Text style={styles.drawerText}>Contact the team</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.drawerItem} onPress={navigateToAbout1} >
            <Icon name="info-circle" size={20} color="black" style={styles.drawerIcon} />
            <Text style={styles.drawerText}>About the App</Text>
          </TouchableOpacity>
          
          <Image
  source={require('../assets/Your paragraph text (1).png')} 
  style={styles.textlogo}
/>
        </Animated.View>
      )}

{selectedCategory && (
  <View style={styles.boxContainer}>
    <Text style={styles.boxText}>{categoryHeadings[selectedCategory]}</Text>
  </View>
)}{selectedCategory && (
  <ScrollView horizontal={true} style={styles.scrollView}>
    {categoryImages[selectedCategory].map((item, index) => (
      <TouchableOpacity key={index} style={styles.gridLayout} onPress={() => navigateToRoute(item.route)}>
        <Image source={{ uri: item.imageUri }} style={styles.gridImage} />
        <Text style={styles.gridText}>{item.text}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
)}

      
      <Swiper style={styles.wrapper} showsButtons={true}>
  <TouchableOpacity onPress={navigateToImage2} style={styles.slide}>
    <Image
      source={{ uri: 'https://thumbs.dreamstime.com/b/young-plant-nursery-bags-142747580.jpg?w=768' }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.text}>How to grow seeds in an easy way</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={navigateToImage1} style={styles.slide}>
    <Image
      source={{ uri: 'https://thumbs.dreamstime.com/b/grow-bags-vegetable-saplings-vertical-stand-outside-grow-bags-vegetable-saplings-vertical-stand-outside-192353119.jpg?w=768' }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.text}>Steps to take care when filling the grow bag</Text>
    </View>
  </TouchableOpacity>
</Swiper>

<View>
  <Text style={{ bottom: 200, fontWeight: 'bold', fontSize: 20, left: 30 }}>More Informations</Text>
</View>

     

    </View>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    iconContainer: {
      position: 'absolute',
      top: '8%',
      left: '8%', 
      zIndex: 1,
    },
    
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -9,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  gridContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 25,
  },
  gridItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC', // Border color
    padding: 6,
    paddingRight: 19,
    paddingLeft: 10,
    marginHorizontal: 3,
    height: 42,
    top: -5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  
  icon: {
    marginRight: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sideDrawer: {
    position: 'absolute',
    top: 0,
    left: 5,
    backgroundColor: '#FFFFFF',
    width: '70%',
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
    zIndex: 1,
    borderRadius: 20, 
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
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
  
  scrollView: {
    bottom:20, 
    marginLeft: 20,
    marginRight: 20,
    height: 170,
    
  },
  scrollContent: {
    flexDirection: 'row',
    marginRight: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  scrollText: {
    fontSize: 16,
    textAlignVertical: 'center',
  },
  gridLayout: {
    flex:1,
    flexDirection: 'coloumn',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.40,
    shadowRadius: 4.84,
    elevation: 5,
  
    padding: 5, // 
    marginRight: 10,
    width:175,
    height:238,
    top:45
  },
  gridImage: {
    width: 160, 
    height: 190, 
    marginBottom: 20, 
    borderRadius: 5,
  },
  gridText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight:'bold',
    bottom:12,
  },
  slideShowContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:-10,
    
  
  },
  image: {
    width: 346,
    height: 200,
    bottom:40,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  
  boxContainer: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 350,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10, 
    borderWidth: 1,
    borderColor: '#EAEAEA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, 
  },
   
  
  boxText: {
    fontSize: 24, 
    fontWeight: 'bold',
    
    color: '#333333', 
    textShadowColor: '#000000', 
    textShadowOffset: { width: 0, height: 1 }, 
    textShadowRadius: 1, 
    textAlign: 'center', 
    letterSpacing:4,
  },
  
  logo: {
    width: 55,
    height: 72,
    top:52,
    left:320,
  },
  textlogo: {
    width: 240,
    height: 150,
    top:330,
    marginLeft:-10,
  },
});
export default Home1;
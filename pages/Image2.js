import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Image2 = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://thumbs.dreamstime.com/b/young-plant-nursery-bags-142747580.jpg?w=768' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>How to grow seeds in an easy way</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Growing seeds can be a fulfilling and straightforward process, ideal for beginners and seasoned gardeners alike. To begin, select seeds that are suitable for your climate and the time of year. Choose a variety of vegetables, herbs, or flowers that you're excited to grow. Look for quality seeds from reputable suppliers to ensure successful germination and healthy growth.

Next, prepare your growing medium. You can use potting soil, seed-starting mix, or even create your own by mixing compost with perlite or vermiculite for improved drainage. Fill small pots, trays, or seedling containers with the moistened medium, leaving some space at the top for the seeds.

Now, it's time to plant the seeds. Follow the instructions on the seed packet regarding planting depth and spacing. Generally, small seeds should be planted shallowly, while larger seeds can be buried deeper. Use your finger or a small tool to create holes in the soil, drop the seeds in, and gently cover them with soil.

After planting, ensure the seeds receive adequate moisture. Water the soil gently using a spray bottle or a watering can with a fine nozzle to avoid displacing the seeds. Keep the soil consistently moist but not waterlogged, as excessive moisture can lead to rot and fungal diseases. Consider covering the containers with plastic wrap or a clear lid to create a mini-greenhouse effect that retains moisture and warmth.

Place the seed containers in a warm, well-lit area. Seeds require warmth and light to germinate successfully. A sunny windowsill or a grow light can provide the necessary light for seedlings. Monitor the moisture level regularly and adjust watering as needed to prevent the soil from drying out.

Finally, be patient and observe the progress of your seeds. Germination times vary depending on the type of seed, but most seeds will sprout within a week or two under optimal conditions. Once the seedlings emerge, provide adequate airflow to prevent damping-off disease and encourage strong, healthy growth. As the seedlings develop, gradually acclimate them to outdoor conditions before transplanting them into the garden.

By following these simple steps, you can enjoy the rewarding experience of growing seeds and witnessing the miracle of new life sprouting from tiny, dormant packages. With care and attention, your seeds will thrive and develop into robust plants that will enrich your garden and provide bountiful harvests for months to come.</Text>
          </View>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
      },
      imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200, 
        backgroundColor: 'lightgray', // You can add a background color for the image container
      },
      image: {
        width: '100%',
        height: '100%',
      },
      textContainer: {
        padding: 20,
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });
    
export default Image2;

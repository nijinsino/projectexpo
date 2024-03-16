import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Image1= ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://thumbs.dreamstime.com/b/grow-bags-vegetable-saplings-vertical-stand-outside-grow-bags-vegetable-saplings-vertical-stand-outside-192353119.jpg?w=768' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Notable steps to take care for grow bags</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Filling a grow bag properly is crucial for the success of your plants. Here are some steps to take care while filling a grow bag.

                               1.Choose the Right Location: Before filling the grow bag, decide on the optimal location for your plants. Ensure that the area receives adequate sunlight and has good drainage to prevent waterlogging. Placing the grow bag on a flat surface will also provide stability and prevent tipping over.

2. Select Quality Soil: The soil you use in the grow bag plays a significant role in the health and growth of your plants. Choose a high-quality potting mix specifically formulated for container gardening. Avoid using garden soil, as it may contain pests, diseases, or weed seeds that can harm your plants.

3. Prepare the Grow Bag: Before filling the grow bag with soil, check for any holes or tears that may cause leaks. If there are any, patch them up using duct tape or a similar waterproof material. Ensure that the grow bag is placed on a stable surface to prevent it from tipping over once filled.

4. Fill the Grow Bag: Begin filling the grow bag with soil, starting from the bottom and working your way up. Fill the bag to about two-thirds full, leaving enough space at the top to accommodate watering and prevent soil from spilling over. Gently tamp down the soil as you fill the bag to remove any air pockets and create a firm planting surface.

5. Moisten the Soil: Before planting your seeds or seedlings, moisten the soil in the grow bag evenly. Use a watering can or a gentle spray to avoid displacing the soil. Moist soil provides an ideal environment for seed germination and root growth, ensuring that your plants establish themselves effectively.

6. Plant Carefully: Once the soil is moistened, you can plant your seeds or transplant seedlings into the grow bag. Make sure to follow spacing guidelines provided for the specific plants you are growing. After planting, water the soil again lightly to settle the plants and promote root establishment. Monitor the moisture level regularly and water as needed to keep the soil consistently moist but not waterlogged.

By following these steps, you can ensure that your plants have the best possible start in a grow bag environment, leading to healthy growth and abundant harvests.</Text>
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
        backgroundColor: 'lightgray', 
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
    

export default Image1;

import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Water = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2006-02-13_Drop_before_impact.jpg/264px-2006-02-13_Drop_before_impact.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Water</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Watering plants is a fundamental aspect of gardening and crucial for the health and vitality of plant life. Proper watering techniques ensure that plants receive the necessary moisture to support their growth and development. Understanding the importance of watering, as well as the methods and timing involved, can significantly impact the success of a garden.

Firstly, it's essential to recognize that different plants have varying water requirements based on factors such as species, size, and environmental conditions. Some plants thrive in consistently moist soil, while others prefer drier conditions. Understanding the specific needs of each plant in your garden is crucial for effective watering practices.

Secondly, the timing of watering is key to maximizing its benefits. Watering early in the morning is often recommended as it allows plants to absorb moisture before the heat of the day evaporates it. Watering in the evening can lead to prolonged moisture on plant leaves, increasing the risk of fungal diseases. Consistency in watering schedule helps plants establish healthy root systems and adapt to their environment.

Furthermore, the method of watering can influence plant health and water efficiency. Drip irrigation systems, soaker hoses, or watering cans with a gentle shower head attachment are ideal for delivering water directly to the base of plants, minimizing water waste and reducing the risk of leaf diseases. Avoiding overhead watering, especially during hot and sunny periods, can prevent water loss through evaporation and reduce the likelihood of sunburn on plant foliage.

Moreover, the quality of water used for irrigation can impact plant health. Water containing high levels of chlorine, salts, or other chemicals may harm plants over time. Using rainwater, collected in barrels or through sustainable methods, can provide plants with a natural and chemical-free water source. Alternatively, allowing tap water to sit for 24 hours before use allows chlorine to dissipate, making it safer for plants.

In conclusion, watering plants is a fundamental aspect of gardening that requires careful attention and consideration. By understanding the water requirements of different plants, watering at the appropriate times, employing efficient watering methods, and using quality water sources, gardeners can promote healthy growth and flourishing gardens. Consistent and mindful watering practices contribute to the overall well-being of plants and the beauty of the garden environment.</Text>
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
    
export default Water;

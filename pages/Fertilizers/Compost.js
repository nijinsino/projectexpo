import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Compost = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://ngorisefoundation.files.wordpress.com/2022/06/edited_compostingboy.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Compost</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Compost plays a vital role in enhancing soil health and promoting robust plant growth. Firstly, compost enriches the soil with essential nutrients such as nitrogen, phosphorus, and potassium, which are crucial for plant development. These nutrients are released slowly over time as organic matter decomposes, providing a steady supply to crops and plants without the risk of nutrient leaching that chemical fertilizers can cause.

Moreover, compost improves soil structure by increasing its ability to retain moisture and nutrients. It helps sandy soils retain water and prevents clay soils from becoming too compacted, creating an optimal environment for root growth. Improved soil structure also enhances aeration, allowing roots to access oxygen more easily and facilitating microbial activity, which further breaks down organic matter and releases nutrients.

In addition to providing nutrients and improving soil structure, compost promotes beneficial microbial activity in the soil. These microorganisms play a crucial role in breaking down organic matter into forms that plants can absorb. They also help suppress harmful pathogens and diseases, creating a healthier growing environment for crops and plants.

Compost also acts as a natural pH buffer, helping to balance soil acidity and alkalinity. This is particularly beneficial in acidic soils, where compost can help raise the pH to a more neutral level, making essential nutrients more available to plants. By maintaining proper pH levels, compost ensures that crops and plants can efficiently absorb nutrients from the soil.

Furthermore, composting helps reduce the need for synthetic fertilizers and pesticides, which can have harmful effects on the environment and human health. By recycling organic waste materials such as kitchen scraps and yard trimmings, composting reduces the amount of waste sent to landfills and minimizes greenhouse gas emissions associated with organic decomposition.

Overall, composting is a sustainable practice that not only benefits crops and plants but also contributes to environmental conservation efforts. By improving soil fertility, structure, and microbial activity, compost enhances plant growth and resilience while reducing reliance on synthetic inputs, ultimately promoting healthier ecosystems and more sustainable agriculture.</Text>
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
    

export default Compost;

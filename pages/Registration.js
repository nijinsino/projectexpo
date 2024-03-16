import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Registration = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const createAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        const userId = user.uid;

        const userdetails = {
          Firstname: firstname,
          Lastname: lastname,
          Mobilenumber: mobilenumber,
          Email: email,
          Password: password,
          Gender: gender,
          Userid: userId
        };

        const db = getFirestore();
        addDoc(collection(db, 'users'), userdetails)
          .then(() => {
            console.log('Details are added successfully');
            alert('Your registration has been completed successfully');
            navigation.navigate('login');
          })
          .catch((error) => {
            console.error('An error occurred while adding details', error);
          });
      })
      .catch((error) => {
        console.error('Error creating account', error);
      });
  };

  return (
    <ImageBackground source={{ uri: 'https://thumbs.dreamstime.com/b/grow-bags-vegetable-saplings-vertical-stand-outside-grow-bags-vegetable-saplings-vertical-stand-outside-192353119.jpg?w=768' }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>FIRST NAME:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your firstname"
            onChangeText={(text) => setFirstname(text)}
            value={firstname}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>LAST NAME:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your lastname"
            onChangeText={(text) => setLastname(text)}
            value={lastname}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>GENDER:</Text>
          <View style={styles.inputWithDropdown}>
            <TextInput
              style={[styles.input, { paddingRight: 30 }]}
              placeholder="Select gender..."
              value={gender}
              editable={false}
            />
            <TouchableOpacity onPress={() => setShowOptions(true)}>
              <Icon name="chevron-down" size={20} color="black" style={styles.dropdownIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>MOBILE NUMBER:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            onChangeText={(text) => setMobilenumber(text)}
            value={mobilenumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>EMAIL:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>PASSWORD:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={createAccount}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showOptions}
        onRequestClose={() => setShowOptions(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowOptions(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.option} onPress={() => { setGender('Male'); setShowOptions(false); }}>
                <Text>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => { setGender('Female'); setShowOptions(false); }}>
                <Text>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => { setGender('Others'); setShowOptions(false); }}>
                <Text>Others</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    textAlign: 'left',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: 320,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
  },
  inputWithDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 10,
    bottom: -10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 100,
  },
});

export default Registration;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/background-image.png');
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import CircleButton from './components/CircleButton';
import IconButtons from './components/IconButtons';
import EmojiPicker from './components/EmojiPicker';

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    console.log('pressed on reset');
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalCLose = () => {
    setIsModalVisible(true);
  }

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>

          <View style={styles.imageContainer}>
            <ImageViewer placeHolderImageSource={PlaceholderImage} selectedImage={selectedImage} />
          </View>
          
          <View style={styles.optionsRow}>
            <IconButtons icon='refresh' label='Reset' onPress={onReset}/>
            <CircleButton onPress={onAddSticker} />
            <IconButtons icon='save-alt' label='Save' onPress={onSaveImageAsync}/>
          </View>

          <EmojiPicker isVisible={isModalVisible} onClose={onModalCLose}/>

        </View>

    ) : (
        <View style={styles.footContainer}>
          <Button theme='primary' label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
        </View>
    )}
      <StatusBar style="auto" />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingBottom: 200,
  },
  footContainer: {
    alignItems: 'center',
    flex: 1/3
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});

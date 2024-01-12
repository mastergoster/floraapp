import { StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from "react-native";
import { BlurView } from 'expo-blur';

export default function PopUp({ item, PopUpClose, SetCodePin }) {
  


  return (
    <TouchableWithoutFeedback onPress={PopUpClose}  >
      <BlurView intensity={10} style={styles.overlay}>
        <TouchableWithoutFeedback onPress={() => { }}>
          <View style={styles.text}>
            <Text style={styles.title}>{item.firstname}</Text>
            <View style={styles.clavier}>
              <TouchableNativeFeedback onPress={() => SetCodePin(1)}>
                <Text style={styles.touche}>1</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(2)}>
                <Text style={styles.touche}>2</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(3)}>
                <Text style={styles.touche}>3</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(4)}>
                <Text style={styles.touche}>4</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(5)}>
                <Text style={styles.touche}>5</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(6)}>
                <Text style={styles.touche}>6</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(7)}>
                <Text style={styles.touche}>7</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(8)}>
                <Text style={styles.touche}>8</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(9)}>
                <Text style={styles.touche}>9</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => SetCodePin(0)}>
                <Text style={styles.touche}>0</Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </BlurView>
    </TouchableWithoutFeedback>
   
  );
}

const styles = StyleSheet.create({
  overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    },
  text: {
      textAlign: "center",
      backgroundColor: 'rgb(255,255,0)',
    padding: 10,
    width: 500,
    maxWidth: "90%",
    maxHeight: "90%",
      borderRadius: 20,
  },
  touche: {
    padding: 30,
    fontSize: 30,
    backgroundColor: 'white',
    color: 'black',
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  clavier: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    
  },

  }
);
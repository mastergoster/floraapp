import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default class Clock extends React.Component {
   constructor(props) {
      super(props);
         this.state = {
      }
   }
   componentDidMount() {
   }
  render() {
      let frameSize = Dimensions.get('screen').width > Dimensions.get('screen').height ? Dimensions.get('screen').height : Dimensions.get('screen').width;
      frameSize = frameSize - 40;
      const frameWidth = 20;
      const clockSize = frameSize-2*frameWidth-36;
      return (
         <View style={styles.container}>
            <View style={[styles.shadow, styles.frame, { width: frameSize, height: frameSize, borderRadius: frameSize / 2 }]}>
               <View style={[styles.innerShadow, styles.innerFrame, { width: frameSize, height: frameSize, borderRadius: frameSize / 2, borderWidth: frameWidth }]}>
                  <View style={[{ width: clockSize, height: clockSize, borderRadius: clockSize / 2, justifyContent: 'center', alignItems: 'center' }]}>
                  </View>
               </View>
            </View>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6
   },
   frame: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
   },
   innerShadow: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4
   },
   innerFrame: {
      overflow: 'hidden',
      borderColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
   }
});
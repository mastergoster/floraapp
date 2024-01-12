import {ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Item({ item, setUser, setPopupShowTrue }) {
  return (
            <TouchableOpacity onPress={() => {
                setPopupShowTrue(item)
                setUser(item.email);
    }} key={item} style={{
    margin: 5,
    borderRadius: 10,
    width: 180,
    height: 180,
    overflow: "hidden",
    borderColor: item.presence ? "green" : "black" ,
    borderWidth: 3,
  }}>
        <ImageBackground source={{ uri: "https://coworkinmoulins.fr/" + item.picture }} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{item.lastname} {item.firstname}</Text>
        {item.society&&
          <Text style={styles.text}>{item.lastname} {item.firstname}</Text>
        }
        </ImageBackground>
            </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 10,
    width: 180,
    height: 180,
    overflow: "hidden",
    borderColor: "blue" ,
    borderWidth: 3,
  },
  image: {
      backgroundColor: "black",
      flex: 1,
      justifyContent: "flex-end",
  },
  text: {
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 10,
  },
  }
);
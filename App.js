
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, FlatList, View, ImageBackground, Dimensions, TouchableOpacity, RefreshControl } from 'react-native';
import image from './assets/IMG_1238.jpeg';
import Item from './src/component/molecule/item';
import { WebView } from 'react-native-webview';
import PopUp from './src/component/molecule/popUp';


const URL="https://coworkinmoulins.fr";
export default function App() {

  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState([]);
  const [orientation, setOrientation] = useState(7);
  const [popupShow, setPopupShow] = useState(false);
  const [itemPopUp, setItemPopUp] = useState({});
  const [code, setCode] = useState("");
  const [user, setUser] = useState("");

  const determineAndSetOrientation = () => {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;

    if (width < height) {
        setOrientation(4);
      } else {
        setOrientation(5);
      }
  }

  const setPopupShowTrue = (item) => {
    setPopupShow(true);
    setItemPopUp(item);
  }

  const setCodePin = (mombre) => {
    setCode(code + mombre);
  }

  const setPopUpClose = () => {
    setCode("");
    setPopupShow(false);
    setItemPopUp({});
  }
  const updateDatas = (json) => {
    const newData = data.map((item) => {
      if (item.email != json.email) {
        return item;
      } else {
        return json;
      }
    });
    setData(newData);
  };

    const fetchDatas = () => {
    let formdata = new FormData();
    formdata.append("function", "tactileusers");
    fetch(`${URL}/ajax`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formdata
      }
    )
      .then((response) => {
        
        return response.json()
      })
      .then((json) => {
          setRefreshing(false);
          setData(
          Object.keys(json).map(function (cle) {
            return json[cle];
          })
          );
      })
    };
  const submitForm = () => { 
     setRefreshing(true);
    let formdata = new FormData();
    formdata.append("user_email", user);
    formdata.append("pin", code);
    fetch(`${URL}/display/admin/new/line`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formdata
      }
    )
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        if(json.permission){
          setRefreshing(false);
          alert("Ce code pin ne correspond pas a l'utilisateur");
        }else{
          setRefreshing(false);
        updateDatas(json);
        }
        
      })
        

  }


  useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener('change', determineAndSetOrientation);

    return () => {
      Dimensions.removeEventListener('change', determineAndSetOrientation)
    }
  }, []);

  useEffect(() => {
      fetchDatas()
  }, []);


  useEffect(() => {
      if(code.length === 4){
        submitForm();
        setPopUpClose();
      }
  }, [code]);

  return (

    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{ height: '50%', justifyContent: "center", alignItems: "center" }}>
        
        </View>
        <FlatList
          style={styles.flatlist}
          key={orientation}
          horizontal={false}
          numColumns={orientation}
          data={data}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => {
              return <Item item={item} setPopupShowTrue={setPopupShowTrue} setUser={setUser} />
            }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={fetchDatas} />
          }
        />
      </ImageBackground>
      {popupShow && <PopUp item={itemPopUp} PopUpClose={setPopUpClose} SetCodePin={setCodePin}  />}
      </SafeAreaView>
    
  );
}



const styles = StyleSheet.create({
    safeAreaView: {
      height: "100%",
    width: "100%",
    backgroundColor: "black",
    display: "flex",
      flexDirection: "column",
    },
  flatlist: {
    padding: 10,
    maxHeight: "50%",
  },
    image: {
      flex: 1,
      height: "100%",
      width: "100%",
      justifyContent: 'top',
      alignItems: 'center',
  },
}
);
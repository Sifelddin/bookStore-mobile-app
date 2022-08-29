import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View , Text, Image, StatusBar , StyleSheet } from "react-native";




export default function HomeScreen() {

  const Navigation = useNavigation();
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown : false
    })
  }, [])
  

  return (
    
      <View style={styles.container} >
        <Image source={{ 
         uri : "https://banner2.cleanpng.com/20190123/srs/kisspng-computer-icons-apple-books-portable-network-graphi-yazinin-fazla-uzamamasi-sigma-tez-merkezi-5c4819c9302613.5200399015482290651972.jpg"
        }} className="h-12 w-12 bg-slate-200" />
     </View>
   
  );
}

const styles = {
  container: {
    marginTop : StatusBar.currentHeight,
  }
}
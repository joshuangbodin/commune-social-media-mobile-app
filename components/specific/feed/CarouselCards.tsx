import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { vh, vw } from "@/helpers/responsivesizes";
import CustomText from "@/components/general/text";

interface props{
    name:string;
    images:any;

}

const CarouselCards = ({name,images}:props) => {
  return <View style={styles.card_container}>
    <Image style={styles.image} source={images}/>
    <View style={styles.main}>
        <CustomText style={styles.text} text={name}/>
    </View>
  </View>;
};

export default CarouselCards;

const styles = StyleSheet.create({
  card_container: {
    position:'relative',
    width: vw(65),
    height: vh(35),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    borderRadius:40,
    overflow:'hidden'
  },
  image:{
    position:'absolute',
    width:vw(65),
    height: vh(35),
    objectFit:'cover',
    top:0,
    left:0,
  },
  main:{
    backgroundColor:'rgba(10,10,10,.4)',
    width:'100%',
    height:'100%',
    padding:30,
    justifyContent:'flex-end',

  },
  text:{
    color:'white',
    fontWeight:'500',

  }
});

import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
//import { Colors } from "../Styles/Styles";

export default function Loading(props) {

  const { isVisible, text } = props;
 
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0, 0, 0, 0.5)"
      overlayBackgroundColor={"black"}
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color={"black"} />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    //backgroundColor: Colors.btn,
    //borderColor: Colors.iconColor,
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    textTransform: "uppercase",
    marginTop: 10,
    //marginRight: 5,
    //marginLeft: 5,
  },
});

import { View, Text, Button, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.titleStyle}>Collected Information</Text>
        <View style={styles.categoryStyle}>
          <Text>Location</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#468966",
  },
  cardContainer: {
    width: deviceWidth - 30,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#FFDE59",
    marginVertical: 50,
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "700",
  },
  categoryStyle: {
    margin: 10,
    fontWeight: "100",
  },
});

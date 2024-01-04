import { View, Text, Button, Dimensions } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
      <View>
        <Text>Collected Information</Text>
        <View>
          <Text>Location</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

// const deviceWidth = Math.round(Dimensions.get("window").width);

// const styles = StyleSheet.create({

// })

// const styles = StyleSheet.create({
//   cardContainer: {
//     width: deviceWidth - 30,
//     height: 200,
//     borderRadius: 10,
//     backgroundColor: "grey",
//     marginVertical: 15,
//     padding: 10,
//   },
//   titleStyle: {
//     fontSize: 20,
//     fontWeight: "700",
//   },
//   categoryStyle: {
//     margin: 10,
//     fontWeight: "100",
//   },
// });

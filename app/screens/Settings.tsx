import * as React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#468966",
  },
  buttonContainer: {
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical:90,
  },
  button: {
    backgroundColor: "#FFDE59",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  buttonOutline: {
    backgroundColor: "#FFDE59",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});

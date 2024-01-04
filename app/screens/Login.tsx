import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const singIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Please Check Your Email.");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const singUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Please Check Your Email.");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // TouchableWithoutFeedback so that when you tap anywhere outside the input boxes, the keyboard disappears
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/Logo.png")}
            style={styles.logo}
          />
        </View>
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="yellow" />
        ) : (
          <>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={singIn} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={singUp}
                style={[styles.button, styles.buttonOutline]}
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>

            {/* Easier button implementation, not able to style this way */}
            {/* <Button title="login" onPress={singIn} />
          <Button title="Create Account" onPress={singUp} /> */}
          </>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -80,
    marginBottom: 90,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#468966",
  },
  input: {
    marginTop: 5,
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
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

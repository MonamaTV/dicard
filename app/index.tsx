import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.logo}>diCARD</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <Pressable
          onPress={() => router.push("/(main)cards")}
          style={styles.button}
        >
          <Text style={styles.btn_text}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  login: {
    gap: 10,
    width: "100%",
  },
  logo: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 60,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "E9EED9",
    borderRadius: 10,
    shadowOpacity: 0.03,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    fontWeight: "bold",
    shadowOpacity: 0.03,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    paddingHorizontal: 10,
    borderColor: "E9EED9",
    borderRadius: 10,
    backgroundColor: "#54473F",
    textAlign: "center",
  },
  btn_text: {
    textAlign: "center",
    color: "white",
  },
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function PaymentScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#25D482" />
      </TouchableOpacity>

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Checkout</Text>
        </View>
        <View>
          <Text style={styles.price}>₹ 1,527</Text>
          <Text style={styles.tax}>Including GST (18%)</Text>
        </View>
      </View>

      <View style={styles.paymentType}>
        <TouchableOpacity style={styles.creditBtn}>
          <Image
            source={require("./assets/card.png")}
            style={styles.icon}
          />
          <Text style={styles.creditText}>Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleBtn}>
          <Image
            source={require("./assets/apple.png")}
            style={styles.icon}
          />
          <Text style={styles.appleText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Card number</Text>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="5261 4141 0151 8472"
          style={styles.input}
        />
        <Image
          source={require("./assets/Master.png")}
          style={styles.smallIcon}
        />
        <Image
          source={require("./assets/scan_card.png")}
          style={styles.smallIcon}
        />
      </View>

      <Text style={styles.label}>Cardholder name</Text>
      <TextInput
        placeholder="Christie Doe"
        style={styles.inputFull}
      />

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput
            placeholder="06 / 2024"
            style={styles.inputFull}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput
            placeholder="915"
            style={styles.inputFull}
          />
        </View>
      </View>
      <Text style={styles.note}>We will send you an order details to your email after the successful payment</Text>
      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => navigation.navigate("Success")}
      >
        <Image
          source={require("./assets/key.png")}
          style={styles.lock}
        />
        <Text style={styles.payText}>Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
}

function SuccessScreen({ navigation }) {
  return (
    <View style={styles.successContainer}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#6C7EE1" />
      </TouchableOpacity>
      <Image
        source={require("./assets/anh.png")}
        style={styles.successImage}
      />
      <Text style={styles.successTitle}>Payment Success, Yayy!</Text>
      <Text style={styles.successText}>we will send order details and invoice in your contact no. and registered email</Text>
      <TouchableOpacity style={styles.detailsBtn}>
        <Text style={styles.detailsText}>Check Details</Text>
        <Ionicons name="arrow-forward" size={18} color="#5A6CEA" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.downloadBtn}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>

    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.headerHome}>
        <View>
          <Text style={styles.hello}>Hello 👋🏻 </Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.title}>Your Insights</Text>
      <View style={styles.grid}>


        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Scan")}
        >
          <View style={styles.icon1}>
            <Image
              source={require("./assets/scan.png")}
              style={styles.icon}
            /></View>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.icon2}>
            <Image
              source={require("./assets/icon2.png")}
              style={styles.icon}
            /></View>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Success")}
        >
          <View style={styles.icon3}>
            <Image
              source={require("./assets/icon3.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Payment")}
        >
          <View style={styles.icon4}>
            <Image
              source={require("./assets/calendar.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  //payment screen

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 10,
    marginLeft: -20,
    marginRight: -20,
    borderRadius: 25,
    paddingTop: 20,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: "#acddc6af",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1.9,
    shadowRadius: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold"
  },

  price: {
    color: "#25D482",
    fontWeight: "bold",
    fontSize: 18
  },

  tax: {
    fontSize: 12,
    color: "#999"
  },

  backIcon: {
    width: 28,
    height: 28,
  },

  paymentType: {
    flexDirection: "row",
    marginTop: -20,
    width: "95%",
    alignSelf: "center",

  },

  creditBtn: {
    flex: 1,
    backgroundColor: "#25D482",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingTop: 18,
    paddingBottom: 18,
  },

  appleBtn: {
    flex: 1,
    backgroundColor: "#f3efef",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    FontWeight: "bold"
  },

  creditText: {
    color: "white",
    marginLeft: 8,
    fontWeight: "bold"
  },

  appleText: {
    marginLeft: 8
  },

  label: {
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 6
  },

  inputBox: {
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center"
  },

  input: {
    flex: 1,
    padding: 15
  },

  inputFull: {
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
    padding: 15,
  },

  smallIcon: {
    width: 18,
    height: 18,
    marginLeft: 5
  },

  icon: {
    width: 20,
    height: 20
  },

  row: {
    flexDirection: "row",
    gap: 20
  },

  note: {
    textAlign: "center",
    fontSize: 14,
    color: "#a9a6a6",
    marginTop: 30
  },

  payText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 18
  },

  lock: {
    width: 18,
    height: 18
  },

  payBtn: {
    position: "absolute",
    bottom: 60,
    left: 20,
    right: 20,
    backgroundColor: "#25D482",
    padding: 25,
    margin: 10,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },


  //home screen
  headerHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },

  title: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: "600"
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20
  },

  card: {
    width: "46%",
    height: 200,
    backgroundColor: "#f6f6f6",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {
    fontSize: 30
  },

  cardTitle: {
    fontSize: 18,
    marginTop: 15
  },

  cardSub: {
    color: "gray",
    marginTop: 5
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon1: {
    width: 70,
    height: 70,
    backgroundColor: "#bebee7",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  icon2: {
    width: 70,
    height: 70,
    backgroundColor: "#f0d1b2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  icon3: {
    width: 70,
    height: 70,
    backgroundColor: "#bee7d9",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  icon4: {
    width: 70,
    height: 70,
    backgroundColor: "#bedce7",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {
    width: 30,
    height: 30
  },


  //success screen
  successContainer: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    alignItems: "center",
    paddingTop: 60
  },

  backBtn: {
    position: "absolute",
    left: 20,
    top: 60,
    backgroundColor: "#EEF0F6",
    padding: 10,
    borderRadius: 10
  },

  successImage: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginTop: 40
  },

  successTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20
  },

  successText: {
    textAlign: "center",
    color: "#777",
    marginTop: 10,
    paddingHorizontal: 40,
    lineHeight: 20
  },

  detailsBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },

  detailsText: {
    color: "#5A6CEA",
    fontSize: 16,
    marginRight: 5
  },

  downloadBtn: {
    marginTop: 40,
    width: "85%",
    backgroundColor: "#5A6CEA",
    padding: 18,
    borderRadius: 30,
    alignItems: "center"
  },

  downloadText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
});
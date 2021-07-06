import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  SafeAreaView,
  View,
  Dimensions,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

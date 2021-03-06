import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import styles from "./styles/LoadingScreen";

const LoadingScreen = () => (
   <View style={styles.root}>
    <ActivityIndicator 
      size="large"
    />
   </View> 
);

export default LoadingScreen;
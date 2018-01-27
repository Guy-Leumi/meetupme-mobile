//import { fetchMeetups } from "./src/constants/api";
import React, { Component } from "react";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";

import Root from "./src/Root";

import color from "./src/constants/color";
import { cachedFonts } from "./src/helpers";
import store from "./src/redux/store";

EStyleSheet.build(color);

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async _loadFontsAsync() {
    const fontAssets = cachedFonts([
      {
        montserrat: require("./src/fonts/Montserrat-Regular.ttf")
      },
      {
        montserratLight: require("./src/fonts/Montserrat-Light.ttf")
      },
      {
        montserratMedium: require("./src/fonts/Montserrat-Medium.ttf")
      },
      {
        montserratBold: require("./src/fonts/Montserrat-Bold.ttf")
      }
    ]);

    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

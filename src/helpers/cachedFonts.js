import {Font}   from 'react-native'

export const cachedFonts = fonts => fonts.map(font => Font.loadAsync(font));
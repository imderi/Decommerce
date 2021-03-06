import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "android" &&
  StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px`}
`;

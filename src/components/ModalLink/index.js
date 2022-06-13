import React from "react";
import { BackButton, Name } from "./styles";

import { Feather } from "@expo/vector-icons";

import { WebView } from "react-native-webview";
function ModalLink({ link, title, closeModal }) {
  return (
    <>
      <BackButton>
        <Feather name="x" size={35} color="#fff" onPress={closeModal} />
        <Name> {title} </Name>
      </BackButton>
      <WebView
        source={{
          uri: link,
        }}
      />
    </>
  );
}
export default ModalLink;

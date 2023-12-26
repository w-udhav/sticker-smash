import { StyleSheet, Image } from "react-native";
export default function ImageViewer({ placeholderImg, selectedImage }) {
  const src = selectedImage ? { uri: selectedImage } : placeholderImg;
  return <Image source={src} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 20,
  },
});

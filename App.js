import { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Animated,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

export default function App() {
  const animation = useRef(new Animated.Value(1)).current;
  const [reloadAnimation, setReloadAnimation] = useState();
  const [toValue, setToValue] = useState(3);
  const [friction, setFriction] = useState(2);
  const [tension, setTension] = useState(100);

  const handleAnimated = () => {
    Animated.spring(animation, {
      toValue,
      friction,
      tension,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        Animated.spring(animation, {
          toValue: 1,
          friction: 5,
          tension: 40,
          useNativeDriver: false,
        }).start();
      }
    });
  };

  const animatedStyles = {
    transform: [
      {
        scale: animation,
      },
    ],
  };

  useEffect(() => {
    handleAnimated();
  }, [reloadAnimation]);

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#F29F58" }} />

      <View style={styles.container}>
        <Text style={styles.title}>
          Juega con los sliders y luego toca el botón para ver la animación.
        </Text>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>

        <View style={styles.controls}>
          <View style={styles.controlGroup}>
            <Text style={styles.label}>toValue: {toValue.toFixed(1)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              step={0.1}
              value={toValue}
              onValueChange={(value) => setToValue(value)}
            />
          </View>

          <View style={styles.controlGroup}>
            <Text style={styles.label}>friction: {friction.toFixed(1)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={7}
              step={0.1}
              value={friction}
              onValueChange={(value) => setFriction(value)}
            />
          </View>
          
          <View style={styles.controlGroup}>
            <Text style={styles.label}>tension: {tension.toFixed(0)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={200}
              step={1}
              value={tension}
              onValueChange={(value) => setTension(value)}
            />
          </View>

          <TouchableOpacity
            style={styles.reloadAnimation}
            onPress={() => {
              setReloadAnimation((prev) => !prev);
            }}
          >
            <Text style={styles.reloadAnimationText}>Recargar animación</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>@Diegoberrio1601</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1833",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  box: {
    width: 65,
    height: 65,
    backgroundColor: "#AB4459",
  },
  controls: {
    width: "90%",
  },
  controlGroup: {
    marginVertical: 10,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  reloadAnimation: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#F29F58",
  },
  reloadAnimationText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: "5%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

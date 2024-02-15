import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera/next";
import { useState } from "react";
import { View } from "react-native";
const CustomBarcodeScanner = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);

  if (!permission) {
    requestPermission();
  }

  if (permission === null || !permission.granted) {
    return null;
  }

  const handleBarcodeScanned = (scanningResult: BarcodeScanningResult) => {
    // I think this could potentially be an unhandled issue, if the state is not reset to false if something goes wrong...
    if (!scanned) {
      setScanned(true);
      console.log("Barcode scanned data:", scanningResult);
    }
  };

  return (
    <View style={{}}>
      <CameraView
        style={{ height: "100%", width: "100%" }}
        onBarcodeScanned={handleBarcodeScanned}
      />
    </View>
  );
};
export default CustomBarcodeScanner;

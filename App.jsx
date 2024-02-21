import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/global/theme";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";

export default function Auth() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: { backgroundColor: "#010041ee" },
          headerBackTitleVisible: false,
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

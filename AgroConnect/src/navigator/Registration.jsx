import { SafeAreaView } from "react-native-safe-area-context";
import Profilefill from "../screens/Profilefill";

const Stack = createNativeStackNavigator();

export default function Registration() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
            name="Profilefill"
            component={Profilefill}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
  )
}

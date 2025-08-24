import { Text, View } from "react-native";
import '../globals.css';
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-bold text-primary">
        Welcome My World!
      </Text>
        <Text className="text-5xl font-bold text-primary">
           hello
        </Text>
    </View>
  );
}

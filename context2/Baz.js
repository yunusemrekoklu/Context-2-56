import { useContext } from "react";
import { Text, View } from "react-native";
import { NameContext } from "./NameContext";

export const Baz = () => {
  const data = useContext(NameContext);
  return (
    <View>
      <Text style={{ fontSize: 25 }}>
        {data.firstName} {data.lastName}
      </Text>
    </View>
  );
};

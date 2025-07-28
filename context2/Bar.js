import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { NameContext } from "./NameContext";

export const Bar = () => {
  const context = useContext(NameContext);
  return (
    <View
      style={{
        width: 300,
        height: 300,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        margin: 5,
      }}
    >
      <Text> {context.firstName} </Text>
      <Text> {context.lastName} </Text>
      <Button
        title="DEĞİŞTİR"
        onPress={() => {
          context.setFirstName("Ferzan");
          context.setLastName("Kara");
        }}
      />
    </View>
  );
};

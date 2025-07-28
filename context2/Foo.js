import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { NameContext } from "./NameContext";
import { Baz } from "./Baz";

export const Foo = () => {
  const context = useContext(NameContext);
  return (
    <View
      style={{
        width: 300,
        height: 300,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        margin: 5,
      }}
    >
      <Baz />
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

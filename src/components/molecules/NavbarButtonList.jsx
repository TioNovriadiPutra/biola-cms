import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavbarBlock from "@components/atoms/NavbarBlock";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const NavbarButtonList = ({ listItem, activeScreen, setActiveScreen }) => {
  const handlePress = (index) => {
    setActiveScreen(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable style={styles.button} onPress={() => handlePress(index)}>
            <Text
              style={[
                styles.label,
                {
                  color: activeScreen === index ? colors.Primary : colors.Gray,
                },
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        )}
      />

      <NavbarBlock activeScreen={activeScreen} />
    </View>
  );
};

export default NavbarButtonList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 7,
  },
  list: {
    gap: 20,
  },
  button: {
    width: 115,
    alignItems: "center",
  },
  label: {
    fontFamily: fonts.PopBold,
    fontSize: 16,
  },
});

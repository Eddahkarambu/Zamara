import React, { useEffect, useState } from "react";
import { GetContinents } from "../API/continents";
import { View, Text } from "react-native";

export const Continents = () => {
  const [continent, setContinent] = useState([]);

  useEffect(async () => {
    const allContinents = await GetContinents();
    console.log(allContinents);
    setContinent(allContinents);
  }, []);

  return (
    <View>
      <Text> {continent}</Text>
    </View>
  );
};

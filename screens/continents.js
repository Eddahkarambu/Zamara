import React, { useEffect, useState } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { View, Text, StyleSheet } from "react-native";

export const Continents = () => {
  const [continents, setContinents] = useState([]);
  const parser = new XMLParser();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
          `
          <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
            <soapenv:Header/>
            <soapenv:Body>
              <web:ListOfContinentsByName/>
            </soapenv:Body>
          </soapenv:Envelope>
          `,
          {
            headers: {
              "Content-Type": "text/xml",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        const json = parser.parse(response.data);
        const continentNames =
          json["soap:Envelope"]["soap:Body"][
            "m:ListOfContinentsByNameResponse"
          ]["m:ListOfContinentsByNameResult"]["m:tContinent"];
        console.log(continentNames);
        setContinents(continentNames);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List of Continents</Text>
      <View style={styles.continent}>
        {continents.map((continent) => (
          <Text style={styles.cont} key={continent["m:sCode"]}>
            {continent["m:sCode"]}: {continent["m:sName"]}
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1f1f3d",
  },
  cont: {
    padding: 2,
    marginLeft: 70,
    fontWeight: 800,
    color: "white",
    fontSize: 18,
  },
  heading: {
    color: "white",
    padding: 2,
    marginLeft: 50,
    fontWeight: 800,
    fontSize: 20,
  },
});

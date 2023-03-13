import { parse } from "fast-xml-parser";

export const GetContinents = () => {
  fetch(
    "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL"
  )
    .then((response) => response.text())
    .then((textResponse) => {
      let obj = parse(textResponse);
      console.log(obj);
      return obj;
    })
    .catch((error) => {
      console.log(error);
    });
};

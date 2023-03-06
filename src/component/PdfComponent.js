import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

import { Button } from 'react-native-elements'
import {View, Text, ScrollView} from 'react-native'


export default function PdfComponent(props) {

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
  
           h1 {
               text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
    `;

    const createAndSavePDF = async (html) => {
      try {
        const { uri } = await Print.printToFileAsync({ html });
        if (Platform.OS === "ios") {
          await Sharing.shareAsync(uri);
        } else {
          const permission = await MediaLibrary.requestPermissionsAsync();
    
          if (permission.granted) {
            console.log(uri)
            await MediaLibrary.createAssetAsync(uri);
          }
        }
    
      } catch (error) {
        console.error(error);
      }
    };


  
  
const createPDF = async (html) => {
    try {
      
        const { uri } = await Print.printToFileAsync({ html });
        console.log(uri)
        return uri;
        
    } catch (err) {
        console.error(err);
    }
};
  

    return (
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Formulario</Text>
         
          <Button
            title="Generar"
            onPress={() => createAndSavePDF(htmlContent)}
          />
  
        </View>
      
      </ScrollView>        
    );
  }

  function defaultFormValue() {
    return {
      rut: "",
      name: "",
      lastName: "",
      address: "",
      displayErrorUsername:'none'
    };
  }
 /* function Datos(){
    return(
      <View>
        <Input

      </View>
    )
  }*/
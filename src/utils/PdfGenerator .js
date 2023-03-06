import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";


//export const DocumentData=(datos) =>


export const PdfGenerator = async(documentData)=>{
  //const documentData = Document(datos)
 
  //console.log('documento: '+documentData)


  try {

    const { uri } = await Print.printToFileAsync({ documentData });
    if (Platform.OS === "ios") {
      await Sharing.shareAsync(uri);
    } else {
      console.log('entro')
      const permission = await MediaLibrary.requestPermissionsAsync();

      if (permission.granted) {
        console.log(uri)
        await MediaLibrary.createAssetAsync(uri);
      }
    }

  } catch (error) {
    console.error(error);
  }


}






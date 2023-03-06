import React, { useState, useRef } from "react";
import {Input, Button, ButtonGroup,Icon} from 'react-native-elements';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Toast from "react-native-easy-toast";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import {Document} from '../utils/Document';
import {NumerosLetras} from '../utils/NumerosLetras';
import Loading from '../component/Loading';
import {Colors} from "../Styles/Styles"
import { StatusBar } from 'react-native'


export default function Home() {
  const toastRef = useRef();
  const buttonGender=["Masculino","Femenino"]
  const[gender, setGender]=useState(0)
  const buttonDepartment=["Casa","Departamento"]
  const[department, setDepartment]=useState(0)
  const buttonRentDepartment=["Casa","Departamento"]
  const[rentDepartment, setRentDepartment]=useState(0)
  const[formData, setFormData]= useState(defaultFormValue)
  const[isLoading, setIsLoading] = useState(false);


  const onChange = (e, type) =>{
    setFormData({...formData, [type]: e.nativeEvent.text})
  }

  const genderChange = async()=>{
    if(gender ===0){
      console.log("Masculino")
      setFormData({...formData.fGender='Sr'})
      //console.log(formData.fGender)
    }else{
      console.log("Femenino")
      setFormData({...formData.fGender='Sra'})
      //console.log(formData.fGender)
    }
    if(department ===0){
      console.log("Vive en casa")
      setFormData({...formData.fDepartment=0})
      //console.log(formData.fGender)
    }else{
      console.log("Vive en departamento")
      setFormData({...formData.fDepartment=1})
      //console.log(formData.fGender)
    }
    if(rentDepartment ===0){
      console.log("renta casa")
      setFormData({...formData.fRentDepart=0})
      //console.log(formData.fGender)
    }else{
      console.log("Renta departamento")
      setFormData({...formData.fRentDepart=1})
      //console.log(formData.fGender)
    }    
  }

  const porcentaje = async()=>{
    let porcentajeDeGanancia=20, montoTotal =200000
    let ganacia = Math.round((porcentajeDeGanancia/100)*montoTotal)
    
    console.log(ganacia);
  }



  const onSubmit = async()=>{
    setIsLoading(true);
    //porcentaje()
    if(!formData.rut){
      toastRef.current.show("Error...Ingrese rut");
    }else if(!formData.name){
      console.log('sin nombre')
      toastRef.current.show("Error...Ingrese nombres");
    }else if(!formData.lastName){
      console.log('sin apellido')
      toastRef.current.show("Error...Ingrese apellidos");
    }else if(!formData.nationality){
      console.log('sin nacionalidad')
      toastRef.current.show("Error...Ingrese nacionalidad");
    }else if(!formData.maritalStatus){
      console.log('sin estado civil')
      toastRef.current.show("Error...Ingrese estado civil");
    }else if(!formData.profession){    
      console.log('sin ocupasion')
      toastRef.current.show("Error...Ingrese ocupación");
    }else if(!formData.comunne){
      console.log('sin comuna')
      toastRef.current.show("Error...Ingrese comuna");
    }else if(!formData.address){
      console.log('sin direccion')
      toastRef.current.show("Error...Ingrese direccion");
    }else if(!formData.numberAddress){
      console.log('sin numero de direccion')
      toastRef.current.show("Error...Ingrese numero de direccion");
    }else if(department===1 && !formData.towerNumber ){
      console.log('con departamento pero sin torre')
      toastRef.current.show("Error...Ingrese torre");
    }else if(department===1 && !formData.departmentNumber ){
      console.log('con departamento pero sin numero de departamento')
      toastRef.current.show("Error...Ingrese numero de departamento");
    }else if(!formData.rentRegion){
      console.log('sin region de arriendo')
      toastRef.current.show("Error...Ingrese region de la propiedad");
    }else if(!formData.rentComunne){
      console.log('sin comuna de arriendo')
      toastRef.current.show("Error...Ingrese comuna de la propiedad");
    }else if(!formData.rentAddress){
      console.log('sin direccion de arriendo')
      toastRef.current.show("Error...Ingrese direccion de la propiedad");
    }else if(!formData.rentNumberAddress){
      console.log('sin numero de direccion de arriendo')
      toastRef.current.show("Error...Ingrese numero de la propiedad");
    }else if(!formData.rentTowerNumber ){
      console.log('con departamento para arrendar pero sin torre')
      toastRef.current.show("Error...Ingrese torre de la propiedad");
    }else if(!formData.rentDepartmentNumber ){
      console.log('con departamento pero sin numero de departamento a arrendar')
      toastRef.current.show("Error...Ingrese numero de departamento(propiedad)");
    }else if(!formData.monthlyRent){
      console.log('sin pago mensual')
      toastRef.current.show("Error...Ingrese ingrese el pago mensual");
    }else if(!formData.profitPercentage){
      console.log('sin porsentaje de ganacia')
      toastRef.current.show("Error...Ingrese porcentaje de ganacia");
    }else if(!formData.bank){
      console.log('sin banco')
      toastRef.current.show("Error...Ingrese banco");
    }else if(!formData.accountNumber){
      console.log('sin numero de cuenta')
      toastRef.current.show("Error...Ingrese N° de cuenta a pagar");
    }else if(!formData.date){
      console.log('sin fecha')
      toastRef.current.show("Error...Ingrese fecha del contrato");
    }else if(parseInt(formData.profitPercentage) > 100){
      console.log('el porcentaje de ganacia debe ser inferior a 100%')
      toastRef.current.show("Error...ingrese un porcentaje inferiro o igual al 100%");
    }else{
      let genderstr="", genderDeterminate = "", genderMayusculaDeterminate = "";
      if(gender===0){
        genderstr="Sr"
        genderDeterminate = "el"
        genderMayusculaDeterminate = "El"

      }else{
        genderstr="Sra"
        genderDeterminate = "la"
        genderMayusculaDeterminate = "La"
      }
      formData.genderStr = genderstr;
      formData.determinateGenderStr = genderDeterminate;
      formData.determinateMayusculaGenderStr = genderMayusculaDeterminate;
      formData.rentaStr = NumerosLetras(formData.monthlyRent);
      formData.porcentajeStr = NumerosLetras(formData.profitPercentage);
      formData.ganacia = Math.round((formData.profitPercentage/100)*formData.monthlyRent);
      formData.ganaciaStr = NumerosLetras(formData.ganacia);
      console.log(formData);
      let documentData = (Document(formData))
      //uri.....
      console.log(documentData)

      //PdfGenerator(Document(formData))
      createAndSavePDF(documentData)
    }
    setIsLoading(false);
  }

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

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <ButtonGroup
            buttons={buttonGender}
            selectedIndex={gender}
            onPress={setGender}
            selectedButtonStyle={{ backgroundColor: Colors.btnAcceptColor }}
            buttonStyle = {{backgroundColor:Colors.primaryBackgroundColor}}
            textStyle={{ color: Colors.iconColorInput }}      
          />        
          <Input
            label = "rut"
            placeholder="11111111-1"
            onChange={(e) => onChange(e, "rut")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="address-card"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Nombres"
            onChange={(e) => onChange(e, "name")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="user"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Apellidos"
            onChange={(e) => onChange(e, "lastName")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="user"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Nacionalidad"
            onChange={(e) => onChange(e, "nationality")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="globe-asia"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Estado civil"
            onChange={(e) => onChange(e, "maritalStatus")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="user-friends"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Profesion"
            onChange={(e) => onChange(e, "profession")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="user-tie"
                iconStyle={styles.iconRight}
              />
            }
          />
          <ButtonGroup
            buttons={buttonDepartment}
            selectedIndex={department}
            onPress={setDepartment}  
            selectedButtonStyle={{ backgroundColor: Colors.btnAcceptColor }}
            buttonStyle = {{backgroundColor:Colors.primaryBackgroundColor}}
            textStyle={{ color: Colors.iconColorInput }}    
          />
          <Input
            placeholder="Comuna"
            onChange={(e) => onChange(e, "comunne")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="house-user"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Direccion"
            onChange={(e) => onChange(e, "address")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="house-user"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Numero Direccion"
            onChange={(e) => onChange(e, "numberAddress")}
            keyboardType={"number-pad"}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="house-user"
                iconStyle={styles.iconRight}
              />
            }
          />
          {department === 1 ?(
            <View style={styles.styleDiv}>
              <Input
                placeholder="Torre"
                onChange={(e) => onChange(e, "towerNumber")}
                containerStyle = {styles.inputForm}
                inputStyle = {{color : Colors.iconColorInput}}
                rightIcon={
                  <Icon
                    type="font-awesome-5"
                    name="gopuram"
                    iconStyle={styles.iconRight}
                  />
                }
              />      
              <Input
                placeholder="Numero departamento"
                onChange={(e) => onChange(e, "departmentNumber")}
                keyboardType={"number-pad"}
                containerStyle = {styles.inputForm}
                inputStyle = {{color : Colors.iconColorInput}}
                rightIcon={
                  <Icon
                    type="font-awesome-5"
                    name="gopuram"
                    iconStyle={styles.iconRight}
                  />
                }
              />
            </View>            
          ):null}
          
          <Text>aca van datos de la propiedad a arrendar</Text>

          <Input
            placeholder="Region Propiedad"
            onChange={(e) => onChange(e, "rentRegion")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="home"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Comuna Propiedad"
            onChange={(e) => onChange(e, "rentComunne")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="home"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Direccion Propiedad"
            onChange={(e) => onChange(e, "rentAddress")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="home"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Numero direccion propiedad"
            keyboardType={"number-pad"}
            onChange={(e) => onChange(e, "rentNumberAddress")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="home"
                iconStyle={styles.iconRight}
              />
            }
          />
          
            <View style={styles.styleDiv}>
              <Text>Datos del departamento... si no se usa ocultar</Text>
              <Input
                placeholder="Torre propiedad"
                onChange={(e) => onChange(e, "rentTowerNumber")}
                containerStyle = {styles.inputForm}
                inputStyle = {{color : Colors.iconColorInput}}
                rightIcon={
                  <Icon
                    type="font-awesome-5"
                    name="gopuram"
                    iconStyle={styles.iconRight}
                  />
                }
              />
              <Input
              placeholder="Numero departamento propiedad"
              keyboardType={"number-pad"}
              onChange={(e) => onChange(e, "rentDepartmentNumber")}
              containerStyle = {styles.inputForm}
              inputStyle = {{color : Colors.iconColorInput}}
              rightIcon={
                <Icon
                  type="font-awesome-5"
                  name="gopuram"
                  iconStyle={styles.iconRight}
                />
              }
              />  
            </View>
          
          
          <Text>Datos bancarios</Text>
          <Input
            placeholder="Renta mensual"
            keyboardType={"number-pad"}
            onChange={(e) => onChange(e, "monthlyRent")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="dollar-sign"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Porsentaje de ganancia"
            keyboardType={"number-pad"}
            onChange={(e) => onChange(e, "profitPercentage")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="percentage"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Text>si sale colocar un 'text' con la ganacia</Text>
          <Input
            placeholder="Banco"
            onChange={(e) => onChange(e, "bank")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="university"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Numero de cuenta"
            keyboardType={"number-pad"}
            onChange={(e) => onChange(e, "accountNumber")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="file-invoice-dollar"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Fecha del realizacion del contrato"
            onChange={(e) => onChange(e, "date")}
            containerStyle = {styles.inputForm}
            inputStyle = {{color : Colors.iconColorInput}}
            rightIcon={
              <Icon
                type="font-awesome-5"
                name="calendar-day"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Button
            title = "Generar"
            containerStyle={styles.btnContaineRegister}
            buttonStyle={styles.btnRegister}
            onPress = {() => onSubmit()}
          />
       
        <Loading isVisible={isLoading} text={"Generando..."}/>
        </View>        
      </ScrollView>     
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
              
    );
  }

  function defaultFormValue() {
    return {
      determinateMayusculaGenderStr:"",
      determinateGenderStr:"",
      genderStr: "",         //recibe un Sr o Sra, para ingresarlo al documento
      fDepartment:"",     //recibe 1 (casa) o 2 (departamento), para mostrar el texto correspondiente.
      rut: "",            
      name: "",
      lastName: "",
      nationality:"",
      maritalStatus:"",   //estado civil
      profession:"",      //ocupacion
      //donde vive el dueño
      comunne:"",         //comuna de recidencia
      //address se comparte entre casa y departamento.
      address: "",
      numberAddress:"",
      //en caso de departamento.
      towerNumber:"",
      departmentNumber:"",
      //propiedad a arrendar
      rentRegion:"",
      rentComunne:"",
      rentAddress:"",
      rentNumberAddress:"",
      //en caso de departamento.
      rentTowerNumber:"",
      rentDepartmentNumber:"",

      //
      //
      monthlyRent: "",
      profitPercentage: "",
      bank: " ",      
      accountNumber: "",
      date: "",
      department: "", 
      rentDepartment: "", 
       
      rentaStr: "", 
      ganacia: "", 
      ganaciaStr: "", 
      porcentajeStr: "",
    };
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 10,
    backgroundColor: Colors.primaryBackgroundColor
  },
  styleDiv: {
    width: "100%",
    //marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconRight: {
    color: Colors.iconColorInput
  },
  inputForm:{
    width: "100%",
    marginTop: 20,
  },
  btnContaineRegister: {
    marginTop: 20,
    marginBottom: 20,
    width: "90%",
  },
  btnRegister: {
    backgroundColor: Colors.btnAcceptColor,
  },
});

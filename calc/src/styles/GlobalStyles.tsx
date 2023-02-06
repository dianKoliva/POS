import { StyleSheet } from "react-native";
import { myCOlors } from "./colors";

export const Styles=StyleSheet.create({
  btnBlue:{
    width:72,
    height:72,
    borderRadius:24,
    backgroundColor:myCOlors.blue,
    alignItems:"center",
    margin:8,
  },
  btnDark:{
    width:72,
    height:72,
    borderRadius:24,
    backgroundColor:myCOlors.dark,
    alignItems:"center",
    margin:8,
  },
  btnLight:{
    width:72,
    height:72,
    borderRadius:24,
    backgroundColor:myCOlors.light,
    alignItems:"center",
    margin:8,
  },
  btnGray:{
    width:72,
    height:72,
    borderRadius:24,
    backgroundColor:myCOlors.gray,
    alignItems:"center",
    margin:8,
  },
  smallTextLight:{
    fontSize:32,
    color:myCOlors.light
  },
  smallTextDark:{
    fontSize:32,
    color:myCOlors.dark
  },
  row:{
    maxWidth:'100%',
    flexDirection:'row',
  },
  viewBottom:{
    position:'absolute',
    bottom:50
  },
  screenFirstNumber:{
    fontSize:96,
    color:myCOlors.gray,
    fontWeight:'200',
    alignSelf:'flex-end'
  },
  screenSecondNumber:{
    fontSize:40,
    color:myCOlors.gray,
    fontWeight:'200',
    alignSelf:"flex-end",
  }


});

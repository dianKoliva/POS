import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View,Switch} from 'react-native';
import Button from './src/components/Button';

import { ThemeContext } from './src/context/ThemeContext';
import { myCOlors } from './src/styles/colors';

export default function App() {
  const [theme,setTheme]=useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme=== 'light'? styles.container:[styles.container,{backgroundColor:'#000'}]}>
     
      <StatusBar style="auto" />
      <Switch value={theme==='light'}
      onValueChange={()=>setTheme(theme==="light"?'dark':"light")}
      >

      </Switch>

      <Button   title='3' onPress={()=> {alert('hello')}}> </Button>
    </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myCOlors.light,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});

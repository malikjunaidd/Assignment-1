
import { StyleSheet,Image, Text, View } from 'react-native';


export default function App() {
 

  return (
    <View style={styles.cen}>
    <View  style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={require('./logooo.jpeg')}
      />
      <Text style ={styles.te}>Muhammad Junaid Ibrahim</Text>
      <Text style ={styles.te}>19-ARID-1206</Text>
      <Text style ={styles.te}>BSSE-5(Morning)</Text>

    </View>
    </View>
  );
    }
  
const styles = StyleSheet.create({
  te:
  {
    flex : 1,
    color : 'blue',
    fontSize : 17,
  },
  container: {
    backgroundColor: '#a9a9a9',
    width :310,
    height : 380,

    
   
    borderColor : '#7fff00',
    borderRadius : 1,
    borderWidth : 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  cen : {
    alignItems: 'center',
   
  },
});

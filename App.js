import { Text, View } from 'react-native';
import { styles1, viewChilds } from './assets/styles/Mystyles';

export default function App() {
  return (
    <View style={[styles1.container,{borderRadius:10,flexDirection:'columns'}]}>
      <View style={{flex:3,backgroundColor:'#fcc123', width:'80%',justifyContent:'center',alignItems:'center',borderRadius:'10%'}}>
        <Text>Banner</Text>
      </View>
      <View style={[viewChilds.views,{flex:1,backgroundColor:'green'}]}>
        <Text>Barra de navegacion</Text>
      </View>
      <View style={[viewChilds.views,{flex:8,backgroundColor:'#000',borderRadius:10}]}>
        <Text style={{color:'#fff'}}>Contenido</Text>
      </View>
      <View style={[viewChilds.views,{flex:1,backgroundColor:'green'}]}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}



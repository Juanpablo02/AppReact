import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles1, viewChilds } from './assets/styles/Mystyles';
import Banner from './components/Banner';

export default function App() {
  // Definicion de estados con sus respectivos metodos de actualizacion
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  //Metodos
  let calcular = (oper) => {
    let miresultado = 0;
    switch (oper){
        case "+":
          miresultado = parseInt(valor1) + parseInt(valor2);
          break;
        case "-":
          miresultado = parseInt(valor1) - parseInt(valor2);
          break;
        case "*":
          miresultado = parseInt(valor1) * parseInt(valor2);
          break;
        case "/":
          miresultado = parseInt(valor1) / parseInt(valor2);
          break;
    }
    setResultado(miresultado);
  }
  return (
    <View style={[styles1.container,styles1.alignViews,{flexDirection:'columns',backgroundColor:'#00000050'}]}>
      <Banner src='calcu.jpg'></Banner>
      {/* <View style={[viewChilds.views,styles1.alignViews,{flex:1,backgroundColor:'green'}]}>
        <Text>Barra de navegacion</Text>
      </View> */}
      <View style={[viewChilds.views,styles1.alignViews,{flex:8,backgroundColor:'#000',borderRadius:10}]}>
        <Text style={{color:'#fff',fontSize:22,marginBottom:'2%'}}>Digite un valor</Text>
        <TextInput
          style={{fontSize:20,borderWidth:2,borderColor:'white',padding:5,color:'white',borderRadius:10}}
          keyboardType={Number}
          onChangeText={valor1 => setValor1(valor1)}
          value={valor1}
          autoFocus/>

          <Text style={{color:'#fff',fontSize:22,marginBottom:'2%'}}>Digite un valor 2</Text>
        <TextInput
          style={{fontSize:20,borderWidth:2,borderColor:'white',padding:5,color:'white',borderRadius:10}}
          keyboardType={Number}
          onChangeText={valor2 => setValor2(valor2)}
          value={valor2}/>

          <Text style={{color:'#fff',marginTop:'2%',marginBottom:'2%'}}>Resultado</Text>
          <Button title='Sumar' onPress={()=>calcular("+")}></Button>
          <Button title='Restar' onPress={()=>calcular("-")}></Button>
          <Button title='Multiplicar' onPress={()=>calcular("*")}></Button>
          <Button title='Dividir' onPress={()=>calcular("/")}></Button>
          <Text style={{color:'#fff',marginTop:'2%',marginTop:'2%'}}>{resultado}</Text>
      </View>
      {/* <View style={[viewChilds.views,styles1.alignViews,{flex:1,backgroundColor:'green'}]}>
        <Text>Footer</Text>
      </View> */}
    </View>
  );
}



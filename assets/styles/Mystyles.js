import { StyleSheet } from "react-native-web";

const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00000090',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    texts:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    }
  });

  const viewChilds = StyleSheet.create({
    views:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
  });
  export {styles1,viewChilds}
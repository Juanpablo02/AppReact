import { StyleSheet } from "react-native-web";

const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00000090'
    },
    texts:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    alignViews:{
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

  const viewChilds = StyleSheet.create({
    views:{
        width:'100%'
    },
    views2:{
      width: '80%',
      borderRadius: '50%'
    }
  });

  export {styles1,viewChilds}
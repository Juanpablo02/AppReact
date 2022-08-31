import { StyleSheet, Text, View, Image } from "react-native-web";
import { styles1, viewChilds } from "../assets/styles/Mystyles";

export default function Banner(props){
    return(
        <View style={[viewChilds.views2,styles1.alignViews,{flex:3,backgroundColor:'#fcc123'}]}>
            {/* <Text>{props.title}</Text>
            <Text>{props.subtitle}</Text> */}
            <Image source={require(`../assets/images/${props.src}`)}
                    style={{width:'100%',height:'70%',resizeMode:'stretch',borderRadius:20}}
            />
        </View>
    );
}
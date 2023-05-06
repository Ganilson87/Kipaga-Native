import { Button } from "@react-native-material/core";
import { useTheme } from '../../constants/appContexts';
import EditScreenInfo from '../../components/EditScreenInfo';
import { View, Text, StyleSheet, Image } from 'react-native'
import { TextStyles } from "../../assets/styles";
import BankCard from "../../components/banckCard";
import { StatusBar } from 'react-native';
import servicos from "../../components/servicos";

export default function TabOneScreen() {
  const { colors, isDark } = useTheme()

  return (
    <View>

<View style={styles.container}>

    
<View style={[{ backgroundColor: colors.background }, styles.container]}  >
             <View style={[styles.flexItems]}>
                 <View>
                 <Image  style={[styles.card]}  source={require("../../assets/images/invest.jpg")} />
                 <View style={styles.cardTo}>
   <Text style={styles.cardExpiration}>Seu saldo</Text>

   <Text style={styles.cardName}>100,000,000 Kz</Text>
   <Text style={styles.cardNumber}>Ki12****</Text>
 </View>
                     <Text style={TextStyles.smTitle} > Realizar Operações </Text>

                 </View>

             </View>

             <View style={styles.sectionContainer} >
                     </View>
         </View>

 </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  sectionContainer: {
},
container: {
    // flex: 1,
 },
flexItems: {
    flexDirection: "row",
    justifyContent: "space-between"
    
    
},
cardTo: {
  backgroundColor: '#FFF',
  borderRadius: 8,
  padding: 16,
  marginBottom: 16,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  marginTop:10,
  shadowRadius: 2,
  elevation: 2,
},
cardImage: {
  height: 50,
  width: 100,
  marginBottom: 8,
},
cardName: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 4,
},
cardNumber: {
  fontSize: 14,
  marginBottom: 4,
},
cardExpiration: {
  fontSize: 12,
  color: '#666',
},

avatar: {
    width: 50,
    height: 50,
    borderRadius: 20
},
cardContainer: {
    height: 200,
    width: 300,
    borderWidth: 2,
    borderColor: 'black'
},
  card:{
    height:400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width:480,
   },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

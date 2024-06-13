import { HeaderPage } from "@components/HeaderPage/Index";
import { styles } from "./style";
import { Text, View, TouchableOpacity } from "react-native";
import { PerfilResume } from "@components/PerfilResume";
import { StationResume } from "@components/StationResume";
import { NumberBikes } from "@components/NumberBikes";
import { useNavigation, useRoute } from "@react-navigation/native";

export function Station(){

    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <HeaderPage/>
            <PerfilResume/>
            <Text style={styles.title}>Menu</Text>
            <View style={styles.contentStation}>
                <StationResume stationName="estado"/>
                <NumberBikes totalBike={5}/>
                <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('conectedWithBike')}>
                    <Text style={styles.btnText}>Levantar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
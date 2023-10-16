import {Image, Text, View} from "react-native";
import {Entypo} from "@expo/vector-icons";
import React from "react";
import styles from "./styles";

const HeaderMain = () => {

    return (

        <View style={styles.headerMain}>
            <View style={styles.headerOne}>
                <Image style={styles.image} source={{uri: "https://cdn.getir.com/misc/emoji/house.png"}}/>
                <View style={styles.headerOneView}>
                    <Text style={{fontWeight: "bold"}}>Ev</Text>
                    <Text style={{flex: 1, fontWeight: "500", color: "#6E7480"}} numberOfLines={1}>Dedepaşa Bulvarı
                        Yenişehir Mahallesi... </Text>
                    <Entypo name="chevron-right" size={24} color="#5D3EBD"/>
                </View>
            </View>
            <View style={styles.headerTwo}>
                <Text style={{color: "#5D3EBD", fontWeight: "500", fontSize: 12}}>TVS</Text>
                <Text style={{fontWeight: "700", color: "#5D3EBD", fontSize: 20}}>15<Text
                    style={{fontSize: 16}}>dk</Text> </Text>

            </View>
        </View>
    )
}

export default HeaderMain;
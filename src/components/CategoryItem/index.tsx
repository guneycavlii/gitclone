import React, {useState} from "react";
import {Text, View, Image, FlatList, Dimensions, TouchableOpacity} from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import {Category} from "../../models";

const {width, height} = Dimensions.get("window");

type categoryItemProps = {
    item: Category
}
const CategoryItem = ({item}:categoryItemProps) => {

    return (
        <View style={{ alignItems:"center", justifyContent: "center"}}>
            <TouchableOpacity style={{ width:width*0.25,  height:width*0.24, marginVertical:10, alignItems:"center", justifyContent: "space-between"}}>
                <Image style={{width:width*0.20,height: width * 0.20, borderRadius: 8}} source={{uri: item.src}}/>
                <Text style={{fontSize:12,color:"#616161", fontWeight:"500"}}>{item.name}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default CategoryItem;
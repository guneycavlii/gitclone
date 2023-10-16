import React from "react";
import {Text, View, Image, ScrollView} from "react-native";
import styles from "./styles";
import {Entypo} from "@expo/vector-icons";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem";
import MainCategories from "../../components/MainCategories";

const HomeScreen = () => {
    return (
        <ScrollView style={{backgroundColor: "#f5f5f5"}}>
            <HeaderMain/>
            <BannerCarousel/>
            <MainCategories/>
        </ScrollView>
    )
}

export default HomeScreen;
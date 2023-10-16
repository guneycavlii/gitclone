import React, {useState} from "react";
import {Text, View, Image, FlatList, Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");
const BannerCarousel = () => {

    const [banners, setBanners] = useState<any>([
        {
            id: 1.1,
            image:    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"
        },
        {
            id: 2.1,
            image:  "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg"
        },
        {
            id: 3.1,
            image: "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg"
        },
        {
            id: 4.1,
            image:  "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg"
        }
    ])


    return (
        <FlatList snapToInterval={width} snapToAlignment={"center"} decelerationRate={"fast"} showsHorizontalScrollIndicator={false} horizontal data={banners} renderItem={({item}) => (
            <View>
                <Image style={{width:width,height: height * 0.25}} resizeMode="stretch" source={{uri: item.image}}/>
            </View>
        )} keyExtractor={item => item.id.toString()}>

        </FlatList>
    )
}

export default BannerCarousel;
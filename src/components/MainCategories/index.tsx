import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import CategoryItem from "../CategoryItem";
import categoriesGetir from "../../../assets/categoriesGetir";
import {Category} from "../../models";

const MainCategories = () => {

    const [categories, setCategories] = useState<Category[]>(categoriesGetir)

    return (
        <View style={styles.listContainer}>
            {categories.map((category) => (
                <CategoryItem key={category.id} item={category}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({

    listContainer: {

        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',

    }
}
)

export default MainCategories;
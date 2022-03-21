import React from "react";

import {ScrollView} from "react-native";

import { categories } from "../../utils/categories";
import {Category} from "../Category";

import {styles} from "./style";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false } : Props) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
            style={styles.container} >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        icon={category.icon}
                        title={category.title}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox
                    />
                ))
            }
        </ScrollView>
    )
}

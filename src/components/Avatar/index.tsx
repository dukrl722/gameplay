import React from "react";

import {Image, Text, View} from "react-native";

import {styles} from "./style";
import {theme} from "../../global/styles/theme";
import {LinearGradient} from "expo-linear-gradient";

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage } : Props) {
    const { secondary50, secondary70 } = theme.colors;

    return (
        <LinearGradient style={styles.container} colors={[secondary50, secondary70]} >
            <Image source={{uri: urlImage}} style={styles.avatar} />
        </LinearGradient>
    )
}

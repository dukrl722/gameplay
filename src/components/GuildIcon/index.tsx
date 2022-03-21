import React from "react";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";

import { Image } from "react-native";

import {styles} from "./style";

export function GuildIcon() {

    const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyPAuEjrIqTYjn08nxUExv3N59CD6zintLY5Pfkvf-0TjReH0q6RpkNlkYLGemGslP18&usqp=CAU'

    return (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
    )
}

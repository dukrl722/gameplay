import React, {useState} from "react";
import {ImageBackground, View, Text, FlatList, TextInput, TextInputProps} from "react-native";

import {styles} from "./style";

export function TextArea({...rest} : TextInputProps) {

    return (
        <TextInput
            style={styles.container}
            {...rest}
        />
    )
}

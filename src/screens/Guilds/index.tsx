import React, {useState} from "react";
import {ImageBackground, View, Text, FlatList, KeyboardAvoidingView, Platform, ScrollView} from "react-native";

import {styles} from "./style";
import {Guild, GuildProps} from "../../components/Guild";
import {ListDivider} from "../../components/ListDivider";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect } : Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={guilds}
                renderItem={({item}) => (
                    <Guild onPress={() => handleGuildSelect(item)} data={item} />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{paddingBottom: 68, paddingTop: 104}}
                ListHeaderComponent={() => <ListDivider isCentered />}
                style={styles.guilds}
            />
        </View>
    )
}

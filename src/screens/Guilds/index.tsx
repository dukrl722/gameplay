import React, {useEffect, useState} from "react";
import {ImageBackground, View, Text, FlatList, KeyboardAvoidingView, Platform, ScrollView} from "react-native";

import {styles} from "./style";
import {Guild, GuildProps} from "../../components/Guild";
import {Load} from "../../components/Load";
import {ListDivider} from "../../components/ListDivider";
import { api } from "../../services/api";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect } : Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, [])

    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
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
            }
        </View>
    )
}

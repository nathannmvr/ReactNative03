import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupGetAll } from "../storage/group/groupGetAll";
import { useCallback, useState } from "react";

export default function Home() {
    const [groups, setGroups] = useState([]);
    async function fetchGroups(){
        try {
            const data = await groupGetAll();
            setGroups(data);
        } catch (error) {
            
        }
    }
    useFocusEffect(useCallback(() => {
        fetchGroups();
    },[])
    )

    const navigation = useNavigation();

    function handleAddGroup(){
        navigation.navigate('criar',{group: 'MouraTech'});
    }

    function mapGroups(groupName) {
        return (
            <TouchableOpacity activeOpacity={1} className="mb-[15px] rounded-md bg-gray-700 h-[85px] w-[310px] flex-row items-center justify-center">
                <Text className="color-gray-200 text-[20px]">{groupName}</Text>
            </TouchableOpacity>
        );
    }

    
    return(
        <View className="flex-1 items-center bg-gray-800">
            <Text className="color-white mt-[100px] text-xl font-bold">Turmas</Text>
            <Text className="color-gray-400 mt-[5px]">Jogue com a sua turma</Text>
            <ScrollView className="flex-1 mt-[30px]">
                {groups.map((item) => mapGroups(item))}
            </ScrollView>
            <TouchableOpacity activeOpacity={1} className="rounded-md bg-green-700 h-[50px] w-[310px] flex-row items-center justify-center mb-[20px]" onPress={handleAddGroup}>
                <Text className="color-white text-[20px]">Criar nova turma</Text>
            </TouchableOpacity>
        </View>
    );
}
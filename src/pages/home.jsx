import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const navigation = useNavigation();
    function handleAddGroup(){
        navigation.navigate('criar',{group: 'MouraTech'});
    }

    return(
        <View className="flex-1 items-center bg-gray-800">
            <Text className="color-white mt-[100px] text-xl font-bold">Turmas</Text>
            <Text className="color-gray-400 mt-[5px]">Jogue com a sua turma</Text>
            <ScrollView className="flex-1 mt-[30px]">
                <TouchableOpacity activeOpacity={1} className="rounded-md bg-gray-700 h-[85px] w-[310px] flex-row items-center justify-center">
                    <Text className="color-gray-200 text-[20px]">Nome da turma</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} className="rounded-md bg-gray-700 mt-[10px] h-[85px] w-[310px] flex-row items-center justify-center">
                    <Text className="color-gray-200 text-[20px]">Nome da turma</Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity activeOpacity={1} className="rounded-md bg-green-700 h-[50px] w-[310px] flex-row items-center justify-center mb-[20px]" onPress={handleAddGroup}>
                <Text className="color-white text-[20px]">Criar nova turma</Text>
            </TouchableOpacity>
        </View>
    );
}
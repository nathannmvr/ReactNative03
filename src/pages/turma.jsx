import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Turma() {
    const route = useRoute();
    const navigation = useNavigation();
    return (
        <View className="flex-1 items-center bg-gray-800">
            <View className="mt-[30px] w-[310]">
                <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                    <Image source={require('../img/voltar.png')} className="h-[40px] w-[40px]"></Image>
                </TouchableOpacity>
            </View>
            <Text className="color-white text-xl font-bold mt-[30px]">{route.params.group}</Text>
            <Text className="color-gray-400 mt-[5px]">Adicione a galera e Separe os times</Text>
            <View className="flex-row mt-7">
                <TextInput className="items-start justify-start bg-gray-900 text-gray-400 w-[260px] rounded-l-md pl-4" placeholder="Nome do participante" placeholderTextColor={"#9ca3af"}  />
                <TouchableOpacity activeOpacity={1} className="bg-gray-900 flex-row items-center justify-center h-[50px] w-[50px] rounded-r-md">
                    <Text className="color-green-700 text-[32px]">+</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row w-[310px] mt-6">
                <View className="flex-row flex-1">
                    <TouchableOpacity className="mr-2 border-2 p-2 border-green-500 rounded-sm">
                        <Text className="color-white font-bold">TIME A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="mr-2 border-2 p-2 border-gray-800">
                        <Text className="color-gray-200 font-bold">TIME B</Text>
                    </TouchableOpacity>
                </View>
                <Text className="border-2 p-2 border-gray-800 text-gray-200 font-bold">2</Text>
            </View>
            <ScrollView>
                <View className="flex-row mt-7">
                    <View className="items-center justify-center bg-gray-700 text-gray-400 text-center w-[260px] rounded-l-md">
                        <Text className="color-gray-200">Rodrigo Gonçalves</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} className="bg-gray-700 flex-row items-center justify-center h-[50px] w-[50px] rounded-r-md">
                        <Text className="color-red-800 text-[20px]">X</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row mt-3">
                    <View className="items-center justify-center bg-gray-700 text-gray-400 text-center w-[260px] rounded-l-md">
                        <Text className="color-gray-200">Rodrigo Gonçalves</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} className="bg-gray-700 flex-row items-center justify-center h-[50px] w-[50px] rounded-r-md">
                        <Text className="color-red-800 text-[20px]">X</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity activeOpacity={1} className="rounded-md bg-red-500 h-[50px] w-[310px] flex-row items-center justify-center mb-3">
                <Text className="color-white font-bold">Remover turma</Text>
            </TouchableOpacity>
        </View>
    );
}
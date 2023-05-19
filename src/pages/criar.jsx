import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Criar() {
    return (
        <View className="flex-1 justify-center items-center bg-gray-800">
            <View className="mt-[30px] w-[310]">
                <TouchableOpacity>
                    <Image source={require('../img/voltar.png')} className="h-[40px] w-[40px]"></Image>
                </TouchableOpacity>
            </View>
            <View className="flex-1 justify-center items-center bg-gray-800 mb-[70px]">
                <Text className="color-white text-xl font-bold">Nova Turma</Text>
                <Text className="color-gray-400 mt-[5px]">Crie uma turma para adicionar pessoas</Text>
                <TextInput className="mt-7 rounded-md w-[310px] h-[50px] items-center justify-center bg-gray-900 text-gray-400 text-center" placeholder="Nome da turma" placeholderTextColor={"#9ca3af"} />
                <TouchableOpacity activeOpacity={1} className="rounded-md bg-green-700 mt-[25px] h-[50px] w-[310px] flex-row items-center justify-center">
                    <Text className="color-white text-[16px] font-bold">Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
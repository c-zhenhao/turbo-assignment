import React from 'react';
import { View, Text, Image } from 'react-native';

interface CardProps {
  image?: any; // or ImageSourcePropType
  title: string;
  body: string;
  subtitle: string;
}

export interface CardType {
  title: string;
  image: any; // Using 'any' for the image require statement
  body: string;
  subtitle: string;
}

export function Card({ image, title, body, subtitle }: CardProps) {
  return (
    <View className="my-4 h-32 flex-row rounded-xl bg-[#1F1545] p-3">
      {/* left col image */}
      <View className="align-center mr-4 h-full w-16 justify-center">
        <Image source={image} className="h-full w-full" resizeMode="contain" />
      </View>

      {/* right col text stacked */}
      <View className="align-center flex-1 justify-center">
        <Text className="text-lg font-bold text-white">{title}</Text>
        <Text className="text-gray-500">{body}</Text>
        <Text className="mt-2 text-purple-400">{subtitle}</Text>
      </View>
    </View>
  );
}

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface FooterProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
}

export function OnboardingFooter({ currentPage, totalPages, onNext }: FooterProps) {
  return (
    <View className="w-full border-t border-white/10 bg-[#130739] p-4">
      <View className="flex-row items-center justify-between">
        {/* pagination dots */}
        {/* could use renimated to slide the dots later */}
        <View className="flex-row">
          {Array.from({ length: totalPages }).map((_, index) => {
            const isActive = index === currentPage;
            const dotClass = isActive
              ? 'mr-2 h-2 w-7 rounded-full bg-white'
              : 'mr-2 h-2 w-2 rounded-full bg-white/25';
            return <View key={index} className={dotClass} />;
          })}
        </View>

        {/* next page button */}
        <TouchableOpacity onPress={onNext} className="rounded-full bg-purple-600 px-8 py-4">
          <Text className="font-semibold text-white">See how it works {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

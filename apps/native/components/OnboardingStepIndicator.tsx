import React from 'react';
import { View, Text } from 'react-native';

interface StepIndicatorProps {
  currentPage: number;
  alignRight?: boolean;
}

export function OnboardingStepIndicator({ currentPage, alignRight = false }: StepIndicatorProps) {
  // the main oboarding screen dont have step
  if (currentPage === 0) return null;

  return (
    <View
      className={`items-center bg-[#130739] p-6 py-4 ${alignRight ? 'flex-row-reverse' : 'flex-row'}`}>
      <View className="h-8 w-8 items-center justify-center rounded-full bg-[#802EFF]">
        <Text className="font-bold text-white">{currentPage}</Text>
      </View>
      <View className="h-0.5 w-full bg-[#802EFF]" />
    </View>
  );
}

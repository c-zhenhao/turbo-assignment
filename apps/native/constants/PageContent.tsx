import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// default "next page" button
export const createDefaultButton = (text: string, onPress: () => void) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between rounded-full bg-[#802EFF] p-4">
    <Text className="font-semibold text-white">{text}</Text>
    <MaterialIcons name="chevron-right" size={24} color="white" />
  </TouchableOpacity>
);

// now trying with turbo repo button
export const createTurboButton = (text: string, onPress: () => void) =>
  // the imported ui button should be here
  null;

export type PageContentItem = {
  ctaText: string;
  renderButton?: (onPress: () => void) => React.ReactNode;
};

// Page content array
export const pageContent: PageContentItem[] = [
  {
    ctaText: 'See how it works',
    renderButton: (onPress) => createDefaultButton('See how it works', onPress),
  },
  {
    ctaText: '',
    renderButton: (onPress) => createDefaultButton('', onPress),
  },
  {
    ctaText: 'Get Started',
    renderButton: (onPress) => createDefaultButton('Get Started', onPress),
  },
];

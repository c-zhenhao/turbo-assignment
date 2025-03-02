import React from 'react';
import { View } from 'react-native';

import { PageContentItem } from '../constants/PageContent';

interface OnboardingFooterProps {
  currentPage: number;
  totalPages: number;
  pageContent: PageContentItem[];
  onNext: () => void;
}

export function OnboardingFooter({
  currentPage,
  totalPages,
  pageContent,
  onNext,
}: OnboardingFooterProps) {
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

        {/* custom button or default button */}
        {pageContent[currentPage].renderButton
          ? pageContent[currentPage].renderButton(onNext)
          : null}
      </View>
    </View>
  );
}

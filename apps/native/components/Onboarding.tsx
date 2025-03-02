import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from './Card';
import { OnboardingFooter } from './OnboardingFooter';
import { OnboardingStepIndicator } from './OnboardingStepIndicator';
import { cards } from '../constants/CardContent';
import { categories } from '../constants/CategoryContent';
import { pageContent } from '../constants/PageContent';
import { CardItem } from '../types/CardTypes';

export default function OnboardingScreen() {
  const [page, setPage] = useState<number>(0);
  const totalPages = pageContent.length;

  const handleNextPage = () => {
    const nextPage = page === totalPages - 1 ? 0 : page + 1;
    setPage(nextPage);
  };

  // map so we can add more properties later
  const [selectedIndex, setSelectedIndex] = useState<number>(categories.length - 1); // default to the last one as the "show all category"

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#130739' }}>
      <OnboardingStepIndicator currentPage={page} alignRight={page % 2 === 0} />

      {/* content container */}
      <View className="align-center flex-1 bg-[#130739] p-2">
        {/* page 0 */}
        {page === 0 && (
          <View className="flex-1 items-center justify-center p-8">
            {/* header text */}
            <Text className="text-4xl font-bold text-white">
              HEY
              {/* add linear gradient later */}
              <Text className="text-4xl font-bold text-[#802EFF]">MAX</Text>
            </Text>

            {/* this image is actually a mp4, change later, need to install some dependencies for video to play */}
            <Image
              source={require('../assets/map.png')}
              className="m-10 h-48 w-full"
              resizeMode="cover"
            />

            {/* subheader */}
            <Text className="mt-10 text-center text-4xl font-bold text-white">
              Shop your way to a<Text className="text-[#802EFF]"> Dream Vacation</Text>
            </Text>

            {/* subbody */}
            <Text className="mt-4 max-w-xs text-center text-base text-gray-100">
              Turn your expenses into dream vacations by earning miles every time you shop
            </Text>
          </View>
        )}

        {/* page 1 */}
        {page === 1 && (
          <View className="p-4">
            {/* header */}
            <Text className="py-text-left text-4xl font-bold text-white">
              Shop your favourite brands, earn miles
            </Text>

            {/* cateogry pill */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-4 flex-row pb-2">
              {categories && categories.length > 0
                ? categories.map((category, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setSelectedIndex(index)}
                      className={`mr-3 rounded-full bg-[#802EFF] px-4 py-2 ${selectedIndex === index ? 'opacity-100' : 'opacity-40'}`}>
                      <Text className="text-white">{category.name}</Text>
                    </TouchableOpacity>
                  ))
                : null}
            </ScrollView>

            {/* brand image collage */}
            <View className="mt-6 flex-row flex-wrap justify-between">
              <View className="mb-4 h-24 w-[48%] items-center justify-center rounded-lg bg-[#EE4E2D]">
                <Text className="text-lg font-semibold text-white">Shopee</Text>
              </View>

              <View className="mb-4 h-24 w-[48%] items-center justify-center rounded-lg bg-[#0E136B]">
                <Text className="text-lg font-semibold text-white">Lazada</Text>
              </View>

              <View className="mb-4 h-24 w-[48%] items-center justify-center rounded-lg bg-[#CE0F26]">
                <Text className="text-lg font-semibold text-white">H&M</Text>
              </View>

              <View className="mb-4 h-24 w-[48%] items-center justify-center rounded-lg bg-white">
                <Text className="text-lg font-semibold text-red-500">Uniqlo</Text>
              </View>

              <View className="mb-4 h-24 w-[48%] items-center justify-center rounded-lg bg-[#DE206A]">
                <Text className="text-lg font-semibold text-white">Fave</Text>
              </View>

              <View className="mb-4 h-24 w-[48%] items-center justify-center rounded-lg bg-white">
                <Text className="text-lg font-semibold text-black">Amazon.sg</Text>
              </View>

              <View className="mb-4 h-24 w-[48%] items-center justify-center rounded-lg bg-[#0E3578]">
                <Text className="text-lg font-semibold text-white">FairPrice</Text>
              </View>
            </View>
          </View>
        )}

        {/* page 2 */}
        {page === 2 && (
          <View className="p-4">
            {/* header */}
            <Text className="pb-4 text-right text-4xl font-bold text-white">Redeem your trip</Text>

            {/* cards */}
            <View>
              {cards && cards.length > 0
                ? cards.map((card: CardItem, index: number) => <Card key={index} {...card} />)
                : null}
            </View>
          </View>
        )}
      </View>

      <OnboardingFooter
        currentPage={page}
        totalPages={totalPages}
        pageContent={pageContent}
        onNext={handleNextPage}
      />
    </SafeAreaView>
  );
}

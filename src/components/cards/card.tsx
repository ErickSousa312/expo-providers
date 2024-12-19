// src/components/CardsCustom.tsx
import { CardsCustomProps } from "@/@types/CardsCustomProps";
import React from "react";
import { View, ViewStyle, StyleProp, DimensionValue } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text, ContainerCard } from "./style";
import GroupIcon from "../svgs/groupIcon";

export const CardsCustom: React.FC<CardsCustomProps> = ({
  width,
  height,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  data,
}) => {
  return (
    <ScrollView
      style={{
        width: width ? width : "100%",
        marginTop: marginTop ? marginTop : 0,
        marginLeft: marginLeft ? marginLeft : 0,
        marginRight: marginRight ? marginRight : 0,
        marginBottom: marginBottom ? marginBottom : 0,
      }}
    >
      {data?.map((item, index) => (
        <ContainerCard key={index}>
          <GroupIcon></GroupIcon>
          <Text>{item.title}</Text>
        </ContainerCard>
      ))}
    </ScrollView>
  );
};

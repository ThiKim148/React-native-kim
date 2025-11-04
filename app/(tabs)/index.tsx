import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import HelloForm from '../../components/HelloForm';
import HelloFormState from '../../components/HelloFormState';
import ParentChildScreen from '../../components/ParentChildScreen';
import PTBN from '../../components/PTbacnhat';
import Calculator from '@/components/Calculator';
import CalculatorBMI from '@/components/CaculatorBMI';
import BMI from '@/components/BMI';
import Layout from '@/components/Layout';
import GridLayout from '@/components/GridLayout';
import LayoutProduct from '@/components/LayoutProduct';
import GridLayoutMap from '@/components/GridLayoutMap';
import ProductGrid from '@/components/ProductGrid';
import ProductFlatList from '@/components/ProductFlatList';
import Vidu from '@/components/vidu';
import BTMang from '@/components/BTMang';
import BTMang1 from '@/components/BTMang1';
import Danhba from '@/components/Danhba';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Trang chủ</Text>
      {/* <HelloForm name="Kim" /> */}
      {/* <HelloFormState /> */}
      {/* <ParentChildScreen /> */}
      {/* {<PTBN />} */}
      {/* {<Calculator />} */}
      {/* <CalculatorBMI /> */}
      {/* <BMI /> */}
      {/* <Layout />  */}
      {/* <GridLayout />   */}
      {/* <LayoutProduct /> */}
      {/* <GridLayoutMap /> */}
      {/* <ProductGrid /> */}
      {/* <ProductFlatList />
      <Vidu /> */}
      {/* <BTMang /> */}
      {/* <BTMang1 /> */}
      <Danhba />
    </View>
  );
}
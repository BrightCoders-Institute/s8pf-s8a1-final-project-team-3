import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import Kitchen from "../assets/icons/chef-hat.svg";
import Gaming from "../assets/icons/controller.svg";
import Home from "../assets/icons/sofa.svg";
import School from "../assets/icons/school.svg";
import Workout from "../assets/icons/gym.svg";

const Category = ({ icon, label, backgroundColor, borderColor, onPress }) => (
  <TouchableOpacity style={styles.category} onPress={onPress}>
    <View style={[styles.iconContainer, { backgroundColor, borderColor }]}>
      {icon}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const Categories = () => {
  const navigation = useNavigation(); // Usa useNavigation para obtener el objeto de navegación

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.container}>
      <Category onPress={() => navigateTo('KitchenScreen')} icon={<Kitchen />} label="Kitchen" backgroundColor="#FFECE8" borderColor="#F36501" />
      <Category onPress={() => navigateTo('GamingScreen')} icon={<Gaming />} label="Gaming" backgroundColor="#F1EDFC" borderColor="#6663FB" />
      <Category onPress={() => navigateTo('HomeScreenProducts')} icon={<Home />} label="Home" backgroundColor="#FFF6E5" borderColor="#FA9A2E" />
      <Category onPress={() => navigateTo('SchoolScreen')} icon={<School />} label="School" backgroundColor="#E5ECF4" borderColor="#214772" />
      <Category onPress={() => navigateTo('WorkoutScreen')} icon={<Workout />} label="Workout" backgroundColor="#E8F1FF" borderColor="#005EFE" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter',
    paddingTop: 4,
  },
});

export default Categories;

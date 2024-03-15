
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Kitchen from "../assets/icons/chef-hat.svg";
import Gaming from "../assets/icons/controller.svg";
import Home from "../assets/icons/sofa.svg";
import School from "../assets/icons/school.svg";
import Workout from "../assets/icons/gym.svg";

const Category = ({ icon, label, backgroundColor, borderColor }) => (
  <TouchableOpacity style={styles.category}>
    <View style={[styles.iconContainer, { backgroundColor, borderColor }]}>
      {icon}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const Categories = () => (
  <View style={styles.container}>
    <Category icon={<Kitchen />} label="Kitchen" backgroundColor="#FFECE8" borderColor="#F36501" />
    <Category icon={<Gaming />} label="Gaming" backgroundColor="#F1EDFC" borderColor="#6663FB" />
    <Category icon={<Home />} label="Home" backgroundColor="#FFF6E5" borderColor="#FA9A2E" />
    <Category icon={<School />} label="School" backgroundColor="#E5ECF4" borderColor="#214772" />
    <Category icon={<Workout />} label="Workout" backgroundColor="#E8F1FF" borderColor="#005EFE" />
  </View>
);

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





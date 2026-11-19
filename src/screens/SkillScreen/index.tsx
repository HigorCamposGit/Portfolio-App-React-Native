import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { SkillBar } from '../../components/SkillBar';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'SkillScreen'>;

export function SkillScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
  source={require('../../assets/Higor-Campos-Git.png')}
  style={styles.avatar}
/>
      <Text style={styles.name}>Higor de Campos</Text>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Front-end</Text>
        <SkillBar name="HTML5 & CSS3" levelLabel="Avançado" percentage={90} />
        <SkillBar name="JavaScript / TypeScript" levelLabel="Intermediário / Avançado" percentage={85} />
        <SkillBar name="React Native & Expo" levelLabel="Intermediário" percentage={75} />
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Back-end</Text>
        <SkillBar name="Node.js" levelLabel="Intermediário" percentage={80} />
        <SkillBar name="APIs RESTful" levelLabel="Intermediário" percentage={80} />
        <SkillBar name="Git & GitHub" levelLabel="Avançado" percentage={85} />
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar ao Perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
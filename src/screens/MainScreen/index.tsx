import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

export function MainScreen({ navigation }: Props) {
  const handleOpenURL = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Aviso', 'Não foi possível abrir o link neste dispositivo.');
    }
  };

  const handleEmailPress = () => {
    Alert.alert(
      'Contato por E-mail',
      'Pronto para receber oportunidades e conexões!'
    );
  };

  return (
    <View style={styles.container}>
      <Image
  source={require('../../assets/Higor-Campos-Git.png')}
  style={styles.avatar}
/>

      <Text style={styles.name}>Higor de Campos</Text>
      <Text style={styles.role}>Desenvolvedor Full-Stack</Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() =>
            handleOpenURL('https://www.linkedin.com/in/higor-de-campos-a3187b16b/')
          }
        >
          <Text style={styles.linkButtonText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => handleOpenURL('https://github.com/HigorCamposGit')}
        >
          <Text style={styles.linkButtonText}>GitHub (@HigorCamposGit)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={handleEmailPress}
        >
          <Text style={styles.linkButtonText}>E-mail</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.skillsButton}
        onPress={() => navigation.navigate('SkillScreen')}
      >
        <Text style={styles.skillsButtonText}>Ver Árvore de Habilidades</Text>
      </TouchableOpacity>
    </View>
  );
}
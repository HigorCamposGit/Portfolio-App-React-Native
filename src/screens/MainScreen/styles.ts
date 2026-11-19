import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#38BDF8',
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  role: {
    fontSize: 15,
    color: '#94A3B8',
    marginBottom: 32,
  },
  linksContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 28,
  },
  linkButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '600',
  },
  skillsButton: {
    width: '100%',
    backgroundColor: '#38BDF8',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  skillsButtonText: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
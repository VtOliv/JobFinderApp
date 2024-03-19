import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

// or any files within the Snack
import AssetExample from '../AssetExample';

function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <AssetExample />

        <View style={styles.searchBar}>
          <TextInput style={styles.input} />
          <TouchableOpacity>
            <Feather name="search" size={40} color="grey" />
          </TouchableOpacity>
        </View>

        <Card style={styles.contentCard}>
          <Text style={styles.paragraph}>Card Example</Text>
        </Card>

        <Card style={styles.contentCard}>
          <Text style={styles.paragraph}>Card Example</Text>
        </Card>

        <Card style={styles.contentCard}>
          <Text style={styles.paragraph}>Card Example</Text>
        </Card>

        <Card style={styles.contentCard}>
          <Text style={styles.paragraph}>Card Example</Text>
        </Card>

        <Card style={styles.contentCard}>
          <Text style={styles.paragraph}>Card Example</Text>
        </Card>
      </Card>
    </SafeAreaView>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    width: 315,
    marginLeft: 12,
    padding: 8,
  },
  contentCard: {
    backgroundColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 12,
  },
  searchBar: {
    flexDirection: 'row',
  },
});

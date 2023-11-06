import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import Api, { UsersApi } from '../../services/Api';

const Tela1 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Api.get('/users');
        console.log('Response data:', response.data);
        setUsers(response.data.users || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userContainer} key={item.id}>
              <Text style={styles.userInfo}>{`First Name: ${item.firstName}`}</Text>
              <Text style={styles.userInfo}>{`Last Name: ${item.lastName}`}</Text>
              <Text style={styles.userInfo}>{`Age: ${item.age}`}</Text>
              <Text style={styles.userInfo}>{`Gender: ${item.gender}`}</Text>
              <Divider />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  userContainer: {
    marginBottom: 10,
  },
  userInfo: {
    marginBottom: 5,
  },
});

export default Tela1;
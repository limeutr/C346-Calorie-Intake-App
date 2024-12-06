import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [foodList, setFoodList] = useState([]);
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const navigation = useNavigation();

    const handleAddFood = () => {
        if (!foodName || !calories) {
            Alert.alert('Error', 'Please enter both food name and calories.');
            return;
        }

        if (isNaN(calories) || calories <= 0) {
            Alert.alert('Error', 'Calories must be a positive number.');
            return;
        }

        const newFood = { id: Date.now().toString(), name: foodName, calories: parseInt(calories) };
        setFoodList([...foodList, newFood]);
        setFoodName('');
        setCalories('');
    };

    const handleRemoveFood = (id) => {
        setFoodList(foodList.filter((food) => food.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name of food:</Text>
            <TextInput
                style={styles.input}
                value={foodName}
                onChangeText={setFoodName}
                placeholder="e.g., Apple"
            />
            <Text style={styles.label}>Calories in cal:</Text>
            <TextInput
                style={styles.input}
                value={calories}
                onChangeText={setCalories}
                placeholder="e.g., 95"
                keyboardType="numeric"
            />
            <Text></Text>
            <Button title="Add Food" onPress={handleAddFood} />
            <Text></Text>

            <FlatList
                style={styles.list}
                data={foodList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => handleRemoveFood(item.id)}
                    >
                        <Text style={styles.listItem}>
                            {item.name}: {item.calories} cal
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity
                style={styles.summaryButton}
                onPress={() => navigation.navigate('Summary', { foodList })}
            >
                <Text style={styles.summaryText}>Calculate Calories</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontSize: 16, marginTop: 20 },
    input: { borderWidth: 1, padding: 10, marginTop: 5, borderRadius: 5 },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    foodText: { fontSize: 16 },
    calorieText: { fontSize: 16, color: '#555' },
    summaryButton: {
        marginTop: 20,
        backgroundColor: '#66aede',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    summaryText: { color: 'white', fontSize: 16, fontWeight: 'bold' },

});

export default Home;

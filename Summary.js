import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = ({ route }) => {
    const { foodList } = route.params;
    const totalCalories = foodList.reduce((total, item) => total + item.calories, 0);

    const recommendedCalories = {
        male: 2500,
        female: 2000,
    };

    const exceedsMale = totalCalories > recommendedCalories.male ? 'Yes' : 'No';
    const exceedsFemale = totalCalories > recommendedCalories.female ? 'Yes' : 'No';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calorie Intake Summary</Text>
            <Text style={styles.summaryText}>Total Calories: {totalCalories} kcal</Text>
            <Text style={styles.summaryText}>
                Exceeds Male Recommended Intake (2500 kcal): {exceedsMale}
            </Text>
            <Text style={styles.summaryText}>
                Exceeds Female Recommended Intake (2000 kcal): {exceedsFemale}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    summaryText: { fontSize: 18, marginBottom: 10 },
});

export default Summary;

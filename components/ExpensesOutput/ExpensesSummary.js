import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
 
export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum =
    expenses?.reduce((sum, expense) => sum + expense.amount, 0) ?? 0;

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary100,
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4, // subtle shadow (Android)
    shadowColor: "#000", // subtle shadow (iOS)
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.gray500,
  },
  sum: {
    fontSize: 18,
    fontWeight: "600",
    color: GlobalStyles.colors.primary700,
  },
});

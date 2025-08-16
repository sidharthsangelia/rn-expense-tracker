import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { DUMMY_EXPENSES } from "../../constants/expenses";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesOutput({ expenses, expensePeriod }) {

  return (
    <View style={styles.container}>
    <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensePeriod}/>
     <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
    padding: 24,
    backgroundColor: GlobalStyles.colors.gray100,
    flex:1
 }
});

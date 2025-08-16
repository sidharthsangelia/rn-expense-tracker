import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

export default function ExpensesList({ expenses }) {
  const navigation = useNavigation();
  function renderExpenseItem({ item }) {
    const formattedDate = item.date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    function expensePressHandler() {
      navigation.navigate("ManageExpense", {
        expenseId : item.id
      });
    }

    return (
      <Pressable
        onPress={expensePressHandler}
        style={({ pressed }) => [styles.expenseItem, pressed && styles.pressed]}
        android_ripple={{ color: GlobalStyles.colors.primary200 }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: "hidden", // ensures ripple effect respects rounded corners
    backgroundColor: GlobalStyles.colors.primary100,

    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    // elevation (Android)
    elevation: 3,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: GlobalStyles.colors.gray700,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: GlobalStyles.colors.gray500,
  },
  amountContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    minWidth: 80,
    alignItems: "center",
  },
  amount: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  pressed: {
    opacity: 0.85, // subtle fade effect
  },
});

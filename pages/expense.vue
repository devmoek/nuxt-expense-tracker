<template>
  <div class="max-w-lg h-svh justify-center align-center m-auto">
    <ExpenseBalance :total="+total" />
    <ExpenseIncomeExpenses :income="+income" :expenses="+expenses" />
    <ExpenseTransactionList
      :transactions="transactions"
      @transactionDeleted="handleTransactionDeleted"
    />
    <ExpenseAddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<script setup>
const transactions = ref([]);

// Load transactions from local storage on component mount
onMounted(() => {
  const storedTransactions = localStorage.getItem("transactions");
  if (storedTransactions) {
    transactions.value = JSON.parse(storedTransactions);
  }
});

// Get total
const total = computed(() => {
  return transactions.value.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
});

// Get income
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

// Get expenses
const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

// Add transaction
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
    date: new Date(),
  });

  saveTransactionsToLocalStorage();

  // toast.success("Transaction added successfully");
  console.log("Transaction added successfully");
};

// Generate unique ID
const generateUniqueId = () => {
  return crypto.randomUUID();
};

// Delete transaction
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );

  saveTransactionsToLocalStorage();

  // toast.success("Transaction deleted successfully");
  console.log("Transaction deleted successfully");
};

// Save to local storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>

<template>
  <div class="max-w-2xl mx-auto my-8 p-4 rounded-md border-2 border-gray-800">
    <h3 class="text-2xl font-bold mb-6 dark:text-white text-black">History</h3>
    <div class="flex flex-wrap justify-between mb-6">
      <div class="flex items-center gap-2">
        <label for="filter" class="font-medium dark:text-white text-black"
          >Filter by:</label
        >
        <select
          id="filter"
          v-model="filterBy"
          class="bg-white border border-gray-300 rounded py-2 px-3 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div class="flex items-center gap-2">
        <label for="sort" class="font-medium dark:text-white text-black"
          >Sort by:</label
        >
        <select
          id="sort"
          v-model="sortBy"
          class="bg-white border border-gray-300 rounded py-2 px-3 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="date">Date</option>
          <option value="amount-low-high">Amount (low to high)</option>
          <option value="amount-high-low">Amount (high to low)</option>
          <option value="name-a-z">Name (A to Z)</option>
          <option value="name-z-a">Name (Z to A)</option>
        </select>
      </div>
    </div>
    <ul id="list" class="list-none p-0">
      <li
        v-for="transaction in filteredTransactions"
        :key="transaction.id"
        :class="
          transaction.amount < 0
            ? 'border-2 border-red-500'
            : 'border-2 border-green-500'
        "
        class="flex rounded-md shadow-md border-2 border-gray-800 justify-between items-center p-4 mb-2 rounded-lg"
      >
        <span class="text-gray-600 dark:text-gray-100 font-normal italic">{{
          formattedDate(transaction.date)
        }}</span>
        <span class="text-gray-600 dark:text-gray-100 font-normal">{{
          transaction.text
        }}</span>
        <small class="text-gray-600 dark:text-gray-100 font-normal">
          <span>$</span>{{ transaction.amount }}
        </small>

        <button
          @click="deleteTransaction(transaction.id)"
          class="text-red-500 hover:text-red-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </li>
      <li
        v-if="filteredTransactions.length === 0"
        class="text-center text-gray-600 dark:text-gray-100 py-2"
      >
        No transactions yet
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const formattedDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString(); // Customize the format as needed
};

const sortBy = ref("date");
const filterBy = ref("all"); // Default filter value for showing all transactions

const sortedTransactions = computed(() => {
  let sorted = [];

  if (Array.isArray(props.transactions)) {
    sorted = [...props.transactions]; // Make a copy to avoid mutating original data

    if (sortBy.value === "date") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy.value === "amount-low-high") {
      sorted.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
    } else if (sortBy.value === "amount-high-low") {
      sorted.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
    } else if (sortBy.value === "name-a-z") {
      sorted.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortBy.value === "name-z-a") {
      sorted.sort((a, b) => b.text.localeCompare(a.text));
    }
  }

  return sorted;
});

const filteredTransactions = computed(() => {
  if (filterBy.value === "all") {
    return sortedTransactions.value; // Show all transactions without filtering
  } else if (filterBy.value === "income") {
    return sortedTransactions.value.filter(
      (transaction) => transaction.amount > 0
    );
  } else if (filterBy.value === "expense") {
    return sortedTransactions.value.filter(
      (transaction) => transaction.amount < 0
    );
  }
});

const emit = defineEmits(["transactionDeleted"]);
const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const deleteTransaction = (id) => {
  emit("transactionDeleted", id);
};
</script>

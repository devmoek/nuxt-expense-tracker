<template>
  <div
    class="flex justify-between items-center p-4 rounded-md shadow-md border-2 border-gray-800"
  >
    <div class="text-center">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Income
      </h4>
      <p id="money-plus" class="text-xl font-bold text-green-700">
        ${{ income }}
      </p>
    </div>
    <div class="text-center">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Expense
      </h4>
      <p id="money-minus" class="text-xl font-bold text-red-700">
        ${{ expenses }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>

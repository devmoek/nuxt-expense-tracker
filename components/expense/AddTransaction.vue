<template>
  <div class="rounded-md shadow-md border-2 border-gray-800 p-4 mb-4">
    <h3 class="text-2xl dark:text-white text-black dark:text-white font-semibold mb-4">Add new transaction</h3>
    <form
      id="form"
      @submit.prevent="onSubmit"
    >
      <div class="mb-4">
        <label
          class="block dark:text-white text-black text-sm font-bold mb-2"
          for="text"
        >
          Text
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 dark:text-black text-black leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="text"
          v-model="text"
          placeholder="Enter text..."
          @input="validateText"
        />
      </div>
      <div class="mb-6">
        <label class="block dark:text-white text-black text-sm font-bold mb-2" for="amount">
          Amount <small>(negative - expense, positive - income)</small>
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 dark:text-black text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="amount"
          v-model="amount"
          placeholder="Enter amount..."
          @input="validateAmount"
        />
      </div>
      <button
        class="btn bg-emerald-500 hover:bg-emerald-700 dark:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        :class="{
          'disabled-btn': isButtonDisabled,
          'opacity-50 cursor-not-allowed': isButtonDisabled,
        }"
        :disabled="isButtonDisabled"
      >
        Add transaction
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const text = ref("");
const amount = ref("");
const emit = defineEmits(["transactionSubmitted"]);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit("transactionSubmitted", transactionData);

  text.value = "";
  amount.value = "";
};

const validateText = () => {
  let max_length = 20;
  text.value = text.value.replace(/[^a-zA-Zа-яА-Я]/g, "");
  text.length = max_length;

  if (text.length > max_length) {
    console.log("max length reached--");
    text.value = text.value.substring(0, max_length);
  }
};

const validateAmount = () => {
  amount.value = amount.value.replace(/[^0-9.-]/g, "");
};

const isButtonDisabled = computed(() => {
  return !text.value && !amount.value;
});
</script>

<style scoped>
.disabled-btn:hover {
  cursor: not-allowed;
}
</style>

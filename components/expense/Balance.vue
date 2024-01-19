<template>
  <div
    class="flex flex-col items-center justify-center p-6"
  >
    <h4 class="text-xl font-semibold dark:text-white text-black mb-2">Your Balance</h4>
    <strong id="balance" class="text-3xl font-bold text-green-700">
      ${{ total }}
    </strong>
  </div>
</template>

<script setup>
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

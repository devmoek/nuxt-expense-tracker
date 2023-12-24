<template>
  <div class="bg-white rounded-lg p-8 shadow-md">
    <div class="mb-4">
      <p class="text-lg mb-4">{{ content }}</p>
      <p class="text-gray-600">{{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>

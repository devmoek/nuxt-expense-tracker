<template>
  <div
    class="fixed left-2 bottom-6 lg:right-8 xl:right-10 xl:bottom-8"
  >
    <button
      v-if="$colorMode.preference !== 'light'"
      @click="$colorMode.preference = 'light'"
      class="p-2 bg-yellow-300 rounded-full shadow hover:bg-yellow-400"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
      >
        <path
          d="m5.64 17-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z"
        />
      </svg>
    </button>

    <button
      v-if="$colorMode.preference !== 'dark'"
      @click="$colorMode.preference = 'dark'"
      class="p-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-800"
    >
      <svg
        width="20"
        height="20"
        viewBox="-4 -2 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        class="jam jam-moon"
        fill="#fff"
      >
        <path
          d="M2 10c0 4.43 3.478 8 7.742 8 .658 0 1.302-.085 1.922-.248-2.996-2.2-4.896-5.786-4.896-9.752 0-2.09.527-4.095 1.489-5.853C4.699 2.863 2 6.097 2 10zm6.768-2c0 4.632 3.068 8.528 7.232 9.665A9.555 9.555 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335A10.086 10.086 0 0 0 8.768 8z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style>
body {
  @apply bg-gray-100 text-gray-900;
}
.dark-mode body {
  @apply bg-gray-900 text-white;
}
</style>

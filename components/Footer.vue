<template>
  <footer class="bg-emerald-700 text-white p-4">
    <div class="container mx-auto">
      <div class="flex justify-center items-center">
        <p class="text-sm">
          &copy; {{ currentYear }} Expensy. All rights reserved.
          <small
            >Made by
            <a
              href="https://myerswebagency.com"
              rel="noopener noreferrer"
              target="blank"
              class="hover:underline"
              >Myers</a
            ></small
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

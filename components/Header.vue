<template>
  <header class="bg-emerald-700 text-white py-4 px-4">
    <div class="container mx-auto flex items-center justify-between">
      <div>
        <NuxtLink to="/"><h1 class="text-2xl font-bold">Expensy</h1></NuxtLink>
      </div>

      <nav class="flex gap-5 items-center">
        <ul class="flex gap-5 items-center">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li class="border rounded p-2">
            <NuxtLink to="/login">Log in</NuxtLink>
          </li>
        </ul>

        <form class="hidden md:block">
          <select
            v-model="locale"
            class="bg-emerald-500 text-white px-4 py-2 rounded-md"
            @change="updateLocale"
          >
            <option value="en" class="bg-emerald-600">English</option>
            <option value="ru" class="bg-emerald-600">Русский</option>
          </select>
        </form>
      </nav>
    </div>
  </header>
</template>

<script setup>
const { locale } = useI18n();
</script>

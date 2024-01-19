<script setup>
import { useLocalePath } from "vue-i18n-routing";
const localePath = useLocalePath();

const client = useSupabaseClient();
const user = useSupabaseUser();

const logout = async () => {
  await client.auth.signOut();
  navigateTo(localePath("/"));
};
</script>

<template>
  <header class="bg-emerald-700 text-white py-4 px-4">
    <div class="container mx-auto flex items-baseline justify-between">
      <div>
        <NuxtLink
          :to="localePath('/')"
          class="hover:text-gray-900 transition duration-300"
        >
          <h1 class="text-2xl font-bold">
            {{ $t("header.title") }}
          </h1>
        </NuxtLink>
      </div>

      <nav class="flex gap-5 items-center">
        <ul class="flex md:gap-5 items-center">
          <li>
            <NuxtLink
              :to="localePath('/about')"
              class="hover:text-gray-900 transition duration-300"
            >
              {{ $t("header.about") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/expense')"
              class="hover:text-gray-900 hidden md:inline transition duration-300"
            >
              {{ $t("header.expense") }}
            </NuxtLink>
          </li>
          <li class="border rounded p-2" v-if="!user">
            <NuxtLink
              :to="localePath('/login')"
              class="hover:text-gray-900 transition duration-300"
            >
              {{ $t("header.login") }}
            </NuxtLink>
          </li>
        </ul>

        <LocaleForm />

        <button
          class="px-3 py-2 border text-white border-white text-sm transition duration-300 font-medium rounded-md text-gray-700 bg-transparent hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          v-if="user"
          @click="logout"
        >
          {{ $t("header.logout") }}
        </button>
      </nav>
    </div>
  </header>
</template>

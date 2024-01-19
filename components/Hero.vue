<template>
  <section
    class="bg-gray-100 dark:bg-gray-900 py-24 text-center h-[700px] justify-center items-center flex flex-col"
  >
    <h1 class="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
      {{ $t('hero.title') }}
    </h1>
    <p class="text-lg mb-8 text-gray-900 dark:text-gray-100">
      {{ $t('hero.description') }}
    </p>

    <NuxtLink
      to="/expense"
      class="bg-emerald-700 font-semibold text-white dark:hover:text-gray-900 px-6 py-3 rounded-full inline-block transition duration-300 hover:text-gray-100 hover:animate-pulse"
      >{{ $t('general.button.getStarted') }}
    </NuxtLink>
  </section>
</template>

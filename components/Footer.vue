<template>
  <footer class="bg-emerald-700 text-white p-4">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">
              {{ $t("footer.title") }}
            </span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-100 uppercase">
              {{ $t("footer.resources.title") }}
            </h2>
            <ul class="text-gray-100 font-medium">
              <li class="mb-4">
                <a href="https://tailwindcss.com/" 
                   class="hover:underline"
                   target="_blank"
                  >Tailwind CSS</a
                >
              </li>
              <li class="mb-4">
                <a href="https://nuxt.com/" 
                   class="hover:underline"
                   target="_blank"
                  >Nuxt</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-100 uppercase">
              {{ $t("footer.follow_us.title") }}
            </h2>
            <ul class="text-gray-100 font-medium">
              <li class="mb-4">
                <a href="https://github.com/devmoek" class="hover:underline"
                  >Github</a
                >
              </li class="mb-4">
              <li class="mb-4">
                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline"
                  >Discord</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="https://twitter.com/myersdeveloper"
                  class="hover:underline"
                  >Twitter</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-100 uppercase">
              {{ $t("footer.legal.title") }}
            </h2>
            <ul class="text-gray-100 font-medium">
              <li class="mb-4">
                <NuxtLink
                  :to="localePath('/privacy-policy')"
                  class="hover:underline"
                >
                  <!-- {{ $t("header.about") }} -->
                  Privacy Policy
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <p class="text-sm">
          &copy; {{ currentYear }} {{ $t("footer.title") }}
          {{ $t("footer.all_rights_reserved") }}
        </p>
      </div>
    </div>
  </footer>

  <LightDark />
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

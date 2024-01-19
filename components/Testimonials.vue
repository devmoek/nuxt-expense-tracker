<template>
  <!-- component -->
  <div class="py-16 bg-gray-100 dark:bg-gray-900">
    <div class="container m-auto px-6 text-white md:px-12 xl:px-6">
      <h2
        class="mb-12 text-center text-2xl text-gray-900 dark:text-gray-100 font-bold md:text-4xl"
      >
        {{ $t("testimonials.title") }}
      </h2>
      <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
        <div
          class="row-span-2 p-6 border border-gray-200 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-500 text-center sm:p-8"
        >
          <div class="h-full flex flex-col justify-center space-y-4">
            <img
              class="w-20 h-20 mx-auto rounded-full"
              src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <p class="text-gray-600 dark:text-gray-100 md:text-xl">
              <span class="font-serif">"</span>
                {{ $t("testimonial1.title")}}
              <span class="font-serif">"</span>
            </p>
            <div>
              <h6
                class="text-lg text-black dark:text-white font-semibold leading-none"
              >
                {{ $t("testimonial1.name")}}
              </h6>
              <span class="text-xs text-gray-900 dark:text-gray-300"
                >{{ $t("testimonial1.position")}}</span
              >
            </div>
          </div>
        </div>

        <div
          class="p-6 border border-gray-200 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-500 sm:flex sm:space-x-8 sm:p-8"
        >
          <img
            class="w-20 h-20 mx-auto rounded-full"
            src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
            alt="user avatar"
            height="220"
            width="220"
            loading="lazy"
          />
          <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
            <p class="text-gray-600 dark:text-gray-100">
              <span class="font-serif">"</span>I've tried several expense
              tracking tools, but Expensy stands out for its user-friendly
              design and robust functionality. The automatic categorization of
              expenses saves me so much time, and the insights I get from the
              analytics dashboard are invaluable. It's not just a tool; it's
              like having a personal financial assistant. Expensy has helped me
              get a clear picture of my spending patterns, allowing me to make
              smarter financial decisions. It's an essential tool for personal
              finance management.<span class="font-serif">"</span>
            </p>
            <div>
              <h6
                class="text-lg text-black dark:text-white font-semibold leading-none"
              >
                Jane Doe
              </h6>
              <span class="text-xs text-gray-900 dark:text-gray-300"
                >Product Designer</span
              >
            </div>
          </div>
        </div>
        <div
          class="p-6 border border-gray-200 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-500 sm:flex sm:space-x-8 sm:p-8"
        >
          <img
            class="w-20 h-20 mx-auto rounded-full"
            src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
            alt="user avatar"
            height="220"
            width="220"
            loading="lazy"
          />
          <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
            <p class="text-gray-600 dark:text-gray-100">
              <span class="font-serif">"</span>Expensy has transformed the way
              our team handles expense reports. The seamless integration with
              our accounting software and the ability to upload receipts on the
              go have significantly reduced manual entry errors and increased
              efficiency. The approval workflow is straightforward and
              transparent, making the entire process faster and more
              accountable. Our finance team and employees love using Expensy,
              and it has definitely improved our overall expense management
              system. It's a must-have tool for businesses looking to streamline
              their expense reporting process.<span class="font-serif">"</span>
            </p>
            <div>
              <h6
                class="text-lg text-black dark:text-white font-semibold leading-none"
              >
                Jane Doe
              </h6>
              <span class="text-xs text-gray-900 dark:text-gray-300"
                >Product Designer</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

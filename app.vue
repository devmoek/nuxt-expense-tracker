<template>
  <NuxtLayout>
    <Header />
    <div>
      <NuxtPage />
    </div>
    <Support />
    <Footer />
  </NuxtLayout>
</template>

<style>
@keyframes bounce-left-right {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}

.bounce-left-right {
  animation: bounce-left-right 1s infinite;
}
</style>
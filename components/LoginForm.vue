<script setup>

const supabase = useSupabaseClient();

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "https://nuxt-expense-tracker.vercel.app/confirm",
    },
  });
  if (error) console.log(error);
};
</script>

<template>
  <div class="flex justify-center h-full items-center">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form>
        <div class="flex items-center justify-center">
          <button
            class="bg-black hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click="signInWithOAuth"
          >
            GitHub
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

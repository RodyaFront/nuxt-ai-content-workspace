<script setup lang="ts">
// Без shadcn, только Tailwind
</script>

<template>
  <div class="flex min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-zinc-100 dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 flex flex-col py-6 px-4">
      <div class="mb-8">
        <span class="text-2xl font-bold tracking-tight">AI Content</span>
      </div>
      <nav class="flex-1 space-y-2">
        <a href="/history" class="block px-3 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">История генераций</a>
        <button class="w-full text-left px-3 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition mb-2">
          + Новый чат
        </button>
        <a href="/settings" class="block px-3 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">Настройки</a>
      </nav>
      <div class="mt-auto pt-8">
        <div class="flex items-center gap-2">
          <span class="text-xs text-zinc-500">v1.0.0</span>
        </div>
      </div>
    </aside>
    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
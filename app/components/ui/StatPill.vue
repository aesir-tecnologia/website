<template>
  <div class="inline-flex flex-col rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
    <span class="text-xs font-semibold uppercase tracking-wide text-slate-400"><slot name="label" /></span>
    <span class="text-2xl font-semibold text-slate-100"><slot /></span>
  </div>
</template>

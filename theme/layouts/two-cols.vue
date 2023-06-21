<template>
  <div class="slidev-layout">
    <div class="grid grid-cols-2 gap-16">
      <div class="">
        <slot name="default" />
      </div>
      <div class="">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

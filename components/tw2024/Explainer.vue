<template>
  <div class="py-6">
    <q-list v-for="item in accordionItems">
      <q-expansion-item :label="item.label" class="mx-0 my-3 border-2">
        <q-card>
          <q-card-section>
            {{ item.content }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
const { t } = useI18n();

const accordionItems = [
  {
    label: t("components.explainer.0.title"),
    defaultOpen: true,
    content: t("components.explainer.0.content", {
      url: "https://hackmd.io/@billy3321/BJepntX3N?type=view",
    }),
  },
  ...[1, 2, 3, 4].map((i) => ({
    label: t(`components.explainer.${i}.title`),
    content: t(`components.explainer.${i}.content`),
  })),
];
</script>

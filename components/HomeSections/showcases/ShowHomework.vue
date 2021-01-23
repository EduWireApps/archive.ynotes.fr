<template>
  <PhoneScreen left>
    <div
      class="h-12 bg-gray-500 shadow flex items-center text-gray-50 px-4 w-full"
    >
      <Zondicon icon="menu" class="fill-current h-4 w-4 mr-2" />
      <span>Devoirs</span>
      <Zondicon icon="wrench" class="fill-current h-4 w-4 ml-auto" />
    </div>
    <div class="flex flex-col text-gray-200 p-3">
      <div class="flex flex-col bg-gray-400 p-4 rounded-2xl">
        <div class="flex flex-col text-center mb-6">
          <span class="text-center">Aujourd'hui</span>
          <span>{{
            new Intl.DateTimeFormat("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long"
            })
              .format(new Date())
              .toUpperCase()
          }}</span>
        </div>
        <div class="flex flex-col space-y-2">
          <div
            v-for="(e, i) in today"
            :key="i"
            class="p-2"
            :class="`bg-${e.color}-500`"
            @click="e.dismissed = !e.dismissed"
          >
            <div class="flex items-center">
              <span class="text-black mr-2">{{ e.subject }}</span>
              <button
                class="w-5 h-5 border-2 border-gray rounded-full focus:outline-none"
              ></button>
            </div>
            <div v-show="!e.dismissed">{{ e.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </PhoneScreen>
</template>

<script>
export default {
  data() {
    return {
      today: [
        {
          subject: "Espagnol",
          completed: false,
          content: "Haz los ejercicios 4 y 5 de la página 52.",
          evaluated: false,
          dismissed: false,
          color: "blue"
        },
        {
          subject: "Histoire-Géographie",
          completed: false,
          content: "Apprendre la leçon et amener le manuel.",
          evaluated: false,
          dismissed: true,
          color: "yellow"
        },
        {
          subject: "Anglais",
          completed: false,
          content: "Test on sequence 7.",
          evaluated: true,
          dismissed: true,
          color: "green"
        }
      ]
    };
  }
};
</script>

<style></style>

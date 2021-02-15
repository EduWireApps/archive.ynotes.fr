<template>
  <div>
    <div
      class="flex flex-col items-center justify-center px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8"
    >
      <div
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        v-html="content.title"
      ></div>
      <div class="inline-flex mt-8 rounded-md shadow">
        <button
          type="button"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white transition-shadow border border-transparent rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-xl focus:outline-none"
          @click="open = !open"
          v-html="
            content.revealButton[open ? 'open' : 'close'] +
              ' ' +
              content.revealButton.base
          "
        ></button>
      </div>
    </div>
    <XyzTransition duration="auto">
      <form
        @submit.prevent="submitForm"
        v-if="open"
        xyz="fade down-1 duration-5"
        class="grid max-w-xl grid-cols-1 gap-6 mx-auto"
      >
        <label class="block">
          <span class="text-gray-700" v-html="content.inputs.name.label"></span>
          <input
            type="text"
            name="name"
            v-model="form.name"
            class="block w-full mt-1 transition-colors bg-gray-100 border-transparent rounded-md focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200"
            :placeholder="content.inputs.name.placeholder"
            required
          />
        </label>
        <label class="block">
          <span
            class="text-gray-700"
            v-html="content.inputs.email.label"
          ></span>
          <input
            type="email"
            name="email"
            v-model="form.email"
            class="block w-full mt-1 transition-colors bg-gray-100 border-transparent rounded-md focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200"
            :placeholder="content.inputs.email.placeholder"
            required
          />
        </label>
        <label class="block">
          <span
            class="text-gray-700"
            v-html="content.inputs.message.label"
          ></span>
          <textarea
            name="message"
            v-model="form.message"
            class="block w-full h-64 mt-1 text-justify transition-colors bg-gray-100 border-transparent rounded-md resize-none focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200"
            :placeholder="content.inputs.message.placeholder"
            required
          ></textarea>
        </label>
        <div class="block mx-auto">
          <input
            type="submit"
            :value="
              content.submitButton[
                status === ''
                  ? 'DEFAULT'
                  : status === 'success'
                  ? 'success'
                  : status === 'error'
                  ? 'error'
                  : 'loading'
              ]
            "
            class="px-6 py-2 text-base font-medium text-white transition-shadow rounded-md focus:outline-none"
            :class="{
              'bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-xl cursor-pointer':
                status === '' &&
                form.name !== '' &&
                form.email !== '' &&
                form.message !== '',
              'bg-green-600': status === 'success',
              'bg-red-600': status === 'error',
              'bg-gray-400 cursor-not-allowed':
                form.name === '' ||
                form.email === '' ||
                form.message === '' ||
                status === 'loading'
            }"
          />
        </div>
      </form>
    </XyzTransition>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  },
  data() {
    return {
      open: false,
      subjectText: " a demandé à rejoindre l'équipe via le site web",
      form: {
        apikey: "8b117480-2de5-45d5-9b08-2bf426277677",
        subject: "",
        name: "",
        email: "",
        message: ""
      },
      status: ""
    };
  },
  computed: {
    name() {
      return this.form.name;
    }
  },
  watch: {
    name(newData, oldData) {
      this.form.subject = newData + this.subjectText;
    }
  },
  methods: {
    async submitForm(e) {
      if (this.status !== "") return;
      this.status = "loading";
      this.$axios.setHeader("Content-Type", "application/json");
      this.$axios.setHeader("Accept", "application/json");
      await this.$axios
        .$post("https://api.web3forms.com/submit", this.form)
        .then(response => {
          if (response.success) {
            this.status = "success";
          } else {
            this.status = "error";
          }
        })
        .catch(error => {
          this.status = "error";
        });
      if (this.status !== "error") {
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      }
      setTimeout(() => {
        this.status = "";
        this.open = false;
      }, 3000);
    }
  }
};
</script>

<style></style>

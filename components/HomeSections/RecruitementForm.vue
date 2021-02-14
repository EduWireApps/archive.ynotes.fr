<template>
  <div>
    <div
      class="max-w-7xl flex flex-col mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 justify-center items-center"
    >
      <div
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        Décidé?
      </div>
      <div class="inline-flex rounded-md shadow mt-8">
        <button
          type="button"
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-xl transition-shadow focus:outline-none"
          @click="open = !open"
        >
          Remplir le formulaire
        </button>
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
          <span class="text-gray-700">Votre nom</span>
          <input
            type="text"
            name="name"
            v-model="form.name"
            class="block w-full mt-1 transition-colors bg-gray-100 border-transparent rounded-md focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200"
            placeholder=""
            required
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Votre adresse e-mail</span>
          <input
            type="email"
            name="email"
            v-model="form.email"
            class="block w-full mt-1 transition-colors bg-gray-100 border-transparent rounded-md focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200"
            placeholder="john@exemple.com"
            required
          />
        </label>
        <label class="block">
          <span class="text-gray-700"
            >Votre introduction et ce que vous pouvez apporter</span
          >
          <textarea
            name="message"
            v-model="form.message"
            class="block w-full h-64 mt-1 transition-colors bg-gray-100 border-transparent rounded-md resize-none focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200"
            required
          ></textarea>
        </label>
        <div class="block mx-auto">
          <input
            type="submit"
            :value="
              status === ''
                ? 'Envoyer'
                : status === 'success'
                ? 'Envoyé !'
                : status === 'error'
                ? 'Une erreur est survenue'
                : 'En cours'
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
      }, 3000);
    }
  }
};
</script>

<style></style>

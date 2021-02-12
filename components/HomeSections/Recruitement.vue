<template>
  <section class="py-16 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div>
          <div class="text-center">
            <h3
              class="text-base font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500 inline-block xyz-nested"
              xyz="fade down-1 delay-6 duration-15"
              v-html="content.subtitle"
            ></h3>
            <h2
              class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl xyz-nested"
              xyz="fade down-1 delay-3 duration-15"
              v-html="content.title"
            ></h2>
            <p
              class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto xyz-nested"
              xyz="fade down-1 delay-6 duration-15"
              v-html="content.text"
            ></p>
          </div>
          <div class="mt-16 xyz-nested" xyz="delay-15">
            <div
              class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 xyz-nested"
              xyz="fade down-1 delay-6 duration-15 stagger"
            >
              <XyzConflict
                v-for="(e, index) in content.items"
                :key="index"
                class="inline-block p-6 pt-0 text-center transition-transform transform bg-gray-100 rounded-2xl w-full"
                endClass="md:hover:scale-105"
              >
                <div
                  class="relative flex items-center justify-center w-12 h-12 mx-auto mb-6 -mt-6 text-2xl font-semibold text-white rounded-md shadow-xl bg-gradient-to-r from-indigo-500 to-purple-500"
                >
                  <Zondicon :icon="e.icon" class="fill-current h-6 w-6" />
                </div>
                <div
                  class="text-xl font-medium leading-6 text-gray-900"
                  v-html="e.title"
                ></div>
                <div
                  class="mt-2 text-lg text-gray-500"
                  v-html="e.content"
                ></div>
                <img
                  :src="require(`~/assets/${e.imgPath}`)"
                  class="mt-6 w-3/4 md:w-96 xyz-nested mx-auto"
                  xyz="fade down-1 delay-6 duration-15"
                  alt="Illustration"
                />
              </XyzConflict>
            </div>
          </div>
          <div class="mt-16">
            <form
              @submit.prevent="submitForm"
              xyz="fade down-1 duration-10 delay-20"
              class="grid grid-cols-1 gap-6 max-w-xl mx-auto xyz-nested"
            >
              <label class="block">
                <span class="text-gray-700">Votre nom</span>
                <input
                  type="text"
                  name="name"
                  v-model="form.name"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200 transition-colors"
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
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200 transition-colors"
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
                  class="mt-1 h-64 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-50 focus:ring-0 hover:bg-gray-200 transition-colors resize-none"
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
                  class="rounded-md text-white px-6 py-2 text-md uppercase font-medium focus:outline-none transition-shadow"
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
          </div>
        </div>
      </XyzTransition>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  },
  data() {
    return {
      subjectText: " a demandé à rejoindre l'équipe via le site web",
      form: {
        apikey: "d2df98b1-e917-4f54-b48f-19f006401317",
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

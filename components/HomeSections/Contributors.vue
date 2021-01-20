<template>
  <section class="py-12 bg-space-500">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div xyz="fade delay-4">
          <h2
            xyz="fade up delay-3 duration-6"
            class="mb-8 text-2xl font-bold text-center text-white sm:text-3xl lg:text-5xl xyz-nested"
            v-html="content.title"
          ></h2>
          <p
            xyz="fade up delay-6 duration-6"
            class="mb-6 text-center text-white md:text-lg lg:text-xl xyz-nested"
            v-html="content.content"
          ></p>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-12"
            v-if="contributors.length > 0"
            xyz="fade stagger-2 ease-in-out delay-8"
          >
            <a
              v-for="(c, index) in contributors"
              :key="index"
              class="flex items-center p-4 bg-white shadow-xl rounded-2xl xyz-nested"
              :href="c.user.html_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="c.user.avatar_url"
                class="w-20 h-20 border-2 border-gray-300 rounded-full shadow-lg border-opacity-20"
                alt=""
              />
              <div class="flex flex-col justify-center px-4 overflow-hidden">
                <span
                  class="text-lg font-semibold"
                  v-html="c.user.login"
                ></span>
                <p v-if="c.customSentence !== ''" v-html="c.customSentence"></p>
                <p v-else>
                  A contribué
                  <span v-html="c.contributed.app ? 'à l\'application' : null"></span>
                  <span v-html="c.contributed.app && c.contributed.website ? ' et ' : null"></span>
                  <span v-html="c.contributed.website ? 'au site internet' : null"></span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </XyzTransition>
    </Container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      excludedUsers: this.content.fetch.excludedUsers,
      customUsers: this.content.fetch.customUsers,
      contributors: []
    };
  },
  props: {
    content: Object
  },
  methods: {
    addContributor(el) {
      this.contributors.push({
        user: {
          login: el.login,
          html_url: el.html_url,
          avatar_url: el.avatar_url
        },
        contributed: {
          app: el.app,
          website: el.website
        },
        customSentence: el.customSentence
      });
    }
  },
  async created() {
    const contributors = [
      await this.$axios.$get(
        "https://api.github.com/repos/ModernChocolate/ynotes/contributors"
      ),
      await this.$axios.$get(
        "https://api.github.com/repos/ModernChocolate/ynotes-website/contributors"
      )
    ];
    this.customUsers.forEach(el => {
      this.addContributor({
        login: el.login,
        html_url: el.html_url,
        avatar_url: el.avatar_url,
        app: el.app,
        website: el.website,
        customSentence: el.customSentence
      });
    });
    let ctbtApp = contributors[0].filter(
      c => !this.excludedUsers.includes(c.login)
    );
    ctbtApp.forEach(el => {
      this.addContributor({
        login: el.login,
        html_url: el.html_url,
        avatar_url: el.avatar_url,
        app: true,
        website: contributors[1].some(c => c.login === el.login),
        customSentence: ""
      });
    });
    let ctbtWebsite = contributors[1].filter(
      c =>
        !this.excludedUsers.includes(c.login) &&
        !ctbtApp.some(c2 => c2.login === c.login)
    );
    ctbtWebsite.forEach(el => {
      this.addContributor({
        login: el.login,
        html_url: el.html_url,
        avatar_url: el.avatar_url,
        app: false,
        website: true,
        customSentence: ""
      });
    });
  }
};
</script>

<style></style>

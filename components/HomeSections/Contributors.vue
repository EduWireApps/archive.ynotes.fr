<template>
  <section class="py-12 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div class="w-fit-content">
          <div class="text-center">
            <h2
              class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl xyz-nested"
              xyz="fade down-1 delay-3 duration-15"
              v-html="content.title"
            ></h2>
            <p
              class="max-w-3xl my-4 text-xl text-gray-500 lg:mx-auto xyz-nested"
              xyz="fade down-1 delay-6 duration-15"
              v-html="content.content"
            ></p>
            <a
              class="inline-flex items-center text-lg font-medium tracking-wide text-transparent transition-colors duration-200 bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 focus:outline-none hover:opacity-80 xyz-nested"
              :href="
                require('~/assets/content/contact.json').repo +
                  '#contributeurs-'
              "
              target="_blank"
              rel="noopener noreferrer"
              xyz="fade down-1 delay-8 duration-15"
            >
              <span v-html="content.link.text"></span>
              <Zondicon
                icon="cheveron-right"
                class="w-5 h-5 text-purple-600 fill-current"
            /></a>
          </div>
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap gap-y-8 gap-x-2 mt-8"
          >
            <a
              v-for="(c, index) in contributors"
              :key="index"
              :href="c.user.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-col items-center space-y-4 py-2"
            >
              <img
                :src="
                  c.user.require_image
                    ? require(`~/assets/${c.user.avatar_url}`)
                    : c.user.avatar_url
                "
                class="block w-24 h-24 rounded-full shadow-md"
                :alt="c.user.login + ' avatar'"
              />
              <div class="text-center font-semibold">
                <div class="text-gray-800 text-lg">{{ c.user.login }}</div>
                <div
                  class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600"
                >
                  <span
                    v-if="c.customSentence !== ''"
                    v-html="c.customSentence"
                  ></span>
                  <span v-else>
                    <span
                      v-html="c.contributed.app ? 'Application' : null"
                    ></span>
                    <span
                      v-html="
                        c.contributed.app && c.contributed.website
                          ? ' / '
                          : null
                      "
                    ></span>
                    <span
                      v-html="c.contributed.website ? 'Site web' : null"
                    ></span>
                  </span>
                </div>
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
          avatar_url: el.avatar_url,
          require_image: el.require_image
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
        "https://api.github.com/repos/ynotesapp/ynotes/contributors"
      ),
      await this.$axios.$get(
        "https://api.github.com/repos/ynotesapp/ynotes-website/contributors"
      )
    ];
    this.customUsers.forEach(el => {
      this.addContributor({
        login: el.login,
        html_url: el.html_url,
        avatar_url: el.avatar_url,
        app: el.app,
        website: el.website,
        customSentence: el.customSentence,
        require_image: el.require_image
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
        customSentence: "",
        require_image: false
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
        customSentence: "",
        require_image: false
      });
    });
  }
};
</script>

<style></style>

<template>
  <section class="py-12 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div class="flex flex-col h-full py-16 md:flex-row">
          <div class="flex flex-col justify-center flex-1 mx-6 mb-6">
            <div class="text-left">
              <h2
                class="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-5xl md:text-left xyz-nested"
                xyz="fade down-1 delay-3 duration-15"
                v-html="content.title"
              ></h2>
              <p
                class="max-w-2xl mt-8 mb-4 text-lg leading-8 text-justify text-gray-700 lg:text-xl xyz-nested"
                xyz="fade down-1 delay-6 duration-15"
                v-html="content.content"
              ></p>
              <a
                class="inline-flex items-center text-lg font-medium tracking-wide text-transparent transition-colors duration-200 bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 focus:outline-none hover:opacity-80 xyz-nested"
                :href="require('~/assets/content/contact.json').repo"
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
          </div>
          <div class="inline-flex items-center justify-center flex-1 xyz-nested" xyz="fade delay-8">
            <div
              class="grid grid-cols-1 gap-4 pb-12"
            >
              <a
                v-for="(c, index) in contributors"
                :key="index"
                class="flex items-center p-4 transition-transform transform bg-gray-100 rounded-2xl md:hover:scale-105"
                :href="c.user.html_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  class="p-1 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"
                >
                  <img
                    :src="c.user.avatar_url"
                    class="block w-20 h-20 p-1 bg-gray-100 rounded-full"
                    :alt="c.user.login + ' avatar'"
                  />
                </div>
                <div class="flex flex-col flex-1 justify-center px-4 overflow-hidden">
                  <span
                    class="text-xl font-medium leading-6 text-gray-900"
                    v-html="c.user.login"
                  ></span>
                  <p class="text-lg text-gray-500">
                    <span
                      v-if="c.customSentence !== ''"
                      v-html="c.customSentence"
                    ></span>
                    <span v-else>
                      Contributeur
                      <span
                        v-html="c.contributed.app ? 'à l\'application' : null"
                      ></span>
                      <span
                        v-html="
                          c.contributed.app && c.contributed.website
                            ? ' et '
                            : null
                        "
                      ></span>
                      <span
                        v-html="
                          c.contributed.website ? 'au site internet' : null
                        "
                      ></span>
                    </span>
                  </p>
                </div>
              </a>
            </div>
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

<template>
  <section class="bg-space-500 py-12">
    <Container>
      <IsVisible v-slot="props" once>
        <template>
          <div>
            <XyzTransition appear duration="auto">
              <div xyz="fade delay-4" v-if="props.show">
                <h2
                  xyz="fade up delay-3 duration-6"
                  class="text-5xl font-bold mb-8 text-white text-center xyz-nested"
                >
                  {{ content.title }}
                </h2>
                <p
                  xyz="fade up delay-6 duration-6"
                  class="mb-6 text-xl xyz-nested text-center text-white"
                >
                  {{ content.content }}
                </p>
                <div
                  class="grid grid-cols-3 gap-2 pb-12"
                  v-if="contributors.length > 0"
                >
                  <a
                    v-for="(c, index) in contributors"
                    :key="index"
                    class="bg-white rounded-2xl shadow-xl p-4 flex items-center"
                    :href="c.user.html_url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      :src="c.user.avatar_url"
                      class="h-20 w-20 rounded-full shadow-lg border-2 border-gray-300 border-opacity-20"
                      alt=""
                    />
                    <div class="px-4 flex flex-col justify-center">
                      <span class="font-semibold text-lg">{{
                        c.user.login
                      }}</span>
                      <p v-if="c.customSentence !== ''">
                        {{ c.customSentence }}
                      </p>
                      <p v-else>
                        A contribué
                        {{ c.contributed.app ? "à l'application" : null }}
                        {{
                          c.contributed.app && c.contributed.website
                            ? " et "
                            : null
                        }}
                        {{ c.contributed.website ? "au site internet" : null }}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </XyzTransition>
          </div>
        </template>
      </IsVisible>
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
      // [],
      // []
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
    contributors[0].forEach(el => {
      if (!this.excludedUsers.includes(el.login)) {
        let website = false;
        for (let index = 0; index < contributors[1].length; index++) {
          if (!website) {
            if (contributors[1][index].login == el.login) {
              website = true;
            }
          }
        }
        this.addContributor({
          login: el.login,
          html_url: el.html_url,
          avatar_url: el.avatar_url,
          app: true,
          website: website,
          customSentence: ""
        });
      }
    });
    contributors[1].forEach(el => {
      let added = false;
      for (let index = 0; index < this.contributors.length; index++) {
        if (!added) {
          if (this.contributors[index].user.login == el.login) {
            added = true;
          }
        }
      }
      if (!this.excludedUsers.includes(el.login) && !added) {
        this.addContributor({
          login: el.login,
          html_url: el.html_url,
          avatar_url: el.avatar_url,
          app: false,
          website: true,
          customSentence: ""
        });
      }
    });
  }
};
</script>

<style></style>

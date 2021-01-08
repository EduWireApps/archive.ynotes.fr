<template>
  <section class="bg-space-500 py-12 shadow-xl">
    <Container>
      <IsVisible v-slot="props">
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
                <div class="text-white" v-for="(c, i) in contributors" :key="i">
                  {{ c }}
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div></div>
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
  async created() {
    const contributors = [
      await this.$axios.$get(
        "https://api.github.com/repos/ModernChocolate/ynotes/contributors"
      ),
      await this.$axios.$get(
        "https://api.github.com/repos/ModernChocolate/ynotes-website/contributors"
      )
    ];
    contributors[0].forEach(el => {
      if (!this.excludedUsers.includes(el.login)) {
        console.log(contributors[1])
        console.log(el.login)
        console.log(Object.keys(contributors[1]).indexOf(el.login));
        this.contributors.push({
          user: {
            login: el.login,
            html_url: el.html_url,
            avatar_url: el.avatar_url
          },
          contributed: {
            app: true,
            website: false
          }
        });
      }
    });
    console.log(this.contributors);
    // contributors[1].forEach(el => {
    //   let added = false;
    //   this.contributors.forEach(el2 => {
    //     if (!added) {
    //       console.log(Object.keys(el2.user).indexOf(el.login));
    //       if (Object.keys(el2.user).indexOf(el.login) > -1) {
    //         el2.contributed.website = true;
    //         added = true;
    //       }
    //     }
    //   });
    //   if (!this.excludedUsers.includes(el.login) && !added) {
    //     console.log(el.login);
    //     this.contributors.push({
    //       user: {
    //         login: el.login,
    //         html_url: el.html_url,
    //         avatar_url: el.avatar_url
    //       },
    //       contributed: {
    //         app: false,
    //         website: true
    //       }
    //     });
    //   }
    // });
  }
};
</script>

<style></style>

<template>
  <div class="tile is-parent">
    <article class="tile is-child notification is-primary">
      <h1 class="title has-text-weight">{{ title }}</h1>
      <h2 class="subtitle has-text-weight-light">{{ description }}</h2>
      <figure class="image is-4by3">
        <img :src="imgSrc" />
      </figure>
    </article>
  </div>
</template>

<script>
export default {
  name: "CategoryTile",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    imgSrc: {
      type: String
    }
  },
  mounted() {
    console.log(this.title);
  }
};
</script>

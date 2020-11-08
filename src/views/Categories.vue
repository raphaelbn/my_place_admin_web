<template>
  <section class="section">
    <h1 class="title">Categorias</h1>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <CategoryTile
          class="is-4"
          v-for="(category, i) in categories"
          :key="i"
          :title="category.nome"
          :description="category.descricao"
          :imgSrc="category.urlImagem"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryTile from "@/components/CategoryTile.vue";
import firebase from "firebase";

export default {
  components: {
    CategoryTile
  },
  data() {
    return {
      categories: []
    };
  },
  created() {
    firebase
      .firestore()
      .collection("categorias")
      .get()
      .then(snap => {
        const testCollection = [];
        snap.forEach(doc => {
          testCollection.push(doc.data());
        });
        this.categories = testCollection;
      });
  }
};
</script>

<style scoped>
.tile {
  flex-wrap: wrap;
}
</style>

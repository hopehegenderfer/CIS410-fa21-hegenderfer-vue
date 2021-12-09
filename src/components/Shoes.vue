<template>
  <div>
    <h1>Shoes</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Cost</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="aShoe in theShoes" :key="aShoe.shoeID">
          <th>{{ aShoe.name }}</th>
          <th>{{ aShoe.size }}</th>
          <th>{{ aShoe.cost }}</th>
          <th>
            <router-link :to="`/shoes/${aShoe.shoeID}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theShoes() {
      return this.$store.state.shoes;
    },
  },
};
</script>

<style></style>

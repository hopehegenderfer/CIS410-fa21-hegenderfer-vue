<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ shoe.name }}</h2>
        <br />

        <p>
          Shoe Size: <br /><strong>{{ shoe.size }}</strong>
        </p>
        <p>
          Shoe Price: <br /><strong>{{ formattedCost }}</strong>
        </p>
      </div>
    </div>
    <br />
    <router-link v-if="auth" :to="`/shoes/${this.$route.params.pk}/review`"
      ><button class="btn btn-success">Add a Review</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Add a Review
      </button></router-link
    >
    <br /><br />

    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    shoe() {
      let allShoes = this.$store.state.shoes;

      let thisShoe = allShoes.find((aShoe) => {
        return aShoe.shoeID == this.$route.params.pk;
      });
      return thisShoe;
    },
    formattedCost() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.shoe.cost);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Create a Review</h4>
            <form id="review-form">
              <div class="mb-3">
                <label
                  for="rating-input"
                  class="form-label"
                  @submit.prevent="submitReview"
                  >Score</label
                ><input
                  type="number"
                  class="form-control"
                  id="rating-input"
                  required=""
                  min="1"
                  max="10"
                  v-model="score"
                />
              </div>
              <div class="mb-3">
                <label for="summary-input" class="form-label">Review</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="summary-input"
                  required=""
                  v-model="review"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit Review</button
              ><button type="clear" class="btn btn-outline-danger">
                Cancel</button
              ><!---->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      rating: null,
      summary: "",
      errorMessage: null,
    };
  },
  methods: {
    submitReview() {
      let myReview = {
        review: this.review,
        score: this.score,
        shoeFK: this.$route.params.pk,
      };

      axios
        .post("/ratings", myReview, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        });
    },
  },
};
</script>

<style>
button {
  margin-right: 6px;
}
</style>

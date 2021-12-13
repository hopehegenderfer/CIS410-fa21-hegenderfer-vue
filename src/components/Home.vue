<template>
  <div>
    <h1>Welcome!</h1>

    <div
      class="my-container-outer"
      id="hero-home"
      style="
        padding: 100px 20px;
        background: linear-gradient(
            to top right,
            rgba(27, 94, 32, 0.8),
            rgba(26, 35, 126, 0.8)
          ),
        background-size: cover;
      "
    >
      <h4>Shoe Preview</h4>

      <div class="row">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmA5HFjp-PUncRQ0I864053IBhym8TNYkDiA&usqp=CAU"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Nike Blazers</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0IG5y286JDVh4v8D6uyzjMrHvlYNFMOadA&usqp=CAU"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Converse High Tops</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcib-IjfjoK0yWih-N5u7lb4E0tnn2aLELQ&usqp=CAU"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Vans</h5>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <hr />

      <h4>About Shoes Reviews:</h4>
      <br />
      <p>
        Welcome to ShoesReviews.com! Go ahead and browse our shoes and let us
        know what you think about them! Sign in to leave a review, and if you
        don't have an account, sign up! Leave your honest opinion and help other
        users decide which sho is best to buy. Happy reviewing!
      </p>

      <br />

      <div class="row imagecards justify-content-center">
        <h2>Review these Shoes:</h2>
      </div>

      <div class="row imagecards justify-content-center">
        <div class="card" style="width: 18rem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7Ix0rjkOyLc4UuoGHQweX-w-AwsZ4TgWRQ&usqp=CAU"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="color: rgba(26, 35, 126, 0.9)">
              Nike Air Force 1's
            </h5>
            <p class="card-text" style="color: black">
              Sign in to leave a review!
            </p>
          </div>
        </div>

        <div class="card" style="width: 18rem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkXdAAR8hFRDdXormAmerEo196PXwNjcQwg&usqp=CAU"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="color: rgba(26, 35, 126, 0.9)">
              Timberland Boots
            </h5>
            <p class="card-text" style="color: black">
              Sign in to leave a review!
            </p>
          </div>
        </div>

        <div class="card" style="width: 18rem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRix5lJ3hPpyv_974ANdt2KB7vc3SYaSZGLfg&usqp=CAU"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="color: rgba(26, 35, 126, 0.9)">
              Adidas Ultra Boosts
            </h5>
            <p class="card-text" style="color: black">
              Sign in to leave a review!
            </p>
          </div>
        </div>

        <div class="card" style="width: 18rem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSuQV56CD7_KzRgAxWKjgiouVH36L1hCX0A&usqp=CAU"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="color: rgba(26, 35, 126, 0.9)">
              Ugg Boots
            </h5>
            <p class="card-text" style="color: black">
              Sign in to leave a review!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

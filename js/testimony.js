const testimonialData = [
  {
    author: "Mario Gali Freitas",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non convallis diam, quis lobortis nulla. Fusce tempor ligula ex, fringilla consectetur justo aliquet eget. Aliquam ac iaculis ante, a efficitur turpis. !",
    profPic: "https://3.bp.blogspot.com/-jFke770FuUA/VnGN0MqDgzI/AAAAAAAAArI/x8NhcVlH9Ok/s1600/Foto%2BPria%2BGanteng%2BIndonesia%2B%252821%2529.jpg",
  },
  {
    author: "Jacinta Maria S",
    rating: 4,
    review: "Etiam commodo ipsum vel venenatis eleifend. Sed dui arcu, mollis ac aliquet eu, vehicula sed ipsum. Vestibulum rhoncus sodales laoreet. Duis tincidunt metus euismod orci commodo mattis.",
    profPic: "https://assets.jalantikus.com/assets/cache/736/1104/userfiles/2018/11/15/foto-wanita-cantik-korea-2-ebb35.jpg",
  },
  {
    author: "Carlos Tevez",
    rating: 3,
    review: "Morbi at pretium sem. Sed non pellentesque nisl. Duis bibendum lacus a turpis pretium consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    profPic: "https://tse2.mm.bing.net/th?id=OIP.C72Rz7RAE2dgQQ45Nf2NQQHaJQ&pid=Api&P=0&h=180",
  },
  {
    author: "Maria Gusmao",
    rating: 4,
    review:
      "Suspendisse non quam orci. Proin vitae est eu arcu mollis lobortis. Pellentesque at accumsan purus, vel consectetur mi. Cras commodo turpis augue, sit amet posuere quam accumsan et. Donec lacinia lobortis fringilla. Quisque ut pulvinar turpis.",
    profPic: "https://4.bp.blogspot.com/-FF5D94dj73E/TfiaJN-xCII/AAAAAAAAAL4/YKfvZ2JEM5I/s1600/foto%2Borang%2Bcantik.jpg",
  },
  {
    author: "Sanchez Maleik",
    rating: 4,
    review: "Duis sit amet risus porta, tristique nisi at, tincidunt orci. Suspendisse risus leo, facilisis pharetra porta id, euismod eu arcu. Curabitur pharetra posuere eros in dignissim.",
    profPic: "https://1.bp.blogspot.com/-d2G1xhQYzA4/UJTJBgRhwkI/AAAAAAAAAes/GxYT_tD0Gws/s1600/foto-orang-ganteng3.jpg",
  },
  {
    author: "Adela Bonita",
    rating: 5,
    review: "Morbi ante dolor, faucibus vel elit in, sodales viverra odio. Integer et tellus non sapien bibendum tempus. Mauris commodo, lectus a ultricies dictum, diam lacus pharetra massa, vitae ullamcorper odio justo et arcu",
    profPic: "https://awsimages.detik.net.id/community/media/visual/2019/09/25/24d37f7d-ba75-4cd1-93f7-d29a31d31d4f.jpeg?w=750&q=90",
  },
];

function addStars(star) {
  let starLogo = '<i class="fa-solid fa-star"></i>';
  return starLogo.repeat(star);
}

function updateButtonStyle(button) {
  // Reset all button styles
  let buttons = document.getElementsByClassName("rating-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "white";
    buttons[i].style.color = "black";
  }

  // Set the clicked button style
  button.style.backgroundColor = "#fd4e2f";
  button.style.color = "white";
}

function allTestimonial() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
          <div class="testimonial">
              <p class="quote">
                  ${item.review}
              </p>
              <div class="description">
                  <img src="${item.profPic}" alt="">
                  <div class="person">
                      <span class="name">${item.author}</span><br>
                  </div>
              </div>
          </div>
      `;
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
  updateButtonStyle(event.target);
}

allTestimonial();

function filterTestimonial(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1>Sayang sekali 😎</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
          <div class="testimonial">
              <p class="quote">
                  ${item.review}
              </p>
              <div class="description">
                  <img src="${item.profPic}" alt="">
                  <div class="person">
                      <span class="name">${item.author}</span><br>
                  </div>
              </div>
          </div>
          `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
  updateButtonStyle(event.target);
}

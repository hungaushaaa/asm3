// Ẩn chức năng cả nhân - Phần Thông tin cá nhân

const form = document.querySelector(".form");
const error = document.getElementById("error");
const personalInfo = document.querySelector(".infoe");

form.addEventListener("submit", function (e) {
  const emailInput = document.querySelector(".email");
  const email = emailInput.value; // lấy giá trị của trường nhập email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email || !regex.test(email)) {
    error.classList.remove("hidden");
    e.preventDefault(); // dùng để khi submit thì trang sẽ không cuộn lên trên
  } else {
    document.querySelector(".form-container").classList.add("hidden");
    personalInfo.classList.remove("hidden");
    e.preventDefault();
  }
});

// Ẩn chức năng cả nhân - Phần job-info

const btn = document.querySelectorAll(".view-more-btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    const content = this.previousElementSibling; // lấy phần tử ngay trước phần tử nút này
    const isHidden = content.classList.contains("hidden");

    if (isHidden) {
      content.classList.remove("hidden");
      this.textContent = "View Less";
    } else {
      content.classList.add("hidden");
      this.textContent = "View More";
    }
  });
}

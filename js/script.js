// Tentang Kami
const tentangKami = document.querySelector(".tentangKami");
const detailTentangKami = document.querySelector("#detailtentangkami");
detailTentangKami.style.display = "none";
tentangKami.addEventListener("click", function () {
  if (detailTentangKami.style.display === "none") {
    detailTentangKami.style.display = "block";
  } else {
    detailTentangKami.style.display = "none";
  }
});

// Program Kami
const programKami = document.querySelector(".programKami");
const detailProgramKami = document.querySelector("#detailprogramkami");

detailProgramKami.style.display = "none";

programKami.addEventListener("click", function () {
  if (detailProgramKami.style.display === "none") {
    detailProgramKami.style.display = "block";
  } else {
    detailProgramKami.style.display = "none";
  }
});

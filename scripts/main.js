var hamburgerMenu = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var closeBtn = document.querySelector(".menu__svg");

hamburgerMenu.addEventListener("click", function () {
	menu.style.transition = "all .4s linear";
	menu.classList.toggle("menu-active");
});

closeBtn.addEventListener("click", function () {
     menu.classList.toggle("menu-active");
});

var code = document.querySelector(".code__tags");

code.innerText = `
<form id="form-id" method="GET"> </form>
<script
  src="https://loremipsum.com/api.js"
  data-client-name="Your Company's Name"
  data-form-id="form-id"
  data-key="test_key"
  data-product="transactions"
  data-env="sandbox">
</script>
`;

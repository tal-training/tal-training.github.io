const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/images/2.jpg") {
    myImage.setAttribute("src", "/images/1.jpg");
  } else {
    myImage.setAttribute("src", "/images/2.jpg");
  }
};
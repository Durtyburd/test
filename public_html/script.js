//Constants
const username = document.getElementById("username");
const password = document.getElementById("password");
const userSubmit = document.getElementById("userSubmit");
const title = document.getElementById("title");
const description = document.getElementById("description");
const image = document.getElementById("image");
const price = document.getElementById("price");
const status = document.getElementById("status");
const usernameItem = document.getElementById("usernameItem");
const itemSubmit = document.getElementById("itemSubmit");

async function submitUser(e) {
  e.preventDefault();
  const user = {
    username: username.value,
    password: password.value,
    listings: [],
    purchases: [],
  };

  const res = await fetch("/add/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

async function submitItem(e) {
  e.preventDefault();
  const item = {
    title: title.value,
    description: description.value,
    image: image.value,
    price: price.value,
    status: status.value,
    username: usernameItem.value,
  };

  const res = await fetch(`/add/items/${usernameItem.value}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

//Event listener for form submit buttons
userSubmit.addEventListener("click", submitUser);
itemSubmit.addEventListener("click", submitItem);

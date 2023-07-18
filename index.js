// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();

  const userList = document.querySelector(".user-list");

  userList.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

main();

function showUserPosts(id) {
  // sets id (left, new variable) -> id passed in
  localStorage.setItem("id", id);
  // reroutes to another location
  window.location.href = `${window.location.origin}/user.html`;
}

function userHTML(user) {
  return `
  <div class="user" onclick="showUserPosts(${user.id})">
    <div class="user-card">
      <div class="user-card__container">
        <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p>
          <b>Website:</b>
          <a href="https://${user.website}" target="_blank">${user.website}</a>
        </p>
      </div>
    </div>
  </div>
  `;
}

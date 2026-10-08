const routes = {
  "/": "<h1>Hello World</h1>",
  "/login": "<h1>Login page</h1>",
  "/profile": "<h1>Profile page</h1>",
};

function render() {
  const path = location.hash.slice(1) || "/";
  document.getElementById("app").innerHTML =
    routes[path] || "<h1>404 - Not found</h1>";
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
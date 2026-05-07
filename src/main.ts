import { renderPosts } from "./posts";

document.querySelector("#app")!.innerHTML = `
    <ul id="list" class="bebas-neue-regular"></ul>
`;

renderPosts();
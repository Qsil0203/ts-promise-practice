import { loadPosts } from "./api";
import { type Post } from "./types";

const posts = await loadPosts();

export function renderPosts() {
  posts.forEach((post: Post) => {
    const li = document.createElement('li')
    li.innerHTML = `
      <li class="post-card">
        <div class="post-title">${post.title}</div>
        <div class="post-body">${post.body}</div>
        <div class = "onbutton">
        <button class ="custom-btn" onclick="document.location='${post.link}'">Link on post</button></div>
    </li>
    `
    document.getElementById("list")?.appendChild(li)
  })
}
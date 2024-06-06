import { getText } from "./text.js";
import { getPosts, addPost } from "./posts.js";
import { getUsers } from "./users.js";

document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

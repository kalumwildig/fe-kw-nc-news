import axios from "axios";

const api = axios.create({
  baseURL: "https://kalum-nc-new-app.herokuapp.com/api",
});

export function fetchAllArticles() {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export function fetchArticle(id) {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
}

export function fetchAllArticlesByTopic(topic) {
  return api.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
}

export function patchVotes(id, number) {
  return api
    .patch(`/articles/${id}`, { inc_votes: number })
    .then(({ data }) => {
      return data;
    });
}

export function postComment(id, commentData) {
  return api.post(`/articles/${id}/comments`, commentData).then(({ data }) => {
    return data.comment;
  });
}

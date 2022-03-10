import axios from "axios";

const api = axios.create({
  baseURL: "https://kalum-nc-new-app.herokuapp.com/api",
});

export function fetchAllArticles(sortSelect) {
  let query = '/articles'

  if (sortSelect?.sortBy && sortSelect?.order) {
    query+=`?sort_by=${sortSelect.sortBy}&order=${sortSelect.order}`
  }
  console.log(query)
  return api.get(query).then(({ data }) => {
    return data.articles;
  });
}

export function fetchArticle(id) {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
}

export function fetchAllArticlesByTopic(topic, sortSelect) {
  let query = `/articles?topic=${topic}`

  if (sortSelect?.sortBy && sortSelect?.order) {
    query+=`&sort_by=${sortSelect.sortBy}&order=${sortSelect.order}`
  }

  console.log(query)
  return api.get(query).then(({ data }) => {
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

export function fetchComments (id) {
    return api.get(`/articles/${id}/comments`).then(({data}) => {
        return data.comments;
    })
}

export function fetchUserByUserName (name) {
    return api.get(`/users/${name}`).then(({data}) => {
        return data.user;
    })
}

export function deleteComments (id) {
  return api.delete(`/comments/${id}`).then((res) => {
   return res;
  })
}
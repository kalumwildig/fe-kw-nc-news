import axios from "axios";

const api = axios.create({
    baseURL: "https://kalum-nc-new-app.herokuapp.com/api",
  });


export function fetchAllArticles () {
    return api.get('/articles').then(({ data }) => {
        return data.articles;
      });
}
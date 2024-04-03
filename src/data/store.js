import {reactive} from 'vue';

export const store = reactive({
 mainTitle: 'Vite Boolflix',
 apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
 cardListMovie: [],
 apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
 cardListTv: [],
 queryParams:{
  api_key: '3f94080f310f95df3a4a3635805ca441',
  query: '',
 }
})
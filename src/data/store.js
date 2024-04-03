import {reactive} from 'vue';

export const store = reactive({
  mainTitle: 'Vite Boolflix',
 apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
 cardListMovie: [],
 apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
 cardListTv: [],
 queryParams:{

 }
})
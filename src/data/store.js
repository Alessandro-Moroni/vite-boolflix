import {reactive} from 'vue';

export const store = reactive({
 mainTitle: 'Vite Boolflix',
 apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
 cardListMovie: [],
 apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
 cardListTv: [],
 popularMovieApi: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200',
 popularMovieList: [],
 popularSeriesApi: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc',
 popularSeriesList: [],
 queryParams:{
  api_key: '3f94080f310f95df3a4a3635805ca441',
  query: '',
 }
})
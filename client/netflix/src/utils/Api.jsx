export const API_END_POINT = "http://localhost:5000/api";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2MyYTg0M2M1NmJhZmQyZmVlZDk5Y2M2YmZlNzk4YSIsIm5iZiI6MTY4NTYzNzY2NS4zNDgsInN1YiI6IjY0NzhjYTIxY2Y0YjhiMDBlMmQ0OTQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sw3YWR4crUcg0MDFfPcjlPE_ZEuLV-4CqhWZtZzAkt8",
  },
};

export const Now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500"

export const SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie?query="
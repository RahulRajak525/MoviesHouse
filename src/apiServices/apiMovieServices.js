import axios from "axios";

class apiMoviesServices {
  static getInstance() {
    return new apiMoviesServices();
  }
  getMoviesList = async (value) => {
    try {
      const response = await axios.get(`http://localhost:4000/movies`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  searchMoviesList = async (value) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/movies?q=${value}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  sortMoviesList = async (value) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/movies?_sort=${value}&_order=asc`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}
export const apiMoviesService = apiMoviesServices.getInstance();

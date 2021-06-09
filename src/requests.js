

const requests = {
    fetchTrending : `/trending/all/week?api_key=2a604b2a3ac73fb35503cf98f7740f05&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=2a604b2a3ac73fb35503cf98f7740f05&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=2a604b2a3ac73fb35503cf98f7740f05&language=en-us`,
    fetchActionMovies : `/discover/movie?api_key=2a604b2a3ac73fb35503cf98f7740f05&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=2a604b2a3ac73fb35503cf98f7740f05&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=2a604b2a3ac73fb35503cf98f7740f05&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=2a604b2a3ac73fb35503cf98f7740f05&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=2a604b2a3ac73fb35503cf98f7740f05&with_genres=99`
}

export default requests;
import { useQuery } from "react-query";

export default function QueryFilm(film) {
    return useQuery(['films', film], () =>
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=2ff2b842380979ada1e6bc585b8d84bd&language=de-DE&query=${film}`).then((res) =>
        res.json()
        )
    );
}


///https://api.themoviedb.org/3/search/movie?api_key=2ff2b842380979ada1e6bc585b8d84bd&language=de-DE&query=hot%20fuzz


//https://pokeapi.co/api/v2/pokemon?limit=${film}&offset=${film}

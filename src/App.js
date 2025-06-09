import {useEffect, useState} from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async ()=>{
        const json = await (await fetch(
            `https://nomad-movies.nomadcoders.workers.dev/movies`
        )).json();
        setMovies(json);
        setLoading(false);
    }
    useEffect(() => {
       getMovies();
    }, [])

    return(
        <div>
            {loading ? <h1> Loading...</h1> :(
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}> {/*id*/}
                            <h2>{movie.original_title}</h2> {/*제목*/}
                            <img src={movie.poster_path} style={{width:"200px"}}></img> {/*포스터*/}
                            <p>{movie.overview}</p> {/*설명*/}
                            <ul>{movie.genre_ids.map((genre)=>(<li key={genre}>{genre}</li>))}</ul> {/*장르*/}
                            <hr />
                        </div>
                    ))}</div>
            )}
        </div>
    );
}
export default App;
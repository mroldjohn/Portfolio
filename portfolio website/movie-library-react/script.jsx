const {useEffect,useMemo, useState}=React;
const STORAGE_KEY="movie-library";
const STARTER_MOVIES = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        releaseDate: "1994-09-23",
        actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler, Clancy Brown",
        director: "Frank Darabont",
        genres: ["Drama"],
        favorite: true,
        description: "A quiet, patient prison drama about hope, friendship, and endurance. Andy Dufresne builds a life inside Shawshank while holding onto a private plan for freedom.",
        runtime: "142 min",
        country: "United States",
        language: "English",
        tagline: "Fear can hold you prisoner. Hope can set you free.",
        watched: false,
        rating:0,
    },
    {
        id: 2,
        title: "The Godfather",
        releaseDate: "1972-03-24",
        actors: "Marlon Brando, Al Pacino, James Caan, Robert Duvall, Diane Keaton",
        director: "Francis Ford Coppola",
        genres: ["Drama"],
        favorite: true,
        description: "A sweeping crime-family drama about power, loyalty, and inheritance. Michael Corleone tries to stay outside the family business, then slowly becomes its center.",
        runtime: "175 min",
        country: "United States",
        language: "English",
        tagline: "An offer you cannot refuse.",
        watched: false,
        rating:0,
    },
    {
        id: 3,
        title: "The Dark Knight",
        releaseDate: "2008-07-18",
        actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine, Gary Oldman",
        director: "Christopher Nolan",
        genres: ["Action", "Drama"],
        favorite: true,
        description: "Batman, Gordon, and Harvey Dent try to break Gotham's criminal networks while the Joker turns the city into a moral test with no easy answers.",
        runtime: "152 min",
        country: "United States",
        language: "English",
        tagline: "Chaos tests every hero.",
        watched: false,
        rating:0,
    },
    {
        id: 4,
        title: "Pulp Fiction",
        releaseDate: "1994-10-14",
        actors: "John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Ving Rhames",
        director: "Quentin Tarantino",
        genres: ["Drama", "Comedy"],
        favorite: false,
        description: "A nonlinear crime story where hitmen, boxers, gangsters, and drifters collide through sharp dialogue, dark humor, and sudden violence.",
        runtime: "154 min",
        country: "United States",
        language: "English",
        tagline: "Three stories crossing at the wrong time.",
        watched: false,
        rating:0,
    },
    {
        id: 5,
        title: "Spirited Away",
        releaseDate: "2001-07-20",
        actors: "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naito, Yasuko Sawaguchi",
        director: "Hayao Miyazaki",
        genres: ["Drama"],
        favorite: false,
        description: "A young girl becomes trapped in a spirit world and must find courage, kindness, and focus to save her parents and return home.",
        runtime: "125 min",
        country: "Japan",
        language: "Japanese",
        tagline: "Growing up inside a world of spirits.",
        watched: false,
        rating:0,
    },
    {
        id: 6,
        title: "Parasite",
        releaseDate: "2019-05-30",
        actors: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam",
        director: "Bong Joon Ho",
        genres: ["Drama", "Comedy"],
        favorite: false,
        description: "A poor family gradually enters the life of a wealthy household, turning a clever social satire into a tense study of class and survival.",
        runtime: "132 min",
        country: "South Korea",
        language: "Korean",
        tagline: "Two families, one house, no easy escape.",
        watched: false,
        rating:0,
    },
    {
        id: 7,
        title: "Mad Max: Fury Road",
        releaseDate: "2015-05-15",
        actors: "Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne, Riley Keough",
        director: "George Miller",
        genres: ["Action", "Sci-Fi"],
        favorite: false,
        description: "A furious desert chase about survival, rebellion, and redemption, driven by practical stunts, explosive momentum, and unforgettable visual design.",
        runtime: "120 min",
        country: "Australia",
        language: "English",
        tagline: "Escape across the wasteland.",
        watched: false,
        rating:0,
    },
    {
        id: 8,
        title: "Arrival",
        releaseDate: "2016-11-11",
        actors: "Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg, Tzi Ma",
        director: "Denis Villeneuve",
        genres: ["Sci-Fi", "Drama"],
        favorite: false,
        description: "A linguist is asked to communicate with mysterious visitors, turning first contact into a moving story about language, memory, and choice.",
        runtime: "116 min",
        country: "United States",
        language: "English",
        tagline: "Why are they here?",
        watched: false,
        rating:0,
    },
    {
        id: 9,
        title: "Interstellar",
        releaseDate: "2014-11-07",
        actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine, Mackenzie Foy",
        director: "Christopher Nolan",
        genres: ["Sci-Fi", "Drama"],
        favorite: true,
        description: "A former pilot joins a mission through a wormhole to find humanity a future, while the cost of time creates heartbreak back on Earth.",
        runtime: "169 min",
        country: "United States",
        language: "English",
        tagline: "Love, time, and gravity across the stars.",
        watched: false,
        rating:0,
    },
    {
        id: 10,
        title: "The Matrix",
        releaseDate: "1999-03-31",
        actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, Joe Pantoliano",
        director: "Lana Wachowski, Lilly Wachowski",
        genres: ["Action", "Sci-Fi"],
        favorite: false,
        description: "A hacker discovers that reality is a simulation and joins a resistance fighting the machines that control humanity.",
        runtime: "136 min",
        country: "United States",
        language: "English",
        tagline: "Question the world you were given.",
        watched: false,
        rating:0,
    },
    {
        id: 11,
        title: "Inception",
        releaseDate: "2010-07-16",
        actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy, Marion Cotillard",
        director: "Christopher Nolan",
        genres: ["Action", "Sci-Fi"],
        favorite: false,
        description: "A thief who steals secrets through dreams takes one last job: planting an idea deep enough that the target believes it is his own.",
        runtime: "148 min",
        country: "United States",
        language: "English",
        tagline: "The dream is the scene of the crime.",
        watched: false,
        rating:0,
    },
    {
        id: 12,
        title: "Everything Everywhere All at Once",
        releaseDate: "2022-03-25",
        actors: "Michelle Yeoh, Ke Huy Quan, Stephanie Hsu, Jamie Lee Curtis, James Hong",
        director: "Daniel Kwan, Daniel Scheinert",
        genres: ["Action", "Comedy", "Sci-Fi"],
        favorite: false,
        description: "A stressed laundromat owner is pulled across the multiverse and must face cosmic chaos, family regret, and the strange power of kindness.",
        runtime: "139 min",
        country: "United States",
        language: "English",
        tagline: "Every choice became a universe.",
        watched: false,
        rating:0,
    },
    {
        id: 13,
        title: "Knives Out",
        releaseDate: "2019-11-27",
        actors: "Daniel Craig, Ana de Armas, Chris Evans, Jamie Lee Curtis, Christopher Plummer",
        director: "Rian Johnson",
        genres: ["Comedy", "Drama"],
        favorite: false,
        description: "A famous mystery writer dies after a family party, and detective Benoit Blanc untangles lies, motives, and one very suspicious inheritance.",
        runtime: "130 min",
        country: "United States",
        language: "English",
        tagline: "Everyone has a motive.",
        watched: false,
        rating:0,
    },
    {
        id: 14,
        title: "The Grand Budapest Hotel",
        releaseDate: "2014-03-28",
        actors: "Ralph Fiennes, Tony Revolori, Saoirse Ronan, F. Murray Abraham, Adrien Brody",
        director: "Wes Anderson",
        genres: ["Comedy", "Drama"],
        favorite: false,
        description: "A hotel concierge and his young lobby boy are pulled into theft, murder, friendship, and old-world elegance between wars.",
        runtime: "99 min",
        country: "United States",
        language: "English",
        tagline: "A perfectly arranged escape.",
        watched: false,
        rating:0,
    },
    {
        id: 15,
        title: "La La Land",
        releaseDate: "2016-12-09",
        actors: "Ryan Gosling, Emma Stone, John Legend, Rosemarie DeWitt, J. K. Simmons",
        director: "Damien Chazelle",
        genres: ["Romance", "Drama"],
        favorite: true,
        description: "A jazz pianist and an aspiring actress fall in love in Los Angeles while chasing dreams that may not leave room for the life they imagined together.",
        runtime: "128 min",
        country: "United States",
        language: "English",
        tagline: "Dreams change the shape of love.",
        watched: false,
        rating:0,
    },
    {
        id: 16,
        title: "Before Sunrise",
        releaseDate: "1995-01-27",
        actors: "Ethan Hawke, Julie Delpy, Andrea Eckert, Hanno Poschl, Karl Bruckschwaiger",
        director: "Richard Linklater",
        genres: ["Romance", "Drama"],
        favorite: false,
        description: "Two strangers meet on a train and spend one night walking through Vienna, talking about love, time, fear, and possibility.",
        runtime: "101 min",
        country: "United States",
        language: "English",
        tagline: "One night can become a whole life.",
        watched: false,
        rating:0,
    },
    {
        id: 17,
        title: "The Princess Bride",
        releaseDate: "1987-09-25",
        actors: "Cary Elwes, Robin Wright, Mandy Patinkin, Chris Sarandon, Andre the Giant",
        director: "Rob Reiner",
        genres: ["Romance", "Comedy", "Action"],
        favorite: false,
        description: "A playful adventure about true love, revenge, sword fights, giants, and storybook charm, told with a wink and a lot of heart.",
        runtime: "98 min",
        country: "United States",
        language: "English",
        tagline: "True love with excellent swordplay.",
        watched: false,
        rating:0,
    },
    {
        id: 18,
        title: "Back to the Future",
        releaseDate: "1985-07-03",
        actors: "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, Thomas F. Wilson",
        director: "Robert Zemeckis",
        genres: ["Comedy", "Sci-Fi"],
        favorite: false,
        description: "Teenager Marty McFly accidentally travels to 1955 and has to repair his parents' future before he disappears from his own timeline.",
        runtime: "116 min",
        country: "United States",
        language: "English",
        tagline: "History needs a little help.",
        watched: false,
        rating:0,
    },
    {
        id: 19,
        title: "Spider-Man: Into the Spider-Verse",
        releaseDate: "2018-12-14",
        actors: "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali, Brian Tyree Henry",
        director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        genres: ["Action", "Comedy"],
        favorite: false,
        description: "Miles Morales discovers his powers and learns what it means to be Spider-Man with help from heroes from other dimensions.",
        runtime: "117 min",
        country: "United States",
        language: "English",
        tagline: "Anyone can wear the mask.",
        watched: false,
        rating:0,
    },
    {
        id: 20,
        title: "The Martian",
        releaseDate: "2015-10-02",
        actors: "Matt Damon, Jessica Chastain, Kristen Wiig, Chiwetel Ejiofor, Jeff Daniels",
        director: "Ridley Scott",
        genres: ["Sci-Fi", "Comedy", "Drama"],
        favorite: false,
        description: "An astronaut is stranded on Mars and uses science, stubbornness, and humor to survive while NASA works on a rescue plan.",
        runtime: "144 min",
        country: "United States",
        language: "English",
        tagline: "Bring him home.",
        watched: false,
        rating:0,
    },
];
const AVAILABLE_GENRES=["Action","Sci-Fi","Drama","Comedy","Romance"];
function readMoviesFromStorage(){
    const savedMovies=localStorage.getItem(STORAGE_KEY);

    if(!savedMovies){
        return STARTER_MOVIES;
    }
    try{
        const parsedMovies=JSON.parse(savedMovies);
        return parsedMovies.map((movie)=>({
            ...movie,
            genres:getGenres(movie),
        }));
    }catch(error){
        console.warn("Couldn't read saved movies.Using starter movies insread.",error);
        return STARTER_MOVIES;
    }
    function getGenres(movie){
        if (Array.isArray(movie.genres)){
            return movie.genres;
        }
        if (typeof movie.genres==="string"&&movie.genres.trim()!==""){
            return [movie.genres];// convert string to array 
        }
        if (typeof movie.genre==="string" && movie.genre.trim()!==""){
            return [movie.genre];
        }
        return [];
    }
}
function addMovie(title,releaseDate,actors,director,genres,favorite,description,watched){
    const id=Date.now();

    return{
        id,
        title:title.trim(),
        releaseDate:releaseDate,
        actors:actors.trim(),
        director:director.trim(),
        genres:[...genres],
        favorite:false,
        description:description.trim(),
        watched:false,
        rating:0,
    }
}
function MovieForm({onAddMovie}){
    const [title,setTitle]=useState("");
    const [releaseDate,setReleaseDate]=useState("");
    const [actors,setActors]=useState("");
    const [director,setDirector]=useState("");
    const [genres,setGenres]=useState([]);
    const [favorite,setFavorite]=useState(false);
    const [watched,setWatched]=useState(false);
    const [description,setDescription]=useState("");
    const isFormValid=
        title.trim()!==""&&actors.trim()!==""&&genres.length>0;
    
    function handleSubmit(event){
        event.preventDefault();
        if(!isFormValid){
            return;
        }
// 
        onAddMovie(title,releaseDate,actors,director,genres,favorite,description,watched);
        setTitle("");
        setDirector("");
        setActors("");
        setGenres([]);
        setReleaseDate("");
        setFavorite(false);
        setDescription("");
        setWatched(false);
    }
    function handleGenreChange(event){
        const genre=event.target.value;
        if(event.target.checked){
            setGenres([...genres,genre]);
        }else{
            setGenres(genres.filter((g)=>g!==genre));
        }
    }
    return(
        <>
        
        <div>
            <form className="movie-form" onSubmit={handleSubmit}>
               < BackgroundCircles />
                <div className="field">
                    <label htmlFor="movie-title">Movie Title</label>
                    <input id="movie-title" type="text" value={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Example: Cars 2"/>
                </div>
                 <div className="field">
                    <label htmlFor="movie-genre">Genres</label>
                    <div className="checkbox-group">

                        {AVAILABLE_GENRES.map((genre)=>(
                            <label key={genre} htmlFor={`genre-${genre}`}>
                                <input key={genre} type="checkbox" id={`genre-${genre}`} value={genre} checked={genres.includes(genre)} onChange={handleGenreChange}>
                                </input>
                                {genre}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="movie-director">Movie Director</label>
                    <input id="movie-director" type="text" value={director} onChange={(event)=>setDirector(event.target.value)} placeholder="Example: Christopher Nolan"/>
                </div>
                <div className="field">
                    <label htmlFor="movie-actors">Actors</label>
                    <textarea id="movie-actors" rows="3" type="text" value={actors} onChange={(event)=>setActors(event.target.value)} placeholder="Seperate with comas"/>
                </div>
                <div className="field">
                    <label htmlFor="movie-description">Description</label>
                    <textarea id="movie-description" rows="3" type="text" value={description} onChange={(event)=>setDescription(event.target.value)} placeholder="Seperate with comas"/>
                </div>
                <div className="field">
                    <label htmlFor="movie-release">Release Date</label>
                    <input id="movie-release" type="date" value={releaseDate} onChange={(event)=>setReleaseDate(event.target.value)} />
                </div>
                <button className="primary-button" type="submit" disabled={!isFormValid}>
                Add Movie
                </button>
            </form>
            
        </div>
        
        </>
    )
}
function Filters({sortBy,setSortBy}){
    return(
        <div className="sort-row p20">
            <select value={sortBy} onChange={(event)=>setSortBy(event.target.value)}
                aria-label="Sort By">
                   <option value="">No sorting</option> 
                   <option value="favorites">Favorites</option>
                   <option value="az">Name A-Z</option>
                   <option value="za">Name Z-A</option>
                   <option value="watched">Watched</option>
                   <option value="unwatched">Unwatched</option>
                   <option value="date-asc">Release Date Ascending</option>
                   <option value="date-desc">Release Date Descending</option>
                   {/* <optgroup label="Genres">
                        <option value="action">Action</option>
                        <option value="drama">Drama</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="drama">Drama</option>
                        <option value="comedy">Comedy</option>
                        <option value="romance">Romance</option>
                   </optgroup> */}
                </select>
        </div>
    )
}
function MovieStats({movies}){
    const favoriteCount=movies.filter(movie=>movie.favorite).length;
    const watchedCount=movies.filter(movie=>movie.watched).length;
    const totalMovies=movies.length;

    return(
        <div className="stats-row p20" aria-label="Movies summary">
            <span>Total movies Added: {totalMovies}</span>
            <span>Favorites: {favoriteCount}</span>
            <span>Watched: {watchedCount}</span>
        </div>
    )
}
    function MovieList({
        movies,onDeleteMovie,
        onDragStart,onDrop,
         onSaveMovie,onToggleFavorite,onToggleRating,onToggleWatched,
    }){
        if(movies.length===0){
            return<p className="empty-state">No movies match</p>;
        }
        return(
            <ul className="movie-list">
                {movies.map((movie)=>(
                    <MovieItem key={movie.id} 
                    movie={movie} 
                    onDeleteMovie={onDeleteMovie}
                    onSaveMovie={onSaveMovie} 
                    onToggleFavorite={onToggleFavorite}
                    onToggleRating={onToggleRating} 
                    onToggleWatched={onToggleWatched}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                     />
                ))}
            </ul>
        );
    }
    function BackgroundCircles(){
        const circles=useMemo(()=>{
            return Array.from({length:6},()=>({
                size:Math.random()*70+30,
                top:Math.random() *90,
                left:Math.random() *90,
                duration:Math.random() *8+8,
                delay:Math.random() *5,
            }));
        },[]);

        return(
            <>
            {circles.map((circle,index)=>(
                <div key={index} className="circles"
                style={{
                    width:`${circle.size}px`,
                    height:`${circle.size}px`,
                    top:`${circle.top}%`,
                    left:`${circle.left}%`,
                    animationDuration:`${circle.duration}s`,
                    animationDelay:`${circle.delay}s`,
                }}/>
            ))}
            </>
        );
    
    
    
    } 
    function MovieItem({movie,onDeleteMovie,onSaveMovie,
        onDragStart,onDrop,
        onToggleFavorite,onToggleRating,onToggleWatched}){
        const [isEditing,setIsEditing]=useState(false);
        const [showDetails,setShowDetails]=useState(false);
        const [draftTitle,setDraftTitle]=useState(movie.title||"");
        const [draftRelease,setDraftRelease]=useState(movie.releaseDate);
        const [draftActors,setDraftActors]=useState(movie.actors||"");
        const [draftDirector,setDraftDirector]=useState(movie.director||"");
        const [draftGenres,setDraftGenres]=useState(movie.genres||[]);
        const [draftDesc,setDraftDesc]=useState(movie.description||"");

        const actorsList=movie.actors
                        .split(",")
                        .map((actor)=>actor.trim())
                        .filter((actor)=>actor!=="");
        const canSave=
        draftTitle.trim()!==""&&
        draftRelease!==""&&
        draftActors.trim()!==""&&
        draftDirector.trim()!==""&&
        draftGenres.length>0&&
        draftDesc.trim()!=="";

        function startEditing(){
            setIsEditing(true);
            setDraftTitle(movie.title);
            setDraftRelease(movie.releaseDate);
            setDraftActors(movie.actors);
            setDraftDirector(movie.director);
            setDraftGenres(movie.genres);
            setDraftDesc(movie.description);
        }
        function cancelEditing(){
            setIsEditing(false);
            setDraftTitle(movie.title);
            setDraftRelease(movie.releaseDate);
            setDraftActors(movie.actors);
            setDraftDirector(movie.director);
            setDraftGenres(movie.genres);
            setDraftDesc(movie.description);
        }
        function saveEditing(){
            if(!canSave){
                return;
            }
            onSaveMovie(movie.id,{
                title:draftTitle,
                releaseDate:draftRelease,
                actors:draftActors,
                director:draftDirector,
                genres:draftGenres,
                description:draftDesc,
            });
            setIsEditing(false)
        }
        
        return( <>
            <li className="movie-card" 
            draggable 
            onDragStart={()=>onDragStart(movie.id)}
            onDragOver={(event)=>event.preventDefault()} onDrop={()=>onDrop(movie.id)}
            >
            < BackgroundCircles />
                {isEditing ? (
                    <div className="editArea">
                        <input value={draftTitle}
                        onChange={(event)=>setDraftTitle(event.target.value)}
                        aria-label="Edit Movie Title"
                        type="text" />

                        <input value={draftRelease}
                        onChange={(event)=>setDraftRelease(event.target.value)}
                        aria-label="Edit Release Date"
                        type="date" />

                        <textarea value={draftActors}
                        onChange={(event)=>setDraftActors(event.target.value)}
                        aria-label="Edit Movie Actors"
                        rows="4" />

                        <textarea value={draftDesc}
                        onChange={(event)=>setDraftDesc(event.target.value)}
                        aria-label="Edit Movie Description"
                        rows="4" />

                        <input value={draftDirector}
                        onChange={(event)=>setDraftDirector(event.target.value)}
                        aria-label="Edit Movie Director"
                        type="text" />



                    <div className="checkbox-group">

                        {AVAILABLE_GENRES.map((genre)=>(
                            <label key={genre} htmlFor={`draftGenre-${genre}`}>
                                <input key={genre} type="checkbox" 
                                id={`draftGenre-${genre}`} value={genre} 
                                checked={draftGenres.includes(genre)} 
                                onChange={(event)=>{
                                    setDraftGenres((prevGenres)=>{
                                        if(event.target.checked){
                                            return [...prevGenres,genre];
                                        }
                                        return prevGenres.filter((g)=>g!==genre);
                                    })
                                }}>
                                </input>
                                {genre}
                            </label>
                        ))}
                    </div>

                    <div className="button-row">
                        <button type="button" className="primary-btn" onClick={saveEditing} disabled={!canSave}>
                            Save
                        </button>
                        <button type="button" className="danger-btn" onClick={()=>onDeleteMovie(movie.id)}>
                            Delete
                        </button>
                        <button type="button" className="danger-btn" onClick={cancelEditing} >
                            Cancel
                        </button>
                    </div>
                    </div>
                ): (<>
                <div className="movie-header">
                    <div className="movie-poster">
                        🎬
                    </div>
                    <h3>{movie.title?movie.title:"Untitled movie"}</h3>
                    <div className="genres">
                        {movie.genres.length>0?movie.genres.map((genre)=>{
                            return(
                                <span key={genre} className={`genre ${genre.toLowerCase()}`}>{genre}</span>
                            )
                        }): <span>No genres specified</span>}
                    </div>
                    <p>{movie.releaseDate?movie.releaseDate:"Movie release date not specified"}</p>
                    <div className="ratingArea">
                        Rating: {movie.rating>0?movie.rating:"Not rated yet"}
                    
                        <span className="rating-buttons">
                            {[1,2,3,4,5].map((ratingValue)=>(
                                <button key={ratingValue} type="button" className={movie.rating>=ratingValue?"rating-button active":"rating-button"}
                                onClick={(event)=>{event.stopPropagation();
                                    event.preventDefault();
                                    onToggleRating(movie.id,ratingValue);}}
                                    aria-label={`Rate ${ratingValue} star${ratingValue>1?"s":""}`}
                                title={`Rate ${ratingValue} star${ratingValue>1?"s":""}`}
                            >
                                {/* {movie.rating>=ratingValue? "\u2B50" : 
                                "" } */}{"\u2605"}
                            </button>
                            ))}
                
                        </span>
                    </div>
                    <button type="button" className={movie.favorite ? "favorite-button active" : "favorite-button"}
                    onClick={(event)=>{event.stopPropagation();
                                event.preventDefault();
                                onToggleFavorite(movie.id);}}
                    aria-label={movie.favorite ? "Remove from favorite" : "Add to favorite"}
                    title={movie.favorite ? "Remove from favorite" : "Add to favorite"}>
                        {"\u2764"}
                    </button>
                    <button type="button" className={movie.watched?"watched-button active":"watched-button"}
                    onClick={(event)=>{event.stopPropagation();
                        event.preventDefault();
                        onToggleWatched(movie.id);}}
                    aria-label={movie.watched?"Remove from watched":"Add to watched"}
                    title={movie.watched?"Remove from watched":"Add to watched"}>
                        {!movie.watched ? "👀" : "🙈"}
                        </button>
                    
                </div>
                <button type="button" onClick={()=>setShowDetails(!showDetails)}>
                    {showDetails?"Hide Details":"Show Movie Details"}
                </button>
                <button type="button" onClick={()=>startEditing(movie.id)}>
                        Edit
                    </button>

                {showDetails&&(<>
                    <h3>Actors</h3>
                    <ul className="actors-list">
                        {actorsList.map((actor,index)=>(
                            <li key={ `${movie.id}-${actor}-${index}`}>{actor}</li>
                        ))}
                    </ul>
                    <h3>Description</h3>
                    <p>{movie.description}</p>
                </>)}
            </>)}
            </li>
        </>);
    }
    function SearchBar({searchText,onSearchChange}){
        return(
            <div className="search-row">
                <input type="search" value={searchText} onChange={(event)=>onSearchChange(event.target.value)}
                placeholder="Search Movies by name, actors, directors or genre" aria-label="Search Movies by name" />
                <button type="button" onClick={()=>onSearchChange("")} disabled={searchText===""}>
                    Clear
                </button>
            </div>
        )
    }
function MovieApp(){
    const[darkMode,setDarkMode]=useState(()=>{
        return JSON.parse(localStorage.getItem("darkMode"))||false;
    });
    const [deletedMovie,setDeletedMovie]=useState(null);
    useEffect(()=>{
        localStorage.setItem("darkMode",JSON.stringify(darkMode));
    },[darkMode]);
    const [movies,setMovies]=useState(readMoviesFromStorage);
    const [draggedMovieId,setDraggedMovieId]=useState(null);
    const [searchText,setSearchText]=useState("");
    const [sortBy,setSortBy]=useState("");
    const [showSidebar,setShowSidebar]=useState(false);

    const filteredMovies=useMemo(()=>{
        const normalizedSearch=searchText.trim().toLowerCase();
        const matchesSearch=(movie)=>
            normalizedSearch===""||(movie.title).toLowerCase().includes(normalizedSearch)||
            (movie.actors||"").toLowerCase().includes(normalizedSearch)||
            (movie.director).toLowerCase().includes(normalizedSearch)||
            (movie.genres).join(",").includes(normalizedSearch);
        const filtered=movies.filter((movie)=>
            matchesSearch(movie));
        const sorted=[...filtered];
        if(sortBy==="favorites"){
            const favorites=[];
            const others=[];

            sorted.forEach((movie)=>{
                if(movie.favorite){
                    favorites.push(movie);

                }else{
                    others.push(movie);
                }
            });
           return[...favorites,...others];
        }
        if(sortBy==="watched"){
            const seen=[];
            const unseen=[];

            sorted.forEach((movie)=>{
                if(movie.watched){
                    seen.push(movie);
                }else{
                    unseen.push(movie);
                }
            });
            return[...seen,...unseen];
        }
        if(sortBy==="unwatched"){
            const seen=[];
            const unseen=[];

            sorted.forEach((movie)=>{
                if(movie.watched){
                    seen.push(movie);
                }else{
                    unseen.push(movie);
                }
            });
            return[...unseen,...seen];
        }
        if(sortBy==="az"){
            sorted.sort((a,b)=>a.title.localeCompare(b.title));
        };
        if(sortBy==="za"){
            sorted.sort((a,b)=>b.title.localeCompare(a.title));
        };
        if(sortBy==="date-asc"){
            sorted.sort((a,b)=>String(a.releaseDate).localeCompare(String(b.releaseDate)));
        };
        if(sortBy==="date-desc"){
            sorted.sort((a,b)=>String(b.releaseDate).localeCompare(String(a.releaseDate)));
        };
        return sorted;

        },[movies,sortBy,searchText]);
    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY,JSON.stringify(movies));
    },[movies]);
    function onAddMovie(title,releaseDate,actors,director,genres,description,watched){
        const newMovie=addMovie(title,releaseDate,actors,director,genres,description);
        setMovies([...movies,newMovie]);
    }
    function clearMovies(){
        if(window.confirm("Do you want to clear all movies? This action cannot be undone.")){
            setMovies([]);
        }
    }
    function saveMovie(id,updatedFields){
        const updatedMovies=movies.map((movie)=>{
            if(movie.id===id){
                return{
                    ...movie,
                    title:updatedFields.title.trim(),
                    releaseDate:updatedFields.releaseDate,
                    actors:updatedFields.actors.trim(),
                    director:updatedFields.director.trim(),
                    genres:updatedFields.genres,
                    description:updatedFields.description.trim(),
                };
            }
            return movie;
        });
        setMovies(updatedMovies);
    }
    function toggleFavorite(id){
        const updatedMovies=movies.map((movie)=>
        movie.id===id?{...movie,favorite:!movie.favorite}: movie);
        setMovies(updatedMovies);
    }

    function toggleRating(id,rating){
        const updatedMovies=movies.map((movie)=>
        movie.id===id?{...movie,rating:rating}:movie);
        setMovies(updatedMovies);
    }
    function toggleWatched(id){
        const updatedMovies=movies.map((movie)=>
        movie.id===id?{...movie,watched:!movie.watched}:movie);
        setMovies(updatedMovies);
    }
    function deleteMovie(id){
        const movieToDelete=movies.find((movie)=>movie.id===id);
        if(!movieToDelete){
            return;
        }
        setDeletedMovie(movieToDelete);
        setMovies(movies.filter((movie)=>movie.id!==id));
    }
    function undoDelete(){
        if(!deletedMovie){
            return;
        }
        setMovies([...movies,deletedMovie]);
        setDeletedMovie(null);
    }
    function handleDragStart(id){
        setDraggedMovieId(id);

    }
    function handleDrop(targetId){
        if(draggedMovieId===null){
            return;
        }
    
        if(draggedMovieId===targetId){
            setDraggedMovieId(null);
            return;
        }
        const draggedIndex=movies.findIndex((movie)=>movie.id===draggedMovieId);
        const targetIndex=movies.findIndex((movie)=>movie.id===targetId);
        if (draggedIndex===-1||targetIndex===-1){
            // stop if either is missing
            setDraggedMovieId(null);
            return;

        }
        const reorderedMovies=[...movies];
        // starting from dragged index remove 1
        const [draggedMovie]=reorderedMovies.splice(draggedIndex,1);
        // starting at target index remove 0 and insert draggedMovie
        reorderedMovies.splice(targetIndex,0,draggedMovie);
        setMovies(reorderedMovies);
        setDraggedMovieId(null);
    }
    return(
        <>
        <header className="header">
            <h1>Movie Library</h1>
        <button className="menu-button"
        onClick={()=>setShowSidebar(!showSidebar)}>
            ☰
        </button>
        </header>
        <main className={darkMode? "app-shell dark":"app-shell light"} >
            {/* <section className="intro-section p-40" >
                <p className="eyebrow">practice REACT library</p>
                <p className="intro">
                    Add Movies,edit them,favorite them, search them and drag them into a new order
                </p>

            </section> */}
            <div className={
                showSidebar? 
                "layout-grid p40 side-open":
                "layout-grid p40 side-closed"}>
            {showSidebar &&( 
                <div className="panel sidebar animation-smooth">
                    <h2>Add a new movie</h2>
                    <MovieForm showSidebar={showSidebar} onAddMovie={onAddMovie}/>
                </div>
            )}

                <div className="panel">
                    <div className="stats">
                        <h2>Your Movies</h2>
                        <MovieStats movies={movies} />
                        <Filters sortBy={sortBy} setSortBy={setSortBy} />
                        </div>
                    <SearchBar searchText={searchText} onSearchChange={setSearchText}/>
                    <button onClick={clearMovies}>Clear All Movies</button>
                    <div>
                        {deletedMovie &&(
                            <button type="button" className="undo-btn" onClick={undoDelete}>
                                Undo delete: {deletedMovie.title}
                            </button>
                        )}
                    </div>
                    
                    <div>
                        <MovieList
                        movies={filteredMovies}
                        onToggleFavorite={toggleFavorite}
                        onToggleRating={toggleRating}
                        onToggleWatched={toggleWatched}
                        onSaveMovie={saveMovie}
                        onDeleteMovie={deleteMovie}
                        onDragStart={handleDragStart}
                        onDrop={handleDrop}
                        />
                    </div>
                </div>
            </div>

        </main>
    </>
    )
}
function App(){
    return <MovieApp />;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

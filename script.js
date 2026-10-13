
const movieCategories = {
    thriller: [
        {
            title: "Prisoners",
            year: 2013,
            description: "Mroczny thriller o zaginięciu dwóch dziewczynek. Napięcie, trudne wybory moralne i śledztwo, które nie daje spokoju.",
            poster: "https://image.tmdb.org/t/p/original/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg"
        },
        {
            title: "Zodiac",
            year: 2007,
            description: "Dziennikarze i śledczy próbują rozwikłać sprawę seryjnego zabójcy. Jedno z najbardziej wciągających filmowych śledztw.",
            poster: "https://image.tmdb.org/t/p/original/km9xno8aBrh6K9hnpSRz7lTQQi.jpg"
        },
        {
            title: "Shutter Island",
            year: 2010,
            description: "Dwóch agentów przybywa do szpitala psychiatrycznego na odizolowanej wyspie w sprawie zaginionej pacjentki.",
            poster: "https://image.tmdb.org/t/p/original/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg"
        },
        {
            title: "Memento",
            year: 2000,
            description: "Mężczyzna z zaburzeniami pamięci krótkotrwałej próbuje rozwikłać zagadkę śmierci żony. Nietypowa narracja zmusza widza do łączenia wskazówek.",
            poster: "https://image.tmdb.org/t/p/original/nzlv62aC0octS5AklAiWpXLX9Z0.jpg"
        },
        {
            title: "Inception",
            year: 2010,
            description: "Specjaliści wkraczają do świata snów, aby wykonać niezwykle trudne zadanie. Granica między rzeczywistością a iluzją zaczyna się zacierać.",
            poster: "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        },
        
        {
            title: "Gone Girl",
            year: 2014,
            description: "Po tajemniczym zaginięciu żony jej mąż staje się głównym podejrzanym, a śledztwo odsłania kolejne sekrety ich związku.",
            poster: "https://image.tmdb.org/t/p/original/ts996lKsxvjkO2yiYG0ht4qAicO.jpg"
        },
        {
            title: "28 Years Later: The Bone Temple",
            year: 2026,
            description: "Kontynuacja postapokaliptycznej historii rozgrywającej się w świecie zmienionym przez epidemię.",
            poster: "https://image.tmdb.org/t/p/original/j44XuLdsoSnlSuMgdKmcju4vM95.jpg"
        }

    ],

    crime: [
        {
            title: "Prisoners",
            year: 2013,
            description: "Mroczny thriller o zaginięciu dwóch dziewczynek. Napięcie, trudne wybory moralne i śledztwo, które nie daje spokoju.",
            poster: "https://image.tmdb.org/t/p/original/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg"
        },
        {
            title: "Zodiac",
            year: 2007,
            description: "Dziennikarze i śledczy próbują rozwikłać sprawę seryjnego zabójcy. Jedno z najbardziej wciągających filmowych śledztw.",
            poster: "https://image.tmdb.org/t/p/original/km9xno8aBrh6K9hnpSRz7lTQQi.jpg"
        },
        {
            title: "Memento",
            year: 2000,
            description: "Mężczyzna z zaburzeniami pamięci krótkotrwałej próbuje rozwikłać zagadkę śmierci żony. Nietypowa narracja zmusza widza do łączenia wskazówek.",
            poster: "https://image.tmdb.org/t/p/original/nzlv62aC0octS5AklAiWpXLX9Z0.jpg"
        },
        {
            title: "Memories of Murder",
            year: 2003,
            description: "Koreańscy detektywi próbują rozwiązać sprawę serii morderstw. Film łączy śledztwo z mocnym obrazem frustracji i bezsilności.",
            poster: "https://image.tmdb.org/t/p/original/jcgUjx1QcupGzjntTVlnQ15lHqy.jpg"
        },
        {
            title: "Se7en",
            year: 1995,
            description: "Dwóch detektywów bada sprawę zabójcy, który inspiruje swoje zbrodnie siedmioma grzechami głównymi.",
            poster: "https://image.tmdb.org/t/p/original/yEbjPcq6VoWSG9KRWqzIbOxoy6W.jpg"
        },
        
        {
            title: "Django Unchained",
            year: 2012,
            description: "Uwolniony niewolnik i łowca nagród wyruszają razem w podróż, której celem jest odnalezienie i uwolnienie żony Django.",
            poster: "https://image.tmdb.org/t/p/original/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg"
        },
        {
            title: "Gone Girl",
            year: 2014,
            description: "Zaginięcie żony zamienia życie jej męża w medialną sensację, a kolejne odkrycia podważają wszystko, co wydawało się oczywiste.",
            poster: "https://image.tmdb.org/t/p/original/ts996lKsxvjkO2yiYG0ht4qAicO.jpg"
        }

    ],

    mystery: [
        {
            title: "Shutter Island",
            year: 2010,
            description: "Dwóch agentów przybywa do szpitala psychiatrycznego na odizolowanej wyspie w sprawie zaginionej pacjentki.",
            poster: "https://image.tmdb.org/t/p/original/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg"
        },
        {
            title: "Donnie Darko",
            year: 2001,
            description: "Nastolatek zmagający się z problemami psychicznymi doświadcza dziwnych wydarzeń, które podważają jego rozumienie czasu i rzeczywistości.",
            poster: "https://image.tmdb.org/t/p/original/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg"
        },
        {
            title: "Oldboy",
            year: 2003,
            description: "Mężczyzna po latach tajemniczego uwięzienia próbuje odkryć, kto i dlaczego odebrał mu wolność.",
            poster: "https://image.tmdb.org/t/p/original/kKMuZ5hOXSbesbM1Ba1hGugJEro.jpg"
        },
        {
            title: "The Prestige",
            year: 2006,
            description: "Rywalizacja dwóch iluzjonistów przeradza się w obsesję, w której każdy sekret może zmienić wszystko.",
            poster: "https://image.tmdb.org/t/p/original/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg"
        },
        {
            title: "Memento",
            year: 2000,
            description: "Mężczyzna z zaburzeniami pamięci krótkotrwałej próbuje rozwikłać zagadkę śmierci żony. Nietypowa narracja zmusza widza do łączenia wskazówek.",
            poster: "https://image.tmdb.org/t/p/original/nzlv62aC0octS5AklAiWpXLX9Z0.jpg"
        }
    ],

    drama: [
        {
            title: "Forrest Gump",
            year: 1994,
            description: "Niezwykła opowieść o prostym człowieku, który przypadkowo staje się uczestnikiem najważniejszych wydarzeń współczesnej historii Stanów Zjednoczonych.",
            poster: "https://image.tmdb.org/t/p/original/9wlYJy01XgvIhdf651FgyJkau07.jpg"
        },
        {
            title: "Good Will Hunting",
            year: 1997,
            description: "Utalentowany młody człowiek próbuje poradzić sobie z własną przeszłością i odkryć, co naprawdę chce zrobić ze swoim życiem.",
            poster: "https://image.tmdb.org/t/p/original/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg"
        },
        {
            title: "Nightcrawler",
            year: 2014,
            description: "Mężczyzna odkrywa świat nocnych wiadomości i zaczyna przekraczać kolejne granice w pogoni za sukcesem.",
            poster: "https://image.tmdb.org/t/p/original/gYPIRu0jX2CGYdeO422cq3N78ju.jpg"
        },
        {
            title: "Whiplash",
            year: 2014,
            description: "Młody perkusista trafia pod skrzydła wymagającego nauczyciela. Ambicja i dążenie do perfekcji wystawiają go na ciężką próbę.",
            poster: "https://image.tmdb.org/t/p/original/sL32IZkyjlF7otj5vcUxiKSKzg5.jpg"
        },
        {
            title: "Demolition",
            year: 2015,
            description: "Po osobistej tragedii mężczyzna próbuje poradzić sobie z żałobą oraz odbudować swoje życie na nowo.",
            poster: "https://image.tmdb.org/t/p/original/4t56LZ1KbOOxgKfqMKN6truBDVc.jpg"
        },
        
        {
            title: "Parasite",
            year: 2019,
            description: "Rodzina żyjąca w trudnych warunkach stopniowo wkracza w życie zamożnego domu. Pozornie prosty plan prowadzi do nieprzewidywalnych wydarzeń.",
            poster: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
        },
        {
            title: "Fight Club",
            year: 1999,
            description: "Znudzony codziennością mężczyzna poznaje charyzmatycznego Tylera Durdena, a ich znajomość prowadzi do powstania tajemniczego klubu.",
            poster: "https://image.tmdb.org/t/p/original/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg"
        },
        {
            title: "The Truman Show",
            year: 1998,
            description: "Mężczyzna zaczyna podejrzewać, że jego pozornie zwyczajne życie skrywa coś znacznie większego.",
            poster: "https://image.tmdb.org/t/p/original/vuza0WqY239yBXOadKlGwJsZJFE.jpg"
        }

    ],

    comic: [
        {
            title: "The Dark Knight",
            year: 2008,
            description: "Batman staje przed przeciwnikiem, który wystawia na próbę zasady, na których opiera się Gotham.",
            poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
        },
        {
            title: "Joker",
            year: 2019,
            description: "Historia człowieka na marginesie społeczeństwa. Seria wydarzeń zaczyna zmieniać jego życie w niepokojący sposób.",
            poster: "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
        },
        {
            title: "Avengers: Endgame",
            year: 2019,
            description: "Pozostali bohaterowie próbują znaleźć sposób na odwrócenie skutków katastrofy, która zmieniła cały wszechświat.",
            poster: "https://image.tmdb.org/t/p/original/bR8ISy1O9XQxqiy0fQFw2BX72RQ.jpg"
        },
        {
            title: "Spider-Man: Across the Spider-Verse",
            year: 2023,
            description: "Miles Morales odmawia pogodzenia się z prawem multiwersum wymuszającym śmierć bliskiej mu osoby.",
            poster: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
        },
        {
            title: "The Batman",
            year: 2022,
            description: "Młody Batman bada serię zagadkowych zbrodni, odkrywając mroczne sekrety Gotham.",
            poster: "https://image.tmdb.org/t/p/original/seyWFgGInaLqW7nOZvu0ZC95rtx.jpg"
        }
    ],

    fantasy: [
        {
            title: "The Hobbit: An Unexpected Journey",
            year: 2012,
            description: "Bilbo Baggins opuszcza spokojny dom i wyrusza w podróż przez niezwykły świat pełen niebezpieczeństw.",
            poster: "https://image.tmdb.org/t/p/original/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg"
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            year: 2003,
            description: "Los Śródziemia rozstrzyga się podczas ostatnich etapów wyprawy mającej zakończyć panowanie Saurona.",
            poster: "https://image.tmdb.org/t/p/original/wNB551TsEb7KFU3an5LwOrgvUpn.jpg"
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: 2001,
            description: "Drużyna wyrusza w niebezpieczną podróż, aby zniszczyć pierścień mogący pogrążyć świat w ciemności.",
            poster: "https://image.tmdb.org/t/p/original/b4XZizlvqQkZno8cT3VPBYTGudB.jpg"
        },
        {
            title: "The Lord of the Rings: The Two Towers",
            year: 2002,
            description: "Bohaterowie zostają rozdzieleni, a siły Śródziemia przygotowują się na coraz większe zagrożenie.",
            poster: "https://image.tmdb.org/t/p/original/pcXIJt2E09eI3FFxcxjOY0beCxY.jpg"
        },
        {
            title: "The Hobbit: The Battle of the Five Armies",
            year: 2014,
            description: "Walka o skarb Samotnej Góry prowadzi do wielkiego starcia, które zadecyduje o przyszłości wielu ludów.",
            poster: "https://image.tmdb.org/t/p/original/xT98tLqatZPQApyRmlPL12LtiWp.jpg"
        }
    ],

    horror: [
        {
            title: "Gonjiam: Haunted Asylum",
            year: 2018,
            description: "Ekipa programu Horror Times odwiedza opuszczony szpital psychiatryczny. Wyprawa szybko zamienia się w koszmar.",
            poster: "https://image.tmdb.org/t/p/original/fNqlsmu2tiI1bXcpU31yjHPkiJz.jpg"
        },
        {
            title: "The Taking of Deborah Logan",
            year: 2014,
            description: "Ekipa dokumentalna nagrywa kobietę z Alzheimerem, której zachowanie staje się coraz bardziej niepokojące.",
            poster: "https://image.tmdb.org/t/p/original/fzYg3Drbnf4DtNftQdMBRMy2H5D.jpg"
        },
        {
            title: "REC",
            year: 2007,
            description: "Reporterka i operator kamery towarzyszą służbom podczas interwencji w budynku, który niedługo po ich wejściu zostaje zamknięty.",
            poster: "https://image.tmdb.org/t/p/original/f3bjpbG0KI9rw7mxGa9p6xbHqwV.jpg"
        },
        {
            title: "Caveat",
            year: 2020,
            description: "Samotny mężczyzna przyjmuje propozycję opieki nad siostrzenicą znajomego w odizolowanym domu.",
            poster: "https://image.tmdb.org/t/p/original/nbug05AceVU8PMXIONDFxMRtq54.jpg"
        },
        {
            title: "Possum",
            year: 2018,
            description: "Mroczna, niepokojąca opowieść o człowieku wracającym do rodzinnego domu i mierzącym się z własną przeszłością.",
            poster: "https://image.tmdb.org/t/p/original/5QOFKSpE7KacBriU95fxG6hmmvr.jpg"
        },
        
        {
            title: "Lake Mungo",
            year: 2008,
            description: "Po śmierci nastoletniej dziewczyny jej rodzina doświadcza niepokojących zdarzeń, a dokumentalne nagrania odsłaniają kolejne tajemnice.",
            poster: "https://image.tmdb.org/t/p/original/5IaGu8r0t6bBaydkR6z9l9tJsCg.jpg"
        },
        {
            title: "Shutter",
            year: 2004,
            description: "Fotograf i jego partnerka zaczynają dostrzegać dziwne postacie na zdjęciach po tajemniczym wypadku.",
            poster: "https://image.tmdb.org/t/p/original/7Tq7SrB14r3WpjJQOldbDHQk89J.jpg"
        },
        {
            title: "Incantation",
            year: 2022,
            description: "Kobieta próbuje ochronić córkę przed konsekwencjami klątwy związanej z dawnym rytuałem.",
            poster: "https://image.tmdb.org/t/p/original/cWz28oGV3cSajWdziVQbqrYCmnX.jpg"
        },
        {
            title: "Hereditary",
            year: 2018,
            description: "Po śmierci babci rodzina zaczyna odkrywać sekrety, które prowadzą do coraz bardziej niepokojących wydarzeń.",
            poster: "https://image.tmdb.org/t/p/original/hjlZSXM86wJrfCv5VKfR5DI2VeU.jpg"
        },
        {
            title: "The Medium",
            year: 2021,
            description: "Ekipa dokumentalna obserwuje tajlandzką rodzinę, której życie zostaje zakłócone przez przerażające wydarzenia.",
            poster: "https://image.tmdb.org/t/p/original/tWoSE8SH6XhgWKHIL3p0sj7lA3V.jpg"
        },
        {
            title: "Host",
            year: 2020,
            description: "Grupa znajomych organizuje zdalną sesję spirytystyczną, która szybko wymyka się spod kontroli.",
            poster: "https://image.tmdb.org/t/p/original/tuFli2qLjYRTOxDL6fx0PiMjS5j.jpg"
        },
        {
            title: "Terrified",
            year: 2017,
            description: "W jednej z dzielnic Buenos Aires dochodzi do serii niewytłumaczalnych zjawisk, które badają specjaliści.",
            poster: "https://image.tmdb.org/t/p/original/eMP4F0POBgrB4icn6XgYeLLIrld.jpg"
        },
        {
            title: "The Autopsy of Jane Doe",
            year: 2016,
            description: "Dwóch pracowników kostnicy bada ciało nieznanej kobiety, odkrywając coraz bardziej zagadkowe ślady.",
            poster: "https://image.tmdb.org/t/p/original/6K0wjP8kPCiPYy9PtXBGuypyt5I.jpg"
        },
        {
            title: "The Dark and the Wicked",
            year: 2020,
            description: "Rodzeństwo wraca do rodzinnego domu, gdzie podczas opieki nad chorym ojcem zaczyna doświadczać złowrogich wydarzeń.",
            poster: "https://image.tmdb.org/t/p/original/4DB9VFVTp0IQEWFEIf9f3f2z3t5.jpg"
        },
        
    ]
};

const movieTopFive = {
    thriller: [
        "Prisoners",
        "Zodiac",
        "Shutter Island",
        "Memento",
        "Inception"
    ],
    crime: [
        "Prisoners",
        "Zodiac",
        "Memento",
        "Memories of Murder",
        "Se7en"
    ],
    mystery: [
        "Shutter Island",
        "Donnie Darko",
        "Oldboy",
        "The Prestige",
        "Memento"
    ],
    drama: [
        "Forrest Gump",
        "Good Will Hunting",
        "Nightcrawler",
        "Whiplash",
        "Demolition"
    ],
    comic: [
        "The Dark Knight",
        "Joker",
        "Avengers: Endgame",
        "Spider-Man: Across the Spider-Verse",
        "The Batman"
    ],
    fantasy: [
        "The Hobbit: An Unexpected Journey",
        "The Lord of the Rings: The Return of the King",
        "The Lord of the Rings: The Fellowship of the Ring",
        "The Lord of the Rings: The Two Towers",
        "The Hobbit: The Battle of the Five Armies"
    ],
    horror: [
        "Gonjiam: Haunted Asylum",
        "The Taking of Deborah Logan",
        "REC",
        "Caveat",
        "Possum"
    ]
};


// Łączymy gatunki w jedną listę filmów i usuwamy duplikaty.
const allMovies = Object.values(movieCategories)
    .flatMap(function (movies) {
        return movies;
    })
    .reduce(function (uniqueMovies, movie) {
        const existingMovie = uniqueMovies.find(function (item) {
            return item.title === movie.title;
        });

        if (existingMovie) {
            Object.keys(movieCategories).forEach(function (genre) {
                const belongsToGenre = movieCategories[genre].some(
                    function (item) {
                        return item.title === movie.title;
                    }
                );

                if (
                    belongsToGenre &&
                    !existingMovie.genres.includes(genre)
                ) {
                    existingMovie.genres.push(genre);
                }
            });
        } else {
            uniqueMovies.push({
                ...movie,
                genres: Object.keys(movieCategories).filter(
                    function (genre) {
                        return movieCategories[genre].some(
                            function (item) {
                                return item.title === movie.title;
                            }
                        );
                    }
                ),
                rating: null
            });
        }

        return uniqueMovies;
    }, []);

// Wpisujemy wyłącznie oceny, które zostały ustalone.
const movieRatings = {
    "Prisoners": 10,
    "Zodiac": 9.8,
    "Shutter Island": 9.6,
    "Memento": 9.5,
    "Inception": 9.5,
    "Memories of Murder": 9.5,
    "Se7en": 9.2,
    "Donnie Darko": 9,
    "Oldboy": 8.9,
    "The Prestige": 8.9,
    "Forrest Gump": 9,
    "Good Will Hunting": 8.5,
    "Nightcrawler": 8.6,
    "Whiplash": 8,
    "Demolition": 7.9,
    "The Dark Knight": 9.2,
    "Joker": 9,
    "Avengers: Endgame": 8,
    "Spider-Man: Across the Spider-Verse": 8,
    "The Batman": 7.6,
    "The Hobbit: An Unexpected Journey": 8.4,
    "The Lord of the Rings: The Return of the King": 8.2,
    "The Lord of the Rings: The Fellowship of the Ring": 8.2,
    "The Lord of the Rings: The Two Towers": 8,
    "The Hobbit: The Battle of the Five Armies": 8,    
    "Parasite": 9,
    "Fight Club": 8.9,
    "Django Unchained": 8.8,
    "Gone Girl": 8,
    "The Truman Show": 7.8,
    "28 Years Later: The Bone Temple": 8.6

};

const fearRatings = {
    "Gonjiam: Haunted Asylum": 10,
    "The Taking of Deborah Logan": 9,
    "REC": 9,
    "Caveat": 8.5,
    "Possum": 8,
    "Lake Mungo": 7,
    "Shutter": 7.5,
    "Incantation": 6.5,
    "Hereditary": 7.5,
    "The Medium": 6,
    "Host": 7,
    "Terrified": 7,
    "The Autopsy of Jane Doe": 6.5,
    "The Dark and the Wicked": 7

};


allMovies.forEach(function (movie) {
    if (Object.prototype.hasOwnProperty.call(fearRatings, movie.title)) {
        movie.fearRating = fearRatings[movie.title];
        movie.rating = null;
    } else if (Object.prototype.hasOwnProperty.call(movieRatings, movie.title)) {
        movie.rating = movieRatings[movie.title];
    }
});


const genreNames = {
    thriller: "Thriller",
    crime: "Kryminał",
    mystery: "Mystery",
    drama: "Dramat",
    comic: "Komiksowe",
    fantasy: "Fantasy",
    horror: "Horror"
};

let currentGenre = "thriller";
let currentMovieIndex = 0;

// Elementy rankingu gatunkowego.
const movieTitle = document.getElementById("movie-title");
const movieDescription = document.getElementById("movie-description");
const moviePosition = document.getElementById("movie-position");
const moviePoster = document.getElementById("movie-poster");

const nextButton = document.getElementById("next-movie");
const prevButton = document.getElementById("prev-movie");
const genreButtons = document.querySelectorAll(".genre-button");

// Elementy Filmoteki.
const filmSearch = document.getElementById("film-search");
const genreFilter = document.getElementById("genre-filter");
const filmSort = document.getElementById("film-sort");
const filmGrid = document.getElementById("film-grid");
const libraryCount = document.getElementById("library-count");
const libraryEmpty = document.getElementById("library-empty");

// Wyświetlanie wybranego filmu w rankingu gatunkowym.

function showMovie() {
    const topFiveTitles = movieTopFive[currentGenre];

    const movies = topFiveTitles
        .map(function (title) {
            return movieCategories[currentGenre].find(
                function (movie) {
                    return movie.title === title;
                }
            );
        })
        .filter(Boolean);

    if (movies.length === 0) {
        return;
    }

    if (!movies || movies.length === 0) {
        return;
    }

    currentMovieIndex =
        ((currentMovieIndex % movies.length) + movies.length) % movies.length;

    const movie = movies[currentMovieIndex];

    if (movieTitle) {
        movieTitle.textContent = movie.title;
    }

    if (movieDescription) {
        movieDescription.textContent = movie.description;
    }

    if (moviePosition) {
        moviePosition.textContent =
            `FILM ${String(currentMovieIndex + 1).padStart(2, "0")} / ${String(movies.length).padStart(2, "0")}`;
    }


const ratingContainer = document.getElementById("movie-rating-container");
const fearRatingNote = document.getElementById("fear-rating-note");
const isHorror = currentGenre === "horror";

if (ratingContainer) {
    ratingContainer.replaceChildren();

    const rating = isHorror
        ? fearRatings[movie.title]
        : movieRatings[movie.title];

    const ratingValue = document.createElement("div");
    ratingValue.className = "movie-rating";
    ratingValue.textContent =
        rating !== undefined && rating !== null
            ? `${rating} / 10`
            : "Brak oceny";

    const ratingLabel = document.createElement("span");
    ratingLabel.className = "movie-rating-label";
    ratingLabel.textContent = isHorror
        ? "SKALA STRACHU"
        : "OCENA OGÓLNA";

    ratingContainer.append(ratingValue, ratingLabel);
}

if (fearRatingNote) {
    fearRatingNote.hidden = !isHorror;
}


    if (!moviePoster) {
        return;
    }

    moviePoster.innerHTML = "";

    const posterImage = document.createElement("img");
    posterImage.src = movie.poster || "";
    posterImage.alt = `Plakat filmu ${movie.title}`;
    posterImage.classList.add("movie-poster-image");

    function showFallback() {
        moviePoster.innerHTML = "";

        const year = document.createElement("span");
        year.textContent = movie.year;

        const title = document.createElement("p");
        title.textContent = movie.title.toUpperCase();

        moviePoster.append(year, title);
    }

    posterImage.onerror = showFallback;

    if (movie.poster) {
        moviePoster.appendChild(posterImage);
    } else {
        showFallback();
    }
}


// Strzałka: następny film.
if (nextButton) {
    nextButton.addEventListener("click", function () {
        const movies = movieTopFive[currentGenre];
        currentMovieIndex = (currentMovieIndex + 1) % movies.length;
        showMovie();
    });
}

// Strzałka: poprzedni film.
if (prevButton) {
    prevButton.addEventListener("click", function () {
        const movies = movieTopFive[currentGenre];

        currentMovieIndex =
            (currentMovieIndex - 1 + movies.length) % movies.length;

        showMovie();
    });
}

// Zmiana gatunku w rankingu.
genreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedGenre = button.dataset.genre;

        if (!movieCategories[selectedGenre]) {
            return;
        }

        currentGenre = selectedGenre;
        currentMovieIndex = 0;

        document.body.className = "movies-page theme-" + currentGenre;

        genreButtons.forEach(function (genreButton) {
            genreButton.classList.remove("active");
        });

        button.classList.add("active");

        showMovie();
    });
});

// Wyświetlanie Filmoteki z wyszukiwaniem, filtrowaniem i sortowaniem.
function renderFilmLibrary() {
    // Pozwala uruchomić ranking także na stronie bez Filmoteki.
    if (!filmGrid || !filmSearch || !genreFilter || !filmSort) {
        return;
    }

    const searchText = filmSearch.value.toLowerCase().trim();
    const selectedGenre = genreFilter.value;
    const sortOption = filmSort.value;

    let filteredMovies = allMovies.filter(function (movie) {
        const matchesTitle = movie.title
            .toLowerCase()
            .includes(searchText);

        const matchesGenre =
            selectedGenre === "all" ||
            movie.genres.includes(selectedGenre);

        return matchesTitle && matchesGenre;
    });

    filteredMovies.sort(function (a, b) {
        // Filmy bez ocen zawsze trafiają na koniec.
        if (a.rating === null && b.rating !== null) {
            return 1;
        }

        if (a.rating !== null && b.rating === null) {
            return -1;
        }

        if (sortOption === "title-asc") {
            return a.title.localeCompare(b.title);
        }

        if (sortOption === "year-desc") {
            return b.year - a.year;
        }

        if (sortOption === "year-asc") {
            return a.year - b.year;
        }

        if (sortOption === "rating-asc") {
            return (a.rating ?? 0) - (b.rating ?? 0);
        }

        return (b.rating ?? 0) - (a.rating ?? 0);
    });

    filmGrid.innerHTML = "";

    filteredMovies.forEach(function (movie) {
        const card = document.createElement("article");
        card.classList.add("film-card");

        const poster = document.createElement("img");
        poster.src = movie.poster || "";
        poster.alt = "Plakat filmu " + movie.title;
        poster.loading = "lazy";

        poster.onerror = function () {
            poster.style.display = "none";
        };

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const year = document.createElement("p");
        year.textContent = movie.year;

        const genres = document.createElement("p");
        genres.classList.add("film-genres");

        genres.textContent = movie.genres
            .map(function (genre) {
                return genreNames[genre] || genre;
            })
            .join(" · ");

        
const rating = document.createElement("p");
rating.classList.add("film-rating");

const ratingLabel = document.createElement("span");
ratingLabel.classList.add("film-rating-label");

const isHorror = Object.prototype.hasOwnProperty.call(
    fearRatings,
    movie.title
);

const score = isHorror
    ? fearRatings[movie.title]
    : movie.rating;

if (score === null || score === undefined) {
    rating.textContent = "Ocena nieustalona";
} else {
    rating.textContent = "Ocena: " + score + " / 10";
}

ratingLabel.textContent = isHorror
    ? "SKALA STRACHU"
    : "OCENA OGÓLNA";

if (!isHorror && movie.rating !== null && movie.rating >= 8.5) {
    card.classList.add("high-rated");
}


        card.append(poster, title, year, genres, rating, ratingLabel);
        filmGrid.appendChild(card);
    });

    if (libraryCount) {
        libraryCount.textContent =
            "Znaleziono filmów: " + filteredMovies.length;
    }

    if (libraryEmpty) {
        libraryEmpty.hidden = filteredMovies.length > 0;
    }
}

// Zabezpieczenie: słuchacze powstają tylko wtedy, gdy elementy istnieją.
if (filmSearch) {
    filmSearch.addEventListener("input", renderFilmLibrary);
}

if (genreFilter) {
    genreFilter.addEventListener("change", renderFilmLibrary);
}

if (filmSort) {
    filmSort.addEventListener("change", renderFilmLibrary);
}

// Uruchamiamy oba widoki.
showMovie();
renderFilmLibrary();


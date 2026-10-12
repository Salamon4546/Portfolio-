
const movieCategories = {
    thriller: [
        {
            title: "Prisoners",
            year: 2013,
            description: "Mroczny thriller o zaginięciu dwóch dziewczynek. Napięcie, trudne wybory moralne i śledztwo, które nie daje spokoju.",
            poster: "https://image.tmdb.org/t/p/original/3XUDusNMvbubbKUx1qKh456MQd3.jpg"
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
            poster:"https://image.tmdb.org/t/p/original/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg"
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
        }
    ],

    crime: [
        {
            title: "Prisoners",
            year: 2013,
            description: "Mroczny thriller o zaginięciu dwóch dziewczynek. Napięcie, trudne wybory moralne i śledztwo, które nie daje spokoju.",
            poster: "https://image.tmdb.org/t/p/original/3XUDusNMvbubbKUx1qKh456MQd3.jpg"
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
        }
    ],

    mystery: [
        {
            title: "Shutter Island",
            year: 2010,
            description: "Dwóch agentów przybywa do szpitala psychiatrycznego na odizolowanej wyspie w sprawie zaginionej pacjentki.",
            poster:"https://image.tmdb.org/t/p/original/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg"
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
            description: "Niezwykła opowieść o prostym człowieku z niskim ilorazem inteligencji (75 IQ), który przypadkowo staje się uczestnikiem najważniejszych wydarzeń współczesnej historii Stanów Zjednoczonych. ",
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
            poster:"https://image.tmdb.org/t/p/original/sL32IZkyjlF7otj5vcUxiKSKzg5.jpg"
        },
        {
            title: "Demolition",
            year: 2015,
            description: "Po osobistej tragedii mężczyzna próbuje poradzić sobie z żałobą oraz stara sie odbudować swoje życie na nowo. ",
            poster: "https://image.tmdb.org/t/p/original/4t56LZ1KbOOxgKfqMKN6truBDVc.jpg"
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
            description: "Pozostali bohaterowie z 'Avengers: Infinity War' próbują znaleźć sposób na odwrócenie skutków katastrofy, która zmieniła cały wszechświat.",
            poster: "https://image.tmdb.org/t/p/original/bR8ISy1O9XQxqiy0fQFw2BX72RQ.jpg"
        },
        {
            title: "Spider-Man: Across the Spider-Verse",
            year: 2023,
            description: "Miles Morales odmawia pogodzenia się z prawem multiwersum wymuszającym śmierć bliskiej mu osoby. ",
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
            description: "Bilbo Baggins opuszcza spokojny dom i wyrusza w podróż, która prowadzi go przez niezwykły świat pełen niebezpieczeństw.",
            poster:"https://image.tmdb.org/t/p/original/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg"
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
            description: "Ekipa programu 'Horror Times' odwiedza opuszczony szpital psychiatryczny. Wyprawa szybko zamienia się w koszmar.",
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
            description: "Samotny mężczyzna przyjmuje propozycje od znajomego w zaopiekowaniu się jego niestabilną psychicznie siostrzenicą, a to wszystko w odizolowanym domu. ",
            poster: "https://image.tmdb.org/t/p/original/nbug05AceVU8PMXIONDFxMRtq54.jpg"
        },
        {
            title: "Possum",
            year: 2018,
            description: "Mroczna, niepokojąca opowieść o człowieku wracającym do rodzinnego domu i mierzącym się z własną przeszłością.",
            poster: "https://image.tmdb.org/t/p/original/5QOFKSpE7KacBriU95fxG6hmmvr.jpg"
            
        }
    ]
};

let currentGenre = "thriller";
let currentMovieIndex = 0;


const movieTitle = document.getElementById("movie-title");
const movieDescription = document.getElementById("movie-description");
const moviePosition = document.getElementById("movie-position");
const moviePoster = document.getElementById("movie-poster");

const nextButton = document.getElementById("next-movie");
const prevButton = document.getElementById("prev-movie");

function showMovie() {
    const movies = movieCategories[currentGenre];
    const movie = movies[currentMovieIndex];

    movieTitle.textContent = movie.title;
    movieDescription.textContent = movie.description;

    moviePosition.textContent =
        `FILM ${String(currentMovieIndex + 1).padStart(2, "0")} / ${String(movies.length).padStart(2, "0")}`;

    moviePoster.innerHTML = "";

    const posterImage = document.createElement("img");

    posterImage.src = movie.poster || "";
    posterImage.alt = `Plakat filmu ${movie.title}`;
    posterImage.classList.add("movie-poster-image");

    function showFallback() {
        moviePoster.innerHTML = `
            <span>${movie.year}</span>
            <p>${movie.title.toUpperCase()}</p>
       
        `;
    }

    posterImage.onerror = showFallback;

    if (movie.poster) {
        moviePoster.appendChild(posterImage);
    } else {
        showFallback();
    }
}

nextButton.addEventListener("click", function () {
    const movies = movieCategories[currentGenre];

    currentMovieIndex = (currentMovieIndex + 1) % movies.length;

    showMovie();
});

prevButton.addEventListener("click", function () {
    const movies = movieCategories[currentGenre];

    currentMovieIndex =
        (currentMovieIndex - 1 + movies.length) % movies.length;

    showMovie();
});
const genreButtons = document.querySelectorAll(".genre-button");

genreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentGenre = button.dataset.genre;
        document.body.className = "movies-page theme-" + currentGenre;
        currentMovieIndex = 0;

        genreButtons.forEach(function (genreButton) {
            genreButton.classList.remove("active");
        });

        button.classList.add("active");

        showMovie();
    });
});

showMovie();
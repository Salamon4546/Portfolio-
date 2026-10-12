
const movieCategories = {
    thriller: [
        {
            title: "Prisoners",
            year: 2013,
            description: "Mroczny thriller o zaginięciu dwóch dziewczynek. Napięcie, trudne wybory moralne i śledztwo, które nie daje spokoju."
        },
        {
            title: "Zodiac",
            year: 2007,
            description: "Dziennikarze i śledczy próbują rozwikłać sprawę seryjnego zabójcy. Jedno z najbardziej wciągających filmowych śledztw."
        },
        {
            title: "Shutter Island",
            year: 2010,
            description: "Dwóch agentów przybywa do szpitala psychiatrycznego na odizolowanej wyspie w sprawie zaginionej pacjentki."
        },
        {
            title: "Memento",
            year: 2000,
            description: "Mężczyzna z zaburzeniami pamięci krótkotrwałej próbuje rozwikłać zagadkę śmierci żony. Nietypowa narracja zmusza widza do łączenia wskazówek."
        },
        {
            title: "Inception",
            year: 2010,
            description: "Specjaliści wkraczają do świata snów, aby wykonać niezwykle trudne zadanie. Granica między rzeczywistością a iluzją zaczyna się zacierać."
        }
    ],

    crime: [
        {
            title: "Prisoners",
            year: 2013,
            description: "Mroczny thriller o zaginięciu dwóch dziewczynek. Napięcie, trudne wybory moralne i śledztwo, które nie daje spokoju."
        },
        {
            title: "Zodiac",
            year: 2007,
            description: "Dziennikarze i śledczy próbują rozwikłać sprawę seryjnego zabójcy. Jedno z najbardziej wciągających filmowych śledztw."
        },
        {
            title: "Memento",
            year: 2000,
            description: "Mężczyzna z zaburzeniami pamięci krótkotrwałej próbuje rozwikłać zagadkę śmierci żony. Nietypowa narracja zmusza widza do łączenia wskazówek."
        },
        {
            title: "Memories of Murder",
            year: 2003,
            description: "Koreańscy detektywi próbują rozwiązać sprawę serii morderstw. Film łączy śledztwo z mocnym obrazem frustracji i bezsilności."
        },
        {
            title: "Se7en",
            year: 1995,
            description: "Dwóch detektywów bada sprawę zabójcy, który inspiruje swoje zbrodnie siedmioma grzechami głównymi."
        }
    ],

    mystery: [
        {
            title: "Shutter Island",
            year: 2010,
            description: "Dwóch agentów przybywa do szpitala psychiatrycznego na odizolowanej wyspie w sprawie zaginionej pacjentki."
        },
        {
            title: "Donnie Darko",
            year: 2001,
            description: "Nastolatek zmagający się z problemami psychicznymi doświadcza dziwnych wydarzeń, które podważają jego rozumienie czasu i rzeczywistości."
        },
        {
            title: "Oldboy",
            year: 2003,
            description: "Mężczyzna po latach tajemniczego uwięzienia próbuje odkryć, kto i dlaczego odebrał mu wolność."
        },
        {
            title: "The Prestige",
            year: 2006,
            description: "Rywalizacja dwóch iluzjonistów przeradza się w obsesję, w której każdy sekret może zmienić wszystko."
        },
        {
            title: "Memento",
            year: 2000,
            description: "Mężczyzna z zaburzeniami pamięci krótkotrwałej próbuje rozwikłać zagadkę śmierci żony. Nietypowa narracja zmusza widza do łączenia wskazówek."
        }
    ],

    drama: [
        {
            title: "Forrest Gump",
            year: 1994,
            description: "Niezwykła opowieść o prostym człowieku z niskim ilorazem inteligencji (75 IQ), który przypadkowo staje się uczestnikiem najważniejszych wydarzeń współczesnej historii Stanów Zjednoczonych. "
        },
        {
            title: "Good Will Hunting",
            year: 1997,
            description: "Utalentowany młody człowiek próbuje poradzić sobie z własną przeszłością i odkryć, co naprawdę chce zrobić ze swoim życiem."
        },
        {
            title: "Nightcrawler",
            year: 2014,
            description: "Mężczyzna odkrywa świat nocnych wiadomości i zaczyna przekraczać kolejne granice w pogoni za sukcesem."
        },
        {
            title: "Whiplash",
            year: 2014,
            description: "Młody perkusista trafia pod skrzydła wymagającego nauczyciela. Ambicja i dążenie do perfekcji wystawiają go na ciężką próbę."
        },
        {
            title: "Demolition",
            year: 2015,
            description: "Po osobistej tragedii mężczyzna próbuje poradzić sobie z żałobą oraz stara sie odbudować swoje życie na nowo. "
        }
    ],

    comic: [
        {
            title: "The Dark Knight",
            year: 2008,
            description: "Batman staje przed przeciwnikiem, który wystawia na próbę zasady, na których opiera się Gotham."
        },
        {
            title: "Joker",
            year: 2019,
            description: "Historia człowieka na marginesie społeczeństwa. Seria wydarzeń zaczyna zmieniać jego życie w niepokojący sposób."
        },
        {
            title: "Avengers: Endgame",
            year: 2019,
            description: "Pozostali bohaterowie z 'Avengers: Infinity War' próbują znaleźć sposób na odwrócenie skutków katastrofy, która zmieniła cały wszechświat."
        },
        {
            title: "Spider-Man: Across the Spider-Verse",
            year: 2023,
            description: "Miles Morales odmawia pogodzenia się z prawem multiwersum wymuszającym śmierć bliskiej mu osoby. "
        },
        {
            title: "The Batman",
            year: 2022,
            description: "Młody Batman bada serię zagadkowych zbrodni, odkrywając mroczne sekrety Gotham."
        }
    ],

    fantasy: [
        {
            title: "The Hobbit: An Unexpected Journey",
            year: 2012,
            description: "Bilbo Baggins opuszcza spokojny dom i wyrusza w podróż, która prowadzi go przez niezwykły świat pełen niebezpieczeństw."
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            year: 2003,
            description: "Los Śródziemia rozstrzyga się podczas ostatnich etapów wyprawy mającej zakończyć panowanie Saurona."
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: 2001,
            description: "Drużyna wyrusza w niebezpieczną podróż, aby zniszczyć pierścień mogący pogrążyć świat w ciemności."
        },
        {
            title: "The Lord of the Rings: The Two Towers",
            year: 2002,
            description: "Bohaterowie zostają rozdzieleni, a siły Śródziemia przygotowują się na coraz większe zagrożenie."
        },
        {
            title: "The Hobbit: The Battle of the Five Armies",
            year: 2014,
            description: "Walka o skarb Samotnej Góry prowadzi do wielkiego starcia, które zadecyduje o przyszłości wielu ludów."
        }
    ],

    horror: [
        {
            title: "Gonjiam: Haunted Asylum",
            year: 2018,
            description: "Ekipa programu 'Horror Times' odwiedza opuszczony szpital psychiatryczny. Wyprawa szybko zamienia się w koszmar."
        },
        {
            title: "The Taking of Deborah Logan",
            year: 2014,
            description: "Ekipa dokumentalna nagrywa kobietę z Alzheimerem, której zachowanie staje się coraz bardziej niepokojące."
        },
        {
            title: "REC",
            year: 2007,
            description: "Reporterka i operator kamery towarzyszą służbom podczas interwencji w budynku, który niedługo po ich wejściu zostaje zamknięty."
        },
        {
            title: "Caveat",
            year: 2020,
            description: "Samotny mężczyzna przyjmuje propozycje od znajomego w zaopiekowaniu się jego niestabilną psychicznie siostrzenicą, a to wszystko w odizolowanym domu. "
        },
        {
            title: "Possum",
            year: 2018,
            description: "Mroczna, niepokojąca opowieść o człowieku wracającym do rodzinnego domu i mierzącym się z własną przeszłością."
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

    moviePoster.innerHTML = `
        <span>${movie.year}</span>
        <p>${movie.title.toUpperCase()}</p>
        <small>MY MOVIE RANKING</small>
    `;
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
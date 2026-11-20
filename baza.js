const BAZA_URL = "https://pub-455c0d32f5c8404082c43a9158408b16.r2.dev";

    // 2. Baza zabytków podzielona na okresy:
    const BAZA_OKRESOW = {
	  "neolit": [
		{
		  tytul: "Ostrze liściowate",
          plik: "MLSztyletPaleoAOGlb.glb",
          poster: "2_zdjecie_Ostrz_Lisciowate.png",
          stanowisko: "Krasnystaw okolice, woj. Lubelskie",
          opis: "Bifacjalne ostrze liściowate z początku paleolitu górnego (ok. … tys. BC; kultura jerzmanowicka)",
          badania: "Przypadkowe znalezisko powierzchniowe w … r.",
          miejsce: "IA UMCS (dep. Muzeum Narodowe Lublin - wystawa)",
          literatura: ""
		}, 
		{
		  tytul: "Rdzenie Krzemienne",
          plik: "MSzeligaRdzeniePolaczoneglbAO.glb",
          poster: "MSRdzenKlem1Prev.png",
          stanowisko: "Klementowice, woj. Lubelskie",
          opis: "Składanka wytworów z krzemienia świeciechowskiego z późnego paleolitu (ok. … tys. BC; kultura magdaleńska)",
          badania: "Badania wykopaliskowe w latach …, T. Wiśniewski",
          miejsce: "Zbiory IA UMCS",
          literatura: ""
		},
		{
		  tytul: "Harpun Kościany",
          plik: "MLHarpunKosciGlbAO.glb",
          poster: "4_zdjecie_Harpun.png",
          stanowisko: "Krasnystaw okolice, woj. Lubelskie",
          opis: "Harpun kościany z wczesnego mezolitu (ok. … tys. BC; kultura?)",
          badania: "Przypadkowe znalezisko w … r.",
          miejsce: "Zbiory IA UMCS",
          literatura: ""
		},
		{
		  tytul: "Rdzeń Obsydianowy",
          plik: "MSZRdzenObsydianGlbAO.glb",
          poster: "5_zdjecieV2_rdzen.png",
          stanowisko: "Tominy, stan. 6, gm. Ożarów, woj. świętokrzyskie",
          opis: "Rdzeń obsydianowy z wczesnego neolitu (VI/V tys. BC; kultura ceramiki wstęgowej rytej)",
          badania: "Badania wykopaliskowe w 2006 r. (M. Szeliga i A. Zakościelna )",
          miejsce: "Zbiory IA UMCS",
          literatura: "Szeliga 2009, Tabl. I:6"
		},
		{
		  tytul: "Paciorek Grafitowy",
          plik: "MSZPaciorekGrafitGlbAO.glb",
          poster: "6_zdjecie_Paciorek.png",
          stanowisko: "Tominy, stan. 6, gm. Ożarów, woj. świętokrzyskie",
          opis: "Paciorek grafitowy z wczesnego neolitu (VI/V tys. BC; kultura ceramiki wstęgowej rytej)",
          badania: "Badania wykopaliskowe w 2006 r. (M. Szeliga i A. Zakościelna )",
          miejsce: "Zbiory IA UMCS",
          literatura: "Szeliga et al. w druku"
		},
		{
		  tytul: "Zdobiona Czarka",
          plik: "MuzeumNaczynieKCWRGlbAO.glb",
          poster: "7_zdjecie_Naczynie.png",
          stanowisko: "Świerszczów-Kolonia, stan. 28, gm. Hrubieszów, woj. lubelskie",
          opis: "Czarka zdobiona w stylu wschodniolinearnym z wczesnego neolitu (VI/V tys. BC; kultura bukowogórska/ gr. Szarvas Érpart) ",
          badania: "Badania wykopaliskowe w 1988 r. (A. Kokowski, A. Zakościelna, H. Taras)",
          miejsce: "Zbiory IA UMCS",
          literatura: "Zakościelna 1988, Ryc. 2: b"
		},
		{
		  tytul: "Ciężarki Tkackie",
          plik: "AZPrzesliki2FinalAoGlb.glb",
          poster: "8_zdjecie_Ciezarek.png",
          stanowisko: "ŚŚwierszczów-Kolonia, stan. 28gm. Hrubieszów, ",
          opis: "Ciężarki tkackie z wczesnego neolitu (VI/V tys. BC; kultura ceramiki wstęgowej rytej)",
          badania: "Badania wykopaliskowe w 1988 r. (A. Zakościelna, H. Taras)",
          miejsce: "Zbiory IA UMCS",
          literatura: "Gawryjołek-Szeliga 2009"
		}
	  ],
      "wczesne_zelazo": [
        {
          tytul: "Kubek z ornamentem",
          plik: "EKInkrustowanyKubekGLBVer2AO.glb",
          poster: "EKInkrustowanyKubekPrev.png",
          stanowisko: "Jakubowice Murowane, stan. 5, woj. lubelskie",
          opis: "Kubek z ornamentem wypełnionym białą inkrustacją z wczesnej epoki żelaza (…BC, kultura łużycka)",
          badania: "Badania wykopaliskowe w … r. (U. Kurzątkowska, TYLKO?)",
          miejsce: "Zbiory IA UMCS",
          literatura: ""
        },
        {
		  tytul: "Naczynie pomorskie",
          plik: "NaczyniePomorskieBlend2AOVer2.glb",
          poster: "MuzeumNaczyniePomorskiePrev.png",
          stanowisko: "Żuków, stan. 1,gm.…woj. lubelskie",
          opis: "Naczynie rytualne, tzw. kernos z wczesnej epoki żelaza (600-500 BC, kultura pomorska)",
          badania: "Badania wykopaliskowe w 1960 r. (J. Gurba)",
          miejsce: "Zbiory Muzeum Narodowego w Lublinie",
          literatura: "Czopek 1992, tabl. XLI; Kuśnierz 2010, ryc. 2: 1"
        }
		
      ],
      "rzym": [
        {
          tytul: "Zapinka Kaczkowata",
          plik: "MZFibulaKaczkAO.glb",
          poster: "56. zapinka kaczka.png",
          stanowisko: "Masłomęcz, stan.…,gm. Hrubieszów, ",
          opis: "Brązowa zapinka w kształcie kaczki AVII typu Masłomęcz z okresu rzymskiego (koniec II – początek III w. po Chr., kultura wielbarska)",
          badania: "Badania wykopaliskowe w … r. (A. Kokowski)",
          miejsce: "Zbiory Muzeum Zamojskiego w Zamościu",
          literatura: ""
        },
		{
          tytul: "Złota klamerka esowata",
          plik: "MZKlamEsoAuGlbAO.glb",
          poster: "MZKlamEsoAuGlb-screenshot.png",
          stanowisko: "Masłomęcz, stan.…,gm. Hrubieszów,woj. lubelskie",
          opis: "Złota klamerka esowata z okresu rzymskiego (koniec II w. po Chr., kultura wielbarska)",
          badania: "Badania wykopaliskowe w … r. (A. Kokowski)",
          miejsce: "Zbiory Muzeum Zamojskiego w Zamościu",
          literatura: ""
        },
		{
		  tytul: "Fibula Feugere 11",
          plik: "PLFibula201942Cz1GlbAO.glb",
          poster: "51. Fibula Feugere 11.png",
          stanowisko: "Malbork-Wielbark, woj. pomorskie",
          opis: "Brązowa fibula typu Feugère 11 z młodszego okresu przedrzymskiego (koniec I w. przed Chr., kultura ……)",
          badania: "Badania wykopaliskowe w 2019 r. (P. Łuczkiewicz, J. Kleemann)",
          miejsce: "Zbiory Muzeum Zamkowego w Malborku",
          literatura: "Kuzioła, Łuczkiewicz 2024"
        }
      ]
    };
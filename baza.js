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
          literatura: "Szeliga M. 2009. Znaczenie obsydianu karpackiego w gospodarce surowcowej najstarszych społeczności rolniczych na ziemiach polskich, [w:] Gancarski J. (red.) Surowce naturalne w Karpatach oraz ich wykorzystanie w pradziejach i wczesnym średniowieczu, Krosno: Muzeum Podkarpackie, 287-324."
		},
		{
		  tytul: "Paciorek Grafitowy",
          plik: "MSZPaciorekGrafitGlbAO.glb",
          poster: "6_zdjecie_Paciorek.png",
          stanowisko: "Tominy, stan. 6, gm. Ożarów, woj. świętokrzyskie",
          opis: "Paciorek grafitowy z wczesnego neolitu (VI/V tys. BC; kultura ceramiki wstęgowej rytej)",
          badania: "Badania wykopaliskowe w 2006 r. (M. Szeliga i A. Zakościelna )",
          miejsce: "Zbiory IA UMCS",
          literatura: "Szeliga M., Přichystal  A., Miśta-Jakubowska E., Všianský D., Ryguła A., Czech-Błońska R. w druku. An exceptional stone bead from the Linear Pottery culture settlement in Tominy (S Poland) in the light of archaeometric analyses. [in:] Kraszewska A., Nowak M., Skłucki J. (eds.) Afferant montes pacem pópulo, et colles iustítiam. Studies in Honour of Professor Paweł Valde-Nowak, Kraków."
		},
		{
		  tytul: "Zdobiona Czarka",
          plik: "MuzeumNaczynieKCWRGlbAO.glb",
          poster: "7_zdjecie_Naczynie.png",
          stanowisko: "Świerszczów-Kolonia, stan. 28, gm. Hrubieszów, woj. lubelskie",
          opis: "Czarka zdobiona w stylu wschodniolinearnym z wczesnego neolitu (VI/V tys. BC; kultura bukowogórska/ gr. Szarvas Érpart) ",
          badania: "Badania wykopaliskowe w 1988 r. (A. Kokowski, A. Zakościelna, H. Taras)",
          miejsce: "Zbiory IA UMCS",
          literatura: "Zakościelna A. 1988. Wielokulturowe stanowisko 28 w Świerszczowie Kolonii gm. Hrubieszów. W: J. Gurba (red.), Sprawozdania z badań terenowych Katedry Archeologii UMCS w 1988 roku. Lublin: Uniwersytet Marii Curie-Skłodowskiej, Katedra Archeologii, 6-11"
		},
		{
		  tytul: "Czarka k. Malicka",
          plik: "AZNaczynkoMalickieGlbAO.glb",
          poster: "9_zdjecie_Malickie.png",
          stanowisko: "Las Stocki, stan. 7A, gm. Końskowola, woj. lubelskie",
          opis: "Czarka z ornamentem kłutym z wczesnego neolitu (1 poł. V tys. BC, kultura malicka)",
          badania: "Badania wykopaliskowe w 1984 r. (A. Zakościelna)",
          miejsce: "Zbiory IA UMCS",
          literatura: "Zakościelna A., Gurba J. 1997. Z problematyki kultury malickiej na Wyżynie Lubelsko-Wołyńskiej. Archeologia Polski Środkowowschodniej 2, 201-209."
		},
		{
		  tytul: "Wenus - Las Stocki",
          plik: "MLWenusLasStockiAO.glb",
          poster: "10_zdjecie_Wenus.png",
          stanowisko: "Las Stocki, stan. 7A, gm. Końskowola, woj. lubelskie",
          opis: "Venus – niewielka figurka gliniana przedstawiająca kobietę w tzw. pozycji orantes (modląca się) z eneolitu (koniec V – poł. IV tys. BC, kultura lubelsko-wołyńska). Figurka mogła być zwieńczeniem wylewu naczynia służącego do celów obrzędowych.",
          badania: "Badania wykopaliskowe w 1984 r. (A. Zakościelna, H. Taras)",
          miejsce: "Zbiory IA UMCS",
          literatura: "Zakościelna A. 1986. Z badań osady kultury wołyńsko-lubelskiej ceramiki malowanej w Lesie Stockim, stan. 7, gm. Końskowola. Sprawozdania Archeologiczne 38, 31-48."
		},
		{
		  tytul: "Czarka Malowana",
          plik: "AZNaczynieLubWolGlbAO.glb",
          poster: "11_zdjecie_Czarka.png",
          stanowisko: "Las Stocki, stan. 7A, gm. Końskowola, woj. lubelskie",
          opis: "Czarka malowana białą olejną farbą wykonaną z kredy, tłuszczu zwierzęcego i kurzego białka z eneolitu (koniec V – poł. IV tys. BC, kultura lubelsko-wołyńska).",
          badania: "Badania wykopaliskowe w 1982 r. (A. Zakościelna)",
          miejsce: "Zbiory IA UMCS",
          literatura: "Kadrow S., Zakościelna A. 2000. An Outline of the Evolution of Danubian Cultures in Małopolska and Western. In: A. Kośko (ed.), The western border area of the Tripolye culture (= Baltic-Pontic Studies 3). Poznań: Adam Mickiewicz University, Institute of Eastern Studies, Institute of Prehistory, 187-255."
		},
		{
		  tytul: "Przęsliki Tkackie",
          plik: "AZPrzesliki2FinalAoGlbVer2.glb",
          poster: "8_zdjecie_Ciezarek.png",
          stanowisko: "Las Stocki, stan. 7, gm. Końskowola, woj. lubelskie",
          opis: "Zdobiony przęślik gliniany – zatyczka do wrzeciona (koniec V – poł. IV tys. BC, kultura lubelsko-wołyńska). ",
          badania: "Badania wykopaliskowe w 1984 r. (A. Zakościelna)",
          miejsce: "Zbiory IA UMCS",
          literatura: "Zakościelna A. 1986. Z badań osady kultury wołyńsko-lubelskiej ceramiki malowanej w Lesie Stockim, stan. 7, gm. Końskowola. Sprawozdania Archeologiczne 38, 31-48."
		},
		{
		  tytul: "Sztylet Miedziany",
          plik: "MLSztylVadastraGlbAO.glb",
          poster: "14_zdjecie_Grot.png",
          stanowisko: "Strzyżów stan. 26, gm. Horodło, woj. lubelskie",
          opis: "Sztylet miedziany typu Vadastra, przerobiony na zawieszkę; atrybut wysoko postawionego mężczyzny z eneolitu (koniec V – poł. IV tys. BC, kultura lubelsko-wołyńska).",
          badania: "Badania wykopaliskowe w 1994 r. (A. Zakościelna)",
          miejsce: "Zbiory IA UMCS",
          literatura: "Zakościelna A., Adamczak K., Garbacz-Klempka A., Kowalski Ł. 2023. A Cucuteni-Vădastra Type Dagger from Site 26 at Strzyżów (S-E Poland) Attests to the Intercultural Landscape of the Eneolithic Eastern Carpathians. Analecta Archaeologica Ressoviensia 18, 83–95."
		},
		{
		  tytul: "Wiór Makrolityczny",
          plik: "PMWiorSandGlbAO.glb",
          poster: "15_zdjecie_Wior.png",
          stanowisko: "Pawłów, stan. 3, gm. Zawichost, woj. świętokrzyskie",
          opis: "Makrolityczny wiór z krzemienia świeciechowskiego wchodzący w skład depozytu wyrobów krzemiennych odkrytego pod obstawą grobowca trapezowatego z eneolitu (poł. IV – pocz. III tys. BC, kultura pucharów lejkowatych)",
          badania: "Badania wykopaliskowe w … r. (B. Bargieł, M. Florek).",
          miejsce: "Zbiory Muzeum Zamkowego w Sandomierzu",
          literatura: "Bargieł, Florek 2006; Florek 2020"
		},
		{
		  tytul: "Wołki - Ucho",
          plik: "MLWolkiUchoGlbAO.glb",
          poster: "16_zdjecie_wolki.png",
          stanowisko: "Krężnica Jara, stan.…gm. Niedrzwica Duża, woj. lubelskie",
          opis: "Ucho w kształcie wołków w jarzmie z eneolitu (poł. IV – pocz. III tys. BC, kultura pucharów lejkowatych)",
          badania: "Ucho w kształcie wołków w jarzmie z eneolitu (poł. IV – pocz. III tys. BC, kultura pucharów lejkowatych)",
          miejsce: "Zbiory Muzeum Narodowego w Lublinie",
          literatura: "Nosek S. 1947, Ryc. 14; 1957, 223 Gajewski 1949"
		},
		{
		  tytul: "Sztylety Kościane",
          plik: "MSzSztylKosc3PolaczoneAO.glb",
          poster: "17_zdjecie1_sztylet.png",
          stanowisko: "Karmanowice, stan.35, gm. Wąwolnica,woj. lubelskie",
          opis: "Sztylet kościany z kości łosia z eneolitu (poł. IV – pocz. III tys. BC, kultura pucharów lejkowatych)",
          badania: "Badania wykopaliskowe w 1989 r. (J. Nogaj-Chachaj).",
          miejsce: "Zbiory IA UMCS",
          literatura: "J. Nogaj-Chachaj 1989, 1991"
		},
		{
		  tytul: "Amfora - KPL",
          plik: "MSzNaczynie3GlbAO.glb",
          poster: "18_zdjecie_Amfora.png",
          stanowisko: "Karmanowice, stan.35, gm. Wąwolnica,woj. lubelskie",
          opis: "Amfora ... z eneolitu (poł. IV – pocz. III tys. BC, kultura pucharów lejkowatych)",
          badania: "Badania wykopaliskowe w 1989 r. (J. Nogaj-Chachaj).",
          miejsce: "Zbiory IA UMCS",
          literatura: "J. Nogaj-Chachaj 1989, 1991"
		},
		{
		  tytul: "Flasze z Kryzą",
          plik: "MSzFlaszaKryza1-2GlbAO.glb",
          poster: "19_zdjecie1_Flasza.png",
          stanowisko: "Karmanowice, stan.35, gm. Wąwolnica,woj. lubelskie",
          opis: "Flasza z kryzą imitująca główkę makówki z eneolitu (poł. IV – pocz. III tys. BC, kultura pucharów lejkowatych)",
          badania: "Badania wykopaliskowe w 1989 r. (J. Nogaj-Chachaj).",
          miejsce: "Zbiory IA UMCS",
          literatura: "J. Nogaj-Chachaj 1989, 1991"
		},
		{
		  tytul: "Kubek - AnsaLunata",
          plik: "MSzKubekAnsuArtecFinalv2AO.glb",
          poster: "20_zdjecie1__ansa.png",
          stanowisko: "Tominy, stan. 6,gm. Ożarów, woj. świętokrzyskie",
          opis: "Kubek z uchem ansa lunata z eneolitu (poł. IV – pocz. III tys. BC, kultura pucharów lejkowatych)",
          badania: "Badania wykopaliskowe w 2009 r. (M. Szeliga).",
          miejsce: "Zbiory IA UMCS",
          literatura: ""
		},
		{
		  tytul: "Kubek - AnsaLunata",
          plik: "MSzAnsaLunata1GlbAO.glb",
          poster: "21_zdjecie2_Ansa.png",
          stanowisko: "Karmanowice, stan.35, gm. Wąwolnica, woj. lubelskie",
          opis: "Kubek z uchem ansa lunata z eneolitu (poł. IV – pocz. III tys. BC, kultura pucharów lejkowatych)",
          badania: "Badania wykopaliskowe w 1989 r. (J. Nogaj-Chachaj).",
          miejsce: "Zbiory IA UMCS",
          literatura: "J. Nogaj-Chachaj 1989, 1991"
		},
		{
		  tytul: "Toporek - KAK",
          plik: "BN-WToporekKamglbAO.glb",
          poster: "22. BNWToporekKam.png",
          stanowisko: "Ulów, stan. 3?gm. Tomaszów Lubelski, woj. lubelskie",
          opis: "Topór kamienny z eneolitu (III tys. BC, kultura ceramiki sznurowej)",
          badania: "Badania wykopaliskowe w ……… r. (B. Niezabitowska-Wiśniewska).",
          miejsce: "Zbiory IA UMCS",
          literatura: ""
		},
		{
		  tytul: "Naczynie - KAK",
          plik: "BNWMaleNaczynko2glbAO.glb",
          poster: "23.BNWNaczynko2Prev.png",
          stanowisko: "Ulów, stan. 3?gm. Tomaszów Lubelski, woj. lubelskie",
          opis: "Naczynie gliniane z eneolitu (III tys. BC, kultura ceramiki sznurowej)",
          badania: "Badania wykopaliskowe w ……… r. (B. Niezabitowska-Wiśniewska).",
          miejsce: "Zbiory IA UMCS",
          literatura: ""
		}
	  ],
	  "braz": [
		{
          tytul: "Naczynko",
          plik: "HTNAczynkoMaleGlbAO.glb",
          poster: "31_zdjecie_Naczynie.png",
          stanowisko: "Gnieszowice, stan. 59, gm. Koprzywnica, woj. świętokrzyskie",
          opis: "Naczynie z grobu z epoki brązu (ok. 1400-1200 BC, kultura trzciniecka)",
          badania: "Badania wykopaliskowe w … r. (H. Taras, M. Florek?)",
          miejsce: "Zbiory IA UMCS",
          literatura: ""
        },
		{
          tytul: "Sztylet - Brazowy",
          plik: "HTSztyletBrazGlbAOVer3.glb",
          poster: "33_zdjecie_Sztylet.png",
          stanowisko: "Zimno, stan…, gm. Łaszczów, .woj. Lubelskie",
          opis: "Importowany (skąd?) sztylet brązowy z epoki brązu (ok. 1400-1300 BC, kultura trzciniecka)",
          badania: "Odkrycie przypadkowe w 2012 r.",
          miejsce: "Zbiory Muzeum Regionalnego im. dr. Janusza Petera w Tomaszowie Lubelskim",
          literatura: "Taras 2019a"
        },
		{
          tytul: "Bifacjalny Sierp",
          plik: "MTSierpKrzemGlb04RAO.glb",
          poster: "34_zdjecie_Sierp.png",
          stanowisko: "Podlodów, stan. 2,gm. Łaszczów, woj. Lubelskie",
          opis: "Bifacjalny sierp z krzemienia wołyńskiego (???) z epoki brązu (ok. 1400-1200 BC, kultura trzciniecka)",
          badania: "Badania wykopaliskowe w 1996 r. (J. Baginska, E. Banasiewicz, H.Taras), ",
          miejsce: "Zbiory Muzeum Regionalnego im. dr. Janusza Petera w Tomaszowie Lubelskim",
          literatura: "(Bagińska, Banasiewicz, Taras 1997, ryc. 3b"
        },
		{
          tytul: "Miseczka ostrodenna",
          plik: "MTNaczynOstreGlbAO.glb",
          poster: "35_zdjecia_miseczka.png",
          stanowisko: "Podlodów, stan. 2,gm. Łaszczów, woj. Lubelskie",
          opis: "Miseczka ostrodenna z epoki brązu (ok. 1400-1200 BC, kultura trzciniecka)",
          badania: "Badania wykopaliskowe w 1996 r. (J. Baginska, E. Banasiewicz, H.Taras), ",
          miejsce: "Zbiory Muzeum Regionalnego im. dr. Janusza Petera w Tomaszowie Lubelskim",
          literatura: "(Bagińska, Banasiewicz, Taras 1997, ryc. 3c"
        },
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
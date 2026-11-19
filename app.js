
    const params = new URLSearchParams(window.location.search);
    const wybranyOkres = params.get('okres') || "wczesne_zelazo";
    const listaZabytkow = BAZA_OKRESOW[wybranyOkres] || [];

    const viewer = document.getElementById('viewer');
    const statusBox = document.getElementById('status-box');
    const buttonsContainer = document.getElementById('artifact-buttons');
    let aktualnyZabytek = null;

    // --- ZMIANA MOTYWU (Jasny / Ciemny) ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      if (isDark) {
        themeToggleBtn.innerHTML = "☀️ Jasny motyw";
      } else {
        themeToggleBtn.innerHTML = "🌙 Ciemny motyw";
      }
    });

    // --- ZWIJANIE PANELU BOCZNEGO ---
    const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
    const layoutContainer = document.getElementById('main-layout');
    const sidebarIcon = document.getElementById('sidebar-icon');
    const sidebarLabel = document.getElementById('sidebar-label');

    toggleSidebarBtn.addEventListener('click', () => {
      const czyZwiniety = layoutContainer.classList.toggle('sidebar-collapsed');
      if (czyZwiniety) {
        sidebarIcon.textContent = "◀";
        sidebarLabel.textContent = "Pokaż informacje";
      } else {
        sidebarIcon.textContent = "▶";
        sidebarLabel.textContent = "Zwiń informacje";
      }
      setTimeout(() => {
        if (typeof viewer.updateFraming === 'function') viewer.updateFraming();
      }, 320);
    });

    // --- ŁADOWANIE MODELI I GENEROWANIE KAFELKÓW ---
    function wybierzZabytek(index) {
      const zabytek = listaZabytkow[index];
      if (!zabytek) return;
      aktualnyZabytek = zabytek;

      document.querySelectorAll('.artifact-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });

      document.getElementById('info-tytul').textContent = zabytek.tytul;
      document.getElementById('info-stanowisko').textContent = zabytek.stanowisko || "Brak danych";
      document.getElementById('info-opis').textContent = zabytek.opis || "Brak danych";
      document.getElementById('info-badania').textContent = zabytek.badania || "Brak danych";
      document.getElementById('info-miejsce').textContent = zabytek.miejsce || "Brak danych";

      const sekcjaLit = document.getElementById('sekcja-literatura');
      if (zabytek.literatura && zabytek.literatura.trim() !== "") {
        sekcjaLit.style.display = "block";
        document.getElementById('info-literatura').textContent = zabytek.literatura;
      } else {
        sekcjaLit.style.display = "none";
      }

      const docelowyUrl = `${BAZA_URL}/Modele/${zabytek.plik}`;
      
      if (viewer.src && viewer.src.endsWith(zabytek.plik) && viewer.loaded) {
        statusBox.style.display = "none"; return;
      }

      statusBox.style.display = "block";
      statusBox.textContent = `Trwa pobieranie: ${zabytek.tytul} (0%)`;
      if(zabytek.poster) viewer.poster = `${BAZA_URL}/Postery/${zabytek.poster}`;
      viewer.src = docelowyUrl;
    }

    viewer.addEventListener('progress', (event) => {
      const procent = Math.round(event.detail.totalProgress * 100);
      if (aktualnyZabytek) statusBox.textContent = `Trwa pobieranie: ${aktualnyZabytek.tytul} (${procent}%)`;
      if (procent >= 100) setTimeout(() => { statusBox.style.display = "none"; }, 200);
    });
    viewer.addEventListener('load', () => { statusBox.style.display = "none"; });
    viewer.addEventListener('error', () => {
      statusBox.style.display = "block";
      statusBox.textContent = `Błąd 404: Nie znaleziono pliku.`;
    });

    customElements.whenDefined('model-viewer').then(() => {
      if (listaZabytkow.length > 0) {
        document.getElementById('liczba-zabytkow').textContent = `Zabytki w okresie (${wybranyOkres}) - (${listaZabytkow.length}):`;
        listaZabytkow.forEach((zabytek, index) => {
          // Generowanie Kafelka
          const btn = document.createElement('button');
          btn.className = 'artifact-btn';
          btn.type = 'button';
          btn.onclick = () => wybierzZabytek(index);

          // 1. Tytuł
          const title = document.createElement('span');
          title.className = 'artifact-btn-title';
          title.textContent = `${index + 1}. ${zabytek.tytul}`;

          // 2. Miniaturka obrazkowa pod tytułem
          const img = document.createElement('img');
          img.className = 'artifact-btn-img';
          img.alt = zabytek.tytul;
          if (zabytek.poster) img.src = `${BAZA_URL}/Postery/${zabytek.poster}`;

          btn.appendChild(title);
          btn.appendChild(img);
          buttonsContainer.appendChild(btn);
        });
        wybierzZabytek(0);
      }
    });

    // --- MIARKA Z OBSŁUGĄ OBRACANIA KAMERY ---
    const toggleMeasureBtn = document.getElementById('toggle-measure');
    const clearMeasureBtn = document.getElementById('clear-measure');
    const measureOutput = document.getElementById('measure-output');

    let trybMiarki = false;
    let punktyPomiaru = [];
    let pozStartX = 0; let pozStartY = 0;

    toggleMeasureBtn.addEventListener('click', () => {
      trybMiarki = !trybMiarki;
      toggleMeasureBtn.classList.toggle('active', trybMiarki);

      if (trybMiarki) {
        toggleMeasureBtn.textContent = "Wyłącz miarkę";
        measureOutput.textContent = "Kliknij 1. punkt na modelu...";
        clearMeasureBtn.style.display = "inline-block";
        viewer.autoRotate = false; // Zatrzymujemy obracanie samoczynne (ale myszką nadal można)
      } else {
        toggleMeasureBtn.textContent = "Włącz miarkę";
        measureOutput.textContent = "";
        clearMeasureBtn.style.display = "none";
        viewer.autoRotate = true;
        usunZnaczniki();
      }
    });

    clearMeasureBtn.addEventListener('click', () => {
      usunZnaczniki();
      if (trybMiarki) measureOutput.textContent = "Kliknij 1. punkt na modelu...";
    });

    function usunZnaczniki() {
      punktyPomiaru = [];
      const p1 = document.getElementById('hotspot-pt-1');
      const p2 = document.getElementById('hotspot-pt-2');
      if (p1) p1.remove(); if (p2) p2.remove();
    }

    // Wykrywanie kliknięcia vs przeciągnięcia (żeby można było obracać przy mierzeniu)
    viewer.addEventListener('pointerdown', (e) => { 
	// Zapobiega aktywacji wewnętrznych skrótów kamery (np. centrowania na kliknięcie)
		if (trybMiarki) {  e.stopPropagation(); }
  
  pozStartX = e.clientX; pozStartY = e.clientY; });
    
    viewer.addEventListener('pointerup', (e) => {
      if (!trybMiarki || punktyPomiaru.length >= 2) return;
      
      // Jeśli użytkownik przesunął mysz o więcej niż 6px, to znaczy że obracał model - nie stawiaj punktu
      if (Math.abs(e.clientX - pozStartX) > 6 || Math.abs(e.clientY - pozStartY) > 6) return;
		
	  e.stopPropagation();
      e.preventDefault();
      const rect = viewer.getBoundingClientRect();
      const hit = viewer.positionAndNormalFromPoint(e.clientX - rect.left, e.clientY - rect.top);
      if (!hit) return;
		
		
      const punkt = hit.position;
      punktyPomiaru.push(punkt);
	
      const numer = punktyPomiaru.length;
      const dot = document.createElement('div');
      dot.id = `hotspot-pt-${numer}`;
      dot.slot = `hotspot-point-${numer}`;
      dot.dataset.position = `${punkt.x} ${punkt.y} ${punkt.z}`;
      dot.className = 'measure-point';
      viewer.appendChild(dot);
		
      if (punktyPomiaru.length === 1) {
        measureOutput.textContent = "Kliknij 2. punkt na modelu...";
      } else if (punktyPomiaru.length === 2) {
        const p1 = punktyPomiaru[0]; const p2 = punktyPomiaru[1];
        const dx = p2.x - p1.x; const dy = p2.y - p1.y; const dz = p2.z - p1.z;
        const dystansM = Math.sqrt(dx*dx + dy*dy + dz*dz);
        measureOutput.textContent = `Odległość: ${(dystansM * 100).toFixed(2)} cm (${(dystansM * 1000).toFixed(1)} mm)`;
      }
    });
    viewer.addEventListener('load', () => { usunZnaczniki(); if (trybMiarki) measureOutput.textContent = "Kliknij 1. punkt na modelu..."; });

    // --- FULLSCREEN ---
    const viewerSection = document.querySelector('.viewer-section');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        viewerSection.requestFullscreen().catch(err => console.warn(err));
      } else {
        document.exitFullscreen();
      }
    });

    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        fullscreenBtn.textContent = "✕ Zamknij pełny ekran";
        fullscreenBtn.classList.add('active');
		toggleSidebarBtn.style.display = "none";
      } else {
        fullscreenBtn.textContent = "⛶ Pełny ekran";
        fullscreenBtn.classList.remove('active');
		toggleSidebarBtn.style.display = "";
      }
    });
	// koniec --- FULLSCREEN ---
	let domyslnyTarget = "auto auto auto";
	
	
	// --- ZMIANA MATERIAŁU / WIDOK DETALI (AO TYLKO W TRYBIE DETALI) ---
	const toggleMatBtn = document.getElementById('toggle-material-btn');
	let zapisaneMaterialy = [];
	let trybSurowy = false;
	let modelMaWarianty = false;

viewer.addEventListener('load', () => {
  trybSurowy = false;
  zapisaneMaterialy = [];
  toggleMatBtn.textContent = "Widok detali";
  toggleMatBtn.classList.remove('active');
  viewer.exposure = 1.0;

  if (viewer.availableVariants && viewer.availableVariants.length > 0) {
    modelMaWarianty = true;
    toggleMatBtn.style.display = 'inline-block';
  } else {
    modelMaWarianty = false;
    let maJakakolwiekTekstureLubAO = false;

    // Przechodzimy przez wszystkie materiały w modelu
    viewer.model.materials.forEach((material, idx) => {
      const pbr = material.pbrMetallicRoughness;
      const texKolor = pbr.baseColorTexture ? pbr.baseColorTexture.texture : null;
      const texMetRough = pbr.metallicRoughnessTexture ? pbr.metallicRoughnessTexture.texture : null;
      const texAO = material.occlusionTexture ? material.occlusionTexture.texture : null;
      if (texKolor || texMetRough || texAO) {
        maJakakolwiekTekstureLubAO = true;
      }

      // Zapamiętujemy oryginalne ustawienia każdego materiału
      zapisaneMaterialy.push({
        material: material,
        kolorTex: texKolor,
        metRoughTex: texMetRough,
        kolorFactor: [...pbr.baseColorFactor],
        roughness: pbr.roughnessFactor,
        metallic: pbr.metallicFactor,
        aoTex: texAO
      });

      // KLUCZOWE: Wyłączamy AO na start, aby nie przyciemniało zwykłego modelu z teksturą!
      if (material.occlusionTexture && texAO) {
        material.occlusionTexture.setTexture(null);
      }
    });

    toggleMatBtn.style.display = maJakakolwiekTekstureLubAO ? 'inline-block' : 'none';
  }
});

toggleMatBtn.addEventListener('click', () => {
  trybSurowy = !trybSurowy;
  toggleMatBtn.classList.toggle('active', trybSurowy);

  if (modelMaWarianty) {
    const docelowyWariant = trybSurowy ? viewer.availableVariants[1] : viewer.availableVariants[0];
    viewer.variantName = docelowyWariant;
  } else {
    zapisaneMaterialy.forEach((dane) => {
      const pbr = dane.material.pbrMetallicRoughness;

      if (trybSurowy) {
        // 1. Odpinamy mapę Metallic/Roughness, aby uzyskać jednolity mat gipsu
        if (pbr.metallicRoughnessTexture && dane.metRoughTex) {
          pbr.metallicRoughnessTexture.setTexture(null);
        }

        // 2. Włączamy zapamiętaną mapę AO tylko w tym widoku
        if (dane.aoTex) {
          // Podkładamy AO pod baseColorTexture dla wyraźnego światłocienia w zagłębieniach
          if (pbr.baseColorTexture) {
            pbr.baseColorTexture.setTexture(dane.aoTex);
          }
          if (dane.material.occlusionTexture) {
            dane.material.occlusionTexture.setTexture(dane.aoTex);
          }
        } else if (pbr.baseColorTexture) {
          pbr.baseColorTexture.setTexture(null);
        }

        // 3. Ustawiamy parametry matowego odlewu gipsowego
        pbr.setBaseColorFactor([0.75, 0.73, 0.70, 1.0]);
        pbr.setMetallicFactor(0.0);
        pbr.setRoughnessFactor(0.75);
        viewer.exposure = 0.88;
      } else {
        // POWRÓT DO TEKSTURY: Przywracamy kolor i mapę Roughness/Metallic, a AO wyłączamy
        if (pbr.baseColorTexture) {
          pbr.baseColorTexture.setTexture(dane.kolorTex);
        }
        if (pbr.metallicRoughnessTexture && dane.metRoughTex) {
          pbr.metallicRoughnessTexture.setTexture(dane.metRoughTex);
        }
        if (dane.material.occlusionTexture && dane.aoTex) {
          dane.material.occlusionTexture.setTexture(null);
        }

        pbr.setBaseColorFactor(dane.kolorFactor);
        pbr.setMetallicFactor(dane.metallic);
        pbr.setRoughnessFactor(dane.roughness);
        viewer.exposure = 1.0;
      }
    });
  }

  toggleMatBtn.textContent = trybSurowy ? "Włącz teksturę" : "Widok detali";
});
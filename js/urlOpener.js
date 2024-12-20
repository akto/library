const urlOpener = {
    selectedEngines : [],
    baseEngineUrls : {},
    openInNewTab : function(baseUrl, query){
        window.open(baseUrl + encodeURIComponent(query));
    },
    openInSameTab : function(baseUrl, query){
        location.href = baseUrl + encodeURIComponent(query);
    },
    pushSearchEngines : function( engineKeys ){
        engineKeys.map( (engineKey) => {
            this.baseEngineUrls[engineKey] != undefined ? this.selectedEngines.push(engineKey) : this.selectedEngines.push("google");
        });
    },
    openSelectedEngines : function( searchQuery ){
        this.selectedEngines.map( (engineKey) => {
            this.openInNewTab( this.baseEngineUrls[engineKey], searchQuery );
        });
    }
}

const searchEngines = {
    // General Search Engines
    google: "https://www.google.com/search?q=",
    bing: "https://www.bing.com/search?q=",
    yahoo: "https://search.yahoo.com/search?p=",
    duckduckgo: "https://duckduckgo.com/?q=",
    baidu: "https://www.baidu.com/s?wd=",
    yandex: "https://yandex.com/search/?text=",

    // Alternative Search Engines
    startPage: "https://www.startpage.com/do/dsearch?query=",
    qwant: "https://www.qwant.com/?q=",
    ecosia: "https://www.ecosia.org/search?q=",
    brave: "https://search.brave.com/search?q=",

     // Turkish Search Engines
    yaani: "https://www.yaani.com.tr/#q=",
    geliyoo: "https://www.geliyoo.com/?q=",
    vinov: "https://www.vinov.com/search?q=",

    // Dictionaries
    merriamWebster: "https://www.merriam-webster.com/dictionary/",
    dictionaryCom: "https://www.dictionary.com/browse/",
    oxford: "https://www.oxfordlearnersdictionaries.com/definition/english/",
    cambridge: "https://dictionary.cambridge.org/dictionary/english/",
    collins: "https://www.collinsdictionary.com/dictionary/english/",
    urbanDictionary: "https://www.urbandictionary.com/define.php?term=",
    theFreeDictionary: "https://www.thefreedictionary.com/",
    lexico: "https://www.lexico.com/en/definition/",
    wordReference: "https://www.wordreference.com/definition/",
    
    // Turkish Dictionaries
    tureng: "https://tureng.com/en/turkish-english/",
    sesliSozluk: "https://www.seslisozluk.net/?word=",
    sozlukNet: "https://sozluk.net/?term=",

    // Video Sites
    youtube: "https://www.youtube.com/results?search_query=",
    vimeo: "https://vimeo.com/search?q=",
    dailymotion: "https://www.dailymotion.com/search/",

    // Turkish Video Sites
    izlesene: "https://www.izlesene.com/arama?q=",
    puhutv: "https://puhutv.com/arama?query=",
    bluTV: "https://www.blutv.com/arama?q=",

    // Image Sites
    googleImages: "https://www.google.com/images?q=",
    bingImages: "https://www.bing.com/images/search?q=",
    yahooImages: "https://images.search.yahoo.com/search/images?p=",
    flickr: "https://www.flickr.com/search/?text=",
    pixabay: "https://pixabay.com/images/search/",
    unsplash: "https://unsplash.com/s/photos/",
    shutterstock: "https://www.shutterstock.com/search/",
    gettyImages: "https://www.gettyimages.com/photos/",
    pexels: "https://www.pexels.com/search/",

    // Turkish Image Sites
    fotoKritik: "http://www.fotokritik.com/arama?ara=",

    // Encyclopedias and Knowledge Bases
    wikipedia: "https://en.wikipedia.org/wiki/",
    britannica: "https://www.britannica.com/search?query=",
    wiktionary: "https://en.wiktionary.org/wiki/",

    // Art and Design
    deviantArt: "https://www.deviantart.com/search?q=",
    behance: "https://www.behance.net/search/projects/?search=",

    // Social Media
    twitter: "https://twitter.com/search?q=",
    facebook: "https://www.facebook.com/search/top/?q=",
    instagram: "https://www.instagram.com/explore/tags/",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=",
    twitch: "https://www.twitch.tv/search?term=",
    tikTok: "https://www.tiktok.com/search?q=",
    pinterest: "https://www.pinterest.com/search/pins/?q=",
    tumblr: "https://www.tumblr.com/search/",

    // Turkish Forums and Communities
    eksisozluk: "https://eksisozluk.com/?q=",
    inciSozluk: "https://www.incisozluk.com.tr/?q=",

    // Shopping Sites
    amazon: "https://www.amazon.com/s?k=",
    ebay: "https://www.ebay.com/sch/i.html?_nkw=",
    aliexpress: "https://www.aliexpress.com/wholesale?SearchText=",
    walmart: "https://www.walmart.com/search/?query=",

    // Turkish Shopping Sites
    hepsiburada: "https://www.hepsiburada.com/ara?q=",
    n11: "https://www.n11.com/arama?q=",
    trendyol: "https://www.trendyol.com/tum--urunler?q=",
    gittigidiyor: "https://www.gittigidiyor.com/arama/?k=",

    // News Sites
    googleNews: "https://news.google.com/search?q=",
    bingNews: "https://www.bing.com/news/search?q=",
    yahooNews: "https://news.search.yahoo.com/search?p=",
    cnn: "https://www.cnn.com/search?q=",
    bbc: "https://www.bbc.co.uk/search?q=",
    nytimes: "https://www.nytimes.com/search?query=",
    theGuardian: "https://www.theguardian.com/search?q=",

    // Turkish News Sites
    hurriyet: "https://www.hurriyet.com.tr/ara/?q=",
    sabah: "https://www.sabah.com.tr/arama?query=",
    milliyet: "https://www.milliyet.com.tr/arama/?a=",
    sozcu: "https://www.sozcu.com.tr/ara/?q=",
    haberturk: "https://www.haberturk.com/arama/?q=",
    cnnTurk: "https://www.cnnturk.com/ara?query=",

    // Job Search Sites
    linkedinJobs: "https://www.linkedin.com/jobs/search/?keywords=",
    indeed: "https://www.indeed.com/jobs?q=",
    glassdoor: "https://www.glassdoor.com/Job/jobs.htm?sc.keyword=",
    monster: "https://www.monster.com/jobs/search/?q=",
    
    // Turkish Job Sites
    kariyerNet: "https://www.kariyer.net/is-ilanlari/#&kw=",
    yenibiris: "https://www.yenibiris.com/is-ilanlari?q=",
    iskur: "https://esube.iskur.gov.tr/Istihdam/AcikIsIlanAra.aspx?mid=2969&q=",

    // Code Repositories
    github: "https://github.com/search?q=",
    gitlab: "https://gitlab.com/search?search=",
    bitbucket: "https://bitbucket.org/repo/all?name=",
    rubygems: "https://rubygems.org/search?query=",
    packagist: "https://packagist.org/search/?q=",
    sourceForge: "https://sourceforge.net/directory/?q=",

    // Academic Resources
    googleScholar: "https://scholar.google.com/scholar?q=",
    researchGate: "https://www.researchgate.net/search/publication?q=",
    arxiv: "https://arxiv.org/search/?query=",
    jstor: "https://www.jstor.org/action/doBasicSearch?Query=",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=",
    ieee: "https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=",
    scienceDirect: "https://www.sciencedirect.com/search?qs=",
    ulakbim: "https://uvt.ulakbim.gov.tr/uvt/?q=",
    yoksis: "https://tez.yok.gov.tr/UlusalTezMerkezi/tezSorguSonucYeni.jsp?q=",

    // Additional Useful Sites
    stackOverflow: "https://stackoverflow.com/search?q=",
    medium: "https://medium.com/search?q=",
    reddit: "https://www.reddit.com/search/?q=",
    quora: "https://www.quora.com/search?q=",

    //Entertainment
    hulu: "https://www.hulu.com/search?q=",
    disneyPlus: "https://www.disneyplus.com/search?query=",
    imdb: "https://www.imdb.com/find?q=",
    rottenTomatoes: "https://www.rottentomatoes.com/search?search=",
    netflix: "https://www.netflix.com/search?q=",

    // Music Platforms
    spotify: "https://open.spotify.com/search/",
    soundcloud: "https://soundcloud.com/search?q=",
    appleMusic: "https://music.apple.com/us/search?term=",
    bandcamp: "https://bandcamp.com/search?q=",
    fizy: "https://fizy.com/#/arama/",

    // Maps
    googleMaps: "https://www.google.com/maps/search/",
    bingMaps: "https://www.bing.com/maps?q=",
    openStreetMap: "https://www.openstreetmap.org/search?query=",
    mapQuest: "https://www.mapquest.com/search/results?query=",

    // Translation Services
    googleTranslate: "https://translate.google.com/?sl=auto&tl=en&text=",
    deepl: "https://www.deepl.com/translator#auto/en/",

    // Recipe Sites
    allrecipes: "https://www.allrecipes.com/search/results/?wt=",
    foodNetwork: "https://www.foodnetwork.com/search/",
    epicurious: "https://www.epicurious.com/search/",
    yummly: "https://www.yummly.com/recipes?q=",
    nefisYemekTarifleri: "https://www.nefisyemektarifleri.com/?s=",
    yemekTarifleri: "https://www.yemektarifleri.com/arama/?q=",

    // Finance
    yahooFinance: "https://finance.yahoo.com/quote/",
    googleFinance: "https://www.google.com/finance/quote/",
    bloomberg: "https://www.bloomberg.com/search?query=",
    forbes: "https://www.forbes.com/search/?q=",
    marketwatch: "https://www.marketwatch.com/search?q=",
    isyatirim: "https://www.isyatirim.com.tr/arama?q=",
    borsaIstanbul: "https://www.borsaistanbul.com/arama?q=",

    // Health Information
    webMD: "https://www.webmd.com/search/search_results/default.aspx?query=",
    mayoClinic: "https://www.mayoclinic.org/search/search-results?q=",
    healthline: "https://www.healthline.com/search?q1=",
    nih: "https://search.nih.gov/search?utf8=✓&affiliate=nih&query=",
    saglikGovTr: "https://www.saglik.gov.tr/?arama=",

    // Government Resources
    usaGov: "https://search.usa.gov/search?query=",
    govUK: "https://www.gov.uk/search?q=",
    europa: "https://europa.eu/search/?queryText=",
    canada: "https://www.canada.ca/en/sr/srb.html?q=",
    eDevlet: "https://www.turkiye.gov.tr/arama?aranan=",
    meb: "https://www.meb.gov.tr/arama/?q=",

    // Open-Source Packages
    npm: "https://www.npmjs.com/search?q=",
    pypi: "https://pypi.org/search/?q=",

    // Book Search
    googleBooks: "https://www.google.com/search?tbm=bks&q=",
    goodreads: "https://www.goodreads.com/search?q=",
    projectGutenberg: "https://www.gutenberg.org/ebooks/search/?query=",
    barnesAndNoble: "https://www.barnesandnoble.com/s/",
    bookDepository: "https://www.bookdepository.com/search?searchTerm=",
    idefix: "https://www.idefix.com/search?q=",
    drComTr: "https://www.dr.com.tr/search?q=",

    // Travel
    tripAdvisor: "https://www.tripadvisor.com/Search?q=",
    expedia: "https://www.expedia.com/Hotel-Search?destination=",
    booking: "https://www.booking.com/searchresults.html?ss=",
    airbnb: "https://www.airbnb.com/s/",
    hotels: "https://www.hotels.com/search.do?q-destination=",
    trip: "https://www.trip.com/search?q=",
    trivago: "https://www.trivago.com/search?q=",
    hostelworld: "https://www.hostelworld.com/search?q=",
    couchsurfing: "https://www.couchsurfing.com/search?q=",
    kayak: "https://www.kayak.com/search?q=",
    skyscanner: "https://www.skyscanner.net/search?q=",
    obilet: "https://www.obilet.com/otobus-bileti?query=",
    biletall: "https://www.biletall.com/arama?key=",

    // Weather
    weather: "https://www.weather.com/search/enhancedlocalsearch?where=",
    accuweather: "https://www.accuweather.com/en/search-locations?query=",
    weatherUnderground: "https://www.wunderground.com/search?q=",
    openWeatherMap: "https://openweathermap.org/find?q=",

    // Legal Information
    justia: "https://law.justia.com/search?q=",
    cornellLaw: "https://www.law.cornell.edu/search/site/",
    findLaw: "https://lp.findlaw.com/?query=",
    law360: "https://www.law360.com/search/articles?q=",

    // Sports
    espn: "https://www.espn.com/search/results?q=",
    nfl: "https://www.nfl.com/search/?query=",
    nba: "https://www.nba.com/search?query=",
    fanatik: "https://www.fanatik.com.tr/arama?q=",
    ntvSpor: "https://www.ntvspor.net/ara?q=",

    // Programming Documentation
    mdnWebDocs: "https://developer.mozilla.org/en-US/search?q=",
    pythonDocs: "https://docs.python.org/3/search.html?q=",
    javaDocs: "https://docs.oracle.com/javase/8/docs/api/index.html?search=",
    w3schools: "https://www.w3schools.com/search/search_result.asp?search=",
    phpDocs: "https://www.php.net/manual-lookup.php?pattern=",
    rubyDocs: "https://ruby-doc.org/search.html?q=",

    // Real Estate
    zillow: "https://www.zillow.com/homes/for_sale/",
    realtor: "https://www.realtor.com/realestateandhomes-search/",
    redfin: "https://www.redfin.com/city/",
    trulia: "https://www.trulia.com/for_sale/",
    
    // Turkish Real Estate
    sahibinden: "https://www.sahibinden.com/arama?query_text=",
    emlakjet: "https://www.emlakjet.com/arama/?q=",
    hurriyetEmlak: "https://www.hurriyetemlak.com/uye-ara?q=",

    // Miscellaneous
    lonelyPlanet: "https://www.lonelyplanet.com/search?q=",
    codepen: "https://codepen.io/search/pens?q=",
    caniuse: "https://caniuse.com/#search=",
    onedio: "https://onedio.com/ara?q="
}

//for searching selection from console.
let selectedPhrase = document.getSelection(),
    keyword = selectedPhrase.toString();
//urlOpener.openInNewTab(searchEngines.googleBooks, "JavaScript tutorials");
urlOpener.baseEngineUrls = searchEngines;
urlOpener.pushSearchEngines(["oxford","Spotify"]); //Spotify undefined so search will open google search
urlOpener.openSelectedEngines( "Verb" );
urlOpener.openInNewTab(searchEngines.startPage, keyword);

// urlOpener.openInNewTab(searchEngines.google, "JavaScript tutorials");
// urlOpener.selectedEngines.push("oxford");
// urlOpener.openSelectedEngines( searchEngines, "Verb" );

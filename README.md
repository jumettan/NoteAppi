NoteAppi toimii siten, että ladataan ensimmäisenä koko tiedosto koneelle ja sitten avataan se visual studio codessa.
Ohjelmisto ei lähde käyntiin pelkästään painamalla run code painiketta vaan pitää mennä command promtin kautta tiedostoon NoteApp tai ajaa visualstudio coden terminaalissa huom (tässäkin mentävä NoteApp tiedostoon.), jossa annetaan ensimmäisenä komento npm install.
jos App.jsx tiedosto sisältää " import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom' " niin tarvitsee terminaalissa ajaa komento npm install react-router-dom sekä toisessa componentissa käytetään react-iconia joten npm install react-icons
tämän jälkeen annetaan komento npm run dev ja ohjelma antaa sinulle http osoitteen, jonka laitat omaan verkkoselaimeesi.
(omaa mahdollista käyttöä varten)Ohjelma sisältää myös localStoragen, jos haluaa muistiinpanojen säilyvän tallessa refresh page jälkeen. ei tarvitse muutakuin ottaa kommentit pois. (toivottavasti)


HUOM! OHJELMA EI TOIMI JOS KOMENNOT ANNETAAN \Frontend_lopputyo KANSIOSSA!!! TÄYTYY OLLA \Frontend_lopputyo\NoteApp
Ohjeet lyhyesti ja selkeämmin.
1. avaa ohjelma github desktopissa tai lataa koko tiedosto zippinä omalle koneellesi.
2. Varmista, että koneelle on asennettu node.js. aja command promtissa "node --version" ja "npm --version" jos et ole varma.
3. Huom. jumettan/Frontend_lopputyo kansiossa paina vihreää code nappulaa ja valitse sopiva vaihtoehto
4. Kun olet saanut tiedostot koneellesi suunnista kansioon C:\...\Frontend_lopputyo\NoteApp cmd ja anna komento code .
5. jos avasit tiedosto github desktopissa ja sitten visual studio codessa suunnista samaan tiedostoon terminaalissa. ei tarvitse antaa komentoa code .
6. tarkista että olet C:\...\Frontend_lopputyo\NoteApp ja anna seuraavat komennot
npm install
npm install react-router-dom
npm install react-icons
npm run dev
7. sinulla pitäisi näkyä http osoite terminaalissa tai command promtissa riippuen kumpaa käytit.
8. kopioi osoite ja laita se nettiselaimeen.
9. NoteApp pitäisi näin aueta selaimeesi valmiina käyttöön.
10. 

import img1 from "@/public/Moving.jpg";
import img2 from "@/public/Cleaning5.jpg";
import img3 from "@/public/Painting (1).jpg";
import img4 from "@/public/Furniture3.jpg";
import img5 from "@/public/Disposal.jpg";

export const serviceList = [
  {
    id: 1,
    title: "moving",
    label: "Umzug",
    icon: "",
    description: `Wir sind Ihr erfahrener Partner für Umzüge aller Art, von der kleinen Wohnung bis zum grossen Haus. Ob privat oder gewerblich, wir kümmern uns um alles, rund um Umzug.`,
    extraDescription: `
      <p class="font-bold text-2xl pb-5">Unsere Leistungen:</p>
      <ul class="list-disc pl-5 pb-6 text-gray-600 space-y-2">
        <li>Umzugsplanung und -organisation</li>
        <li>Verpackungsmaterial und Umzugskartons</li>
        <li>Demontage und Montage</li>
        <li>Sorgfältiger Transport</li>
        <li>Entsorgung von Sperrmüll</li>
        <li>Einlagerung Ihrer Möbel</li>
      </ul>
      <p class="font-bold text-2xl pb-5">Mit MoveMate profitieren Sie von:</p>
      <ul class="list-disc pl-5 pb-5 text-gray-600 space-y-2">
        <li>Passende Preise ohne versteckte Kosten</li>
        <li>Persönliche Beratung und Betreuung</li>
        <li>Zuverlässige und pünktliche Mitarbeiter</li>
        <li>Moderner Umzugstechnik</li>
        <li>Umfassende Versicherung</li>
      </ul>
      <p>Entscheiden Sie sich für MoveMate und erleben Sie einen kompletten Umzug.</p>
      <p>Kontaktieren Sie uns noch heute für ein kostenloses und unverbindliches Angebot.</p>
    `,
    img: img1,
  },
  {
    id: 2,
    title: "cleaning",
    label: "Reinigung",
    icon: "",
    description: `Professionelle Reinigung für Ihr neues und altes Zuhause Genießen Sie einen stressfreien Umzug mit MoveMate professioneller Reinigungsdienstleistung. Unsere erfahrenen und zuverlässigen Reinigungskräfte sorgen dafür, dass Ihr neues Zuhause vom ersten Tag an sauber und einladend ist.`,
    extraDescription: `
      <p class="font-bold text-2xl pb-5">Wir bieten:</p>
      <ul class="list-disc pl-5 pb-6 text-gray-600 space-y-2">
        <li>Umfassende Reinigungsleistungen: Von der Grundreinigung bis zur Fensterreinigung übernehmen wir alle Aufgaben, damit Sie sich um nichts kümmern müssen.</li>
        <li>Individuelle Angebote: Wir erstellen Ihnen ein individuelles Angebot, das Ihren Bedürfnissen und Ihrem Budget entspricht.</li>
        <li>Flexibilität: Wir richten uns nach Ihren Terminwünschen und sind an 7 Tagen die Woche verfügbar.</li>
        <li>Höchste Qualität: Wir verwenden ausschließlich hochwertige Reinigungsmittel und -geräte und garantieren Ihnen ein optimales Ergebnis.</li>
        <li>Zuverlässigkeit: Sie können sich darauf verlassen, dass unsere Mitarbeiter pünktlich und zuverlässig arbeiten.</li>
        <li>Umweltbewusstsein: Wir verwenden umweltfreundliche Reinigungsmittel und achten auf eine nachhaltige Reinigung.</li>
      </ul>
      <p class="font-bold text-2xl pb-5">Mit MoveMate an Ihrer Seite können Sie Ihren Umzug ohne Reinigungsstress genießen.</p>
      <p>Kontaktieren Sie uns noch heute für ein kostenloses und unverbindliches Angebot.</p>
    `,
    img: img2,
  },
  {
    id: 3,
    title: "painting",
    label: "Maler Arbeit im Innenbereich",
    icon: "",
    description: `"Ah, hier fühle ich mich wohl!" Wenn dieses Gefühl bei Ihnen aufkommt, wissen wir, dass wir unseren Job richtig gemacht haben. Denn die perfekte Atmosphäre in Ihrem Zuhause oder Büro entsteht durch die harmonische Verschmelzung von Licht, Farben und Einrichtung. Wir verstehen, dass Ihr Zuhause ein Rückzugsort sein soll, ein Ort der Entspannung und Geborgenheit. Gleichzeitig sollte Ihr Arbeitsplatz Ihre Persönlichkeit widerspiegeln und die Kreativität fördern. Mit unserer Expertise bringen wir Ihre Visionen zum Leben. Wo auch immer Sie sind - wir schaffen die passende Stimmung für Ihr Leben." Kontaktieren Sie uns noch heute für ein kostenloses und unverbindliches Angebot:`,
    extraDescription: "",
    img: img3,
  },
  {
    id: 4,
    title: "furniture",
    label: "Möbel und Lampen Montag",
    icon: "",
    description: `Mehr als nur Umzüge!
Erleichtern Sie Ihren Umzug mit MoveMate professionellen Montage-Services für Möbel und Lampen.
Neben unserem umfassenden Umzugsservice bieten wir Ihnen jetzt auch die fachgerechte Montage Ihrer Möbel und Lampen an.
`,
    extraDescription: `
      <p class="font-bold text-2xl pb-5">Unsere erfahrenen und geschulten Monteure sorgen dafür, dass:</p>
      <ul class="list-disc pl-5 pb-6 text-gray-600 space-y-2">
        <li>Ihre Möbel schnell und sicher aufgebaut werden.</li>
        <li>Ihre Lampen fachmännisch installiert werden.</li>
        <li>alle Möbelstücke an ihrem richtigen Platz stehen.</li>
        <li>Sie sich um nichts kümmern müssen.</li>
      </ul>
      <p class="font-bold text-2xl pb-5">Mit MoveMate Montage-Services sparen Sie Zeit, Mühe und Nerven.</p>
      <p class="pb-5">Wir bieten:</p>
      <ul class="list-disc pl-5 pb-5 text-gray-600 space-y-2">
        <li>Schnelle und zuverlässige Montage</li>
        <li>Fachgerechte Installation</li>
        <li>Erfahrene und geschulte Monteure</li>
        <li>Faire Preise</li>
        <li>Kundenzufriedenheit garantiert</li>
      </ul>
      <p>Verlassen Sie sich auf MoveMate und genießen Sie einen stressfreien Umzug mit allem Drum und Dran!</p>
      <p>Kontaktieren Sie uns noch heute für ein kostenloses und unverbindliches Angebot</p>
    `,
    img: img4,
  },
  {
    id: 5,
    title: "disposal",
    label: "Entsorgung und Räumungen",
    icon: "",
    description: `Entrümpelung und Räumung mit Herz und Kompetenz!
Sie stehen vor einer Entrümpelung oder Räumung und suchen einen zuverlässigen Partner?
Dann sind Sie bei MoveMate genau richtig!
Wir sind Ihr kompetenter und erfahrener Spezialist für alle Arten von Entrümpelungen und Räumungen.
Unser Team aus erfahrenen und motivierten Mitarbeitern kümmert sich schnell, zuverlässig und diskret um Ihre Entrümpelung oder Räumung.
Dabei spielt es keine Rolle, ob es sich um eine private Wohnung, einen Messie-Haushalt, ein Büro, eine Lagerhalle oder ein anderes Objekt handelt.
Wir entsorgen fachgerecht und umweltfreundlich alles, was Sie nicht mehr benötigen.
`,
    extraDescription: `
      <p class="font-bold text-2xl pb-5">Zu unseren Leistungen gehören:</p>
      <ul class="list-disc pl-5 pb-6 text-gray-600 space-y-2">
        <li>Entrümpelung von Wohnungen, Häusern, Kellern, Dachböden und Garagen</li>
        <li>Entsorgung von Sperrmüll, Altwaren und Bauschutt</li>
        <li>Räumung von Messie-Wohnungen</li>
        <li>Räumung von Nachlasswohnungen</li>
        <li>Demontage von Möbeln und Einrichtungsgegenständen</li>
        <li>Endreinigung der geräumten Objekte</li>
      </ul>
      <p class="font-bold text-2xl pb-5">Bei MoveMate können Sie sich auf folgende Vorteile verlassen:</p>
      <ul class="list-disc pl-5 pb-5 text-gray-600 space-y-2">
        <li>Schnelle und zuverlässige Abwicklung</li>
        <li>Faire Preise</li>
        <li>Diskrete und professionelle Durchführung</li>
        <li>Umweltfreundliche Entsorgung</li>
        <li>Kundenzufriedenheit garantiert</li>
      </ul>
      <p>Fordern Sie noch heute ein kostenloses und unverbindliches Angebot an!</p>
    `,
    img: img5,
  },
];

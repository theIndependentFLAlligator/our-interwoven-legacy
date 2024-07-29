window.addEventListener("load", (event) => {
    if (window.location.hash) {
        try {
            document.querySelector(window.location.hash).click();
        } catch (error) {
            console.log(error);
        }
    }
});

// Article card click events
const myModal = new bootstrap.Modal(document.getElementById("articleContainer"), {});

// Article

document.getElementById('latin-dance').addEventListener('click', function() {
    const myArticle = {
        slug: "latin-dance",
        headline_en: "Saving salsa: Gainesville community fights to keep free salsa classes",
        headline_es: "Salvando la salsa: La comunidad de Gainesville lucha por conservar las clases de salsa gratis",
        subtitle_en: "A city proposal could threaten weekly classes",
        subtitle_es: "Una propuesta de la ciudad podría amenazar las clases semanales",
        card_path: "latin-dance.jpg", 
        card_caption_en: "A crowd gathers in Downtown Gainesville on Thursday, July 25, 2024. - Carlos Alemany // Alligator Staff",
        card_caption_es: "Una multidud se reune en el downtown de Gainesville el jueves 25 de julio de 2024. - Carlos Alemany // Alligator Staff",
        author_one: "Carlos Alemany",
        translator: "Valentina Sandoval",
        author_two: "",
        contact_one_en: "Contact Carlos Alemany at calemany@alligator.org. Follow him on X @close_alemany",
        contact_two_en: "",
        contact_one_es: "Contacta a Carlos Alemany por calemany@alligator.org. Síguelo en X @close_alemany.",
        contact_two_es: "Traducido por Valentina Sandoval. Contáctala por vsandoval@alligator.org. Síguela en X @valesrc.",
        about_one_en: "",
        about_two_en: "",
        about_one_es: "",
        about_two_es: "",
        date: "", 
        desc_en: "In the heart of downtown Gainesville, a vibrant community gathers each week to connect through the rhythm of salsa to dance the night away. ",
        desc_es: "En el corazón del centro de Gainesville, una comunidad vibrante se reune cada semana para conectar a través del ritmo de la salsa y bailar toda la noche.",
        body_en: "<p>In the heart of downtown Gainesville, a vibrant community gathers each week to connect through the rhythm of salsa to dance the night away. </p><p>Latin dance is a cornerstone of Gainesville's cultural landscape, drawing festive residents and visitors alike to the downtown area.  </p><p>However, a proposal to open a street for parking has many concerned for the future of the cherished tradition.</p><p>Since January 2021, The Gator Salsa Club has hosted weekly outdoor classes and open dancing sessions in partnership with The Bull pub in downtown Gainesville. But, a proposal to open the street in front of The Bull could bring the weekly classes to a halt.</p><p>Salil Bavdekar, the organizer of Salsa in the Streets, said the proposal could affect the current pedestrian-friendly setup.</p><p>\"If it's an open street, we can't have our classes there, we can't have dancing there, in which case we'd probably end up moving back to campus,” Bavdekar said. “So basically, all the benefits we had in the last three or four years, and all the benefits the city had of having this free community event being run for them for the last three years, would just disappear.”</p><p>The Downtown Advisory Board is set to oversee proposals for opening the streets to increase parking spaces, a move that some believe could benefit businesses by making them more accessible to patrons. </p><p>Jacob Larson, the owner of The Bull, said opening up parking could benefit businesses by making them more accessible to patrons, but it could also detract from the community and cultural activities that take place in pedestrian areas. </p><p>“It brings people to downtown, and then there's a centripetal effect where it spins out and benefits other businesses as well,\" he said.</p><p>Larson said having a free, accessible area where people can enjoy activities like salsa dancing can foster social connections, cultural exchange and a sense of belonging.</p><p>\"A pedestrian-centered, closed street is an integral part of a flourishing downtown ecosystem,” Larson said. “It is a catalyst for arts, culture, history and collision space for people that make up the entire community.\"</p><p>For many, salsa nights are more than just an evening of dance — they are a lifeline to culture, connection and community. </p><p>Yasier Figueroa, an 18-year-old Puerto Rican resident of Gainesville, said events offered by Salsa in the Streets bring back nostalgia.</p><p>\"I take dancing as a part of me being back home,” Figueroa said. “It's kind of like a nostalgic feeling.\"</p><p>He said these events amplify the visibility and voice of Gainesville’s Hispanic community, which he describes as a “silent minority.” </p><p>“It would bring out the true sense of who we are,” he said. “We're loud, we're vibrant, and it would showcase our culture.\"The City Commission will consider the Downtown Advisory Board's final decision following public comments scheduled August 6. </p><p>Reflecting on the street proposal, Figueroa emphasized its drawbacks.</p><p>\"It would be detrimental… because events like these bring different types of people together to do something beautiful,\" he said.</p>",
        body_es: "<p>En el corazón del centro de Gainesville, una comunidad vibrante se reune cada semana para conectar a través del ritmo de la salsa y bailar toda la noche.</p><p>El baile latino es una parte fundamental del panorama cultural de Gainesville, atrayendo en partes iguales a residentes festivos y visitantes al centro de la ciudad.</p><p>Sin embargo, una propuesta para abrir una calle como estacionamiento tiene a muchos preocupados por el futuro de esta preciada tradición.</p><p>Desde enero de 2021, el Gator Salsa Club ha organizado clases semanales al aire libre y sesiones abiertas de baile en colaboración con el bar The Bull en el centro de Gainesville. Pero, una propuesta para abrir la calle en frente de The Bull podría parar las clases semanales.</p><p>Salil Bavdekar, el organizador de Salsa en las Calles, dijo que la propuesta podría afectar el area organizada para los peatones.</p><p>“Si es una calle abierta, no podemos tener nuestrar clases ahí, no podemos bailar ahí, y en ese caso tendríamos que movernos de vuelta al campus probablemente”, dijo Bavdekar. “Así que básicamente, todos los beneficios que tuvimos en los últimos tres o cuatro años, y todos los beneficios que tenía la ciudad por tener este evento gratis para la comunidad por los últimos tres años, desaparecerían”.</p><p>La Junta Asesora de Downtown va a supervisar las propuestas de abrir las calles para aumentar los puestos de estacionamiento, un movimiento que algunos creen podría beneficiar a los negocios por hacerlos más accesibles para los clientes.</p><p>Jacob Larson, el dueño de The Bull, dijo que abrir espacio para estacionar podría beneficiar a los negocios, pero también podría interrumpir a la comunidad y las actividades culturales que toman lugar en los espacios pedestres.</p><p>“Eso atrae a la gente al centro, y también tiene un efecto cetrípedo que hace que de vueltas y beneficie a otros necgocios también”, dijo.</p><p>Larson dijo que tener un area gratis y accesible donde la gente pueda disfrutar actividades como bailar salsa puede fomentar conexiones sociales, intercambios culturales y un sentido de pertenencia.</p><p>“Una calle cerrada, enfocada en los peatones es una parte integral de crecer el ecosistema del centro”, dijo Larson. “Esto es catalizador para las artes, la cultura, la historia y el espacio de colisión para personas que son parte de toda la comunidad”. </p><p>For many, salsa nights are more than just an evening of dance — they are a lifeline to culture, connection and community. </p><p>Yasier Figueroa, un residente de Gainesville puertorriqueño de 18 años, dijo que los eventos ofrecidos por Salsa en las Calles le traen nostalgia.</p><p>“Yo tomo el baile como una parte de estar de vuelta en mi hogar”, dijo Figueroa. “Es como un sentimiento nostálgico”.</p><p>El dijo que estos eventos amplifican la visibilidad y la voz de la comunidad hispana de Gainesville, la cual el describe como una “minoría silenciosa”.</p><p>“Esto trae a lucir el verdadero sentimiento de quienes somos”, dijo. “Somos ruidosos, somos vibrantes y esto muestra nuestra cultura”.</p><p>El Comisionado de la Ciudad va a considerar la decisión final de la Junta Asesora de Downtown después del tiempo de comentario publico programado para el 6 de agosto.</p><p>Reflexionando sobre la propuesta de la calle, Figueroa enfatizó sus incovenientes.</p><p>“Sería perjudicial… porque los eventos como este traen a diferentes tipos de personas a juntarse para hacer algo hermoso”, dijo.</p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML ='Traducido por ' + myArticle.translator;
    }
    else{
        parent.querySelector('#articleTranslator').innerHTML ='';
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 29, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 29, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('MaryCruz').addEventListener('click', function() {
    const myArticle = {
        slug: "MaryCruz",
    headline_en: "Painting a path to peace ",
    headline_es: "Pintando un camino hacia la paz ",
    subtitle_en: "24-year-old artist reflects on her harrowing journey to self-love and kinship",
    subtitle_es: "Artista de 24 años reflexiona sobre su desgarrador viaje hacia el amor propio y la afinidad",
    card_path: "marycruz.png", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Noor Sukkar",
    author_two: "",
    translator: "Nicole Beltran",
    contact_one_en: "Contact Noor Sukkar at nsukkar@alligator.org. Follow her on X @noorsukkarr.",
    contact_two_en: "",
    contact_one_es: "Contacta a Noor Sukkar por nsukkar@alligator.org. Síguela en X @noorsukkarr.",
    contact_two_es: "Traducido por Nicole Beltran. Contáctala por nbeltran@alligator.org. Síguela en X @nicolebeltg.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "Avocados cling on to the drooping branches as their youthful green tassels with a ripening wave of brown. Sitting below with her younger cousins, MaryCruz Ruiz immortalizes the moment in her oil painting titled “The Return.”",
    desc_es: "Los aguacates se aferran a las ramas caídas, mientras sus juveniles borlas verdes con una ola madura de color marrón. Sentada abajo con sus primos menores, MaryCruz Ruiz inmortaliza el momento en su pintura al óleo titulada “El regreso”.",
    body_en: "<p> In the rural valleys of Mexico, the sun embraces the flora and fauna coloring the landscape. Young children breeze through trees as the wind carries the echoes of their laughter. Avocados cling on to the drooping branches as their youthful green tassels with a ripening wave of brown. </p><p>Sitting below with her younger cousins, MaryCruz Ruiz immortalizes the moment in her oil painting titled “The Return.”</p><p>“We just sat there together and we were all giggly, and it felt like I was back home,” Ruiz said.</p><p>At 24 years old, Ruiz has embarked on a two-month trip to Mexico to deepen the connection to her roots. However, the second-generation immigrant tackled years of trial and error prior to honing in on her artistic craft and rekindling familial relationships.</p><p>“There was never a point where I wasn’t drawing or making art, it was always present,” she said.</p><p>Yet there was a point she felt she had to stray away. </p><p>After graduating high school in Kissimmee, she drove to Pikes Peak State College, nearly 2,000 miles away from friends and family. While the longing for landscapes besides “concrete jungle, Disney and big corporate” played a role in the decision, guilt and a fear of failure pushed her as well. </p><p>She chose to study architectural design. </p><p> “While they [her family] work so hard for me to get here,” she said. “It can be disappointing for your family to want to go down a creative path, so I strayed away from that for a while.”</p><p>Working a full-time job and lacking self-care, the pressures of fulfilling someone else’s quota caught up. At 19, she felt she had one of the biggest existential crises of her life.</p><p>“It had just gotten so low that I could not allow myself to get any lower,” she said. “I didn’t know who I was.”</p><p>So she dropped out of college. </p><p>That decision is only one of many reroutes that kickstarted a spiritual awakening. She started working at the Cheyenne Mountain Zoo and made an active effort to completely reconstruct herself to be in balance with the planet, she said. </p><p>Over the next two years, the mountainous terrain and natural landscape of Colorado Springs inspired and fostered her growth in its art community.</p><p></p><p>“I just fell in love with our planet,” she said. “I was able to sow the seeds for learning how to love myself, building a deeper respect for myself, and learning how to value my mind, body and spirit.”</p><p>Between this newfound connection to agriculture and a longing to rekindle her relationship with her parents, she moved to Gainesville and began working at Frog Song Organics Farm at 21 years old. </p><p>“A lot of my pieces at the time were very emotional and very philosophical,” she said. “I was going through a lot of emotional turmoil. I just moved to a new place. I was feeling very alone.”</p><p>As the years passed, her early twenties were spent investing and adapting herself into different positions and work. In 2021, her path happened to cross that of David Coombs at a local music event, who she would ultimately start dating.</p><p>“I was personally going through some of the hardest times in my life… and here’s this vibrant soul telling me, ‘I see you have a dream. I see a path, tell me about it,’” Coombs said. “[She] just lit my soul on fire.”</p><p>Also new to Gainesville, Coombs left behind a 20-year construction career to pursue music. Ruiz’s genuine encouragement as a stranger omitted more faith than he had in himself. The artists bonded over many similarities and struggles.</p><p>“I could go on for hours about how proud of her I am and I just see her work really hard and never complain about it,” he said. “She’s just extremely resilient for the sake of her own betterment and for the sake of the impression she leaves on other people because she knows it's important.” </p><p>In her time living in Gainesville, Ruiz sold her art in pop-up markets like the How Bazar and displayed pieces in galleries. </p><p>“As soon as I started reaching out to How Bazar, reaching out to other pop ups, getting to know people and making art with people,” Ruiz said. “Gainesville just had open arms. I was not expecting that deep acceptance that I had received.”</p><p>Her doubts were dispelled by Gainesville’s embrace, and her presence lingered longer than the short period of time she lived there. Her high school best friend, Cristina Ortez, remembered a time she visited Ruiz in Gainesville for her birthday party, and said the experience showed how fondly Ruiz is received.</p><p>“We got to meet so many different people that she brought together,” Ortez said. “A lot of them didn’t know each other, but they all came here for Mary. It just shows how loved she is.”</p><p>Ortez met Ruiz at a private Catholic high school in Orlando. Ortez, whose artwork draws from her synesthesia, a condition which allows her to see color in emotions and sounds, related to Ruiz in many ways. For one, they often bonded over creating art together. But the Nicaraguan 26-year-old also shared in the struggles of being a minority.</p><p>“It was just this shared feeling of having to whitewash ourselves, and it wasn’t until I went off to college and she left school that we started growing into ourselves as people,” she said. “I can see that in her art. She’s using herself as a muse instead of hiding as we were made to feel.”</p><p>At the start of the summer, Ruiz returned to Haines City, Florida, where her Mexican parents live. She’s devoted her time to helping her family’s floral shop, Haines City Flowers.</p><p>“My parents and family just had insanely difficult lives — trying to grow out of poverty, become citizens, start their own business, support a family,” she said. “My life would have been so different if I had just been born a country away, and there’s a lot of gratitude for that.”</p><p>As she packs portable canvases and her oil paints to Mexico, she looks forward to taking a step outside of her routine life. With time as her most valuable resource, her pursuit of peace and growth strides on.</p><p>“I have the freedom to make art. I have the freedom to be queer. I can express myself without fear. That gives me a lot of fire in my soul to find my fullest potential creatively.” she said. “It almost feels like I am healing myself but also my ancestors and my past family members who haven’t had that opportunity.”</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>En los valles rurales de México, el sol aprecia la flora y la fauna que colorean el paisaje. Los niños pequeños corren entre los árboles mientras el viento lleva los ecos de sus risas. Los aguacates se aferran a las ramas caídas, mientras sus juveniles borlas verdes con una ola madura de color marrón. </p><p>Sentada abajo con sus primos menores, MaryCruz Ruiz inmortaliza el momento en su pintura al óleo titulada “El regreso”.</p><p>“Nos sentamos juntos, riendo tontamente y me sentí como si estuviera en casa”, dijo Cruz.</p><p>A sus 24 años, Ruiz se embarcó en un viaje de dos meses a México para profundizar la conexión con sus raíces. Sin embargo, la inmigrante de segunda generación afrontó años de prueba y error antes de perfeccionar su oficio artístico y reavivar las relaciones familiares.</p><p>“Nunca hubo un momento en el que no estuviera dibujando o haciendo arte, siempre estuvo presente”, dijo.</p><p>Sin embargo, hubo un punto en el que sintió que tenía que desviarse.</p><p>Después de graduarse de la escuela secundaria en Kissimmee, Ruiz condujo hasta Pikes Peak State College, a casi 2000 millas de distancia de sus amigos y familiares. Si bien la curiosidad por paisajes además de “el concreto, Disney y las grandes corporaciones” influyó en la decisión, la culpa y el miedo al fracaso también la empujaron. </p><p>Eligió estudiar diseño arquitectónico. </p><p>“Mientras ellos [su familia] trabajan tan duro para que yo llegue aquí”, dijo. “Puede ser decepcionante para tu familia tomar un camino creativo, así que me desvié de eso por un tiempo”.</p><p>Al tener un empleo de tiempo completo y carecer de cuidado personal, las presiones de cumplir con la cuota de otra persona la alcanzaron. A los 19 años sintió que tenía una de las mayores crisis existenciales de su vida.</p><p>“Había llegado tan bajo que no podía permitirme bajar más”, dijo. “No sabía quién era”.</p><p>Entonces ella se salió de la universidad.</p><p>Esa decisión es sólo una de las muchas desviaciones que impulsaron un despertar espiritual. Comenzó a trabajar en el zoológico de Cheyenne Mountain e hizo un esfuerzo activo para reconstruirlo completamente y estar en equilibrio con el planeta, dijo. </p><p>Durante los siguientes dos años, el terreno montañoso y el paisaje natural de Colorado Springs inspiraron y fomentaron su crecimiento en su comunidad artística.</p><p>\"Me enamoré de nuestro planeta\", dijo. “Pude sembrar las semillas para aprender a amarme a mí mismo, desarrollar un respeto más profundo por mí mismo y aprender a valorar mi mente, mi cuerpo y mi espíritu”.</p><p>Entre esta nueva conexión con la agricultura y el anhelo de reavivar su relación con sus padres, se mudó a Gainesville y comenzó a trabajar en Frog Song Organics Farm a los 21 años. </p><p>\"Muchas de mis piezas en ese momento eran muy emotivas y muy filosóficas\", dijo. “Estaba pasando por una gran confusión emocional. Me acababa de mudar a un lugar nuevo. Me sentía muy sola”.</p><p>A medida que pasaron los años, pasó sus veintitantos años invirtiendo y adaptándose a diferentes puestos y trabajos. En 2021, su camino se cruzó con el de David Coomb en un evento musical local, con quien finalmente comenzaría a salir.</p><p>“Yo personalmente estaba pasando por algunos de los momentos más difíciles de mi vida… y aquí está esta alma vibrante que me dice: 'Veo que tienes un sueño. Veo un camino, cuéntamelo'”, dijo Coombs. “[Ella] simplemente prendió fuego a mi alma”.</p><p>También nuevo en Gainesville, Coombs dejó atrás una carrera de construcción de 20 años para dedicarse a la música. El estímulo genuino de Ruiz como un extraño omitió más fe de la que tenía en sí mismo. Los artistas se unieron por muchas similitudes y luchas.</p><p>“Podría seguir hablando durante horas de lo orgulloso que estoy de ella y simplemente la veo trabajar muy duro y nunca me quejo de ello”, dijo. \"Ella es extremadamente resistente por su propio bien y por la impresión que deja en otras personas porque sabe que es importante\". </p><p>Mientras vivía en Gainesville, Ruiz vendió su arte en mercados emergentes como How Bazar y exhibió piezas en galerías. </p><p>“Tan pronto como comencé a acercarme a How Bazar, a otras ventanas emergentes, a conocer gente y a hacer arte con la gente”, dijo Ruiz. “Gainesville simplemente tenía los brazos abiertos. No esperaba esa profunda aceptación que había recibido”.</p><p>Sus dudas fueron disipadas por el abrazo de Gainesville y su presencia se prolongó más que el corto período de tiempo que vivió allí. La mejor amiga de la secundaria, Cristina Ortiz, recordó cómo una vez que visitó a Ruiz en Gainesville para su cumpleaños y dijo que la experiencia demostró con qué cariño se recibe a Mary.</p><p>“Conocimos a tantas personas diferentes que ella reunió”, dijo Ortiz. “Muchos de ellos no se conocían, pero todos vinieron aquí por Mary. Simplemente demuestra lo amada que es”.</p><p>Ortiz conoció a Ruiz en una escuela secundaria católica privada en Orlando. Ortiz, cuyas obras de arte se basan en su sinestesia, una condición que le permite ver el color en las emociones y los sonidos, se relaciona con Ruiz de muchas maneras. Por un lado, a menudo se unieron para crear arte juntos. Pero el nicaragüense de 26 años también compartió las luchas de ser una minoría.</p><p>“Era simplemente este sentimiento compartido de tener que asimilarnos a la cultura, y no fue hasta que fui a la universidad y ella dejó la escuela que comenzamos a convertirnos en nosotros mismos como personas”, dijo. “Puedo ver eso en su arte. Se está utilizando a sí misma como musa en lugar de esconderse como nos hicieron sentir”.</p><p>A principios del verano, Ruiz regresó a Haines City, Florida, donde viven sus padres mexicanos. Ha dedicado su tiempo a ayudar a la floristería de su familia, Haines City Flowers.</p><p>“Mis padres y mi familia tuvieron vidas tremendamente difíciles: trataron de salir de la pobreza, convertirse en ciudadanos, iniciar su propio negocio, mantener a una familia”, dijo. \"Mi vida habría sido muy diferente si hubiera nacido en un país de distancia, y hay mucha gratitud por eso\".</p><p>Mientras lleva sus lienzos portátiles y sus pinturas al óleo a México, espera dar un paso fuera de su vida rutinaria. Con el tiempo como su recurso más valioso, su búsqueda de la paz y el crecimiento sigue avanzando a pasos de gigante.</p><p>“Tengo la libertad de hacer arte. Puedo expresarme sin miedo. Eso me da mucho fuego en el alma para encontrar mi máximo potencial creativamente”, ella dijo. “Casi siento que me estoy curando a mí mismo, pero también a mis antepasados ​​y a mis familiares anteriores que no han tenido esa oportunidad”.</p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML ='Traducido por ' + myArticle.translator;
    }
    else{
        parent.querySelector('#articleTranslator').innerHTML ='';
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 29, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 29, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('restaurants').addEventListener('click', function() {
    const myArticle = {
        slug: "restaurants",
    headline_en: "From Muñecas to Cintrón: The Latin restaurants of Gainesville",
    headline_es: "De Muñecas a Cintrón: Los restaurantes latinos de Gainesville",
    subtitle_en: "Latin cuisine embraced in local restaurant scene",
    subtitle_es: "La cocina latina adoptada en la escena de restaurantes locales",
    card_path: "restaurants.jpg", 
    card_caption_en: "An employee prepares food at Muñecas Taco Garden and Bar on Sunday, Jan. 14, 2024. - Ben Nielsen // Alligator Staff",
    card_caption_es: "Un empleado prepara comida en Muñecas Taco Garden and Bar el domingo 14 de enero de 2024. - Ben Nielsen // Equipo del Alligator",
    author_one: "Sydney Johnson",
    author_two: "Ben Nielsen",
    translator: "Valentina Sandoval",
    contact_one_en: "Valentina Sandoval translated the above interview. ",
    contact_two_en: "Contact Sydney Johnson at sjohnson@alligator.org. Follow her on X @sydajohnson15. Contact Ben Nielsen at bnielsen@alligator.org. Follow him on X @benknielsen.",
    contact_one_es: "Valentina Sandoval tradujo la última entrevista.",
    contact_two_es: "Contacta a Sydney Johnson por sjohnson@alligator.org. Síguela en X @sydajohnson15. Contacta a Ben Nielsen por bnielsen@alligator.org. Síguelo en X @benknielsen.\nTraducido por Isabela Reinoso. Contáctala por ireinoso@alligator.org. Síguela en X @isareinosod.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "Whether it be paellas, arepas, tajadas or empanadas, food is an integral part of Hispanic culture.",
    desc_es: "Ya sean paellas, arepas, tajadas o empanadas, la comida es una parte integral de la cultura hispana.",
    body_en: "<p>Whether it be paellas, arepas, tajadas or empanadas, food is an integral part of Hispanic culture. And with its thriving restaurant scene, Gainesville welcomes it with open arms. </p><p>Dishes from Latin American destinations like Mexico and Colombia; as well as those from Caribbean regions like Cuba and Puerto Rico, all play a part in the local cuisine of the area.</p><p>Curious to get a taste of Gainesville’s Latin food scene? Here are some staples that are sure to satiate your hunger. </p><p></p><p>Cintrón</p><p></p><p>Cintrón, located at 2441 NW 43rd St., is not just a Caribbean restaurant. While taking culinary inspiration from Puerto Rico and Cuba, the restaurant also mixes in American and European influences. </p><p>Founded four years ago by Puerto Rican chef Hector Cintrón, Cintrón prides itself on its meshing of flavors and techniques. </p><p>For example, the Cuban dip — a Cintrón original — draws from the French dip but with Cuban bread and meat. </p><p>With meals that range in price from $13 to $35, Cintrón’s dishes showcase the flavors of the Caribbean. </p><p>Josh Streit, a 23-year-old Cintrón employee, has worked at the restaurant for three years, watching it change management and develop into a community staple. </p><p>“People who want authentic Latin food… say, ‘Wow, I can't find tostones,’ or, ‘I can't find mofongo,’ or all these specific things they’re used to seeing at home,” Streit said.</p><p>Kevin Short, a 72-year-old Alachua County resident, heard about Cintrón online. In the city of Alachua there aren’t too many Latin restaurants, Short said. </p><p>“I had the salmon quesadillas, and they were excellent,” he said. “This is a very good find for Latin food.”</p><p></p><p>La Cocina de la Abuela</p><p></p><p>Tucked away on 23rd Avenue, a bright floral sign entices drivers with one word promising the nostalgic consistency of home-cooking: Abuela’s. </p><p>La Cocina de Abuela is a Colombian restaurant located at 125 NW 23rd Ave. in northern Gainesville.</p><p>The restaurant’s pride in its Colombian heritage is clear, with small Colombian flags draped across the ceiling.</p><p>It brands itself as “homemade Colombian comfort food with big portions.”</p><p>Menu options include oxtail, ropa vieja and curry chicken with white rice, among others.</p><p></p><p>Muñecas</p><p></p><p>Muñecas Taco Garden and Bar, located at 317 SW Fourth Ave., is a downtown hotspot for Latin-inspired foods. Its menu contains elements of Cuban, Puerto Rican and Thai cuisine.</p><p>Muñecas’ name comes from the Spanish word for “doll,” specifically the Colombian dialect of the language where it’s used to refer to a pretty woman. </p><p>Owner and operator Emily McClure said the restaurant serves South Florida Fusion cuisine, a style characterized by a mixture of foods from different cultures.</p><p>“Muñecas is important to the community because we serve food that is made from scratch without any preservatives or unnatural additives,” McClure said. “We nourish our guests with whole food offerings both in the kitchen and behind the bar where we mix up both non-alcoholic and alcoholic drinks made with fresh juices and ingredients.”</p><p>Muñecas began as a moving taco cart called Comida De La Calle. It eventually grew into a full-time location at Bo Diddley Plaza before settling in its current 4th Ave Food Park location.</p><p>“It was named Muñecas in honor of my late father-in-law, Carlos Londono, who was from Colombia,” McClure said. “[He] inspired me to open my own restaurant and ‘be the architect of my future.’”</p><p>Muñecas customer and self-described foodie Cody Hosford of Palatka, Florida, said he and his wife dined at the restaurant during a recent visit and already plan to visit again.</p><p>“The queso is some of the best we’ve ever tried, and we have eaten a lot of queso over the past 10 years,” Hosford said. “Muñecas queso is better than anything you’d get from a large chain like Moe’s or Tijuana Flats.”</p><p>Hosford regularly highlights local food spots on his Instagram, and said Muñecas offered fish tacos unlike those from most restaurants.</p><p>“The shrimp tacos were amazing,” he said. “Often when I order shrimp tacos from food trucks or other restaurants, the shrimp is either still soggy and undercooked or burnt. But not at Muñecas!”</p><p></p><p>Peruvian Food Blessing </p><p></p><p>Specializing in Peruvian and Central American dishes, Peruvian Food Blessing is a bright blue beacon. </p><p>Its spot on NW Fourth Boulevard in the Towncenter plaza has become known for its home-made cuisine. Its menu includes traditional Peruvian dishes, vegan meals and a colorful array of drinks.  </p><p></p><p>Blue Agave</p><p></p><p>Blue Agave is a restaurant located at 4401 NW 25th Place offering Mexican cuisine and specializes in margaritas.</p><p>Although its 11 signature margaritas fill up a large portion of the menu, Blue Agave offers a wide variety of alcoholic beverages and hosts a daily happy hour. Other drink options include beers, wines and mezcal.</p><p>Food options include a variety of tacos; including baja, fish, grilled chicken, shrimp and more. Vegans and vegetarians can order from an accommodating animal-free section of the menu.</p><p>Blue Agave opened its doors in 2013 and prides itself on its experienced chefs and personable waiters. </p><p>“All it takes is one glance at our reviews online to see that we're the best in town by far,” a statement on its website writes.</p><p></p><p>Aguas Frescas </p><p></p><p>At the Marathon Gas Station at 1606 NW 13th Street, it seems that cars pulling in only want one thing — and it's not the gas. </p><p>While not a traditional restaurant, this aguas frescas stand run by the Angulo family is the real deal. </p><p>Originating in Mexico, aguas frescas combine fruits, water and ice.</p><p>Carolina Angulo, who has worked the stand for three years, appreciates the benefits of the drink she sells. </p><p>“From my point of view [aguas frescas] are healthier,” she said. “They’re good for health, for the environment, for everything. The fruit’s skin can be used for composting and the drink itself is way healthier for people.”</p><p>At $6 a cup, watermelon, passionfruit, melon, coconut and mango are just a few of the flavors filling the large deli containers that act as the drink's signature. </p><p>Originally from Nicaragua, Angulo lives in Jacksonville, where she helps her family run the stand Monday through Thursday. Only in Gainesville Friday through Sunday, the stand is run out of a Marathon Gas Station. </p><p>With a steady flow of customers, the stand has become a staple in the Gainesville community on hot weekends.</p><p>“It’s been excellent. I haven’t been here too much but people are really nice,” Angulo said. “I get support from Latino people, but also from Americans. They’ve all been really welcoming.”</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>Ya sean paellas, arepas, tajadas o empanadas, la comida es una parte integral de la cultura hispana. Y con su próspera escena de restaurantes, Gainesville la acoge con los brazos abiertos. </p><p>Los platos de destinos latinoamericanos como México y Colombia, así como los de regiones caribeñas como Cuba y Puerto Rico, forman parte de la cocina local de la zona. </p><p>¿Curioso por probar la escena de comida latina en Gainesville? Aquí tienes algunos platos típicos que seguro que te saciarán el hambre. </p><p>Cintrón</p><p>Cintrón, situado en 2441 NW 43rd St., no es sólo un restaurante caribeño. Aunque se inspira culinariamente en Puerto Rico y Cuba, el restaurante también mezcla influencias americanas y europeas. </p><p>Fundado hace cuatro años por el chef puertorriqueño Héctor Cintrón, Cintrón se enorgullece de su mezcla de sabores y técnicas. </p><p>Por ejemplo, el dip cubano — original de Cintrón — se inspira en el dip francés pero con pan y carne cubanos. </p><p>Con platos cuyo precio varía entre los 13 y los 35 dólares, los platos de Cintrón muestran los sabores del Caribe. </p><p>Josh Streit, un empleado de Cintrón de 23 años, lleva tres años trabajando en el restaurante, viendo cómo cambia de administración y se convierte en un elemento básico de la comunidad. </p><p>\"La gente que quiere auténtica comida latina... dice: 'Vaya, no encuentro tostones', o 'no encuentro mofongo', o todas esas cosas específicas que están acostumbrados a ver en casa\", explicó Streit.</p><p>Kevin Short, un residente del condado de Alachua de 72 años, oyó hablar de Cintrón en el internet. En la ciudad de Alachua no hay demasiados restaurantes latinos, dijo Short. </p><p>“Comí las quesadillas de salmón y estaban excelentes”, dijo. “Es un muy buen descubrimiento de comida latina”.</p><p>La Cocina de la Abuela</p><p>Escondido en la Avenida 23, un brillante letrero floral atrae a los conductores con una palabra que promete la nostálgica consistencia de la cocina casera: Abuela. </p><p>La Cocina de Abuela es un restaurante colombiano situado en 125 NW 23rd Ave. en el norte de Gainesville.</p><p>El orgullo del restaurante por su herencia colombiana es evidente, con pequeñas banderas colombianas colgadas por todo el techo.</p><p>Se autodefine como “comida casera colombiana con grandes raciones”.</p><p>Las opciones del menú incluyen rabo de toro, ropa vieja y pollo al curry con arroz blanco, entre otras.</p><p>Muñecas</p><p>Muñecas Taco Garden and Bar, situado en el 317 SW de la Cuarta Avenida, es un punto de encuentro en el centro de la ciudad para degustar platos de inspiración latina. Su menú contiene elementos de la cocina cubana, puertorriqueña y tailandesa.</p><p>El nombre de Muñecas procede de la palabra en español “muñeca”, concretamente del dialecto colombiano de la lengua, donde se utiliza para referirse a una mujer bonita. </p><p>La propietaria y operadora, Emily McClure, dijo que el restaurante sirve cocina de fusión del sur de Florida, un estilo caracterizado por la mezcla de alimentos de diferentes culturas.</p><p>“Muñecas es importante para la comunidad porque servimos comida elaborada desde cero, sin conservantes ni aditivos no naturales”, afirma McClure. “Nutrimos a nuestros comensales con ofertas de alimentos integrales tanto en la cocina como detrás de la barra, donde mezclamos bebidas sin alcohol y alcohólicas elaboradas con zumos e ingredientes frescos”.</p><p>Muñecas empezó como un carrito de tacos ambulante llamado Comida De La Calle. Con el tiempo se convirtió en una ubicación a tiempo completo en Bo Diddley Plaza antes de establecerse en su actual ubicación en Fourth Ave Food Park.</p><p>“Se llamó Muñecas en honor de mi difunto suegro, Carlos Londono, que era de Colombia”, dijo McClure. “[Él] me inspiró para abrir mi propio restaurante y 'ser el arquitecto de mi futuro'”.</p><p>Cody Hosford, de Palatka, Florida, cliente de Muñecas y autodenominado “foodie”, dice que él y su esposa cenaron en el restaurante durante una visita reciente y que ya tienen previsto volver a visitarlo.</p><p>“El queso es de los mejores que hemos probado, y hemos comido mucho queso en los últimos 10 años”, dijo Hosford. “El queso de Muñecas es mejor que el de cualquier cadena grande como Moe's o Tijuana Flats”.</p><p>Hosford destaca regularmente lugares de comida local en su Instagram, y dijo que Muñecas ofrecía tacos de pescado diferentes a los de la mayoría de los restaurantes.</p><p>“Los tacos de camarón estaban increíbles”, dijo. “A menudo, cuando pido tacos de gambas en camiones de comida o en otros restaurantes, las gambas están todavía blandas y poco hechas o quemadas. Pero no en Muñecas”.</p><p>Peruvian Food Blessing </p><p>Especializándose en platos peruanos y centroamericanos, Peruvian Food Blessing es un faro azul brillante.</p><p>Su local en NW Fourth Boulevard, en la plaza Towncenter, se ha hecho famoso por su cocina casera. Su carta incluye platos tradicionales peruanos, platos veganos y una colorida variedad de bebidas.  </p><p>Blue Agave</p><p>Blue Agave es un restaurante situado en 4401 NW 25th Place que ofrece cocina mexicana y se especializa en margaritas.</p><p>Aunque sus 11 características margaritas ocupan gran parte de la carta, Blue Agave ofrece una amplia variedad de bebidas alcohólicas y organiza una happy hour diaria. Otras opciones de bebida incluyen cervezas, vinos y mezcal.</p><p>Las opciones gastronómicas incluyen una gran variedad de tacos: baja, pescado, pollo a la parrilla, camarones y mucho más. Los veganos y vegetarianos pueden pedir en la sección de menú sin animales.</p><p>Blue Agave abrió sus puertas en 2013 y se enorgullece de sus chefs experimentados y camareros agradables. </p><p>“Basta con echar un vistazo a nuestras reseñas en Internet para darse cuenta de que somos, con diferencia, los mejores de la ciudad”, se afirma en un comunicado publicado en su sitio web.</p><p>Aguas Frescas </p><p>En la gasolinera Marathon, situada en el 1606 NW 13th Street, parece que los coches que entran sólo quieren una cosa, y no es gasolina. </p><p>Aunque no es un restaurante tradicional, este puesto de aguas frescas atendido por la familia Angulo es una auténtica maravilla. </p><p>Originarias de México, las aguas frescas combinan frutas, agua y hielo.</p><p>Carolina Angulo, que trabaja en el puesto desde hace tres años, aprecia los beneficios de la bebida que vende. </p><p>“Desde mi punto de vista, [las aguas frescas] son más sanas”, afirma. “Son buenas para la salud, para el medio ambiente, para todo. La piel de la fruta puede utilizarse para el compostaje y la bebida en sí es mucho más sana para la gente”.</p><p>A 6 dólares el vaso, sandía, maracuyá, melón, coco y mango son sólo algunos de los sabores que llenan los grandes envases de delicatessen que sirven de característica a la bebida. </p><p>Originaria de Nicaragua, Angulo vive en Jacksonville, donde ayuda a su familia a llevar el puesto de lunes a jueves. Sólo en Gainesville de viernes a domingo, el puesto se gestiona desde una gasolinera Marathon. </p><p>Con un flujo constante de clientes, el puesto se ha convertido en un elemento básico de la comunidad de Gainesville los fines de semana calurosos.</p><p>“Ha sido excelente. No he venido mucho, pero la gente es muy amable”, dice Angulo. “Recibo apoyo de la gente latina, pero también de los estadounidenses. Todos han sido muy acogedores”.</p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML ='Traducido por ' + myArticle.translator;
    }
    else{
        parent.querySelector('#articleTranslator').innerHTML ='';
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 29, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 29, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('reading-gap').addEventListener('click', function() {
    const myArticle = {
        slug: "reading-gap",
    headline_en: "ACPS address English proficiency achievement gaps",
    headline_es: "ACPS afronta las diferencias de rendimiento en el dominio del inglés",
    subtitle_en: "Hispanic student language arts achievement falls below statewide averages",
    subtitle_es: "El rendimiento de los alumnos hispanos en lenguaje y literatura es inferior a la media estatal",
    card_path: "reading-gap.png", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Sara-James Ranta",
    author_two: "",
    translator: "Isabela Reinoso",
    contact_one_en: "Contact Sara-James Ranta at sranta@alligator.org. Follow her on X @sarajamesranta",
    contact_two_en: "",
    contact_one_es: "Contacta a Sara-James Ranta por sranta@alligator.org. Síguela en X @sarajamesranta.",
    contact_two_es: "Traducido por Isabela Reinoso. Contáctala por ireinoso@alligator.org. Síguela en X @isareinosod.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "ACPS saw a 20 percentage point gap in ELA achievement between white and Hispanic students, where 70% of white students achieved level three language arts and above compared to only 50% of Hispanic students during the 2023-24 school year across all grade levels.",
    desc_es: "ACPS vio una brecha del 20 por ciento en el logro de ELA entre los estudiantes blancos e hispanos, donde el 70% de los estudiantes blancos alcanzaron el nivel tres de artes del lenguaje y superior en comparación con sólo el 50% de los estudiantes hispanos durante el año escolar 2023-24 en todos los niveles educativos.",
    body_en: "<p>Alachua County Public Schools are “closing the gap” in student English language arts achievement. </p><p>ACPS saw a 20 percentage point gap in ELA achievement between white and Hispanic students, where 70% of white students achieved level three language arts and above compared to only 50% of Hispanic students during the 2023-24 school year across all grade levels. </p><p>Compared to nearby school districts, Alachua County experienced larger gaps than both Marion or Levy Counties, which fell at 13 and 8 percentage points respectively. It also surpassed the statewide Hispanic achievement gap of 15 percentage points in the 2023-24 school year, according to the Florida Department of Education. </p><p>Kevin Kelsey, a 47-year-old Gainesville resident, is the English for Speakers of Other Languages (ESOL) department chair of Gainesville High School. GHS is the only high school in Alachua County with a dedicated ESOL program.</p><p>“What makes our program different is that we have full-time ESOL teachers,” he said. “All we do is teach ESOL English classes.” </p><p>Achievement gaps for Hispanic students are even greater for English Language Learners (ELL), which refers to students whose native language isn’t English. Alachua County saw a 52 percentage point gap in language arts achievement between Hispanic and white students with high English proficiency and Hispanic and white students with low English proficiency, compared to the 48 percentage point statewide gap. </p><p>Students with non-English first languages are given an ELL status and scheduled into ESOL classes at GHS, which Kelsey said are grouped by grade level, age and English-language proficiency. The ESOL class functions as a student’s core English class requirement for the school year. </p><p>In other non-center schools, students are integrated into English classes already taught by its existing department. A dedicated ESOL program ensures students “don’t get lost in their ability to make language gains because they’re maybe in an English class mixed in with other American students,” he said. </p><p>“The opportunities that they [students] have for more individualized instruction or targeted instruction is greater in our school than it would be in the other non-center schools,” he said. “Not that they [other schools] don’t do a good job with their ESOL students, they just don’t have a program dedicated only to the ESOL population.” </p><p>All teachers in Florida must receive ESOL training to be certified. There are also other recurring state professional development programs if teachers feel they need a “refresher,” he said. </p><p>As a teacher, Kelsey said the largest challenge he faces is seeing gaps in a child’s education, especially for GHS students with low English proficiency. </p><p>“We’ll have kids who will come, and they may be 14 or 15 -years -old, but they haven’t been in school for a couple years,” he said. “That’s a real challenge when these kids come into high school and they’re now sitting in advanced math or science classes, and they don’t even have the vocabulary to converse with people.”  </p><p>To learn English, Kelsey said beginner-level classes are shown BrainPop videos for ease of access and a slow speaking rate. As students advance, they join ReadingPlus, a districtwide high school level program aimed to improve comprehension, vocabulary and fluency. </p><p>Connecting the GHS ESOL program to the community, where many parents work multiple jobs or have language barriers themselves, is also challenging, he said. </p><p>“Oftentimes, our high school ESOL students are the strongest English speakers in their family,” he said. “We’re doing as much as we can with the students that are coming into our classrooms every day. There’s got to be community agencies that are filling in that gap.”</p><p>The disparities in academic performance are measured by the Florida Assessment of Student Thinking (FAST), a statewide examination aimed to bring increased school accountability and transparency, with standards set by the “Benchmarks for Excellent Student Thinking” (B.E.S.T.). The implementation of the FAST testing system under B.E.S.T. guidelines, which began in the 2022-23 school year, allows for the monitoring of student progress three times per school year, according to the Florida Department of Education. </p><p>The transition to the FAST system replaced the common-core based FSA test previously completed by students, and the adoption of B.E.S.T. standards aims to transition into an individualized growth-based monitoring system. </p><p>The FAST English Language Arts (ELA) exam is administered in Voluntary Prekindergarten Education Programs through 10th grade. Components of the exam may include communicating through writing, vocabulary, reading informational text and reading across genres, with its content varying by grade-level standards. </p><p>Bridging the divide in language arts achievement is also aided by onsite school libraries. Alachua County Public Schools District Media Specialist Patty Duval said school media specialists are culturally responsive and curate their collections to meet the needs of students.  </p><p>“Most of our collections do include titles that not only are written in Spanish but have Spanish or Hispanic characters and stories,” she said. </p><p>Each school promotes reading differently, one of which being the Sunshine State Young Readers Award program, which Duval said encourages independent reading. Students who read three or more books from the yearly list are allowed to vote for their favorite, she said.</p><p>Beyond school, the Alachua County Library District (ACLD) offers resources for adults to improve their English proficiency, including a Conversation Club hosted by ACLD staff and volunteers. Participants can practice English in a small group setting and discuss cultural traditions, hobbies and current events. The organization also offers an adult literacy program with one-on-one tutoring sessions and provides an assortment of language learning tools, which include both library and community resources, Alachua County Library District Public Relations Manager Brad McClenny wrote in an email. </p><p>“The Library District is a wealth of knowledge, and we provide access to information that individuals or families can use to better support their own journey through education,” McClenny wrote. </p><p>State Sen. Keith Perry, R-Gainesville, serves as a member of the Florida Senate Education PK-12 Committee. He said his largest focus to improve literacy was music in elementary education. </p><p>Young musicians tend to have stronger language and reading skills because their brains have spent more time actively “engaging with sound,” according to the National Federation of State High School Associations.</p><p>Perry executed a three-year program testing kindergarten, first and second grade students who were given instruments to play. </p><p>“We saw improvements in two areas,” he said. “One was in academic gains, and the other area we saw was a [greater] assimilation into a class.” </p><p>Aside from music, Perry said the biggest loss to language arts achievement was in the summertime, when some students can’t continue their education since school isn’t in session. </p><p>“We do things like funding for Boys and Girls Clubs and some other things that have programs for kids during the summer,” he said. “But none of those programs are really designed from an academic level like a school would be.” </p><p>Recent state legislation, such as the Stop WOKE Act, limiting conversations of race in the classroom and the expansion of Florida K-12 book bans, has also posed challenges for student access to information on their own diverse backgrounds. Restricting diversity, equity and inclusion programs also poses challenges for culturally responsive teaching.</p><p>Student reading scores and reading time increased after educators added diverse books to their classroom libraries, according to a study by the nonprofit First Book conducted over the course of the 2022-23 school year.</p><p>However, Perry said DEI programs play no role in closing the language arts achievement gap. </p><p>“[DEI] is a terrible way to structure a society, and it also doesn’t work,” he said. </p><p>Rather, Perry said closing the achievement gap between students with high and low English proficiencies begins with addressing the lack of opportunities for students and characterizing their individual needs. </p><p>Valerie Mederos, a 21-year-old Gainesville resident, is the language programs coordinator of Children Beyond Our Borders, a local nonprofit organization working to eliminate education barriers for Latin American students. </p><p>Mederos teaches all-ages English classes and incorporates conversation instruction as needed, allowing a group to engage in rotation reading to practice pronunciation. The biggest impact to a student’s language arts achievement could be attributed to their fear of being different from others, she said. </p><p>“I had a student [who] came from Venezuela two years ago, so she didn’t really know English, and she was hesitant to join certain clubs in school,” she said. “She maybe thought, ‘Oh, they wouldn’t understand me at all.’ That language barrier has such a big effect on how willing people are to educate themselves … just because they’re hesitant.”</p><p>Socio-economic factors also play a role in a student’s language arts achievement, she said. </p><p>“Some students won’t even come into some of the English classes,” she said. “Not because they don’t want to, but because they have to work extra hours at their job.”</p><p>Among the challenges, Mederos said she’s seen a positive reaction from her students. </p><p>“They go because they want to be there,” she said. “I think the want is definitely there, it’s just a matter of the opportunities that are given.” </p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>Las escuelas públicas del condado de Alachua están “cerrando la brecha” en el rendimiento de los alumnos en el inglés. </p><p>ACPS vio una brecha del 20 por ciento en el logro de ELA entre los estudiantes blancos e hispanos, donde el 70% de los estudiantes blancos alcanzaron el nivel tres de artes del lenguaje y superior en comparación con sólo el 50% de los estudiantes hispanos durante el año escolar 2023-24 en todos los niveles educativos. </p><p>En comparación con los distritos escolares cercanos, el condado de Alachua experimentó mayores brechas que los condados de Marion o Levy, que cayeron a 13 y 8 puntos porcentuales respectivamente. También superó la brecha de rendimiento hispano en todo el estado de 15 puntos porcentuales en el año escolar 2023-24, según el Departamento de Educación de Florida. </p><p>Kevin Kelsey, de 47 años y residente en Gainesville, es el jefe del departamento de Inglés para Hablantes de Otros Idiomas (ESOL) de Gainesville High School. GHS es el único colegio del condado de Alachua que cuenta con un programa especializado en ESOL.</p><p>“Lo que hace diferente a nuestro programa es que tenemos profesores de ESOL a tiempo completo”, dijo. “Lo único que hacemos es dar clases de inglés ESOL”. </p><p>Las brechas de rendimiento para los estudiantes hispanos son aún mayores para los Estudiantes del Idioma Inglés (ELL), que se refiere a los estudiantes cuya lengua materna no es el inglés. El condado de Alachua vio una brecha de 52 puntos porcentuales en el rendimiento de artes del lenguaje entre los estudiantes hispanos y blancos con alto dominio del inglés y los estudiantes hispanos y blancos con bajo dominio del inglés, en comparación con la brecha de 48 puntos porcentuales en todo el estado. </p><p>Los estudiantes que no hablan inglés como lengua materna reciben un estatus de ELL y se programan en clases de ESOL en GHS, que Kelsey dijo que se agrupan por nivel educativo, edad y dominio del idioma inglés. La clase de ESOL funciona como un requisito de clase de Inglés básico de un estudiante para el año escolar. </p><p>En otras escuelas que no son del centro, los alumnos se integran en clases de inglés que ya ha enseñado su departamento. Un programa específico de ESOL garantiza que los estudiantes “no pierdan su capacidad de mejorar en el idioma por estar en una clase de inglés mezclados con otros estudiantes estadounidenses”, afirmó Kelsey. </p><p>“Las oportunidades que ellos (los estudiantes) tienen para una enseñanza individualizada o dirigida es mayor en nuestra escuela de lo que sería en las otras escuelas que no son del centro,” dijo. “No es que ellos (otras escuelas) no hagan un buen trabajo con sus estudiantes de ESOL, simplemente no tienen un programa dedicado solo a la población de ESOL.”</p><p>Todos los profesores en la Florida deben recibir formación en ESOL para su certificación. También hay otros programas estatales recurrentes de desarrollo profesional si los profesores consideran que necesitan un “repaso”, dijo. </p><p>Como profesor, Kelsey dijo que el mayor reto al que se enfrenta es ver las brechas en la educación de un niño, especialmente para los estudiantes de GHS con bajo dominio del Inglés. </p><p>“Tendremos chicos que vendrán, y pueden tener 14 o 15 años de edad, pero no han estado en la escuela durante un par de años”, dijo. “Eso es un verdadero desafío cuando estos chicos llegan a la escuela secundaria y ahora están sentados en clases avanzadas de matemáticas o ciencias, y ni siquiera tienen el vocabulario para conversar con la gente”.  </p><p>Para aprender inglés, Kelsey dijo que a las clases de nivel principiante se les muestran vídeos de BrainPop para facilitar el acceso y un ritmo de habla lento.  A medida que los alumnos avanzan, se incorporan a ReadingPlus, un programa de nivel de secundaria en todo el distrito destinado a mejorar la comprensión, el vocabulario y la fluidez. </p><p>Conectar el programa ESOL de GHS con la comunidad, donde muchos padres tienen varios trabajos o barreras lingüísticas, también es un reto, dijo. </p><p>“A menudo, nuestros alumnos de ESOL de secundaria son los que mejor hablan inglés de su familia”, afirmó. “Hacemos todo lo que podemos con los estudiantes que entran en nuestras aulas cada día. Tiene que haber agencias comunitarias que reparen esa brecha”.</p><p>Las disparidades en el rendimiento académico se miden mediante la Evaluación del Pensamiento Estudiantil de Florida (FAST), un examen estatal cuyo objetivo es aportar una mayor responsabilidad y transparencia a las escuelas, con estándares establecidos por los “Puntos de Referencia para un Pensamiento Estudiantil Excelente” (B.E.S.T.). La implementación del sistema de pruebas FAST bajo las normas B.E.S.T., que comenzó en el año escolar 2022-23, permite supervisar el progreso de los estudiantes tres veces por año escolar, según el Departamento de Educación de Florida. </p><p>La transición al sistema FAST sustituyó a la prueba FSA basada en el tronco común que anteriormente completaban los alumnos, y la adopción de las normas B.E.S.T. tiene como objetivo la transición a un sistema de seguimiento individualizado basado en el crecimiento. </p><p>El examen FAST de Artes del Lenguaje Inglés (ELA) se administra en los Programas Voluntarios de Educación Preescolar hasta el 10mo grado. Los componentes del examen pueden incluir la comunicación a través de la escritura, el vocabulario, la lectura de textos informativos y la lectura a través de géneros, con su contenido que varía según los estándares de nivel de grado. </p><p>Las bibliotecas escolares también contribuyen a reducir las diferencias en el rendimiento en lengua y literatura. La especialista en medios de comunicación del distrito de las escuelas públicas del condado de Alachua, Patty Duval, dijo que los especialistas en medios de comunicación de las escuelas son culturalmente receptivos y conservan sus colecciones para satisfacer las necesidades de los estudiantes.  </p><p>“La mayoría de nuestras colecciones incluyen títulos que no sólo están escritos en español, sino que tienen personajes o historias españoles o hispanos”, dijo. </p><p>Cada escuela promueve la lectura de forma diferente, una de las cuales es el programa Sunshine State Young Readers Award, que, según Duval, fomenta la lectura independiente. Los estudiantes que leen tres o más libros de la lista anual pueden votar por su favorito, dijo.</p><p>Más allá de la escuela, el Distrito de Bibliotecas del Condado de Alachua (ACLD) ofrece recursos para que los adultos mejoren su dominio del inglés, incluyendo un Club de Conversación organizado por personal y voluntarios del ACLD. Los participantes pueden practicar inglés en grupos reducidos y hablar de tradiciones culturales, aficiones y acontecimientos de actualidad. La organización también ofrece un programa de alfabetización de adultos con sesiones de tutoría uno-a-uno y proporciona una variedad de herramientas de aprendizaje de idiomas, que incluyen tanto la biblioteca y los recursos de la comunidad, el Gerente de Relaciones Públicas del Distrito de Bibliotecas del condado de Alachua, Brad McClenny escribió en un correo electrónico. </p><p>“El Distrito de Bibliotecas es una riqueza de conocimientos, y proporcionamos acceso a información que las personas o las familias pueden utilizar para apoyar mejor su propio trayecto a través de la educación”, escribió McClenny. </p><p>El senador estatal Keith Perry, republicano de Gainesville, es miembro del Comité de Educación PK-12 del Senado de Florida. Dijo que su mayor enfoque para mejorar la alfabetización era la música en la educación elementaria. </p><p>Según la Federación Nacional de Asociaciones Estatales de Enseñanza Secundaria, los jóvenes músicos suelen tener una mayor capacidad lingüística y lectora porque su cerebro ha pasado activamente más tiempo “interactuando con el sonido”.</p><p>Perry ejecutó un programa de tres años en el que se hicieron pruebas con alumnos de jardín de infancia, primero y segundo grado, a los que se les dieron instrumentos para tocar. </p><p>“Vimos mejoras en dos áreas”, dijo. “Una fue en las ganancias académicas, y la otra área que vimos fue una [mayor] asimilación en una clase”.</p><p>Aparte de la música, Perry dijo que la mayor pérdida de rendimiento en lengua y literatura se producía en verano, cuando algunos estudiantes no pueden continuar su educación cuando la escuela no está en sesión. </p><p>“Hacemos cosas como la financiación de Boys and Girls Clubs y algunas otras cosas que tienen programas para niños durante el verano”, dijo. “Pero ninguno de esos programas está realmente diseñado desde un nivel académico como lo estaría una escuela”.  </p><p>La reciente legislación estatal, como la Ley Stop WOKE, que limita las conversaciones sobre la raza en el aula y la expansión de las prohibiciones de libros en el K-12 de Florida, también ha planteado retos para el acceso de los estudiantes a la información sobre sus propios orígenes diversos. La restricción de los programas de diversidad, equidad e inclusión también plantea retos a la enseñanza culturalmente receptiva.</p><p>Las puntuaciones y el tiempo de lectura de los alumnos aumentaron después de que los educadores añadieran libros diversos a sus bibliotecas de aula, según un estudio de la organización sin fines de lucro First Book realizado a lo largo del curso escolar 2022-23.</p><p>Sin embargo, Perry afirmó que los programas DEI no desempeñan ningún papel en la reducción de las diferencias de rendimiento en lengua y literatura. </p><p>“[La DEI] es una forma terrible de estructurar la sociedad, y además no funciona”, afirmó. </p><p>Por el contrario, Perry dijo que la reducción de la brecha de rendimiento entre los estudiantes con alto y bajo dominio del inglés comienza por resolver la falta de oportunidades de los estudiantes y caracterizar sus necesidades individuales. </p><p>Valerie Mederos, de 21 años y residente en Gainesville, es la coordinadora de programas lingüísticos de Children Beyond Our Borders, una organización local sin fines de lucro que trabaja para eliminar las barreras educativas de los estudiantes latinoamericanos. </p><p>Mederos enseña clases de inglés para todas las edades e incorpora la enseñanza de la conversación cuando es necesario, lo que permite a un grupo participar en la lectura por turnos para practicar la pronunciación. El mayor impacto en el rendimiento lingüístico de un estudiante podría atribuirse a su miedo a ser diferente de los demás, dijo. </p><p>“Tuve una alumna que vino de Venezuela hace dos años, por lo que no sabía inglés y dudaba en apuntarse a ciertos clubes en la escuela”, dijo ella. “Ella tal vez pensó ‘Oh, no me entenderían en absoluto’. La barrera del idioma influye mucho en la disposición de la gente a educarse... simplemente porque están dudando”.</p><p>Los factores socioeconómicos también influyen en el rendimiento de los alumnos en lengua y literatura, dijo ella. </p><p>“Algunos estudiantes ni siquiera vienen a algunas de las clases de inglés”, dijo. “No porque no quieran, sino porque tienen que trabajar horas extra en su trabajo”.</p><p>A pesar de los retos, Mederos afirma que ha observado una reacción positiva por parte de sus alumnos. </p><p>“Van porque quieren estar allí”, afirma. “Creo que el deseo está definitivamente ahí, sólo es cuestión de las oportunidades que se den”.</p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML ='Traducido por ' + myArticle.translator;
    }
    else{
        parent.querySelector('#articleTranslator').innerHTML ='';
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 29, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 29, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('voting').addEventListener('click', function() {
    const myArticle = {
        slug: "voting",
    headline_en: "Dissecting the Hispanic, Latino voting monolith myth",
    headline_es: "Analizando el mito del monolito de votación hispana y latina",
    subtitle_en: "The community may not have shifted as far right as previously believed",
    subtitle_es: "La comunidad puede no haberse desplazado tan a la derecha como se creía anteriormente",
    card_path: "hispanicvoters.png", 
    card_caption_en: "Melanie Peña // Alligator Staff",
    card_caption_es: "Melanie Peña // Equipo del Alligator",
    author_one: "Morgan Vanderlaan",
    author_two: "",
    translator: "Eneida Escobar",
    contact_one_en: "Contact Morgan Vanderlaan at mvanderlaan@alligator.org. Follow her on X @morgvande.",
    contact_two_en: "",
    contact_one_es: "Contacta a Morgan Vanderlaan en mvanderlaan@alligator.org. Síguela en X @morgvande.",
    contact_two_es: "Traducido por Eneida Escobar. Contáctala por eescobar@alligator.org. Síguela en X @EneidaMariaEsc.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "For Gabriela Gongora Rosales, unprecedented times like the 2024 presidential election call for dynamic solutions, including setting the record straight on the false narrative that the Hispanic voting bloc is a monolith.",
    desc_es: "Para Gabriela Gongora Rosales, tiempos sin precedentes como la elección presidencial de 2024 exigen soluciones dinámicas, incluida la aclaración del falso relato de que el bloque de votación hispano es un monolito.",
    body_en: "<p>As she listened to Spanish radio, Colombian immigrant Gabriela Gongora Rosales said it’s never unusual to hear Republican campaign ads reaching through the static to ask Hispanic voters if they’re tired of fearing leftist politicians. </p><p>The Seminole County resident said U.S. “targeted media ads” relying on false premises to “lure” voters strikes a chord for people who have immigrated from socialist and communist countries.  </p><p>“We're in a time where the American political system has left people feeling like they are disenfranchised,” Gongora Rosales said. </p><p>For Gongora Rosales, unprecedented times like the 2024 presidential election call for dynamic solutions, including setting the record straight on the false narrative that the Hispanic voting bloc is a monolith. </p><p>A monolith refers to the process of impersonal politics in which peoples of a similar diaspora are grouped together. In the U.S., one of the most common groups categorized as a monolith is the Hispanic community.</p><p>Poder Latinx Florida State Coordinator Alejandro Flores said this assumption is false. </p><p>“By just referring to the Latino vote [as monolithic] is taking away that culture, that identity that each nationality has,” he said. </p><p>Poder Latinx is a nonprofit, nonpartisan organization dedicated to empowering the Latino vote through education on the election cycle, environment, economy and immigration. Flores described his main goal as helping the Hispanic community make informed decisions at the polls based on fact rather than what they may have read “on WhatsApp or because a friend of a friend told them.” </p><p>Despite Venezuela, Colombia and Brazil existing in similar regions, Flores said their cultures are incredibly different, therefore altering voting preferences. Similarly, people immigrating from Cuba may have an ingrained fear of socialism due to its historic dictatorship while those from Mexico may vote to avoid the potential for cartel violence, he said. </p><p>“Each country has a different need and a different worry.” Flores said. “That is not being addressed by leaders [who] just encompass all the Latino countries into the Latino community.” </p><p>Latino voters are predicted to encompass 14.7% of eligible voters in the 2024 election, according to the Pew Research Center. </p><p>With the political groups like “Latinos for Trump 2020” and the LIBRE Initiative’s “Say No Bidenomics: Latinos can’t afford Biden’s economy” campaign on the rise, media outlets have spread the word of a “red wave” moving through the Hispanic community. </p><p>The 2022 midterm election saw 60% of Hispanic voters cast ballots for Democrats compared with 39% who supported Republicans, a 21-point narrowed margin compared to 2018. While Hispanic voters still tend to vote blue, a higher percentage of Hispanic voters supported GOP candidates during the 2022 midterm elections than in previous years, according to the Pew Research Center. </p><p>However, Flores said the shift is likely not as drastic as election media portrays it. </p><p>“I feel like these people turning to one side [or] to this extreme side, is because they don't have the right resources, and they don't have the right venues of education,” he said. </p><p>Misinformation and a lack of accurately translated information in the media increases difficulty for non-english speakers to filter their content by assessing its similarities to “propaganda” and “fearmongering,” he said.  </p><p>UF alum and Sunrise Movement member Giancarlo Rodriguez said the parents of his Hispanic and Latino friends who formerly voted for Obama switched to Trump in 2020.  </p><p>“I think Hispanic voters are taken for granted by the Democratic Party,” he said. “We see by recent years the Hispanic voters are turning away from Democrats in Florida, and I feel like that goes to show that they're not being invested in and that they're kind of being neglected.” </p><p>As a Spanish radio listener, Rodriguez said he constantly hears Republican-backed campaign ads and hopes Democrats will be more proactive about reaching the Hispanic voting bloc, especially pertaining to younger generations. </p><p>“They have to be shaping the narrative, and Democrats aren't doing that. They let the Republicans do it,” he said. </p><p>The trend led to misconceptions framing Biden as a “socialist and a communist” in the 2020 election cycle, building off of pre-existing fears within the community, which Rodriguez said is yet another example of how treating Hispanic and Latino voters like a monolith correlates with Democratic losses.</p><p>“[Democrats] just kind of assume that all Hispanics are the same and that the same things resonate with all of us,” he said. “I feel like that has led to their downfall in many states or… margins getting closer in many states.”</p><p>Rodriguez said he hopes to one day see more candidates like Debbie Mucarsel Powell, the Ecuadorian and Lebanese woman challenging incumbent Rick Scott for a Florida senate seat in the upcoming general election. </p><p>“It’s really refreshing… I feel like she actually understands the community,” he said. “With her lived experience, she’ll be able to better get Hispanic voters and not neglect them.” </p><p>Gongora Rosales, a Colombian immigrant and Seminole County resident, said the Hispanic voting bloc is extremely inactive, which could be linked to the false premise that their vote doesn’t count from feelings of disenfranchisement. </p><p>“When you treat a voting bloc like a monolith, you're just reinforcing stereotypes onto that community,” she said. “If you're not telling voters what they want to hear, if you're only approaching certain voters… you're missing a lot of important information that could turn that demographic to the polls.” </p><p>Florida Hispanic Federation Community Outreach Director Eli Garcia said engaging in local politics holds just as much importance as federal-level elections. </p><p>“It is important that you get to know about who represents you,” she said. “People are only thinking of the national level, but [we need to] also get them thinking about the local level and the state level too as well.” </p><p>The Hispanic Federation is a nonprofit organization that empowers Hispanic communities and Latino institutions through work focused on social and political issues. So far, the federation has engaged 2.1 million Latino voters through voter registration drives and partnerships with grassroot campaigning efforts. </p><p>In Alachua County, there were 16,554 registered voters who self-identified as Hispanic as of July 24, according to the Alachua County Supervisor of Elections Office (ACSEO). </p><p>ACSEO Communications and Outreach Director Aaron Klein said the Hispanic voting bloc is absolutely not a monolith, especially when it comes to election day. </p><p>“I can tell you that there is no population when it comes to voting that is a monolith, that speaks the same way and thinks the same way,” he said. </p><p>For those who only speak Spanish, Klein said the ACSEO provides a Spanish-language hotline for assistance during election day and early voting. All ballots are also translated into Spanish, so if voters feel more comfortable to vote on a completely Spanish language ballot, they can.</p><p>During the 2022 general election, the ACSEO reported 57 Spanish-language ballots were used, a number which Klein said is expected to increase.</p><p>“We really make it a part of our mission to try to reach people as individuals… to ensure that they feel empowered to vote no matter what their beliefs are,” Klein said. </p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>Mientras escuchaba la radio en español, la inmigrante colombiana Gabriela Gongora Rosales dijo que nunca es inusual escuchar anuncios de campaña republicanos atravesando la estática para preguntar a los votantes hispanos si están cansados de temer a los políticos izquierdistas.</p><p>La residente del condado de Seminole dijo que los “anuncios dirigidos en los medios” de Estados Unidos que se basan en premisas falsas para “atraer” a los votantes resuenan en personas que han emigrado de países socialistas y comunistas.</p><p>“Estamos en un momento en el que el sistema político estadounidense ha dejado a la gente sintiéndose desilusionada”, dijo Gongora Rosales.</p><p>Para Gongora Rosales, tiempos sin precedentes como la elección presidencial de 2024 exigen soluciones dinámicas, incluida la aclaración del falso relato de que el bloque de votación hispano es un monolito.</p><p>Un monolito se refiere al proceso de política impersonal en el que personas de una diáspora similar son agrupadas juntas. En los Estados Unidos, uno de los grupos más comunes categorizados como un monolito es la comunidad hispana.</p><p>Alejandro Flores, Coordinador Estatal de Florida de Poder Latinx, dijo que esta suposición es falsa.</p><p>“Al referirse solo al voto latino [como monolítico], se está quitando esa cultura, esa identidad que tiene cada nacionalidad”, dijo.</p><p>Poder Latinx es una organización sin fines de lucro y no partidista dedicada a empoderar el voto latino a través de la educación sobre el ciclo electoral, el medio ambiente, la economía y la inmigración. Flores describió su principal objetivo como ayudar a la comunidad hispana a tomar decisiones informadas en las urnas basadas en hechos en lugar de lo que pueden haber leído “en WhatsApp o porque un amigo de un amigo les dijo”.</p><p>A pesar de que Venezuela, Colombia y Brasil existen en regiones similares, Flores dijo que sus culturas son increíblemente diferentes, alterando así las preferencias de votación. De manera similar, las personas que emigran de Cuba pueden tener un temor arraigado al socialismo debido a su dictadura histórica, mientras que aquellos de México pueden votar para evitar el potencial de violencia de los carteles, dijo.</p><p>“Cada país tiene una necesidad diferente y una preocupación diferente”, dijo Flores. “Eso no está siendo abordado por los líderes [que] simplemente engloban a todos los países latinos en la comunidad latina”.</p><p>Se predice que los votantes latinos representarán el 14.7% de los votantes elegibles en las elecciones de 2024, según el Pew Research Center.</p><p>Con grupos políticos como “Latinos for Trump 2020” y la campaña “Dile No a Bidenomics: los Latinos no podemos tener la economía de Biden” de la LIBRE Initiative en ascenso, los medios de comunicación han difundido la idea de una “ola roja” moviéndose a través de la comunidad hispana.</p><p>Las elecciones de mitad de período de 2022 vieron al 60% de los votantes hispanos emitir votos a favor de los demócratas en comparación con el 39% que apoyaron a los republicanos, una diferencia de 21 puntos en comparación con 2018. Si bien los votantes hispanos todavía tienden a votar azul, un mayor porcentaje de votantes hispanos apoyaron a los candidatos del partido republicano durante las elecciones de mitad de período de 2022 que en años anteriores, según el Pew Research Center.</p><p>Sin embargo, Flores dijo que el cambio probablemente no sea tan drástico como los medios de comunicación electoral lo retratan.</p><p>“Siento que estas personas que se están volviendo a un lado [o] a este lado extremo, es porque no tienen los recursos adecuados y no tienen los canales adecuados de educación”, dijo.</p><p>La desinformación y la falta de información traducida con precisión en los medios aumentan la dificultad para que los que no hablan inglés filtren su contenido al evaluar sus similitudes con “propaganda” y “alarmismo”, dijo.</p><p>Giancarlo Rodriguez, exalumno de UF y miembro del Sunrise Movement, dijo que los padres de sus amigos hispanos y latinos que antes votaban por Obama cambiaron a Trump en 2020.</p><p>“Creo que los votantes hispanos son dados por sentado por el Partido Demócrata”, dijo. “Vemos que en los últimos años los votantes hispanos se están alejando de los demócratas en Florida, y siento que eso demuestra que no están siendo invertidos y que están siendo un poco descuidados”.</p><p>Como oyente de la radio en español, Rodriguez dijo que constantemente escucha anuncios de campaña respaldados por republicanos y espera que los demócratas sean más proactivos en llegar al bloque de votación hispano, especialmente en lo que respecta a las generaciones más jóvenes.</p><p>“Tienen que estar dando forma a la narrativa, y los demócratas no están haciendo eso. Dejan que los republicanos lo hagan”, dijo.</p><p>La tendencia llevó a malentendidos que describen a Biden como un “socialista y comunista” en el ciclo electoral de 2020, construyendo sobre miedos preexistentes dentro de la comunidad, lo cual Rodriguez dijo que es otro ejemplo de cómo tratar a los votantes hispanos y latinos como un monolito se correlaciona con las pérdidas demócratas.</p><p>“[Los demócratas] simplemente asumen que todos los hispanos son iguales y que las mismas cosas resuenan con todos nosotros”, dijo. “Siento que eso ha llevado a su caída en muchos estados o... márgenes que se están cerrando en muchos estados”.</p><p>Rodriguez dijo que espera ver algún día más candidatos como Debbie Mucarsel Powell, la mujer ecuatoriana y libanesa que desafía al titular Rick Scott por un escaño en el senado de Florida en las próximas elecciones generales.</p><p>“Es realmente refrescante... Siento que ella realmente entiende a la comunidad”, dijo. “Con su experiencia de vida, podrá captar mejor a los votantes hispanos y no descuidarlos”.</p><p>Gongora Rosales, una inmigrante colombiana y residente del condado de Seminole, dijo que el bloque de votación hispano está extremadamente inactivo, lo que podría estar vinculado a la falsa premisa de que su voto no cuenta debido a sentimientos de desilusión.</p><p>“Cuando tratas a un bloque de votación como un monolito, simplemente estás reforzando estereotipos en esa comunidad”, dijo. “Si no le estás diciendo a los votantes lo que quieren escuchar, si solo te estás acercando a ciertos votantes... estás perdiendo mucha información importante que podría llevar a esa demografía a las urnas”.</p><p>Eli Garcia, Directora de Alcance Comunitario de la Federación Hispana de Florida, dijo que participar en la política local es tan importante como las elecciones a nivel federal.</p><p>“Es importante que conozcas quién te representa”, dijo. “La gente solo piensa en el nivel nacional, pero [necesitamos] también hacer que piensen en el nivel local y estatal también”. </p><p>La Federación Hispana es una organización sin fines de lucro que empodera a las comunidades hispanas y las instituciones latinas a través de trabajos enfocados en problemas sociales y políticos. Hasta ahora, la federación ha involucrado a 2.1 millones de votantes latinos a través de campañas de registro de votantes y asociaciones con esfuerzos de campaña de base.</p><p>En el condado de Alachua, había 16,554 votantes registrados que se identificaron como hispanos al 24 de julio, según la Oficina del Supervisor de Elecciones del Condado de Alachua (ACSEO).</p><p>Aaron Klein, Director de Comunicaciones y Alcance de ACSEO, dijo que el bloque de votación hispano absolutamente no es un monolito, especialmente cuando se trata del día de las elecciones.</p><p>“Puedo decirles que no hay ninguna población cuando se trata de votar que sea un monolito, que hable de la misma manera y piense de la misma manera”, dijo.</p><p>Para aquellos que solo hablan español, Klein dijo que la ACSEO proporciona una línea directa en español para asistencia durante el día de las elecciones y la votación anticipada. Todas las boletas también se traducen al español, por lo que si los votantes se sienten más cómodos votando en una boleta completamente en español, pueden hacerlo.</p><p>Durante las elecciones generales de 2022, la ACSEO informó que se utilizaron 57 boletas en español, un número que Klein dijo que se espera que aumente.</p><p>“Realmente hacemos de esto una parte de nuestra misión para tratar de llegar a las personas como individuos... para asegurar que se sientan empoderados para votar sin importar cuáles sean sus creencias”, dijo Klein.</p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML ='Traducido por ' + myArticle.translator;
    }
    else{
        parent.querySelector('#articleTranslator').innerHTML ='';
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 29, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 29, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('ice').addEventListener('click', function() {
    const myArticle = {
        slug: "ice",
    headline_en: "A majority of ICE Baker County facility detainees have no or minor criminal convictions ",
    headline_es: "La mayoría de los detenidos en la instalación de ICE del condado de Baker no tienen condenas penales o solo tienen condenas menores",
    subtitle_en: "The primarily Latino detainees face lack of medical care, unfair treatment ",
    subtitle_es: "Los detenidos, en su mayoría latinos, enfrentan falta de atención médica y trato injusto",
    card_path: "ice.png", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Lee Ann Anderson",
    author_two: "",
    translator: "Eneida Escobar",
    contact_one_en: "Contact Lee Ann Anderson at landerson@alligator.org. Follow her on X @LeeAnnJOU",
    contact_two_en: "",
    contact_one_es: "Contacta a Lee Ann Anderson en landerson@alligator.org. Síguela en X @LeeAnnJOU.",
    contact_two_es: "Traducido por Eneida Escobar. Contáctala por eescobar@alligator.org. Síguela en X @EneidaMariaEsc.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "The Immigration and Customs Enforcement Baker County  Detention Facility houses detainees from every Florida county north of Orlando, with over 70% of ICE detainees originating from Latin American countries.",
    desc_es: "La instalación de detención del condado de Baker del Servicio de Inmigración y Control de Aduanas (ICE) alberga detenidos de todos los condados de Florida al norte de Orlando, con más del 70% de los detenidos de ICE provenientes de países de América Latina.",
    body_en: "<p>Nationally, nearly 60% of people detained in immigrant detention have no or minor charges. In Baker County, it’s 63% of detainees.</p><p>The Immigration and Customs Enforcement Baker County  Detention Facility houses detainees from every Florida county north of Orlando, with over 70% of ICE detainees originating from Latin American countries. The center held 243 people in 2019, 63% having minor or no prior convictions. As of July 8, the facility has maintained a guaranteed detainee minimum of 192, according to the TRAC immigration database.</p><p>Immigrants without proper legal documentation can be sent to detention, even without a criminal history.</p><p>Vilerka Bilbao, a Jacksonville-based lawyer who frequently defends people from the center, said detainees often don’t have the necessary legal representation to avoid further detention. </p><p>“It tends to be people who are there prolonged [and] don't have family members here in the United States or don't have the money to represent,” Bilbao said. “Once [ICE] sees that somebody has an attorney, once [ICE] sees that somebody has a way to get out, those people tend to get out of detention.”</p><p>ICE provides alternatives to its detention center like Intensive Supervision Appearance Program, which provides case management and technology to support compliance with release conditions, and Young Adult Case Management Program, a sub-program geared toward youth in the facilities.</p><p>The programs don’t educate detainees about the resources available to them, instead only monitoring their whereabouts, Bilbao said. Facility employees also often don’t speak Spanish, which she said could perpetuate existing language barriers.</p><p>Porter Horne, Immigrant Hope Gainesville branch director, said since the facility houses both immigrants and inmates, the lines become blurred between how the two groups are treated.</p><p>Immigrant Hope is a faith-based national organization aiming to provide resources for immigrants ranging from assistance with paperwork or connecting them with legal representation.</p><p>“[Baker County Sheriff’s Office] will tell you that they treat the ICE detainees very differently from [how] they treat people who are in jail because they're either awaiting trial or they've been convicted of something, but in practice, that's not true at all,” Horne said.</p><p>The director said people being sent to ICE boils down to racism and that a majority of people in the centers have never committed a crime. Horne said it’s counterproductive to put people in detention centers, as it separates families and takes away their ability to support themselves.</p><p>Since 2022, the American Civil Liberties Union has engaged in an ongoing lawsuit with the Baker County facility over increasing attorney accessibility and the lack of privacy surrounding legal meetings and mail.</p><p>Amy Godshall, an ACLU attorney defending ICE detainees, said the facility also has long-standing issues regarding unfair detainee treatment.</p><p>“There is not sufficient medical care for people who are in detention. There is not clean water. There is not nutritious food,” Godshall said. “There’s a lot of racist slurs, harassment and discrimination that occurs in the facility.”</p><p>From 2019 to 2024, 88 complaints were filed against the facility, 78 of which concerning a lack of adequate medical care. </p><p>The Department of Homeland Security Office for Civil Rights and Civil Liberties investigated the claims, determining there were “immediate concerns regarding the health and well-being of persons detained at Baker,” according to an ACLU news release.</p><p>The lack of basic resources could be attributed to increasing debt, which included a $35 million loan requested to maintain operations in 2018, according to a board of directors agreement. </p><p>Conditions worsened for detainees after the ACLU lawsuit was filed, Godshall said.</p><p>“Two months after we filed the lawsuit, they stopped facilitating legal calls,” she said. </p><p>The facility also has a limited number of phones, and cramped quarters reduce privacy during calls.</p><p>“What I've heard from a lot of people who I've spoken with at Baker, it feels like every aspect of the detention is punitive and psychological warfare aimed at getting people to self deport,” she said.</p>", // Paste FORMATED and MINIFIED article text here</p><p>
    body_es: "<p>A nivel nacional, casi el 60% de las personas detenidas en detención de inmigrantes no tienen cargos o tienen cargos menores. En el condado de Baker, el 63% de los detenidos se encuentran en esta situación.</p><p>La instalación de detención del condado de Baker del Servicio de Inmigración y Control de Aduanas (ICE) alberga detenidos de todos los condados de Florida al norte de Orlando, con más del 70% de los detenidos de ICE provenientes de países de América Latina. El centro albergaba a 243 personas en 2019, de las cuales el 63% no tenía condenas previas o solo tenía condenas menores. Al 8 de julio, la instalación ha mantenido un mínimo garantizado de 192 detenidos, según la base de datos de inmigración TRAC.</p><p>Los inmigrantes sin la documentación legal adecuada pueden ser enviados a detención, incluso sin antecedentes penales.</p><p>Vilerka Bilbao, una abogada con sede en Jacksonville que frecuentemente defiende a personas del centro, dijo que los detenidos a menudo no tienen la representación legal necesaria para evitar una mayor detención.</p><p>\"Suele ser gente que está allí por un tiempo prolongado, que no tiene familiares aquí en Estados Unidos o que no tiene el dinero para representarse\", dijo Bilbao. \"Una vez que [ICE] ve que alguien tiene un abogado, una vez que [ICE] ve que alguien tiene una manera de salir, esas personas tienden a salir de la detención\".</p><p>ICE ofrece alternativas a su centro de detención, como el Programa de Supervisión Intensiva de Apariciones, que proporciona gestión de casos y tecnología para apoyar el cumplimiento de las condiciones de liberación, y el Programa de Gestión de Casos para Jóvenes Adultos, un subprograma dirigido a jóvenes en las instalaciones.</p><p>Los programas no educan a los detenidos sobre los recursos disponibles para ellos, sino que solo monitorean su paradero, dijo Bilbao. Los empleados de la instalación a menudo no hablan español, lo que, según ella, podría perpetuar las barreras idiomáticas existentes.</p><p>Porter Horne, director de la sucursal de Immigrant Hope en Gainesville, dijo que dado que la instalación alberga tanto a inmigrantes como a presos, las líneas se difuminan entre cómo se trata a los dos grupos.</p><p>Immigrant Hope es una organización nacional basada en la fe que busca proporcionar recursos para los inmigrantes, que van desde asistencia con el papeleo hasta conectarlos con representación legal.</p><p>\"[La Oficina del Sheriff del Condado de Baker] te dirá que tratan a los detenidos de ICE de manera muy diferente a cómo tratan a las personas que están en la cárcel porque están esperando juicio o han sido condenados por algo, pero en la práctica, eso no es cierto en absoluto\", dijo Horne.</p><p>El director dijo que enviar a las personas a ICE reduce el racismo y que la mayoría de las personas en los centros nunca han cometido un crimen. Horne dijo que es contraproducente poner a las personas en centros de detención, ya que separa a las familias y les quita la capacidad de mantenerse a sí mismos.</p><p>Desde 2022, la Unión Americana de Libertades Civiles (ACLU) ha estado involucrada en una demanda en curso con la instalación del condado de Baker sobre el aumento de la accesibilidad de los abogados y la falta de privacidad en las reuniones y correos legales.</p><p>Amy Godshall, una abogada de la ACLU que defiende a los detenidos de ICE, dijo que la instalación también tiene problemas de larga data en cuanto al trato injusto de los detenidos.</p><p>\"No hay atención médica suficiente para las personas que están detenidas. No hay agua limpia. No hay comida nutritiva\", dijo Godshall. \"Hay muchos insultos racistas, acoso y discriminación que ocurren en la instalación.\"</p><p>De 2019 a 2024,  se presentaron 88 quejas contra la instalación, 78 de las cuales se referían a la falta de atención médica adecuada.</p><p>La Oficina de Derechos Civiles y Libertades Civiles del Departamento de Seguridad Nacional investigó las denuncias y determinó que había \"preocupaciones inmediatas con respecto a la salud y el bienestar de las personas detenidas en Baker\", según un comunicado de prensa release de la ACLU.</p><p>La falta de recursos básicos podría atribuirse al aumento de la deuda, que incluía un préstamo de $35 millones solicitado para mantener las operaciones en 2018, según un acuerdo de la junta directiva.</p><p>Las condiciones empeoraron para los detenidos después de que se presentó la demanda de la ACLU, dijo Godshall.</p><p>\"Dos meses después de que presentamos la demanda, dejaron de facilitar llamadas legales\", dijo.</p><p>La instalación también tiene un número limitado de teléfonos y las áreas confinadas reducen la privacidad durante las llamadas.</p><p>\"Lo que he escuchado de muchas personas con las que he hablado en Baker, es que sienten que cada aspecto de la detención es punitivo y una guerra psicológica destinada a hacer que las personas se deporten a sí mismas\", dijo.</p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML ='Traducido por ' + myArticle.translator;
    }
    else{
        parent.querySelector('#articleTranslator').innerHTML ='';
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 29, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 29, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);
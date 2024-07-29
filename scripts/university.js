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

document.getElementById('children-book').addEventListener('click', function() {
    const myArticle = {
        slug: "children-book",
    headline_en: "Children’s book project captures untold Hispanic immigration stories",
    headline_es: "Proyecto de libros para niños capta historias nunca contadas de la inmigración hispana",
    subtitle_en: "UF students create narratives to connect with Hispanic, immigrant heritage ",
    subtitle_es: "Estudiantes de la UF crean narrativas para conectar con el patrimonio hispano e inmigrante",
    card_path: "childrensbooks.png", 
    card_caption_en: "Melanie Peña // Alligator Staff",
    card_caption_es: "Melanie Peña // Equipo del Alligator",
    author_one: "Grace McClung",
    author_two: "",
    translator: "Avery Parker",
    contact_one_en: "Contact Grace McClung at gmcclung@alligator.org. Follow her on X @gracenmclung",
    contact_two_en: "",
    contact_one_es: "Contacta a Grace McClung por gmcclung@alligator.org. Síguela en X @gracenmclung. Traducido por Avery Parker. Contáctalo por aparker@alligator.org. Síguelo en X @AveryParke98398.",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "Instead of reading about Jack and Annie’s travels to distant lands in a magic treehouse, children might soon be reading about Jose’s journey from the mountains of Mexico to a Texas ranch or Ericka’s move from the Peruvian coast to the cold winds of Ohio. ",
    desc_es: "En lugar de leer sobre los viajes de Jack y Annie a tierras lejanas en una casa del árbol mágica, los niños leerán pronto sobre el viaje de José desde las montañas de México a una hacienda tejana o el traslado de Ericka de la costa peruana a los vientos fríos de Ohio.",
    body_en: "<p>Instead of reading about Jack and Annie’s travels to distant lands in a magic treehouse, children might soon be reading about Jose’s journey from the mountains of Mexico to a Texas ranch or Ericka’s move from the Peruvian coast to the cold winds of Ohio. </p><p>In an immigration class taught by UF assistant professor Rafael Solórzano, students created children’s picture books based on immigration oral histories they conducted themselves, capturing the experience of people like Jose and Ericka in short, kid-friendly stories. </p><p>The class — Latinx Migration, Refugees and Citizenship in the U.S. — previously included an oral history paper at the end of the semester, but Solórzano wanted to do something different this year after drawing inspiration from a bilingual storytelling project at local Gainesville elementary schools. </p><p>“We're telling the story of how migrants arrived to the U.S. and where they settled,” Solórzano said. “I think that’s powerful because… if you go to a bookstore, they’re most likely going to be about little children growing up in New York and all these traditional gateway cities.”</p><p>Both undergraduate and graduate students completed the project over half a semester. Students were tasked with condensing a one- to two-hour oral history into 1,000 words accompanied by artwork they did themselves or used AI to do. Most wrote about their friends and family, but several students wrote about themselves.</p><p>Solórzano said his students enjoyed the project, even becoming emotional as they filled gaps in their family history and connected with their Hispanic heritage. </p><p>“This is new scholarship,” Solórzano said. “[The students] are beginning to understand their human dignity.”</p><p>Ximena Villegas, a 21-year-old Mexican American UF public relations senior, said the project provided a space for Hispanic voices in a place where their stories often go untold. </p><p>“There really isn’t a lot of Hispanic voices in children's literature, especially on topics like immigration and migration stories,” Villegas said. “[This project] gave an opportunity to expose children to it but in a positive light.”</p><p>Villegas wrote about her grandfather Jose Villegas who traveled from Guanajuato, Mexico, to Texas in 1966. She said the project helped her learn more about her grandfather’s struggles and become closer to her family.</p><p>“This was a creative approach to helping younger generations understand the experiences and sacrifices that others in their life may have made,” Villegas said. </p><p>She also wrote in an email the project allowed her to “gain a more humanized insight into a community that is sometimes perceived in a negative way.” </p><p>Sonia San Juan, a doctoral student from Spain, wrote about Ericka Ghersi, president of Gainesville’s Latina Women’s League. Ghersi fled the violence of Peru and landed in Ohio where she was shocked by a new culture and isolated by the lack of knowledge people had about her home country.</p><p>San Juan, who came to the U.S. when she was 17, said Ghersi’s story mirrored some of her own experiences. She said the project’s concept was like “self-help literature for kids,” showing young immigrants trying to adjust to a new culture they’re not alone. </p><p>San Juan said the project could also be beneficial for non-immigrant children.</p><p>“The sooner you get to introduce new ideas, new thoughts to other people, the better,” she said. “It's important to reach to that community, to the younger Spanish speakers and English speakers that might be interested in what other people are doing.”</p><p>Gemma Garcia-Gijon, a 20-year-old UF political science and sociology senior, said writing about her father’s experience migrating from Oaxaca, Mexico, to Florida helped her feel closer to her Hispanic culture. She said Hispanic people born and raised in the U.S. like her often struggle with feeling authentically Hispanic, but this project helped her identify parts of her Hispanic culture in her American life she didn’t notice before. </p><p>“There was still aspects that I grew up around that, in a way, are very similar to the way my cousins in Mexico grew up,” Garcia-Gijon said. “That was really nice to see.”</p><p>Garcia-Gijon said the project showed how important representation is, especially for children.</p><p>As a Hispanic person growing up in the U.S., she said “knowing the struggles and the amount of things [our ancestors] had to do to adapt to a new country” is important to learn about. </p><p>While Hispanic voices receive better representation now, she said there’s still work to be done.</p><p> “The immigrant experience still continues to be a bit stigmatized,” she said. </p><p>Other professors across the country have expressed interest in replicating the children’s book project, and two people have shown interest in publishing the stories, according to Rafael Solórzano, the professor leading the project. </p><p>He said he’s planning on revising the stories and editing them into a volume of children’s books. </p><p>An event will be hosted in September where students from the class will read the books to children. The event is still in the planning stage, and no date has been set, Solórzano said.</p><p>If plans for the event move forward, Garcia-Gijon said the project will be doing good work even at just the local level. </p><p>“Gainesville has a lot of young Hispanic minds that need nourishment. They need to know that their experiences and their families' experiences are valid and should be learned about,” she said. “It's never too late to embrace that part of our identity.</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>En lugar de leer sobre los viajes de Jack y Annie a tierras lejanas en una casa del árbol mágica, los niños leerán pronto sobre el viaje de José desde las montañas de México a una hacienda tejana o el traslado de Ericka de la costa peruana a los vientos fríos de Ohio. </p><p>En una clase de inmigración enseñada por el profesor asistente de la UF Rafael Solórzano, los estudiantes crearon cuentos ilustrados para niños basados en historias orales de inmigración, captando las experiencias de personas como José y Ericka en una manera breve y apta para niños.</p><p>En el pasado, la clase, Latinx Migration, había incluido un trabajo de historia oral durante el fin del semestre. Sin embargo, Solórzano tenía ganas de hacer algo diferente este año después de ser inspirado por un proyecto de narración bilingüe establecido por las escuelas primarias de Gainesville.</p><p>“Estamos contando la historia de cómo llegaron a los EE.UU los migrantes y donde se establecieron”, Solórzano dijo. “Creo que es impactante porque…si vas a una librería, típicamente hay sólo libros sobre niños que están creciendo en Nueva York y estas ciudades de entrada tradicionales”.</p><p>Los estudiantes universitarios y de posgrado ambos completaron el proyecto en medio semestre. A los estudiantes les encargó resumir una historia oral de una o dos horas en mil de palabras, en adición al material gráfico que habían hecho ellos mismos o con ayuda de la IA. La mayoría escribió sobre temas de sus amigos y familia, pero varios escribieron sobre sí mismos.</p><p>Solórzano dijo que los estudiantes disfrutaron el proyecto, tanto que se sintieron conmovidos conociendo su historia familiar y conectando con su herencia hispana.</p><p>“Esta es una erudición nueva”, Solórzano dijo. “[Los estudiantes] están empezando a entender su dignidad humana”.</p><p>Ximena Villegas, 21, una estudiante de cuarto año de relaciones públicas en la UF, dijo que el proyecto creó un espacio para voces hispanas en un lugar donde típicamente esas voces no son escuchadas.</p><p>“No hay muchas voces hispanas en la literatura para niños, especialmente sobre temas como inmigración e historias migratorias”, Villegas dijo. “[Este proyecto] creó una oportunidad para que los niños puedan descubrir [esas historias] en una luz positiva”.</p><p>Villegas escribió sobre su abuelo, José Villegas, quien viajó de Guanajuato, México, a Texas en 1966. Ella dijo que el proyecto le ayudó a conocer más sobre las luchas de su abuelo y conectar más con su familia.</p><p>“Este era un enfoque creativo de ayudar a las generaciones más jóvenes a entender las experiencias y sacrificios que han hecho otros en su vida,” Villegas dijo.</p><p>También mencionó que el proyecto le permitió “hacerse una idea más humanizada de una comunidad que a veces sufre de una impresión negativa.”</p><p>Sonia San Juan, una estudiante de doctorado de España, escribió sobre Ericka Ghersi, la presidenta de la Liga de Mujeres Latinas de Gainesville. Ghersi huyó de la violencia en Perú y se estableció en Ohio donde la nueva cultura la dejó sorprendida y solitaria porque nadie entendía nada de su patria. </p><p>San Juan, quien llegó a los EE.UU cuando tenía 17 años, dijo que la historia de Ghersi refleja sus propias experiencias. Dijo que el proyecto intentó proveer una forma de “autoayuda para niños”, mostrándoles a los migrantes jóvenes que no están solos mientras intentan ajustarse a una cultura nueva. </p><p>San Juan dijo que el proyecto pueda ser beneficioso para otros niños también.</p><p>“Mientras más rápido puedas introducir nuevas ideas, nuevas formas de pensar, es mejor”, dijo. “Es importante alcanzar a esa comunidad, los hispanohablantes y anglohablantes jóvenes que tengan interés en las vidas de otras personas”.</p><p>Gemma García, 20, una estudiante de cuarto año de ciencias políticas y sociología en la UF, dijo que escribir sobre la experiencia de su padre migrando de Oaxaca, México, a Florida le ayudó a sentirse más conectada a su cultura hispana. Según ella, los hispanos nacidos y criados en los Estados Unidos, como ella, frecuentemente luchan para sentirse como hispanos auténticos. Este proyecto, sin embargo, le permitió identificar partes de su cultura hispana en su vida estadounidense que nunca había visto antes. </p><p>“Hay aspectos de mi vida que siguen siendo muy similares a mis primos en México”, dijo García. “Me hizo feliz verlo”.</p><p>García dijo que el proyecto demostró cuán importante es la representación, especialmente para niños. Como una hispana criada en los EE.UU, dijo que “conocer las luchas y tantas cosas [que nuestros ancestros] necesitaban hacer para adaptarse a un país nuevo” es crucial.</p><p>Aunque las voces hispanas reciben una representación más amplia ahora, dijo García, todavía hay más trabajo por hacer.</p><p>“La experiencia migratoria aún recibe algún estigma”, dijo.</p><p>Otros profesores al rededor del país han expresado interés en reproducir el proyecto de cuentos para niños. Dos de ellos han mostrado interés en publicar los cuentos, según el Profesor Solórzano.</p><p>Él dijo que está pensando en corregir los cuentos y compilarlos en un volumen de libros para niños.</p><p>Hay un evento en septiembre en cual los estudiantes de la clase leerán los libros a niños. En este momento, el evento todavía está en la fase de desarrollo y no hay fecha fija, dijo Solórzano.</p><p>Si los planes para el evento avanzan, Gemma García dijo que el proyecto hará buen trabajo al menos a nivel local.</p><p>“En Gainesville, hay muchas mentes de hispanos jóvenes que necesitan alimento”, dijo. “Necesitan saber que sus experiencias y las experiencias de su familia son legítimas y deben ser estudiadas. Nunca es demasiado tarde para abrazar esa parte de nuestra identidad”.</p>"
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

document.getElementById('club-lectura').addEventListener('click', function() {
    const myArticle = {
        slug: "club-lectura",
    headline_en: "UF’s Meet the Author Club de Lectura plans six new author visits, workshops and contests",
    headline_es: "El Meet the Author Club de Lectura de la UF hospedará seis charlas con autores nuevos, en adición a talleres y concursos literarios",
    subtitle_en: "The club aims to celebrate Hispanic culture through literary appreciation ",
    subtitle_es: "El club se propone celebrar la cultura hispana a través de la gratitud literaria",
    card_path: "lectura.jpg", 
    card_caption_en: "A sign marking Latin American Studies stands on UF campus on Sunday, July 28, 2024. - Morgan Vanderlaan // Alligator Staff",
    card_caption_es: "Una señal mostrando un marcador histórico de Estudios Latinoamericanos en el campus de la UF el domingo 28 de julio de 2024. - Morgan Vanderlaan // Equipo del Alligator",
    author_one: "Avery Parker",
    author_two: "",
    translator: "",
    contact_one_en: "Contact Avery Parker at aparker@alligator.org. Follow him on X @AveryParke98398.",
    contact_two_en: "Contacta a Avery Parker en aparker@alligator.org. Síguelo en X @AveryParke98398.",
    contact_one_es: "",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "On its face, the genres of science fiction, animal rights, Afrofuturism and environmentalism may not have much in common, but Luis Felipe Gomez Lomelí seeks to bring them all together under the umbrella of Latin American literature.",
    desc_es: "A primera vista, los géneros de la ciencia ficción, los derechos de los animales, el afrofuturismo y el ambientalismo no parecen tener nada en común, pero Luis Felipe Gómez Lomelí trata de unirlos bajo el paraguas de literatura latinoamericana.",
    body_en: "<p>On its face, the genres of science fiction, animal rights, Afrofuturism and environmentalism may not have much in common, but Luis Felipe Gomez Lomelí seeks to bring them all together under the umbrella of Latin American literature.</p><p>Lomelí, the undergraduate coordinator for UF’s Center of Latin American Studies, founded the Meet the Author Club de Lectura in hopes of providing a platform for Hispanic literature within UF’s community.</p><p>Meeting every 15 days during the Fall and Spring semesters, the Spanish-language club aims to bring attendees together to meet Latin American authors and discuss their work.</p><p>Beginning Sept. 5, the club will host Federico Vite, a Mexican author who writes about literature and violence; María Ospina, a professor at Wesleyan University from Colombia; Giovanna Rivero, a Bolivian writer; Munir Hachemi, a Spanish writer; Miguel Yarull, a Dominican film director and writer; and Nadia López, a Tu’un Savi-language poet. </p><p>Past authors have included those like Nicaraguan author Mario Martz, who spoke about “the experiences of living under a dictatorial regime,” which Lomelí described as “quite emotional.”</p><p>On the other hand, when the club hosted Chilean author Alejandra Costamagna, the discussion was “more academic” and focused on the roles of Latin American writers in the literary community. </p><p>Other guest authors have included Yolanda Arroyo Piazarro, a Puerto Rican novelist and author of “Pelo Bueno,” and Florentino Solano, a Mexican writer and author of “La danza de las balas.” </p><p>Meetings see students engaging in group-based discussions with guest authors where they can ask questions and share their thoughts about the author’s book, its themes and any other topics that arise.</p><p>“A good university is a place of plural dialogue, and UF is a great university,” Lomelí said. “The [club] joins the activities that UF carries out to promote culture in the university community.”</p><p>Lomelí said the club provides students a place to speak in Spanish, whether they’re native speakers or are trying to learn, without the stress of grades or pronunciation evaluations. </p><p>“There are no more requirements than reading and wanting to talk and listen, to refresh the Spanish that you have forgotten over the years [or] you’ve been learning, and to understand a little more about the realities of Latin Americans,” Lomelí said.</p><p>Further contributing to his aim of cultural diversity, Lomelí highlighted the club’s interest in engaging with authors such as Munir Hachemi, an Algerian Spaniard, to expand upon the idea that the term “Latin American” goes beyond “a geographic region.” </p><p>Moreover, it invites attendees to learn about Latin American experiences that extend beyond the Spanish language. Florentino Solano, a Mexican writer, read several of his poems in both Spanish and his first language, indigenous Mexican language Tu’un Savi.</p><p>Lomelí said the club will continue to invite six authors per semester while expanding its connections. For example, the club plans to collaborate with both the Spanish Embassy and UF’s Center of African Studies to facilitate Hachemi’s visit. The club also plans to offer a literature creation workshop and a potential writing contest in the fall. </p><p>Sandra Rayas, a 19-year-old UF marketing sophomore, said the club provides a “very cool experience” and gives members a chance to explore literature they wouldn’t otherwise be exposed to. She said her favorite discussion centered on Daniel Rodríguez Barrón’s “La Soledad de las Animales,” a book on ecology, veganism and environmentalism.</p><p>“I almost always read more classical literature,” she said. “It is really interesting to get to know these [modern] authors and ask them questions and understand more about their life stories and listen to their perspectives.” </p><p>Rayas said the Spanish-language aspect of the club gave her a space to feel connected to her heritage despite living in a community with fewer opportunities for speaking Spanish and engaging in Hispanic culture than in a majority Spanish-speaking area.</p><p>On a personal level, Rayas said reading books from Mexican authors allows her to “learn more about [her] culture” and is helpful for “expanding vocabulary, writing better and reading faster.”</p><p>Emily Hind, a UF Spanish professor and club attendee, enjoyed the club so much she decided to host two of the authors, Chilean writer Alejandra Costamagna and Nicaraguan writer Mario Martz, in her own classes where they discussed their writing and life experiences.</p><p>“I was so impressed with what they had to say that they made a return,” Hind said.</p><p>Another aspect where the club promotes literature and Spanish, according to Hind, is by allowing students a space to engage in those topics “without making them commit money or credit hours,” something she said she hoped would lead to “a love of literature beyond what we can do formally [in school].”</p><p>“If you would like to get something out of your college education that will be meaningful to you later, come to the group,” Hind said. “Your Spanish level does not matter.” </p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>A primera vista, los géneros de la ciencia ficción, los derechos de los animales, el afrofuturismo y el ambientalismo no parecen tener nada en común, pero Luis Felipe Gómez Lomelí trata de unirlos bajo el paraguas de literatura latinoamericana.</p><p>Lomelí, el Coordinador Estudiantil del Centro de Estudios Latinoamericanos de la UF, fundó el club con la esperanza de proveer una plataforma para la literatura hispana dentro de la comunidad de la UF.</p><p>Reuniéndose cada 15 días durante el semestre del otoño y el semestre de la primavera, el club hispanohablante trata de reunir a los asistentes para conocer a los autores latinoamericanos y hablar de sus libros. </p><p>A partir del 5 de septiembre, el club hospedará a Federico Vite, un autor mexicano quien escribe sobre la literatura y violencia; María Ospina, una profesora colombiana de la Universidad Wesleyan; Giovanna Rivero, una escritora boliviana; Munir Hachemi, un escritor español; Miguel Yarull, un director de cine y escritor dominicano; y Nadia López, una poeta de la lengua tu’un savi.</p><p>Los autores previos han incluido esos como el autor nicaragüense Mario Martz, quien habló sobre “las experiencias de vivir bajo un régimen dictatorial”, algo  que Lomelí describió como “bastante emotivo\".</p><p>Por otro lado, cuando hospedó el club a la autora chilena Alejandra Costamagna, la conversación “fue más académica” y centrada en “el papel de escritoras latinoamericanas” en la comunidad literaria. </p><p>Otros autores invitados han incluido a Yolanda Arroyo Piazarro, una novelista puertorriqueña y autor de “Pelo Bueno”, y Florentino Solano, un escritor mexicano y autor de “La danza de las balas”.</p><p>Las citas del club se aseguran de que estudiantes participen en discusiones grupales con los autores invitados donde pueden preguntar sus dudas y compartir sus opiniones sobre el libro del autor, sus temas y cualquier otros temas que surjan. </p><p>“Una buena universidad es un lugar de diálogo plural, y UF es una gran universidad”, dijo Lomelí. “El [club] se suma así a las actividades que realiza UF para fomentar la cultura en la comunidad universitaria”.</p><p>Lomelí dijo que el club provee a los estudiantes con un lugar para hablar en español, si son hablantes nativos o están intentando a aprender, sin el estrés de calificaciones o las evaluaciones de pronunciación.</p><p>“No hay más requisitos que leer y tener ganas de conversar y escuchar, de recordar el español que se te ha ido olvidando con los años [o] el que has ido aprendiendo, y de conocer un poco más de las realidades latinoamericanas\", dijo Lomelí.</p><p>Contribuyendo más al objetivo del club de diversidad cultural, Lomelí destacó el interés del club en estar involucrado en autores como Munir Hachemi, un español argelino, para expandir en cómo el significado del término “latinoamericano” va más allá de “una región geográfica\".</p><p>Además, el club invita a sus asistentes a aprender más sobre las experiencias latinoamericanas que van más allá de la lengua española. Florentino Solano, por ejemplo, un escritor mexicano, leyó varias de sus poemas en ambos español y su lengua materna, tu’un savi, un idioma indígeno de México. </p><p>Lomelí dijo que el club continuará a invitar seis autores por semestre mientras expande sus conexiones. Por ejemplo, el club planea colaborar con la Embajada Española y el Centro de Estudios Africanos de la UF para facilitar la charla con Hachemi. También, el club espera ofrecer un taller sobre la creación de literatura y un concurso de escritura potencial en otoño.</p><p>Sandra Rayas, 19, una estudiante del mercadotecnia de segundo año de la UF, dijo que el club provee una “experiencia muy padre” y les da a sus miembros la oportunidad de explorar literatura que típicamente no leerían. Ella dijo que su discusión favorita estaba centrada en “La Soledad de los Animales”, un libro escrito por Daniel Rodríguez Barrón sobre la ecología, el veganismo y el ambientalismo.  </p><p>“Leo casi siempre novelas más clásicas”, ella dijo. “Es muy interesante conocer a los autores, preguntarles y entender sus historias y escuchar sus perspectivas”.</p><p>Rayas dijo que el aspecto que el club es hispanohablante le dio un espacio para sentirse más conectada a su herencia a pesar de vivir en una comunidad con menos oportunidades para hablar en español y estar involucrada en la cultura hispana que una área con una mayoría de hispanohablantes. </p><p>A nivel personal, Rayas dijo que poder leer libros de autores mexicanos le ayudó a “mantener [su] cultura” y además “expandir [su] vocabulario, poder escribir mejor y leer más rápido”.</p><p>El club le gustó tanto a Emily Hind, una profesora de español de la UF y asistente del club, que ella invitó a dos autores, la escritora chilena Alejandra Costamagna y el escritor nicaragüense Mario Martz, para hablar de sus obras y sus experiencias de vida. </p><p>“Quedé tan impresionada por sus historias que les pedí a regresar [a mis clases]”, dijo Hind.</p><p>Un aspecto adicional en que el club da publicidad a la literatura y la lengua española, según Hind, es el hecho de que estudiantes pueden estar involucrados en estos temas “sin el requisito de pagar o dedicar horas de crédito”, algo que ella espera lleve a “el amor por la literatura más allá de lo que hacemos formalmente [en clases]”.</p><p>“Si quieres conseguir algo significativo de tu experiencia universitaria que tendrá importancia para tí más tarde [en tu vida], ven al club”, dijo Hind. “Tu nivel de español no importa”.</p>"
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

document.getElementById('first-gen').addEventListener('click', function() {
    const myArticle = {
        slug: "first-gen",
    headline_en: "UF first-generation students share their success, struggles",
    headline_es: "Estudiantes de primera generación de UF comparten sus éxitos y luchas",
    subtitle_en: "Three Miami-raised students navigate UF without prior family experience",
    subtitle_es: "Tres estudiantes criados en Miami navegan por UF sin experiencia previa familiar",
    card_path: "first-generation.jpg", 
    card_caption_en: " Catherine Valdes pictured on UF campus. - Courtesy to The Alligator",
    card_caption_es: "Catherine Valdes en el campus de la UF. - Cortesía al Alligator",
    author_one: "Sabrina Castro",
    author_two: "",
    translator: "Jose Carmona",
    contact_one_en: "Contact Sabrina Castro at scastro@alligator.org. Follow her on X @sabs_wurld",
    contact_two_en: "",
    contact_one_es: "Contacta a Sabrina Castro por scastro@alligator.org. Siguela en X @sabs_wurld. ",
    contact_two_es: "Traducido por Jose Carmona. Contáctalo por JCarmona@alligator.org. Siguelo en X @JD_CarmonaS",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "Most students coming to college for the first time worry about being on their own, making new friends or finding their classes on campus. First-generation students have the added stress of navigating college without family members with prior experience to lean on for advice.",
    desc_es: "La mayoría de los estudiantes que llegan por primera vez a la universidad se preocupan por estar solos, hacer nuevos amigos o encontrar sus clases en el campus. Los estudiantes de primera generación tienen el estrés adicional de navegar por la universidad sin familiares con experiencia previa a los que recurrir para pedir consejo.",
    body_en: "<p> Most students coming to college for the first time worry about being on their own, making new friends or finding their classes on campus. First-generation students have the added stress of navigating college without family members with prior experience to lean on for advice.</p><p>At UF, this is around a fifth  of the university population, according to a 2021 UF Career Connections Center.</p><p>In the sunlit halls of UF, Catherine Valdes strides with an earned confidence. </p><p>At 19, she carries the weight of a rich cultural heritage and the honor of being a trailblazer in her family. A first-generation college student, Valdes is charting new territory as a business administration major on the pre-vet track.</p><p>Coming from the vibrant city of Miami, Valdes’s background is a colorful tapestry woven from her Colombian and Cuban roots. </p><p>The journey to Gainesville as a first-generation student is not without its challenges, she said.</p><p>“I was absolutely scared of what being a freshman in college entailed,” Valdes said. “My parents did not attend college, which made it harder for me to find resources that would help me navigate through everything.”</p><p>But, the Machen Florida Opportunity Scholarship (MFOS) became her beacon, providing her with a full grant and scholarship package in order to thrive. </p><p>“[MFOS] solidified me coming to UF, but it also gave me multiple resources that I still use to this day,” Valdes said. </p><p>To be eligible for MFOS, recipients need to be admitted to UF as first-year students and are selected based on the information in their UF admission application and Free Application for Federal Student Aid. </p><p>These resources led her to the First-Generation Leadership Program (FGLP), a community where she found friends and mentors who guided her into Student Government.</p><p>Now, Catherine’s resume reads like a seasoned leader — treasurer for FGLP, UF Off-Campus Senator, MFOS peer mentor, vice chair of Ambassadors for Students Taking Action Against Racism and assistant director for the First Generation Cabinet. </p><p>“Through these positions, I will now be able to continue the cycle of giving back to the first-generation community on campus,” she said.</p><p>Many first-gen students face a unique pressure to succeed, she said. </p><p>“We often carry a deep-seated need to prove ourselves to others,” Valdes said. “The most important thing to remember is to focus on your own dreams and aspirations. Embrace what truly matters to you and let your passion guide you.”</p><p>Elias Sandoval, a 19-year-old UF applied physiology and kinesiology sophomore, carries the expansive  heritage of his Honduran roots. </p><p>Growing up in a Miami community where being a first-generation college student was the norm, Sandoval said his journey to UF came with some culture shock.</p><p>“In Miami, everyone is first-gen,” Sandoval said. “[I] never paid any attention to it because everyone else was too.”</p><p>While attending Miami Senior High School, he never encountered a peer with college-educated parents. The challenges of navigating college applications and financial aid without parental guidance were common among his friends, which provided a sense of solidarity.</p><p>However, arriving at UF was a different story, he said. Discovering many of his peers had parents who had attended college and could offer guidance was eye-opening. </p><p>“[It was] so interesting to find out that people’s grandparents went to UF and they were carrying on their legacy,” Sandoval said. “When I told my mom that I got into UF, she only knew it as the ‘school with the alligator’ and had no idea on how to help me migrate to college.” </p><p>Sandoval also credits the FGLP for making his transition smoother. </p><p>“Once I found FGLP here at UF, it felt like home because none of us knew what was going on, just like how it felt in Miami,” he said. “School, academics, a career and a community can be found almost anywhere, but you have to be willing to go out and look for it.”</p><p>Brianna Alvarez, a 19-year-old UF health science sophomore, is trailing her own path on the pre-physician’s assistant track. </p><p>Born and raised in Miami with a Cuban heritage, Alvarez's journey as a first-generation college student has been one of personal growth.</p><p>“Coming into college as a first-generation student was definitely a difficult transition, but also a very transformative experience,” Alvarez said. “Naturally the entire thought of coming to UF was both terrifying and nerve-racking.”</p><p>Unlike her sister who attended a local university, Brianna moved away from home to attend UF. </p><p>“The summer before beginning my freshman year at UF, I was overwhelmed with anxiety because I felt so behind,” Alvarez said. “I lacked knowledge about how to navigate college.” </p><p>That feeling, she said, is common among first-generation students. </p><p>Brianna’s biggest piece of advice for new students is to step out of their comfort zones. </p><p>“Eventually, you will grow more comfortable and be able to navigate college in a whole new light,” Alvarez said. “Don’t let fear deprive you of discovering amazing opportunities and your own community.”</p><p>In high school, Alvarez wasn’t very involved in extracurriculars, participating mainly in honor societies. Determined to change that at UF, she joined FGLP.</p><p>“I have FGLP to thank for an amazing first year of college. [FGLP] is where I forged incredible connections and friendships,” she said. </p><p>Now, as the special events director for FGLP, she is eager to pass on her passion to new cohort members.</p><p>Her journey at UF so far is a story filled with growth, friendship and overcoming generational roadblocks to education.</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>La mayoría de los estudiantes que llegan por primera vez a la universidad se preocupan por estar solos, hacer nuevos amigos o encontrar sus clases en el campus. Los estudiantes de primera generación tienen el estrés adicional de navegar por la universidad sin familiares con experiencia previa a los que recurrir para pedir consejo.</p><p>En la UF, esto representa alrededor del 18% de la población universitaria, según un comunicado de prensa de la UF de 2021.</p><p>En los pasillos iluminados por el sol de la UF, Catherine Valdes camina con una confianza ganada.</p><p>A los 19 años, lleva el peso de una rica herencia cultural y el honor de ser una pionera en su familia. Como estudiante universitaria de primera generación, Valdes está abriendo nuevos caminos como estudiante de administración de empresas en la pista pre-veterinaria.</p><p>Procedente de la vibrante ciudad de Miami, el trasfondo de Valdes es un tapiz colorido tejido con sus raíces colombianas y cubanas.</p><p>El camino hacia Gainesville como estudiante de primera generación no está exento de desafíos, dijo.</p><p>\"Estaba absolutamente asustada por lo que implicaba ser una estudiante de primer año en la universidad\", dijo Valdes. \"Mis padres no asistieron a la universidad, lo que hizo más difícil para mí encontrar recursos que me ayudaran a navegar por todo\".</p><p>Pero, la Beca de Oportunidad Machen de Florida (MFOS, por sus siglas en inglés) se convirtió en su faro, proporcionándole un paquete completo de subvenciones y becas para prosperar.</p><p>\"[MFOS] solidificó mi decisión de venir a UF, pero también me dio múltiples recursos que todavía uso hasta el día de hoy\", dijo Valdes.</p><p>Para ser elegible para MFOS, los destinatarios deben ser admitidos en UF como estudiantes de primer año y son seleccionados en función de la información en su solicitud de admisión a UF y la Solicitud Gratuita de Ayuda Federal para Estudiantes.</p><p>Estos recursos la llevaron al Programa de Liderazgo de Primera Generación (FLP), una comunidad donde encontró amigos y mentores que la guiaron hacia el Gobierno Estudiantil.</p><p>Ahora, el currículum de Catherine se lee como el de una líder experimentada: tesorera de GLP, senadora de UF fuera del campus, mentora de pares de MFOS, vicepresidenta de Embajadores para Estudiantes que Actúan Contra el Racismo y subdirectora del Gabinete de Primera Generación.</p><p>\"A través de estos puestos, ahora podré continuar el ciclo de devolver a la comunidad de primera generación en el campus\", dijo.</p><p>Muchos estudiantes de primera generación enfrentan una presión única para tener éxito, dijo.</p><p>\"A menudo llevamos una necesidad profundamente arraigada de probarnos a nosotros mismos ante los demás\", dijo Valdes. \"Lo más importante es recordar centrarse en tus propios sueños y aspiraciones. Abraza lo que realmente te importa y deja que tu pasión te guíe\".</p><p>Elias Sandoval, un estudiante de 19 años de fisiología aplicada y kinesiología en UF, lleva la rica herencia cultural de sus raíces hondureñas.</p><p>Creciendo en una comunidad de Miami donde ser un estudiante universitario de primera generación era la norma, Sandoval dijo que su viaje a UF vino con cierto choque cultural.</p><p>\"En Miami, todos son de primera generación\", dijo Sandoval. \"Nunca le presté atención porque todos los demás también lo eran\".</p><p>Asistiendo a la Escuela Secundaria Senior de Miami, nunca encontró un compañero con padres educados en la universidad. Los desafíos de navegar por las solicitudes universitarias y la ayuda financiera sin la orientación de los padres eran comunes entre sus amigos, lo que proporcionó un sentido de solidaridad.</p><p>Sin embargo, llegar a UF fue una historia diferente, dijo. Descubrir que muchos de sus compañeros tenían padres que habían asistido a la universidad y podían ofrecer orientación fue revelador.</p><p>\"Fue muy interesante descubrir que los abuelos de las personas asistieron a UF y ellos estaban continuando su legado\", dijo Sandoval. \"Cuando le dije a mi madre que ingresé a UF, ella solo lo conocía como 'la escuela con el caimán' y no tenía idea de cómo ayudarme a migrar a la universidad\".</p><p>Sandoval también atribuye a GLP el haber hecho su transición más fluida.</p><p>\"Una vez que encontré GLP aquí en UF, se sintió como en casa porque ninguno de nosotros sabía lo que estaba pasando, al igual que se sentía en Miami\", dijo. \"La escuela, los académicos, una carrera y una comunidad se pueden encontrar casi en cualquier lugar, pero tienes que estar dispuesto a salir y buscarlo\".</p><p>Brianna Alvarez, una estudiante de 19 años de ciencias de la salud en la UF, está trazando su propio camino en la pista pre-asistente de médico.</p><p>Nacida y criada en Miami con una herencia cubana, el viaje de Alvarez como estudiante universitaria de primera generación ha sido uno de crecimiento personal.</p><p>\"Entrar a la universidad como estudiante de primera generación fue definitivamente una transición difícil, pero también una experiencia muy transformadora\", dijo Alvarez. \"Naturalmente, todo el pensamiento de venir a UF era tanto aterrador como nervioso\".</p><p>A diferencia de su hermana que asistió a una universidad local, Brianna se mudó de casa para asistir a UF.</p><p>\"El verano antes de comenzar mi primer año en UF, estaba abrumada con ansiedad porque me sentía tan atrasada\", dijo Alvarez. \"Carecía de conocimiento sobre cómo navegar por la universidad\". Ese sentimiento, dijo, es común entre los estudiantes de primera generación.</p><p>El mayor consejo de Brianna para los nuevos estudiantes es salir de su zona de confort.</p><p>\"Eventualmente, te sentirás más cómodo y podrás navegar por la universidad bajo una nueva luz\", dijo Alvarez. \"No dejes que el miedo te prive de descubrir oportunidades asombrosas y tu propia comunidad\".</p><p>En la escuela secundaria, Alvarez no estaba muy involucrada en actividades extracurriculares, participando principalmente en sociedades de honor. Decidida a cambiar eso en UF, se unió a FGLP.</p><p>\"Tengo a FGLP que agradecer por un increíble primer año de universidad. [GLP] es donde forjé conexiones y amistades increíbles\", dijo.</p><p>Ahora, como directora de eventos especiales para FGLP, está ansiosa por transmitir su pasión a los nuevos miembros de la cohorte.</p><p>Su viaje en UF hasta ahora es una historia llena de crecimiento, amistad y superación de barreras generacionales hacia la educación.</p>"
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

document.getElementById('hlsa').addEventListener('click', function() {
    const myArticle = {
        slug: "hlsa",
    headline_en: "Making space for heritage with UF’s Hispanic Latinx Student Assembly",
    headline_es: "Haciendo espacio para el patrimonio con la Asamblea de Estudiantes Hispanos Latinx de la UF",
    subtitle_en: "HLSA members share how the organization has impacted them",
    subtitle_es: "Los miembros de la HLSA cuentan cómo les ha marcado la organización",
    card_path: "hsa.jpg", 
    card_caption_en: "The J. Wayne Reitz Union stands on UF campus on Sunday, July 28, 2024. - Morgan Vanderlaan // Alligator Staff",
    card_caption_es: "La unión estudiantil J. Wayne Reitz Union en el campus de la UF el domingo 28 de julio de 2024. - Morgan Vanderlaan // Equipo del Alligator",
    author_one: "Kamala Rossi",
    author_two: "",
    translator: "Joaquin Cabrera Petrone",
    contact_one_en: "Contact Kamala Rossi at krossi@alligator.org. Follow her on X @kamalarossi.",
    contact_two_en: "",
    contact_one_es: "Contacta a Kamala Rossi por krossi@alligator.org. Síguela en X @kamalarossi.",
    contact_two_es: "Traducido por Joaquin Cabrera Petrone. Contáctalo por cabrerapetrone.j@ufl.edu. ",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "As a Colombian-Lebanese American, Annabella Calderon’s heritage was a big part of her identity and finding a community reflecting that was hard to find at first. But when she attended the Hispanic-Latinx Student Assembly (HLSA) event during the fall of her freshman year, she found a community that became her family. ",
    desc_es: "Como colombiana-libanesa-estadounidense, la herencia de Annabella Calderón era una parte importante de su identidad y encontrar una comunidad que la reflejara fue difícil al principio. Pero cuando asistió al evento de la Asamblea de Estudiantes Hispanos-Latinox (HLSA) durante el otoño de su segundo año, encontró una comunidad que se convirtió en su familia.",
    body_en: "<p>Like most freshmen, when Annabella Calderon came to UF she was unsure how to get involved.</p><p>As a Colombian-Lebanese American, Calderon’s heritage was a big part of her identity and finding a community reflecting that was hard to find at first. But when she attended the Hispanic-Latinx Student Assembly (HLSA) event during the fall of her freshman year, she found a community that became her family. </p><p>Calderon said she struggled with her Hispanic identity, such as feeling shame in feeling Latino in one area and feeling too American in another. But now, she has never been more proud of her Colombian, Lebanese and American roots thanks to the community she found.</p><p>“Just being able to know that I have family back in Colombia and family that I can rely on even at UF — friends that have become family — is really important to me, and it just shows the richness of the Latino culture,” she said.</p><p>Calderon, now a 20-year-old UF political science junior and member of the HSLA’s event committee, is part of an effort to expand HLSA’s event this year to host about 300 more students.</p><p>“I wanted to make sure that I gave back because I found my community of people that I love so dearly and that have done so much for me,” Calderon said. “Now I want to be able to do that for other people so that they don't necessarily have to go looking for it.”</p><p>On Aug. 28, HLSA will continue to create a space for UF’s Hispanic community at the Reitz Union, decorated with dazzling stars and shades of purple.  </p><p>HLSA welcomes students with the event to kick off the school year at the beginning of every Fall semester. “Ilumina tu Camino,” or illuminate your path, was announced as the theme for this year’s HLSA event with a July 8 Instagram post.</p><p>Isabella Rodriguez, a 20-year-old UF political science, criminology and international studies junior and executive director for Ilumina tu Camino, has attended every HLSA event since her freshman year. Now in her pivotal role at the organization, she said she’s excited to continue its legacy.</p><p>The event will be held at the Rion Ballroom and the Grand Ballroom at the Reitz Union, due to the record-breaking turnout of 700 people at last year’s event, Rodriguez said.</p><p>Rodriguez said she’s kept returning because she was inspired to be a part of the initiative. </p><p>“Having a space where students of all kinds can experience what type of cultures are here at the University of Florida is just so, so important for people not only to feel at home at the university, but also to feel comfortable,” Rodriguez said. “That comfortable and familiarity is really what keeps people coming back to the university and that's what makes me proud to be a Gator.”</p><p>UF’s Hispanic Student Association is the organization that HLSA is under and helps organize the event. A big part of the event is also setting up students with professional development, Rodriguez said.</p><p>HSA has 20 organizations under them, many of which table at the HLSA each year.</p><p>Hector Collazo is a 20-year-old UF microbiology and cell science senior and HLSA’s head marketing chair. Compared to Rodriguez and Calderon, HLSA helped him learn more about his culture, as a Puerto Rican.</p><p>Growing up in a predominantly white neighborhood, Collazo said he had a different relationship with his culture before coming to UF.</p><p>“I do think that after being enriched in the Hispanic community here at UF, I think my biggest takeaway of my Hispanic culture is by the strength of family that we all have, that I have,” Collazo said.</p><p>Collazo hopes HLSA and other Hispanic student organizations can provide that same welcoming environment for others.</p><p>“I think there’s a lot of other people who have been in a situation like me where they’re not really embraced by the entire community around them,” Collazo said. “That’s another big reason why I'm so involved with HSA, HLSA and MLP.”</p><p>HSA’s Member Leadership Program is a two-semester program for freshmen, sophomores and first-year transfer students. The program aims to provide 40 students with networking and mentorship opportunities with alumni and student leaders and fellow students. </p><p>Calderon said HLSA is also a great way for students to forge new friendships.</p><p>“Part of the beauty of HLSA is it's not just an event with free food and free merch,” she said. “[For] freshmen especially, or someone who isn't fully involved in student [organizations], it was a great way for me to meet other organizations.”</p><p>Through other campus resources, like UF’s Spanish Heritage Learning Program, she’s had classes with other Latinos, letting her connect with people on a cultural level, Calderon said.</p><p>As HLSA continues to inspire friendships and build the Hispanic community, students will always have a sense of belonging.</p><p>“Yeah, we're taking up more space and that's great,” Calderon said. “That's exactly what we need at UF is for our community to be able to feel confident and comfortable in taking up that space because we deserve it as much as all the other communities,” Calderon said.</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>Como la mayoría de los estudiantes de primer año, cuando Annabella Calderon llegó a la UF no estaba segura de cómo involucrarse.</p><p>Como colombiana-libanesa-estadounidense, la herencia de Calderón era una parte importante de su identidad y encontrar una comunidad que la reflejara fue difícil al principio. Pero cuando asistió al evento de la Asamblea de Estudiantes Hispanos-Latinox (HLSA) durante el otoño de su segundo año, encontró una comunidad que se convirtió en su familia.</p><p>Calderón dijo que pasó dificultades con su identidad hispana, como sentir vergüenza por sentirse latina en un área y sentirse demasiado estadounidense en otra. Pero ahora, nunca ha estado más orgullosa de sus raíces colombianas, libanesas y estadounidenses gracias a la comunidad que encontró.</p><p>\"El mero hecho de saber que tengo familia en Colombia y familia en la que puedo confiar incluso en UF — amigos que se han convertido en familia — es realmente importante para mí, y demuestra la riqueza de la cultura latina\", dijo.</p><p>Calderón, ahora estudiante de 20 años de ciencias políticas de la UF y miembro del comité de eventos de la HSLA, forma parte de un esfuerzo por ampliar el evento de la HLSA este año para acoger a unos 300 estudiantes más.</p><p>\"Quería asegurarme de devolver algo porque encontré mi comunidad de gente a la que quiero mucho y que ha hecho tanto por mí\", dijo Calderón. \"Ahora quiero poder hacer eso por otras personas para que no tengan que ir necesariamente a buscarlo\".</p><p>El 28 de agosto, HLSA seguirá creando un espacio para la comunidad hispana de la UF en el Reitz Union, decorado con deslumbrantes estrellas y tonos morados. </p><p>HLSA da la bienvenida a los estudiantes con el evento de inicio del año escolar al comienzo de cada semestre de otoño. \"Ilumina tu Camino\" fue anunciado como el tema del evento HLSA de este año en un post de Instagram el 8 de julio.</p><p>Isabella Rodríguez, una estudiante de tercer año de 20 años de ciencias políticas, criminología y estudios internacionales de la UF y directora ejecutiva de Ilumina tu Camino, ha asistido a todos los eventos de la HLSA desde su primer año. Ahora que desempeña un papel fundamental en la organización, dice que le entusiasma continuar con su legado.</p><p>El acto se celebrará en el Rion Ballroom y en el Grand Ballroom del Reitz Union, debido a la participación récord de 750 personas en la edición del año pasado, según Rodríguez.</p><p>Rodríguez dijo que ha seguido volviendo porque le inspiró formar parte de la iniciativa.</p><p>\"Tener un espacio donde los estudiantes de todo tipo puedan experimentar qué tipo de culturas hay aquí en la Universidad de Florida es tan, tan importante para que la gente no sólo se sienta como en casa en la universidad, sino que también se sienta cómoda\", dijo Rodríguez. \"Esa comodidad y familiaridad es realmente lo que hace que la gente vuelva a la universidad y eso es lo que me hace sentir orgullosa de ser un Gator\".</p><p>La Asociación de Estudiantes Hispanos de la UF es la organización a la que pertenece HLSA y ayuda a organizar el evento. Una gran parte del evento consiste también en ofrecer a los estudiantes oportunidades de desarrollo profesional, dijo Rodríguez.</p><p>La HSA agrupa a 20 organizaciones, muchas de las cuales participan cada año en la HLSA.</p><p>Héctor Collazo, de 20 años, es estudiante de último año de microbiología y ciencias celulares de la UF y jefe de marketing de HLSA. Comparado con Rodríguez y Calderón, HLSA le ayudó a aprender más sobre su cultura, como puertorriqueño.</p><p>Al crecer en un barrio predominantemente blanco, Collazo dijo que tenía una relación diferente con su cultura antes de venir a la UF.</p><p>\"Creo que después de haberme enriquecido en la comunidad hispana aquí en la UF, creo que lo que más me llevo de mi cultura hispana es la fuerza de la familia que todos tenemos, que yo tengo\", dijo Collazo.</p><p>Collazo espera que la HLSA y otras organizaciones de estudiantes hispanos puedan ofrecer ese mismo entorno acogedor a los demás.</p><p>\"Creo que hay muchas otras personas que han estado en una situación como la mía, en la que no son realmente acogidos por toda la comunidad que les rodea\", dijo Collazo. \"Esa es otra gran razón por la que estoy tan involucrado con HSA, HLSA y MLP\".</p><p>El Programa de Liderazgo de Miembros de la HSA es un programa de dos semestres para estudiantes de primer año, segundo año y estudiantes transferidos de primer año. El objetivo del programa es ofrecer a 40 estudiantes oportunidades de establecer contactos y mentores con antiguos alumnos y líderes estudiantiles y compañeros de estudios.</p><p>Annabella Calderon, miembro del comité de eventos HLSA, dijo que HLSA es también una gran manera para que los estudiantes forjen nuevas amistades.</p><p>\"Parte de la belleza de HLSA es que no es sólo un evento con comida gratis y mercancía gratis\", dijo. \"[Para] los estudiantes de primer año especialmente, o alguien que no está totalmente involucrado en [organizaciones] estudiantiles, fue una gran manera para que conociera a otras organizaciones\".</p><p>A través de otros recursos del campus, como el Programa de Aprendizaje de la Herencia Española de la UF, ha tenido clases con otros latinos, lo que le ha permitido conectar con gente a nivel cultural, dijo Calderón.</p><p>Y como HLSA sigue inspirando amistades y construyendo la comunidad hispana, los estudiantes siempre tendrán un sentido de pertenencia.</p><p>\"Sí, estamos ocupando más espacio y eso es genial\", dijo Calderón. \"Y eso es exactamente lo que necesitamos en la UF, es que nuestra comunidad pueda sentirse segura y cómoda ocupando ese espacio porque lo merecemos tanto como las demás comunidades\", dijo Calderón.</p>"
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

document.getElementById('latam').addEventListener('click', function() {
    const myArticle = {
        slug: "latam",
    headline_en: "UF promotes humanities with residency program for Latin American artists, writers ",
    headline_es: "La UF promueve las humanidades con un programa de residencias para artistas y escritores latinoamericanos",
    subtitle_en: "Program will bring a well-known Mexican artist this Fall ",
    subtitle_es: "El programa traerá a un conocido artista mexicano este otoño",
    card_path: "latam.jpg", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Timothy Wang",
    author_two: "",
    translator: "Joaquin Cabrera Petrone",
    contact_one_en: "Contact Timothy Wang at twang@alligator.org. Follow him on X @timothyw_g.",
    contact_two_en: "",
    contact_one_es: "Contacta a Timothy Wang por twang@alligator.org. Síguelo en X @timothyw_g.",
    contact_two_es: "Traducido por Joaquin Cabrera Petrone. Contáctalo por cabrerapetrone.j@ufl.edu.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "The UF Center for Latin American Studies will welcome Eduardo Abaroa as its first artist in residence for the Fall semester. Abaroa will be teaching a course called “The Art of Sharing,” which will analyze the history of modern and contemporary art’s development in Latin America. ",
    desc_es: "El Centro de Estudios Latinoamericanos de la UF le dará la bienvenida como su primer artista en residencia para el semestre de otoño. Abaroa impartirá un curso titulado \"El arte de compartir\", en el que se analizará la historia del desarrollo del arte moderno y contemporáneo en América Latina.    ",
    body_en: "<p> When Mexican multimedia artist Eduardo Abaroa arrives on campus for the first time Aug. 2, the first thing he’s doing is paperwork. Lots of it. </p><p>A Latin American artist/writer residency program at UF will pay for his housing, his salary for a semester, his living expenses and his plane ticket to fly him from Mexico to the U.S. </p><p>“The whole month is dedicated to me getting a bank account and settling down and setting everything up,” Abaroa said. </p><p>The UF Center for Latin American Studies will welcome him as its first artist in residence for the Fall semester. Abaroa will be teaching a course called “The Art of Sharing,” which will analyze the history of modern and contemporary art’s development in Latin America. </p><p>“I think the course is important because we are not used to people being that different from ourselves,” he said. “I think that it is important to remind ourselves time and time again that the world is a very, very complex place and a very beautiful place, and art is precisely the way to look at it under the new light.” </p><p>Abaroa said his friend Abraham Cruzvillegas, a Mexican conceptual artist, will also visit the class and give a public talk Sept. 24. </p><p>The class’s final project is an exhibition opening Nov. 15 to the public at the University Galleries’ main space, according to Jesús Fuenmayor, an art curator and program director of the University Galleries. </p><p>Fuenmayor said he recommended Abaroa and 19 other artists to the Center for Latin American Studies. Abaroa was selected in August 2023 after the center’s selection committee narrowed it down to three finalists. </p><p>“In Florida, we have a population that has a lot of connections to Latin America… so I think it's natural that we at the University of Florida are engaging Latin American artists in our program,” Fuenmayor said. ”The best part of the beauty of Florida lies there, it has so many people from different places in Latin America. It's a cultural process of understanding how to relate to people that are coming from that continent to the U.S.\"</p><p>The program, which previously brought Latin American writers Gabriela Alemán and Ave Barrera to UF, began with a meeting between a former university president and the director of the Center for Latin American Studies.</p><p>Carlos de la Torre, the center’s director, said he met former UF President John Lombardi at a book launch in October 2021 and talked with him about promoting the humanities. </p><p>While he was UF’s president in 1991, Lombardi showed an interest in Hispanic issues, such as making a speech at the Hispanic Student Association’s Hispanic Heritage Week opening ceremony. He also is an expert on Latin American history, having written several books on Venezuela. </p><p>Lombardi told de la Torre to consider tapping the Kislak Family Foundation, a nonprofit that supports education, arts and humanities, animal welfare and environmental preservation, to fund a residency program. De la Torre obliged.</p><p>The Kislak Family Foundation awarded the center in 2021 a grant paying $320,000 over the course of five years to bring a Latin American artist or writer to teach and live on campus for one semester.</p><p>“The Kislak Foundation has a strong commitment to Latin American studies and found the proposal of significant interest and so awarded the grant,” wrote Lombardi, who is on the foundation’s board of trustees, in an email to The Alligator. </p><p>Ecuadorian writer Gabriela Alemán, who is known for novels like “Humo” and short story collections like “Family Album,” arrived in Fall 2022 as the program’s first writer in residence. </p><p>Alemán said her class, which focused on analyzing Latin American literature, brought together students from a diverse swath of fields.</p><p>“I had someone who was doing a master's in agriculture,” she said. “There were people from education. There were business majors. There was an architect.” </p><p>Alemán said she thinks students enjoyed class because it was in Spanish and liked her reading material. One former student told her he had taken other writing courses and started publishing his own stories. </p><p>“I think this program that Latin American Studies is offering provides what the humanities in general do, which is to open your point of view to understand other worlds, to see the world through other eyes,” Alemán said.</p><p>Ave Barrera, a Mexican writer known for writing novels such as “The Forgery” and “Restoration,”   arrived the following Fall semester as the program’s second writer in residence. During her residency, Barrera led her own book club and taught a graduate course.  </p><p>Carlos de la Torre, the Center for Latin American Studies director, said the students’ positive reception of Barrera and Alemán’s classes gave the center “a great excuse” to hire a professor who can teach creative writing in Spanish: Luis Felipe Lomelí. </p><p>Lomelí hosts a book club called “Meet the Author Club de Lectura” where students read contemporary Latin American stories and get the opportunity to discuss them with the authors themselves. The club is returning this Fall. </p><p>The grant for the residency program will end in 2026.  </p><p>“I’ll reapply,” De la Torre said. “I hope I am successful.”</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>Cuando el artista multidisciplinar mexicano Eduardo Abaroa llegue al campus por primera vez el 2 de agosto, lo primero que hará será papeleo. Mucho papeleo.</p><p>Un programa de residencia para artistas y escritores latinoamericanos de la UF pagará su alojamiento, su salario durante un semestre, sus gastos de manutención y su billete de avión para trasladarlo de México a EE.UU.</p><p>“Todo el mes está dedicado a abrir una cuenta bancaria, asentarme y prepararlo todo”, afirma Abaroa.</p><p>El Centro de Estudios Latinoamericanos de la UF le dará la bienvenida como su primer artista en residencia para el semestre de otoño. Abaroa impartirá un curso titulado \"El arte de compartir\", en el que se analizará la historia del desarrollo del arte moderno y contemporáneo en América Latina.</p><p>\"Creo que el curso es importante porque no estamos acostumbrados a que la gente sea tan diferente de nosotros mismos\", dijo. \"Creo que es importante recordarnos una y otra vez que el mundo es un lugar muy, muy complejo y muy bello, y el arte es precisamente la forma de mirarlo bajo la nueva luz\".</p><p>Abaroa dijo que su amigo Abraham Cruzvillegas, un artista conceptual mexicano, también visitará la clase y dará una charla pública el 24 de septiembre.</p><p>El proyecto final de la clase es una exposición que se abrirá al público el 15 de noviembre en el espacio principal de las Galerías de la Universidad, según Jesús Fuenmayor, conservador de arte y director de programas de las Galerías de la Universidad.</p><p>Fuenmayor dijo que recomendó a Abaroa y a otros 19 artistas al Centro de Estudios Latinoamericanos. Abaroa fue seleccionado en agosto de 2023 después de que el comité de selección del centro lo redujera a tres finalistas. </p><p>\"En Florida, tenemos una población que tiene muchas conexiones con América Latina... así que creo que es natural que en la Universidad de Florida estemos involucrando a artistas latinoamericanos en nuestro programa\", dijo Fuenmayor. \"La mejor parte de la belleza de Florida está en eso, en que tiene tanta gente de diferentes lugares de América Latina. Es un proceso cultural de entender cómo relacionarse con la gente que viene de ese continente a Estados Unidos”.</p><p>El programa, que anteriormente trajo a la UF a las escritoras latinoamericanos Gabriela Alemán y Ave Barrera, comenzó con una reunión entre un antiguo presidente de la universidad y el director del Centro de Estudios Latinoamericanos.</p><p>Carlos de la Torre, director del centro, dijo que conoció al ex presidente de la UF John Lombardi en la presentación de un libro en octubre de 2021 y habló con él sobre la promoción de las humanidades.</p><p>Durante su mandato como presidente de la UF en 1991, Lombardi mostró interés por los temas hispanos, como cuando pronunció un discurso en la ceremonia de apertura de la Semana de la Herencia Hispana de la Asociación de Estudiantes Hispanos. También es un experto en historia latinoamericana, habiendo escrito varios libros sobre Venezuela.</p><p>Lombardi dijo a de la Torre que considerara la posibilidad de recurrir a la Fundación de la Familia Kislak, una organización sin fines de lucro que apoya la educación, las artes y las humanidades, el bienestar animal y la conservación del medio ambiente, para financiar un programa de residencias. De la Torre accedió.</p><p>La Fundación de la Familia Kislak concedió al centro en 2021 una subvención de $320,000 a lo largo de cinco años para traer a un artista o escritor latinoamericano a enseñar y vivir en el campus durante un semestre.</p><p>\"La Fundación Kislak tiene un fuerte compromiso con los estudios latinoamericanos y consideró que la propuesta era de gran interés, por lo que concedió la subvención\", escribió Lombardi, que forma parte de la junta directiva de la fundación, en un correo electrónico a The Alligator.</p><p>La escritora ecuatoriana Gabriela Alemán, conocida por novelas como \"Humo\" y colecciones de relatos como \"Álbum de familia\", llegó en otoño de 2022 como primera escritora en residencia del programa.</p><p>Alemán dijo que su clase, centrada en el análisis de la literatura latinoamericana, reunía a estudiantes de campos muy diversos. </p><p>\"Había alguien que estaba haciendo un máster en agricultura\", dijo. \"Había gente de educación. Había estudiantes en negocios. Había un arquitecto\".</p><p>Alemán cree que los alumnos disfrutaban de las clases porque eran en español y les gustaba su material de lectura. Un antiguo alumno le dijo que había tomado otros cursos de escritura y había empezado a publicar sus propias historias.</p><p>\"Creo que este programa que ofrece Estudios Latinoamericanos aporta lo que hacen las humanidades en general, que es abrir tu punto de vista para entender otros mundos, para ver el mundo a través de otros ojos\", dijo Alemán.</p><p>Ave Barrera, escritora mexicana conocida por novelas como \"Puertas demasiado pequeñas\" y \"Restauración\", llegó el siguiente semestre de otoño como segunda escritora en residencia del programa. Durante su residencia, Barrera dirigió su propio club de lectura e impartió un curso de posgrado.  </p><p>Carlos de la Torre, director del Centro de Estudios Latinoamericanos, dijo que la buena acogida de las clases de Barrera y Alemán por parte de los estudiantes dio al centro \"una genial excusa\" para contratar a un profesor que pueda enseñar escritura creativa en español: Luis Felipe Lomelí.</p><p>Lomelí organiza un club de lectura llamado \"Meet the Author Club de Lectura\" en el que los estudiantes leen historias latinoamericanas contemporáneas y tienen la oportunidad de comentarlas con los propios autores. El club vuelve este otoño.</p><p>La subvención para el programa de residencia finalizará en 2026. </p><p>\"Volveré a solicitarla\", dijo De la Torre. \"Espero tener éxito\". </p>"
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
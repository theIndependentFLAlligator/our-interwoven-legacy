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


document.getElementById('home-ink').addEventListener('click', function() {
    const myArticle = {
        slug: "home-ink",
    headline_en: "A home made of ink and blood",
    headline_es: "Un hogar de tinta y sangre",
    subtitle_en: "",
    subtitle_es: "",
    card_path: "opinions.jpeg", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Valentina Sandoval",
    author_two: "",
    translator: "",
    contact_one_en: "",
    contact_two_en: "",
    contact_one_es: "",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "I’ve lost count of the times I have written about my home.",
    desc_es: "He perdido la cuenta de las veces que he escrito sobre mi hogar.",
    body_en: "<p>I’ve lost count of the times I have written about my home.</p><p> The words dance in nostalgia through a blank piece of paper as I desperately search my mind for the traces of my old life. I remember the smell of fresh coffee, my mom braiding my hair on a school morning and the perpetual sound of the news and the national anthem on TV at 6 a.m.</p><p>I was raised among social unrest, in a country with a turbulent history and a dictatorship that outdates me. Some of my earliest memories are of my grandmother yelling at the president on the TV for raising prices and filling the streets with crime. </p><p>But my relationship with journalism started as early as the day of my birth — I was born in Venezuela on June 27, the National Day of the Journalist. My parents, both engineers, wanted me to love the sciences and math like they did, but from an early age I was writing my secrets and stories on every piece of paper I could find around the house.</p><p>Although I was painfully aware of the situation in my country at a ripe 9 years of age, I hated the news. My grandmother would turn on the TV in my living room every morning while I was getting ready for school. Every local channel played the national anthem before their morning show and around noon, and more often than not, it was followed by a long-winded, neverending address from President Hugo Chavez.</p><p>All I really knew about politics back then was that we hated Chavez and that he was ruining our country. I didn’t actually start caring until one day in 2013. </p><p>I was at my weekly ballet classes in downtown Acarigua when my dance instructor got a call that sent the entire class into a frenzy: Hugo Chavez was dead. Almost like someone had flipped a switch, you could hear the noises outside the tiny classroom get louder and see the panic set in a dozen little girls who knew the social unrest this news would cause. My mom came running to pick me up from class, she told me to keep quiet and not ask anyone about politics and said we would stay home from school for a couple of days.</p><p>President from 1999 to 2013, Chavez led a dictatorship in Venezuela that changed the national constitution in his favor — giving almost unlimited power to the executive branch and allowing perpetual reelection — and caused years of high inflation, rising crime and complete censorship of the press and any opposition to his administration. </p><p>But this story is not about Hugo Chavez or his dictatorship’s successor Nicolas Maduro. This is about the anger that has settled in my blood from seeing a country go dark.</p><p>From my earliest memories of the news channels reporting on crucial political changes and being interrupted by a random presidential address, I saw the news cycle in Venezuela be slowed down, silenced and controlled. </p><p>Venezuela ranks 159th out of 180 countries in the Reporters Without Borders (RSF) Press Freedom Index. Since Maduro’s rise to power, RSF counted the disappearance of around 100 print newspapers and the closure of 200 radio stations. </p><p>Laws in place since 2010 do not permit the “questioning” of government officials, so multiple journalists have been sanctioned for speaking against the government and many news outlets have chosen to remain silent in fear of retaliation. Even newspapers that have turned to digital-only for their coverage are censored, since the state-controlled internet service provider CANTV blocks multiple websites including 35 independent news sites, according to Reuters Institute. </p><p>I didn’t like my country while I lived in it because it felt like a cage of corruption and silenced voices, but that dislike toward my heritage turned into a passion to be the difference I never got to see. I started looking at journalists I used to watch on TV when I was younger like Carla Angola, Gladys Rodriguez and Jose Vicente Antonetti, and I saw them leave the country in search of a place where they could broadcast the voices that were not being heard. </p><p>I started appreciating the place I am from not because of its crises or tragedies, but because of the undying resilience of its people. </p><p>My mom told me not long ago that my grandmother’s dream was to be a journalist, but she never had the courage to pursue such a dangerous and uncertain career. I may not remember the color of the walls in my childhood home and I may not go back to see it in many years, but I still carry that same anger and perseverance passed down through my lineage that makes me want to be a voice for the silenced.</p><p>It still hurts to write about my home. It hurts to think of saying goodbye to my mom at an airport at 13 years old, or the multiple Christmases spent over FaceTime with family spread all over the continent, or the fact that I still have not been able to visit my grandfather’s grave since he died in 2018. It hurts to think of thousands of people who are separated from their loved ones, not only by thousands of miles but by the deafening silence of government censorship.</p><p>It hurts but I’m willing to turn the blood into ink as many times as needed if it means not staying silent. So I thank my heritage for my career and for the courage to use my voice for those who cannot.</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>He perdido la cuenta de las veces que he escrito sobre mi hogar.</p><p>Las palabras bailan en nostalgia a través de un papel en blanco mientras busco desesperadamente las piezas de mi vida pasada en lo recóndito de mi mente. Recuerdo el olor del café, a mi mamá trenzando mi pelo en una mañana antes del colegio y el sonido perpetuo de las noticias y el himno nacional en la televisión a las 6 a.m.</p><p>Fui críada en medio de disturbios sociales, en un país con una historia turbulenta y una dictadura más vieja que yo. Entre mis primeros recuerdos está mi abuela gritandole al presidente en la televisión por subir los precios y llenar las calles de inseguridad.</p><p>Pero mi relación con el periodismo empezó tan pronto como salí del vientre — yo nací un 27 de junio en Venezuela, el Día Nacional del Periodista. Mis padres, ambos ingenieros, querían que amara las ciencias y la matemática tanto como ellos, pero desde una edad temprana me encontraba escribiendo historias y secretos en cada trozo de papel que encontraba en mi casa.</p><p>A pesar de estar consciente de la situación del país a tan solo los 9 años, siempre odié las noticias. Mi abuela prendía la televisión de la sala todas las mañanas mientras me arreglaba para ir al colegio. Cada canal de cable local tocaba el himno nacional antes su transmisión de la mañana y del mediodía, y después del posterior casi siempre empezaba una cadena nacional interminable del presidente Hugo Chavez.</p><p>Lo único que sabía de política a esa edad era que odiabamos a Chavez y que estaba destruyendo nuestro país. No fue sino hasta 2013 que me empezó a importar.</p><p>Mientras estaba en mi clase semanal de ballet en el centro de Acarigua, la profesora recibió la llamada que desató el caos: Hugo Chavez había fallecido. En cuestión de segundos el mundo alrededor cambió, el ruido de la calle afuera del pequeño salon de baile subió de volumen y el pánico alcanzó al grupo de niñas en tutús que sabían los disturbios que la noticia causaría. Mi mamá vino a buscarme tan rápido como pudo, me dijo que me quedara quieta y no le hablara a nadie sobre política y que nos quedaríamos unos días en la casa antes de volver al colegio.</p><p>Chavez, el presidente desde 1999 a 2013, lideró una dictadura en Venezuela que cambió la constitución nacional a su favor — dandole control casi ilimitado al poder ejecutivo y permitiendo su reelección perpetua — y causó años de hiperinflación, aumento en el crimen y la censura completa de la prensa y cualquier oposición a su gobierno.</p><p>Pero esta historia no es sobre Hugo Chavez o el sucesor de su dictadura, Nicolas Maduro. Esta historia es sobre la impotencia que se ha acumulado en mi sangre de ver un país ser olvidado.</p><p>Desde mis memorias más tempranas de ver canales de noticias reportando sobre temas importantes, solo para ser interrumpidos por una cadena nacional del presidente, vi el ciclo de noticias en Venezuela ser desacelerado, silenciado y controlado. </p><p>Venezuela ocupa el lugar 159 de 180 países en el Indice de Libertad de la Prensa de Reporteros Sin Fronteras. Desde el comienzo del gobierno de Maduro, RSF ha contado la desaparición de al menos 100 períodicos físicos y el cierre de 200 estaciones de radio. </p><p>Las leyes vigentes desde el 2010 no permiten “cuestionar” a oficiales del gobierno, lo cual ha llevado a múltiples periodistas sancionados por hablar en contra del gobierno y a muchos medios de comunicación a limitar su cobertura por miedo a problemas legales. Incluso los periódicos que han cambiado su formato a solo digital han sido censurados, pues el proveedor de internet CANTV es controlado por el estado y bloquea una gran cantidad de sitios web, entre ellos 35 sitios de noticias independientes, según Reuters Institute.</p><p>No me gustaba mi país por mucho tiempo porque se sentía como una jaula de corrupción y voces reprimidas, pero ese desagrado hacia mi herencia se ha convertido en una pasión por ser la diferencia que nunca llegué a ver. Empecé a recordar los periodistas que veía en televisión cuando era pequeña, como Carla Angola, Gladys Rodriguez y Jose Vicente Antonetti, y vi como se fueron del país en busca de un lugar donde pudieran compartir esas historias que no estaban siendo escuchadas.</p><p>Así fue que empecé a apreciar a mi lugar de origen no por sus crisis o tragedias, sino por la resiliencia imparable de su gente.</p><p>Mi mamá me dijo hace un tiempo que el sueño de mi abuela por un tiempo era ser periodista, pero que nunca tuvo el coraje de perseguir una carrera tan peligrosa e incierta. Puede que no recuerde el color de las paredes de mi vieja casa y puede que no vuelva a verla en muchos años, pero todavía llevo en mi linaje esa ira y perseverancia que me hace querer ser una voz para los silenciados.</p><p>Todavía me duele escribir sobre mi hogar. Me duele pensar en decirle adios a mi mamá en el aeropuerto a las 13 años, o en las múltiples navidades celebradas por videollamada con mi familia que vive en todo el continente, o en el hecho de que no he podido visitar la tumba de abuelo desde que falleció en 2018. Me duele pensar en las miles de personas separadas de sus seres queridos, no solo por miles de kilómetros sino también por el silencio ensordecedor de la censura del gobierno.</p><p>Me duele, pero estoy dispuesta a convertir la sangre en tinta tantas veces sea necesario si eso significa no callarme. Así que le doy las gracias a mi herencia por mi carrera y por el coraje de usar mi voz por todos los que no pueden.</p>"
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

document.getElementById('diego').addEventListener('click', function() {
    const myArticle = {
        slug: "diego",
    headline_en: "Defining what being Latino means to me",
    headline_es: "Definir lo que significa para mí ser latino",
    subtitle_en: "",
    subtitle_es: "",
    card_path: "opinions.jpeg", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Diego Perdomo",
    author_two: "",
    translator: "Cabrera Petrone",
    contact_one_en: "Diego Perdomo is a senior journalism major and the Summer 2024 Digital Managing Editor.",
    contact_two_en: "",
    contact_one_es: "Diego Perdomo es un estudiante de último año de periodismo y el gerente editorial digital del verano de 2024.",
    contact_two_es: "Traducido por Joaquin Cabrera Petrone.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "When I was younger, I used to Google pictures of Dominican and Ecuadorian people to see if anyone looked like me.",
    desc_es: "Cuando era más joven, solía buscar fotos en Google de dominicanos y ecuatorianos para ver si alguien se parecía a mí.",
    body_en: "<p>When I was younger, I used to Google pictures of Dominican and Ecuadorian people to see if anyone looked like me. </p><p>Being the only child between my parents — not counting my half siblings — I envied my family members who fit the Hispanic identity and image I saw within the media I consumed.</p><p>While I was lucky enough to have “Go Diego, Go!”, most Hispanic representation in fictional stories typically stuck to single-ethnicity, ambiguously Central American characters. Even as representation has improved, I still struggle to see depictions of myself in popular media.</p><p>Experiences like not knowing what race to pick on forms and having a big family were enough to keep me tied to the monolith I thought being Hispanic was, but a disconnect remained.</p><p>I felt it when I saw myself in family photos. I felt it smiling and nodding when I couldn’t speak Spanish to my relatives. And I felt it when I called myself Latino.</p><p>Despite living in places with large Hispanic communities like San Diego, Queens and Miami, I had always felt a longing to see myself in others. Not learning Spanish and being too shy to try, the disconnect I had with my culture felt almost fundamental to my being. </p><p>For the longest, seeing someone that looked like me felt like the solution to all my problems. I can’t rationalize it, but there was something validating about hypothetically interacting with people like me. I figured journalism would let me search for the representation I longed for.</p><p>I unexpectedly found validation in a town with a fraction of the Hispanic population I was used to at 12%. In Gainesville, as I met people within a more traditionally southern environment, I saw pieces of myself in others, and while they didn’t look like me, I started to feel seen.</p><p>From Sabbath services to LGBTQ+ support groups, I realized how similar my experience was to those whom I am different from superficially. It was through these diverse experiences that I was able to find representation.</p><p>While I am still not fluent in Spanish and will have to make a deliberate effort to maintain ties to my culture, I am happy to find my culture in others.</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>Cuando era más joven, solía buscar fotos en Google de dominicanos y ecuatorianos para ver si alguien se parecía a mí.</p><p>Al ser el único hijo de mis padres — sin contar a mis hermanastros — envidiaba a los miembros de mi familia que encajaban con la identidad y la imagen hispana que veía en los medios que consumía.</p><p>Aunque tuve la suerte de contar con “Go Diego, Go!“, la mayor parte de la representación hispana en las historias de ficción se limitaba típicamente a personajes monoétnicos y ambiguamente centroamericanos. Aunque la representación ha mejorado, todavía me cuesta ver representaciones de mi persona en los medios populares.</p><p>Experiencias como no saber qué raza escoger en los formularios y tener una familia numerosa fueron suficientes para mantenerme atado al monolito de lo que yo creía que era ser hispano, pero seguía existiendo una desconexión.</p><p>Lo sentí al verme en las fotos familiares. Lo sentí al sonreír y asentir con la cabeza cuando no podía hablar español con mis parientes. Y lo sentí cuando me llamé a mí mismo latino.</p><p>A pesar de vivir en lugares con grandes comunidades hispanas como San Diego, Queens y Miami, siempre había sentido el anhelo de verme en los demás. Al no aprender español y ser demasiado tímido para intentarlo, la desconexión que tenía con mi cultura me parecía casi fundamental para mi ser.</p><p>Durante mucho tiempo, ver a alguien que se parecía a mí me parecía la solución a todos mis problemas. No puedo racionalizarlo, pero había algo de validación en interactuar hipotéticamente con gente como yo. Pensé que el periodismo me permitiría buscar la representación que anhelaba.</p><p>Inesperadamente encontré validación en una ciudad con una fracción de la población hispana a la que estaba acostumbrado, un 11%. En Gainesville, al conocer gente en un ambiente más tradicionalmente sureño, vi partes de mí en los demás y, aunque no se parecían a mí, empecé a sentirme comprendido.</p><p>Desde los servicios sabáticos hasta los grupos de apoyo LGBTQ+, me di cuenta de lo parecida que era mi experiencia a la de aquellos de los que me diferencio superficialmente. Fue a través de estas diversas experiencias que pude encontrar representación.</p><p>Aunque todavía no hablo español con fluidez y tendré que hacer un esfuerzo deliberado para mantener los lazos con mi cultura, me alegra encontrar mi cultura en los demás.</p>"
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

document.getElementById('latin-roots').addEventListener('click', function() {
    const myArticle = {
        slug: "latin-roots",
    headline_en: "Latin roots and cultural resilience in education",
    headline_es: "Raíces latinas y resiliencia cultural en la educación",
    subtitle_en: "",
    subtitle_es: "",
    card_path: "opinions.jpeg", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Charles Duprey Romero-Langlois",
    author_two: "",
    translator: "Isabela Reinoso",
    contact_one_en: "Charles Duprey Romero-Langlois is a second-year UF Graduate Student.",
    contact_two_en: "",
    contact_one_es: "Charles Duprey Romero-Langlois es un estudiante de segundo año de posgrado en la UF.",
    contact_two_es: "Traducido por Isabela Reinoso. Contáctala por ireinoso@alligator.org.  Síguela en X @isareinosod.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "Embracing my Latin American identity means being proud of the resilient pathways that brought my families together.",
    desc_es: "Aceptar mi identidad latinoamericana significa estar orgulloso de los caminos resilientes que unieron a mis familias.",
    body_en: "<p>The concept of identity involves the characteristics, qualities or features that make a person or thing distinct and recognizable. I firmly believe that college plays a key role in our developmental education and spiritual identification as human beings. A university creates an environment in which students curate their preferences, blossom in their passions and build confidence and empathy as they contextualize their spirits in the universe. </p><p>Embracing my Latin American identity means being proud of the resilient pathways that brought my families together. It means respecting my indigenous roots in South America by the same token as my European roots in Spain. My mom is Colombian. Her mom’s family is from Bucaramanga, which means the “pretty city.” Her dad is from La Union, a small town in the countryside accessible from Cali, Colombia.  </p><p>I chose UF and Georgia State University, in part, because that’s where my mom studied and developed. Growing up in Rome, Georgia, our family of four was heavily invested in Gator football and basketball during their respective seasons. A typical Saturday in autumn as a junior-high schooler would entail raking leaves from the oak trees, playing with our dog Holly and watching Percy Harvin shred on the TV in our Florida room. Gator athletics were quintessential to growing up in the “last house on the right before the cornfield.”</p><p>The University of Florida is where my parents came of age and developed their more mature tastes and preferences. I took my first steps just south of Gainesville in the town of Micanopy, Florida. It was one of the first places I visited in 2023 prior to enrolling at UF in the Fall.</p><p>Social, environmental and cultural awareness has not always been easy to come by. It was not easy for me at least. Even being spotlighted in Rome, Georgia, as a talented vocalist and communicator was not enough to give me the cultural resilience and the environmental proclivity I yearned for. As a young multicultural boy, I often lacked the stabilizing and grounding awareness necessary to navigate early sociocultural truths. By my mid-to-late twenties, I started developing a more nuanced sensitivity to people’s perspectives via studies at Georgia State University. I secured my first college degree in downtown Atlanta in Fall 2022, nearly 11 years after graduating from high school in Spring 2011.</p><p> When my mom was here at UF in the early ‘80s working on cultural committees, practicing political activism and studying biopsychology, she was developing a type of cultural resilience that has stayed with her to this very day. By nature of her positive attitude when confronting challenges, she shows me that staying the path through higher education allows me to break on through.</p><p>I knew I would be attending UF in Spring 2023. </p><p>Through exposure to diverse groups at Georgia State, I knew that UF, as a flagship university,  would have compassionately led cultures and communities. </p><p>My first year at UF has been nothing short of magical. Catholic Gators and Por Colombia have proved open to a non-traditional, professional student seeking events and traditions at UF. Catholic Gator masses have been enlightening and inspiring. They’ve helped me to remember some of the teachings of my Catholic parish in Rome, Georgia. Por Colombia soccer watch parties have instilled a sense of pride in my investment of time playing youth soccer in Georgia. </p><p>Generally speaking, embracing my Latino roots means deriving my purpose from my passions in life. </p><p>It means that I have to work hard to understand how to live through the heart. And it means I also have to practice compassion for people whose passions differ from my own.</p><p>During Jose Valentino’s music class in Fall 2023, we practiced nurturing our professional personas by defining and outlining concepts, from “structured brilliance” to “educational crescendos.”</p><p>When Valentino broke down the term “passion” for our class, he showed us that the derivative term is “sacrifice.” We were then free to infer our own higher level meanings of passion. </p><p>To some of us that meant taking time away from our devices and the internet. To others, it meant learning organizational skills like prioritizing urgency and importance. Some students felt that it meant choosing to focus your specialized talent through servitude.</p><p>When an individual with Latin blood is in touch with their passions & purpose, whether they’re French, Italian, Latin American, Portuguese, Spanish or Romanian, they’re really achieving some type of divinity. They’re connecting to their purpose, their minds and hearts are aligned, and they become men and women of their word. In Spanish we call them “gente de palabra,” or “people of their word,” what someone else might call an honorable individual. </p><p>I am here at UF to honor the sacrifices made by my family to get me here. My father buried himself in microbiology studies while here at UF. He also worked for Shands and the VA Hospital. My mom fought hard to push through sociocultural and language barriers by engaging different groups amidst her psychology studies.  </p><p>By nature of the Colombian roots of my mother and the French roots of my father, my Latin American roots are linked to the orange and blue. I choose to honor their efforts, history and work at UF in the late ‘70s and early ‘80s by following some older Gator tracks while creating some new ones of my own. </p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>El concepto de identidad implica las características, cualidades o rasgos que hacen a una persona o cosa distinta y reconocible. Creo firmemente que la universidad juega un rol importante en nuestro desarrollo educativo e identificación espiritual como seres humanos. Una universidad crea un ambiente en donde los estudiantes seleccionan sus preferencias, florecen en sus pasiones y construyen confianza y empatía a medida que contextualizan sus espíritus en el universo.   </p><p>Aceptar mi identidad latinoamericana significa estar orgulloso de los caminos resilientes que unieron a mis familias. Significa respetar mis raíces indígenas en Sudamérica del mismo modo que mis raíces europeas en España. Mi madre es colombiana. Su familia materna es de Bucaramanga que significa la “ciudad bonita”. Su papá es de La Unión, una pequeña ciudad en el campo a la que se llega desde Cali, Colombia. </p><p> Elegí la UF y la Universidad Estatal de Georgia (GSU), en parte, porque allí es donde mi madre estudió y se desarrolló. Mientras crecía en Roma, Georgia, nuestra familia de cuatro estuvo muy involucrada en el fútbol americano y el baloncesto de los Gators durante sus respectivas temporadas. Un típico sábado de otoño, cuando era estudiante de secundaria, consistía en rastrillar las hojas de los robles, jugar con nuestra perra Holly y ver a Percy Harvin arrasando en el fútbol americano en el televisor de nuestra habitación de Florida. El deporte de los Gators era la quintaesencia de crecer en la “última casa a la derecha antes del maizal”.</p><p>La Universidad de la Florida es donde mis padres alcanzaron la mayoría de edad y desarrollaron sus gustos y preferencias más maduras. Yo di mis primeros pasos justo al sur de Gainesville, en el pueblo de Micanopy, Florida. Fue uno de los primeros lugares que visité en el 2023 antes de matricularme en la UF en el otoño. </p><p>La conciencia social, medioambiental y cultural no siempre ha sido fácil. Al menos, no lo fue para mí. Ni siquiera el hecho de destacar en Roma, Georgia, como un vocalista y comunicador talentoso era suficiente para darme la resiliencia cultural y la inclinación medioambiental que anhelaba. Como un joven multicultural, a menudo carecía de la conciencia estabilizadora y arraigada necesaria para navegar por las primeras verdades socioculturales. A mediados o finales de mis veinte, empecé a desarrollar una sensibilidad más afinada hacia las perspectivas de las personas gracias a mis estudios en la Universidad Estatal de Georgia. Aseguré mi primer título universitario en el centro de Atlanta en otoño del 2022, casi 11 años después de graduarme del colegio en la primavera de 2011.  </p><p>Cuando mi madre estaba aquí en la UF a inicios de los 80, trabajando en comités culturales, practicando activismo político y estudiando biopsicología, estaba desarrollando un tipo de resiliencia cultural que se ha quedado con ella hasta hoy en día. Por naturaleza de su actitud positiva al enfrentar obstáculos, ella me demuestra que estando en el camino a una educación superior me permite abrirme paso.</p><p>Yo sabía que asistiría a la UF en la primavera del 2023. </p><p>A través de la exposición a diversos grupos en GSU, yo sabía que la UF, como universidad emblemática, tendría culturas y comunidades dirigidas compasivamente. </p><p>Mi primer año en la UF ha sido nada menos que mágico. Los Gators Católicos y Por Colombia han demostrado estar abiertos a un estudiante profesional no tradicional que busca eventos y tradiciones en la UF. Las misas de los Gators Católicos han sido reveladoras e inspiradoras. Me han ayudado a recordar algunas de las enseñanzas de mi parroquia católica en Roma, Georgia. Por Colombia y sus reuniones para ver el fútbol han inculcado un sentido de orgullo en mi inversión de tiempo jugando al fútbol juvenil en Georgia.</p><p>En términos generales, adoptar mis raíces latinas significa obtener mi propósito de mis pasiones en la vida.</p><p>Significa que tengo que trabajar duro para comprender cómo vivir a través del corazón. Y eso significa que también tengo que practicar la compasión por las personas cuyas pasiones difieren de las mías. </p><p>Durante la clase de música de Jose Valentino en otoño de 2023, practicamos cómo nutrir nuestras personalidades profesionales definiendo y perfilando conceptos, desde “brillantez estructurada” hasta “crescendos educativos”.</p><p>Cuando Valentino explicó el término “pasión” para nuestra clase, nos mostró que el término derivado es “sacrificio”. Entonces fuimos libres de deducir nuestros propios significados de pasión a un nivel superior. </p><p>Para algunos de nosotros eso significó alejarnos de nuestros dispositivos y del internet. Para otros, significaba aprender habilidades organizativas como priorizar la urgencia y la importancia. Para algunos estudiantes, significaba optar por concentrar su talento especializado a través del servicio.</p><p>Cuando una persona con sangre latina está en contacto con sus pasiones y propósitos, ya sea francés, italiano, latinoamericano, portugués, español o rumano, realmente está alcanzando algún tipo de divinidad. Está conectando con su propósito, su mente y su corazón está alineado, y se convierte en hombre o mujer de palabra. En español, los llamamos \"gente de palabra\", lo que alguien más podría llamar una persona honorable.</p><p>Estoy aquí en la UF para honrar los sacrificios hechos por mi familia para que yo esté aquí. Mi padre se concentró totalmente en estudiar microbiología mientras estaba aquí en la UF. También trabajó para Shands y el Hospital VA. Mi madre luchó arduamente para superar las barreras socioculturales y lingüísticas involucrándose con diferentes grupos por medio de sus estudios de psicología.  </p><p>Por la naturaleza de las raíces colombianas de mi madre y las francesas de mi padre, mis raíces latinoamericanas están conectadas con el naranja y el azul. Elijo honrar sus esfuerzos, historia y trabajo en la UF a finales de los 70 y comienzos de los 80 siguiendo algunas viejas huellas de los Gators y creando algunas nuevas por mi cuenta.</p>"
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

document.getElementById('learning-relove').addEventListener('click', function() {
    const myArticle = {
        slug: "learning-relove",
    headline_en: "Learning to Relove my Latin Culture",
    headline_es: "Aprendiendo a volver a amar mi cultura latina",
    subtitle_en: "",
    subtitle_es: "",
    card_path: "opinions.jpeg", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Charles Harris",
    author_two: "",
    translator: "Isabela Reinoso",
    contact_one_en: "Charles Harris is a UF Environmental Engineering sophomore.",
    contact_two_en: "",
    contact_one_es: "Charles Harris es estudiante de segundo año de Ingeniería Medioambiental en la UF.",
    contact_two_es: "Traducido por Isabela Reinoso. Contáctala por ireinoso@alligator.org. Síguela en X @isareinosod.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "When I finally began attending classes that Fall, I began to miss the Latino culture I was raised in.",
    desc_es: "Cuando por fin empecé a ir a clase ese otoño, empecé a echar de menos la cultura latina en la que me crié.",
    body_en: "<p>Growing up, my family had many special traditions and customs, like staying up until midnight and eating panes con pavo on Christmas Eve or always having containers of frijoles in the fridge. Of course, my family always liked blasting Eddie Santiago and Alvaro Torres while we cooked and cleaned, and we always watched Univision or a telenovela while we ate dinner. These things were typical to me, and these customs were reinforced by all my Latino friends during childhood and even today.</p><p>Ever since I was a baby, I would visit El Salvador annually during summer or winter. My mom wanted to take me there to appreciate the country’s lifestyle, meet my family and, of course, learn Spanish. She would show me places from her childhood, historical buildings and marvels of nature around El Salvador. While I enjoyed these sights, I didn’t fully appreciate them. I didn't understand my mother’s intentions, and I would end up spending a lot of time inside playing video games instead of spending time with my family.</p><p>This disconnect from my culture was a common theme throughout my childhood. I was very reluctant to learn and practice Spanish. I knew basic conversational phrases and the names of my favorite foods, but I was too stubborn to try and learn more. Whenever my mom tried to tell me stories of her time in El Salvador or show me Latin music, I never truly cherished it.</p><p>Many of my friends feel the same way as me, detached from their heritage. I first heard about this in my high school English class, and I once again listened but was not able to truly understand it. By 2018 I had stopped taking my yearly trips to El Salvador, but I finally returned in 2021. It was then that I realized I had lost the majority of my Spanish-speaking ability and was unable to communicate with my family members. This left a tremendous impact on me as I loved my extended family, but I had almost no way to express it. I began reteaching myself much of what I forgot and speaking to my grandma and mom in Spanish. Over time, I was once again able to communicate with my family abroad.</p><p>The summer before my freshman year at UF, I attended preview. I wanted to join Latino student organizations to learn more about my culture in the Fall, so I spoke to one of the preview staffers. It turned out that she was also Salvadoran, and I asked her if there was any good Salvadoran food in Gainesville. She responded dejectedly that there wasn’t. </p><p>When I finally began attending classes that Fall, I began to miss the Latino culture I was raised in. I didn’t realize how much I missed all the comforting foods of my childhood and the reggaeton that was blasted at huge family gatherings on the beach. This was when I really began to fall back in love with my roots and my Latino heritage. I began listening to more Spanish music, asking my family about our heritage and keeping up with my Spanish. This past summer, I visited Guatemala and El Salvador, which led me to appreciate my heritage even more. Seeing all the beautiful landmarks of each country and being able to better connect with my family abroad really resonated with me.</p><p>I’ve now learned how rewarding it is to take the time and learn something new about your heritage. I hold my culture as an integral part of myself and it’s something I have learned to love with all my heart. It’s so comforting to listen to some of your own cultural music, try some more of your nation’s cuisine and connect with your family to learn some of your heritage from them. So many beautiful traditions and customs have been forgotten as time has passed. It is only up to us to keep our cultures alive and allow future generations to enjoy it just as we have.</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>En mi infancia, mi familia tenía muchas tradiciones y costumbres especiales, como quedarnos despiertos hasta la medianoche y comer panes con pavo en Nochebuena o tener siempre recipientes de frijoles en el refrigerador.  Por supuesto, a mi familia siempre le gustaba poner a todo volumen a Eddie Santiago y Alvaro Torres mientras cocinábamos y limpiábamos, y siempre veíamos Univision o una telenovela mientras cenábamos. </p><p>Desde que era un bebé, yo visitaba El Salvador anualmente durante el verano o invierno. Mi madre quería llevarme allí para apreciar el estilo de vida del país, conocer a mi familia, y por supuesto, aprender español. Ella me mostraba lugares de su infancia, edificios históricos y maravillas de la naturaleza alrededor de El Salvador. Aunque yo disfrutaba de las vistas, no las apreciaba del todo. No entendía las intenciones de mi madre y terminaba pasando la mayor parte del tiempo jugando videojuegos dentro de la casa en vez de pasar tiempo con mi familia. </p><p>Esta desconexión con mi cultura fue un tema común durante mi infancia. Estaba muy indispuesto a aprender español y practicarlo. Sabía frases básicas conversacionales y los nombres de mis comidas favoritas, pero estaba muy obstinado en aprender más. Cada vez que mi madre trataba de contarme historias de su tiempo en El Salvador o enseñarme música latina, nunca lo apreciaba de verdad. </p><p>Muchos de mis amigos se sienten igual que yo, desconectados de su herencia. La primera vez que escuché hablar sobre esto fue en mi clase de inglés en el colegio, y una vez más escuché pero no fui capaz de entenderlo. Para el 2018 yo había dejado de hacer mis viajes anuales a El Salvador, pero finalmente regresé en 2021. Fue entonces cuando me di cuenta de que había perdido la mayor parte de mi capacidad de hablar español y era incapaz de comunicarme con los miembros de mi familia. Esto me causó un gran impacto, ya que amaba a mi familia, pero casi no tenía forma de expresarlo. Empecé a volver a aprender por mi cuenta mucho de lo que había olvidado y a hablar con mi abuela y mi madre en español. Con el tiempo, volví a ser capaz de comunicarme con mi familia en el extranjero.</p><p>El verano antes de mi primer año en la UF, atendí la orientación. Quería unirme a organizaciones estudiantiles latinas para aprender más sobre mi cultura en otoño, así que hablé con una de las organizadoras de la orientación. Resultó que ella también era salvadoreña, y le pregunté si había buena comida de El Salvador en Gainesville. Ella me respondió decepcionada que no había.  </p><p>Cuando por fin empecé a ir a clase ese otoño, empecé a echar de menos la cultura latina en la que me crié. No me había dado cuenta de lo mucho que echaba de menos las comidas reconfortantes de mi infancia y el reggaeton que se escuchaba en las grandes reuniones familiares en la playa. Fue entonces cuando empecé a enamorarme de nuevo de mis raíces y de mi herencia latina. Empecé a escuchar más música en español, a preguntar a mi familia sobre nuestra herencia y a mantenerme al día con mi español. El verano pasado visité Guatemala y El Salvador, lo que me hizo apreciar aún más mi herencia. Ver todos los lugares emblemáticos de cada país y ser capaz de conectar mejor con mi familia en el extranjero realmente resonó en mí.</p><p>Ahora sé lo gratificante que es dedicar tiempo a aprender algo nuevo sobre tu herencia. Considero mi cultura como una parte integral de mí mismo y es algo que he aprendido a amar con todo mi corazón. Es muy reconfortante escuchar música de tu propia cultura, probar algo más de la cocina de tu nación y conectar con tu familia para aprender de ellos algo de tu herencia. Con el paso del tiempo se han olvidado tantas tradiciones y costumbres hermosas. Sólo depende de nosotros mantener vivas nuestras culturas y permitir que las generaciones futuras las disfruten como lo hemos hecho nosotros.</p>"
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

document.getElementById('vivi').addEventListener('click', function() {
    const myArticle = {
        slug: "vivi",
    headline_en: "Mom crossed the border, so I crossed out my dreams ",
    headline_es: "Mamá cruzó la frontera, entonces taché mis sueños",
    subtitle_en: "",
    subtitle_es: "",
    card_path: "opinions.jpeg", 
    card_caption_en: "",
    card_caption_es: "",
    author_one: "Vivienne Serret",
    author_two: "",
    translator: "",
    contact_one_en: "Vivienne Serret is a UF journalism and criminology senior.",
    contact_two_en: "",
    contact_one_es: "",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "As a first-generation Latina, it’s been up to me to be the glue that puts back the pieces of shattered dreams that once belonged to the 19-year-old version of my mother — a burden placed on me the second I was born.",
    desc_es: "Como una latina de primera generación, ha sido mi responsabilidad realizar los sueños rotos de mi mamá cuando tenía 19 años — una responsabilidad que me impusieron desde el momento que nací.",
    body_en: "<p>As a first-generation Latina, it’s been up to me to be the glue that puts back the pieces of shattered dreams that once belonged to the 19-year-old version of my mother — a burden placed on me the second I was born. </p><p>I’m not alone in that sentiment. </p><p>Like many other first-generation Hispanic or Latine students, the burden of having to be successful is one of the heaviest weights we carry. We see our loved ones struggle, whether that's through financial or personal means, and are gifted with the curse of breaking generational debt and trauma. </p><p>So when I told my mom I wanted to be an artist, maybe a painter or a singer or an actress, she laughed in my face. </p><p>Sure, she knew I was “good” at those things and knew it made me happy, but I was the eldest and only daughter. To her, being in the arts wouldn't make me any money or guarantee that I’d be able to take care of her when she got older. </p><p>I was the only one in my family who could speak, read and write in English. Why waste that privilege on careers that she believed had no guaranteed stability. At every birthday and holiday party, my family would surround me and ask if I was going to study medicine and be a doctor so I could eventually “buy them a house.” </p><p>Well, does writing about bad doctors count? </p><p></p><p>Burnout and expectations </p><p>About 23.85% undergraduates in UF’s College of Journalism and Communications identify as Hispanic or Latine, according to university enrollment data. That’s hundreds of other students, like me, who probably woke up every Sunday morning to Celia Cruz or Selena singing on the TV because Sunday was the start-cleaning-or-mom’s-going-to-yell-day. </p><p>Graduate CJC students make up about 17%. </p><p>And overall, we make up about 20% of UF’s population, and about 19% of the U.S. population, according to the U.S. Census Bureau.</p><p>For us who choose journalism, it can be hard. You feel like an imposter amongst a sea of wealthier, white peers. Or feel like maybe you’re letting everyone in your family down because you still chose an “unstable” career. </p><p>You try to work harder than everyone just to prove you’re more than a statistic, but the same industry we work for is constantly letting us down. </p><p>Those national publications we work ourselves to death for a shot at just an internship, like The Wall Street Journal, The Washington Post and the New York Post, have no Hispanics or Latines on their editorial boards, according to a 2023 report published by the National Association of Hispanic Journalists. </p><p>The NAHJ found that “out of 22 newspapers studied, there are zero U.S. Latino presidents, zero Latino publishers, and only three executive editors.” The numbers are just as bleak in digital news, with 16 out of 22 organizations having a complete absence of “Latino representation in key positions, such as presidents, CEOs, editors-in-chief, executive editors, and managing editors,” according to the report. </p><p>And when the LA Times laid off employees due to “financial losses,” the paper’s Latino Caucus estimated about a 38% loss of its members. </p><p>It’s hard. </p><p>Despite letting go of the things that brought me joy like acting, singing and painting, when I thought about my life and the things I’d gone through it hit me that there were other ways I could tell stories about myself and the people around me. </p><p>I could still go to art shows, I could still listen to music and I could keep those moments alive forever. A pen and paper was now all I had to look forward to, so what better way to have it all come together and remain a piece of history than picking a field as difficult and rewarding as journalism. </p><p>Did I make the right choice, I think so. Sorry mom?</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>Como una latina de primera generación, ha sido mi responsabilidad realizar los sueños rotos de mi mamá cuando tenía 19 años — una responsabilidad que me impusieron desde el momento que nací. </p><p> Pero no estoy sola en ese sentimiento.</p><p>Como otros estudiantes hispanos o latinx de primera generación, la expectativa de tener éxito es una de las cargas más pesadas que llevamos. Vemos los sacrificios de nuestros seres queridos, como se estresan por el dinero y otras cosas, también nos queda la maldición de romper los traumas generacionales.</p><p>Así que cuando le dije a mi mamá que quería ser artista, tal vez pintora, cantante o actriz, se rió. Claro, ella sabía que era “buena” en esas cosas y sabía que me hacían feliz, pero yo era su mayor y única hija. Para ella, ser artista no me daría dinero ni garantizaría que pudiera cuidarla cuando envejezca.</p><p>Yo era la única en mi familia que podía hablar, leer y escribir en inglés. ¿Por qué desperdiciar ese privilegio en carreras que ella creía que no tenían estabilidad garantizada? En cada fiesta familiar, mis tíos y tías me preguntaban si iba a estudiar medicina y ser doctora para que, eventualmente, pudiera “comprarles una casa”.</p><p>¿Cuenta si escribo cuando los doctores son malos?</p><p></p><p>Agotamiento y expectativas</p><p>El 23.85% de los estudiantes del Colegio de Periodismo y Comunicaciones de la UF se identifican como hispanos o latinx, según los datos de la universidad. Esos son cientos de otros estudiantes, como yo, que probablemente se despertaban cada domingo por la mañana con Celia Cruz o Selena cantando en la televisión porque el domingo era el “día de limpiar o mamá iba a gritar”. </p><p>Los estudiantes graduados del Colegio de Periodismo y Comunicaciones representan alrededor del 17%.</p><p>En general, representamos alrededor del 20% de la población de la UF, y aproximadamente el 19% de la población de los Estados Unidos, según la Oficina del Censo. </p><p>Para nosotros que elegimos el periodismo puede ser difícil. Te sientes como un impostor entre un mar de compañeros gringos con dinero. O sientes que quizás estás decepcionando a toda tu familia porque elegiste una carrera “inestable”.</p><p>Tratas de trabajar más duro que todos solo para demostrar que eres más que una estadística, pero la misma industria para la que trabajamos nos decepciona constantemente.</p><p>Esas publicaciones nacionales por las que nos estresamos trabajando para conseguir solo una pasantía, como The Wall Street Journal, The Washington Post y el New York Post, no tienen hispanos o latinxs en sus juntas editoriales, según un informe de 2023 publicado por la Asociación Nacional de Periodistas Hispanos.</p><p>Según la asociación, descubrieron que “de 22 periódicos estudiados, no hay presidentes latinos, no hay editores latinos, y hay solo tres editores ejecutivos latinos”. </p><p>De los noticieros de televisión, 16 de 22 organizaciones tienen una ausencia total de “representación latina, como presidentes, editores en jefe, editores ejecutivos y editores responsables”, según el informe.</p><p>Y cuando el LA Times despidió empleados debido a “pérdidas financieras”, el Caucus Latino del periódico estimó una pérdida de aproximadamente 38% de sus miembros.</p><p>Es difícil.</p><p>A pesar de haber dejado atrás las cosas que me traían alegría, como actuar, cantar y pintar, cuando pensé en mi vida y en las cosas que me habían pasado, me di cuenta de que había otras maneras en las que podía contar historias sobre mí vida y la gente que amo.  </p><p>Aún podía ir a exposiciones de arte, aún podía escuchar música y podía mantener esos momentos vivos para siempre. Una pluma y papel es lo que me queda, así que ¿Qué mejor manera que hacerlo si no con una carrera tan difícil y gratificante como el periodismo?</p><p>¿Tomé la decisión correcta? Creo que sí. ¿Lo siento, mamá?</p>"
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
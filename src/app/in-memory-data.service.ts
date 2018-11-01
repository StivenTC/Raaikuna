import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 11,
        name: 'Yudy Catherine Silva Bolaños',
        cycle: 4,
        activeTheme: 1,
        activeLesson: 1,
        progress: [{
          theme_id: 1,
          actual_quest: 2,
          complete: false
        },
        {
          theme_id: 2,
          actual_quest: 2,
          complete: false
        }],
      },
      {
        id: 14,
        name: 'Angie Gabriela Gonzales Alzate',
        cycle: 4,
        activeTheme: 1,
        activeLesson: 1,
        progress: [{
          theme_id: 1,
          actual_quest: 2,
          complete: true
        },
        {
          theme_id: 2,
          actual_quest: 2,
          complete: false
        }]
      }
    ];
    const themes = [
      {
        id: 1,
        title: ['¡Au!', '¡Hola!', 'Hello!'],
        description: ['Puanguinii y ni kamba suti', 'Saludar y presentarnos', 'Say hello and introduce ourselves'],
        lessons: [{
          lesson_id: 1,
          title: ['¡Sumakani!', '¡Encantada!'],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'hello.png',
              audio: 'hello.mp3',
              text: ['Hello', 'Au', 'Hola']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'hi.png',
              audio: 'hi.mp3',
              text: ['Hi', 'Au', 'Hola']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'goodmorning.png',
              audio: 'goodmorning.mp3',
              text: ['Good morning!', 'Puangui', 'Buenos días']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'goodafternoon.png',
              audio: 'goodafternoon.mp3',
              text: ['Good afternoon!', 'Chisia puangui', 'Buenas tardes']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'goodevening.png',
              audio: 'goodevening.mp3',
              text: ['Good evening!', 'Puangui', 'Buenas noches']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'goodbye.png',
              audio: 'goodbye.mp3',
              text: ['Good bye!', 'Sugratukama', 'Hasta luego']
            },
            {
              type: 'boolean',
              title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
              img: 'hi.png',
              audio: 'hi.mp3',
              subtitle: 'Hi',
              question: ['Another way to say "Hello".', 'Sug rigcha nii "Hello". - Otra manera de decir "Hello".'],
              answer: 'true'
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'im.png',
              text: ['I\'m…', 'Kani…', 'Soy…'],
              audio: 'im.mp3'
            },
            {
              type: 'simpleQuest',
              title: ['How can we say our name?', '¿Imasata pudinchi ningapa nukapa suti kan? - ¿Cómo podemos decir nuestro nombre?'],
              img: 'im.png',
              options: ['I\'m…', 'Hi', 'Hello'],
              answer: 'I\'m…'
            },
            {
              type: 'advice',
              title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
              content: ['I’m niraian chillatata “My name is…” (suti kani…). ', 'I\'m significa lo mismo que "My name is…" (Me llamo…)'],
              example: [{
                text: 'I am Alexander = I\'m Alexander (Nuka kani Alexander)',
                translate: 'I am Alexander = I\'m Alexander (Soy Alexander)'
              }]
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'nicetomeetyou.png',
              audio: 'nicetomeetyou.mp3',
              text: ['Nice to meet you ', 'Pai kanta rigsinmanda', 'Encantado de conocerte']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'howisitgoing.png',
              audio: 'howisitgoing.mp3',
              text: ['How is it going?', '¿Imasata riku tukui?', '¿Cómo va todo?']
            },
            {
              type: 'organize',
              title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
              options: ['How', 'is ', 'it', 'going', '?'],
              answer: 'How is it going ?'
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'finethanks.png',
              audio: 'finethanks.mp3',
              text: ['Fine, thanks', 'Sumaglla, pai', 'Bien, gracias']
            },
            {
              type: 'completeOptions',
              title: ['Choose the correct answer to the question.', 'Tupui suma ainii chi tapuita. - Elige la respuesta correcta a la pregunta.'],
              question: ['A: How is it going?', 'B: ___'],
              img: 'howisitgoing.png',
              audio: '',
              options: ['Fine, thanks', 'Nice to meet you'],
              answer: 'Fine, thanks'
            }],
          },
          {
            title: ['Dialogue', 'Parlarikuna - Diálogo'],
            icon: 'dialogue.svg',
            quests: [{
              type: 'dialogue',
              options: ['Fine, thanks', 'How is it going?', 'I\'m', 'Nice to meet you', 'Hi'],
              answer: 'I\'m Hi Nice to meet you How is it going? Fine, thanks',
              conversation: [{
                name: 'Waira',
                msg: 'Hello, ___ Waira',
                img: 'wayra.svg',
                audio: 'd1.mp3',
              },
              {
                name: 'Flora',
                msg: '___, I am Flora',
                img: 'flora.svg',
                audio: 'd2.mp3',
              },
              {
                name: 'Waira',
                msg: '___. ___',
                img: 'wayra.svg',
                audio: 'd3.mp3',
              },
              {
                name: 'Flora',
                msg: '___',
                img: 'flora.svg',
                audio: 'd4.mp3',
              }
              ]
            }]
          },
          {
            id: 1,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'hear',
                title: ['Write what you hear.', 'Kilkai ima uiakuskasina. - Escribe lo que oigas.'],
                audio: 'hello.mp3',
                answer: 'Hello' // Comprobar
              },
              {
                type: 'linkWords',
                title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
                options: ['Nice to meet you', 'How is it going?', 'Fine, thanks'],
                items: ['Pai kanta rigsinmanda', 'Sumaglla, pai', '¿Imasata riku tukui?'],
                answer: 'Pai kanta rigsinmanda ¿Imasata riku tukui? Sumaglla, pai'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct answers to fill the gaps.', 'Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi. - Elige las palabras correctas para completar los espacios en blanco.'],
                question: ['How is it ___ ?'],
                img: '',
                audio: 'howisitgoing.mp3',
                options: ['fine', 'going'],
                answer: 'going'
              },
              {
                type: 'simpleQuest',
                title: ['Another way to say "Hello".', 'Sug rigcha nii "Hello". - Otra manera de decir "Hello".'],
                img: 'hello.png',
                options: ['I\'m…', 'Hi', 'How', 'Going'],
                answer: 'Hi'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['Nice', 'to', 'meet', 'you'],
                answer: 'Nice to meet you'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct answers to fill the gaps.', 'Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi. - Elige las palabras correctas para completar los espacios en blanco.'],
                question: ['How is it going ___'],
                img: '',
                audio: '',
                options: ['?', '!'],
                answer: '?'
              },
              {
                type: 'write',
                title: ['Write another way to say "Hello".', 'Kilkai sug rigcha nii "Hello". - Escribe otra manera de decir "Hello".'],
                question: ['___'],
                answer: 'Hi' // Comprobar
              }
            ]
          }
          ]
        }]
      },
      {
        id: 2,
        title: ['¿Imasata kangui?', '¿Cómo estás?', 'How are you?'],
        description: ['Puanguinii y ni kamba suti', 'Expresar como nos sentimos-Verbo to be (ser/estar)', 'Expressing how we feel - Verb to be'],
        lessons: [{
          lesson_id: 1,
          title: ['Kani sumaglla, pai.', 'Estoy bien, gracias.'],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kai unidad apaku imasa tapungapa y ainingapa chi tapuikunata (¿imasata kangui?). Kai mi kankuna sug sug kunaiapas ruikuna iachaikungapa:', 'Esta unidad abarca cómo preguntar y responder a la pregunta (¿Cómo estás?). Estas son algunas de las expresiones que aprenderás:'],
                example: [{
                  text: 'How are you? (¿Imasata kangui?)',
                  translate: 'How are you? (¿Cómo estás?)',
                },
                {
                  text: 'Not bad, thanks (Nima suma, pai)',
                  translate: 'Not bad, thanks (Nada mal, gracias)',
                },
                {
                  text: 'I\'m not great (Mana kani suma)',
                  translate: 'I\'m not great (No muy bien)',
                },
                {
                  text: 'How about you? (Mana kani suma)',
                  translate: 'How about you? (¿Y tú?)',
                }]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'howareyou.png',
                audio: 'howareyou.mp3',
                text: ['How are you?', '¿Imasata kangui?', '¿Cómo estás?']
              },
              {
                type: 'boolean',
                title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                img: 'howareyou.png',
                audio: 'howareyou.mp3',
                subtitle: 'How are you?',
                question: ['Iukan chillarigcha niraiadu "How is it going?"', 'Tiene un significado similar a "How is it going?"'],
                answer: 'true'
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'imfinethanks.png',
                audio: 'finethanks.mp3',
                text: ['Fine, thanks', 'Sumaglla, pai', 'Bien, gracias']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'iamnotbadthanks.png',
                audio: 'notbadthanks.mp3',
                text: ['Not bad, thanks', 'Nima suma, pai', 'Nada mal, gracias']
              },
              {
                type: 'boolean',
                title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                img: 'imfinethanks.png',
                audio: 'finethanks.mp3',
                subtitle: 'Fine, thanks',
                question: ['Iukan chillarigcha niraiadu "Not bad, thanks"', 'Tiene un significado similar a "Not bad, thanks"'],
                answer: 'true'
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'howaboutyou.png',
                audio: 'howaboutyou.mp3',
                text: ['How about you?', '¿Y kan?', '¿Y tú?']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'imgood.png',
                audio: 'imgood.mp3',
                text: ['I\'m good', 'kani sumaglla', 'Estoy bien']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'imnotgreat.png',
                audio: 'imnotgreat.mp3',
                text: ['I\'m not great', 'Kani chaupi suma y sug chaupi mana suma', 'Estoy regular']
              },
              {
                type: 'boolean',
                title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                img: 'imgood.png',
                audio: 'imgood.mp3',
                subtitle: 'I\'m good',
                question: ['Iukan chillarigcha niraiadu "I\'m not great!"', 'Tiene un significado similar a "I\'m not great", thanks"'],
                answer: false
              },
              {
                type: 'hearOptions',
                title: ['Choose the answer that you hear in the audio.', 'Api chi rimaikuna imasa uiaskasina chi audiupi. - Elige la respuesta que escuches en el audio.'],
                audio: 'finethanks.mp3',
                options: ['Fine, thanks', 'I\'m good, thanks', 'Not bad, thanks '],
                answer: 'Fine, thanks'
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresión con su traducción'],
                options: ['Not bad, thanks', 'I\'m good', 'I\'m not great'],
                items: ['Nima suma, pai', 'Mana kani suma', 'kani sumaglla'],
                answer: 'Nima suma, pai kani sumaglla Mana kani suma'
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresión con su traducción'],
                options: ['Not bad, thanks', 'I\'m good', 'I\'m not great'],
                items: ['Nima suma, pai', 'Mana kani suma', 'kani sumaglla'],
                answer: 'Nima suma, pai kani sumaglla Mana kani suma'
              }
            ],
          },
          {
            title: ['Dialogue', 'Parlarikuna - Diálogo'],
            icon: 'dialogue.svg',
            quests: [{
              type: 'dialogue',
              options: ['How are you?', ' I\'m good.', 'Not bad'],
              answer: 'How are you? I\'m good. Not bad',
              conversation: [{
                name: 'Diana',
                msg: 'Hello?',
                img: 'diana.svg',
                audio: 'dhello.mp3',
              },
              {
                name: 'Camila',
                msg: 'Hi, Diana! It\'s Camila',
                img: 'camila.svg',
                audio: 'dhiitscamila.mp3',
              },
              {
                name: 'Diana',
                msg: 'Oh hi! ___',
                img: 'diana.svg',
                audio: 'dohhihowareyou.mp3',
              },
              {
                name: 'Camila',
                msg: '___ How about you?',
                img: 'camila.svg',
                audio: 'dimgoodhowaboutyou.mp3',
              },
              {
                name: 'Diana',
                msg: '___, thanks ',
                img: 'diana.svg',
                audio: 'dnotbadthanks.mp3',
              }
              ]
            }]
          },
          {
            title: ['Grammar', 'ilkai rimaikuna - Gramática'],
            icon: 'books.svg',
            quests: [{
              type: 'advice',
              title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
              content: ['¡kunagura iachaikusunchi nukanchipa ñugpa ruai! Chi ruai kauachiku sug ruikuna. "To be" chi ruai kan achka kauari kai inglispi. Chikunaua ruanchi tupungapa aillukunata y kusakunata y uiiangapa.', '¡Vamos a aprender nuestro primer verbo! Un verbo expresa una acción o un estado. "To be" es el verbo más común en inglés. Lo usamos para identificar a personas y cosas y dar información.'],
              example: [{
                text: 'He is Alexander (Pai kan Alexander)',
                translate: 'He is Alexander (Él es Alexander)'
              },
              {
                text: 'I am good. (Nuka kani sumaglla)',
                translate: 'I am good (Estoy bien) '
              },
              {
                text: 'We are 12 years old (Nukanchi iukanchi chunga iskai uata)',
                translate: 'We are 12 years old (Nosotros tenemos 12 años)'
              },
              {
                text: 'I am happy (Nuka kani kuntintu)',
                translate: 'I am happy (Estoy feliz)'
              },
              {
                text: 'I am happy (Nuka kani kuntintu)',
                translate: 'I am happy (Estoy feliz)'
              }]
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'iamhappy.png',
              audio: 'iamhappy.mp3',
              text: ['I am happy', 'Nuka kani kuntintu', 'Estoy feliz']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'wearetired.png',
              audio: 'wearetired.mp3',
              text: ['We are tired', 'Nukanchi kanchi saikuska', 'Estamos cansados']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'heisabitstressed.png',
              audio: 'heisabitstressed.mp3',
              text: ['He is a bit stressed', 'Pai kan asiaia juiri sintiriska', 'Él está un poco estresado']
            },
            {
              type: 'chooseWord',
              title: ['Choose the verb "to be" in each phrase.', 'Apai chi ruai "to be" sug sug chi rimaikunapi. - Elige el verbo "to be" en cada frase.'],
              options: ['He is 30', 'We are good', 'I am tired'],
              answer: 'is are am'
            },
            {
              type: 'advice',
              title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
              content: ['Chi ruai "to be" sugua api imasa kaskaua, gintiua u kusakunaua imasa rimanakuskasina. kunagura, kauanga pudingui imasapas chi ruai "to be":', 'El verbo "to be" cambia dependiendo de la persona o la cosa de la que estemos hablando. A continuación, puedes ver las diferentes formas del verbo "to be":'],
              example: [{
                text: 'I am (nuka kani / nuka kaipi kani)',
                translate: 'I am (Yo soy/ Yo estoy)'
              },
              {
                text: 'You are (kan kangui/ kan kaipi kangui)',
                translate: 'You are (tú eres / tú estás)'
              },
              {
                text: 'He is (pai kan / pai kaipi kan)',
                translate: 'He is (Él es / Él está )'
              },
              {
                text: 'She is (pai kan / pai kaipi kan)',
                translate: 'She is (Ella es / Ella está )'
              },
              {
                text: 'It is (chi kan/ chi kaipi kan)',
                translate: 'It is (Eso es/Eso está)'
              },
              {
                text: 'We are (nukanchi kanchi / nukanchi kaipi kanchi)',
                translate: 'We are (Nosotros somos/Nosotros estamos )'
              },
              {
                text: 'You are (kankuna kanguichi / kankuna kaipi kanguichi)',
                translate: 'You are (Ustedes son/Ustedes están)'
              },
              {
                text: 'They are (paikuna kankuna / paikuna kaipi kankuna)',
                translate: 'They are (Ellos son/Ello están)'
              }]
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'i.png',
              audio: 'i.mp3',
              text: ['I', 'Nuka', 'Yo']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'you.png',
              audio: 'you.mp3',
              text: ['You', 'Kan', 'Tú']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'he.png',
              audio: 'he.mp3',
              text: ['He', 'Pai', 'Él']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'she.png',
              audio: 'she.mp3',
              text: ['She', 'Pai', 'Ella']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'it.png',
              audio: 'it.mp3',
              text: ['It', 'Chi', 'Eso']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'we.png',
              audio: 'we.mp3',
              text: ['We', 'Nukanchi', 'Nosotros']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'youu.png',
              audio: 'you.mp3',
              text: ['You', 'Kankuna', 'Ustedes']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'they.png',
              audio: 'they.mp3',
              text: ['They', 'Paikuna', 'Ellos']
            },
            {
              type: 'boolean',
              title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
              img: 'iamnotbadthanks.png',
              audio: '',
              subtitle: 'I am not bad, thanks ',
              question: ['Kai ruaikuna iukan chi ruia "to be"', 'Esta oración contiene el verbo "to be"'],
              answer: 'true'
            },
            {
              type: 'organizeWord',
              title: ['Fill the gaps with the correct words.', 'Jundachi chi iura pisiskapi chi kilkai suma kunaua, - Completa los espacios en blanco con las palabras correctas".'],
              img: 'flora.png',
              question: ['You ___ Flora'],
              options: ['are', 'am', 'is'],
              answer: 'are'
            },
            {
              type: 'hearWrite',
              title: ['Fill the gap with the help of the audio.', 'Jundachi chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
              question: ['She ___ good'],
              audio: 'sheisgood.mp3',
              answer: 'is' // Comprobar
            },
            {
              type: 'write',
              title: ['Complete the phrase with the correct form of the verb "to be".', 'Jundachi chi rimaikunata kai suma ruaikunaua "to be". - Completa la frase con la forma correcta del verbo "to be".'],
              question: ['How ___ you ?'],
              answer: 'are' // Comprobar
            },
            {
              type: 'organize',
              title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
              options: ['We', 'are', 'fine', ',', 'thanks'],
              answer: 'We are fine , thanks'
            },
            {
              type: 'organizeWord',
              title: ['Choose the correct answers to fill the gaps.', 'Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi. - Elige las palabras correctas para completar los espacios en blanco.'],
              question: ['They ___ good'],
              options: ['is', 'are'],
              answer: 'are'
            },
            {
              type: 'hearWrite',
              title: ['Fill the gap with the help of the audio.', 'Jundachi chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
              question: ['___ happy'],
              audio: 'iamhappy.mp3',
              answer: 'I am' // Comprobar
            },
            {
              type: 'write',
              title: ['Complete the phrase with the correct form of the verb "to be".', 'Jundachi chi rimaikunata kai suma ruaikunaua "to be". - Completa la frase con la forma correcta del verbo "to be".'],
              question: ['My name ___ Andrea'],
              img: '',
              audio: '',
              answer: 'is' // Comprobar}
            }
            ]
          },
          {
            id: 2,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'hear',
                title: ['Write what you hear.', 'Kilkai ima uiakuskasina. - Escribe lo que oigas.'],
                audio: 'dhello.mp3',
                answer: 'Hello' // Comprobar
              },
              {
                type: 'linkWords',
                title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
                options: ['Nice to meet you', 'How is it going?', 'Fine, thanks'],
                items: ['Pai kanta rigsinmanda', 'Sumaglla, pai', '¿Imasata riku tukui?'],
                answer: 'Pai kanta rigsinmanda ¿Imasata riku tukui? Sumaglla, pai'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct answers to fill the gaps.', 'Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi. - Elige las palabras correctas para completar los espacios en blanco.'],
                question: ['How is it ___ ?'],
                img: '',
                audio: 'howisitgoing.mp3',
                options: ['fine', 'going'],
                answer: 'going'
              },
              {
                type: 'simpleQuest',
                title: ['Another way to say "Hello".', 'Sug rigcha nii "Hello". - Otra manera de decir "Hello".'],
                img: 'hello.png',
                options: ['I\'m…', 'Hi', 'How', 'Going'],
                answer: 'Hi'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['Nice', 'to', 'meet', 'you'],
                answer: 'Nice to meet you'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct answers to fill the gaps.', 'Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi. - Elige las palabras correctas para completar los espacios en blanco.'],
                question: ['How is it going ___'],
                img: '',
                audio: '',
                options: ['?', '!'],
                answer: '?'
              },
              {
                type: 'write',
                title: ['Write another way to say "Hello".', 'Kilkai sug rigcha nii "Hello". - Escribe otra manera de decir "Hello".'],
                question: ['___'],
                answer: 'Hi' // Comprobar
              }
            ]
          }
          ]
        }]
      },
      {
        id: 3,
        title: ['¿Imasata sutikangui?', '¿Cómo te llamas?', 'What is your name?'],
        description: ['Rimaspa nukanchi kikigmanda - Nukanchipa sutichi', 'Hablando de nosotros mismos - Pronombres personales', 'Talking about ourselves - Personal pronouns'],
        lessons: [{
          lesson_id: 1,
          title: ['Sutikani', 'Me llamo…'],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [{
              type: 'advice',
              title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
              content: ['Kunagura tin rigsingui chi uillaikuna, iachaikusunchi ruangapa y ainingapa kimsa tapikunata.', 'Ahora que conoces los conceptos básicos, vamos a practicar cómo hacer y responder tres sencillas preguntas.'],
              example: [{
                text: 'What is your name? (¿Imasata sutikangui?)',
                translate: 'What is your name? (¿Cómo te llamas?)'
              },
              {
                text: 'Where are you from? (¿Maimandata kangui?)',
                translate: 'Where are you from? (¿De dónde eres?)'
              },
              {
                text: 'How old are you? (¿Imasa uatata iukangui?)',
                translate: 'How old are you? (¿Cuántos años tienes?)'
              }
              ]
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'whatisyourname.png',
              audio: 'whatisyourname.mp3',
              text: ['What is your name?', '¿Imasata sutikangui?', '¿Cómo te llamas?']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'imalexander.png',
              audio: 'im.mp3',
              text: ['I\'m...', 'Kani...', 'Soy...'],
              example: {
                text: ['I\'m Alexander', 'Sutikani Alexander', 'Soy Alexander'],
                audio: 'imalexander.mp3'
              }
            },
            {
              type: 'completeOptions',
              title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
              question: ['Hello, what\'s your name?', 'Hi, ___ Carlos '],
              options: ['name', 'I\'m'],
              answer: 'I\'m'
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'whereareyoufrom.png',
              audio: 'whereareyoufrom.mp3',
              text: ['Where are you from?', '¿Maimandata kangui?', '¿De dónde eres?']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'imfromcaqueta.png',
              audio: 'imfrom.mp3',
              text: ['I\'m from...', 'Kani...', 'Soy de...'],
              example: [{
                text: ['I\'m from Caquetá', 'Kani Kaquitamanda', 'Soy del Caquetá'],
                audio: 'imfromcaqueta.mp3',
              }]
            },
            {
              type: 'hearOptions',
              title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
              audio: 'whereareyoufrom.mp3',
              question: ['Where are you from?', '___ Caquetá'],
              options: ['I\'m from', 'My name is'],
              answer: 'I\'m from'
            },
            {
              type: 'simpleQuest',
              title: ['Tupui suma ainii chi tapuita "What is your name"', 'Elige la respuesta correcta a la pregunta "What is your name"'],
              audio: '',
              img: 'imalexander.png',
              options: ['I\'m 23', 'I\'m from Caquetá', 'I\'m Alexander'],
              answer: 'I\'m Alexander'
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'howoldareyou.png',
              audio: 'howoldareyou.mp3',
              text: ['How old are you?', '¿Imasa uatata iukangui??', '¿Cuántos años tienes?']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'im15yearsold.png',
              audio: 'im15yearsold.mp3',
              text: ['I\'m 15 years old', 'Iukani chunga pichka uata']
            },
            {
              type: 'boolean',
              title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
              img: 'im15yearsold.png',
              audio: 'im.mp3',
              subtitle: 'I\'m...',
              question: ['Niraian imasa nidiru kaskata uatata', 'Se trata de una forma común de indicar la edad.'],
              answer: 'true'
            },
            {
              type: 'linkWords',
              title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
              options: ['What is your name', 'Where are you from?', 'How old are you'],
              items: ['I am 15 years old', 'I am Alexander', 'I am from Caquetá'],
              answer: ['I am Alexander', 'I am from Caquetá', 'I am 15 years old']
            }]
          },
          {
            title: ['Dialogue', 'Parlarikuna - Diálogo'],
            icon: 'dialogue.svg',
            quests: [{
              type: 'dialogue',
              options: ['What is', 'are you', 'I\'m 13', 'I\'m from', 'how old'],
              answer: 'What is are you I\'m from how old I\'m 13',
              conversation: [{
                name: 'Luisa',
                msg: 'Hi, my name is Luisa. ___ your name?',
                img: 'diana.svg',
                audio: 'dhimynameisluisa.mp3',
              },
              {
                name: 'Karen',
                msg: 'Hi, I\'m Karen',
                img: 'camila.svg',
                audio: 'dhiiamkaren.mp3',
              },
              {
                name: 'Luisa',
                msg: 'Where ___ from, Karen?',
                img: 'diana.svg',
                audio: 'dwhereareyoufromkaren.mp3',
              },
              {
                name: 'Karen',
                msg: '___ Florencia. And you, where are you from?',
                img: 'camila.svg',
                audio: 'dimfromflorenciaandyou.mp3',
              },
              {
                name: 'Luisa',
                msg: 'I\'m from Yurayaco',
                img: 'diana.svg',
                audio: 'dimfromyurayaco.mp3',
              },
              {
                name: 'Karen',
                msg: 'And ___ are you?',
                img: 'camila.svg',
                audio: 'dandhowoldareyou.mp3',
              },
              {
                name: 'Luisa',
                msg: 'I am 10 years old. How old are you?',
                img: 'diana.svg',
                audio: 'im10yearsold.mp3',
              },
              {
                name: 'Karen',
                msg: '___',
                img: 'camila.svg',
                audio: 'diam13.mp3',
              },
              {
                name: 'Luisa',
                msg: 'Nice to meet you, Karen',
                img: 'diana.svg',
                audio: 'dnicetomeetyoukaren.mp3',
              },
              {
                name: 'Karen',
                msg: 'You too, see you later!',
                img: 'camila.svg',
                audio: 'dmetooseeyoulater.mp3',
              },
              ]
            }]
          },
          {
            title: ['Grammar', 'ilkai rimaikuna - Gramática'],
            icon: 'books.svg',
            quests: [
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kauai chi kilkaikuna pintachidu kaskakunata. Kaikuna ninakun pipata u imata rimanakunchi.', 'Mira las palabras que están resaltadas. Estas indican de quién o de qué estamos hablando.'],
                example: [{
                  text: 'I am Luis (Nuka kani Luis)',
                  translate: 'I am Luis (Yo soy Luis)'
                },
                {
                  text: 'You are Carlos (Kan kangui Carlos)',
                  translate: 'You are Carlos (Tú eres Carlos)'
                },
                {
                  text: 'He is happy (Pai kan kuntintu)',
                  translate: 'He is happy (Él está feliz)'
                },
                {
                  text: 'It is a book (Chi kan sug libru)',
                  translate: 'It is a book (Eso es un libro)'
                }]
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['He', 'is ', 'happy'],
                answer: 'He is happy'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['You', 'are ', 'Alexander'],
                answer: 'You are Alexander'
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Sug nikanchipa sutichikuna ninakun suglla gintita u ubjituta, y sugkuna sutichinakun achka gintikunata u ubjitukana.', 'Algunos pronombres personales se refieren a una sola persona u objeto, mientras que otros se refieren a un grupo de personas u objetos.'],
                example: [{
                  text: 'I (Nuka)',
                  translate: 'I (Yo)'
                },
                {
                  text: 'You (Kan)',
                  translate: 'You (Tú)'
                },
                {
                  text: 'He (Pai)',
                  translate: 'He (Él)'
                },
                {
                  text: 'She (Pai)',
                  translate: 'She (Ella)'
                },
                {
                  text: 'It (Chi)',
                  translate: 'It (Eso)'
                }]
              },
              {
                type: 'boolean',
                title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                img: 'heisgood.png',
                audio: 'heisgood.mp3',
                subtitle: 'He is good',
                question: ['Chi uiiai rimaku suglla gintimanda', 'Esta frase habla de una persona.'],
                answer: 'true'
              },
              {
                type: 'boolean',
                title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                img: 'sheistired.png',
                audio: 'sheistired.mp3',
                subtitle: 'She is tired',
                question: ['Chi uiiai rimaku suglla gintimanda', 'Esta frase habla de una persona.'],
                answer: 'true'
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Chiua "chita" chiua ninga pudinchi kusakunaia (mana gintikunata).', 'Usamos "eso" para referirnos a cosas en singular (no a personas).'],
                example: [{
                  text: 'The book is big (Chi libru kilkadu kan atun)',
                  translate: 'The book is big (El libro es grande)'
                },
                {
                  text: 'It is big (Chi kan atun)',
                  translate: 'It is big (Es bueno)'
                }]
              },
              {
                type: 'completeOptions',
                title: ['Pitapas nigpi chi libru kan puka, ninga pudini:', 'Si le digo a alguien que mi libro es rojo, debería decir:'],
                question: ['___ is red'],
                options: ['He, It'],
                answer: 'It'
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kaikuna kankuna nukanchipa sutichi achka ningapa.', 'Estos son los pronombres personales de plural.'],
                example: [{
                  text: 'We (Nukanchi)',
                  translate: 'We (Nosotros)'
                },
                {
                  text: 'You (Kankuna)',
                  translate: 'You (Ustedes)'
                },
                {
                  text: 'They (Paikuna)',
                  translate: 'They (Ellos)'
                }]
              },
              {
                type: 'chooseWord',
                title: ['Tupui chi nukanchipa sutichikunata achka ningapa', 'Selecciona los pronombres personales de plural'],
                options: ['They are from Caquetá', 'We are tired', 'I am happy'],
                answer: 'They We'
              },
              {
                type: 'completeOptions',
                title: ['¿Ima ni ruaimanda "to be" chi kan sutipa?', '¿Qué forma del verbo "to be" es la correcta?'],
                audio: '',
                img: 'theyarefromyurayaco.png',
                question: ['They ___ from Caquetá'],
                options: ['are', 'is'],
                answer: 'are'
              },
              {
                type: 'completeOptions',
                title: ['Nuka rimagpi nukapa aillumanda ni iukani:', 'Si hablo de mi amigo debería decir:'],
                audio: '',
                img: 'imfromcaqueta.png',
                question: ['___ is from Caquetá'],
                options: ['They', 'He'],
                answer: 'He'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                question: ['I ___ Carlos'],
                options: ['is', 'am'],
                answer: 'am'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['She', 'is', 'fine'],
                answer: 'She is fine'
              },
              {
                type: 'linkWords',
                title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
                options: ['I', 'She?', 'They'],
                items: ['are', 'am', 'is'],
                answer: 'am is are'
              },
              {
                type: 'hearOptions',
                title: ['Tupui imasa uiaska nukanchipa sutichikunata', 'Selecciona el pronombre personal que oigas'],
                audio: 'theyarefine.mp3',
                options: ['They', 'I', 'He'],
                answer: 'They'
              },
              {
                type: 'linkWords',
                title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
                options: ['She', 'They', 'I'],
                items: ['are from Yurayaco', 'is happy', 'am 15'],
                answer: 'is happy are from Yurayaco am 15'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['He', 'is', 'good'],
                answer: 'He is good'
              },
              {
                type: 'hearOptions',
                title: ['Tupui imasa uiaska nukanchipa sutichikunata', 'Selecciona el pronombre personal que oigas'],
                audio: 'itisred.mp3',
                options: ['He', 'It', 'We'],
                answer: 'It'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: 'wearestudents.mp3',
                img: '',
                question: ['___ are friends'],
                options: ['We', 'She'],
                answer: 'We'
              },
              {
                type: 'organizeWord',
                title: ['Jundachi  chi iura pisiskapi chi kilkai suma kunaua.', 'Completa los espacios en blanco con las palabras correctas.'],
                img: 'howareyou.png',
                audio: 'howareyou.mp3',
                question: ['How are ___'],
                options: ['you', 'it', 'Hi'],
                answer: 'you'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: '',
                img: 'itisred.png',
                question: ['___ red'],
                options: ['It is', 'I am', 'are'],
                answer: 'It is'
              },
              {
                type: 'organizeWord',
                title: ['Jundachi  chi iura pisiskapi chi kilkai suma kunaua.', 'Completa los espacios en blanco con las palabras correctas.'],
                img: 'theyarefromyurayaco.png',
                audio: 'theyarefromyurayaco.mp3',
                question: ['___ are from Yurayaco'],
                options: ['They', 'I', 'He', 'She'],
                answer: 'They'
              },
              {
                type: 'write',
                title: ['Complete the expression based on the picture.', 'Jundachi chi nikusta imasakaska chi imagin. - Completa la expresión de acuerdo a la imagen.'],
                question: ['___ is red'],
                img: 'itisred.png',
                audio: '',
                answer: 'It' // Comprobar
              }
            ]
          },
          {
            id: 3,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'hearOptions',
                title: ['Choose the answer that you hear in the audio.', 'Api chi rimaikuna imasa uiaskasina chi audiupi. - Elige la respuesta que escuches en el audio.'],
                audio: 'himynameisluisa.mp3',
                options: ['I\'m from Yurayaco', 'I\'m 13', 'Hi, my name is Luisa'],
                answer: 'Hi, my name is Luisa'
              },
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: '',
                img: 'whereareyoufrom.png',
                question: ['Where are you from? ___ Yurayaco'],
                options: ['I\m from', 'I\m'],
                answer: 'I\m from'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['Where', 'are', 'you', 'from', '?'],
                answer: 'Where are you from ?'
              },
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: '',
                img: '',
                question: ['How old ___ you?'],
                options: ['are', 'am', 'is'],
                answer: 'are'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['I', 'am', '13', 'years', 'old'],
                answer: 'I am 13 years old'
              },
              {
                type: 'organizeWord',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                img: 'whatisyourname.png',
                audio: 'whatisyourname.mp3',
                question: ['What\'s your ___ ?'],
                options: ['name', 'mother', 'years'],
                answer: 'name'
              },
              {
                type: 'write',
                title: ['¿Ima ni ruaimanda "to be" chi kan sutipa?', '¿Qué forma del verbo "to be" es la correcta?'],
                question: ['I\'m Alexander. I ___ from Yurayaco'],
                img: '',
                audio: '',
                answer: 'am' // Comprobar
              },
              {
                type: 'write',
                title: ['Complete the expression based on the picture.', 'Jundachi chi nikusta imasakaska chi imagin. - Completa la expresión de acuerdo a la imagen.'],
                question: ['I\'m ___ Caquetá'],
                img: 'imfromcaqueta.png',
                audio: '',
                answer: 'from' // Comprobar
              },
              {
                type: 'write',
                title: ['Complete the expression based on the picture.', 'Jundachi chi nikusta imasakaska chi imagin. - Completa la expresión de acuerdo a la imagen.'],
                question: ['How old ___ you?'],
                img: '',
                audio: 'howoldareyou.mp3',
                answer: 'are' // Comprobar
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['My name', 'is', 'Luisa, I\'m', 'from Yurayaco.', 'I am 15 years old'],
                answer: 'My name is Luisa, I\'m from Yurayaco. I am 15 years old'
              }
            ]
          }
          ]
        }]
      },
      {
        id: 4,
        title: ['¿Maipita kausangui?', '¿Dónde vives?', 'Where do you live?'],
        description: ['Nisunchi mai uachuta kausangui - rimaikuna ningapa mai uachumanda "in, at, near"', 'Describir el lugar donde vivimos - Preposiciones de lugar "in, at, near"', 'Describing the place where we live - Prepositions of place "in, at, near"'],
        lessons: [{
          lesson_id: 1,
          title: ['Kausani chipi...', 'Vivo en...'],
          items: [
            {
              title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
              icon: 'vocabulary.svg',
              quests: [
                {
                  type: 'advice',
                  title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                  content: ['Kai licciunpi, iachaikusunchin ningapa maipita kausanakunchi.', 'En esta lección, aprenderemos a hablar de dónde vivimos.'],
                  example: [{
                    text: 'City (Iagta atun)',
                    translate: 'City (Ciudad)'
                  },
                  {
                    text: 'town (Iagta anchi)',
                    translate: 'town (Pueblo)'
                  },
                  {
                    text: 'Near (Ña kai chaiaskamanda)',
                    translate: 'Near (Cerca de)'
                  },
                  {
                    text: 'Far from (Chi karuladumanda)',
                    translate: 'Far from (Lejos de)'
                  },
                  {
                    text: 'Big (Atun)',
                    translate: 'Big (Grande)'
                  },
                  {
                    text: 'Small (Anchi)',
                    translate: 'Small (Pequeño)'
                  },
                  {
                    text: 'Busy city (Iagta atun achka gintikunaua)',
                    translate: 'Busy city (Ciudad concurrida'
                  },
                  {
                    text: 'Quiet city (Iagta atun suma kausangapa)',
                    translate: 'Quiet city (Ciudad tranquila'
                  }]
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'wheredoyoulive.png',
                  audio: 'wheredoyoulive.mp3',
                  text: ['Where do you live', '¿Maipita kausangui?', '¿Dónde vives?'],
                  example: {
                    text: [''],
                    audio: ''
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'iliveinmorelia.png',
                  audio: 'ilivein.mp3',
                  text: ['I live in...', 'Kausani chipi...', 'Vivo en...'],
                  example: {
                    text: ['I live in Morelia', 'Kausakuni Muriliapi', 'Yo vivo en Morelia'],
                    audio: 'iliveinmorelia.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'town.png',
                  audio: 'town.mp3',
                  text: ['Town', 'Iagta anchi', 'Pueblo'],
                  example: {
                    text: ['They live in a town', 'Paikuna kausanakun chi iagta anchipi', 'Ellos viven en un pueblo'],
                    audio: 'theyliveinatown.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'florenciaisabusycity.png',
                  audio: 'busy',
                  text: ['Town', 'Iagta anchi', 'Pueblo'],
                  example: {
                    text: ['Florencia is a busy city', 'Flurincia kan iagta atun achka gintikunaua', 'Florencia es una ciudad concurrida'],
                    audio: 'florenciaisabusycity.mp3'
                  }
                },
                {
                  type: 'advice',
                  title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                  content: ['Chi ni "hometown" kaiua ningapa pudinchi nukanchi samukuska iagtamanda.', 'El término "hometown" se emplea para indicar la ciudad en la que crecimos.'],
                  example: [{
                    text: 'My hometown is Florencia (Nuka iagta kan Flurincia.)',
                    translate: 'My hometown is Florencia (Mi ciudad natal es Florencia)'
                  },
                  ]
                },
                {
                  type: 'boolean',
                  title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                  img: 'hometown.png',
                  audio: 'hometown.mp3',
                  subtitle: 'Hometown',
                  question: ['Kai kilkadu ruikuna "hometown" kaiua pudinchi rimangapa nuka mai uiñaskamanda.', 'La palabra "hometown" se utiliza para hablar del lugar en el que crecimos.'],
                  answer: 'true'
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'helivesinatownnearmorelia.png',
                  audio: 'near.mp3',
                  text: ['Near', 'Ña kai chaiaskamanda', 'Cerca de'],
                  example: {
                    text: ['He lives in a town near Morelia', 'Pai kausaku sug iagta chi laduia Moreliapi', 'Él vive en un pueblo cerca a Morelia'],
                    audio: 'helivesinatownnearmorelia.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'icomefromabigtown.png',
                  audio: 'big.mp3',
                  text: ['Big', 'Atun', 'Grande'],
                  example: {
                    text: ['I come from a big town', 'Kani atun iagtamanda', 'Soy de un pueblo grande'],
                    audio: 'icomefromabigtown.mp3'
                  }
                },
                {
                  type: 'hearOptions',
                  title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                  audio: 'icomefromabigtown.mp3',
                  options: ['Cerca', 'Grande', 'Pueblo'],
                  answer: 'Grande'
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'mytownisquietsmall.png',
                  audio: 'small.mp3',
                  text: ['Small', 'Anchi', 'Pequeño'],
                  example: {
                    text: ['My town is quiet small', 'Nukapa iagta kan achka anchi', 'Mi pueblo es bastante pequeño'],
                    audio: 'mytownisquitesmall.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'myhometownisveryquiet.png',
                  audio: 'quiet.mp3',
                  text: ['Quiet city', 'Iagta atun suma kausangapa', 'Ciudad tranquila'],
                  example: {
                    text: ['My hometown is very quiet', 'Nukapa iagta kan suma kausangapa', 'Mi ciudad natal es muy tranquila '],
                    audio: 'myhometownisveryquiet.mp3'
                  }
                },
                {
                  type: 'hearOptions',
                  title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                  audio: 'iliveinaquiettown.mp3',
                  options: ['busy', 'small', 'quiet'],
                  answer: 'quiet'
                }]
            },
            {
              title: ['Dialogue', 'Parlarikuna - Diálogo'],
              icon: 'dialogue.svg',
              quests: [{
                type: 'dialogue',
                options: ['Where', 'busy city', 'I live in', 'quiet'],
                answer: 'Where I live in quiet busy city',
                conversation: [{
                  name: 'Luisa',
                  msg: '___ do you live?',
                  img: 'diana.svg',
                  audio: 'wheredoyoulive.mp3',
                },
                {
                  name: 'Karen',
                  msg: 'I\'m from a small town near San José, and you?',
                  img: 'camila.svg',
                  audio: 'imfromasmalltownnearsanjoseandyou.mp3',
                },
                {
                  name: 'Luisa',
                  msg: '___ Florencia',
                  img: 'diana.svg',
                  audio: 'iliveinflorencia.mp3',
                },
                {
                  name: 'Karen',
                  msg: 'Is it ___?',
                  img: 'camila.svg',
                  audio: 'itisquiet.mp3',
                },
                {
                  name: 'Luisa',
                  msg: 'No! It is a very busy city',
                  img: 'diana.svg',
                  audio: 'noitsaverybusycity.mp3',
                },
                ]
              }]
            },
            {
              title: ['Grammar', 'ilkai rimaikuna - Gramática'],
              icon: 'books.svg',
              quests: [
                {
                  type: 'advice',
                  title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                  content: ['Ningapa chi kausadirukunamanda maipita taririnkuna chikuna pudinchi rimangapa chi rimaikuna chikuna kausadirukunamanda.', 'Para indicar el lugar donde se encuentra algo o alguien, podemos usar las preposiciones de lugar.'],
                  example: [{
                    text: 'We are at the school (Kachi iachaikudiru wasipi)',
                    translate: 'We are at the school (Estamos en el colegio)',
                  }]
                },
                {
                  type: 'advice',
                  title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                  content: ['Sumagllami kai "in" ruanchi, anchi iagtakunamanda, atun iagtakunamanda y achka atun iagtakuna', 'Normalmente utilizamos "in" con pueblos, ciudades y países.'],
                  example: [{
                    text: 'You live in Bogotá (Kan kausangui chi Bugatapi)',
                    translate: 'You live in Bogotá (Tú vives en Bogotá)',
                  }]
                },
                {
                  type: 'boolean',
                  title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                  img: 'helivesinatownnearmorelia.png',
                  audio: 'helivesinatownnearmorelia.mp3',
                  subtitle: 'He lives in a town near Morelia',
                  question: ['Ruanchimi kai "it" rimangapa chi achaka atun iagtamanda y iagta atunmanda" kaiua pudinchi rimangapa nuka mai uiñaskamanda.', 'Usamos "in" con países y ciudades'],
                  answer: 'true'
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'isyourschoolfarfromthecenter.png',
                  audio: 'farfrom.mp3',
                  text: ['Far from', ' Chi karuladumanda', 'Lejos de'],
                  example: [{
                    text: ['Is your school far from the centre?', '¿Kamba iachaikudiru wasi kan karu cintrumanda?', '¿Tu colegio está lejos del centro?'],
                    audio: 'isyourschoolfarfromthecenter.mp3',
                  }]
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'thechurchisnexttothepark.png',
                  audio: 'nextto.mp3',
                  text: ['Next to', 'Paipa ladulla', 'Al lado de'],
                  example: [{
                    text: ['The church is next to the park', 'Risadiru uasi kan parki ladulla', 'La iglesia está al lado del parque'],
                    audio: 'thechurchisnexttothepark.mp3',
                  }]
                },
                {
                  type: 'hearOptions',
                  title: ['Tupui imasa uiaska rimaita', 'Selecciona la palabra que escuches.'],
                  audio: 'isyourschoolfarfromthecenter.mp3',
                  options: ['Next to', 'Near', 'Far from'],
                  answer: 'Far from'
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'weareatthechagra.png',
                  audio: 'at.mp3',
                  text: ['We are at the chagra', 'Paipa ladulla', 'Al lado de'],
                  example: [{
                    text: ['We are at the chagra', 'Nukanchi  kaipi kanchi chagrapi', 'Nosotro estamos en la chagra'],
                    audio: 'weareatthechagra.mp3',
                  }]
                },
                {
                  type: 'advice',
                  title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                  content: ['Ruanchimi kai "at" sutipa chi luarwa', 'Usamos "at" con un lugar específico o exacto.'],
                  example: [{
                    text: 'We are at the chagra (Nukanchi  kaipi kanchi chagrapi)',
                    translate: 'We are at the chagra  (Nosotros estamos en la chagra)',
                  }]
                },
                {
                  type: 'boolean',
                  title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                  img: 'iamatmydesk.png',
                  audio: 'iamatmydesk.mp3',
                  subtitle: 'I am at my desk',
                  question: ['Ruanchimi kai "at" rimangapa chi achaka atun iagtamanda y iagta atunmanda.', 'Usamos "at" con países y ciudades.'],
                  answer: false
                },
                {
                  type: 'linkWords',
                  title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
                  options: ['I live near', 'He lives not', 'My house is next'],
                  items: ['far from the centre', 'the park', 'to the school'],
                  answer: ['the park', 'far from the centre', 'to the school']
                },
                {
                  type: 'chooseWord',
                  title: ['Api kimsa rimaikuna chi luarkunamanda kai rimaikunapata', 'Elige las tres preposiciones de lugar en las siguientes oraciones.'],
                  options: ['I am at the office', 'We live near the river', 'She is in the school'],
                  answer: 'at near in'
                }]
            },
            {
              id: 4,
              title: ['Test', 'Tapuikuna - Examen'],
              icon: 'exam.svg',
              quests: [
                {
                  type: 'hearOptions',
                  title: ['Uiai y tupui chi rimaikuna suma kunata churanagapa chi pisiskapi', 'Escucha y elige las palabras correctas para completar el espacio '],
                  audio: 'mytownisquitesmall.mp3',
                  options: ['small', 'big'],
                  answer: 'small'
                },
                {
                  type: 'linkWords',
                  title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresión con su traducción'],
                  options: ['They live in a town', 'She lives in a city', 'My house is near the river'],
                  items: ['Ellos viven en un pueblo', 'Ella vive en una ciudad', 'Mi casa está cerca al río'],
                  answer: ['Ellos viven en un pueblo', 'Ella vive en una ciudad', 'Mi casa está cerca al río']
                },
                {
                  type: 'completeOptions',
                  title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                  audio: '',
                  img: '',
                  question: ['She ___ in Yurayaco'],
                  options: ['live', 'lives'],
                  answer: 'lives'
                },
                {
                  type: 'organize',
                  title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                  options: ['Where', 'do', 'you', 'live', '?'],
                  answer: ['Where', 'do', 'you', 'live', '?']
                },
                {
                  type: 'write',
                  title: ['Fill the gap with the help of the audio.', 'Jundachi chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                  question: ['Florencia is a ___ city'],
                  img: '',
                  audio: 'florenciaisabusycity.mp3',
                  answer: 'busy' // Comprobar
                },
                {
                  type: 'write',
                  title: ['Complete the expression based on the picture.', 'Jundachi chi nikusta imasakaska chi imagin. - Completa la expresión de acuerdo a la imagen.'],
                  question: ['___ do you live'],
                  img: 'wheredoyoulive.png',
                  audio: '',
                  answer: 'Where' // Comprobar
                }]
            }
          ]
        }
        ]
      },
      {
        id: 5,
        title: ['¿Ima ruaspata kangui??', '¿A qué te dedicas?', 'What do you do?'],
        description: ['Rimangapa nukapa iachaikuskamanda - ruai "to do", "to work", "to study"', 'Hablar de nuestra profesión - Verbos "to do", "to work", "to study"', 'Talking about our job - Verbs "to do", "to work", "to study"'],
        lessons: [{
          lesson_id: 1,
          title: ['Trabajakuni chi…', 'Trabajo en…'],
          items: [
            {
              id: 0,
              title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
              icon: 'vocabulary.svg',
              quests: [
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'aquetededicas.png',
                  audio: 'aquetededicas.mp3',
                  text: ['What do you do?', '¿Ima ruaspata kangui?', '¿A qué te dedicas?']
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'trabajoen.png',
                  audio: 'trabajoen.mp3',
                  text: ['I work in...', 'Trabajakuni chi...', 'Trabajo en...'],
                  example: [{
                    text: ['I work in a school', 'Trabajakuni chi iachaikudirupi', 'Trabajo en un colegio.'],
                    audio: 'trabajoenuncolegio.mp3',
                  }]
                },
                {
                  type: 'simpleQuest',
                  title: ['Where does a teacher work?'],
                  audio: '',
                  img: 'dondetrabajaunprofesor.png',
                  options: ['Office', 'Restaurant', 'School'],
                  answer: 'School'
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'agriculture.png',
                  audio: 'agricultura.mp3',
                  text: ['Agriculture', 'Agricultura', 'Agricultura'],
                  example: [{
                    text: ['They work in agriculture', 'Paikuna trabajankuna agriculturaua', 'Ellos trabajan en agricultura'],
                    audio: 'ellostrabajanenagricultura.mp3',
                  }]
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'ellatrabajaenartesania.png',
                  audio: 'artesania.mp3',
                  text: ['Handicrafts', 'Artisaniakunaua', 'Artesanías'],
                  example: [{
                    text: ['She works in handicrafts', 'Pai trabajaku artisaniakunaua', 'Ella trabaja en artesanías'],
                    audio: 'ellatrabajaenartesania.mp3',
                  }]
                },
                {
                  type: 'advice',
                  title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                  content: ['Ningapa nuka maipa trabajakuni ruanchi kai ruaiua "to be” y ninchi:', 'Para indicar nuestro puesto de trabajo usamos el verbo “to be” y decimos:'],
                  example: [{
                    text: 'I am a teacher (Nuka kani iachachidur)',
                    translate: 'I am a teacher (Yo soy profesor)'
                  },
                  {
                    text: 'You are a farmer (Kan kangui agricultur)',
                    translate: 'You are a farmer (Tú eres agricultor)'
                  },
                  {
                    text: 'We are artisans (Nukanchi kanchi artisanukuna)',
                    translate: 'We are artisans (Nosotros somos artesanos)'
                  },
                  {
                    text: 'Are you a student? (¿Kangui iachaikudur?)',
                    translate: 'Are you a student? (Eres estudiante)'
                  }]
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'teacher.png',
                  audio: 'teacher.mp3',
                  text: ['Teacher', 'Iachachidur', 'Profesor/a'],
                  example: [{
                    text: ['I am a teacher', 'Kani iachachidur', 'Soy profesor'],
                    audio: 'iamateacher.mp3',
                  }]
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'doctor.png',
                  audio: 'doctor.mp3',
                  text: ['Doctor', 'Ductur', 'Médico'],
                  example: [{
                    text: ['He is a doctor', 'Pai kan ductur', 'Él es médico'],
                    audio: 'heisadoctor.mp3',
                  }]
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'ellatrabajaenartesania.png',
                  audio: 'artisan.mp3',
                  text: ['Artisan', 'Artisanu', 'Artesano/a'],
                  example: [{
                    text: ['Are you an artisan?', '¿Kangui artisanu?', '¿Eres artesana?'],
                    audio: 'areyouanartisan.mp3',
                  }]
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'student.png',
                  audio: 'student.mp3',
                  text: ['Student', 'Iachaikudur', 'Estudiante'],
                  example: [{
                    text: ['We are students', 'Kanchi iachaikudurkuna', 'Somos estudiantes'],
                    audio: 'wearestudents.mp3',
                  }]
                },
                {
                  type: 'simpleQuest',
                  title: ['Who works in a hospital?'],
                  audio: '',
                  img: 'hospital.png',
                  options: ['Teacher', 'Doctor', 'Artisan'],
                  answer: 'Doctor'
                }
              ],
            }, {
              id: 1,
              title: ['Dialogue', 'Parlarikuna - Diálogo'],
              icon: 'dialogue.svg',
              quests: [{
                type: 'dialogue',
                options: ['What', 'teacher', 'study', 'student'],
                answer: 'What teacher student',
                conversation: [{
                  name: 'Luisa',
                  msg: '___ do you do, Karen?',
                  img: 'diana.svg',
                  audio: 'dwhatdoyoudokaren.mp3',
                },
                {
                  name: 'Karen',
                  msg: 'I am a ___. How about you?',
                  img: 'camila.svg',
                  audio: 'diamateacherhowaboutyou.mp3',
                },
                {
                  name: 'Luisa',
                  msg: 'I work at the chagra but I am also a ___.',
                  img: 'diana.svg',
                  audio: 'diworkatthechagrabutiamalsoastudent.mp3',
                },
                {
                  name: 'Karen',
                  msg: 'Cool',
                  img: 'camila.svg',
                  audio: 'dcool.mp3',
                },
                ]
              }]
            },
            {
              id: 2,
              title: ['Grammar', 'ilkai rimaikuna - Gramática'],
              icon: 'books.svg',
              quests: [
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'westudyinyachaikury.png',
                  audio: 'study.mp3',
                  text: ['Study', 'Iachaikui', 'Estudiar'],
                  example: [{
                    text: ['We study in Yachaikury', 'Nukanchi iachaikunakunchi Yachaikuripi', 'Nosotros estudiamos en Yachaikury'],
                    audio: 'westudyinyachaikury.mp3',
                  }]
                },
                {
                  type: 'advice',
                  title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                  content: ['Kai kimsa ruaikuna sug rigcha ruarinkuna ruagpi "pai, pai".', 'Estos tres verbos cambian si se combinan con "Él, Ella".'],
                  example: [{
                    text: 'I do/work/study'
                  },
                  { text: 'You do/work/study' },
                  { text: 'He does/works/studies' },
                  { text: 'She does/works/studies' },
                  {
                    text: 'We do/work/study'
                  }]
                }]
            },
            {
              id: 3,
              title: ['Test', 'Tapuikuna - Examen'],
              icon: 'exam.svg',
              quests: [
                {
                  type: 'completeOptions',
                  title: ['Uiai y jundachi kai pisiskapi kai suma ruaiua "to study"', 'Escucha y completa el espacio con la forma correcta del verbo "to study"'],
                  audio: 'study.mp3',
                  img: 'iamastudent.png',
                  question: ['I am a student. I ___ English'],
                  options: ['study', 'studies'],
                  answer: 'study'
                },
                {
                  type: 'completeOptions',
                  title: ['Jundachi kai pisiskapi kai suma ruaiua "to do"', 'Completa el espacio con la forma correcta del verbo "to do"'],
                  audio: '',
                  img: 'whatdoeshedo.png',
                  question: ['What ___ he do?'],
                  options: ['do', 'does'],
                  answer: 'does'
                },
                {
                  type: 'completeOptions',
                  title: ['Uiai y jundachi kai pisiskapi kai suma ruaiua "to do"', 'Escucha y completa el espacio con la forma correcta del verbo "to do"'],
                  audio: 'theydonotspeakenglish.mp3',
                  img: 'theydonotspeakenglish.png',
                  question: ['They ___ speak English'],
                  options: ['do not', 'does not'],
                  answer: 'do not'
                },
                {
                  type: 'organize',
                  title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                  options: ['I', 'work', 'in', 'agriculture'],
                  answer: 'I work in agriculture'
                },
                {
                  type: 'completeOptions',
                  title: ['¿Imata ruaku Nelsy?', '¿En qué trabaja Nelsy?'],
                  audio: 'ellatrabajaenartesania.mp3',
                  img: 'ellatrabajaenartesania.png',
                  question: ['___'],
                  options: ['She works in agriculture', 'She works in handicrafts', 'She works in a hospital'],
                  answer: 'She works in handicrafts'
                },
                {
                  type: 'organize',
                  title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                  options: ['What', 'do', 'you', 'do?'],
                  answer: 'What do you do?'
                },
                {
                  type: 'write',
                  title: ['Complete the expression based on the picture.', 'Jundachi chi nikusta imasakaska chi imagin. - Completa la expresión de acuerdo a la imagen.'],
                  question: ['She ___ in a restaurant'],
                  img: 'sheworksinarestaurant.png',
                  audio: '',
                  answer: 'works' // Comprobar
                },
                {
                  type: 'linkWords',
                  title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
                  options: ['They are students', 'She works in a restaurant', 'She is an artisan'],
                  items: ['Ella trabaja en un restaurante', 'Ella es una artesana', 'Ellos son estudiantes'],
                  answer: 'Ellos son estudiantes Ella trabaja en un restaurante Ella es artesana'
                }
              ]
            }
          ]
        }]
      },
      {
        id: 6,
        title: ['¿Pudini ianapangapa?', '¿Puedo ayudarte?', 'Can I help you?'],
        description: ['Iachaikungapa kanchi kai rimaikuna "can", "could" y "may".', 'Aprenderemos las palabras "can", "could" y "may".', 'We will learn the words "can", "could" and "may".'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'canisaymyopinion.png',
                audio: 'can.mp3',
                text: ['Can', 'Pudinimi', 'Poder'],
                example: [{
                  text: ['Can I say my opinion?', '¿Ninga pudini nuka ima iuiakuskata?', '¿Puedo expresar mi opinión?'],
                  audio: 'canisaymyopinion.mp3',
                }]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'couldwedrinksomewater.png',
                audio: 'could.mp3',
                text: ['Could', 'Pudingami', 'Podría'],
                example: [{
                  text: ['Could you give me some water?', '¿Karauanga pudingui sug asiaia iaku?', '¿Podría darme un poco de agua?'],
                  audio: 'couldyougivemesomewater.mp3',
                }]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'mayigotothebathroom.png',
                audio: 'may.mp3',
                text: ['May', 'Pudingami', 'Podría'],
                example: [{
                  text: ['May I go to the bathroom?', '¿Pudingami ringapa bañuma?', '¿Podría ir al baño?'],
                  audio: 'mayigotothebathroom.mp3',
                }]
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Ruagura sug tapui "can", "could" o "may" tukuigura pudinchi churangapa ñugpa.', 'Cuando se formula una pregunta, "can", "could" o "may" siempre se colocan al principio.'],
                example: [{
                  text: 'Could you repeat? (¿Pudingui kuti ningapa?)',
                  translate: 'Could you repeat? (¿Podría repetir?)'
                },
                {
                  text: 'May I go to the bathroom? (¿Pudini ringapa bañuma?)',
                  translate: 'May I go to the bathroom? (¿Puedo ir al baño?)'
                },
                {
                  text: 'Can I participate? (¿Pudina participangapa?)',
                  translate: 'Can I participate? (¿Puedo participar?)'
                }
                ]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'canisitdown.png',
                audio: 'canisitdown.mp3',
                text: ['Can I sit down?', '¿Pudini tiaringapa?', '¿Puedo sentarme?']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'canigohome.png',
                audio: 'canigohome.mp3',
                text: ['Can I go home?', '¿Pudini ringapa uasima?', '¿Puedo ir a casa?']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'couldyougivemeyourphonenumer.png',
                audio: 'couldyougivemeyourphonenumber.mp3',
                text: ['Could you give me your phone number?', '¿Karauanga pudingui kamba numiru kaiadiru?', '¿Podría darme su número de celular?']
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['"May, can, could" manin kambiarin nukanchipa sitichikunaua  (Pai, Pai)" mañangapa  imapas', '"May, can, could" no cambian con los pronombres personales (El, ella)'],
                example: [
                  { text: 'She can sing (Ella puede cantar)' },
                  { text: 'He may be my friend (Él podría ser mi amigo)' },
                  { text: 'She could do it (Ella podría hacerlo)' },
                ]
              },
            ]
          },
          {
            id: 3,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'write',
                title: ['Kilkai ima uiakuskasina ', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'can.mp3',
                answer: 'can' // Comprobar
              },
              {
                type: 'completeOptions',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                audio: 'mayigotothebathroom.mp3',
                img: '',
                question: ['___ I go to the bathroom?'],
                options: ['Could', 'May'],
                answer: 'May'
              },
              {
                type: 'write',
                title: ['Kilkai ima uiakuskasina ', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'could.mp3',
                answer: 'could' // Comprobar
              },
            ]
          }
          ]
        }]
      },
      {
        id: 7,
        title: ['Animalkuna', 'Animales', 'Animals'],

        description: ['Rigsingapa nukanchipa animalkuna', 'Reconocer nuestros animales', 'Recognizing our animals'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'ant.png',
                audio: 'ant.mp3',
                text: ['Ant', 'Añangu', 'Hormiga']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'monkey.png',
                audio: 'monkey.mp3',
                text: ['Monkey', 'Chichiku', 'Mico']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'hen.png',
                audio: 'hen.mp3',
                text: ['Hen', 'Atahualpa', 'Gallina']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'fish.png',
                audio: 'fish.mp3',
                text: ['Fish', 'Chalua', 'Pez']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'armadillo.png',
                audio: 'armadillo.mp3',
                text: ['Armadillo', 'Matiuja', 'Armadillo']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'porcupine.png',
                audio: 'porcupine.mp3',
                text: ['Porcupine', 'Kuchichuzudu', 'Puercoespín']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'otter.png',
                audio: 'otter.mp3',
                text: ['Otter', 'Iaku alku', 'Nutria']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tortoise.png',
                audio: 'tortoise.mp3',
                text: ['Tortoise', 'Iakumama', 'Morrocoy']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tapir.png',
                audio: 'tapir.mp3',
                text: ['Tapir', 'Danta', 'Danta']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tiger.png',
                audio: 'tiger.mp3',
                text: ['Tiger', 'Tigri', 'Tigre']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'parrot.png',
                audio: 'parrot.mp3',
                text: ['Parrot', 'Uritu', 'Loro']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'pig.png',
                audio: 'pig.mp3',
                text: ['Pig', 'Kuchi', 'Cerdo']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'dog1.png',
                audio: 'dog.mp3',
                text: ['Dog', 'Alku', 'Perro']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'duck.png',
                audio: 'duck.mp3',
                text: ['Duck', 'Patu', 'Pato']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'snail.png',
                audio: 'snail.mp3',
                text: ['Snail', 'Churu', 'Caracol']
              },
            ]
          },
          {
            id: 3,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Uiai chi audiuta y api chi ainii sumata', 'Escucha el audio y escoge la respuesta correcta'],
                audio: 'itisadog.mp3',
                img: 'dog2.png',
                question: ['It is a ___'],
                options: ['dog', 'duck'],
                answer: 'dog'
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresiòn con su traducción'],
                options: ['Ant', 'Monkey', 'Hen'],
                items: ['Mico', 'Hormiga', 'Gallina'],
                answer: 'Hormiga Mico Gallina'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['It', 'is', 'a', 'fish'],
                answer: 'It is a fish'
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'tortoise.mp3',
                options: ['Tapir', 'Tortoise', 'Tiger'],
                answer: 'Tortoise'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: 'theduckiswhite.mp3',
                img: 'duck.mp3',
                question: ['The ___ is white'],
                options: ['Snail', 'Duck'],
                answer: 'Duck'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'parrot.mp3',
                answer: 'Parrot' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'pig.mp3',
                answer: 'Pig' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'tapir.mp3',
                answer: 'Tapir' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'armadillo.mp3',
                answer: 'Armadillo' // Comprobar
              },
              {
                type: 'simpleQuest',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'porcupine.mp3',
                img: 'porcupine.png',
                options: ['Parrot', 'Tapir', 'Porcupine'],
                answer: 'Porcupine'
              }]
          }]
        }]
      },
      {
        id: 8,
        title: ['¿Ima mukuita mas mikudurkangui?', '¿Cuál es tu comida favorita?', 'What is your favorite food?'],
        description: ['Rimasunchi imasa tiaska mikuikunamanda', 'Hablar sobre diferentes tipos de comida', 'Talking about different types of food'],
        lessons: [{
          lesson_id: 1,
          title: ['Mikuikuna', 'Alimentos'],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [{
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'chilli.png',
              audio: 'chilli.mp3',
              text: ['Chilli', 'Uchu', 'Ají']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'tomato.png',
              audio: 'tomato.mp3',
              text: ['Tomato', 'Tumati', 'Tomate']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'onion.png',
              audio: 'onion.mp3',
              text: ['Onion', 'Cibulla', 'Cebolla']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'cilantro.png',
              audio: 'cilantro.mp3',
              text: ['Cilantro', 'Cilantru', 'Cilantro']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'cassava.png',
              audio: 'cassava.mp3',
              text: ['Cassava', 'Rumu', 'Yuca']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'plantain.png',
              audio: 'plantain.mp3',
              text: ['Plantain', 'Platanu', 'Plátano']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'papaya.png',
              audio: 'papaya.mp3',
              text: ['Papaya', 'Papaya', 'Papaya']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'corn.png',
              audio: 'corn.mp3',
              text: ['Corn', 'Sara', 'Maíz']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'milkymaizepudding.png',
              audio: 'milkymaizepudding.mp3',
              text: ['Milky maize pudding', 'Sara lugru', 'Mazamorra']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'soup.png',
              audio: 'soup.mp3',
              text: ['Soup', 'Lugru', 'Sopa']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'peachpalmfruit.png',
              audio: 'peachpalmfruit.mp3',
              text: ['Peach palm fruit', 'Chuntaduru', 'Chontaduro']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'sugarcane.png',
              audio: 'sugarcane.mp3',
              text: ['Sugar cane', 'Uiru', 'Caña']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'orange.png',
              audio: 'orange.mp3',
              text: ['Orange', 'Naranja', 'Naranja']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'pineapple.png',
              audio: 'pineapple.mp3',
              text: ['Pineapple', 'Chiuilla', 'Piña']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'guava.png',
              audio: 'guava.mp3',
              text: ['Guava', 'Guaiaba', 'Guayaba']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'icecreambean.png',
              audio: 'icecreambean.mp3',
              text: ['Ice - cream bean', 'Pakai', 'Guama']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'avocado.png',
              audio: 'avocado.mp3',
              text: ['Avocado', 'Aguacati', 'Aguacate']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'salt.png',
              audio: 'salt.mp3',
              text: ['Salt', 'Kachi', 'Sal']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'sugar.png',
              audio: 'sugar.mp3',
              text: ['Sugar', 'Duci pulbu', 'Azúcar']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'water.png',
              audio: 'water.mp3',
              text: ['Water', 'Iaku', 'Agua']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'salt.png',
              audio: 'salt.mp3',
              text: ['Oil', 'Aceite', 'Aceite']
            }
            ]
          },
          {
            id: 3,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Uiai chi audiuta y api chi ainii sumata', 'Escucha el audio y escoge la respuesta correcta'],
                audio: 'chilliesaresohot.mp3',
                img: 'chilli.png',
                question: ['___ are so hot'],
                options: ['Corn', 'Chillies'],
                answer: 'Chillies'
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresiòn con su traducción'],
                options: ['Tomato', 'Onion', 'Cilantro'],
                items: ['Cebolla', 'Cilantro', 'Tomate'],
                answer: 'Tomate Cebolla Cilantro'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['I', 'like', 'milky maize pudding'],
                answer: 'It like milky maize pudding'
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'cassava.mp3',
                options: ['Plantain', 'Cassava', 'Papaya'],
                answer: 'Cassava'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: 'peachpalmfruitisdelicious.mp3',
                img: 'peachpalmfruit.png',
                question: ['___ is delicious'],
                options: ['Peach palm fruit', 'Sugar cane'],
                answer: 'Peach palm fruit'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['We', 'like', 'to', 'drink', 'orange', 'juice'],
                answer: 'We like to drink orange juice'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: 'pineapplesareyellow.mp3',
                img: 'pineapple.png',
                question: ['___ are yellow'],
                options: ['Pineapples', 'Avocado'],
                answer: 'Pineapples'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'guava.mp3',
                answer: 'Guava' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'icecreambean.mp3',
                answer: 'Ice-cream bean' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'avocado.mp3',
                answer: 'Avocado' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'salt.mp3',
                answer: 'Salt' // Comprobar
              },
              {
                type: 'simpleQuest',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'water.mp3',
                img: 'water.png',
                options: ['Oil', 'Sugar', 'Water'],
                answer: 'Water'
              }]
          }]
        }]
      },
      {
        id: 9,
        title: ['Manin taririni suma.', 'No me encuentro bien.', 'I do not feel good.'],
        description: ['Rimasunchi unguikunamanda', 'Hablar sobre enfermedades', 'Talking about diseases'],
        lessons: [{
          lesson_id: 1,
          title: ['Nukanchipa midicinakuna', 'Medicina tradicional'],
          items: [
            {
              title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
              icon: 'vocabulary.svg',
              quests: [
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'ifeelsick.png',
                  audio: 'sick.mp3',
                  text: ['Sick', 'Unguiua', 'Enfermo'],
                  example: {
                    text: ['I feel sick', 'Iuiachiuaku unguiua', 'Me siento enfermo'],
                    audio: 'ifeelsick.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'ihaveaheadache.png',
                  audio: 'ihaveaheadache.mp3',
                  text: ['I have a headache', 'Nanauaku uma', 'Me duele la cabeza'],
                  example: {
                    text: ['If you have a headache, take anamu.', 'Uma nanakugpi upiai anamu.', 'Si te duele la cabeza, toma anamú.'],
                    audio: 'ifyouhaveaheadache.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'iamnervous.png',
                  audio: 'iamnervous.mp3',
                  text: ['I am nervous', 'Kani manchaspa', 'Estoy nervioso'],
                  example: {
                    text: ['If you are nervous, take lemon balm.', 'Iukagpi manchia, upia turunjil.', 'Si tienes nervios, toma toronjil.'],
                    audio: 'ifyouarenervous.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'tohaveacough.png',
                  audio: 'tohaveacough.mp3',
                  text: ['To have a cough', 'Iukangui ujui', 'Tener tos'],
                  example: {
                    text: ['If you have a cough, take plantain.', 'Iukagpi ujui, upiai iantin.', 'Si tienes tos, toma llantén.'],
                    audio: 'ifyouhaveacough.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'fever.png',
                  audio: 'fever.mp3',
                  text: ['Fever', 'Rupai', 'Fiebre'],
                  example: {
                    text: ['If you have a fever, take descansé.', 'Iukagpi rupai, upiai discansii.', 'Si tienes fiebre, toma descansé.'],
                    audio: 'ifyouhaveafever.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'tonsillitis.png',
                  audio: 'tonsillitis.mp3',
                  text: ['Tonsillitis', 'Kunga nanai', 'Amigdalitis'],
                  example: {
                    text: ['If you have tonsillitis, take horsetail.', 'Iukagpi kunga nanai, upiai kabuiu chupa iaku.', 'Si tienes amigdalitis, toma cola de caballo.'],
                    audio: 'ifyouhavetonsillitis.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'earache.png',
                  audio: 'earache.mp3',
                  text: ['Earache', 'Ringri nanai', 'Dolor de oído'],
                  example: {
                    text: ['If you have an earache, take saint leaf.', 'Nanakugpi ringri, upiai alli panga.', 'Si te duele el oído,  toma hoja santa.'],
                    audio: 'ifyouhaveanearache.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'totakeapurge.png',
                  audio: 'totakeapurge.mp3',
                  text: ['To take a purge', 'Purgari', 'Purgarse'],
                  example: {
                    text: ['If you need to take a purge, take epazote.', 'Ministikugpi purgaringapa, upiai paiku.', 'Si necesitas purgarte, toma paico.'],
                    audio: 'ifyouneedtotakeapurge.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'boil.png',
                  audio: 'boil.mp3',
                  text: ['Boil', 'Nacidukuna', 'Nacido'],
                  example: {
                    text: ['If you have a boil, take aloe vera.', 'Kan iukagpi nacidukuna, upiai sabila iaku.', 'Si sufres de nacidos, toma sábila.'],
                    audio: 'ifyouhaveaboil.mp3'
                  }
                }
              ],
            },
            {
              id: 3,
              title: ['Test', 'Tapuikuna - Examen'],
              icon: 'exam.svg',
              quests: [
                {
                  type: 'completeOptions',
                  title: ['Uiai chi audiuta y api chi ainii sumata', 'Escucha el audio y escoge la respuesta correcta'],
                  audio: 'ifeelsick.mp3',
                  img: 'ifeelsick.png',
                  question: ['I feel ___'],
                  options: ['sick', 'nervous'],
                  answer: 'sick'
                },
                {
                  type: 'linkWords',
                  title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresiòn con su traducción'],
                  options: ['I have a headache', 'To have a cough', 'To take a purge'],
                  items: ['Purgarse', 'Tengo dolor de cabeza', 'Tener tos'],
                  answer: 'Tengo dolor de cabeza Tener tos Purgarse'
                },
                {
                  type: 'organize',
                  title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                  options: ['I', 'am', 'nervous'],
                  answer: 'I am nervous'
                },
                {
                  type: 'hearOptions',
                  title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                  audio: 'fever.mp3',
                  options: ['Tonsillitis', 'Earache', 'Fever'],
                  answer: 'Fever'
                },
                {
                  type: 'hearOptions',
                  title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                  audio: 'tonsillitis.mp3',
                  options: ['Boil', 'Tonsillitis', 'Fever'],
                  answer: 'Tonsillitis'
                },
                {
                  type: 'completeOptions',
                  title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                  audio: 'ifyouhaveaboil.mp3',
                  img: 'boil.png',
                  question: ['If you have a ___, take aloe vera.'],
                  options: ['Earache', 'Boil'],
                  answer: 'Boil'
                },
                {
                  type: 'organize',
                  title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                  options: ['To', 'take', 'a', 'purge'],
                  answer: 'To take a purge'
                },
                {
                  type: 'completeOptions',
                  title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                  audio: 'ifyouhaveacough.mp3',
                  img: 'tohaveacough.png',
                  question: ['To have a ___'],
                  options: ['cough', 'headache'],
                  answer: 'cough'
                },
                {
                  type: 'write',
                  title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                  question: ['___'],
                  img: '',
                  audio: 'boil.mp3',
                  answer: 'Boil' // Comprobar
                },
                {
                  type: 'write',
                  title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                  question: ['___'],
                  img: '',
                  audio: 'tonsillitis.mp3',
                  answer: 'Tonsillitis' // Comprobar
                },
                {
                  type: 'write',
                  title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                  question: ['___'],
                  img: '',
                  audio: 'fever.mp3',
                  answer: 'Fever' // Comprobar
                }
              ]
            }]
        }]
      },
      {
        id: 10,
        title: ['Luarkuna', 'Lugares', 'Places'],
        description: ['Luarkuna iachaikudirupa', 'Los lugares de mi colegio', 'The places of our school'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'school.png',
                audio: 'school.mp3',
                text: ['School', 'Iachaikudiru', 'Colegio']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'radiostation.png',
                audio: 'radiostation.mp3',
                text: ['Radio station', 'Rimaspa uilladiru uasi', 'Emisora']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'bathrooms.png',
                audio: 'bathrooms.mp3',
                text: ['Bathrooms', 'Cuirpu ruadiru uasi', 'Baños']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'bedrooms1.png',
                audio: 'bedrooms.mp3',
                text: ['Bedrooms', 'Uku puñudiru uasi', 'Dormitorios']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'store.png',
                audio: 'store.mp3',
                text: ['Store', 'Katidiru uasi', 'Tienda']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'classroom.png',
                audio: 'classrooms.mp3',
                text: ['Classrooms', 'Uku iachaikudirukuna', 'Salones']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'pitch.png',
                audio: 'pitch.mp3',
                text: ['Pitch', 'Pugiadiru luar', 'Cancha']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'restaurant.png',
                audio: 'restaurant.mp3',
                text: ['Restaurant', 'Ianudiru uasi', 'Restaurante']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'chagra.png',
                audio: 'chagra.mp3',
                text: ['Chagra', 'Tarpudiru luar', 'Chagra']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'river.png',
                audio: 'river.mp3',
                text: ['River', 'Atun iaku', 'Río']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'mountain.png',
                audio: 'mountain.mp3',
                text: ['Mountain', 'Sachuku', 'Montaña']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'sugarcane.png',
                audio: 'sugarcane.mp3',
                text: ['Seeds', 'Simillakuna', 'Semillas']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'forest.png',
                audio: 'forest.mp3',
                text: ['Forest', 'Atun sachuku', 'Bosque']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'crops.png',
                audio: 'crops.mp3',
                text: ['Crops', 'Tarpudukuna', 'Cultivos']
              },
            ]
          },
          {
            id: 3,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Uiai chi audiuta y api chi ainii sumata', 'Escucha el audio y escoge la respuesta correcta'],
                audio: 'myschoolisbeautiful.mp3',
                img: 'school.png',
                question: ['My ___ is beautiful'],
                options: ['pitch', 'school'],
                answer: 'school'
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresiòn con su traducción'],
                options: ['Radio station', 'Bathrooms', 'Bedrooms'],
                items: ['Baños', 'Emisora', 'Dormitorios'],
                answer: 'Emisora Baños Dormitorios'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['The', 'store', 'is', 'closed'],
                answer: 'The store is closed'
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'classrooms.mp3',
                options: ['Chagra', 'Crops', 'Classrooms'],
                answer: 'Classrooms'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: 'pitch.mp3',
                img: 'peachpalmfruit.png',
                question: ['We play in the ___'],
                options: ['pitch', 'forest'],
                answer: 'pitch'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['We', 'eat', 'in', 'the', 'restaurant'],
                answer: 'We eat in the restaurant'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: 'river.mp3',
                img: 'river.png',
                question: ['I like to swim in the ___'],
                options: ['River', 'Mountain'],
                answer: 'River'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'mountain.mp3',
                answer: 'Mountain' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'seeds.mp3',
                answer: 'Seeds' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'forest.mp3',
                answer: 'Forest' // Comprobar
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'crops.mp3',
                answer: 'Crops' // Comprobar
              }]
          }]
        }]
      },
      {
        id: 11,
        title: ['Iupaikuna', 'Números', 'Numbers'],
        description: ['Iachaikuspa iupangapa', 'Aprendiendo los números', 'Learning the numbers'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [{
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'numbers.png',
              audio: 'numbers.mp3',
              text: ['Numbers', 'Iupaikuna', 'Números']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'one.png',
              audio: 'one.mp3',
              text: ['One', 'Suglla', 'Uno']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'two.png',
              audio: 'two.mp3',
              text: ['Two', 'Iskai', 'Dos']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'three.png',
              audio: 'three.mp3',
              text: ['Three', 'Kimsa', 'Tres']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'four.png',
              audio: 'four.mp3',
              text: ['Four', 'Chusku', 'Cuatro']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'five.png',
              audio: 'five.mp3',
              text: ['Five', 'Pichka', 'Cinco']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'six.png',
              audio: 'six.mp3',
              text: ['Six', 'Sugta', 'Seis']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'seven.png',
              audio: 'seven.mp3',
              text: ['Seven', 'Kanchis', 'Siete']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'eight.png',
              audio: 'eight.mp3',
              text: ['Eight', 'Pusag', 'Ocho']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'nine.png',
              audio: 'nine.mp3',
              text: ['Nine', 'Iskun', 'Nueve']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'ten.png',
              audio: 'ten.mp3',
              text: ['Ten', 'Chunga', 'Diez']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'eleven.png',
              audio: 'eleven.mp3',
              text: ['Eleven', 'Chunga suglla', 'Once']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'twelve.png',
              audio: 'twelve.mp3',
              text: ['Twelve', 'Chunga iskai', 'Doce']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'thirteen.png',
              audio: 'thirteen.mp3',
              text: ['Thirteen', 'Chunga kimsa', 'Trece']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'fourteen.png',
              audio: 'fourteen.mp3',
              text: ['Fourteen', 'Chunga cusku', 'Catorce']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'fifteen.png',
              audio: 'fifteen.mp3',
              text: ['Fifteen', 'Chunga pichka', 'Quince']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'sixteen.png',
              audio: 'sixteen.mp3',
              text: ['Sixteen', 'Chunga sugta', 'Dieciséis']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'seventeen.png',
              audio: 'seventeen.mp3',
              text: ['Seventeen', 'Chunga kanchis', 'Diecisiete']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'eighteen.png',
              audio: 'eighteen.mp3',
              text: ['Eighteen', 'Chunga pusag', 'Dieciocho']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'nineteen.png',
              audio: 'nineteen.mp3',
              text: ['Nineteen', 'Chunga iskun', 'Diecinueve ']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'twenty.png',
              audio: 'twenty.mp3',
              text: ['Twenty', 'Iskai chunga', 'Veinte']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'thirty.png',
              audio: 'thirty.mp3',
              text: ['Thirty', 'Kimsa chunga', 'Treinta']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'forty.png',
              audio: 'forty.mp3',
              text: ['Forty', 'Chusku chunga', 'Cuarenta']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'fifty.png',
              audio: 'fifty.mp3',
              text: ['Fifty', 'Pichka chunga', 'Cincuenta']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'sixty.png',
              audio: 'sixty.mp3',
              text: ['Sixty', 'Sugta chunga', 'Sesenta']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'seventy.png',
              audio: 'seventy.mp3',
              text: ['Seventy', 'Kanchis chunga', 'Setenta']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'eighty.png',
              audio: 'eighty.mp3',
              text: ['Eighty', 'Pusag chunga', 'Ochenta']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'ninety.png',
              audio: 'ninety.mp3',
              text: ['Ninety', 'Iskun chunga', 'Noventa']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'onehundred.png',
              audio: 'onehundred.mp3',
              text: ['One hundred', 'Patsa', 'Cien']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'onethousand.png',
              audio: 'onethousand.mp3',
              text: ['One thousand', 'Waranga', 'Mil']
            },
            ]
          },
          {
            id: 3,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Uiai chi audiuta y api chi ainii sumata', 'Escucha el audio y escoge la respuesta correcta'],
                audio: 'onehundred.mp3',
                img: 'onehundred.png',
                question: ['One ___'],
                options: ['hundred', 'thousand'],
                answer: 'hundred'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'seventy.mp3',
                answer: 'Seventy' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'forty.mp3',
                options: ['Fourteen', 'Forty'],
                answer: 'Forty'
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresiòn con su traducción'],
                options: ['Fifteen', 'Nineteen', 'Thirty'],
                items: ['Treinta', 'Quince', 'Diecinueve'],
                answer: 'Quince Diecinueve Treinta'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['I', 'am', 'twenty'],
                answer: 'I am twenty'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'sixty.mp3',
                answer: 'Sixty' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'two.mp3',
                options: ['Two', 'Twelve', 'Ten'],
                answer: 'Two'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'eleven.mp3',
                answer: 'Eleven' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'fourteen.mp3',
                options: ['Fourteen', 'Forty'],
                answer: 'Fourteen'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'ninety.mp3',
                answer: 'Ninety' // Comprobar
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: 'one.mp3',
                img: 'one.png',
                question: ['There is ___ dog'],
                options: ['eleven', 'one'],
                answer: 'one'
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'eighty.mp3',
                options: ['Eighty', 'Eighteen'],
                answer: 'Eighty'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'three.mp3',
                answer: 'Three' // Comprobar
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresiòn con su traducción'],
                options: ['Twelve', 'Thirteen', 'Eighteen'],
                items: ['Dieciocho', 'Doce', 'Trece'],
                answer: 'Doce Trece Dieciocho'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'onethousand.mp3',
                answer: 'One thousand' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'thirteen.mp3',
                options: ['Thirteen', 'Thirteen'],
                answer: 'Thirteen'
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'two.mp3',
                options: ['Two', 'Twelve', 'Ten'],
                answer: 'Two'
              },
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gap.', 'Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi. - Elige las palabras correctas para completar el espacio.'],
                audio: 'eight.mp3',
                img: 'eight.png',
                question: ['She is ___'],
                options: ['eight', 'eighty'],
                answer: 'eight'
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'seventeen.mp3',
                options: ['Seventy', 'Seventeen'],
                answer: 'Seventeen'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'nine.mp3',
                answer: 'Nine' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'fifty.mp3',
                options: ['Fifty', 'Fifteen'],
                answer: 'Fifty'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'ten.mp3',
                answer: 'Ten' // Comprobar
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresiòn con su traducción'],
                options: ['Five', 'Six', 'Seven'],
                items: ['Siete', 'Cinco', 'Seis'],
                answer: 'Cinco Seis Siete'
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'sixteen.mp3',
                options: ['Sixteen', 'Sixty'],
                answer: 'Sixteen'
              },
              {
                type: 'write',
                title: ['lkilkai imasa uiaskasina', 'Escribe lo que oigas'],
                question: ['___'],
                img: '',
                audio: 'four.mp3',
                answer: 'Four' // Comprobar
              },
            ]
          }
          ]
        }]
      },
      {
        id: 12,
        title: ['¿Piuata kausangui?', ' ¿Con quién vives?', 'Who do you live with?'],
        description: ['Rimasunchi nukanchipa aillukunamanda', 'Hablar de nuestra familia', 'Talking about our family'],
        lessons: [{
          lesson_id: 1,
          title: ['Kausadurkuna aillukunaua', 'Miembros de la familia'],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [{
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'familymembers.png',
              audio: 'familymembers.mp3',
              text: ['Family members', 'Kausadurkuna aillukunaua', 'Miembros de la familia']
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'son.png',
              audio: 'mom.mp3',
              text: ['Mom', 'Mama', 'Mamá'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'dad.png',
              audio: 'dad.mp3',
              text: ['Dad', 'Taita', 'Papá'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'son.png',
              audio: 'mother.mp3',
              text: ['Mother', 'Mamita', 'Madre'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'dad.png',
              audio: 'father.mp3',
              text: ['Father', 'Taita', 'Padre'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'grandfather.png',
              audio: 'grandfather.mp3',
              text: ['Grandfather', 'Atuntaita', 'Abuelo'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'grandmother.png',
              audio: 'grandmother.mp3',
              text: ['Grandmother', 'Atunmama', 'Abuela'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'uncle.png',
              audio: 'uncle.mp3',
              text: ['Uncle', 'Tillu', 'Tío'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'aunt.png',
              audio: 'aunt.mp3',
              text: ['Aunt', 'Tilla', 'Tía'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'brother.png',
              audio: 'brother.mp3',
              text: ['Brother', 'Wauki', 'Hermano'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'sister.png',
              audio: 'sister.mp3',
              text: ['Sister', 'Pani/Ñaña', 'Hermana'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'cousin.png',
              audio: 'cousin.mp3',
              text: ['Cousin', 'Primu', 'Primo'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'cousinn.png',
              audio: 'cousin.mp3',
              text: ['Cousin', 'Prima', 'Prima'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'nephew.png',
              audio: 'nephew.mp3',
              text: ['Nephew', 'Subrinu', 'Sobrino'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'niece.png',
              audio: 'niece.mp3',
              text: ['Niece', 'Subrina', 'Sobrina'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'son.png',
              audio: 'son.mp3',
              text: ['Son', 'Wawa', 'Hijo'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'daughter.png',
              audio: 'daughter.mp3',
              text: ['Daughter', 'Hija', 'Hija'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'brotherinlaw.png',
              audio: 'brotherinlaw.mp3',
              text: ['Brother-in-law', 'Kuñadu', 'Cuñado'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'sisterinlaw.png',
              audio: 'sisterinlaw.mp3',
              text: ['Sister-in-law', 'Kuñada', 'Cuñada'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'fatherinlaw.png',
              audio: 'fatherinlaw.mp3',
              text: ['Father-in-law', 'Suigru', 'Suegro'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'motherinlaw.png',
              audio: 'motherinlaw.mp3',
              text: ['Mother-in-law', 'Suigra', 'Suegra'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'soninlaw.png',
              audio: 'soninlaw.mp3',
              text: ['Son-in-law', 'Irnu', 'Yerno'],
            },
            {
              type: 'definition',
              title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
              img: 'daughterinlaw.png',
              audio: 'daughterinlaw.mp3',
              text: ['Daughter-in-law', 'Nuira', 'Nuera'],
            },
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the correct words to fill the gaps.', 'Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi. - Elige las palabras correctas para completar los espacios en blanco.'],
                audio: 'heismyfatherinlaw.mp3',
                img: '',
                question: ['He is my ___'],
                options: ['father-in-law', 'brother-in-law'],
                answer: 'father-in-law'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['He', 'is', 'my', 'son'],
                answer: ['He', 'is', 'my', 'son']
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'sister.mp3',
                img: '',
                question: ['___'],
                answer: 'Sister' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['She is my ___'],
                img: '',
                audio: 'sheismydaughter.mp3',
                answer: 'daughter' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['She is my ___'],
                img: 'niece.png',
                audio: '',
                answer: 'niece' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'uncle.mp3',
                options: ['Aunt', 'Uncle'],
                answer: 'Uncle'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'cousin.mp3',
                img: '',
                question: ['___'],
                answer: 'Cousin' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'sisterinlaw.mp3',
                options: ['Sister-in-law', 'Brother-in-law'],
                answer: 'Sister-in-law'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'nephew.mp3',
                img: '',
                question: ['___'],
                answer: 'Nephew' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'aunt.mp3',
                img: '',
                question: ['___'],
                answer: 'Aunt' // Comprobar
              },
              {
                type: 'linkWords',
                title: ['Sugiapillachi chi nikuskata kamba traducciunwa', 'Une la expresiòn con su traducción'],
                options: ['Mother', 'Father', 'Grandmother', 'Grandfather'],
                items: ['Abuela', 'Padre', 'Abuelo', 'Madre'],
                answer: ['Madre', 'Padre', 'Abuela', 'Abuelo']
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'brother.mp3',
                img: '',
                question: ['___'],
                answer: 'Brother' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'brotherinlaw.mp3',
                options: ['Father-in-law', 'Brother-in-law'],
                answer: 'Brother-in-law'
              },
            ]
          }
          ]
        }]
      },
      {
        id: 13,
        title: ['Pintachikuna', 'Colores', 'Colors'],
        description: ['Nukapa alpamanda pintachikuna', 'Los colores de mi tierra', 'The colors of my land'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [
            {
              title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
              icon: 'vocabulary.svg',
              quests: [
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'colors.png',
                  audio: 'colors.mp3',
                  text: ['Colors', 'Pintachikuna', 'Colores'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'white.png',
                  audio: 'white.mp3',
                  text: ['White', 'Iura', 'Blanco'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'black.png',
                  audio: 'black.mp3',
                  text: ['Black', 'Iana', 'Negro'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'yellow.png',
                  audio: 'yellow.mp3',
                  text: ['Yellow', 'Killu', 'Amarillo'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'blue.png',
                  audio: 'blue.mp3',
                  text: ['Blue', 'Iaku rigcha', 'Azul'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'red.png',
                  audio: 'red.mp3',
                  text: ['Red', 'Puka', 'Rojo'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'brown.png',
                  audio: 'brown.mp3',
                  text: ['Brown', 'Alpa rigcha', 'Café'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'green.png',
                  audio: 'green.mp3',
                  text: ['Green', 'Virsdi', 'Verde'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'gray.png',
                  audio: 'grey.mp3',
                  text: ['Grey', 'Uchpusu', 'Gris'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'orange.png',
                  audio: 'orange.mp3',
                  text: ['Orange', 'Killusu', 'Naranja'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'purple.png',
                  audio: 'purple.mp3',
                  text: ['Purple', 'Muradu', 'Morado'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'cloudsarewhite.png',
                  audio: 'cloudsarewhite.mp3',
                  text: ['Clouds are white', 'Chi puiukuna kankuna iura', 'Las nubes son blancas'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'treesaregreen.png',
                  audio: 'treesaregreen.mp3',
                  text: ['Trees are green', 'Chi sachakuna kankuna virsdi', 'Los árboles son verdes'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'theskyisblue.png',
                  audio: 'theskyisblue.mp3',
                  text: ['The sky is blue', 'Chi cilu kan iaku rigcha', 'El cielo es azul'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'thesunisyellow.png',
                  audio: 'thesunisyellow.mp3',
                  text: ['The sun is yellow', 'Chi indi kan killu', 'El sol es amarillo'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'thesoilisblack.png',
                  audio: 'soilisblack.mp3',
                  text: ['Soil is black', 'Chi alpa kan iana', 'La tierra es negra'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'woodisbrown.png',
                  audio: 'woodisbrown.mp3',
                  text: ['Wood is brown', 'Chi madira kan alpa rigcha', 'La madera es café'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'therearepurpleflowers.png',
                  audio: 'therearepurpleflowers.mp3',
                  text: ['There are purple flowers', 'Tian tugtu muradu', 'Hay flores moradas'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'stonesaregrey.png',
                  audio: 'stonesaregrey.mp3',
                  text: ['Stones are grey', 'Chi rumikuna kankuna uchpusu', 'Las piedras son grises'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'orangefruits.png',
                  audio: 'therearealotoforangefruits.mp3',
                  text: ['Hay muchas frutas de color naranja', 'Tian achka duci muiukuna rigcha killusu', 'There are a lot of orange fruits'],
                },
              ]
            },
            {
              id: 4,
              title: ['Test', 'Tapuikuna - Examen'],
              icon: 'exam.svg',
              quests: [
                {
                  type: 'completeOptions',
                  title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                  audio: 'cloudsarewhite.mp3',
                  img: '',
                  question: ['Clouds are ___'],
                  options: ['black', 'white'],
                  answer: 'white'
                },
                {
                  type: 'organize',
                  title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                  options: ['Trees', 'are', 'green'],
                  answer: 'Trees are green'
                },
                {
                  type: 'write',
                  title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                  audio: 'blue.mp3',
                  img: '',
                  question: ['___'],
                  answer: 'Blue' // Comprobar
                },
                {
                  type: 'write',
                  title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                  question: ['Wood is ___'],
                  img: '',
                  audio: 'woodisbrown.mp3',
                  answer: 'brown' // Comprobar
                },
                {
                  type: 'write',
                  title: ['Complete the expression based on the picture.', 'Jundachi chi nikusta imasakaska chi imagin. - Completa la expresión de acuerdo a la imagen.'],
                  question: ['Stones are ___'],
                  img: '',
                  audio: '',
                  answer: 'grey' // Comprobar
                },
                {
                  type: 'hearOptions',
                  title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                  audio: 'red.mp3',
                  options: ['Red', 'Purple'],
                  answer: 'Red'
                },
                {
                  type: 'write',
                  title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                  audio: 'green.mp3',
                  img: '',
                  question: ['___'],
                  answer: 'Green' // Comprobar
                },
                {
                  type: 'hearOptions',
                  title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                  audio: 'orange.mp3',
                  options: ['Red', 'Orange'],
                  answer: 'Orange'
                },
                {
                  type: 'write',
                  title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                  audio: 'purple.mp3',
                  img: '',
                  question: ['___'],
                  answer: 'Purple' // Comprobar
                }
              ]
            }
          ]
        }]
      },
      {
        id: 14,
        title: [' Sutichi kuirpumanda', 'Partes del cuerpo', 'Parts of the body'],
        description: ['Nuka kuirpu', 'Mi cuerpo', 'My body'],
        lessons: [{
          lesson_id: 1,
          title: ['Kuirpu'],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'bodyparts.png',
                audio: 'bodyparts.mp3',
                text: ['Body parts', 'Sutichi kuirpumanda', 'Partes del cuerpo'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'head.png',
                audio: 'head.mp3',
                text: ['Head', 'Uma', 'Cabeza'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'shoulders.png',
                audio: 'shoulders.mp3',
                text: ['Shoulders', 'Palakuna', 'Hombros'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'knees.png',
                audio: 'knees.mp3',
                text: ['Knees', 'Kunkurkuna', 'Rodillas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'feet.png',
                audio: 'feet.mp3',
                text: ['Feet', 'Chakikuna', 'Pies'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'hands.png',
                audio: 'hands.mp3',
                text: ['Hands', 'Makikuna', 'Manos'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'eyes.png',
                audio: 'eyes.mp3',
                text: ['Eyes', 'Ñauikuna', 'Ojos'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'nose.png',
                audio: 'nose.mp3',
                text: ['Nose', 'Singa', 'Nariz'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'ears.png',
                audio: 'ears.mp3',
                text: ['Ears', 'Ringrikuna', 'Orejas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'legs.png',
                audio: 'legs.mp3',
                text: ['Legs', 'Changakuna', 'Piernas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'arms.png',
                audio: 'arms.mp3',
                text: ['Arms', 'Brazukuna', 'Brazos'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'neck.png',
                audio: 'neck.mp3',
                text: ['Neck', 'Kunga', 'Cuello'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'hair.png',
                audio: 'hair.mp3',
                text: ['Hair', 'Agcha', 'Cabello'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'back.png',
                audio: 'back.mp3',
                text: ['Back', 'Wasapuru', 'Espalda'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'eyebrows.png',
                audio: 'eyebrows.mp3',
                text: ['Eyebrows', 'Ñauikara milma', 'Cejas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'eyes.png',
                audio: 'eyelashes.mp3',
                text: ['Eyelashes', 'Ñaui milma', 'Pestañas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'nails.png',
                audio: 'nails.mp3',
                text: ['Nails', 'Sillu', 'Uñas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'teeth.png',
                audio: 'teeth.mp3',
                text: ['Teeth', 'Kirukuna', 'Dientes'],
              },
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'thisismynose.mp3',
                img: '',
                question: ['This is my ___'],
                options: ['nose', 'feet'],
                answer: 'nose'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'ears.mp3',
                img: '',
                question: ['___'],
                answer: 'Ears' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'nails.mp3',
                options: ['Legs', 'Nails'],
                answer: 'Nails'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'eyebrows.mp3',
                img: '',
                question: ['___'],
                answer: 'Eyebrows' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['These are my ___'],
                img: '',
                audio: 'thesearemylegs.mp3',
                answer: 'legs' // Comprobar
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['My', 'hair', 'is', 'brown'],
                answer: 'My hair is brown'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'feet.mp3',
                img: '',
                question: ['___'],
                answer: 'Feet' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'neck.mp3',
                options: ['Neck', 'Legs'],
                answer: 'Neck'
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I like my ___'],
                img: '',
                audio: 'ilikemyhands.mp3',
                answer: 'hands' // Comprobar
              },
              {
                type: 'write',
                title: ['Complete the expression based on the picture.', 'Jundachi chi nikusta imasakaska chi imagin. - Completa la expresión de acuerdo a la imagen.'],
                question: ['These are my ___'],
                img: 'eyes.png',
                audio: '',
                answer: 'eyes' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'eyelashes.mp3',
                options: ['Eyebrows', 'Eyelashes'],
                answer: 'Eyelashes'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'back.mp3',
                img: '',
                question: ['___'],
                answer: 'Back' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'teeth.mp3',
                options: ['Nails', 'Teeth'],
                answer: 'Teeth'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'arms.mp3',
                img: '',
                question: ['___'],
                answer: 'Arms' // Comprobar
              }
            ]
          }
          ]
        }]
      },
      {
        id: 15,
        title: ['Sutichi killakuna watamanda y puchakuna', 'Meses del año y días de la semana', 'Months of the year and days of the week'],
        description: ['¿Ima punchatakan kuna?', '¿Qué día es hoy?', 'What day is today?'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'monthsoftheyear.png',
                audio: 'monthsoftheyear.mp3',
                text: ['Months of the year', 'Killakuna watamanda', 'Meses del año']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'january.png',
                audio: 'january.mp3',
                text: ['January', 'Tarpui punchakuna killa', 'Enero'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'february.png',
                audio: 'february.mp3',
                text: ['February', 'Kusikui killa', 'Febrero'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'march.png',
                audio: 'march.mp3',
                text: ['March', 'Sami killa', 'Marzo'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'april.png',
                audio: 'april.mp3',
                text: ['April', 'Paiai killa', 'Abril'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'may.png',
                audio: 'may.mp3',
                text: ['May', 'Iuiarichidiru killa', 'Mayo'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'june.png',
                audio: 'june.mp3',
                text: ['June', 'Indiua kusikui killa', 'Junio'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'july.png',
                audio: 'july.mp3',
                text: ['July', 'Chaupirispa alpa tugtungapa killa', 'Julio'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'august.png',
                audio: 'august.mp3',
                text: ['August', 'Nukanchipa alpa killa', 'Agosto'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'september.png',
                audio: 'september.mp3',
                text: ['September', 'Tarpui killa', 'Septiembre'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'october.png',
                audio: 'october.mp3',
                text: ['October', 'Almai killa', 'Octubre'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'november.png',
                audio: 'november.mp3',
                text: ['November', 'Uañug uiarakunapa killa', 'Noviembre'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'december.png',
                audio: 'december.mp3',
                text: ['December', 'Alpata painii killa', 'Deciembre'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'daysoftheweek.png',
                audio: 'daysoftheweek.mp3',
                text: ['Days of the week', 'Simanamanda punchakuna', 'Días de la semana'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'monday.png',
                audio: 'monday.mp3',
                text: ['Monday', 'Lunis puncha', 'Lunes'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tuesday.png',
                audio: 'tuesday.mp3',
                text: ['Tuesday', 'Martis puncha', 'Martes'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'wednesday.png',
                audio: 'wednesday.mp3',
                text: ['Wednesday', 'Mierkulis puncha', 'Miércoles'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'thursday.png',
                audio: 'thursday.mp3',
                text: ['Thursday', 'Nukanchipa alpa killa', 'Jueves'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'friday.png',
                audio: 'friday.mp3',
                text: ['Friday', 'Viernis puncha', 'Viernes'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'saturday.png',
                audio: 'saturday.mp3',
                text: ['Saturday', 'Sabadu puncha', 'Sábado'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'sunday.png',
                audio: 'sunday.mp3',
                text: ['Sunday', 'Dumingu puncha', 'Domingo'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'holiday.png',
                audio: 'holiday.mp3',
                text: ['Holiday', 'Mana trabajai puncha', 'Festivo'],
              }
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'tudayissaturday.mp3',
                img: '',
                question: ['Today is ___'],
                options: ['Sunday', 'Saturday'],
                answer: 'Saturday'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'holiday.mp3',
                img: '',
                question: ['___'],
                answer: 'Holiday' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'thursday.mp3',
                options: ['Thursday', 'Tuesday'],
                answer: 'Thursday'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'friday.mp3',
                img: '',
                question: ['___'],
                answer: 'Friday' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['Tomorrow is ___'],
                img: '',
                audio: 'tomorrowissunday.mp3',
                answer: 'Sunday' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'july.mp3',
                options: ['September', 'July'],
                answer: 'July'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'april.mp3',
                img: '',
                question: ['___'],
                answer: 'April' // Comprobar
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['I', 'was', 'born', 'in', 'January'],
                answer: 'I was born in January'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'december.mp3',
                img: '',
                question: ['___'],
                answer: 'December' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'september.mp3',
                options: ['September', 'July'],
                answer: 'September'
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['She was born in ___'],
                img: '',
                audio: 'shewasborninoctober.mp3',
                answer: 'October' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'november.mp3',
                img: '',
                question: ['___'],
                answer: 'November' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['She arrived in ___'],
                img: '',
                audio: 'shearrivedinmay.mp3',
                answer: 'May' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'february.mp3',
                options: ['January', 'February'],
                answer: 'February'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'june.mp3',
                img: '',
                question: ['___'],
                answer: 'June' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'august.mp3',
                options: ['October', 'August'],
                answer: 'August'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'march.mp3',
                img: '',
                question: ['___'],
                answer: 'March' // Comprobar
              },
            ]
          }
          ]
        }]
      },
      {
        id: 16,
        title: ['¡kan tukuigura ruadiru!', '¡Es Costumbre!', 'It is usual!'],
        description: ['Riamasunchi nukanchipa kausaikunamanda y ruaikunamanda', 'Hablar sobre tradiciones y costumbres', 'Talking about traditions and customs'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'mothertongue.png',
                audio: 'mothertongue.mp3',
                text: ['Mother tongue', 'Nukanchipa simi', 'Lengua materna']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'earth.png',
                audio: 'earth.mp3',
                text: ['Earth', 'Alpa', 'Tierra'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'air.png',
                audio: 'air.mp3',
                text: ['Air', 'Waira', 'Aire'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'water.png',
                audio: 'water.mp3',
                text: ['Water', 'Iaku', 'Agua'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'rainbow.png',
                audio: 'rainbow.mp3',
                text: ['Rainbow', 'Kuichi', 'Arcoiris'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'fire.png',
                audio: 'fire.mp3',
                text: ['Fire', 'Sindi', 'Fuego'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'sun.png',
                audio: 'sun.mp3',
                text: ['Sun', 'Indi', 'Sol'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'stars.png',
                audio: 'stars.mp3',
                text: ['Stars', 'Istrillakuna', 'Estrellas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'moon.png',
                audio: 'moon.mp3',
                text: ['Moon', 'Killa', 'Luna'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'sky.png',
                audio: 'sky.mp3',
                text: ['Sky', 'Cilu', 'Cielo'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'rain.png',
                audio: 'rain.mp3',
                text: ['Rain', 'Tamia', 'Lluvia'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'woman.png',
                audio: 'woman.mp3',
                text: ['Woman', 'Warmi', 'Mujer'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'man.png',
                audio: 'man.mp3',
                text: ['Man', 'Kari', 'Hombre'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'boy.png',
                audio: 'boy.mp3',
                text: ['Boy', 'Uaua', 'Niño'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'girl.png',
                audio: 'girl.mp3',
                text: ['Girl', 'Warmi uaua', 'Niña'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'oldman.png',
                audio: 'oldman.mp3',
                text: ['Old man', 'Ruku', 'Anciano'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'oldwoman.png',
                audio: 'oldwoman.mp3',
                text: ['Old woman', 'Auila', 'Anciana'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'teenager.png',
                audio: 'teenager.mp3',
                text: ['Teenager', 'Musitu', 'Jóven'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'wiseman.png',
                audio: 'wiseman.mp3',
                text: ['Wise man', 'Pudi', 'Sabio'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'taita.png',
                audio: 'fatherr.mp3',
                text: ['Father', 'Iacha ginti', 'Taita'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'indigenous.png',
                audio: 'indigenous.mp3',
                text: ['Indigenous', 'Nukanchi ginti', 'Indígenas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'education.png',
                audio: 'education.mp3',
                text: ['Education', 'Iachaikuna', 'Educación'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tolearn.png',
                audio: 'tolearn.mp3',
                text: ['To learn', 'Iachaikui', 'Aprender'],
              }
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'ourmothertongueisinga.mp3',
                img: '',
                question: ['Our ___ is Inga'],
                options: ['culture', 'mother tongue'],
                answer: 'mother tongue'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'rainbow.mp3',
                img: '',
                question: ['___'],
                answer: 'Rainbow' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'girl.mp3',
                options: ['Earth', 'Girl'],
                answer: 'Girl'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'earth.mp3',
                img: '',
                question: ['___'],
                answer: 'Earth' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['He is a ___'],
                img: '',
                audio: 'heisawiseman.mp3',
                answer: 'wise man' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'air.mp3',
                options: ['Air', 'Fire'],
                answer: 'Air'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'woman.mp3',
                img: '',
                question: ['___'],
                answer: 'Woman' // Comprobar
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['She', 'is', 'an', 'old', 'woman'],
                answer: 'She is an old woman'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'water.mp3',
                img: '',
                question: ['___'],
                answer: 'Water' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'fatherr.mp3',
                options: ['Rain', 'Father'],
                answer: 'Father'
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['That is the ___'],
                img: '',
                audio: 'thatisthemoon.mp3',
                answer: 'moon' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'teenager.mp3',
                img: '',
                question: ['___'],
                answer: 'Teenager' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['He is an ___'],
                img: '',
                audio: 'heisanoldman.mp3',
                answer: 'old man' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'rain.mp3',
                options: ['Rain', 'Sun'],
                answer: 'Rain'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'stars.mp3',
                img: '',
                question: ['___'],
                answer: 'Stars' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'boy.mp3',
                options: ['Boy', 'Girl'],
                answer: 'Boy'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'sky.mp3',
                img: '',
                question: ['___'],
                answer: 'Sky' // Comprobar
              }
            ]
          }
          ]
        }]
      },
      {
        id: 17,
        title: ['Sistema solar', 'Sistema solar', 'Solar system'],
        description: ['Rimasunchi sistema solarmanda', 'Hablar sobre el sistema solar', 'Talking about the solar system'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'universe.png',
                audio: 'theuniverse.mp3',
                text: ['The universe', 'Tukui mundu', 'El universo ']
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'galaxy.png',
                audio: 'galaxy.mp3',
                text: ['Galaxy', 'Galaxia', 'Galaxia'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'thesolarsystem.png',
                audio: 'thesolarsystem.mp3',
                text: ['The solar system', 'Chi sitema solar', 'El sistema solar'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'theearth.png',
                audio: 'theearth.mp3',
                text: ['The Earth', 'Kai alpa', 'La Tierra'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'thestars.png',
                audio: 'thestars.mp3',
                text: ['The stars', 'Kai estrellakuna', 'Las estrellas'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'gravedad.png',
                audio: 'gravity.mp3',
                text: ['Gravity', 'Gravedad', 'Gravedad'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'themoon.png',
                audio: 'themoon.mp3',
                text: ['The moon', 'Kai killa', 'La luna'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'themilkyway.png',
                audio: 'themilkyway.mp3',
                text: ['The milky way', 'Kai kausai lactea', 'La vía láctea'],
              }
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'ourgalaxyiscalled.mp3',
                img: '',
                question: ['Our galaxy is called ___'],
                options: ['Milky way', 'Gravity'],
                answer: 'Milky way'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'theuniverse.mp3',
                img: '',
                question: ['The ___'],
                answer: 'The universe' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'galaxy.mp3',
                img: '',
                question: ['___'],
                answer: 'Galaxy' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'themoon.mp3',
                img: '',
                question: ['The ___'],
                answer: 'The moon' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['The ___'],
                img: '',
                audio: 'thesolarsystem.mp3',
                answer: 'solar system' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'theearth.mp3',
                options: ['The Earth', 'The sun'],
                answer: 'The Earth'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'gravity.mp3',
                img: '',
                question: ['___'],
                answer: 'Gravity' // Comprobar
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['The', 'starts', 'are', 'beautiful'],
                answer: 'The starts are beautiful'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'thesun.mp3',
                img: '',
                question: ['___'],
                answer: 'The sun' // Comprobar
              }
            ]
          }
          ]
        }]
      },
      {
        id: 18,
        title: ['Rimaikuna timpukunamanda', 'Preposiciones de tiempo', 'Prepositions of time'],
        description: ['Rimasunchi  kai timpukunamanda', 'Hablar sobre periodos de tiempo', 'Talking about periods of time'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kai rimaikuna timpukunamandau pudinchi ningapa imagurata chi pasarin', 'Las preposiciones de tiempo nos permiten indicar el momento en que algo sucede'],
                example: [{
                  text: 'I get up at 6 a.m. every morning (Atarini 6:00 tukui tutata)',
                  translate: 'I get up at 6 a.m. every morning (Me levanto a las 6:00 cada mañana)'
                },
                {
                  text: 'On my birthday we usually go to a restaurant (Nukapa wata cumpligura ridurkanchi ianudiru wasima)',
                  translate: 'On my birthday we usually go to a restaurant (En mi cumpleaños solemos ir a un restaurante)'
                },
                {
                  text: 'We will go on vacation in December (Iugsisunchin samringapa alpata painii killa)',
                  translate: 'We will go on vacation in December (Saldremos a vacaciones en diciembre)'
                }
                ]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'mymeetingisat10am.png',
                audio: 'at.mp3',
                text: ['At', 'Chi', 'En'],
                example: {
                  text: ['My meeting is at 10:00 a.m. today', 'Nuakapa tandaringapa kan 10. a.m kuna', 'Mi reunión es a las 10:00 a.m. hoy'],
                  audio: 'mymeetingisattenamtoday.mp3'
                }
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kai rimaikuna "at" kaiua pudirin ningapaga hurakuna, samari punchakuna y sug timpukunapas.', 'La preposición "at" se usa para indicar la hora, las vacaciones y otros periodos de tiempo específicos.'],
                example: [{
                  text: 'At 5 o\'clock (Kagura pichka inpuntu kagura)',
                  translate: 'At 5 o\'clock (A las cinco en punto)'
                },
                {
                  text: 'At the moment (Kunagura)',
                  translate: 'Kunagura (En este momento)'
                },
                {
                  text: 'At night (Tutama)',
                  translate: 'At night (Por la noche)'
                }
                ]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'thestoreisclosedatthemoment.png',
                audio: 'atthemoment.mp3',
                text: ['At the moment', 'Kunagura', 'En el momento'],
                example: {
                  text: ['The store is closed at the moment', 'Katudiri tapadu kan kunagura', 'La tienda está cerrada en el momento'],
                  audio: 'thestoreisclosedatthemoment.mp3'
                }
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Nidiru kan pas "at breakfast" (tutata mikukugura), "at lunch" (chaupipuncha mikukugura) y "at dinner" (chisi mikukugura).', 'También se dice "at breakfast" (en el desayuno), "at lunch" (en la comida) y "at dinner" (en la cena).'],
                example: [{
                  text: 'I like listening to music at dinner (Me gusta escuchar música en la cena)'
                }],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'idontworkonsundays.png',
                audio: 'on.mp3',
                text: ['On', 'Chi', 'En'],
                example: {
                  text: ['I don\'t work on Sundays', 'Manin trabajanchi dumingu puncha', 'No trabajo los domingos'],
                  audio: 'idontworkonsundays.mp3'
                }
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kai rimaikuna "on" pudinchi ruangapa simana punchakunaua chimandapas sutipa fichakunau.', 'La preposición "on" se usa con los días de la semana o con fechas concretas.'],
                example: [{
                  text: 'My birthday is on October 5th (Nukapa wata cumplikuni kai pichka kai almai killa)',
                  translate: 'My birthday is on October 5th (Mi cumpleaños es el 5 de octubre)'
                },
                {
                  text: 'I will travel to Florencia on Sunday (Ringapakani kai dumingu flurinciama)',
                  translate: 'I will travel to Florencia on Sunday (Viajaré el domingo para Florencia)'
                }
                ]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'onmybirthday.png',
                audio: 'onmybirthday.mp3',
                text: ['On my birthday', 'Nukapa cumpliañupi', 'En mi cumpleaños'],
                example: {
                  text: ['We always go to fish on my birthday', 'Sutipa ringapa knchi nukapa cumpliañumanda', 'Siempre vamos a pescar en mi cumpleaños'],
                  audio: 'wealwaysgotofishonmybirthday.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'mybirthdayisinmay.png',
                audio: 'in.mp3',
                text: ['In', 'Chi', 'En'],
                example: {
                  text: ['My birthday is in May', 'Nuka wata cumplikunimi iuiarichidiru killa', 'Mi cumpleaños es en mayo'],
                  audio: 'mybirthdayisinmay.mp3'
                }
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kai rimaikuna "in" kaiua ninga pudinchi misiskuna, kambiaridukuna, watakuna y sug mas suni timpukuna.', 'La preposición "in" se usa con meses, estaciones, años y periodos de tiempo más largos.'],
                example: [{
                  text: 'In the morning/In the afternoon/In the evening (Tutamanda/Chisima/Tutama)',
                  translate: 'In the morning/In the afternoon/In the evening (Por la mañana/Por la tarde/Por la noche)'
                },
                {
                  text: 'In December/In June (Kai alpata painii killa/Kai indiua kusikui killa)',
                  translate: 'In December/In June (En diciembre/En junio)'
                }
                ]
              },
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'boolean',
                title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                img: '',
                audio: 'onmonday.mp3',
                subtitle: 'On Monday',
                question: ['"On" pudirin kaiua ningapa hurata', '"On" se usa para indicar la hora'],
                answer: false
              },
              {
                type: 'boolean',
                title: ['True or false?', '¿Sumakan o mana sumakan? - ¿Verdadero o falso?'],
                img: 'thestoreisclosedatthemoment.png',
                audio: 'thestoreisclosedatthemoment.mp3',
                subtitle: 'The store is closed at the moment',
                question: ['"At" pudirin rimanga kaiua kagura sutipa', '"At" se usa para hablar de un momento concreto.'],
                answer: true
              },
              {
                type: 'hearOptions',
                title: ['Uiai y tupui chi rimaikuna suma kunata churanagapa chi pisiskapi', 'Escucha y elige las palabras correctas para completar el espacio '],
                audio: 'mybirthdayisinmay.mp3',
                options: ['On', 'In'],
                answer: 'In'
              },
              {
                type: 'linkWords',
                title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
                options: ['My birthday is', 'I get up', 'I will travel'],
                items: ['at 6 a.m.', 'in May', 'on Monday'],
                answer: ['in May', 'at 6 a.m.', 'on Monday']
              },
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: '',
                img: '',
                question: ['She works ___ the morning'],
                options: ['in', 'at'],
                answer: 'in'
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['I', 'get', 'up', 'at', '6', 'a.m.'],
                answer: ['I', 'get', 'up', 'at', '6', 'a.m.']
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I like to drink coffee ___ breakfast'],
                img: '',
                audio: 'iliketodrinkcoffeeatbreakfast.mp3',
                answer: 'at' // Comprobar
              },
            ]
          }
          ]
        }]
      },
      {
        id: 19,
        title: ['¿Ima hurata kan?', '¿Qué hora es?', 'What time is it?'],
        description: ['Uillai kuna puncha', 'Dar la hora', 'Telling the time'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [
            {
              id: 1,
              title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
              icon: 'vocabulary.svg',
              quests: [
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'itis3oclock.png',
                  audio: 'itisthreeoclock.mp3',
                  text: ['It is 3 o\'clock', 'Tin kan kimsa in puntu hura', 'Son las tres en punto'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'itishalfpastnine.png',
                  audio: 'itishalfpastnine.mp3',
                  text: ['It is half past nine', 'Tin kan iskun y chaupi hura', 'Son las nueve y media'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'itis12midnight.png',
                  audio: 'itistwelvemidnight.mp3',
                  text: ['It is 12 midnight', 'Tin kan chaupi tuta chunga iskai  hura', 'Son las doce de la noche'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'itis12midnight.png',
                  audio: 'itistwelvenoon.mp3',
                  text: ['It is 12 noon', 'Tin kan chaupi puncha, chunga iskai hura', 'Son las doce del mediodía'],
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'itis5oclock.png',
                  audio: 'oclock.mp3',
                  text: ['O\'clock', 'Kan inpuntu', 'En punto'],
                  example: {
                    text: ['It is 5 o\'clock', 'Tin kan hura pichka inpuntu', 'Son las cinco en punto'],
                    audio: 'itisfiveoclock.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'itshalfpast2.png',
                  audio: 'halfpast.mp3',
                  text: ['Half past', 'chaupi hura', 'y media'],
                  example: {
                    text: ['It is half past two', 'Tin kan hura iskai chaupi hura', 'Son las dos y media'],
                    audio: 'itishalfpasttwo.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'itsquarterpastseven.png',
                  audio: 'quarterpast.mp3',
                  text: ['Quarter past', 'y cuartu', 'y cuarto'],
                  example: {
                    text: ['It\'s quarter past seven', 'Tin kan kanchis y cuartu hura', 'Son las siete y cuarto'],
                    audio: 'itisquarterpastseven.mp3'
                  }
                },
                {
                  type: 'definition',
                  title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                  img: 'itsquartertoeight.png',
                  audio: 'quarterto.mp3',
                  text: ['Quarter to', 'Pisin sug cuartu', 'Un cuarto para'],
                  example: {
                    text: ['It\'s quarter to eight', 'Pisin sug cuartu pusag huramanda', 'Falta un cuarto para las ocho'],
                    audio: 'itisquartertoeight.mp3'
                  }
                },
                {
                  type: 'advice',
                  title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                  content: ['Rimaikuna"to" y "past" ninakun minutukunata rinkuna manara hurata nigpi. Kauai kunakugara kauachikunata.', 'Las palabras "to" y "past" indican si los minutos van antes o después de la hora. Echa un vistazo a los siguientes ejemplos.'],
                  example: [{
                    text: 'It is ten past four (Tin kan hura chusku y chunga)',
                    translate: 'It is ten past four (Son las cuatro y diez)'
                  },
                  {
                    text: 'It is ten to four (Pisin chunga minutukuna chusku huramanda)',
                    translate: 'It is ten to four (Faltan diez minutos para las cuatro)'
                  }
                  ]
                }
              ]
            },
            {
              id: 4,
              title: ['Test', 'Tapuikuna - Examen'],
              icon: 'exam.svg',
              quests: [
                {
                  type: 'completeOptions',
                  title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                  audio: 'itisthreeoclock.mp3',
                  img: '',
                  question: ['It is three ___'],
                  options: ['ten', 'o\'clock'],
                  answer: 'o\'clock'
                },
                {
                  type: 'write',
                  title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                  audio: 'quarterto.mp3',
                  img: '',
                  question: ['___'],
                  answer: 'Quarter to' // Comprobar
                },
                {
                  type: 'hearOptions',
                  title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                  audio: 'halfpast.mp3',
                  options: ['Half past', 'three'],
                  answer: 'Half past'
                },
                {
                  type: 'write',
                  title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                  audio: 'quarterpast.mp3',
                  img: '',
                  question: ['___'],
                  answer: 'Quarter past' // Comprobar
                },
                {
                  type: 'write',
                  title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                  question: ['It is ___ seven'],
                  img: '',
                  audio: 'itisquarterpastseven.mp3',
                  answer: 'quarter past' // Comprobar
                },
                {
                  type: 'write',
                  title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                  audio: 'midnight.mp3',
                  img: '',
                  question: ['___'],
                  answer: 'Midnight' // Comprobar
                },
                {
                  type: 'organize',
                  title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                  options: ['It', 'is', 'ten', 'to', 'nine'],
                  answer: 'It is ten to nine'
                },
                {
                  type: 'write',
                  title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                  audio: 'noon.mp3',
                  img: '',
                  question: ['___'],
                  answer: 'Noon' // Comprobar
                },
              ]
            }
          ]
        }]
      },
      {
        id: 20,
        title: ['¿Imasatakan kamba uasi?', '¿Cómo es tu casa?', 'How is your house?'],
        description: ['Ni imata iukan kamba uasi', 'Describir nuestra casa', 'Describing our house'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'house.mp3',
                text: ['House', 'Uasi', 'Casa'],
                example: {
                  text: ['I live in a big house', 'Kausakuna uasi atunpi', 'Vivo en una casa grande'],
                  audio: 'iliveinabighouse.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'old.mp3',
                text: ['Old', 'Ruku/Ruku', 'Viejo/Vieja'],
                example: {
                  text: ['They live in an old house', 'Paikuna kausanakun uasi rukupi', 'Ellos viven en una casa vieja'],
                  audio: 'theyliveinanoldhouse.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'livingroom.mp3',
                text: ['Livingroom', 'Uku samaridiru', 'Sala'],
                example: {
                  text: ['We receive visits in the living room', 'Kunachi chaskinchi samudurkunata pasiangapa uku samaridirupi', 'Nosotros recibimos las visitas en la sala'],
                  audio: 'wereceivevisitsin.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'bedroom.mp3',
                text: ['Bedroom', 'Uku puñudiru', 'Dormitorio'],
                example: {
                  text: ['My school has bedrooms', 'Nukapa iachaikudiru iukan iskai uku puñudiru', 'Mi colegio tiene dormitorios'],
                  audio: 'myschoolhasbedrooms.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'kitchen.mp3',
                text: ['Kitchen', 'Uku ianudiru', 'Cocina'],
                example: {
                  text: ['The kitchen is a bit big', 'Uku ianudirukan sug asiaia atun', 'La cocina es un poco grande'],
                  audio: 'thekitchenisabitbig.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'bathroom.mp3',
                text: ['Bathroom', 'Kuirpuruadiru', 'Baño'],
                example: {
                  text: ['The bathroom is very small', 'Kuirpuruadiru kan anchi', 'El baño es muy pequeño'],
                  audio: 'thebathroomisverysmall.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'nice.mp3',
                text: ['Nice', 'Sumaiuiachi', 'Agradable'],
                example: {
                  text: ['I live in a nice house', 'Sumaiuiachi uasipin kausakuni', 'Vivo en una casa agradable'],
                  audio: 'iliveinanicehouse.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'cosy.mp3',
                text: ['Cosy', 'Iacharingapa', 'Acogedor'],
                example: {
                  text: ['My school is very cosy', 'Nukapa iachaikudiru kan ialli iacharingapa', 'Mi colegio es muy acojedor'],
                  audio: 'myschoolisverycosy.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'quite.mp3',
                text: ['Quite', 'Ialli achka', 'Bastante'],
                example: {
                  text: ['The restaurant is quite small', 'Ianudiru uasi kan ialli anchishitu', 'El restaurante es bastante pequeño'],
                  audio: 'therestaurantisquitesmall.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'very.mp3',
                text: ['Very', 'Ialli', 'Muy'],
                example: {
                  text: ['We live in a very big school', 'Kausanakunchi iachaikudiru ialli atumpi', 'Vivimos en un colegio muy grande'],
                  audio: 'weliveinaverybigschool.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: '',
                audio: 'really.mp3',
                text: ['Really', 'Sutipami', 'Realmente'],
                example: {
                  text: ['My town is really beautiful', 'Nukapa iagta kan sutipa suma rigcha', 'Mi pueblo es realmente bonito'],
                  audio: 'mytownisreallybeautiful.mp3'
                }
              }
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'myschoolisverycosy.mp3',
                img: '',
                question: ['My school is very ___'],
                options: ['nice', 'cosy'],
                answer: 'cosy'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'nice.mp3',
                img: '',
                question: ['___'],
                answer: 'Nice' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'really.mp3',
                options: ['Very', 'Really'],
                answer: 'Really'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'old.mp3',
                img: '',
                question: ['___'],
                answer: 'Old' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I live in a ___ house'],
                img: '',
                audio: 'iliveinabighouse.mp3',
                answer: 'big' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'quite.mp3',
                img: '',
                question: ['___'],
                answer: 'Quite' // Comprobar
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['We', 'live', 'in', 'a', 'very', 'big', 'school'],
                answer: 'We live in a very big school'
              },
            ]
          }
          ]
        }]
      },
      {
        id: 21,
        title: ['¿Imasata iuiachiku?', '¿Cómo te sientes?', 'How do you feel?'],
        description: ['Ningapa imasata iuiachiku', 'Expresar cómo nos sentimos', 'Expressing how we feel'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'proud.png',
                audio: 'proud.mp3',
                text: ['Proud', 'Achka munaspa', 'Orgulloso/Orgullosa'],
                example: {
                  text: ['They are very proud of their son', 'Paikuna kankuna achka munaspa paipa uauaua', 'Ellos están muy orgullosos de su hijo'],
                  audio: 'theyareveryproudoftheirson.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'determined.png',
                audio: 'determined.mp3',
                text: ['Determined', 'Tin', 'Decidido/Decidida'],
                example: {
                  text: ['She is determined to swim to the riverbank', 'Paitin ringapa kan uaitangapa atun iaku kuchukama', 'Ella está decidida a nadar hasta la otra orilla del río'],
                  audio: 'sheisdeterminedtoswimto.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'confident.png',
                audio: 'confident.mp3',
                text: ['Confident', 'Sutipa paikikinua', 'Seguro de sí mismo'],
                example: {
                  text: ['I am confident about my abilities', 'Nuka kani sutipa kauachingapa nuka pudiskakunata', 'Estoy seguro de mis habilidades'],
                  audio: 'iamconfidentaboutmyabilities.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'enthusiastic.png',
                audio: 'enthusiastic.mp3',
                text: ['Enthusiastic', 'Katispa iachaikuspa kadur', 'Entusiasta'],
                example: {
                  text: ['He is a very enthusiastic person', 'Pai kan chi ginti ialli achka katispa iachikuspa kadur', 'Él es una persona muy entusiasta'],
                  audio: 'heisaveryenthusiasticperson.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'ambitious.png',
                audio: 'ambitious.mp3',
                text: ['Ambitious', 'Achka munasiki', 'Ambicioso/Ambiciosa'],
                example: {
                  text: ['He is very ambitious', 'Pai kan ialli achka munasiki', 'Él es muy ambicioso'],
                  audio: 'heisveryambitious.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'comfortable.png',
                audio: 'comfortable.mp3',
                text: ['Comfortable', 'Sumapi iuiachin', 'Cómodo'],
                example: {
                  text: ['I like to sleep in the hammock because I feel more comfortable', 'Nukata gustauan puñungapa hamakapi suma iuiachiuanmanda', 'Me gusta dormir en la hamaca porque me siento más cómodo'],
                  audio: 'iliketosleepinthehommok.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'excited.png',
                audio: 'ecxited.mp3',
                text: ['Excited', 'Achka suma iuiachi', 'Emocionado/Emocionada'],
                example: {
                  text: ['We are very excited', 'Nnukanchi kanchi achka suma iuiachi', 'Nosotros estamos muy emocionados'],
                  audio: 'weareveryexcited.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'upset.png',
                audio: 'upset.mp3',
                text: ['Upset', 'Julliriaridu', 'Disgustado/Disgustada'],
                example: {
                  text: ['They are upset', 'Paikuna kankuna julliriaridu', 'Ellos están disgustados'],
                  audio: 'theyareupset.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'disappointed.png',
                audio: 'disappointed.mp3',
                text: ['Disappointed', 'Manin suma iuiachi', 'Decepcionado/Decepcionada'],
                example: {
                  text: ['She is disappointed because of the results of her exam', 'Paikuna kankuna manin suma iuiachi surkuspa mananchaia suma ixaminpi', 'Ella está decepcionada con los resultados de su examen'],
                  audio: 'sheisdisappointedbecauseof.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'exhausted.png',
                audio: 'exhausted.mp3',
                text: ['Exhausted', 'Manin iuka juirsa', 'Agotado/Agotada'],
                example: {
                  text: ['They are exhausted. They worked the whole day.', 'Paikuna kankuna manin iuka juirsa. Trajankuna tukui punchata.', 'Ellos está agotados. Trabajaron todo el día.'],
                  audio: 'theyarexhaustedtheyworked.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'anxious.png',
                audio: 'anxious.mp3',
                text: ['Anxious', 'Achka iuiaspa', 'Preocupado/Preocupada'],
                example: {
                  text: ['I am anxious because of my tasks', 'Nuka kani achka iuiaspa nukapa tariamanda', 'Yo estoy preocupada por mis tareas'],
                  audio: 'iamanxiousbecauseofmytasks.mp3'
                }
              }
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'heisveryambitious.mp3',
                img: '',
                question: ['He is very ___'],
                options: ['enthusiastic', 'ambitious'],
                answer: 'ambitious'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'upset.mp3',
                img: '',
                question: ['___'],
                answer: 'Upset' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'exhausted.mp3',
                options: ['Exhausted', 'Excited'],
                answer: 'Exhausted'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'jealous.mp3',
                img: '',
                question: ['___'],
                answer: 'Jealous' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I am ___'],
                img: '',
                audio: 'iamoffended.mp3',
                answer: 'offended' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'terrified.mp3',
                img: '',
                question: ['___'],
                answer: 'Terrified' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'disappointed.mp3',
                options: ['Upset', 'Disappointed'],
                answer: 'Disappointed'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'comfortable.mp3',
                img: '',
                question: ['___'],
                answer: 'Comfortable' // Comprobar
              },
              {
                type: 'organize',
                title: ['Choose the words in the correct order.', 'Sugiaiapillachi chi rimaikunata imasa suma rikuskasina. - Selecciona las palabras en el orden correcto.'],
                options: ['We', 'are', 'very', 'excited'],
                answer: 'We are very excited'
              },
            ]
          }
          ]
        }]
      },
      {
        id: 22,
        title: ['¿Imata kanta gustan ruangapa?', '¿Qué te gusta hacer?', 'What do you like to do?'],
        description: ['Ningapa imata gustan ruangapa nukanchi nimamana ruakugura', 'Describir lo que nos gusta hacer en nuestro tiempo libre', 'Describing what we like to do in our free time'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tolike.png',
                audio: 'tolike.mp3',
                text: ['To like', 'Gustauan', 'Gustar'],
                example: {
                  text: ['She likes reading', 'Paita gustan liingapa', 'A ella le gusta leer'],
                  audio: 'shelikesreading.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tolove.png',
                audio: 'tolove.mp3',
                text: ['To love', 'Munachin', 'Encantar/Amar'],
                example: {
                  text: ['I love listening to stories', 'Achka gustauan uiangapa antiua parlukuna', 'Me encanta escuchar historias'],
                  audio: 'ilovelisteningtostories.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tohate.png',
                audio: 'tohate.mp3',
                text: ['To hate', 'Mana munasa', 'Odiar'],
                example: {
                  text: ['She hates watching terror movies', 'Paita mana gusta kauangapa jiru pilikulakuna', 'Ella odia ver película de terror'],
                  audio: 'shehateswatchingterrormovies.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'toprefer.png',
                audio: 'toprefer.mp3',
                text: ['To prefer', 'Paillata munasa', 'Preferir'],
                example: {
                  text: ['They prefer cooking rather than eating out', 'Paikuna munankuna ianungapa mana kanchaladu mikungapa', 'Ellos prefieren cocinar que comer afuera'],
                  audio: 'theyprefercookingratherthan.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'toenjoy.png',
                audio: 'toenjoy.mp3',
                text: ['To enjoy', 'Suma iallikuni', 'Disfrutar'],
                example: {
                  text: ['You enjoy swimming in the river', 'Kanta achka suma iuiachin atun iakupi uaitakugura', 'Tú disfrutas nadar en el río'],
                  audio: 'youenjoyswimmingintheriver.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tofancy.png',
                audio: 'tofancy.mp3',
                text: ['To fancy', 'Apetecer', 'Chita munasa'],
                example: {
                  text: ['I fancy eating milky maize pudding', 'Munachiuan mikungapa sara lugru', 'Me apetece comer mazamorra'],
                  audio: 'ifancyeatingmilkymaizepudding.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'excited.png',
                audio: 'ecxited.mp3',
                text: ['Excited', 'Achka suma iuiachi', 'Emocionado/Emocionada'],
                example: {
                  text: ['We are very excited', 'Nnukanchi kanchi achka suma iuiachi', 'Nosotros estamos muy emocionados'],
                  audio: 'weareveryexcited.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'upset.png',
                audio: 'upset.mp3',
                text: ['Upset', 'Julliriaridu', 'Disgustado/Disgustada'],
                example: {
                  text: ['They are upset', 'Paikuna kankuna julliriaridu', 'Ellos están disgustados'],
                  audio: 'theyareupset.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'disappointed.png',
                audio: 'disappointed.mp3',
                text: ['Disappointed', 'Manin suma iuiachi', 'Decepcionado/Decepcionada'],
                example: {
                  text: ['She is disappointed because of the results of her exam', 'Paikuna kankuna manin suma iuiachi surkuspa mananchaia suma ixaminpi', 'Ella está decepcionada con los resultados de su examen'],
                  audio: 'sheisdisappointedbecauseof.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'exhausted.png',
                audio: 'exhausted.mp3',
                text: ['Exhausted', 'Manin iuka juirsa', 'Agotado/Agotada'],
                example: {
                  text: ['They are exhausted. They worked the whole day.', 'Paikuna kankuna manin iuka juirsa. Trajankuna tukui punchata.', 'Ellos está agotados. Trabajaron todo el día.'],
                  audio: 'theyarexhaustedtheyworked.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'anxious.png',
                audio: 'anxious.mp3',
                text: ['Anxious', 'Achka iuiaspa', 'Preocupado/Preocupada'],
                example: {
                  text: ['I am anxious because of my tasks', 'Nuka kani achka iuiaspa nukapa tariamanda', 'Yo estoy preocupada por mis tareas'],
                  audio: 'iamanxiousbecauseofmytasks.mp3'
                }
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Ningapa uillaikuna chaian churangapami "do not" o "does not" manara churagpi ruai tapudiruta ("like" o "love").', 'Para negar con frases como estas, basta con añadir "do not" o "does not" antes del verbo de opinión ("like" o "love").'],
                example: [{
                  text: 'I do not like saying bad words (Manin gustauan rimangapa jiru nikuna)',
                  translate: 'I do not like saying bad words (No me gusta decir groserías)'
                },
                {
                  text: 'She does not like fighting (Paiata mana gustan juyiru kangapa)',
                  translate: 'She does not like fighting (A ella no le gusta pelear)'
                }]
              }
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'helovescooking.mp3',
                img: '',
                question: ['He ___ cooking'],
                options: ['love', 'loves'],
                answer: 'loves'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'tolike.mp3',
                img: '',
                question: ['To ___'],
                answer: 'like' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'tohate.mp3',
                options: ['To hate', 'To love'],
                answer: 'To hate'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'toprefer.mp3',
                img: '',
                question: ['To ___'],
                answer: 'To prefer' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I ___ eating milky maize pudding'],
                img: '',
                audio: 'ifancyeatingmilkymaizepudding.mp3',
                answer: 'fancy' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'toenjoy.mp3',
                img: '',
                question: ['To ___'],
                answer: 'To enjoy' // Comprobar
              }
            ]
          }
          ]
        }]
      },
      {
        id: 23,
        title: ['¿Imata ruakungui?', '¿Qué estás haciendo?', 'What are you doing?'],
        description: ['Nisunchi imata ruanakunchi', 'Decir qué estamos haciendo', 'Saying what we are doing'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kuna iachaikusunchi ruangap kai ñugpama kadirua. Kaikunaua ruanchi rimangapa ruaikuna chi rimagura pasarikuskata.', 'Ahora vamos a aprender a usar el presente continuo. Usamos este tiempo para hablar de acciones temporales y de cosas que suceden en el momento en que hablamos.'],
                example: [
                  {
                    text: 'We are planting seeds (Nukanchi tarpunakunchi simillakuna)',
                    translate: 'We are planting seeds (Nosotros estamos sembrando semillas)'
                  },
                  {
                    text: 'I am working (Nuka trabajakunin)',
                    translate: 'I am working (Yo estoy trabajando)'
                  },
                  {
                    text: 'She is going to the store (Pai riku katudiru uasima)',
                    translate: 'She is going to the store (Ella está yendo a la tienda)'
                  },
                  {
                    text: 'He is making dinner for his couple (Pai ianuku chisima mikuita paipa warmimanda)',
                    translate: 'He is making dinner for his couple (Él está preparando la cena para su pareja)'
                  },
                  {
                    text: 'They are studying (Paikuna iachaikunakun)',
                    translate: 'They are studying (Ellos están estudiando)'
                  }]
              },
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Kaipin kauachingapa kanchi ruaikuna kai ruai "home".', 'Aquí te mostramos un par de expresiones idiomáticas con la palabra "home".'],
                example: [{
                  text: 'Make yourself at home (Sintiri kamba uasipikuinta)',
                  translate: 'Make yourself at home (Siéntete como en tu casa)'
                },
                {
                  text: 'Home sweet home (Nuka aillukuna suma nuka aillukuna)',
                  translate: 'Home sweet home (Hogar dulce hogar)'
                },
                {
                  text: 'To make a house a home (Ruangapa uasita sug aillukunapa)',
                  translate: 'To make a house a home (Hacer de una casa un hogar)'
                }]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'whatareyoudoing.png',
                audio: 'whatareyoudoing.mp3',
                text: ['What are you doing?', '¿Imata ruakungui?', '¿Qué estás haciendo?'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'iamgoingtowork.png',
                audio: 'togotowork.mp3',
                text: ['To go to work', 'Risunchi trabajangapa', 'Ir a trabajar'],
                example: {
                  text: ['I am going to work. See you later', 'Risa trabajangapa. Kauanakusunchin mas chisi', 'Me voy a trabajar. Nos vemos más tarde'],
                  audio: 'iamgoingtoworkseeyou.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'myfatherlikesworkingfrom.png',
                audio: 'toworkfromhome.mp3',
                text: ['To work from home', 'Trabajangapa uasimandata', 'Trabajar desde casa'],
                example: {
                  text: ['My father likes working from home', 'Nuka taitata gustan trabajangapa uasimandata', 'A mi papá le gusta trabajar desde casa'],
                  audio: 'myfatherlikesworkingfromhome.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'imgoinghome.png',
                audio: 'iamgoinghome.mp3',
                text: ['I am going home', 'Risa uasima', 'Me voy para la casa'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tocook.png',
                audio: 'tocook.mp3',
                text: ['To cook', 'Ianui', 'Cocinar'],
                example: {
                  text: ['She is cooking  lunch', 'Pai ianuku  almuirsuta', 'Ella está cocinando el almuerzo'],
                  audio: 'sheiscookinglunch.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'toclean.png',
                audio: 'toclean.mp3',
                text: ['To clean', 'Limpiai', 'Limpiar'],
                example: {
                  text: ['He is cleaning the bathroom', 'Pai limpiaku uasi kuirpu ruadiruta', 'Él está limpiando el baño'],
                  audio: 'heiscleaningthebathroom.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'tomakedinner.png',
                audio: 'tomakedinner.mp3',
                text: ['To make dinner', 'Ruangapa chisi mukungapa', 'Hacer la cena'],
                example: {
                  text: ['They are making dinner', 'Paikuna ruanakun mikungapa chisi', 'Ellos están haciendo la cena'],
                  audio: 'theyaremakingdinner.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'togotobed.png',
                audio: 'togotobed.mp3',
                text: ['To go to bed', 'Ringapa puñudiru kauituma', 'Ir a la cama'],
                example: {
                  text: ['I am tired. I am going to bed now', 'Kani saikuska. Risa kunagura puñudiru kauituma', 'Estoy cansada. Me voy a la cama ahora'],
                  audio: 'iamtirediamgoingtobednow.mp3'
                }
              }
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'iamgoinghome.mp3',
                img: '',
                question: ['I am ___ home'],
                options: ['go', 'going'],
                answer: 'going'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'tocook.mp3',
                img: '',
                question: ['To ___'],
                answer: 'cook' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'toclean.mp3',
                options: ['To clean', 'To love'],
                answer: 'To clean'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'tomakedinner.mp3',
                img: '',
                question: ['To ___ dinner'],
                answer: 'make' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['She ___ cooking  lunch'],
                img: '',
                audio: 'sheiscookinglunch.mp3',
                answer: 'is' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I ___ going home'],
                img: '',
                audio: 'iamgoinghome.mp3',
                answer: 'am' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['They ___ making dinner'],
                img: '',
                audio: 'theyaremakingdinner.mp3',
                answer: 'are' // Comprobar
              },
            ]
          }
          ]
        }]
      },
      {
        id: 24,
        title: ['¿Maipita uiñangui?', '¿Dónde creciste?', 'Where did you grow up?'],
        description: ['Ningapa ima pasariskakuna sumakuna nukapa kausaimanda "Past simple"', 'Relatar algunos acontecimientos importantes de nuestra vida "Past Simple"', 'Telling some importants events of our live "Past simple"'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'shewasbornincaqueta.png',
                audio: 'tobeborn.mp3',
                text: ['To be born', 'Nacii', 'Nacer'],
                example: {
                  text: ['She was born in Caquetá', 'Pai nacinsi kai Caquitapi', 'Ella nació en Caquetá'],
                  audio: 'shewasbornincaqueta.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'igrewupinsanjose.png',
                audio: 'togrowup.mp3',
                text: ['To grow up', 'Uiñai', 'Crecer'],
                example: {
                  text: ['I grew up in San José del Fragua', 'Ñuka uiñani san jusi fraguamandapi', 'Yo crecí en San José del Fragua'],
                  audio: 'igrewupinsanjosedelfragua.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'istartedmyfirstjob.png',
                audio: 'tostart.mp3',
                text: ['To start', 'Kaiari', 'Empezar'],
                example: {
                  text: ['I started my fisrt job when I was 16', 'Kaiarini nukapa primir trabajua iukagura chunga sugta wata', 'Empecé mi primer trabajo cuando tenía 16 años'],
                  audio: 'istartedmyfirstjobwheniwas16.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'ifinishedschool.png',
                audio: 'tofinish.mp3',
                text: ['To finish', 'Puchkai', 'Terminar'],
                example: {
                  text: ['I finished school in 2000', 'Nuka pugkani iachaikungapa kai iskai waranga watapi', 'Yo terminé el coelgio en el año 2000'],
                  audio: 'ifinishedschoolin2000.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'imovedtoyurayaco.png',
                audio: 'tomove.mp3',
                text: ['To move', 'Tukuiua ringapa', 'Mudarse'],
                example: {
                  text: ['I moved to Yurayaco when I was 12', 'Rini tukuiua yurayakuma iukagura chunga iskai wata', 'Me mudé a Yurayaco cuando tenía 12 años'],
                  audio: 'imovedtoyurayacowheniwas12.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'igotmypet.png',
                audio: 'toget.mp3',
                text: ['To get', 'Iuka', 'Tener'],
                example: {
                  text: ['I got my pet when I was 5', 'Nuka iukarkani nukapa maskuta iukagura pichka wata', 'Yo tuve mi mascota cuando tenía 5 años'],
                  audio: 'igotmypetwheniwas5.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'ibecameateacher.png',
                audio: 'tobecome.mp3',
                text: ['To become', 'Ruaringapa/tukungapa', 'acerse/volverse'],
                example: {
                  text: ['I became a teacher in 2007', 'Nuka ruarini iachachidur iskai waranga kanchis watapi', 'Me hice profesor en 2007'],
                  audio: 'ibecameateacherin2006.mp3'
                }
              }
            ]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'shewasbornincaqueta.mp3',
                img: '',
                question: ['She ___ born in Caquetá'],
                options: ['was', 'get'],
                answer: 'was'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'togrowup.mp3',
                img: '',
                question: ['To ___ up'],
                answer: 'grow' // Comprobar
              },
              {
                type: 'hearOptions',
                title: ['Choose the word that you hear.', 'Tupui imasa uiaska rimaita. - Selecciona la palabra que escuches.'],
                audio: 'tostart.mp3',
                options: ['To finish', 'To start'],
                answer: 'To start'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'ifinishedschoolin2000.mp3',
                img: '',
                question: ['I ___ school in 2000'],
                answer: 'finished' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I ___ a teacher in 2007'],
                img: '',
                audio: 'ibecameateacherin2007.mp3',
                answer: 'became' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I ___ my pet when I was 5'],
                img: '',
                audio: 'igotmypetwheniwas5.mp3',
                answer: 'got' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['I ___ to Yurayaco when I was 12'],
                img: '',
                audio: 'imovedtoyurayacowheniwas12.mp3',
                answer: 'moved' // Comprobar
              },
            ]
          }
          ]
        }]
      },
      {
        id: 25,
        title: ['Kaukurkani kilkaskata nukapa ixaminmanda', 'Estaba repasando para mi examen', 'I was revising for my exam'],
        description: ['Rimasunchi nukachapa iachaikuskakunamanda ialliskaua y ñugpanma kaskaua - past continuous', 'Hablar de nuestros estudios en pasado - Past continuous', 'Talking about our studies in past - Past continuos'],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Vocabulary', 'Rimaikuna - Vocabulario '],
            icon: 'vocabulary.svg',
            quests: [
              {
                type: 'advice',
                title: ['Here you have a piece of advice', '¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
                content: ['Usamos el pasado continuo para hablar de las acciones que estaban en curso en el pasado.', 'Ruanchi chi ialliskaua rimangapa chi ruaikunata kai kadurkuna kuti ialliskaua.'],
                example: [{
                  text: 'He was working yesterday (NPai trabajakurka kaina)',
                  translate: 'He was working yesterday (Él estaba trabajando ayer)'
                },
                {
                  text: 'I was talking to you (Nuka rimakurkani kanta)',
                  translate: 'I was talking to you (Yo te estaba hablando a ti)'
                },
                {
                  text: 'She was doing her tasks (Pai ruakurka paipa tariakunata)',
                  translate: 'She was doing her tasks (Ella estaba haciendo sus tareas)'
                }]
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'torevise.png',
                audio: 'torevise.mp3',
                text: ['To revise', 'Kilkasta liispa', 'Repasar'],
                example: {
                  text: ['We were revising for the English exam', 'Nukanchi kilkaskakunata  liinakunchi inglispa ixaminmanda', 'Nosotros estábamos repasando para el examen de inglés'],
                  audio: 'wewererevisingfortheenglishexam.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'todiscuss.png',
                audio: 'todiscuss.mp3',
                text: ['To discuss', 'Parlingapa', 'Discutir'],
                example: {
                  text: ['Today, we were discussing about medicinal plants', 'Kuna puncha rimanchin sacha ambikunamanda', 'Hoy estuvimos hablando acerca de plantas medicinales'],
                  audio: 'todaywewerediscussingabout.mp3'
                }
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'hewasworking.png',
                audio: 'hewasworkingyesterday.mp3',
                text: ['He was working yesterday', 'Pai trabajakurka kaina', 'Él estaba trabajando ayer'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'iwastalkingtoyou.png',
                audio: 'iwastalkingtoyou.mp3',
                text: ['I was talking to you', 'Nuka rimakurkani kanta', 'Yo te estaba hablando a ti'],
              },
              {
                type: 'definition',
                title: ['Read and listen to the expression.', 'Lii y uiai chi nikuskata. - Lee y escucha la expresión.'],
                img: 'shewasdoindher.png',
                audio: 'shewasdoinghertasks.mp3',
                text: ['She was doing her tasks', 'Pai ruakurka paipa tariakunata', 'Ella estaba haciendo sus tareas'],
              }]
          },
          {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
              {
                type: 'completeOptions',
                title: ['Choose the expression that you hear.', 'Api chi rimai ima uiaskata. - Elige la expresión que oigas.'],
                audio: 'wewererevisingfortheenglishexam.mp3',
                img: '',
                question: ['We were ___ for the English exam '],
                options: ['revise', 'revising'],
                answer: 'revising'
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'todiscuss.mp3',
                img: '',
                question: ['To ___'],
                answer: 'discuss' // Comprobar
              },
              {
                type: 'write',
                title: ['Write what you hear.', 'Kilkai imasa uiaskasina. - Escribe lo que oigas.'],
                audio: 'iwastalkingtoyou.mp3',
                img: '',
                question: ['I ___ talking to you'],
                answer: 'was' // Comprobar
              },
              {
                type: 'write',
                title: ['Fill the gap with the help of the audio.', 'Jundachi  chi iura pisiskapi chi ianapaiua audiuwa. - Completa el espacio en blanco con ayuda del audio.'],
                question: ['He ___ working yesterday'],
                img: '',
                audio: 'hewasworkingyesterday.mp3',
                answer: 'was' // Comprobar
              },
            ]
          }
          ]
        }]
      },
      {
        id: 26,
        title: ['Coplas', 'Coplas', 'Verses'],
        description: [''],
        lessons: [{
          lesson_id: 1,
          title: [''],
          items: [{
            title: ['Verses', 'Coplas - Coplas'],
            icon: 'vocabulary.svg',
            quests: [
            {
              type: 'definition',
              title: ['Read and listen to the verse.', 'Lii y uiai chi copla. - Lee y escucha la copla.'],
              img: 'riocaqueta.png',
              audio: 'whenyougosailing.mp3',
              text: ['When you go sailing on the Caquetá River, remember that Nukanchipa loves you more and more.', 'Rikugura atun iaku caquitapi, iuiari kanta nukanchipa alpa munan mas y mas.', 'Cuando vayas navegando por el río Caquetá, recuerda que Nukanchipa te quiere más y más.'],
              autor: ['By: Jesica Alejandra Buesaquillo (Student)']
            },
            {
            type: 'definition',
              title: ['Read and listen to the verse.', 'Lii y uiai chi copla. - Lee y escucha la copla.'],
              img: 'animalito.png',
              audio: 'yellowpaper.mp3',
              text: ['Yellow paper, pink paper, with our little animal be very careful.', 'Panga killu, panga pukasu, nukanchipa animalua iukangui cuidadu.', 'Papel amarillo, papel rosado, con nuestro animalito mucho cuidado.'],
              autor: ['By: Jesica Alejandra Buesaquillo (Student)']
            },
            {
             type: 'definition',
              title: ['Read and listen to the verse.', 'Lii y uiai chi copla. - Lee y escucha la copla.'],
              img: 'territorio.png',
              audio: 'theseedsaretaken.mp3',
              text: ['The seeds are taken from the ripe guava, but no garbage has to be thrown to Nukanchipa Alpa.', 'Kai guayaba pukuska kaskata kichurin muiukunata, piru nukanchipa alpapi mana sitadirukan ni sug mapakuna.', 'A la guayabita madurita se le quita la pepita, pero a Nukanchipa Alpa no se le bota ni una basurita.'],
              autor: ['By: Jesica Alejandra Buesaquillo (Student)']
            },
            {
              type: 'definition',
              title: ['Read and listen to the story.', 'Lii y uiai chi Parlu. - Lee y escucha el cuento.'],
              img: 'yurayaco.png',
              audio: 'story.mp3',
              // tslint:disable-next-line:max-line-length
              text: ['Once upon a time, there was a house located in a place that today is called "Alto de la Cruz". There were always people who came to stay there. The owners of all that were Apolinar Jacanamejoy and Roberto Jacanamejoy; the grandfather\'s wife was Natividad. They continued to live in that house; then they had many children. The first one was Luis Carlos Jacanamejoy, then Mario, Yolanda, Waira, Nina, César and finally Norely. This is how the Jacanamejoy Mutumbajoy family was formed. In that house, there was a very large plain and the family turned it into a chagra to grow many foods such as cassava, banana, corn, rice, pineapple, and others. Time passed and the world was changing. Without knowing how or where, a road crossed the territory destroying the house. There was nothing left, just <<anchisachuco>> (stubble) and much plain. After the road, there were only some <<Wasiwawajuna>> (ranchitos or casitas) standing. Mario Jacanamejoy grew up very disappointed; he was already an adult, and decided to go and plant a lot of rubber to get its milk and sell it. After many years, when he returned to his territory, his brother César no longer existed and everything had changed. Many families from outside lived now in his shelter and nobody planted; they only bought food from stores. From his first house, only the Natividad\'s wisdom remained. This place is now a town called Yurayaco (Aguas Claras).', 'Ñaunaisi tiarka sug luarpi kunagurakuna suti Alto de la Cruz. Chaiamudursi kanakurka achka ginti chipi. Tukui chikunata duiñu karkasi Apolinar Jacanamejoy y Roberto Jacanamejoy, atuntaitapa warmi karkasi kai auila Natividad. Paikuna siguinkunasi kausaspa chi uasipi, chigurmanda iukankunasi achka uauakuna. Ñugpasi karka Luis Calros Jacanamejoy, chiguramanda Mario, Yolanda, Waira, Nina, César y tin ultimo kay suti  Norely. Chasasi tukun kai aillukuna Jacanamejoy Mutumbajoy. Chi uasipisi tiarka sug atun llanu y kai aillukuna tukuchinkuna y ruankuna sug chagra tarpungapa: rumu, platanu, sara, arroz, chiuilla, y mas sugkuna. iallin kai tiempukuna y kukui rin kambiarispa. Mana nima iachaspaiasi kawankuna sug carreterasi iallin nukanchipa alpa dañaspa uasita.  Kuna nima mana kidaku, anchisachukuia y achka llanukuna. Iallisguramanda carritira tiarkasi sug sugpi achka anchi uasiuauakuna. Achka iakirispa kai iacha taita Apolinar Jacanamijoy uiñan, tin kaguru musitu  pai rinsi tarpungapa kauchu surkungapa lichi y katungapa. Kutimugura chigurmanda achka unaipi maninsi tin kausakurka paipa wauki Cesar, tukuisi kambiarira iarka, sug achka aillikunasi sugmandakunasi kausakurka risguardupi niraian iura gintikuna y nipisi mana tarpunakurka, paikuna randispaiasi kausanakurka katudirukunapi. Chi ñugpa uasimandaka kidakurkasi kai auila natividad pa iachaikunaia. Kai iagta kunagurakan suti yurayaku (puncha iaku).', 'Había una vez una casa ubicada en un lugar que hoy en día se llama el Alto de la Cruz. Siempre venía mucha gente a quedarse ahí. Los dueños de todo eso eran Apolinar Jacanamejoy y Roberto Jacanamejoy, la mujer del abuelo era la gran mayora Natividad. Ellos siguieron viviendo en esa casa, después tuvieron muchos hijos.  El primero fue Luis Calros Jacanamejoy, después Mario, Yolanda, Waira, Nina, César y por ùltimo Norely. Así se formó la familia Jacanamejoy Mutumbajoy. En esa casa había un llano muy grande y la familia lo convirtió en una chagra para cultivar muchos alimentos como: yuca, plátano, maíz, arroz, piña, y otros. Pasó el tiempo y el mundo fue cambiando. Sin saber cómo ni dónde una carretera atravesó el territorio destruyendo la casita. Ya no quedó nada, solo anchisachuco (rastrojo) y mucho llano. Después de la carretera solo había en pie algunos Wasiwawajuna (ranchitos o casitas). Muy decepcionado el taita Mario Jacanamijou se creció, ya era un adulto, y decidió irse a sembrar mucho caucho para sacarle a leche y venderla. Al volver a su territorio después de muchos años su hermano César ya no existía y todo había cambiado, muchas familias de afuera vivían ahora en su resguardo y nadie sembraba, solo compraban en tiendas. De su primera casita solo quedaba la sabiduría de la gran mayora Natividad. Este lugar ahora es un pueblo llamado Yurayaco (Aguas Claras).'],
              autor: ['By: Yuliana  Yuliana Jacanamijoy (Student)']
            }
          ]},
            {
            id: 4,
            title: ['Test', 'Tapuikuna - Examen'],
            icon: 'exam.svg',
            quests: [
            {
              type: 'simpleQuest',
              title: ['Answer the questions according to the story.', 'Responde las preguntas de acuerdo al cuento'],
              audio: '',
              img: '',
              text: ['What did cross the territory and destroy the Jacanamejoy Mutumbajoy family\'s house?'],
              options: ['The river', 'A road'],
              answer: 'A road'
            },
            {
              type: 'simpleQuest',
              title: ['Answer the questions according to the story.', 'Responde las preguntas de acuerdo al cuento'],
              audio: '',
              img: '',
              text: ['What did Mario decide to plant?'],
              options: ['Bananas', 'Rubber'],
              answer: 'Rubber'
            },
             {
              type: 'simpleQuest',
              title: ['Answer the questions according to the story.', 'Responde las preguntas de acuerdo al cuento'],
              audio: '',
              img: '',
              text: ['What does Yurayaco mean?'],
              options: ['Aguas claras', 'La casa del sol'],
              answer: 'Aguas claras'
            },
            ]
          }
        ]
      }]
    }
  ];
    return { users, themes };
  }
}

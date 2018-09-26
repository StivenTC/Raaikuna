import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11,
        name: 'Marilyn Samantha Rodriguez Artunduaga',
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
      { id: 14,
        name: 'Ana Roa',
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
      { id: 1,
        title: ['¡Au!', '¡Hola!'],
        icon: 'https://image.flaticon.com/icons/svg/1041/1041020.svg',
        description: ['Puanguinii y ni kamba suti', 'Saludar y presentarnos '],
        lessons: [{
          lesson_id: 1,
          title: ['¡Sumakani!', '¡Encantada!'],
          items: [{
            title: ['Rimaikuna', 'Vocabulario'],
            icon: 'vocabulary.svg',
            quests: [{
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'hello.png',
              audio: 'hello.mp3',
              text: ['Hello', 'Au', 'Hola']
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'hi.png',
              audio: 'hi.mp3',
              text: ['Hi', 'Au', 'Hola']
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'goodmorning.png',
              audio: 'goodmorning.mp3',
              text: ['Good morning!', 'Puangui', 'Buenos días']
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'goodafternoon.png',
              audio: 'goodafternoon.mp3',
              text: ['Good afternoon!', 'Chisia puangui', 'Buenas tardes']
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'goodevening.png',
              audio: 'goodevening.mp3',
              text: ['Good evening!', 'Puangui', 'Buenas noches']
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'goodbye.png',
              audio: 'goodbye.mp3',
              text: ['Good bye!', 'Sugratukama', 'Hasta luego']
            },
            {
              type: 'boolean',
              title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
              img: 'hi.png',
              audio: 'hi.mp3',
              subtitle: 'Hi',
              question: ['Sug rigcha nii "Hello"', 'Otra manera de decir "Hello"'],
              answer: true
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'im.png',
              text: ['I\'m…!', 'Kani…', 'Soy…'],
              audio: 'im.mp3'
            },
            {
              type: 'simpleQuest',
              title: ['¿Imasata pudinchi ningapa nukapa suti kan?', '¿Cómo podemos decir nuestro nombre?'],
              img: 'im.png',
              options: ['I\'m…', 'Hi', 'Hello'],
              answer: 'I\'m…'
            },
            {
              type: 'advice',
              title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
              content: ['I’m niraian chillatata “My name is…” (suti kani…). ', 'I\'m significa lo mismo que "My name is…" (Me llamo…)'],
              example: [{
                text: 'I am Alexander = I\'m Alexander (Nuka kani Alexander)',
                translate: 'I am Alexander = I\'m Alexander (Soy Alexander)'
              }]
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'nicetomeetyou.png',
              audio: 'nicetomeetyou.mp3',
              text: ['Nice to meet you ', 'Pai kanta rigsinmanda', 'Encantado de conocerte']
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'howisitgoing.png',
              audio: 'howisitgoing.mp3',
              text: ['How is it going?', '¿Imasata riku tukui?', '¿Cómo va todo?']
            },
            {
              type: 'organize',
              title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
              options: ['How', 'is ', 'it', 'going', '?'],
              answer: 'How is it going ?'
            },
            {
              type: 'definition',
              title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
              img: 'finethanks.png',
              audio: 'finethanks.mp3',
              text: ['Fine, thanks', 'Sumaglla, pai', 'Bien, gracias']
            },
            {
              type: 'completeOptions',
              title: ['Tupui suma ainii chi tapuita', 'Elige la respuesta correcta a la pregunta'],
              question: ['A: How is it going?', 'B: $$$'],
              img: 'howisitgoing.png',
              audio: '',
              options: ['Fine, thanks', 'Nice to meet you'],
              answer: 'Fine, thanks'
            }],
            },
            {
            title: ['Parlarikuna ', 'Diálogo'],
            icon: 'dialogue.svg',
            quests: [{
              type: 'dialogue',
              options: ['Fine, thanks', 'How is it going?', 'I\'m', 'Nice to meet you', 'Hi'],
              answer: 'I\'m Hi Nice to meet you Fine, thanks',
              conversation: [{
                name: 'Waira',
                msg: 'Hello, $$$ Waira',
                img: 'wayra.svg',
                audio: 'd1.mp3',
              },
              {
                name: 'Flora',
                msg: '$$$, I am Flora',
                img: 'flora.svg',
                audio: 'd2.mp3',
              },
              {
                name: 'Waira',
                msg: '$$$. $$$',
                img: 'wayra.svg',
                audio: 'd3.mp3',
              },
              {
                name: 'Flora',
                msg: '$$$',
                img: 'flora.svg',
                audio: 'd4.mp3',
              }
            ]
            }]
            },
            {
            id: 1,
            title: ['Tapuikuna', 'Examen'],
            icon: 'exam.svg',
            quests: [
            {
              type: 'hear',
              title: ['Kilkai ima uiakuskasina', 'Escribe lo que oigas'],
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
              title: ['Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi', 'Elige las palabras correctas para completar los espacios en blanco'],
              question: ['How is it $$$ ?'],
              img: '',
              audio: 'howisitgoing.png',
              options: ['fine', 'going'],
              answer: 'going'
            },
            {
              type: 'simpleQuest',
              title: ['Sug rigcha nii "Hello"', 'Otra manera de decir "Hello"'],
              img: 'hello.png',
              options: ['I\'m…', 'Hi', 'How', 'Going'],
              answer: 'Hi'
            },
            {
              type: 'organize',
              title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
              options: ['Nice', 'to', 'meet', 'you'],
              answer: 'Nice to meet you'
            },
            {
              type: 'completeOptions',
              title: ['Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi', 'Elige las palabras correctas para completar los espacios en blanco'],
              question: ['How is it going $$$'],
              img: '',
              audio: '',
              options: ['?', '!'],
              answer: '?'
            },
            {
              type: 'write',
              title: ['Kilkai sug rigcha nii "Hello"', 'Escribe otra manera de decir "Hello"'],
              text: '',
              answer: 'Hi' // Comprobar
            }
          ]
            }
          ]
        }]
      },
      { id: 2,
      title: ['¿Imasata kangui?', '¿Cómo estás?'],
      icon: 'https://image.flaticon.com/icons/svg/1041/1041020.svg',
      description: ['Puanguinii y ni kamba suti', 'Expresar como nos sentimos-Verbo to be (ser/estar)'],
      lessons: [{
        lesson_id: 1,
        title: ['Kani sumaglla, pai', 'Estoy bien, gracias'],
        items: [{
          title: ['Rimaikuna', 'Vocabulario'],
          icon: 'vocabulary.svg',
          quests: [
          {
            type: 'advice',
            title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
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
            title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
            img: 'howareyou.png',
            audio: 'howareyou.mp3',
            text: ['How are you?', '¿Imasata kangui?', '¿Cómo estás?']
          },
          {
            type: 'boolean',
            title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
            img: 'howareyou.png',
            audio: 'howareyou.mp3',
            subtitle: 'How are you?',
            question: ['Iukan chillarigcha niraiadu "How is it going?"', 'Tiene un significado similar a "How is it going?"'],
            answer: true
          },
          {
            type: 'definition',
            title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
            img: 'imfinethanks.png',
            audio: 'finethanks.mp3',
            text: ['Fine, thanks', 'Sumaglla, pai', 'Bien, gracias']
          },
          {
            type: 'definition',
            title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
            img: 'iamnotbadthanks.png',
            audio: 'notbadthanks.mp3',
            text: ['Not bad, thanks', 'Nima suma, pai', 'Nada mal, gracias']
          },
          {
            type: 'boolean',
            title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
            img: 'imfinethanks.png',
            audio: 'finethanks.mp3',
            subtitle: 'Fine, thanks',
            question: ['Iukan chillarigcha niraiadu "Not bad, thanks"', 'Tiene un significado similar a "Not bad, thanks"'],
            answer: true
          },
          {
            type: 'definition',
            title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
            img: 'howaboutyou.png',
            audio: 'howaboutyou.mp3',
            text: ['How about you?', '¿Y kan?', '¿Y tú?']
          },
          {
            type: 'definition',
            title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
            img: 'imgood.png',
            audio: 'imgood.mp3',
            text: ['I\'m good', 'kani sumaglla', 'Estoy bien']
          },
          {
            type: 'definition',
            title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
            img: 'imnotgreat.png',
            audio: 'imnotgreat.mp3',
            text: ['I\'m not great', 'Kani chaupi suma y sug chaupi mana suma', 'Estoy regular']
          },
          {
            type: 'boolean',
            title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
            img: 'imgood.png',
            audio: 'imgood.mp3',
            subtitle: 'I\'m good',
            question: ['Iukan chillarigcha niraiadu "I\'m not great!"', 'Tiene un significado similar a "I\'m not great", thanks"'],
            answer: false
          },
          {
            type: 'hearOptions',
            title: ['Api chi rimaikuna imasa uiaskasina chi audiupi', 'Elige la respuesta que escuches en el audio'],
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
        title: ['Parlarikuna ', 'Diálogo'],
        icon: 'dialogue.svg',
        quests: [{
          type: 'dialogue',
          options: ['How are you?', ' I\'m good?.', 'Not bad'],
          answer: 'I\'m Hi Nice to meet you Fine, thanks',
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
            msg: 'Oh hi! $$$',
            img: 'diana.svg',
            audio: 'dohhihowareyou.mp3',
          },
          {
            name: 'Camila',
            msg: '$$$ How about you?',
            img: 'camila.svg',
            audio: 'dimgoodhowaboutyou.mp3',
          },
          {
            name: 'Diana',
            msg: '$$$, thanks ',
            img: 'diana.svg',
            audio: 'dnotbadthanks.mp3',
          }
        ]
        }]
      },
      {
        title: ['ilkai rimaikuna', 'Gramática'],
        icon: 'books.svg',
        quests: [{
          type: 'advice',
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
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
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'iamhappy.png',
          audio: 'iamhappy.mp3',
          text: ['I am happy', 'Nuka kani kuntintu', 'Estoy feliz']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'wearetired.png',
          audio: 'wearetired.mp3',
          text: ['We are tired', 'Nukanchi kanchi saikuska', 'Estamos cansados']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'heisabitstressed.png',
          audio: 'heisabitstressed.mp3',
          text: ['He is a bit stressed', 'Pai kan asiaia juiri sintiriska', 'Él está un poco estresado']
        },
        {
          type: 'chooseWord',
          title: ['Apai chi ruai "to be" sug sug chi rimaikunapi', 'Elige el verbo "to be" en cada frase'],
          options: ['He is 30', 'We are good', 'I am tired'],
          answer: 'is are am'
        },
        {
          type: 'advice',
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
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
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'i.png',
          audio: 'i.mp3',
          text: ['I', 'Nuka', 'Yo']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'you.png',
          audio: 'you.mp3',
          text: ['You', 'Kan', 'Tú']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'he.png',
          audio: 'he.mp3',
          text: ['He', 'Pai', 'Él']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'she.png',
          audio: 'she.mp3',
          text: ['She', 'Pai', 'Ella']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'it.png',
          audio: 'it.mp3',
          text: ['It', 'Chi', 'Eso']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'we.png',
          audio: 'we.mp3',
          text: ['We', 'Nukanchi', 'Nosotros']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'youu.png',
          audio: 'you.mp3',
          text: ['You', 'Kankuna', 'Ustedes']
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'they.png',
          audio: 'they.mp3',
          text: ['They', 'Paikuna', 'Ellos']
        },
        {
          type: 'boolean',
          title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
          img: 'iamnotbadthanks.png',
          audio: '',
          subtitle: 'I am not bad, thanks ',
          question: ['Kai ruaikuna iukan chi ruia "to be"', 'Esta oración contiene el verbo "to be"'],
          answer: true
        },
        {
          type: 'organizeWord',
          title: ['Jundachi chi iura pisiskapi chi kilkai suma kunaua', 'Completa los espacios en blanco con las letras correctas".'],
          img: 'flora.png',
          text: 'You $$$ Flora',
          options: ['a', 'r', 'e'],
          answer: 'are'
        },
        {
          type: 'hearWrite',
          title: ['Jundachi chi iura pisiskapi chi ianapaiua audiuwa', 'Completa el espacio en blanco con ayuda del audio'],
          text: 'She $$$ good',
          audio: 'sheisgood.mp3',
          answer: 'is' // Comprobar
        },
        {
          type: 'write',
          title: ['Jundachi chi rimaikunata kai suma ruaikunaua "to be"', 'Completa la frase con la forma correcta del verbo "to be"'],
          text: 'How $$$ you',
          answer: 'are' // Comprobar
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
          options: ['We', 'are', 'fine', ',', 'thanks'],
          answer: 'We are fine, thanks'
        },
        {
          type: 'simpleQuest',
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi', 'Elige las palabras correctas para completar los espacios en blanco'],
          text: 'They $$$ good',
          options: ['is', 'are'],
          answer: 'are'
        },
        {
          type: 'hearWrite',
          title: ['Jundachi chi iura pisiskapi chi ianapaiua audiuwa', 'Completa el espacio en blanco con ayuda del audio'],
          text: '$$$ happy',
          audio: 'iamhappy.mp3',
          answer: 'I am' // Comprobar
        },
        {
          type: 'write',
          title: ['Jundachi chi rimaikunata kai suma ruaikunaua  "to be"', 'Completa la frase con la forma correcta del verbo "to be"'],
          text: 'My name $$$ Andrea',
          img: '',
          audio: '',
          answer: 'is' // Comprobar}
        }
      ]},
      {
        id: 2,
        title: ['Tapuikuna', 'Examen'],
        icon: 'exam.svg',
        quests: [
        {
          type: 'hear',
          title: ['Kilkai ima uiakuskasina', 'Escribe lo que oigas'],
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
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi', 'Elige las palabras correctas para completar los espacios en blanco'],
          question: ['How is it $$$ ?'],
          img: '',
          audio: 'howisitgoing.png',
          options: ['fine', 'going'],
          answer: 'going'
        },
        {
          type: 'simpleQuest',
          title: ['Sug rigcha nii "Hello"', 'Otra manera de decir "Hello"'],
          img: 'hello.png',
          options: ['I\'m…', 'Hi', 'How', 'Going'],
          answer: 'Hi'
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
          options: ['Nice', 'to', 'meet', 'you'],
          answer: 'Nice to meet you'
        },
        {
          type: 'completeOptions',
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi', 'Elige las palabras correctas para completar los espacios en blanco'],
          question: ['How is it going $$$'],
          img: '',
          audio: '',
          options: ['?', '!'],
          answer: '?'
        },
        {
          type: 'write',
          title: ['Kilkai sug rigcha nii "Hello"', 'Escribe otra manera de decir "Hello"'],
          text: '',
          answer: 'Hi' // Comprobar
        }
      ]
      }
    ]
    }]
  },
  {
  id: 3,
  title: ['¿Imasata sutikangui?', '¿Cómo te llamas?'],
  icon: 'https://image.flaticon.com/icons/svg/1041/1041020.svg',
  description: ['Rimaspa nukanchi kikigmanda - Nukanchipa sutichi', 'Hablando de nosotros mismos - Pronombres personales'],
  lessons: [{
    lesson_id: 1,
    title: ['Sutikani', 'Me llamo…'],
    items: [{
      title: ['Rimaikuna', 'Vocabulario'],
      icon: 'vocabulary.svg',
      quests: [{
        type: 'advice',
        title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
        content: ['Kunagura tin rigsingui chi uillaikuna, iachaikusunchi ruangapa y ainingapa kimsa tapikunata.', 'Ahora que conoces los conceptos básicos, vamos a practicar cómo hacer y responder tres sencillas preguntas.'],
        example: [{
          text: 'What is your name? (¿Imasata sutikangui?)',
          translate: 'What is your name? (¿Cómo te llamas?)'},
          {text: 'Where are you from? (¿Maimandata kangui?)',
          translate: 'Where are you from? (¿De dónde eres?)'},
          {text: 'How old are you? (¿Imasa uatata iukangui?)',
          translate: 'How old are you? (¿Cuántos años tienes?)'}
        ]},
      {
        type: 'definition',
        title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
        img: 'whatisyourname.png',
        audio: 'whatisyourname.mp3',
        text: ['What is your name?', '¿Imasata sutikangui?', '¿Cómo te llamas?']
      },
      {
        type: 'definition',
        title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
        img: 'imalexander.png',
        audio: 'whatisyourname.mp3',
        text: ['I\'m...', 'Kani...', 'Soy...'],
        example: {
          text: ['I\'m Alexander', 'Sutikani Alexander', 'Soy Alexander'],
          audio: 'imalexander.mp3'
        }
      },
      {
        type: 'completeOptions',
        title: ['Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi', 'Elige las palabras correctas para completar el espacio'],
        question: ['Hello, what\'s your name?', 'Hi,  $$$, Carlos '],
        options: ['name', 'I\'m'],
        answer: 'I\'m'
      },
      {
        type: 'definition',
        title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
        img: 'whereareyoufrom.png',
        audio: 'whereareyoufrom.mp3',
        text: ['Where are you from?', '¿Maimandata kangui?', '¿De dónde eres?']
      },
      {
        type: 'definition',
        title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
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
        title: ['Api chi rimai ima uiaskata', 'Elige la expresión que oigas'],
        audio: 'whereareyoufrom.mp3',
        question: ['Where are you from?', '$$$ Caquetá'],
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
        title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
        img: 'howoldareyou.png',
        audio: 'howoldareyou.mp3',
        text: ['How old are you?', '¿Imasa uatata iukangui??', '¿Cuántos años tienes?']
      },
      {
        type: 'definition',
        title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
        img: 'im15yearsold.png',
        audio: 'im15yearsold.mp3',
        text: ['I\'m 15 years old', 'Iukani chunga pichka uata']
      },
      {
        type: 'boolean',
        title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
        img: 'im15yearsold.png',
        audio: 'im.mp3',
        subtitle: 'I\'m...',
        question: ['Niraian imasa nidiru kaskata uatata', 'Se trata de una forma común de indicar la edad.'],
        answer: true
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
      title: ['Parlarikuna ', 'Diálogo'],
      icon: 'dialogue.svg',
      quests: [{
        type: 'dialogue',
        options: ['What is', 'are you', 'I\'m 13', 'I\'m from', 'how old'],
        answer: 'What is are you I\'m from how old I\'m 13',
        conversation: [{
          name: 'Luisa',
          msg: 'Hi, my name is Luisa. $$$ your name?',
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
          msg: 'Where $$$ from, Karen?',
          img: 'diana.svg',
          audio: 'dwhereareyoufromkaren.mp3',
        },
        {
          name: 'Karen',
          msg: '$$$ Florencia. And you, where are you from?',
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
          msg: 'And $$$ are you?',
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
          msg: '$$$',
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
      title: ['ilkai rimaikuna', 'Gramática'],
      icon: 'books.svg',
      quests: [
        {
          type: 'advice',
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
          content: ['Kauai chi kilkaikuna pintachidu kaskakunata. Kaikuna ninakun pipata u imata rimanakunchi.', 'Mira las palabras que están resaltadas. Estas indican de quién o de qué estamos hablando.'],
          example: [{
            text: 'I am Luis (Nuka kani Luis)',
            translate: 'I am Luis (Yo soy Luis)'},
            {text: 'You are Carlos (Kan kangui Carlos)',
            translate: 'You are Carlos (Tú eres Carlos)'},
            {text: 'He is happy (Pai kan kuntintu)',
            translate: 'He is happy (Él está feliz)'},
            {text: 'It is a book (Chi kan sug libru)',
            translate: 'It is a book (Eso es un libro)'
            }]
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
          options: ['He', 'is ', 'happy'],
          answer: 'He is happy'
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
          options: ['You', 'are ', 'Alexander'],
          answer: 'You are Alexander'
        },
        {
          type: 'advice',
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
          content: ['Sug nikanchipa sutichikuna ninakun suglla gintita u ubjituta, y sugkuna sutichinakun achka gintikunata u ubjitukana.', 'Algunos pronombres personales se refieren a una sola persona u objeto, mientras que otros se refieren a un grupo de personas u objetos.'],
          example: [{
            text: 'I (Nuka)',
            translate: 'I (Yo)'},
            {text: 'You (Kan)',
            translate: 'You (Tú)'},
            {text: 'He (Pai)',
            translate: 'He (Él)'},
            {text: 'She (Pai)',
            translate: 'She (Ella)'},
            {text: 'It (Chi)',
            translate: 'It (Eso)'
          }]
        },
        {
          type: 'boolean',
          title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
          img: 'heisgood.png',
          audio: 'heisgood.mp3',
          subtitle: 'He is good',
          question: ['Chi uiiai rimaku suglla gintimanda', 'Esta frase habla de una persona.'],
          answer: true
        },
        {
          type: 'boolean',
          title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
          img: 'sheistired.png',
          audio: 'sheistired.mp3',
          subtitle: 'She is tired',
          question: ['Chi uiiai rimaku suglla gintimanda', 'Esta frase habla de una persona.'],
          answer: true
        },
        {
          type: 'advice',
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
          content: ['Chiua "chita" chiua ninga pudinchi kusakunaia (mana gintikunata).', 'Usamos "eso" para referirnos a cosas en singular (no a personas).'],
          example: [{
            text: 'The book is big (Chi libru kilkadu kan atun)',
            translate: 'The book is big (El libro es grande)'},
            {text: 'It is big (Chi kan atun)',
            translate: 'It is big (Es bueno)'
            }]
        },
        {
          type: 'completeOptions',
          title: ['Pitapas nigpi chi libru kan puka, ninga pudini:', 'Si le digo a alguien que mi libro es rojo, debería decir:'],
          question: ['$$$ is red'],
          options: ['He, It'],
          answer: 'It'
        },
        {
          type: 'advice',
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
          content: ['Kaikuna kankuna nukanchipa sutichi achka ningapa.', 'Estos son los pronombres personales de plural.'],
          example: [{
          text: 'We (Nukanchi)',
          translate: 'We (Nosotros)'},
          {text: 'You (Kankuna)',
          translate: 'You (Ustedes)'},
          {text: 'They (Paikuna)',
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
          type: 'simpleQuest',
          title: ['¿Ima ni ruaimanda "to be" chi kan sutipa?', '¿Qué forma del verbo "to be" es la correcta?'],
          audio: '',
          img: 'theyarefromyurayaco.png',
          question: ['They $$$ from Caquetá'],
          options: ['are', 'is'],
          answer: 'are'
        },
        {
          type: 'simpleQuest',
          title: ['Nuka rimagpi nukapa aillumanda ni iukani:', 'Si hablo de mi amigo debería decir:'],
          audio: '',
          img: 'imfromcaqueta.png',
          question: ['$$$ is from Caquetá'],
          options: ['They', 'He'],
          answer: 'He'
        },
        {
          type: 'completeOptions',
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi', 'Elige las palabras correctas para completar el espacio'],
          question: ['I $$$ Carlos'],
          options: ['is', 'am'],
          answer: 'am'
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
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
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
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
          type: 'simpleQuest',
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi', 'Elige las palabras correctas para completar el espacio'],
          audio: 'wearestudents.mp3',
          img: '',
          question: ['$$$ are friends'],
          options: ['We', 'She'],
          answer: 'We'
        },
        {
          type: 'organizeWord',
          title: ['Jundachi  chi iura pisiskapi chi kilkai suma kunaua.', 'Completa los espacios en blanco con las letras correctas.'],
          img: 'howareyou.png',
          audio: 'howareyou.mp3',
          text: 'How are $$$',
          options: ['y', 'o', 'u'],
          answer: 'you'
        },
        {
          type: 'simpleQuest',
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi pisiskapi', 'Elige las palabras correctas para completar el espacio'],
          audio: '',
          img: 'itisred.png',
          question: ['$$$ $$$ red'],
          options: ['is', 'I', 'are', 'It'],
          answer: 'It is'
        },
        {
          type: 'organizeWord',
          title: ['Jundachi  chi iura pisiskapi chi kilkai suma kunaua.', 'Completa los espacios en blanco con las letras correctas.'],
          img: 'theyarefromyurayaco.png',
          audio: 'theyarefromyurayaco.mp3',
          text: '$$$ are from Yurayaco',
          options: ['T', 'h', 'e', 'y'],
          answer: 'They'
        },
        {
          type: 'write',
          title: ['Jundachi chi nikusta imasakaska chi imagin', 'Completa la expresión de acuerdo a la imágen'],
          text: '$$$ is red',
          img: 'itisred',
          audio: '',
          answer: 'It' // Comprobar
        }
      ]
    },
    {
      id: 3,
      title: ['Tapuikuna', 'Examen'],
      icon: 'exam.svg',
      quests: [
        {
          type: 'hearOptions',
          title: ['Api chi rimaikuna imasa uiaskasina chi audiupi', 'Elige la respuesta que escuches en el audio'],
          audio: 'himynameisluisa.mp3',
          options: ['I\'m from Yurayaco', 'I\'m 13', 'Hi, my name is Luisa'],
          answer: 'Hi, my name is Luisa'
        },
        {
          type: 'simpleQuest',
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi', 'Elige las palabras correctas para completar los espacios en blanco.'],
          audio: '',
          img: 'whereareyoufrom.png',
          question: ['Where are you from? $$$ Yurayaco'],
          options: ['I\m from', 'I\m'],
          answer: 'I\m from'
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
          options: ['Where', 'are', 'you', 'from', '?'],
          answer: 'Where are you from ?'
        },
        {
          type: 'simpleQuest',
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi', 'Elige las palabras correctas para completar los espacios en blanco.'],
          audio: '',
          img: '',
          question: ['How old $$$ you?'],
          options: ['are', 'am', 'is'],
          answer: 'are'
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
          options: ['I', 'am', '13', 'years', 'old'],
          answer: 'I am 13 years old'
        },
        {
          type: 'organizeWord',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
          img: 'whatisyourname.png',
          audio: 'whatisyourname.mp3',
          text: 'What\s your $$$ ?',
          options: ['n', 'a', 'm', 'e'],
          answer: 'name'
        },
        {
          type: 'write',
          title: ['¿Ima ni ruaimanda "to be" chi kan sutipa?', '¿Qué forma del verbo "to be" es la correcta?'],
          text: 'I\'m Alexander. I $$$ from Yurayaco',
          img: '',
          audio: '',
          answer: 'am' // Comprobar
        },
        {
          type: 'write',
          title: ['Jundachi chi nikusta imasakaska chi imagin', 'Completa la expresión de acuerdo a la imágen'],
          text: 'I\'m $$$ Caquetá',
          img: 'imfromcaqueta.png',
          audio: '',
          answer: 'from' // Comprobar
        },
        {
          type: 'write',
          title: ['Jundachi chi nikusta imasakaska chi imagin', 'Completa la expresión de acuerdo a la imágen'],
          text: 'How old $$$ you?',
          img: '',
          audio: 'howoldareyou.mp3',
          answer: 'are' // Comprobar
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
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
    title: ['¿Maipita kausangui?', '¿Dónde vives?'],
    icon: 'https://image.flaticon.com/icons/svg/1041/1041020.svg',
    description: ['Nisunchi mai uachuta kausangui - rimaikuna ningapa mai uachumanda "in, at, near".', 'Describir el lugar donde vivimos - Preposiciones de lugar "in, at, near".'],
    lessons: [{
      lesson_id: 1,
      title: ['Kausani chipi...', 'Vivo en...'],
      items: [
        {
        title: ['Rimaikuna', 'Vocabulario'],
        icon: 'vocabulary.svg',
        quests: [
          {
            type: 'advice',
            title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
            content: ['Kai licciunpi, iachaikusunchin ningapa maipita kausanakunchi.', 'En esta lección, aprenderemos a hablar de dónde vivimos.'],
            example: [{
              text: 'City (Iagta atun)',
              translate: 'City (Ciudad)'},
              {text: 'town (Iagta anchi)',
              translate: 'town (Pueblo)'},
              {text: 'Near (Ña kai chaiaskamanda)',
              translate: 'Near (Cerca de)'},
              {text: 'Far from (Chi karuladumanda)',
              translate: 'Far from (Lejos de)'},
              {text: 'Big (Atun)',
              translate: 'Big (Grande)'},
              {text: 'Small (Anchi)',
              translate: 'Small (Pequeño)'},
              {text: 'Busy city (Iagta atun achka gintikunaua)',
              translate: 'Busy city (Ciudad concurrida'},
              {text: 'Quiet city (Iagta atun suma kausangapa)',
              translate: 'Quiet city (Ciudad tranquila'}]
          },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
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
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
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
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'town.png',
          audio: 'town.mp3',
          text: ['Town', 'Iagta anchi', 'Pueblo', ],
          example: {
            text: ['They live in a town', 'Paikuna kausanakun chi iagta anchipi', 'Ellos viven en un pueblo'],
            audio: 'theyliveinatown.mp3'
          }
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'florenciaisabusycity.png',
          audio: 'busy',
          text: ['Town', 'Iagta anchi', 'Pueblo', ],
          example: {
            text: ['Florencia is a busy city', 'Flurincia kan iagta atun achka gintikunaua', 'Florencia es una ciudad concurrida'],
            audio: 'florenciaisabusycity.MP3'
          }
        },
        {
          type: 'advice',
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
          content: ['Chi ni "hometown" kaiua ningapa pudinchi nukanchi samukuska iagtamanda.', 'El término "hometown" se emplea para indicar la ciudad en la que crecimos.'],
          example: [{
            text: 'My hometown is Florencia (Nuka iagta kan Flurincia.)',
            translate: 'My hometown is Florencia (Mi ciudad natal es Florencia)'},
          ]},
        {
          type: 'boolean',
          title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
          img: 'hometown.png',
          audio: 'hometown.mp3',
          subtitle: 'Hometown',
          question: ['Kai kilkadu ruikuna "hometown" kaiua pudinchi rimangapa nuka mai uiñaskamanda.', 'La palabra "hometown" se utiliza para hablar del lugar en el que crecimos.'],
          answer: true
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'helivesinatownnearmorelia.png',
          audio: 'near.mp3',
          text: ['Near', 'Ña kai chaiaskamanda', 'Cerca de', ],
          example: {
            text: ['He lives in a town near Morelia', 'Pai kausaku sug iagta chi laduia Moreliapi', 'Él vive en un pueblo cerca a Morelia'],
            audio: 'helivesinatownnearmorelia.mp3'
          }
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'icomefromabigtown.png',
          audio: 'big.mp3',
          text: ['Big', 'Atun', 'Grande', ],
          example: {
            text: ['I come from a big town', 'Kani atun iagtamanda', 'Soy de un pueblo grande'],
            audio: 'icomefromabigtown.mp3'
          }
        },
        {
          type: 'hearOptions',
          title: ['Tupui imasa uiaska rimaita', 'Selecciona la palabra que escuches'],
          audio: 'icomefromabigtown.mp3',
          options: ['Cerca', 'Grande', 'Pueblo'],
          answer: 'Grande'
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'mytownisquietsmall.png',
          audio: 'small.mp3',
          text: ['Small', 'Anchi', 'Pequeño', ],
          example: {
          text: ['My town is quiet small', 'Nukapa iagta kan achka anchi', 'Mi pueblo es bastante pequeño'],
          audio: 'mytownisquitesmall.mp3'
          }
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
          img: 'myhometownisveryquiet.png',
          audio: 'quiet.mp3',
          text: ['Quiet city', 'Iagta atun suma kausangapa', 'Ciudad tranquila', ],
          example: {
          text: ['My hometown is very quiet', 'Nukapa iagta kan suma kausangapa', 'Mi ciudad natal es muy tranquila '],
          audio: 'myhometownisveryquiet.mp3'
          }
        },
        {
          type: 'hearOptions',
          title: ['Tupui imasa uiaska rimaita', 'Selecciona la palabra que escuches'],
          audio: 'iliveinaquiettown.mp3',
          options: ['busy', 'small', 'quiet'],
          answer: 'quiet'
        }]
        },
        {
          title: ['Parlarikuna ', 'Diálogo'],
          icon: 'dialogue.svg',
          quests: [{
          type: 'dialogue',
          options: ['Where', 'busy city', 'I live in', 'quiet'],
          answer: 'Where I live in quiet busy city',
          conversation: [{
            name: 'Luisa',
            msg: '$$$ do you live?',
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
            msg: '$$$ Florencia',
            img: 'diana.svg',
            audio: 'iliveinflorencia.mp3',
          },
          {
            name: 'Karen',
            msg: 'Is it $$$?',
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
        title: ['ilkai rimaikuna', 'Gramática'],
        icon: 'books.svg',
        quests: [
          {
            type: 'advice',
            title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
            content: ['Ningapa chi kausadirukunamanda maipita taririnkuna chikuna pudinchi rimangapa chi rimaikuna chikuna kausadirukunamanda.', 'Para indicar el lugar donde se encuentra algo o alguien, podemos usar las preposiciones de lugar.'],
            example: [{
              text: 'We are at the school (Kachi iachaikudiru wasipi)',
              translate: 'We are at the school (Estamos en el colegio)',
              }]
          },
        {
          type: 'advice',
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
          content: ['Sumagllami kai "in" ruanchi, anchi iagtakunamanda, atun iagtakunamanda y achka atun iagtakuna', 'Normalmente utilizamos "in" con pueblos, ciudades y países.'],
          example: [{
          text: 'You live in Bogotá (Kan kausangui chi Bugatapi)',
            translate: 'You live in Bogotá (Tú vives en Bogotá)',
              }]
          },
        {
          type: 'boolean',
          title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
          img: 'helivesinatownnearmorelia.png',
          audio: 'helivesinatownnearmorelia.mp3',
          subtitle: 'He lives in a town near Morelia',
          question: ['Ruanchimi kai "it" rimangapa chi achaka atun iagtamanda y iagta atunmanda" kaiua pudinchi rimangapa nuka mai uiñaskamanda.', 'Usamos "in" con países y ciudades'],
          answer: true
        },
        {
          type: 'definition',
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
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
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
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
          title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
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
          title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
          content: ['Ruanchimi kai "at" sutipa chi luarwa', 'Usamos "at" con un lugar específico o exacto.'],
          example: [{
          text: 'We are at the chagra (Nukanchi  kaipi kanchi chagrapi)',
            translate: 'We are at the chagra  (Nosotros estamos en la chagra)',
              }]
          },
        {
          type: 'boolean',
          title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
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
        title: ['Tapuikuna', 'Examen'],
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
          type: 'simpleQuest',
          title: ['Tupui chi rimaikuna suma kunata churanagapa chi iurakuna pisiskapi', 'Elige las palabras correctas para completar los espacios en blanco.'],
            audio: '',
            img: '',
            question: ['She $$$ in Yurayaco'],
            options: ['live', 'lives'],
            answer: 'lives'
        },
        {
          type: 'organize',
          title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
          options: ['Where', 'do', 'you', 'live', '?'],
          answer: ['Where', 'do', 'you', 'live', '?']
        },
        {
          type: 'write',
          title: ['Jundachi chi iura pisiskapi chi ianapaiua audiuwa', 'Completa el espacio en blanco con ayuda del audio'],
          text: 'Florencia is a $$$ city',
          img: '',
          audio: 'florenciaisabusycity.mp3',
          answer: 'busy' // Comprobar
        },
        {
          type: 'write',
          title: ['Jundachi chi nikusta imasakaska chi imagin', 'Completa la expresión de acuerdo a la imágen'],
          text: '$$$ do you live',
          img: 'wheredoyoulive.png',
          audio: '',
          answer: 'Where' // Comprobar
        }]
        }
    ]}
    ]
  }];
  return {users, themes};
  }
}

/*Tipos preguntas: Dialogos, definicion, escuchar, ordenar, verdaderoFalse,
consejo, parejas, completaAudio, completarOPciones, completaEscribir */
 /*
{
  type: 'definition',
  title: ['Lii y uiai chi nikuskata', 'Lee y escucha la expresión'],
  img: 'https://image.flaticon.com/icons/svg/1041/1041020.svg',
  audio: 'hello.mp3',
  text: ['Hello', 'Au', 'Hola']
}
{
  type: 'boolean',
  title: ['¿Sumakan o mana sumakan?', '¿Verdadero o falso?'],
  img: 'hi.png',
  audio: 'hi.mp3',
  subtitle: 'Hi',
  question: ['Sug rigcha nii "Hello"', 'Otra manera de decir "Hello"'],
  answer: true
}
{
  type: 'write',
  title: ['Kilkai sug rigcha nii "Hello"', 'Escribe otra manera de decir "Hello"'],
  text: 'How $$$ you',
  img: '',
  audio: '',
  answer: 'Hi' // Comprobar
}
{
  type: 'simpleQuest',
  title: ['¿Imasata pudinchi ningapa nukapa suti kan?', '¿Cómo podemos decir nuestro nombre?'],
  audio: '',
  img: 'im.png',
  options: ['I\'m…', 'Hi', 'Hello'],
  answer: 'I\'m…'
}
{
  type: 'advice',
  title: ['¡Kaipi iukangui sug iuiachiri!', '¡Aquí tienes un consejo!'],
  content: ['I’m niraian chillatata “My name is…” (suti kani…). ', 'I\'m significa lo mismo que "My name is…" (Me llamo…)'],
  example: [{
    text: 'I am Alexander = I\'m Alexander (Nuka kani Alexander)',
    translate: 'I am Alexander = I\'m Alexander (Soy Alexander)'
  }]
}
{
  type: 'organize',
  title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
  options: ['How', 'is ', 'it', 'going', '?'],
  answer: 'How is it going ?'
}
{
  type: 'organizeWord',
  title: ['Sugiaiapillachi chi rimaikunata imasa suma rikuskasina.', 'Selecciona las palabras en el orden correcto.'],
  img: 'flora.png',
  text: 'You $$$ Flora',
  options: ['a', 'r', 'e'],
  answer: 'are'
}
{
  type: 'completeOptions',
  title: ['Tupui suma ainii chi tapuita', 'Elige la respuesta correcta a la pregunta'],
  question: ['A: How is it going?', 'B: $$$'],
  options: ['Fine, thanks', 'Nice to meet you'],
  answer: 'Fine, thanks'
}
{
  type: 'hear',
  title: ['Kilkai ima uia{
  type: 'hearOptions',
  title: ['Api chi rimaikuna imasa uiaskasina chi audiupi', 'Elige la respuesta que escuches en el audio'],
  audio: 'finethanks.mp3',
  options: ['Fine, thanks', 'I\'m good, thanks', 'Not bad, thanks '],
  answer: 'Fine, thanks'
}kuskasina', 'Escribe lo que oigas'],
  audio: 'hello.mp3',
  answer: 'Hello' // Comprobar
}

{
  type: 'hearWrite',
  title: ['Jundachi chi iura pisiskapi chi ianapaiua audiuwa', 'Completa el espacio en blanco con ayuda del audio'],
  text: 'She $$$ good',
  audio: 'sheisgood.mp3',
  answer: 'is' // Comprobar
}
{
  type: 'linkWords',
  title: ['Sugiaiapillachi chi rimaikunata', 'Une las frases'],
  options: ['Nice to meet you', 'How is it going?', 'Fine, thanks'],
  items: ['Pai kanta rigsinmanda', 'Sumaglla, pai', '¿Imasata riku tukui?'],
  answer: 'Pai kanta rigsinmanda ¿Imasata riku tukui? Sumaglla, pai'
}
{
  type: 'chooseWord',
  title: ['Apai chi ruai "to be" sug sug chi rimaikunapi', 'Elige el verbo "to be" en cada frase'],
  options: ['He is 30', 'We are good', 'I am tired'],
  answer: 'is are am'
}
}]*/

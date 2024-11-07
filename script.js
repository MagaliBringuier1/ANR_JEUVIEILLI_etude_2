// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Effet des messages de prévention sur les comportements de jeux",
    "description": "Etude visant à mesurer l'impact de certains messages de prévention utilisé dans les jeux de hasard et d'argent sur les comportements effectifs du jeu. Une mesure de l'illusion de contrôle est également réalisée. \n\n",
    "repository": "",
    "contributors": "Magali Bringuier \u003Cmagali.bringuier@univ-tlse2.fr\u003E"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Consentement libre et éclairé - Impact des messages préventifs sur les comportements de jeu.  ",
          "content": "\u003Cp\u003E \u003Cb\u003E Chercheur titulaire responsable scientifique du projet : \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EValérie Le Floch, Professeure à l’Université Toulouse Jean Jaurès, laboratoire CNRS CLLE (Cognition, Langues, Langage et Ergonomie).\nE-mail : valerie.le-floch@univ-tlse2.fr\u003C\u002Fp\u003E\n\n\u003Cb\u003E But du projet de recherche, confidentialité et respect de la vie privée : \u003C\u002Fb\u003E\n\u003Cp style=\"text-align: justify;\"\u003ECe projet de recherche a pour objectif d’évaluer l’impact des messages de préventions sur les comportements de jeu. En acceptant de participer à cette étude, vous serez amené.e à prendre part à une simulation de jeu, puis à répondre à une série de questions. Vous disposez du temps que vous souhaitez pour répondre à cette étude. La participation à cette étude est volontaire et totalement anonyme, de ce fait, votre participation n’a absolument rien d’obligatoire. Vous pouvez stopper votre participation à tout moment sans avoir à vous justifier ni encourir aucune responsabilité. Votre consentement ne décharge pas les organisateurs de la recherche de leurs responsabilités et vous conservez tous vos droits garantis par la loi. \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EAu cours de cette expérience, vous acceptez que vos réponses soient enregistrées.  \u003Cb\u003E \u003Cu\u003E Vous comprenez que les informations recueillies sont strictement confidentielles et à usage exclusif des investigateurs concernés. L’adresse IP de votre ordinateur ne sera pas enregistrée et les données sociodémographiques que nous récolterons ne permettront pas de vous identifier, même par recoupement d’informations.  \u003C\u002Fu\u003E \u003C\u002Fb\u003E \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EDe plus, la présentation des données de cette expérience durant des colloques ou des publications scientifiques sera faite de telle sorte qu'il ne sera pas possible d'identifier les participants. Vous acceptez que les données enregistrées à l’occasion de cette étude puissent être conservées pendant 10 ans dans une base de données et faire l’objet d’un traitement informatisé non nominatif. Vous pourrez prendre connaissance des résultats généraux de la présente étude, en contactant le responsable scientifique de l’étude. \u003C\u002Fp\u003E\n\n\u003Cdiv style=\"border-radius: 5px; border: 2px solid; padding: 3px;\"\u003ECette étude comprend une phase de jeu, elle est donc fortement déconseillée aux personnes en cours de traitement du jeu excessif ou ressentant un problème de jeu. Le cas échéant, nous vous invitons à ne pas participer à cette étude et, si vous le souhaitez, à appeler le 09-74-75-13-13 (appel non surtaxé). \u003C\u002Fdiv\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EEn signant le formulaire de consentement, \u003Cb\u003Evous certifiez que vous avez lu et compris les renseignements ci-dessus, et qu’on vous a avisé que vous étiez libre d’annuler votre consentement ou de vous retirer de cette recherche, sans aucun préjudice. \u003C\u002Fb\u003ENéanmoins, une fois que vous aurez validé le questionnaire, \u003Cb\u003Eil ne sera plus possible de vous retirer de cette recherche,\u003C\u002Fb\u003E car nous n’aurons aucune donnée identifiante, pas même votre adresse IP, identifiant la localisation de votre connexion.\u003C\u002Fp\u003E\n \n\n \n\n \n"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbr\u003E\r\n\r\n\u003Ccenter\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_oui\" name=\"consent\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"consent_oui\"\u003E Oui, j'ai compris, j'accepte de participer à cette étude\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_non\" name=\"consent\" value=\"0\"\u003E\r\n  \u003Clabel for=\"consent_non\"\u003E Non, je refuse de participer à cette étude\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003Cbr\u003E\r\n\r\n    \u003Cbutton id=\"consent_next\" type=\"submit\"\u003ESuivant\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parent.parameters.contrebal_set = this.random.choice(['hasard', 'risque', 'controle'])
}
      },
      "title": "consentement",
      "width": "m"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cp\u003ENous remercions de l'intérêt que vous avez porté à cette étude.\u003C\u002Fp\u003E\n\u003Cp\u003EVous avez été redirigé sur cette page car vous avez refusé de participer à l'étude. \u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003E\u003Cb\u003ESi c'est une erreur et que vous souhaitez participer à notre étude, \nveuillez cliquer à nouveau sur le lien afin de relancer l'étude.\u003C\u002Fb\u003E \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cb\u003ESi vous ne souhaitez pas participer, vous pouvez fermer la page en cliquant sur la croix. \u003C\u002Fb\u003E\u003C\u002Fp\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "if_consent_no",
      "tardy": true,
      "skip": "${this.state.consent!=0}"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "if_consent_oui",
      "tardy": true,
      "skip": "${this.state.consent!= 1}",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.parent.parameters.message = this.random.choice(['Pour bien jouer, il faut parfois moins jouer',"Jouez malin, jouez avec modération","Reprendre le contrôle pour que le jeu reste un plaisir", "Restez maître du jeu ! Fixez vos limites"]);
}
          },
          "title": "Sequence_controle",
          "tardy": true,
          "skip": "${this.state.contrebal_set != 'controle'}",
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
const randomID = function(){
  const length = 10;
  let result = "";
  const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

//const pptID = randomID();
this.parent.parameters.pptID = randomID();
}
              },
              "title": "randomise_task_order",
              "shuffle": true,
              "content": [
                {
                  "title": "jeu",
                  "type": "lab.flow.Sequence",
                  "parameters": {},
                  "plugins": [],
                  "metadata": {
                    "title": "test_game9",
                    "description": "Jeu avec fausse image chargée dans \"static\" pour montrer à quoi ça ressemblerait\n*bouton arrêter le jeu fonctionne pas mais avec q,Q pressé ça marche*",
                    "repository": "",
                    "contributors": ""
                  },
                  "tardy": true,
                  "messageHandlers": {},
                  "files": {},
                  "responses": {},
                  "content": [
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_consigne_jeu",
                      "content": [
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "training_game_round": "1",
                              "": ""
                            },
                            {
                              "training_game_round": "2",
                              "": ""
                            },
                            {
                              "training_game_round": "3",
                              "": ""
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Loop_consigne_jeu",
                          "indexParameter": "count_training_game",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Sequence_consigne_jeu_2",
                            "tardy": true,
                            "skip": "${this.state.instrjeucheck== 1}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Ch3\u003EVous allez pouvoir jouer à un jeu qui ressemble à un jeu de hasard et d'argent.\u003C\u002Fh3\u003E \r\n  \u003Cp\u003EVous disposez d’un capital de départ de 299 jetons.\u003C\u002Fp\u003E\r\n  \u003Cp\u003E\u003Cb\u003ECes 299 jetons sont à vous.\u003C\u002Fp\u003E\r\n  \u003Cbr\u003E\r\n  \u003Cp\u003EVotre but est de gagner \u003Cu\u003Ele plus de jetons possible.\u003C\u002Fu\u003E\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu1"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Le jeu se présente ainsi\u003C\u002Fh3\u003E\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${this.files[\"jeu_consigne1.PNG\"]}\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne1.PNG": "embedded\u002F23c9add9f482e5e3c4e6a6d180926fc4bc1c985369d506accfde3d4e31ea2625.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu2"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Première étape\u003C\u002Fh3\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous devez donc choisir un tas de cartes :\u003C\u002Fu\u003E\u003C\u002Fp\u003E\r\n\u003Cp\u003EChaque tas de cartes présente des probabilités de gain différentes et permet de remporter des sommes variables :\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 1er tas en partant de la gauche a 18 chances sur 37 de gagner et peut vous faire remporter 1x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 2ème tas en partant de la gauche a 12 chances sur 37 de gagner et peut vous faire remporter 2x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 3ème tas en partant de la gauche a 3 chances sur 37 de gagner et peut vous faire remporter 11x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 4ème tas en partant de la gauche a 1 chance sur 37 de gagner et peut vous faire remporter 35x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003ENe vous inquiétez pas, il ne s’agit pas d’une épreuve de mémorisation. \r\nLes probabilités de gain et les gains associés sont écrits sur les tas de cartes comme sur l’image ci-dessous.\r\n\u003C\u002Fp\u003E\r\n\u003Cp\u003EVous pouvez parier sur \u003Cu\u003Eun seul\u003C\u002Fu\u003E tas de cartes, mais vous pourrez en changer à chaque tour si vous le désirez.\u003C\u002Fp\u003E\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${this.files[\"jeu_consigne2.png\"]}\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"\u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne2.png": "embedded\u002Fc7accd742bee68166e63cfcc54897282baf7abd243aa5c98308585bbea08ae1c.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu3"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003EVous devez \u003Cb\u003Echoisir le montant de votre mise.\u003C\u002Fb\u003E\u003C\u002Fp\u003E \r\n\u003Cp\u003EVous misez autant de points que vous désirez. Vous ne pouvez miser que des nombres entiers. Vous ne pouvez pas miser plus de points que vous n’en possédez !\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne3.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"  \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne3.png": "embedded\u002Fcca79cc4acf65793cc2e58c725a9cf71a5cc8e281b067dbaf371752b223deb23.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu4"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003EEnsuite vous \u003Cu\u003Emisez\u003C\u002Fu\u003E.\u003C\u002Fp\u003E\r\n\u003Cp\u003EL’ordinateur tire alors la première carte du tas sélectionné. \u003C\u002Fp\u003E\r\n\u003Cp\u003EÀ la fin de chaque tour, vos gains ou vos pertes seront affichés à l’écran.\u003C\u002Fp\u003E\r\n\u003Cp\u003EÀ chaque tour, les cartes de chaque tas sont automatiquement mélangées et la dernière carte sortie est remise en jeu dans le tas de cartes correspondant (jeu de tirage avec remise).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne4.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"  \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne4.png": "embedded\u002Fd9d6cf7960fe01b2200ef0803d3fbb16edffc8abce1208a587bc6957b5638cb5.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu5"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous pourrez jouer autant de tours que vous voulez\u003C\u002Fu\u003E. \u003Cb\u003ESi vous décidez d’arrêter\u003C\u002Fb\u003E, appuyez sur la touche \"\u003Cb\u003Eq\u003C\u002Fb\u003E\" de votre clavier. Nous encaisserons alors vos jetons et vous passerez à l’étape suivante de l’enquête.\u003C\u002Fp\u003E\r\n\r\n\u003Cu\u003E\u003Cb\u003EAttention : Pour \u003Cb\u003EQUITTER LE JEU\u003C\u002Fb\u003E, appuyez sur la touche \"q\" de votre clavier. Il ne faut \u003Cb\u003Epas\u003C\u002Fb\u003E quitter via le navigateur (croix rouge), sinon vous mettrez fin à l'expérience et vos réponses ne seront pas enregistrées.\u003C\u002Fu\u003E\u003C\u002Fb\u003E\r\n\u003Cp\u003EComme vous pouvez quitter le jeu quand vous le voulez, nous vous rappellerons la procédure à suivre à chacun de vos tours comme ci dessous\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne5.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\" \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne5.png": "embedded\u002F40f7efc10e784f1723c702b9e1fc78a5a768bb3bb64b3a70be54a979ebea4127.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu6"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous avez deux tours d’entraînement pour vous familiariser avec le jeu.\u003C\u002Fp\u003E\u003Cp\u003E À l’issue de ces 2 tours, votre compteur sera mis à zéro et vos jetons seront réellement comptabilisés.\u003C\u002Fu\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "Capture - Copie (2).PNG": "embedded\u002F25fd806f52d44d2997b9d14f183c1688a9f3482f74e799d9d961cfc2ee348af3.PNG",
                                  "Capture - Copie (3).PNG": "embedded\u002Fbf1012572e261295fb686ca94c7812b9904764cd9b18bf4233e0b9d5af7dd5ee.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu7"
                              },
                              {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {
                                  "before:prepare": function anonymous(
) {
this.parameters.cagnotte_t = 299;

}
                                },
                                "title": "Sequence_training_jeu + charge cagnotte training",
                                "content": [
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Ch3\u003EEntrainement\u003C\u002Fh3\u003E\r\n\u003Cp\u003E Voici un entrainement pour vous familiariser avec l'interface du jeu. \u003C\u002Fp\u003E\r\n\u003Cp\u003E Votre capital de départ est de 299 jetons. \u003C\u002Fp\u003E\r\n\u003Cp\u003E Tous ces points sont à vous. Votre but est de gagner le plus de jetons possibles. \u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "consigne_training"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte_t} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\u003Ch3\u003E\u003Cp\u003EAfin de vérifier que vous avez bien compris comment fonctionne le jeu, nous vous demandons de : \u003Cb\u003EMiser 10 jetons sur la carte qui, si vous gagnez, vous fera remporter 2x votre mise.\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte_t}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003E jetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "undefined": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          } else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

        

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)+outcome_mise;
      } else {
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable

this.parent.parameters.cagnotte_t = this.state.cagnotte_t;



this.parent.parameters.check_instr_jeu_1 = 0;

if (this.data.tas_choisi == "tas2") {
 this.parent.parameters.check_instr_jeu_1 = 1;
 if (this.state.check_instr_jeu_2 == 1){
  this.parent.parent.parameters.instrjeucheck = 1;
 }
}



console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);

}
                                    },
                                    "title": "training_tas_2",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte_t}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
this.state.cagnotte_t = this.parent.parameters.cagnotte_t || this.parameters.cagnotte_t;  // Valeur par défaut si elle n'a pas été encore initialisée

}
                                    },
                                    "title": "resultat",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text",
                                        "title": "",
                                        "content": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "empty_screen",
                                    "timeout": "500",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte_t} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\u003Ch3\u003E\u003Cp\u003EAfin de vérifier que vous avez bien compris comment fonctionne le jeu, nous vous demandons de : \u003Cb\u003EMiser 25 jetons sur la carte qui offre 18 chances de gagner sur 37.\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte_t}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003E  jetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "undefined": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
this.state.cagnotte_t = this.parent.parameters.cagnotte_t || this.parameters.cagnotte_t;  // Valeur par défaut si elle n'a pas été encore initialisée


 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          } else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)+outcome_mise;
      } else {
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable



this.parent.parameters.check_instr_jeu_2 = 0;

if (this.data.tas_choisi == "tas1") {
 this.parent.parameters.check_instr_jeu_2 = 1;
 if (this.state.check_instr_jeu_1 == 1){
  this.parent.parent.parameters.instrjeucheck = 1;
 }
}




console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);


}
                                    },
                                    "title": "training_tas_1",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte_t}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "resultat",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text",
                                        "title": "",
                                        "content": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "empty_screen",
                                    "timeout": "500",
                                    "tardy": true
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_jeu",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "required": true,
                              "type": "html",
                              "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Jeu \u003C\u002Fh3\u003E\r\n\u003Cp\u003EVous allez pouvoir jouer à un jeu de hasard.\u003C\u002Fp\u003E \r\n\u003Cp\u003EVous disposez d’un capital de départ de 299 jetons. Ces 299 jetons sont à vous. Votre but est de gagner le plus de jetons possible.\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
                              "name": ""
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "right",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.parameters.cagnotte = 299;


}
                          },
                          "title": "charge variable cagnotte"
                        },
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "round_game": "1"
                            },
                            {
                              "round_game": "2"
                            },
                            {
                              "round_game": "3"
                            },
                            {
                              "round_game": "4"
                            },
                            {
                              "round_game": "5"
                            },
                            {
                              "round_game": "6"
                            },
                            {
                              "round_game": "7"
                            },
                            {
                              "round_game": "8"
                            },
                            {
                              "round_game": "9"
                            },
                            {
                              "round_game": "10"
                            },
                            {
                              "round_game": "11"
                            },
                            {
                              "round_game": "12"
                            },
                            {
                              "round_game": "13"
                            },
                            {
                              "round_game": "14"
                            },
                            {
                              "round_game": "15"
                            },
                            {
                              "round_game": "16"
                            },
                            {
                              "round_game": "17"
                            },
                            {
                              "round_game": "18"
                            },
                            {
                              "round_game": "19"
                            },
                            {
                              "round_game": "20"
                            },
                            {
                              "round_game": "21"
                            },
                            {
                              "round_game": "22"
                            },
                            {
                              "round_game": "23"
                            },
                            {
                              "round_game": "24"
                            },
                            {
                              "round_game": "25"
                            },
                            {
                              "round_game": "26"
                            },
                            {
                              "round_game": "27"
                            },
                            {
                              "round_game": "28"
                            },
                            {
                              "round_game": "29"
                            },
                            {
                              "round_game": "30"
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "keypress(q,Q)": "quit_game"
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "boucle_jeu",
                          "indexParameter": "count_trials_game",
                          "tardy": true,
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "keypress q,Q": "quit_game"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "sequence_game",
                            "tardy": true,
                            "skip": "${this.state.cagnotte==0}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\r\n\u003Ch3\u003E${this.state.message}\u003C\u002Fh3\u003E\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003Ejetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "hidden",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {
                                  "commit": function anonymous(
) {
 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          }else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte = parseFloat(this.state.cagnotte)+outcome_mise;
      } else {
        this.state.cagnotte = parseFloat(this.state.cagnotte)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable

console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);

}
                                },
                                "title": "jeu_et_charge_fonction_miser",
                                "tardy": true
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "resultat",
                                "tardy": true
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "title": "",
                                    "content": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "hidden",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "empty_screen",
                                "timeout": "500"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "Merci de cliquer sur continuer -\u003E pour passer à la suite de l'étude. \n",
                          "title": "Le jeu est terminé"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "end_jeu"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "eemdic",
                  "tardy": true,
                  "content": [
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_eemdic_consigne",
                      "content": [
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "instruction_loop": "1",
                              "": ""
                            },
                            {
                              "instruction_loop": "2",
                              "": ""
                            },
                            {
                              "instruction_loop": "3",
                              "": ""
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Loop_eemdic_consigne",
                          "indexParameter": "count_loop_instruction",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Sequence_emmdic_consigne2",
                            "tardy": true,
                            "skip": "${this.state.instrcheck== 1}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "title": "Vous allez devoir répondre à un questionnaire",
                                    "content": "Nous vous proposons un entrainement pour vous familiariser avec le format de la grille de réponse."
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_1"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "content": "",
                                    "title": "Voici à quoi ressemble la grille"
                                  },
                                  {
                                    "required": true,
                                    "type": "image",
                                    "src": "${ this.files[\"eemdic.png\"] }",
                                    "width": "",
                                    "height": "",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "eemdic.png": "embedded\u002Ff2a7684be8047bc072d6f9b70770a9151fa412038b65a09c33357331c302b291.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_2"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "content": "A chaque fois, deux items vous seront proposés. Un écrit en bleu, un autre écrit en vert. \nPour vous positionnez sur la matrice de réponse, nous vous conseillons de procéder par étapes. ",
                                    "title": "Consignes"
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "consigneEEMDIC.PNG": "embedded\u002F1bc9d6c59044b4251c8ae03399ebec3508fc15be1903c395aa22803e80054fe0.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_3"
                              },
                              {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "Sequence_eemdic_consigne3",
                                "content": [
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. \n\u003Cbr\u003E",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E  \r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {

this.parent.parameters.check_instr_6_6 = 0;

if (this.data.reponse_t == "6_6") {
 this.parent.parameters.check_instr_6_6 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}

}
                                    },
                                    "title": "eemdic_training_1_6_6",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_1",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_1_1 = 0;

if (this.data.reponse_t == "1_1") {
 this.parent.parameters.check_instr_1_1 = 1;
 if (this.state.check_instr_6_6 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_2_1_1",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_2",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_6_1 = 0;

if (this.data.reponse_t == "6_1") {
 this.parent.parameters.check_instr_6_1 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_6 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_3_6_1",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_3",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_1_6 = 0;

if (this.data.reponse_t == "1_6") {
 this.parent.parameters.check_instr_1_6 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_6_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_4_1_6",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_4",
                                    "timeout": "500"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "Passons à l'étape suivante. \n",
                          "title": "L'entrainement est terminé !"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "training_is_good"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "eemdic_pos": "Mes gains sont la preuve que j'ai des compétences et des connaissances liées au jeu",
                          "eemdic_neg": "Mes pertes sont la preuve que je n'ai pas de compétences ni de connaissances liées au jeu"
                        },
                        {
                          "eemdic_pos": "Je devrais garder une trace de mes précédentes combinaisons gagnantes afin de pouvoir déterminer comment je devrais jouer à l'avenir",
                          "eemdic_neg": "Je devrais garder une trace de mes précédentes combinaisons perdantes afin de pouvoir déterminer comment je devrais jouer à l'avenir"
                        },
                        {
                          "eemdic_pos": "Je peux analyser mes gains pour me donner des stratégies qui me permettront de devenir un meilleur joueur",
                          "eemdic_neg": "Je peux analyser mes pertes pour me donner des stratégies qui me permettront de devenir un meilleur joueur"
                        },
                        {
                          "eemdic_pos": "Je gagne parce que je passe une bonne journée ou que c'est mon jour de chance",
                          "eemdic_neg": "Je perds parce que je passe une mauvaise journée ou que c'est mon jour de malchance"
                        },
                        {
                          "eemdic_pos": "Je me considère comme une personne chanceuse",
                          "eemdic_neg": "Je me considère comme une personne malchanceuse"
                        },
                        {
                          "eemdic_pos": "Les gains sont plus susceptibles de se produire sur une machine chaude (qui est utilisée depuis un moment)",
                          "eemdic_neg": "Les pertes sont plus susceptibles de se produire sur une machine froide (qui n'a pas été utilisée depuis un moment)"
                        },
                        {
                          "eemdic_pos": "Plus je suis familier avec un jeu, plus je suis susceptible de gagner",
                          "eemdic_neg": "Moins je suis familier avec un jeu, plus je suis susceptible de perdre"
                        },
                        {
                          "eemdic_pos": "Certains joueurs sont juste nés chanceux",
                          "eemdic_neg": "Certains joueurs sont juste nés malchanceux"
                        },
                        {
                          "eemdic_pos": "C'est un bon conseil de conserver la même paire de dés ou les mêmes numéros sur une série gagnante",
                          "eemdic_neg": "C'est un bon conseil de changer de paire de dés ou de numéros sur une série perdante"
                        },
                        {
                          "eemdic_pos": "Je crois que le destin joue en ma faveur quand je gagne",
                          "eemdic_neg": "Je crois que le destin joue contre moi quand je perds"
                        },
                        {
                          "eemdic_pos": "J'ai plus de chances de gagner à la loterie ou au jeu de grattage si je choisis moi-même mes numéros ou mon ticket",
                          "eemdic_neg": "J'ai plus de chances de perdre à la loterie ou au jeu de grattage si je ne choisis pas moi-même mes numéros ou mon ticket"
                        },
                        {
                          "eemdic_pos": "Si je gagne, c'est parce que j'ai bien joué",
                          "eemdic_neg": "Si je perds, c'est parce que j'ai mal joué"
                        },
                        {
                          "eemdic_pos": "Même les choses de la vie que je ne peux pas contrôler\u002Fmaîtriser ont tendance à se passer comme je le veux parce que j'ai de la chance",
                          "eemdic_neg": "Même les choses de la vie que je ne peux pas contrôler\u002Fmaîtriser ont tendance à ne pas se passer comme je le veux parce que je suis malchanceux"
                        },
                        {
                          "eemdic_pos": "Il y a quelque chose comme la chance qui favorise certaines personnes plus que d'autres",
                          "eemdic_neg": "Il y a quelque chose comme la malchance qui affecte certaines personnes plus que d'autres"
                        },
                        {
                          "eemdic_pos": "Si j'utilise des rituels spéciaux, je peux provoquer la chance",
                          "eemdic_neg": "Si j'utilise des rituels spéciaux, je peux éviter la malchance"
                        },
                        {
                          "eemdic_pos": "Si j'ai des pensées positives, cela contribue à ma chance et à mes gains",
                          "eemdic_neg": "Si j'ai des pensées négatives, cela contribue à ma malchance et à mes pertes"
                        },
                        {
                          "eemdic_pos": "J'utilise un porte-bonheur pour obtenir des gains",
                          "eemdic_neg": "J'utilise un porte-bonheur pour éviter des pertes"
                        },
                        {
                          "eemdic_pos": "Mon habileté au jeu me permet de gagner",
                          "eemdic_neg": "Mon manque d'habileté au jeu cause mes pertes"
                        },
                        {
                          "eemdic_pos": "On peut identifier une tendance dans la façon dont les résultats se produisent afin de gagner",
                          "eemdic_neg": "On peut identifier une tendance dans la façon dont les résultats se produisent afin d'éviter de perdre"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "eemdic_loop",
                      "plugins": [],
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Sequence_emmdic",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "required": true,
                                "type": "text",
                                "content": "\u003Cp\u003ELes propositions suivantes décrivent ce que vous pourriez penser en jouant à un \u003Cb\u003Ejeu de hasard et d'argent\u003C\u002Fb\u003E, au niveau des pertes \u003Cb\u003E\u003Cu\u003E et \u003C\u002Fu\u003E\u003C\u002Fb\u003E au niveau des gains. \u003C\u002Fp\u003E\nVeuillez considérer chacun des deux niveaux et indiquer à quel point vous êtes d'accord avec chaque proposition. Merci d'indiquer votre opinion en choisissant une cellule dans la matrice."
                              },
                              {
                                "required": true,
                                "type": "divider"
                              },
                              {
                                "required": true,
                                "type": "html",
                                "content": "\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background)\" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003E${parameters.eemdic_neg}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv style=\" height:30%\"\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003E${parameters.eemdic_pos}\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\r\n",
                                "name": ""
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "right",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
}
                            },
                            "title": "eemdic",
                            "width": "l",
                            "plugins": []
                          },
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text"
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "black_page",
                            "timeout": "500"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "questionnaire_socio_demo",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quelques informations vous concernant",
                      "content": "\u003Cp\u003EVeuillez cliquer sur \"Continuer →\" pour répondre à quelques questions vous concernant.\u003C\u002Fp\u003E \n\n\u003Cp\u003EPour rappel, l'entièreté de cette étude est anonyme. \u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cb\u003EAucune information que nous récolterons sur vous ne permet de vous identifier, même par recoupement.\u003C\u002Fb\u003E\u003C\u002Fp\u003E "
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "intro",
                  "width": "m"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quel est votre genre ?"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"homme\" name=\"genre\" value=\"homme\" required\u003E\r\n  \u003Clabel for=\"homme\"\u003EHomme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"femme\" name=\"genre\" value=\"femme\" required\u003E\r\n  \u003Clabel for=\"femme\"\u003EFemme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre\" name=\"genre\" value=\"autre\" required\u003E\r\n  \u003Clabel for=\"autre\"\u003EAutre\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"ne_souhaite_pas_repondre\" name=\"genre\" value=\"ne_souhaite_pas_repondre\" required\u003E\r\n  \u003Clabel for=\"ne_souhaite_pas_repondre\"\u003ENe souhaite pas repondre\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "genre"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quel est votre âge?",
                      "content": "Veuillez indiquer votre âge (en année seulement). Vous pouvez utiliser les flèches présentes à droite de l'encart, ou rentrer directement votre âge à l'aide de votre clavier."
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Cbody\u003E\r\n\r\n\u003Clabel for=\"age\"\u003EÂge (en année) :\u003C\u002Flabel\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"120\" required\u003E\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "age"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quelle est votre langue maternelle ?"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"francais\" name=\"lmat\" value=\"francais\" required\u003E\r\n  \u003Clabel for=\"francais\"\u003EFrançais\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre\" name=\"lmat\" value=\"autre\" required\u003E\r\n  \u003Clabel for=\"autre\"\u003EAutre langue maternelle\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "langue_mat"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "Si vous appartenez à deux catégories (par exemple étudiant.e salarié.e) veuillez indiquer la catégorie socio-professionnelle qui vous semble centrale dans votre activité. ",
                      "title": "À quelle catégorie socio-prefessionnelle appartenez-vous ?"
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"agriculteur\" name=\"CSP\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"agriculteur\"\u003EAgriculteurs exploitants\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"artisan\" name=\"CSP\" value=\"2\" required\u003E\r\n  \u003Clabel for=\"artisan\"\u003EArtisans, commerçants, cheffes d'entreprise\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"cadre\" name=\"CSP\" value=\"3\" required\u003E\r\n  \u003Clabel for=\"cadre\"\u003ECadres et professions intellectuelles supérieures\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"profession_intermediaire\" name=\"CSP\" value=\"4\" required\u003E\r\n  \u003Clabel for=\"profession_intermediaire\"\u003EProfessions intermédiaires\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"employe\" name=\"CSP\" value=\"5\" required\u003E\r\n  \u003Clabel for=\"employe\"\u003EEmployés\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"ouvrier\" name=\"CSP\" value=\"6\" required\u003E\r\n  \u003Clabel for=\"ouvrier\"\u003EOuvriers\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"retraite\" name=\"CSP\" value=\"7\" required\u003E\r\n  \u003Clabel for=\"retraite\"\u003ERetraités\u003C\u002Flabel\u003E\u003Cbr\u003E   \r\n  \r\n  \u003Cinput type=\"radio\" id=\"etudiant\" name=\"CSP\" value=\"8\" required\u003E\r\n  \u003Clabel for=\"etudiant\"\u003EÉtudiants\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre_sans_act\" name=\"CSP\" value=\"9\" required\u003E\r\n  \u003Clabel for=\"autre_sans_act\"\u003EAutres personnes sans activité professionnelle\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "csp"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "",
                      "title": "Quel est votre niveau d'étude ? (dernier diplôme validé)"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"sans_diplome\" name=\"etude\" value=\"sans_diplome\" required\u003E\r\n  \u003Clabel for=\"sans_diplome\"\u003ESans diplôme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"brevet\" name=\"etude\" value=\"brevet\" required\u003E\r\n  \u003Clabel for=\"brevet\"\u003EBrevet des collèges\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"cap_bep\" name=\"etude\" value=\"cap_bep\" required\u003E\r\n  \u003Clabel for=\"cap_bep\"\u003ECAP - BEP\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"bac\" name=\"etude\" value=\"4\" required\u003E\r\n  \u003Clabel for=\"bac\"\u003EBaccalauréat\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"bts\" name=\"etude\" value=\"bts\" required\u003E\r\n  \u003Clabel for=\"bts\"\u003EBTS ou équivalent\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"licence\" name=\"etude\" value=\"licence\" required\u003E\r\n  \u003Clabel for=\"licence\"\u003ELicence\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"master\" name=\"etude\" value=\"master\" required\u003E\r\n  \u003Clabel for=\"master\"\u003EMaster\u003C\u002Flabel\u003E\u003Cbr\u003E   \r\n  \r\n  \u003Cinput type=\"radio\" id=\"doctorat\" name=\"etude\" value=\"doctorat\" required\u003E\r\n  \u003Clabel for=\"doctorat\"\u003EDoctorat\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "niveau_etude"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Dans les 12 derniers mois, avez-vous joué à des jeux de hasard et d'argent ?",
                      "content": " par exemple : poker, loto, jeux de grattage, roulette, machines à sous, etc."
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"jeu_12_mois_oui\" name=\"jeu_12_mois\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"jeu_12_mois_oui\"\u003EOui, au moins une fois dans les 12 derniers mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"jeu_12_mois_non\" name=\"jeu_12_mois\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"jeu_12_mois_non\"\u003ENon\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "jeu_12_mois",
                  "width": "m"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Vous avez indiqué avoir joué à un ou plusieurs jeux de hasard et d'argent au cours de ces 12 dernier mois.",
                      "content": "Parmi la liste suivante, veuillez indiquer les jeux auxquels vous avez joué. "
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cform id=\"jeuForm\"\u003E\r\n  \u003C!-- Poker --\u003E\r\n  \u003Cp\u003EAvez-vous joué au poker ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"poker_oui\" name=\"poker\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"poker_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"poker_non\" name=\"poker\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"poker_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Jeux de grattage --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux jeux de grattage ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"grattage_oui\" name=\"grattage\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"grattage_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"grattage_non\" name=\"grattage\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"grattage_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Paris sportifs --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux paris sportifs ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_sportifs_oui\" name=\"paris_sportifs\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"paris_sportifs_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_sportifs_non\" name=\"paris_sportifs\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"paris_sportifs_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Paris hippiques --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux paris hippiques ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_hippiques_oui\" name=\"paris_hippiques\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"paris_hippiques_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_hippiques_non\" name=\"paris_hippiques\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"paris_hippiques_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Loto --\u003E\r\n  \u003Cp\u003EAvez-vous joué au loto (ou Euromillion, Keno...) ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_oui\" name=\"loto\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"loto_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_non\" name=\"loto\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"loto_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Machines à sous --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux machines à sous ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"machines_oui\" name=\"machines\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"machines_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"machines_non\" name=\"machines\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"machines_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Loteries de village --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux loteries de village ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_village_oui\" name=\"loto_village\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"loto_village_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_village_non\" name=\"loto_village\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"loto_village_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Roulette --\u003E\r\n  \u003Cp\u003EAvez-vous joué à la roulette ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"roulette_oui\" name=\"roulette\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"roulette_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"roulette_non\" name=\"roulette\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"roulette_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Cdiv\u003E\u003Cbutton id=\"continueButton\" type=\"submit\"\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "type_jeux",
                  "width": "m",
                  "tardy": true,
                  "skip": "${this.state.jeu_12_mois!= \"oui\"}"
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "poker",
                  "tardy": true,
                  "skip": "${this.state.poker!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous au Poker ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_moins_un_mois\" name=\"frequ_poker\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_plus_un_mois\" name=\"frequ_poker\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_plus_un_semaine\" name=\"frequ_poker\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_everyday\" name=\"frequ_poker\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_poker"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent au Poker ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_0\" name=\"mise_poker\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_0_5\" name=\"mise_poker\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_6_20\" name=\"mise_poker\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_21_50\" name=\"mise_poker\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_51_100\" name=\"mise_poker\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_101_200\" name=\"mise_poker\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_201_300\" name=\"mise_poker\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_301_500\" name=\"mise_poker\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_500_plus\" name=\"mise_poker\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "grattage",
                  "tardy": true,
                  "skip": "${this.state.grattage!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Jeux de Grattage ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_moins_un_mois\" name=\"frequ_grattage\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_plus_un_mois\" name=\"frequ_grattage\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_plus_un_semaine\" name=\"frequ_grattage\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_everyday\" name=\"frequ_grattage\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_grattage"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Jeux de Grattage ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_0\" name=\"mise_grattage\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_0_5\" name=\"mise_grattage\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_6_20\" name=\"mise_grattage\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_21_50\" name=\"mise_grattage\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_51_100\" name=\"mise_grattage\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_101_200\" name=\"mise_grattage\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_201_300\" name=\"mise_grattage\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_301_500\" name=\"mise_grattage\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_500_plus\" name=\"mise_grattage\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "paris_sportifs",
                  "tardy": true,
                  "skip": "${this.state.paris_sportifs!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Paris sportifs ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_moins_un_mois\" name=\"frequ_paris_sportifs\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_plus_un_mois\" name=\"frequ_paris_sportifs\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_plus_un_semaine\" name=\"frequ_paris_sportifs\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_everyday\" name=\"frequ_paris_sportifs\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_paris_sportif"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Paris Sportifs ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_0\" name=\"mise_paris_sportifs\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_0_5\" name=\"mise_paris_sportifs\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_6_20\" name=\"mise_paris_sportifs\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_21_50\" name=\"mise_paris_sportifs\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_51_100\" name=\"mise_paris_sportifs\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_101_200\" name=\"mise_paris_sportifs\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_201_300\" name=\"mise_paris_sportifs\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_301_500\" name=\"mise_paris_sportifs\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_500_plus\" name=\"mise_paris_sportifs\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_paris_sportif"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "paris_hippique",
                  "tardy": true,
                  "skip": "${this.state.paris_hippiques!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Paris Hippiques ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_moins_un_mois\" name=\"frequ_paris_hippiques\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_plus_un_mois\" name=\"frequ_paris_hippiques\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_plus_un_semaine\" name=\"frequ_paris_hippiques\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_everyday\" name=\"frequ_paris_hippiques\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_paris_hippique"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Paris Hippiques ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_0\" name=\"mise_paris_hippiques\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_0_5\" name=\"mise_paris_hippiques\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_6_20\" name=\"mise_paris_hippiques\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_21_50\" name=\"mise_paris_hippiques\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_51_100\" name=\"mise_paris_hippiques\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_101_200\" name=\"mise_paris_hippiques\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_201_300\" name=\"mise_paris_hippiques\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_301_500\" name=\"mise_paris_hippiques\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_500_plus\" name=\"mise_paris_hippiques\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_paris_hippique"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "loto",
                  "tardy": true,
                  "skip": "${this.state.loto!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous au Loto\u002FEuromillion\u002FKeno ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_moins_un_mois\" name=\"frequ_loto\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_plus_un_mois\" name=\"frequ_loto\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_plus_un_semaine\" name=\"frequ_loto\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_everyday\" name=\"frequ_loto\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_loto"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent au Poker ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_0\" name=\"mise_loto\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_0_5\" name=\"mise_loto\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_6_20\" name=\"mise_loto\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_21_50\" name=\"mise_loto\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_51_100\" name=\"mise_loto\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_101_200\" name=\"mise_loto\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_201_300\" name=\"mise_loto\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_301_500\" name=\"mise_loto\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_500_plus\" name=\"mise_loto\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_loto"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "machine_a_sous",
                  "tardy": true,
                  "skip": "${this.state.machines!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux machines à sous ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_moins_un_mois\" name=\"frequ_mas\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_plus_un_mois\" name=\"frequ_mas\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_plus_un_semaine\" name=\"frequ_mas\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_everyday\" name=\"frequ_mas\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_mas"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux machines à sous ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_0\" name=\"mise_mas\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_0_5\" name=\"mise_mas\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_6_20\" name=\"mise_mas\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_21_50\" name=\"mise_mas\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_51_100\" name=\"mise_mas\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_101_200\" name=\"mise_mas\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_201_300\" name=\"mise_mas\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_301_500\" name=\"mise_mas\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_500_plus\" name=\"mise_mas\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "lolo_village",
                  "tardy": true,
                  "skip": "${this.state.loto_village!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux loteries de village ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_moins_un_mois\" name=\"frequ_loto_v\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_plus_un_mois\" name=\"frequ_loto_v\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_plus_un_semaine\" name=\"frequ_loto_v\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_everyday\" name=\"frequ_loto_v\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_loto_village"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux loteries de village ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_0\" name=\"mise_loto_v\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_0_5\" name=\"mise_loto_v\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_6_20\" name=\"mise_loto_v\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_21_50\" name=\"mise_loto_v\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_51_100\" name=\"mise_loto_v\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_101_200\" name=\"mise_loto_v\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_201_300\" name=\"mise_loto_v\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_301_500\" name=\"mise_loto_v\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_500_plus\" name=\"mise_loto_v\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_loto_village"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "roulette",
                  "tardy": true,
                  "skip": "${this.state.roulette!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous à la roulette ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_moins_un_mois\" name=\"frequ_roulette\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_plus_un_mois\" name=\"frequ_roulette\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_plus_un_semaine\" name=\"frequ_roulette\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_everyday\" name=\"frequ_roulette\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_roulette"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent à la roulette ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_0\" name=\"mise_roulette\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_0_5\" name=\"mise_roulette\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_6_20\" name=\"mise_roulette\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_21_50\" name=\"mise_roulette\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_51_100\" name=\"mise_roulette\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_101_200\" name=\"mise_roulette\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_201_300\" name=\"mise_roulette\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_301_500\" name=\"mise_roulette\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_500_plus\" name=\"mise_roulette\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ctable style=\"height: 137px; width: 775px;\"\u003E\r\n\u003Ctbody\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px;\"\u003EAu cours des 12 derniers mois\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003EJamais\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003EParfois\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003ELa plupart du temps\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003EToujours\u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous mis&eacute; plus d'argent que vous pouviez vous permettre de perdre ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous besoin de miser de plus en plus d'argent pour avoir la m&ecirc;me excitation ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous rejou&eacute; une autre journ&eacute;e pour r&eacute;cup&eacute;rer l'argent que vous aviez perdu en jouant ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"parfois\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous vendu ou emprunt&eacute; quelque chose pour obtenir de l'argent pour jouer ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous d&eacute;j&agrave; senti que vous aviez peut-&ecirc;tre un probl&egrave;me avec le jeu ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003ELe jeu a-t-il caus&eacute; chez vous des probl&egrave;mes de sant&eacute;, y compris du stress ou de l'angoisse ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EDes personnes ont-elles critiqu&eacute; vos habitudes de jeu ou dit que vous aviez un probl&egrave;me avec le jeu ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EVos habitudes de jeu ont-elles caus&eacute; des difficult&eacute;s financi&egrave;res &agrave; vous ou &agrave; votre entourage ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EVous &ecirc;tes-vous d&eacute;j&agrave; senti coupable de vos habitudes de jeu ou de ce qui arrive quand vous jouez ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "ICJE"
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "manipulation_check",
              "tardy": true,
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Parmis ces messages, lequel avez-vous vu pendant le jeu ?",
                      "content": "\u003Cform\u003E\n  \u003Cinput type=\"radio\" id=\"risque1\" name=\"rappel_message\" value=\"Famille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Famille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\"\u003EFamille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\n  \u003C\u002Flabel\u003E\u003Cbr\u003E \n\n  \u003Cinput type=\"radio\" id=\"risque2\" name=\"rappel_message\" value=\"Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\"\u003EJouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"risque3\" name=\"rappel_message\" value=\"Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\"\u003ELes jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \n  \u003Cinput type=\"radio\" id=\"risque4\" name=\"rappel_message\" value=\"Plus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\" required\u003E\n  \u003Clabel for=\"Plus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\"\u003EPlus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \n   \u003Cinput type=\"radio\" id=\"controle1\" name=\"rappel_message\" value=\"Pour bien jouer, il faut parfois moins jouer\" required\u003E\n  \u003Clabel for=\"Pour bien jouer, il faut parfois moins jouer\"\u003EPour bien jouer, il faut parfois moins jouer\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle2\" name=\"rappel_message\" value=\"Jouez malin, jouez avec modération\" required\u003E\n  \u003Clabel for=\"Jouez malin, jouez avec modération\"\u003EJouez malin, jouez avec modération\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle3\" name=\"rappel_message\" value=\"Reprendre le contrôle pour que le jeu reste un plaisir\" required\u003E\n  \u003Clabel for=\"Reprendre le contrôle pour que le jeu reste un plaisir\"\u003EReprendre le contrôle pour que le jeu reste un plaisir\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle4\" name=\"rappel_message\" value=\"Restez maître du jeu ! Fixez vos limites\" required\u003E\n  \u003Clabel for=\"Restez maître du jeu ! Fixez vos limites\"\u003ERestez maître du jeu ! Fixez vos limites\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard1\" name=\"rappel_message\" value=\"N’oubliez pas que c’est uniquement du hasard\" required\u003E\n  \u003Clabel for=\"N’oubliez pas que c’est uniquement du hasard\"\u003EN’oubliez pas que c’est uniquement du hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard2\" name=\"rappel_message\" value=\"Souvenez-vous que c’est un jeu de hasard\" required\u003E\n  \u003Clabel for=\"Souvenez-vous que c’est un jeu de hasard\"\u003ESouvenez-vous que c’est un jeu de hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard3\" name=\"rappel_message\" value=\"Ce jeu est soumis uniquement au hasard\" required\u003E\n  \u003Clabel for=\"Ce jeu est soumis uniquement au hasard\"\u003ECe jeu est soumis uniquement au hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard4\" name=\"rappel_message\" value=\"Le hasard est le seul facteur déterminant de ce jeu\" required\u003E\n  \u003Clabel for=\"Le hasard est le seul facteur déterminant de ce jeu\"\u003ELe hasard est le seul facteur déterminant de ce jeu\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\n\u003C\u002Fform\u003E"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "rappel_message"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "\u003Cdiv style=\"border-radius: 5px; border: 2px solid; padding: 3px; text-align: center; display: flex; justify-content: center; align-items: center;\"\u003E\u003Cp\u003E${this.parameters.message}\u003C\u002Fp\u003E\u003Cbr\u003E\n\u003C\u002Fdiv\u003E \n\n  \u003Cinput type=\"radio\" id=\"risque\" name=\"cat_subj\" value=\"risque\" required\u003E\n  \u003Clabel for=\"risque\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur les \u003Cb\u003Erisques\u003C\u002Fb\u003E, c'est à dire à \u003Cb\u003Edes messages rappelant les risques encourus \u003C\u002Fb\u003Elorsque l'on joue à un jeux de hasard et d'argent.\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle\" name=\"cat_subj\" value=\"controle\" required\u003E\n  \u003Clabel for=\"controle\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur le \u003Cb\u003Econtrôle\u003C\u002Fb\u003E, c'est à dire à \u003Cb\u003Edes messages qui mettent l'accent sur le fait que c'est aux individus de contrôler\u002Fde surveiller leurs comportements\u003C\u002Fb\u003E lorsqu'ils jouent à un jeux de hasard et d'argent. \u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard\" name=\"cat_subj\" value=\"hasard\" required\u003E\n  \u003Clabel for=\"hasard\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur le \u003Cb\u003Ehasard\u003C\u002Fb\u003E, c'est à dire à des messages qui mettent l'accent sur le fait que \u003Cb\u003Eles jeux de hasard et d'argent sont uniquement dépendants du hasard\u003C\u002Fb\u003E. \u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n",
                      "title": "Selon vous, à quelle catégorie le message suivant renvoie-t-il le mieux ?"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "categorie_subjective",
                  "tardy": true
                }
              ]
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Une dernière question (en bas de la page) ! ",
                  "content": "\u003Cp style=\"text-align: justify;\"\u003ENous vous remercions d’avoir pris le temps de compléter cette étude portant sur l’effet des messages de prévention relatifs aux jeux de hasard et d’argent sur les comportements effectifs de jeu. Cette étude est menée dans le cadre du financement ANR JEUVIEILLI portée par Valérie Le Floch, professeur à l’Université Toulouse Jean-Jaurès et rattachée au laboratoire CLLE, portant sur l’étude des pratiques récréatives, à risque et excessives des joueurs vieillissants afin d’identifier les facteurs intrinsèques du joueur (cognitifs, motivationnels, émotionnels), du jeu (type de jeu, accessibilité, caractéristiques du jeu) et du contexte de jeu qui influent sur le désir de jouer, l’illusion de contrôle et la prise de risque. \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EL’objectif de cette étude était d’évaluer le potentiel impact de messages de prévention utilisés par les opérateurs de jeu sur les comportements de jeu.  \u003C\u002Fp\u003E\n\n\n\u003Cdiv style=\"border-radius: 5px; border: 2px solid; padding: 3px; color: red\"\u003ESi vous avez ressenti de l’inconfort au moment de la session de jeu, ou si vous pensez avoir besoin d’une écoute ou d’un conseil sur des problématiques liées aux jeux de hasard et d’argent, n’hésitez pas à appeler le 09-74-75-13-13 (appel non surtaxé).  \u003C\u002Fdiv\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EEncore une fois, nous vous remercions pour votre participation. Pour toutes questions, vous pouvez contacter à n’importe quel moment les chercheurs impliqués dans ce projet (en indiquant « participation_ANR_JEUVIEILLI_axe3_etude2 » dans l’objet du mail) :  \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EMagali Bringuier à l’adresse suivante : magali.bringuier@univ-tlse2.fr \u003C\u002Fp\u003E\n\u003Cp style=\"text-align: justify;\"\u003EValérie Le Floch à l’adresse suivante : valerie.le-floch@univ-tlse2.fr  \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003ENous vous rappelons que toutes les informations recueillies dans cette étude seront traitées de façon strictement anonyme. Le logiciel utilisé pour cette étude est paramétré pour ne pas enregistrer l’adresse IP des participants. Les données seront conservées dans un fichier informatique respectant la loi « informatique et liberté » du 6 janvier 1978 modifiée en 2004. Les données, anonymes, seront archivées de manière sécurisée et disponibles aux autres chercheurs de l’équipe, qui pourront alors eux-mêmes les analyser. Les résultats obtenus à l’issue du traitement de cette étude pourront être diffusés (articles scientifiques, colloques, …) avec une totale garantie d’anonymat : aucun renseignement pouvant révéler votre identité ne sera dévoilé. \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003E\u003Cb\u003EEn cliquant sur « oui », vous consentez à ce que vos données soient recueillies et traitées de manière anonyme. Vous comprenez également qu’en cliquant sur « oui », vous ne pourrez plus vous retirer de l’étude. \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EJe comprends et j’accepte que mes données soient recueillies et traitées de manière anonyme : \u003C\u002Fp\u003E"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cbr\u003E\r\n\r\n\u003Ccenter\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"final_consent_oui\" name=\"final_consent\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"final_consent_oui\"\u003E Oui\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"final_consent_non\" name=\"final_consent\" value=\"0\"\u003E\r\n  \u003Clabel for=\"final_consent_non\"\u003E Non\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003Cbr\u003E\r\n\r\n    \u003Cbutton id=\"final_consent_end\" type=\"submit\"\u003ETerminer\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "final_consent"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.parent.parameters.message = this.random.choice(["N’oubliez pas que c’est uniquement du hasard", "Souvenez-vous que c’est un jeu de hasard","Ce jeu est soumis uniquement au hasard", "Le hasard est le seul facteur déterminant de ce jeu"]);
}
          },
          "title": "Sequence_hasard",
          "tardy": true,
          "skip": "${this.state.contrebal_set != 'hasard'}",
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
const randomID = function(){
  const length = 10;
  let result = "";
  const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

//const pptID = randomID();
this.parent.parameters.pptID = randomID();
}
              },
              "title": "randomise_task_order",
              "shuffle": true,
              "content": [
                {
                  "title": "jeu",
                  "type": "lab.flow.Sequence",
                  "parameters": {},
                  "plugins": [],
                  "metadata": {
                    "title": "test_game9",
                    "description": "Jeu avec fausse image chargée dans \"static\" pour montrer à quoi ça ressemblerait\n*bouton arrêter le jeu fonctionne pas mais avec q,Q pressé ça marche*",
                    "repository": "",
                    "contributors": ""
                  },
                  "tardy": true,
                  "messageHandlers": {},
                  "files": {},
                  "responses": {},
                  "content": [
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_consigne_jeu",
                      "content": [
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "training_game_round": "1",
                              "": ""
                            },
                            {
                              "training_game_round": "2",
                              "": ""
                            },
                            {
                              "training_game_round": "3",
                              "": ""
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Loop_consigne_jeu",
                          "indexParameter": "count_training_game",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Sequence_consigne_jeu_2",
                            "tardy": true,
                            "skip": "${this.state.instrjeucheck== 1}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Ch3\u003EVous allez pouvoir jouer à un jeu qui ressemble à un jeu de hasard et d'argent.\u003C\u002Fh3\u003E \r\n  \u003Cp\u003EVous disposez d’un capital de départ de 299 jetons.\u003C\u002Fp\u003E\r\n  \u003Cp\u003E\u003Cb\u003ECes 299 jetons sont à vous.\u003C\u002Fp\u003E\r\n  \u003Cbr\u003E\r\n  \u003Cp\u003EVotre but est de gagner \u003Cu\u003Ele plus de jetons possible.\u003C\u002Fu\u003E\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu1"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Le jeu se présente ainsi\u003C\u002Fh3\u003E\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${this.files[\"jeu_consigne1.PNG\"]}\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne1.PNG": "embedded\u002F23c9add9f482e5e3c4e6a6d180926fc4bc1c985369d506accfde3d4e31ea2625.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu2"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Première étape\u003C\u002Fh3\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous devez donc choisir un tas de cartes :\u003C\u002Fu\u003E\u003C\u002Fp\u003E\r\n\u003Cp\u003EChaque tas de cartes présente des probabilités de gain différentes et permet de remporter des sommes variables :\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 1er tas en partant de la gauche a 18 chances sur 37 de gagner et peut vous faire remporter 1x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 2ème tas en partant de la gauche a 12 chances sur 37 de gagner et peut vous faire remporter 2x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 3ème tas en partant de la gauche a 3 chances sur 37 de gagner et peut vous faire remporter 11x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 4ème tas en partant de la gauche a 1 chance sur 37 de gagner et peut vous faire remporter 35x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003ENe vous inquiétez pas, il ne s’agit pas d’une épreuve de mémorisation. \r\nLes probabilités de gain et les gains associés sont écrits sur les tas de cartes comme sur l’image ci-dessous.\r\n\u003C\u002Fp\u003E\r\n\u003Cp\u003EVous pouvez parier sur \u003Cu\u003Eun seul\u003C\u002Fu\u003E tas de cartes, mais vous pourrez en changer à chaque tour si vous le désirez.\u003C\u002Fp\u003E\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${this.files[\"jeu_consigne2.png\"]}\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"\u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne2.png": "embedded\u002Fc7accd742bee68166e63cfcc54897282baf7abd243aa5c98308585bbea08ae1c.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu3"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003EVous devez \u003Cb\u003Echoisir le montant de votre mise.\u003C\u002Fb\u003E\u003C\u002Fp\u003E \r\n\u003Cp\u003EVous misez autant de points que vous désirez. Vous ne pouvez miser que des nombres entiers. Vous ne pouvez pas miser plus de points que vous n’en possédez !\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne3.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"  \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne3.png": "embedded\u002Fcca79cc4acf65793cc2e58c725a9cf71a5cc8e281b067dbaf371752b223deb23.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu4"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003EEnsuite vous \u003Cu\u003Emisez\u003C\u002Fu\u003E.\u003C\u002Fp\u003E\r\n\u003Cp\u003EL’ordinateur tire alors la première carte du tas sélectionné. \u003C\u002Fp\u003E\r\n\u003Cp\u003EÀ la fin de chaque tour, vos gains ou vos pertes seront affichés à l’écran.\u003C\u002Fp\u003E\r\n\u003Cp\u003EÀ chaque tour, les cartes de chaque tas sont automatiquement mélangées et la dernière carte sortie est remise en jeu dans le tas de cartes correspondant (jeu de tirage avec remise).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne4.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"  \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne4.png": "embedded\u002Fd9d6cf7960fe01b2200ef0803d3fbb16edffc8abce1208a587bc6957b5638cb5.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu5"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous pourrez jouer autant de tours que vous voulez\u003C\u002Fu\u003E. \u003Cb\u003ESi vous décidez d’arrêter\u003C\u002Fb\u003E, appuyez sur la touche \"\u003Cb\u003Eq\u003C\u002Fb\u003E\" de votre clavier. Nous encaisserons alors vos jetons et vous passerez à l’étape suivante de l’enquête.\u003C\u002Fp\u003E\r\n\r\n\u003Cu\u003E\u003Cb\u003EAttention : Pour \u003Cb\u003EQUITTER LE JEU\u003C\u002Fb\u003E, appuyez sur la touche \"q\" de votre clavier. Il ne faut \u003Cb\u003Epas\u003C\u002Fb\u003E quitter via le navigateur (croix rouge), sinon vous mettrez fin à l'expérience et vos réponses ne seront pas enregistrées.\u003C\u002Fu\u003E\u003C\u002Fb\u003E\r\n\u003Cp\u003EComme vous pouvez quitter le jeu quand vous le voulez, nous vous rappellerons la procédure à suivre à chacun de vos tours comme ci dessous\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne5.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\" \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne5.png": "embedded\u002F40f7efc10e784f1723c702b9e1fc78a5a768bb3bb64b3a70be54a979ebea4127.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu6"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous avez deux tours d’entraînement pour vous familiariser avec le jeu.\u003C\u002Fp\u003E\u003Cp\u003E À l’issue de ces 2 tours, votre compteur sera mis à zéro et vos jetons seront réellement comptabilisés.\u003C\u002Fu\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "Capture - Copie (2).PNG": "embedded\u002F25fd806f52d44d2997b9d14f183c1688a9f3482f74e799d9d961cfc2ee348af3.PNG",
                                  "Capture - Copie (3).PNG": "embedded\u002Fbf1012572e261295fb686ca94c7812b9904764cd9b18bf4233e0b9d5af7dd5ee.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu7"
                              },
                              {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {
                                  "before:prepare": function anonymous(
) {
this.parameters.cagnotte_t = 299;

}
                                },
                                "title": "Sequence_training_jeu + charge cagnotte training",
                                "content": [
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Ch3\u003EEntrainement\u003C\u002Fh3\u003E\r\n\u003Cp\u003E Voici un entrainement pour vous familiariser avec l'interface du jeu. \u003C\u002Fp\u003E\r\n\u003Cp\u003E Votre capital de départ est de 299 jetons. \u003C\u002Fp\u003E\r\n\u003Cp\u003E Tous ces points sont à vous. Votre but est de gagner le plus de jetons possibles. \u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "consigne_training"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte_t} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\u003Ch3\u003E\u003Cp\u003EAfin de vérifier que vous avez bien compris comment fonctionne le jeu, nous vous demandons de : \u003Cb\u003EMiser 10 jetons sur la carte qui, si vous gagnez, vous fera remporter 2x votre mise.\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte_t}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003E jetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "undefined": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          } else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

        

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)+outcome_mise;
      } else {
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable

this.parent.parameters.cagnotte_t = this.state.cagnotte_t;



this.parent.parameters.check_instr_jeu_1 = 0;

if (this.data.tas_choisi == "tas2") {
 this.parent.parameters.check_instr_jeu_1 = 1;
 if (this.state.check_instr_jeu_2 == 1){
  this.parent.parent.parameters.instrjeucheck = 1;
 }
}



console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);

}
                                    },
                                    "title": "training_tas_2",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte_t}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
this.state.cagnotte_t = this.parent.parameters.cagnotte_t || this.parameters.cagnotte_t;  // Valeur par défaut si elle n'a pas été encore initialisée

}
                                    },
                                    "title": "resultat",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text",
                                        "title": "",
                                        "content": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "empty_screen",
                                    "timeout": "500",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte_t} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\u003Ch3\u003E\u003Cp\u003EAfin de vérifier que vous avez bien compris comment fonctionne le jeu, nous vous demandons de : \u003Cb\u003EMiser 25 jetons sur la carte qui offre 18 chances de gagner sur 37.\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte_t}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003E  jetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "undefined": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
this.state.cagnotte_t = this.parent.parameters.cagnotte_t || this.parameters.cagnotte_t;  // Valeur par défaut si elle n'a pas été encore initialisée


 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          } else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)+outcome_mise;
      } else {
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable



this.parent.parameters.check_instr_jeu_2 = 0;

if (this.data.tas_choisi == "tas1") {
 this.parent.parameters.check_instr_jeu_2 = 1;
 if (this.state.check_instr_jeu_1 == 1){
  this.parent.parent.parameters.instrjeucheck = 1;
 }
}




console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);


}
                                    },
                                    "title": "training_tas_1",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte_t}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "resultat",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text",
                                        "title": "",
                                        "content": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "empty_screen",
                                    "timeout": "500",
                                    "tardy": true
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_jeu",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "required": true,
                              "type": "html",
                              "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Jeu \u003C\u002Fh3\u003E\r\n\u003Cp\u003EVous allez pouvoir jouer à un jeu de hasard.\u003C\u002Fp\u003E \r\n\u003Cp\u003EVous disposez d’un capital de départ de 299 jetons. Ces 299 jetons sont à vous. Votre but est de gagner le plus de jetons possible.\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
                              "name": ""
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "right",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.parameters.cagnotte = 299;


}
                          },
                          "title": "charge variable cagnotte"
                        },
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "round_game": "1"
                            },
                            {
                              "round_game": "2"
                            },
                            {
                              "round_game": "3"
                            },
                            {
                              "round_game": "4"
                            },
                            {
                              "round_game": "5"
                            },
                            {
                              "round_game": "6"
                            },
                            {
                              "round_game": "7"
                            },
                            {
                              "round_game": "8"
                            },
                            {
                              "round_game": "9"
                            },
                            {
                              "round_game": "10"
                            },
                            {
                              "round_game": "11"
                            },
                            {
                              "round_game": "12"
                            },
                            {
                              "round_game": "13"
                            },
                            {
                              "round_game": "14"
                            },
                            {
                              "round_game": "15"
                            },
                            {
                              "round_game": "16"
                            },
                            {
                              "round_game": "17"
                            },
                            {
                              "round_game": "18"
                            },
                            {
                              "round_game": "19"
                            },
                            {
                              "round_game": "20"
                            },
                            {
                              "round_game": "21"
                            },
                            {
                              "round_game": "22"
                            },
                            {
                              "round_game": "23"
                            },
                            {
                              "round_game": "24"
                            },
                            {
                              "round_game": "25"
                            },
                            {
                              "round_game": "26"
                            },
                            {
                              "round_game": "27"
                            },
                            {
                              "round_game": "28"
                            },
                            {
                              "round_game": "29"
                            },
                            {
                              "round_game": "30"
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "keypress(q,Q)": "quit_game"
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "boucle_jeu",
                          "indexParameter": "count_trials_game",
                          "tardy": true,
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "keypress q,Q": "quit_game"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "sequence_game",
                            "tardy": true,
                            "skip": "${this.state.cagnotte==0}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\r\n\u003Ch3\u003E${this.state.message}\u003C\u002Fh3\u003E\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003Ejetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "hidden",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {
                                  "commit": function anonymous(
) {
 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          }else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte = parseFloat(this.state.cagnotte)+outcome_mise;
      } else {
        this.state.cagnotte = parseFloat(this.state.cagnotte)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable

console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);

}
                                },
                                "title": "jeu_et_charge_fonction_miser",
                                "tardy": true
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "resultat",
                                "tardy": true
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "title": "",
                                    "content": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "hidden",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "empty_screen",
                                "timeout": "500"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "Merci de cliquer sur continuer -\u003E pour passer à la suite de l'étude. \n",
                          "title": "Le jeu est terminé"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "end_jeu"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "eemdic",
                  "tardy": true,
                  "content": [
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_eemdic_consigne",
                      "content": [
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "instruction_loop": "1",
                              "": ""
                            },
                            {
                              "instruction_loop": "2",
                              "": ""
                            },
                            {
                              "instruction_loop": "3",
                              "": ""
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Loop_eemdic_consigne",
                          "indexParameter": "count_loop_instruction",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Sequence_emmdic_consigne2",
                            "tardy": true,
                            "skip": "${this.state.instrcheck== 1}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "title": "Vous allez devoir répondre à un questionnaire",
                                    "content": "Nous vous proposons un entrainement pour vous familiariser avec le format de la grille de réponse."
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_1"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "content": "",
                                    "title": "Voici à quoi ressemble la grille"
                                  },
                                  {
                                    "required": true,
                                    "type": "image",
                                    "src": "${ this.files[\"eemdic.png\"] }",
                                    "width": "",
                                    "height": "",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "eemdic.png": "embedded\u002Ff2a7684be8047bc072d6f9b70770a9151fa412038b65a09c33357331c302b291.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_2"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "content": "A chaque fois, deux items vous seront proposés. Un écrit en bleu, un autre écrit en vert. \nPour vous positionnez sur la matrice de réponse, nous vous conseillons de procéder par étapes. ",
                                    "title": "Consignes"
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "consigneEEMDIC.PNG": "embedded\u002F1bc9d6c59044b4251c8ae03399ebec3508fc15be1903c395aa22803e80054fe0.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_3"
                              },
                              {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "Sequence_eemdic_consigne3",
                                "content": [
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. \n\u003Cbr\u003E",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E  \r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {

this.parent.parameters.check_instr_6_6 = 0;

if (this.data.reponse_t == "6_6") {
 this.parent.parameters.check_instr_6_6 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}

}
                                    },
                                    "title": "eemdic_training_1_6_6",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_1",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_1_1 = 0;

if (this.data.reponse_t == "1_1") {
 this.parent.parameters.check_instr_1_1 = 1;
 if (this.state.check_instr_6_6 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_2_1_1",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_2",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_6_1 = 0;

if (this.data.reponse_t == "6_1") {
 this.parent.parameters.check_instr_6_1 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_6 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_3_6_1",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_3",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_1_6 = 0;

if (this.data.reponse_t == "1_6") {
 this.parent.parameters.check_instr_1_6 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_6_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_4_1_6",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_4",
                                    "timeout": "500"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "Passons à l'étape suivante. \n",
                          "title": "L'entrainement est terminé !"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "training_is_good"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "eemdic_pos": "Mes gains sont la preuve que j'ai des compétences et des connaissances liées au jeu",
                          "eemdic_neg": "Mes pertes sont la preuve que je n'ai pas de compétences ni de connaissances liées au jeu"
                        },
                        {
                          "eemdic_pos": "Je devrais garder une trace de mes précédentes combinaisons gagnantes afin de pouvoir déterminer comment je devrais jouer à l'avenir",
                          "eemdic_neg": "Je devrais garder une trace de mes précédentes combinaisons perdantes afin de pouvoir déterminer comment je devrais jouer à l'avenir"
                        },
                        {
                          "eemdic_pos": "Je peux analyser mes gains pour me donner des stratégies qui me permettront de devenir un meilleur joueur",
                          "eemdic_neg": "Je peux analyser mes pertes pour me donner des stratégies qui me permettront de devenir un meilleur joueur"
                        },
                        {
                          "eemdic_pos": "Je gagne parce que je passe une bonne journée ou que c'est mon jour de chance",
                          "eemdic_neg": "Je perds parce que je passe une mauvaise journée ou que c'est mon jour de malchance"
                        },
                        {
                          "eemdic_pos": "Je me considère comme une personne chanceuse",
                          "eemdic_neg": "Je me considère comme une personne malchanceuse"
                        },
                        {
                          "eemdic_pos": "Les gains sont plus susceptibles de se produire sur une machine chaude (qui est utilisée depuis un moment)",
                          "eemdic_neg": "Les pertes sont plus susceptibles de se produire sur une machine froide (qui n'a pas été utilisée depuis un moment)"
                        },
                        {
                          "eemdic_pos": "Plus je suis familier avec un jeu, plus je suis susceptible de gagner",
                          "eemdic_neg": "Moins je suis familier avec un jeu, plus je suis susceptible de perdre"
                        },
                        {
                          "eemdic_pos": "Certains joueurs sont juste nés chanceux",
                          "eemdic_neg": "Certains joueurs sont juste nés malchanceux"
                        },
                        {
                          "eemdic_pos": "C'est un bon conseil de conserver la même paire de dés ou les mêmes numéros sur une série gagnante",
                          "eemdic_neg": "C'est un bon conseil de changer de paire de dés ou de numéros sur une série perdante"
                        },
                        {
                          "eemdic_pos": "Je crois que le destin joue en ma faveur quand je gagne",
                          "eemdic_neg": "Je crois que le destin joue contre moi quand je perds"
                        },
                        {
                          "eemdic_pos": "J'ai plus de chances de gagner à la loterie ou au jeu de grattage si je choisis moi-même mes numéros ou mon ticket",
                          "eemdic_neg": "J'ai plus de chances de perdre à la loterie ou au jeu de grattage si je ne choisis pas moi-même mes numéros ou mon ticket"
                        },
                        {
                          "eemdic_pos": "Si je gagne, c'est parce que j'ai bien joué",
                          "eemdic_neg": "Si je perds, c'est parce que j'ai mal joué"
                        },
                        {
                          "eemdic_pos": "Même les choses de la vie que je ne peux pas contrôler\u002Fmaîtriser ont tendance à se passer comme je le veux parce que j'ai de la chance",
                          "eemdic_neg": "Même les choses de la vie que je ne peux pas contrôler\u002Fmaîtriser ont tendance à ne pas se passer comme je le veux parce que je suis malchanceux"
                        },
                        {
                          "eemdic_pos": "Il y a quelque chose comme la chance qui favorise certaines personnes plus que d'autres",
                          "eemdic_neg": "Il y a quelque chose comme la malchance qui affecte certaines personnes plus que d'autres"
                        },
                        {
                          "eemdic_pos": "Si j'utilise des rituels spéciaux, je peux provoquer la chance",
                          "eemdic_neg": "Si j'utilise des rituels spéciaux, je peux éviter la malchance"
                        },
                        {
                          "eemdic_pos": "Si j'ai des pensées positives, cela contribue à ma chance et à mes gains",
                          "eemdic_neg": "Si j'ai des pensées négatives, cela contribue à ma malchance et à mes pertes"
                        },
                        {
                          "eemdic_pos": "J'utilise un porte-bonheur pour obtenir des gains",
                          "eemdic_neg": "J'utilise un porte-bonheur pour éviter des pertes"
                        },
                        {
                          "eemdic_pos": "Mon habileté au jeu me permet de gagner",
                          "eemdic_neg": "Mon manque d'habileté au jeu cause mes pertes"
                        },
                        {
                          "eemdic_pos": "On peut identifier une tendance dans la façon dont les résultats se produisent afin de gagner",
                          "eemdic_neg": "On peut identifier une tendance dans la façon dont les résultats se produisent afin d'éviter de perdre"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "eemdic_loop",
                      "plugins": [],
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Sequence_emmdic",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "required": true,
                                "type": "text",
                                "content": "\u003Cp\u003ELes propositions suivantes décrivent ce que vous pourriez penser en jouant à un \u003Cb\u003Ejeu de hasard et d'argent\u003C\u002Fb\u003E, au niveau des pertes \u003Cb\u003E\u003Cu\u003E et \u003C\u002Fu\u003E\u003C\u002Fb\u003E au niveau des gains. \u003C\u002Fp\u003E\nVeuillez considérer chacun des deux niveaux et indiquer à quel point vous êtes d'accord avec chaque proposition. Merci d'indiquer votre opinion en choisissant une cellule dans la matrice."
                              },
                              {
                                "required": true,
                                "type": "divider"
                              },
                              {
                                "required": true,
                                "type": "html",
                                "content": "\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background)\" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003E${parameters.eemdic_neg}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv style=\" height:30%\"\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003E${parameters.eemdic_pos}\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\r\n",
                                "name": ""
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "right",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
}
                            },
                            "title": "eemdic",
                            "width": "l",
                            "plugins": []
                          },
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text"
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "black_page",
                            "timeout": "500"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "questionnaire_socio_demo",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quelques informations vous concernant",
                      "content": "\u003Cp\u003EVeuillez cliquer sur \"Continuer →\" pour répondre à quelques questions vous concernant.\u003C\u002Fp\u003E \n\n\u003Cp\u003EPour rappel, l'entièreté de cette étude est anonyme. \u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cb\u003EAucune information que nous récolterons sur vous ne permet de vous identifier, même par recoupement.\u003C\u002Fb\u003E\u003C\u002Fp\u003E "
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "intro",
                  "width": "m"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quel est votre genre ?"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"homme\" name=\"genre\" value=\"homme\" required\u003E\r\n  \u003Clabel for=\"homme\"\u003EHomme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"femme\" name=\"genre\" value=\"femme\" required\u003E\r\n  \u003Clabel for=\"femme\"\u003EFemme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre\" name=\"genre\" value=\"autre\" required\u003E\r\n  \u003Clabel for=\"autre\"\u003EAutre\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"ne_souhaite_pas_repondre\" name=\"genre\" value=\"ne_souhaite_pas_repondre\" required\u003E\r\n  \u003Clabel for=\"ne_souhaite_pas_repondre\"\u003ENe souhaite pas repondre\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "genre"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quel est votre âge?",
                      "content": "Veuillez indiquer votre âge (en année seulement). Vous pouvez utiliser les flèches présentes à droite de l'encart, ou rentrer directement votre âge à l'aide de votre clavier."
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Cbody\u003E\r\n\r\n\u003Clabel for=\"age\"\u003EÂge (en année) :\u003C\u002Flabel\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"120\" required\u003E\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "age"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quelle est votre langue maternelle ?"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"francais\" name=\"lmat\" value=\"francais\" required\u003E\r\n  \u003Clabel for=\"francais\"\u003EFrançais\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre\" name=\"lmat\" value=\"autre\" required\u003E\r\n  \u003Clabel for=\"autre\"\u003EAutre langue maternelle\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "langue_mat"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "Si vous appartenez à deux catégories (par exemple étudiant.e salarié.e) veuillez indiquer la catégorie socio-professionnelle qui vous semble centrale dans votre activité. ",
                      "title": "À quelle catégorie socio-prefessionnelle appartenez-vous ?"
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"agriculteur\" name=\"CSP\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"agriculteur\"\u003EAgriculteurs exploitants\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"artisan\" name=\"CSP\" value=\"2\" required\u003E\r\n  \u003Clabel for=\"artisan\"\u003EArtisans, commerçants, cheffes d'entreprise\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"cadre\" name=\"CSP\" value=\"3\" required\u003E\r\n  \u003Clabel for=\"cadre\"\u003ECadres et professions intellectuelles supérieures\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"profession_intermediaire\" name=\"CSP\" value=\"4\" required\u003E\r\n  \u003Clabel for=\"profession_intermediaire\"\u003EProfessions intermédiaires\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"employe\" name=\"CSP\" value=\"5\" required\u003E\r\n  \u003Clabel for=\"employe\"\u003EEmployés\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"ouvrier\" name=\"CSP\" value=\"6\" required\u003E\r\n  \u003Clabel for=\"ouvrier\"\u003EOuvriers\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"retraite\" name=\"CSP\" value=\"7\" required\u003E\r\n  \u003Clabel for=\"retraite\"\u003ERetraités\u003C\u002Flabel\u003E\u003Cbr\u003E   \r\n  \r\n  \u003Cinput type=\"radio\" id=\"etudiant\" name=\"CSP\" value=\"8\" required\u003E\r\n  \u003Clabel for=\"etudiant\"\u003EÉtudiants\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre_sans_act\" name=\"CSP\" value=\"9\" required\u003E\r\n  \u003Clabel for=\"autre_sans_act\"\u003EAutres personnes sans activité professionnelle\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "csp"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "",
                      "title": "Quel est votre niveau d'étude ? (dernier diplôme validé)"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"sans_diplome\" name=\"etude\" value=\"sans_diplome\" required\u003E\r\n  \u003Clabel for=\"sans_diplome\"\u003ESans diplôme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"brevet\" name=\"etude\" value=\"brevet\" required\u003E\r\n  \u003Clabel for=\"brevet\"\u003EBrevet des collèges\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"cap_bep\" name=\"etude\" value=\"cap_bep\" required\u003E\r\n  \u003Clabel for=\"cap_bep\"\u003ECAP - BEP\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"bac\" name=\"etude\" value=\"4\" required\u003E\r\n  \u003Clabel for=\"bac\"\u003EBaccalauréat\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"bts\" name=\"etude\" value=\"bts\" required\u003E\r\n  \u003Clabel for=\"bts\"\u003EBTS ou équivalent\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"licence\" name=\"etude\" value=\"licence\" required\u003E\r\n  \u003Clabel for=\"licence\"\u003ELicence\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"master\" name=\"etude\" value=\"master\" required\u003E\r\n  \u003Clabel for=\"master\"\u003EMaster\u003C\u002Flabel\u003E\u003Cbr\u003E   \r\n  \r\n  \u003Cinput type=\"radio\" id=\"doctorat\" name=\"etude\" value=\"doctorat\" required\u003E\r\n  \u003Clabel for=\"doctorat\"\u003EDoctorat\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "niveau_etude"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Dans les 12 derniers mois, avez-vous joué à des jeux de hasard et d'argent ?",
                      "content": " par exemple : poker, loto, jeux de grattage, roulette, machines à sous, etc."
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"jeu_12_mois_oui\" name=\"jeu_12_mois\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"jeu_12_mois_oui\"\u003EOui, au moins une fois dans les 12 derniers mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"jeu_12_mois_non\" name=\"jeu_12_mois\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"jeu_12_mois_non\"\u003ENon\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "jeu_12_mois",
                  "width": "m"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Vous avez indiqué avoir joué à un ou plusieurs jeux de hasard et d'argent au cours de ces 12 dernier mois.",
                      "content": "Parmi la liste suivante, veuillez indiquer les jeux auxquels vous avez joué. "
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cform id=\"jeuForm\"\u003E\r\n  \u003C!-- Poker --\u003E\r\n  \u003Cp\u003EAvez-vous joué au poker ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"poker_oui\" name=\"poker\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"poker_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"poker_non\" name=\"poker\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"poker_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Jeux de grattage --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux jeux de grattage ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"grattage_oui\" name=\"grattage\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"grattage_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"grattage_non\" name=\"grattage\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"grattage_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Paris sportifs --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux paris sportifs ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_sportifs_oui\" name=\"paris_sportifs\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"paris_sportifs_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_sportifs_non\" name=\"paris_sportifs\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"paris_sportifs_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Paris hippiques --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux paris hippiques ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_hippiques_oui\" name=\"paris_hippiques\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"paris_hippiques_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_hippiques_non\" name=\"paris_hippiques\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"paris_hippiques_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Loto --\u003E\r\n  \u003Cp\u003EAvez-vous joué au loto (ou Euromillion, Keno...) ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_oui\" name=\"loto\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"loto_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_non\" name=\"loto\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"loto_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Machines à sous --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux machines à sous ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"machines_oui\" name=\"machines\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"machines_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"machines_non\" name=\"machines\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"machines_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Loteries de village --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux loteries de village ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_village_oui\" name=\"loto_village\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"loto_village_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_village_non\" name=\"loto_village\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"loto_village_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Roulette --\u003E\r\n  \u003Cp\u003EAvez-vous joué à la roulette ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"roulette_oui\" name=\"roulette\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"roulette_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"roulette_non\" name=\"roulette\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"roulette_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Cdiv\u003E\u003Cbutton id=\"continueButton\" type=\"submit\"\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "type_jeux",
                  "width": "m",
                  "tardy": true,
                  "skip": "${this.state.jeu_12_mois!= \"oui\"}"
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "poker",
                  "tardy": true,
                  "skip": "${this.state.poker!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous au Poker ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_moins_un_mois\" name=\"frequ_poker\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_plus_un_mois\" name=\"frequ_poker\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_plus_un_semaine\" name=\"frequ_poker\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_everyday\" name=\"frequ_poker\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_poker"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent au Poker ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_0\" name=\"mise_poker\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_0_5\" name=\"mise_poker\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_6_20\" name=\"mise_poker\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_21_50\" name=\"mise_poker\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_51_100\" name=\"mise_poker\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_101_200\" name=\"mise_poker\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_201_300\" name=\"mise_poker\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_301_500\" name=\"mise_poker\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_500_plus\" name=\"mise_poker\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "grattage",
                  "tardy": true,
                  "skip": "${this.state.grattage!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Jeux de Grattage ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_moins_un_mois\" name=\"frequ_grattage\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_plus_un_mois\" name=\"frequ_grattage\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_plus_un_semaine\" name=\"frequ_grattage\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_everyday\" name=\"frequ_grattage\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_grattage"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Jeux de Grattage ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_0\" name=\"mise_grattage\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_0_5\" name=\"mise_grattage\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_6_20\" name=\"mise_grattage\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_21_50\" name=\"mise_grattage\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_51_100\" name=\"mise_grattage\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_101_200\" name=\"mise_grattage\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_201_300\" name=\"mise_grattage\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_301_500\" name=\"mise_grattage\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_500_plus\" name=\"mise_grattage\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "paris_sportifs",
                  "tardy": true,
                  "skip": "${this.state.paris_sportifs!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Paris sportifs ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_moins_un_mois\" name=\"frequ_paris_sportifs\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_plus_un_mois\" name=\"frequ_paris_sportifs\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_plus_un_semaine\" name=\"frequ_paris_sportifs\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_everyday\" name=\"frequ_paris_sportifs\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_paris_sportif"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Paris Sportifs ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_0\" name=\"mise_paris_sportifs\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_0_5\" name=\"mise_paris_sportifs\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_6_20\" name=\"mise_paris_sportifs\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_21_50\" name=\"mise_paris_sportifs\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_51_100\" name=\"mise_paris_sportifs\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_101_200\" name=\"mise_paris_sportifs\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_201_300\" name=\"mise_paris_sportifs\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_301_500\" name=\"mise_paris_sportifs\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_500_plus\" name=\"mise_paris_sportifs\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_paris_sportif"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "paris_hippique",
                  "tardy": true,
                  "skip": "${this.state.paris_hippiques!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Paris Hippiques ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_moins_un_mois\" name=\"frequ_paris_hippiques\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_plus_un_mois\" name=\"frequ_paris_hippiques\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_plus_un_semaine\" name=\"frequ_paris_hippiques\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_everyday\" name=\"frequ_paris_hippiques\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_paris_hippique"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Paris Hippiques ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_0\" name=\"mise_paris_hippiques\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_0_5\" name=\"mise_paris_hippiques\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_6_20\" name=\"mise_paris_hippiques\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_21_50\" name=\"mise_paris_hippiques\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_51_100\" name=\"mise_paris_hippiques\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_101_200\" name=\"mise_paris_hippiques\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_201_300\" name=\"mise_paris_hippiques\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_301_500\" name=\"mise_paris_hippiques\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_500_plus\" name=\"mise_paris_hippiques\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_paris_hippique"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "loto",
                  "tardy": true,
                  "skip": "${this.state.loto!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous au Loto\u002FEuromillion\u002FKeno ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_moins_un_mois\" name=\"frequ_loto\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_plus_un_mois\" name=\"frequ_loto\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_plus_un_semaine\" name=\"frequ_loto\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_everyday\" name=\"frequ_loto\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_loto"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent au Poker ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_0\" name=\"mise_loto\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_0_5\" name=\"mise_loto\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_6_20\" name=\"mise_loto\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_21_50\" name=\"mise_loto\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_51_100\" name=\"mise_loto\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_101_200\" name=\"mise_loto\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_201_300\" name=\"mise_loto\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_301_500\" name=\"mise_loto\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_500_plus\" name=\"mise_loto\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_loto"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "machine_a_sous",
                  "tardy": true,
                  "skip": "${this.state.machines!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux machines à sous ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_moins_un_mois\" name=\"frequ_mas\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_plus_un_mois\" name=\"frequ_mas\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_plus_un_semaine\" name=\"frequ_mas\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_everyday\" name=\"frequ_mas\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_mas"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux machines à sous ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_0\" name=\"mise_mas\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_0_5\" name=\"mise_mas\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_6_20\" name=\"mise_mas\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_21_50\" name=\"mise_mas\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_51_100\" name=\"mise_mas\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_101_200\" name=\"mise_mas\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_201_300\" name=\"mise_mas\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_301_500\" name=\"mise_mas\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_500_plus\" name=\"mise_mas\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "lolo_village",
                  "tardy": true,
                  "skip": "${this.state.loto_village!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux loteries de village ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_moins_un_mois\" name=\"frequ_loto_v\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_plus_un_mois\" name=\"frequ_loto_v\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_plus_un_semaine\" name=\"frequ_loto_v\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_everyday\" name=\"frequ_loto_v\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_loto_village"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux loteries de village ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_0\" name=\"mise_loto_v\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_0_5\" name=\"mise_loto_v\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_6_20\" name=\"mise_loto_v\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_21_50\" name=\"mise_loto_v\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_51_100\" name=\"mise_loto_v\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_101_200\" name=\"mise_loto_v\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_201_300\" name=\"mise_loto_v\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_301_500\" name=\"mise_loto_v\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_500_plus\" name=\"mise_loto_v\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_loto_village"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "roulette",
                  "tardy": true,
                  "skip": "${this.state.roulette!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous à la roulette ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_moins_un_mois\" name=\"frequ_roulette\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_plus_un_mois\" name=\"frequ_roulette\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_plus_un_semaine\" name=\"frequ_roulette\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_everyday\" name=\"frequ_roulette\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_roulette"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent à la roulette ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_0\" name=\"mise_roulette\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_0_5\" name=\"mise_roulette\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_6_20\" name=\"mise_roulette\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_21_50\" name=\"mise_roulette\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_51_100\" name=\"mise_roulette\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_101_200\" name=\"mise_roulette\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_201_300\" name=\"mise_roulette\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_301_500\" name=\"mise_roulette\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_500_plus\" name=\"mise_roulette\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ctable style=\"height: 137px; width: 775px;\"\u003E\r\n\u003Ctbody\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px;\"\u003EAu cours des 12 derniers mois\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003EJamais\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003EParfois\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003ELa plupart du temps\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003EToujours\u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous mis&eacute; plus d'argent que vous pouviez vous permettre de perdre ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous besoin de miser de plus en plus d'argent pour avoir la m&ecirc;me excitation ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous rejou&eacute; une autre journ&eacute;e pour r&eacute;cup&eacute;rer l'argent que vous aviez perdu en jouant ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"parfois\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous vendu ou emprunt&eacute; quelque chose pour obtenir de l'argent pour jouer ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous d&eacute;j&agrave; senti que vous aviez peut-&ecirc;tre un probl&egrave;me avec le jeu ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003ELe jeu a-t-il caus&eacute; chez vous des probl&egrave;mes de sant&eacute;, y compris du stress ou de l'angoisse ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EDes personnes ont-elles critiqu&eacute; vos habitudes de jeu ou dit que vous aviez un probl&egrave;me avec le jeu ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EVos habitudes de jeu ont-elles caus&eacute; des difficult&eacute;s financi&egrave;res &agrave; vous ou &agrave; votre entourage ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EVous &ecirc;tes-vous d&eacute;j&agrave; senti coupable de vos habitudes de jeu ou de ce qui arrive quand vous jouez ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "ICJE"
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "manipulation_check",
              "tardy": true,
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Parmis ces messages, lequel avez-vous vu pendant le jeu ?",
                      "content": "\u003Cform\u003E\n  \u003Cinput type=\"radio\" id=\"risque1\" name=\"rappel_message\" value=\"Famille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Famille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\"\u003EFamille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\n  \u003C\u002Flabel\u003E\u003Cbr\u003E \n\n  \u003Cinput type=\"radio\" id=\"risque2\" name=\"rappel_message\" value=\"Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\"\u003EJouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"risque3\" name=\"rappel_message\" value=\"Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\"\u003ELes jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \n  \u003Cinput type=\"radio\" id=\"risque4\" name=\"rappel_message\" value=\"Plus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\" required\u003E\n  \u003Clabel for=\"Plus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\"\u003EPlus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \n   \u003Cinput type=\"radio\" id=\"controle1\" name=\"rappel_message\" value=\"Pour bien jouer, il faut parfois moins jouer\" required\u003E\n  \u003Clabel for=\"Pour bien jouer, il faut parfois moins jouer\"\u003EPour bien jouer, il faut parfois moins jouer\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle2\" name=\"rappel_message\" value=\"Jouez malin, jouez avec modération\" required\u003E\n  \u003Clabel for=\"Jouez malin, jouez avec modération\"\u003EJouez malin, jouez avec modération\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle3\" name=\"rappel_message\" value=\"Reprendre le contrôle pour que le jeu reste un plaisir\" required\u003E\n  \u003Clabel for=\"Reprendre le contrôle pour que le jeu reste un plaisir\"\u003EReprendre le contrôle pour que le jeu reste un plaisir\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle4\" name=\"rappel_message\" value=\"Restez maître du jeu ! Fixez vos limites\" required\u003E\n  \u003Clabel for=\"Restez maître du jeu ! Fixez vos limites\"\u003ERestez maître du jeu ! Fixez vos limites\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard1\" name=\"rappel_message\" value=\"N’oubliez pas que c’est uniquement du hasard\" required\u003E\n  \u003Clabel for=\"N’oubliez pas que c’est uniquement du hasard\"\u003EN’oubliez pas que c’est uniquement du hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard2\" name=\"rappel_message\" value=\"Souvenez-vous que c’est un jeu de hasard\" required\u003E\n  \u003Clabel for=\"Souvenez-vous que c’est un jeu de hasard\"\u003ESouvenez-vous que c’est un jeu de hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard3\" name=\"rappel_message\" value=\"Ce jeu est soumis uniquement au hasard\" required\u003E\n  \u003Clabel for=\"Ce jeu est soumis uniquement au hasard\"\u003ECe jeu est soumis uniquement au hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard4\" name=\"rappel_message\" value=\"Le hasard est le seul facteur déterminant de ce jeu\" required\u003E\n  \u003Clabel for=\"Le hasard est le seul facteur déterminant de ce jeu\"\u003ELe hasard est le seul facteur déterminant de ce jeu\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\n\u003C\u002Fform\u003E"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "rappel_message"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "\u003Cdiv style=\"border-radius: 5px; border: 2px solid; padding: 3px; text-align: center; display: flex; justify-content: center; align-items: center;\"\u003E\u003Cp\u003E${this.parameters.message}\u003C\u002Fp\u003E\u003Cbr\u003E\n\u003C\u002Fdiv\u003E \n\n  \u003Cinput type=\"radio\" id=\"risque\" name=\"cat_subj\" value=\"risque\" required\u003E\n  \u003Clabel for=\"risque\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur les \u003Cb\u003Erisques\u003C\u002Fb\u003E, c'est à dire à \u003Cb\u003Edes messages rappelant les risques encourus \u003C\u002Fb\u003Elorsque l'on joue à un jeux de hasard et d'argent.\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle\" name=\"cat_subj\" value=\"controle\" required\u003E\n  \u003Clabel for=\"controle\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur le \u003Cb\u003Econtrôle\u003C\u002Fb\u003E, c'est à dire à \u003Cb\u003Edes messages qui mettent l'accent sur le fait que c'est aux individus de contrôler\u002Fde surveiller leurs comportements\u003C\u002Fb\u003E lorsqu'ils jouent à un jeux de hasard et d'argent. \u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard\" name=\"cat_subj\" value=\"hasard\" required\u003E\n  \u003Clabel for=\"hasard\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur le \u003Cb\u003Ehasard\u003C\u002Fb\u003E, c'est à dire à des messages qui mettent l'accent sur le fait que \u003Cb\u003Eles jeux de hasard et d'argent sont uniquement dépendants du hasard\u003C\u002Fb\u003E. \u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n",
                      "title": "Selon vous, à quelle catégorie le message suivant renvoie-t-il le mieux ?"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "categorie_subjective",
                  "tardy": true
                }
              ]
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Une dernière question (en bas de la page) ! ",
                  "content": "\u003Cp style=\"text-align: justify;\"\u003ENous vous remercions d’avoir pris le temps de compléter cette étude portant sur l’effet des messages de prévention relatifs aux jeux de hasard et d’argent sur les comportements effectifs de jeu. Cette étude est menée dans le cadre du financement ANR JEUVIEILLI portée par Valérie Le Floch, professeur à l’Université Toulouse Jean-Jaurès et rattachée au laboratoire CLLE, portant sur l’étude des pratiques récréatives, à risque et excessives des joueurs vieillissants afin d’identifier les facteurs intrinsèques du joueur (cognitifs, motivationnels, émotionnels), du jeu (type de jeu, accessibilité, caractéristiques du jeu) et du contexte de jeu qui influent sur le désir de jouer, l’illusion de contrôle et la prise de risque. \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EL’objectif de cette étude était d’évaluer le potentiel impact de messages de prévention utilisés par les opérateurs de jeu sur les comportements de jeu.  \u003C\u002Fp\u003E\n\n\n\u003Cdiv style=\"border-radius: 5px; border: 2px solid; padding: 3px; color: red\"\u003ESi vous avez ressenti de l’inconfort au moment de la session de jeu, ou si vous pensez avoir besoin d’une écoute ou d’un conseil sur des problématiques liées aux jeux de hasard et d’argent, n’hésitez pas à appeler le 09-74-75-13-13 (appel non surtaxé).  \u003C\u002Fdiv\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EEncore une fois, nous vous remercions pour votre participation. Pour toutes questions, vous pouvez contacter à n’importe quel moment les chercheurs impliqués dans ce projet (en indiquant « participation_ANR_JEUVIEILLI_axe3_etude2 » dans l’objet du mail) :  \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EMagali Bringuier à l’adresse suivante : magali.bringuier@univ-tlse2.fr \u003C\u002Fp\u003E\n\u003Cp style=\"text-align: justify;\"\u003EValérie Le Floch à l’adresse suivante : valerie.le-floch@univ-tlse2.fr  \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003ENous vous rappelons que toutes les informations recueillies dans cette étude seront traitées de façon strictement anonyme. Le logiciel utilisé pour cette étude est paramétré pour ne pas enregistrer l’adresse IP des participants. Les données seront conservées dans un fichier informatique respectant la loi « informatique et liberté » du 6 janvier 1978 modifiée en 2004. Les données, anonymes, seront archivées de manière sécurisée et disponibles aux autres chercheurs de l’équipe, qui pourront alors eux-mêmes les analyser. Les résultats obtenus à l’issue du traitement de cette étude pourront être diffusés (articles scientifiques, colloques, …) avec une totale garantie d’anonymat : aucun renseignement pouvant révéler votre identité ne sera dévoilé. \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003E\u003Cb\u003EEn cliquant sur « oui », vous consentez à ce que vos données soient recueillies et traitées de manière anonyme. Vous comprenez également qu’en cliquant sur « oui », vous ne pourrez plus vous retirer de l’étude. \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EJe comprends et j’accepte que mes données soient recueillies et traitées de manière anonyme : \u003C\u002Fp\u003E"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cbr\u003E\r\n\r\n\u003Ccenter\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"final_consent_oui\" name=\"final_consent\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"final_consent_oui\"\u003E Oui\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"final_consent_non\" name=\"final_consent\" value=\"0\"\u003E\r\n  \u003Clabel for=\"final_consent_non\"\u003E Non\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003Cbr\u003E\r\n\r\n    \u003Cbutton id=\"final_consent_end\" type=\"submit\"\u003ETerminer\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "final_consent"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.parent.parameters.message = this.random.choice(['Famille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)', 'Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)',"Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)","Plus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage"]);
}
          },
          "title": "Sequence_risque",
          "tardy": true,
          "skip": "${this.state.contrebal_set!= 'risque'}",
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
const randomID = function(){
  const length = 10;
  let result = "";
  const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

//const pptID = randomID();
this.parent.parameters.pptID = randomID();
}
              },
              "title": "randomise_task_order",
              "shuffle": true,
              "content": [
                {
                  "title": "jeu",
                  "type": "lab.flow.Sequence",
                  "parameters": {},
                  "plugins": [],
                  "metadata": {
                    "title": "test_game9",
                    "description": "Jeu avec fausse image chargée dans \"static\" pour montrer à quoi ça ressemblerait\n*bouton arrêter le jeu fonctionne pas mais avec q,Q pressé ça marche*",
                    "repository": "",
                    "contributors": ""
                  },
                  "tardy": true,
                  "messageHandlers": {},
                  "files": {},
                  "responses": {},
                  "content": [
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_consigne_jeu",
                      "content": [
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "training_game_round": "1",
                              "": ""
                            },
                            {
                              "training_game_round": "2",
                              "": ""
                            },
                            {
                              "training_game_round": "3",
                              "": ""
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Loop_consigne_jeu",
                          "indexParameter": "count_training_game",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Sequence_consigne_jeu_2",
                            "tardy": true,
                            "skip": "${this.state.instrjeucheck== 1}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Ch3\u003EVous allez pouvoir jouer à un jeu qui ressemble à un jeu de hasard et d'argent.\u003C\u002Fh3\u003E \r\n  \u003Cp\u003EVous disposez d’un capital de départ de 299 jetons.\u003C\u002Fp\u003E\r\n  \u003Cp\u003E\u003Cb\u003ECes 299 jetons sont à vous.\u003C\u002Fp\u003E\r\n  \u003Cbr\u003E\r\n  \u003Cp\u003EVotre but est de gagner \u003Cu\u003Ele plus de jetons possible.\u003C\u002Fu\u003E\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu1"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Le jeu se présente ainsi\u003C\u002Fh3\u003E\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${this.files[\"jeu_consigne1.PNG\"]}\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne1.PNG": "embedded\u002F23c9add9f482e5e3c4e6a6d180926fc4bc1c985369d506accfde3d4e31ea2625.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu2"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Première étape\u003C\u002Fh3\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous devez donc choisir un tas de cartes :\u003C\u002Fu\u003E\u003C\u002Fp\u003E\r\n\u003Cp\u003EChaque tas de cartes présente des probabilités de gain différentes et permet de remporter des sommes variables :\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 1er tas en partant de la gauche a 18 chances sur 37 de gagner et peut vous faire remporter 1x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 2ème tas en partant de la gauche a 12 chances sur 37 de gagner et peut vous faire remporter 2x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 3ème tas en partant de la gauche a 3 chances sur 37 de gagner et peut vous faire remporter 11x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003E- Le 4ème tas en partant de la gauche a 1 chance sur 37 de gagner et peut vous faire remporter 35x votre mise.\u003C\u002Fp\u003E\r\n\u003Cp\u003ENe vous inquiétez pas, il ne s’agit pas d’une épreuve de mémorisation. \r\nLes probabilités de gain et les gains associés sont écrits sur les tas de cartes comme sur l’image ci-dessous.\r\n\u003C\u002Fp\u003E\r\n\u003Cp\u003EVous pouvez parier sur \u003Cu\u003Eun seul\u003C\u002Fu\u003E tas de cartes, mais vous pourrez en changer à chaque tour si vous le désirez.\u003C\u002Fp\u003E\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${this.files[\"jeu_consigne2.png\"]}\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"\u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne2.png": "embedded\u002Fc7accd742bee68166e63cfcc54897282baf7abd243aa5c98308585bbea08ae1c.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu3"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003EVous devez \u003Cb\u003Echoisir le montant de votre mise.\u003C\u002Fb\u003E\u003C\u002Fp\u003E \r\n\u003Cp\u003EVous misez autant de points que vous désirez. Vous ne pouvez miser que des nombres entiers. Vous ne pouvez pas miser plus de points que vous n’en possédez !\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne3.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"  \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne3.png": "embedded\u002Fcca79cc4acf65793cc2e58c725a9cf71a5cc8e281b067dbaf371752b223deb23.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu4"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003EEnsuite vous \u003Cu\u003Emisez\u003C\u002Fu\u003E.\u003C\u002Fp\u003E\r\n\u003Cp\u003EL’ordinateur tire alors la première carte du tas sélectionné. \u003C\u002Fp\u003E\r\n\u003Cp\u003EÀ la fin de chaque tour, vos gains ou vos pertes seront affichés à l’écran.\u003C\u002Fp\u003E\r\n\u003Cp\u003EÀ chaque tour, les cartes de chaque tas sont automatiquement mélangées et la dernière carte sortie est remise en jeu dans le tas de cartes correspondant (jeu de tirage avec remise).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne4.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\"  \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne4.png": "embedded\u002Fd9d6cf7960fe01b2200ef0803d3fbb16edffc8abce1208a587bc6957b5638cb5.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu5"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous pourrez jouer autant de tours que vous voulez\u003C\u002Fu\u003E. \u003Cb\u003ESi vous décidez d’arrêter\u003C\u002Fb\u003E, appuyez sur la touche \"\u003Cb\u003Eq\u003C\u002Fb\u003E\" de votre clavier. Nous encaisserons alors vos jetons et vous passerez à l’étape suivante de l’enquête.\u003C\u002Fp\u003E\r\n\r\n\u003Cu\u003E\u003Cb\u003EAttention : Pour \u003Cb\u003EQUITTER LE JEU\u003C\u002Fb\u003E, appuyez sur la touche \"q\" de votre clavier. Il ne faut \u003Cb\u003Epas\u003C\u002Fb\u003E quitter via le navigateur (croix rouge), sinon vous mettrez fin à l'expérience et vos réponses ne seront pas enregistrées.\u003C\u002Fu\u003E\u003C\u002Fb\u003E\r\n\u003Cp\u003EComme vous pouvez quitter le jeu quand vous le voulez, nous vous rappellerons la procédure à suivre à chacun de vos tours comme ci dessous\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003Cimg src=\"${ this.files[\"jeu_consigne5.png\"] }\" alt=\"\" style=\"border: 2px solid white; padding: 10px; border-radius: 5px;\" width=\"80%\" height=\"80%\" \u002F\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "jeu_consigne5.png": "embedded\u002F40f7efc10e784f1723c702b9e1fc78a5a768bb3bb64b3a70be54a979ebea4127.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu6"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Cp\u003E\u003Cu\u003EVous avez deux tours d’entraînement pour vous familiariser avec le jeu.\u003C\u002Fp\u003E\u003Cp\u003E À l’issue de ces 2 tours, votre compteur sera mis à zéro et vos jetons seront réellement comptabilisés.\u003C\u002Fu\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "Capture - Copie (2).PNG": "embedded\u002F25fd806f52d44d2997b9d14f183c1688a9f3482f74e799d9d961cfc2ee348af3.PNG",
                                  "Capture - Copie (3).PNG": "embedded\u002Fbf1012572e261295fb686ca94c7812b9904764cd9b18bf4233e0b9d5af7dd5ee.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "consigne_jeu7"
                              },
                              {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {
                                  "before:prepare": function anonymous(
) {
this.parameters.cagnotte_t = 299;

}
                                },
                                "title": "Sequence_training_jeu + charge cagnotte training",
                                "content": [
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Ch3\u003EEntrainement\u003C\u002Fh3\u003E\r\n\u003Cp\u003E Voici un entrainement pour vous familiariser avec l'interface du jeu. \u003C\u002Fp\u003E\r\n\u003Cp\u003E Votre capital de départ est de 299 jetons. \u003C\u002Fp\u003E\r\n\u003Cp\u003E Tous ces points sont à vous. Votre but est de gagner le plus de jetons possibles. \u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "consigne_training"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte_t} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\u003Ch3\u003E\u003Cp\u003EAfin de vérifier que vous avez bien compris comment fonctionne le jeu, nous vous demandons de : \u003Cb\u003EMiser 10 jetons sur la carte qui, si vous gagnez, vous fera remporter 2x votre mise.\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte_t}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003E jetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "undefined": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          } else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

        

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)+outcome_mise;
      } else {
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable

this.parent.parameters.cagnotte_t = this.state.cagnotte_t;



this.parent.parameters.check_instr_jeu_1 = 0;

if (this.data.tas_choisi == "tas2") {
 this.parent.parameters.check_instr_jeu_1 = 1;
 if (this.state.check_instr_jeu_2 == 1){
  this.parent.parent.parameters.instrjeucheck = 1;
 }
}



console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);

}
                                    },
                                    "title": "training_tas_2",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte_t}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
this.state.cagnotte_t = this.parent.parameters.cagnotte_t || this.parameters.cagnotte_t;  // Valeur par défaut si elle n'a pas été encore initialisée

}
                                    },
                                    "title": "resultat",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text",
                                        "title": "",
                                        "content": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "empty_screen",
                                    "timeout": "500",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte_t} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\u003Ch3\u003E\u003Cp\u003EAfin de vérifier que vous avez bien compris comment fonctionne le jeu, nous vous demandons de : \u003Cb\u003EMiser 25 jetons sur la carte qui offre 18 chances de gagner sur 37.\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte_t}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003E  jetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "undefined": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "commit": function anonymous(
) {
this.state.cagnotte_t = this.parent.parameters.cagnotte_t || this.parameters.cagnotte_t;  // Valeur par défaut si elle n'a pas été encore initialisée


 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          } else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)+outcome_mise;
      } else {
        this.state.cagnotte_t = parseFloat(this.state.cagnotte_t)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable



this.parent.parameters.check_instr_jeu_2 = 0;

if (this.data.tas_choisi == "tas1") {
 this.parent.parameters.check_instr_jeu_2 = 1;
 if (this.state.check_instr_jeu_1 == 1){
  this.parent.parent.parameters.instrjeucheck = 1;
 }
}




console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);


}
                                    },
                                    "title": "training_tas_1",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte_t}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                        "name": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "resultat",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text",
                                        "title": "",
                                        "content": ""
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "empty_screen",
                                    "timeout": "500",
                                    "tardy": true
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_jeu",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "required": true,
                              "type": "html",
                              "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch3\u003E Jeu \u003C\u002Fh3\u003E\r\n\u003Cp\u003EVous allez pouvoir jouer à un jeu de hasard.\u003C\u002Fp\u003E \r\n\u003Cp\u003EVous disposez d’un capital de départ de 299 jetons. Ces 299 jetons sont à vous. Votre but est de gagner le plus de jetons possible.\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
                              "name": ""
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "right",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.parameters.cagnotte = 299;


}
                          },
                          "title": "charge variable cagnotte"
                        },
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "round_game": "1"
                            },
                            {
                              "round_game": "2"
                            },
                            {
                              "round_game": "3"
                            },
                            {
                              "round_game": "4"
                            },
                            {
                              "round_game": "5"
                            },
                            {
                              "round_game": "6"
                            },
                            {
                              "round_game": "7"
                            },
                            {
                              "round_game": "8"
                            },
                            {
                              "round_game": "9"
                            },
                            {
                              "round_game": "10"
                            },
                            {
                              "round_game": "11"
                            },
                            {
                              "round_game": "12"
                            },
                            {
                              "round_game": "13"
                            },
                            {
                              "round_game": "14"
                            },
                            {
                              "round_game": "15"
                            },
                            {
                              "round_game": "16"
                            },
                            {
                              "round_game": "17"
                            },
                            {
                              "round_game": "18"
                            },
                            {
                              "round_game": "19"
                            },
                            {
                              "round_game": "20"
                            },
                            {
                              "round_game": "21"
                            },
                            {
                              "round_game": "22"
                            },
                            {
                              "round_game": "23"
                            },
                            {
                              "round_game": "24"
                            },
                            {
                              "round_game": "25"
                            },
                            {
                              "round_game": "26"
                            },
                            {
                              "round_game": "27"
                            },
                            {
                              "round_game": "28"
                            },
                            {
                              "round_game": "29"
                            },
                            {
                              "round_game": "30"
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "keypress(q,Q)": "quit_game"
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "boucle_jeu",
                          "indexParameter": "count_trials_game",
                          "tardy": true,
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "keypress q,Q": "quit_game"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "sequence_game",
                            "tardy": true,
                            "skip": "${this.state.cagnotte==0}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\u003Ch4\u003E\u003Cp\u003ECagnotte actuelle : ${this.state.cagnotte} jetons\u003C\u002Fp\u003E\u003C\u002Fh4\u003E\r\n\r\n\u003Ch3\u003E${this.state.message}\u003C\u002Fh3\u003E\r\n\r\n\u003Cdiv class=\"input-container\"\u003E\r\n    \u003Cinput type=\"number\" id = \"montant\" required name=\"montant\" placeholder=\"Entrez votre mise\" min=\"1\" max= \"${this.state.cagnotte}\"\u003E\r\n      \u003Cspan class=\"input-text\"\u003Ejetons\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"container\"\u003E\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" required name = \"tas_choisi\" id = \"tas1\" value = \"tas1\"\u003E\r\n    \u003Clabel for =\"tas1\"\u003E\u003Cimg src=\"${\"static\u002Ftas1.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas2\" value = \"tas2\"\u003E\r\n    \u003Clabel for =\"tas2\"\u003E\u003Cimg src=\"${\"static\u002Ftas2.PNG\"}\"\u003E  \u003C\u002Flabel\u003E \r\n\r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas3\" value = \"tas3\"\u003E\r\n    \u003Clabel for =\"tas3\"\u003E\u003Cimg src=\"${\"static\u002Ftas3.PNG\"}\"\u003E\u003C\u002Flabel\u003E  \r\n    \r\n    \u003Cinput type=\"radio\" class=\"custom-radio2\" name = \"tas_choisi\" id = \"tas4\" value = \"tas4\"\u003E\r\n    \u003Clabel for =\"tas4\"\u003E\u003Cimg src=\"${\"static\u002Ftas4.PNG\"}\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Fdiv\u003E\r\n  \r\n\u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\"\u003E\u003Cbutton id=\"next_button\"\u003EMiser\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003Ch3\u003E Vous pouvez quittez le jeu à tout moment en appuyant sur la touche \"q\" de votre clavier \u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "hidden",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {
                                  "commit": function anonymous(
) {
 const miser = function(montant, probabilite, gainMultiplier) {
           if(Math.random() < probabilite) { //génère nombre aléatoire entre 0 et 1 et test si inférieur à "probabilité" ou non
           return parseFloat(montant)*(gainMultiplier); //parseFloat pour que js comprenne que c'est numérique 
      } else {
            return 0 //si math.random pas inférieur à probabilité, gain de 0
        }
      }

if(this.data.tas_choisi == "tas1") { //définir le résultat, outcome_mise, en fonction du tas (on applique la même fonction mais avec des valeurs différentes en fonction du tas)
        var outcome_mise = miser(this.state.montant, 18/37, 1); //applique la fonction à "outcome_mise" pour le tas 1
      } else {
        if(this.data.tas_choisi == "tas2") {
           var outcome_mise = miser(this.state.montant, 12/37, 2); //applique la fonction à "outcome_mise" pour le tas 2
        } else {
          if(this.data.tas_choisi == "tas3") {
            var outcome_mise = miser(this.state.montant, 3/37, 11); //applique la fonction à "outcome_mise" pour le tas 3
          }else {
           var outcome_mise = miser(this.state.montant, 1/37, 35); //applique la fonction à "outcome_mise" pour le tas 4
          }
        }
        };

if(outcome_mise > 0) { //définir une variable gagné ou perdu en fonction de outcome mise
           var win_loose = "gagne";
      } else {
           var win_loose = "perdu";
        };

if(outcome_mise > 0) { //en fonction de outcome_mise, la cagnotte gagne outcome_mise ou perd montant mise
        this.state.cagnotte = parseFloat(this.state.cagnotte)+outcome_mise;
      } else {
        this.state.cagnotte = parseFloat(this.state.cagnotte)-parseFloat(this.state.montant);
        };

this.parent.parameters.outcome_mise = outcome_mise; //ajouter "ouctome_mise" dans le tableau de données
this.parent.parameters.win_loose = win_loose; //on écrit cette variable

console.log("outcome_mise =", outcome_mise);
console.log("montant misé =", this.state.montant);
console.log("statut =", win_loose);

}
                                },
                                "title": "jeu_et_charge_fonction_miser",
                                "tardy": true
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "required": true,
                                    "type": "html",
                                    "content": "\u003Cdiv class=\"partie-jeu\"\u003E\r\n\r\n  \u003Cp \u003EVous avez misé : ${this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez \u003Cb\u003E${this.parameters.win_loose == 'gagne' ? 'gagné !' : 'perdu...'}\u003C\u002Fb\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVous avez ${this.parameters.win_loose == 'gagne' ? 'gagné' : 'perdu votre mise, soit'} ${this.parameters.win_loose == 'gagne' ? this.parameters.outcome_mise : this.state.montant} jetons.\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Cp\u003EVotre cagnotte est maintenant de \u003Cb\u003E${this.state.cagnotte}\u003C\u002Fb\u003E jetons.\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "resultat",
                                "tardy": true
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "title": "",
                                    "content": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "hidden",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "empty_screen",
                                "timeout": "500"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "Merci de cliquer sur continuer -\u003E pour passer à la suite de l'étude. \n",
                          "title": "Le jeu est terminé"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "end_jeu"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "eemdic",
                  "tardy": true,
                  "content": [
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Sequence_eemdic_consigne",
                      "content": [
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "instruction_loop": "1",
                              "": ""
                            },
                            {
                              "instruction_loop": "2",
                              "": ""
                            },
                            {
                              "instruction_loop": "3",
                              "": ""
                            }
                          ],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Loop_eemdic_consigne",
                          "indexParameter": "count_loop_instruction",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Sequence_emmdic_consigne2",
                            "tardy": true,
                            "skip": "${this.state.instrcheck== 1}",
                            "content": [
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "title": "Vous allez devoir répondre à un questionnaire",
                                    "content": "Nous vous proposons un entrainement pour vous familiariser avec le format de la grille de réponse."
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_1"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "content": "",
                                    "title": "Voici à quoi ressemble la grille"
                                  },
                                  {
                                    "required": true,
                                    "type": "image",
                                    "src": "${ this.files[\"eemdic.png\"] }",
                                    "width": "",
                                    "height": "",
                                    "name": ""
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "eemdic.png": "embedded\u002Ff2a7684be8047bc072d6f9b70770a9151fa412038b65a09c33357331c302b291.png"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_2"
                              },
                              {
                                "type": "lab.html.Page",
                                "items": [
                                  {
                                    "type": "text",
                                    "content": "A chaque fois, deux items vous seront proposés. Un écrit en bleu, un autre écrit en vert. \nPour vous positionnez sur la matrice de réponse, nous vous conseillons de procéder par étapes. ",
                                    "title": "Consignes"
                                  }
                                ],
                                "scrollTop": true,
                                "submitButtonText": "Continue →",
                                "submitButtonPosition": "right",
                                "files": {
                                  "consigneEEMDIC.PNG": "embedded\u002F1bc9d6c59044b4251c8ae03399ebec3508fc15be1903c395aa22803e80054fe0.PNG"
                                },
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "emmdic_consigne_3"
                              },
                              {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "Sequence_eemdic_consigne3",
                                "content": [
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. \n\u003Cbr\u003E",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E  \r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {

this.parent.parameters.check_instr_6_6 = 0;

if (this.data.reponse_t == "6_6") {
 this.parent.parameters.check_instr_6_6 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}

}
                                    },
                                    "title": "eemdic_training_1_6_6",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_1",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_1_1 = 0;

if (this.data.reponse_t == "1_1") {
 this.parent.parameters.check_instr_1_1 = 1;
 if (this.state.check_instr_6_6 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_2_1_1",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_2",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_6_1 = 0;

if (this.data.reponse_t == "6_1") {
 this.parent.parameters.check_instr_6_1 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_6 == 1 && this.state.check_instr_1_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_3_6_1",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_3",
                                    "timeout": "500"
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "D'abord, lisez la proposition écrite en \u003Cspan style=\"color: #0000ff;\"\u003Ebleu\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Eligne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "PREMIERE ÉTAPE "
                                      },
                                      {
                                        "required": true,
                                        "type": "html",
                                        "content": "\u003Cbr\u003E\r\n\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background) \" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003EVous êtes absolument pas d'accord avec cet item\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse_t\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003EVous êtes tout à fait d'accord avec cet item\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n",
                                        "name": ""
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Puis lisez la proposition écrite en \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003Evert\u003C\u002Fspan\u003E. Cela vous permet de choisir la \u003Cb\u003Ecolonne\u003C\u002Fb\u003E qui correspond à votre réponse. ",
                                        "title": "DEUXIEME ÉTAPE"
                                      },
                                      {
                                        "required": true,
                                        "type": "text",
                                        "content": "Une fois les deux items lus, vous pouvez \u003Cb\u003Ecliquer\u003C\u002Fb\u003E sur le croisement des \u003Cb\u003Edeux choix\u003C\u002Fb\u003E (ligne et colonne).",
                                        "title": "TROISIEME ÉTAPE"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "right",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
},
                                      "commit": function anonymous(
) {
this.parent.parameters.check_instr_1_6 = 0;

if (this.data.reponse_t == "1_6") {
 this.parent.parameters.check_instr_1_6 = 1;
 if (this.state.check_instr_1_1 == 1 && this.state.check_instr_6_1 == 1 && this.state.check_instr_6_6){
  this.parent.parent.parameters.instrcheck = 1;
 }
}
}
                                    },
                                    "title": "eemdic_training_4_1_6",
                                    "width": "l",
                                    "plugins": []
                                  },
                                  {
                                    "type": "lab.html.Page",
                                    "items": [
                                      {
                                        "type": "text"
                                      }
                                    ],
                                    "scrollTop": true,
                                    "submitButtonText": "Continue →",
                                    "submitButtonPosition": "hidden",
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "black_page_4",
                                    "timeout": "500"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "Passons à l'étape suivante. \n",
                          "title": "L'entrainement est terminé !"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "training_is_good"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "eemdic_pos": "Mes gains sont la preuve que j'ai des compétences et des connaissances liées au jeu",
                          "eemdic_neg": "Mes pertes sont la preuve que je n'ai pas de compétences ni de connaissances liées au jeu"
                        },
                        {
                          "eemdic_pos": "Je devrais garder une trace de mes précédentes combinaisons gagnantes afin de pouvoir déterminer comment je devrais jouer à l'avenir",
                          "eemdic_neg": "Je devrais garder une trace de mes précédentes combinaisons perdantes afin de pouvoir déterminer comment je devrais jouer à l'avenir"
                        },
                        {
                          "eemdic_pos": "Je peux analyser mes gains pour me donner des stratégies qui me permettront de devenir un meilleur joueur",
                          "eemdic_neg": "Je peux analyser mes pertes pour me donner des stratégies qui me permettront de devenir un meilleur joueur"
                        },
                        {
                          "eemdic_pos": "Je gagne parce que je passe une bonne journée ou que c'est mon jour de chance",
                          "eemdic_neg": "Je perds parce que je passe une mauvaise journée ou que c'est mon jour de malchance"
                        },
                        {
                          "eemdic_pos": "Je me considère comme une personne chanceuse",
                          "eemdic_neg": "Je me considère comme une personne malchanceuse"
                        },
                        {
                          "eemdic_pos": "Les gains sont plus susceptibles de se produire sur une machine chaude (qui est utilisée depuis un moment)",
                          "eemdic_neg": "Les pertes sont plus susceptibles de se produire sur une machine froide (qui n'a pas été utilisée depuis un moment)"
                        },
                        {
                          "eemdic_pos": "Plus je suis familier avec un jeu, plus je suis susceptible de gagner",
                          "eemdic_neg": "Moins je suis familier avec un jeu, plus je suis susceptible de perdre"
                        },
                        {
                          "eemdic_pos": "Certains joueurs sont juste nés chanceux",
                          "eemdic_neg": "Certains joueurs sont juste nés malchanceux"
                        },
                        {
                          "eemdic_pos": "C'est un bon conseil de conserver la même paire de dés ou les mêmes numéros sur une série gagnante",
                          "eemdic_neg": "C'est un bon conseil de changer de paire de dés ou de numéros sur une série perdante"
                        },
                        {
                          "eemdic_pos": "Je crois que le destin joue en ma faveur quand je gagne",
                          "eemdic_neg": "Je crois que le destin joue contre moi quand je perds"
                        },
                        {
                          "eemdic_pos": "J'ai plus de chances de gagner à la loterie ou au jeu de grattage si je choisis moi-même mes numéros ou mon ticket",
                          "eemdic_neg": "J'ai plus de chances de perdre à la loterie ou au jeu de grattage si je ne choisis pas moi-même mes numéros ou mon ticket"
                        },
                        {
                          "eemdic_pos": "Si je gagne, c'est parce que j'ai bien joué",
                          "eemdic_neg": "Si je perds, c'est parce que j'ai mal joué"
                        },
                        {
                          "eemdic_pos": "Même les choses de la vie que je ne peux pas contrôler\u002Fmaîtriser ont tendance à se passer comme je le veux parce que j'ai de la chance",
                          "eemdic_neg": "Même les choses de la vie que je ne peux pas contrôler\u002Fmaîtriser ont tendance à ne pas se passer comme je le veux parce que je suis malchanceux"
                        },
                        {
                          "eemdic_pos": "Il y a quelque chose comme la chance qui favorise certaines personnes plus que d'autres",
                          "eemdic_neg": "Il y a quelque chose comme la malchance qui affecte certaines personnes plus que d'autres"
                        },
                        {
                          "eemdic_pos": "Si j'utilise des rituels spéciaux, je peux provoquer la chance",
                          "eemdic_neg": "Si j'utilise des rituels spéciaux, je peux éviter la malchance"
                        },
                        {
                          "eemdic_pos": "Si j'ai des pensées positives, cela contribue à ma chance et à mes gains",
                          "eemdic_neg": "Si j'ai des pensées négatives, cela contribue à ma malchance et à mes pertes"
                        },
                        {
                          "eemdic_pos": "J'utilise un porte-bonheur pour obtenir des gains",
                          "eemdic_neg": "J'utilise un porte-bonheur pour éviter des pertes"
                        },
                        {
                          "eemdic_pos": "Mon habileté au jeu me permet de gagner",
                          "eemdic_neg": "Mon manque d'habileté au jeu cause mes pertes"
                        },
                        {
                          "eemdic_pos": "On peut identifier une tendance dans la façon dont les résultats se produisent afin de gagner",
                          "eemdic_neg": "On peut identifier une tendance dans la façon dont les résultats se produisent afin d'éviter de perdre"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "eemdic_loop",
                      "plugins": [],
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Sequence_emmdic",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "required": true,
                                "type": "text",
                                "content": "\u003Cp\u003ELes propositions suivantes décrivent ce que vous pourriez penser en jouant à un \u003Cb\u003Ejeu de hasard et d'argent\u003C\u002Fb\u003E, au niveau des pertes \u003Cb\u003E\u003Cu\u003E et \u003C\u002Fu\u003E\u003C\u002Fb\u003E au niveau des gains. \u003C\u002Fp\u003E\nVeuillez considérer chacun des deux niveaux et indiquer à quel point vous êtes d'accord avec chaque proposition. Merci d'indiquer votre opinion en choisissant une cellule dans la matrice."
                              },
                              {
                                "required": true,
                                "type": "divider"
                              },
                              {
                                "required": true,
                                "type": "html",
                                "content": "\u003Ctable\u003E\r\n\u003Ctbody\u003E\r\n\r\n\u003Ctr\u003E\r\n\u003Ctd style=\"text-align: center; width: 30%; border:var(--color-background)\" rowspan=\"8\"\u003E\r\n  \u003Cdiv\u003E\u003Cspan style=\"color: #0000ff;\"\u003E${parameters.eemdic_neg}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_1\" \u002F\u003E\r\n    \u003Clabel for=\"6_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_2\" \u002F\u003E \r\n    \u003Clabel for=\"6_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_3\" \u002F\u003E \r\n    \u003Clabel for=\"6_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_4\" \u002F\u003E \r\n    \u003Clabel for=\"6_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_5\" \u002F\u003E\r\n    \u003Clabel for=\"6_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"6_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"6_6\" \u002F\u003E \r\n    \u003Clabel for=\"6_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_1\" \u002F\u003E \r\n    \u003Clabel for=\"5_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_2\" \u002F\u003E\r\n    \u003Clabel for=\"5_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_3\" \u002F\u003E\r\n    \u003Clabel for=\"5_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_4\" \u002F\u003E \r\n    \u003Clabel for=\"5_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n   \u003Cinput id=\"5_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_5\" \u002F\u003E \r\n   \u003Clabel for=\"5_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"5_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"5_6\" \u002F\u003E \r\n    \u003Clabel for=\"5_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_1\" \u002F\u003E \r\n    \u003Clabel for=\"4_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_2\" \u002F\u003E \r\n    \u003Clabel for=\"4_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_3\" \u002F\u003E \r\n    \u003Clabel for=\"4_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_4\" \u002F\u003E \r\n    \u003Clabel for=\"4_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_5\" \u002F\u003E \r\n    \u003Clabel for=\"4_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"4_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"4_6\" \u002F\u003E \r\n    \u003Clabel for=\"4_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n  \u003Cspan style=\"color: #0000ff;\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_1\" \u002F\u003E \r\n    \u003Clabel for=\"3_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_2\" \u002F\u003E \r\n    \u003Clabel for=\"3_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_3\" \u002F\u003E \r\n    \u003Clabel for=\"3_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_4\" \u002F\u003E \r\n    \u003Clabel for=\"3_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_5\" \u002F\u003E \r\n    \u003Clabel for=\"3_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"3_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"3_6\" \u002F\u003E \r\n    \u003Clabel for=\"3_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_1\" \u002F\u003E \r\n    \u003Clabel for=\"2_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_2\" \u002F\u003E \r\n    \u003Clabel for=\"2_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_3\" \u002F\u003E \r\n    \u003Clabel for=\"2_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_4\" \u002F\u003E \r\n    \u003Clabel for=\"2_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_5\" \u002F\u003E\r\n    \u003Clabel for=\"2_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"2_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"2_6\" \u002F\u003E \r\n    \u003Clabel for=\"2_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"text-align: right;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: #0000ff;\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_1\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_1\" \u002F\u003E \r\n    \u003Clabel for=\"1_1\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_2\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_2\" \u002F\u003E \r\n    \u003Clabel for=\"1_2\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_3\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_3\" \u002F\u003E \r\n    \u003Clabel for=\"1_3\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_4\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_4\" \u002F\u003E \r\n    \u003Clabel for=\"1_4\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_5\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_5\" \u002F\u003E \r\n    \u003Clabel for=\"1_5\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \r\n  \u003Ctd style=\"text-align: center; position: relative;;margin:0; padding:0\"\u003E\r\n    \u003Cinput id=\"1_6\" class=\"custom-radio\" name=\"reponse\" required type=\"radio\" value=\"1_6\" \u002F\u003E \r\n    \u003Clabel for=\"1_6\"\u003E\u003C\u002Flabel\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\r\n\u003Ctr\u003E\r\n  \u003Ctd style=\"border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27); border:var(--color-background)\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EAbsolument pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t pas d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003EPlut&ocirc;t d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ED'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n  \u003Ctd style=\"text-align: center;border:var(--color-background)\"\u003E\r\n    \u003Cspan style=\"color: rgb(48, 150, 27);\"\u003ETout &agrave; fait d'accord\u003C\u002Fspan\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\r\n\r\n\u003Ctr style=\"border:var(--color-background)\"\u003E\r\n  \u003Ctd style=\"text-align: center; height:30%; border:var(--color-background)\" colspan=\"7\"\u003E\r\n    \u003Cdiv style=\" height:30%\"\u003E\r\n      \u003Cspan style=\"color: rgb(48, 150, 27);margin:0; padding:0\"\u003E${parameters.eemdic_pos}\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\r\n",
                                "name": ""
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "right",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
  function validateForm() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      alert("Veuillez sélectionner au moins une réponse avant de soumettre le formulaire.");
    }

    return formValid;
  }
}
                            },
                            "title": "eemdic",
                            "width": "l",
                            "plugins": []
                          },
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text"
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "black_page",
                            "timeout": "500"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "questionnaire_socio_demo",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quelques informations vous concernant",
                      "content": "\u003Cp\u003EVeuillez cliquer sur \"Continuer →\" pour répondre à quelques questions vous concernant.\u003C\u002Fp\u003E \n\n\u003Cp\u003EPour rappel, l'entièreté de cette étude est anonyme. \u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cb\u003EAucune information que nous récolterons sur vous ne permet de vous identifier, même par recoupement.\u003C\u002Fb\u003E\u003C\u002Fp\u003E "
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "intro",
                  "width": "m"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quel est votre genre ?"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"homme\" name=\"genre\" value=\"homme\" required\u003E\r\n  \u003Clabel for=\"homme\"\u003EHomme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"femme\" name=\"genre\" value=\"femme\" required\u003E\r\n  \u003Clabel for=\"femme\"\u003EFemme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre\" name=\"genre\" value=\"autre\" required\u003E\r\n  \u003Clabel for=\"autre\"\u003EAutre\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"ne_souhaite_pas_repondre\" name=\"genre\" value=\"ne_souhaite_pas_repondre\" required\u003E\r\n  \u003Clabel for=\"ne_souhaite_pas_repondre\"\u003ENe souhaite pas repondre\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "genre"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quel est votre âge?",
                      "content": "Veuillez indiquer votre âge (en année seulement). Vous pouvez utiliser les flèches présentes à droite de l'encart, ou rentrer directement votre âge à l'aide de votre clavier."
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Cbody\u003E\r\n\r\n\u003Clabel for=\"age\"\u003EÂge (en année) :\u003C\u002Flabel\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"120\" required\u003E\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "age"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Quelle est votre langue maternelle ?"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"francais\" name=\"lmat\" value=\"francais\" required\u003E\r\n  \u003Clabel for=\"francais\"\u003EFrançais\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre\" name=\"lmat\" value=\"autre\" required\u003E\r\n  \u003Clabel for=\"autre\"\u003EAutre langue maternelle\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "langue_mat"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "Si vous appartenez à deux catégories (par exemple étudiant.e salarié.e) veuillez indiquer la catégorie socio-professionnelle qui vous semble centrale dans votre activité. ",
                      "title": "À quelle catégorie socio-prefessionnelle appartenez-vous ?"
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"agriculteur\" name=\"CSP\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"agriculteur\"\u003EAgriculteurs exploitants\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"artisan\" name=\"CSP\" value=\"2\" required\u003E\r\n  \u003Clabel for=\"artisan\"\u003EArtisans, commerçants, cheffes d'entreprise\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"cadre\" name=\"CSP\" value=\"3\" required\u003E\r\n  \u003Clabel for=\"cadre\"\u003ECadres et professions intellectuelles supérieures\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"profession_intermediaire\" name=\"CSP\" value=\"4\" required\u003E\r\n  \u003Clabel for=\"profession_intermediaire\"\u003EProfessions intermédiaires\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"employe\" name=\"CSP\" value=\"5\" required\u003E\r\n  \u003Clabel for=\"employe\"\u003EEmployés\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"ouvrier\" name=\"CSP\" value=\"6\" required\u003E\r\n  \u003Clabel for=\"ouvrier\"\u003EOuvriers\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"retraite\" name=\"CSP\" value=\"7\" required\u003E\r\n  \u003Clabel for=\"retraite\"\u003ERetraités\u003C\u002Flabel\u003E\u003Cbr\u003E   \r\n  \r\n  \u003Cinput type=\"radio\" id=\"etudiant\" name=\"CSP\" value=\"8\" required\u003E\r\n  \u003Clabel for=\"etudiant\"\u003EÉtudiants\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre_sans_act\" name=\"CSP\" value=\"9\" required\u003E\r\n  \u003Clabel for=\"autre_sans_act\"\u003EAutres personnes sans activité professionnelle\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "csp"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "",
                      "title": "Quel est votre niveau d'étude ? (dernier diplôme validé)"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"sans_diplome\" name=\"etude\" value=\"sans_diplome\" required\u003E\r\n  \u003Clabel for=\"sans_diplome\"\u003ESans diplôme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"brevet\" name=\"etude\" value=\"brevet\" required\u003E\r\n  \u003Clabel for=\"brevet\"\u003EBrevet des collèges\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"cap_bep\" name=\"etude\" value=\"cap_bep\" required\u003E\r\n  \u003Clabel for=\"cap_bep\"\u003ECAP - BEP\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"bac\" name=\"etude\" value=\"4\" required\u003E\r\n  \u003Clabel for=\"bac\"\u003EBaccalauréat\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"bts\" name=\"etude\" value=\"bts\" required\u003E\r\n  \u003Clabel for=\"bts\"\u003EBTS ou équivalent\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"licence\" name=\"etude\" value=\"licence\" required\u003E\r\n  \u003Clabel for=\"licence\"\u003ELicence\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"master\" name=\"etude\" value=\"master\" required\u003E\r\n  \u003Clabel for=\"master\"\u003EMaster\u003C\u002Flabel\u003E\u003Cbr\u003E   \r\n  \r\n  \u003Cinput type=\"radio\" id=\"doctorat\" name=\"etude\" value=\"doctorat\" required\u003E\r\n  \u003Clabel for=\"doctorat\"\u003EDoctorat\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "niveau_etude"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Dans les 12 derniers mois, avez-vous joué à des jeux de hasard et d'argent ?",
                      "content": " par exemple : poker, loto, jeux de grattage, roulette, machines à sous, etc."
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"jeu_12_mois_oui\" name=\"jeu_12_mois\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"jeu_12_mois_oui\"\u003EOui, au moins une fois dans les 12 derniers mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"jeu_12_mois_non\" name=\"jeu_12_mois\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"jeu_12_mois_non\"\u003ENon\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "jeu_12_mois",
                  "width": "m"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Vous avez indiqué avoir joué à un ou plusieurs jeux de hasard et d'argent au cours de ces 12 dernier mois.",
                      "content": "Parmi la liste suivante, veuillez indiquer les jeux auxquels vous avez joué. "
                    },
                    {
                      "required": true,
                      "type": "divider"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cform id=\"jeuForm\"\u003E\r\n  \u003C!-- Poker --\u003E\r\n  \u003Cp\u003EAvez-vous joué au poker ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"poker_oui\" name=\"poker\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"poker_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"poker_non\" name=\"poker\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"poker_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Jeux de grattage --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux jeux de grattage ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"grattage_oui\" name=\"grattage\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"grattage_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"grattage_non\" name=\"grattage\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"grattage_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Paris sportifs --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux paris sportifs ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_sportifs_oui\" name=\"paris_sportifs\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"paris_sportifs_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_sportifs_non\" name=\"paris_sportifs\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"paris_sportifs_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Paris hippiques --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux paris hippiques ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_hippiques_oui\" name=\"paris_hippiques\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"paris_hippiques_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"paris_hippiques_non\" name=\"paris_hippiques\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"paris_hippiques_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Loto --\u003E\r\n  \u003Cp\u003EAvez-vous joué au loto (ou Euromillion, Keno...) ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_oui\" name=\"loto\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"loto_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_non\" name=\"loto\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"loto_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Machines à sous --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux machines à sous ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"machines_oui\" name=\"machines\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"machines_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"machines_non\" name=\"machines\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"machines_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Loteries de village --\u003E\r\n  \u003Cp\u003EAvez-vous joué aux loteries de village ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_village_oui\" name=\"loto_village\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"loto_village_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"loto_village_non\" name=\"loto_village\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"loto_village_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003C!-- Roulette --\u003E\r\n  \u003Cp\u003EAvez-vous joué à la roulette ?\u003C\u002Fp\u003E\r\n  \u003Cinput type=\"radio\" id=\"roulette_oui\" name=\"roulette\" value=\"oui\" required\u003E\r\n  \u003Clabel for=\"roulette_oui\"\u003EOui\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" id=\"roulette_non\" name=\"roulette\" value=\"non\" required\u003E\r\n  \u003Clabel for=\"roulette_non\"\u003ENon\u003C\u002Flabel\u003E\r\n\r\n  \u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Cdiv\u003E\u003Cbutton id=\"continueButton\" type=\"submit\"\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E\r\n",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "type_jeux",
                  "width": "m",
                  "tardy": true,
                  "skip": "${this.state.jeu_12_mois!= \"oui\"}"
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "poker",
                  "tardy": true,
                  "skip": "${this.state.poker!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous au Poker ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_moins_un_mois\" name=\"frequ_poker\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_plus_un_mois\" name=\"frequ_poker\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_plus_un_semaine\" name=\"frequ_poker\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_poker_everyday\" name=\"frequ_poker\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_poker_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_poker"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent au Poker ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_0\" name=\"mise_poker\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_0_5\" name=\"mise_poker\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_6_20\" name=\"mise_poker\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_21_50\" name=\"mise_poker\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_51_100\" name=\"mise_poker\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_101_200\" name=\"mise_poker\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_201_300\" name=\"mise_poker\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_301_500\" name=\"mise_poker\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_poker_500_plus\" name=\"mise_poker\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_poker_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "grattage",
                  "tardy": true,
                  "skip": "${this.state.grattage!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Jeux de Grattage ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_moins_un_mois\" name=\"frequ_grattage\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_plus_un_mois\" name=\"frequ_grattage\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_plus_un_semaine\" name=\"frequ_grattage\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_grattage_everyday\" name=\"frequ_grattage\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_grattage_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_grattage"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Jeux de Grattage ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_0\" name=\"mise_grattage\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_0_5\" name=\"mise_grattage\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_6_20\" name=\"mise_grattage\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_21_50\" name=\"mise_grattage\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_51_100\" name=\"mise_grattage\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_101_200\" name=\"mise_grattage\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_201_300\" name=\"mise_grattage\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_301_500\" name=\"mise_grattage\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_grattage_500_plus\" name=\"mise_grattage\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_grattage_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "paris_sportifs",
                  "tardy": true,
                  "skip": "${this.state.paris_sportifs!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Paris sportifs ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_moins_un_mois\" name=\"frequ_paris_sportifs\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_plus_un_mois\" name=\"frequ_paris_sportifs\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_plus_un_semaine\" name=\"frequ_paris_sportifs\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_sportifs_everyday\" name=\"frequ_paris_sportifs\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_sportifs_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_paris_sportif"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Paris Sportifs ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_0\" name=\"mise_paris_sportifs\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_0_5\" name=\"mise_paris_sportifs\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_6_20\" name=\"mise_paris_sportifs\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_21_50\" name=\"mise_paris_sportifs\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_51_100\" name=\"mise_paris_sportifs\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_101_200\" name=\"mise_paris_sportifs\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_201_300\" name=\"mise_paris_sportifs\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_301_500\" name=\"mise_paris_sportifs\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_sportifs_500_plus\" name=\"mise_paris_sportifs\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_sportifs_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_paris_sportif"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "paris_hippique",
                  "tardy": true,
                  "skip": "${this.state.paris_hippiques!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux Paris Hippiques ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_moins_un_mois\" name=\"frequ_paris_hippiques\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_plus_un_mois\" name=\"frequ_paris_hippiques\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_plus_un_semaine\" name=\"frequ_paris_hippiques\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_paris_hippiques_everyday\" name=\"frequ_paris_hippiques\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_paris_hippiques_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_paris_hippique"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux Paris Hippiques ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_0\" name=\"mise_paris_hippiques\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_0_5\" name=\"mise_paris_hippiques\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_6_20\" name=\"mise_paris_hippiques\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_21_50\" name=\"mise_paris_hippiques\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_51_100\" name=\"mise_paris_hippiques\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_101_200\" name=\"mise_paris_hippiques\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_201_300\" name=\"mise_paris_hippiques\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_301_500\" name=\"mise_paris_hippiques\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_paris_hippiques_500_plus\" name=\"mise_paris_hippiques\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_paris_hippiques_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_paris_hippique"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "loto",
                  "tardy": true,
                  "skip": "${this.state.loto!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous au Loto\u002FEuromillion\u002FKeno ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_moins_un_mois\" name=\"frequ_loto\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_plus_un_mois\" name=\"frequ_loto\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_plus_un_semaine\" name=\"frequ_loto\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_everyday\" name=\"frequ_loto\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_loto"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent au Poker ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_0\" name=\"mise_loto\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_0_5\" name=\"mise_loto\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_6_20\" name=\"mise_loto\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_21_50\" name=\"mise_loto\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_51_100\" name=\"mise_loto\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_101_200\" name=\"mise_loto\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_201_300\" name=\"mise_loto\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_301_500\" name=\"mise_loto\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_500_plus\" name=\"mise_loto\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_loto"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "machine_a_sous",
                  "tardy": true,
                  "skip": "${this.state.machines!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux machines à sous ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_moins_un_mois\" name=\"frequ_mas\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_plus_un_mois\" name=\"frequ_mas\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_plus_un_semaine\" name=\"frequ_mas\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_mas_everyday\" name=\"frequ_mas\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_mas_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_mas"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux machines à sous ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_0\" name=\"mise_mas\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_0_5\" name=\"mise_mas\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_6_20\" name=\"mise_mas\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_21_50\" name=\"mise_mas\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_51_100\" name=\"mise_mas\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_101_200\" name=\"mise_mas\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_201_300\" name=\"mise_mas\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_301_500\" name=\"mise_mas\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_mas_500_plus\" name=\"mise_mas\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_mas_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "lolo_village",
                  "tardy": true,
                  "skip": "${this.state.loto_village!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous aux loteries de village ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_moins_un_mois\" name=\"frequ_loto_v\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_plus_un_mois\" name=\"frequ_loto_v\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_plus_un_semaine\" name=\"frequ_loto_v\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_loto_v_everyday\" name=\"frequ_loto_v\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_loto_v_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_loto_village"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent aux loteries de village ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_0\" name=\"mise_loto_v\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_0_5\" name=\"mise_loto_v\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_6_20\" name=\"mise_loto_v\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_21_50\" name=\"mise_loto_v\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_51_100\" name=\"mise_loto_v\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_101_200\" name=\"mise_loto_v\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_201_300\" name=\"mise_loto_v\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_301_500\" name=\"mise_loto_v\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_loto_v_500_plus\" name=\"mise_loto_v\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_loto_v_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_loto_village"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "roulette",
                  "tardy": true,
                  "skip": "${this.state.roulette!= \"oui\"}",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "À quelle fréquence jouez-vous à la roulette ? "
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_moins_un_mois\" name=\"frequ_roulette\" value=\"moins d'une fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_moins_un_mois\"\u003EMoins d'une fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_plus_un_mois\" name=\"frequ_roulette\" value=\"une à plusieurs fois par mois\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_plus_un_mois\"\u003EUne à plusieurs fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_plus_un_semaine\" name=\"frequ_roulette\" value=\"une à plusieurs fois par semaine\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_plus_un_semaine\"\u003EUne à plusieurs fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"frequ_roulette_everyday\" name=\"frequ_roulette\" value=\"Tous les jours\" required\u003E\r\n  \u003Clabel for=\"frequ_roulette_everyday\"\u003ETous les jours\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "frequ_roulette"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "",
                          "title": "Misez-vous de l'argent à la roulette ? Si oui, combien en moyenne par session ?"
                        },
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_0\" name=\"mise_roulette\" value=\"0euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_0\"\u003EJe ne mise pas d'argent \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_0_5\" name=\"mise_roulette\" value=\"moins de 5 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_0_5\"\u003EMoins de 5€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_6_20\" name=\"mise_roulette\" value=\"entre 6 et 30 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_6_20\"\u003EEntre 6€ et 20€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_21_50\" name=\"mise_roulette\" value=\"entre 21 et 50 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_21_50\"\u003EEntre 21€ et 50 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_51_100\" name=\"mise_roulette\" value=\"entre 51 et 100 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_51_100\"\u003EEntre 51€ et 100 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_101_200\" name=\"mise_roulette\" value=\"entre 101 et 200 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_101_200\"\u003EEntre 101€ et 200 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_201_300\" name=\"mise_roulette\" value=\"entre 201 et 300 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_201_300\"\u003EEntre 201€ et 300 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_301_500\" name=\"mise_roulette\" value=\"entre 301 et 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_301_500\"\u003EEntre 301€ et 500 € \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"mise_roulette_500_plus\" name=\"mise_roulette\" value=\"plus de 500 euros\" required\u003E\r\n  \u003Clabel for=\"mise_roulette_500_plus\"\u003EPlus de 500€ \u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mise_poker"
                    }
                  ]
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ctable style=\"height: 137px; width: 775px;\"\u003E\r\n\u003Ctbody\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px;\"\u003EAu cours des 12 derniers mois\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003EJamais\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003EParfois\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003ELa plupart du temps\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003EToujours\u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous mis&eacute; plus d'argent que vous pouviez vous permettre de perdre ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q1\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous besoin de miser de plus en plus d'argent pour avoir la m&ecirc;me excitation ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q2\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous rejou&eacute; une autre journ&eacute;e pour r&eacute;cup&eacute;rer l'argent que vous aviez perdu en jouant ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"parfois\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q3\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous vendu ou emprunt&eacute; quelque chose pour obtenir de l'argent pour jouer ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q4\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EAvez-vous d&eacute;j&agrave; senti que vous aviez peut-&ecirc;tre un probl&egrave;me avec le jeu ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q5\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003ELe jeu a-t-il caus&eacute; chez vous des probl&egrave;mes de sant&eacute;, y compris du stress ou de l'angoisse ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q6\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EDes personnes ont-elles critiqu&eacute; vos habitudes de jeu ou dit que vous aviez un probl&egrave;me avec le jeu ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q7\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EVos habitudes de jeu ont-elles caus&eacute; des difficult&eacute;s financi&egrave;res &agrave; vous ou &agrave; votre entourage ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q8\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003Ctr style=\"height: 13px;\"\u003E\r\n\u003Ctd style=\"width: 356px; height: 13px; text-align: center;\"\u003EVous &ecirc;tes-vous d&eacute;j&agrave; senti coupable de vos habitudes de jeu ou de ce qui arrive quand vous jouez ?\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 101px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" required=\"\" type=\"radio\" value=\"jamais\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 81.7667px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"parfois\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 123.233px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"la_plupart_du_temps\" \u002F\u003E\u003C\u002Ftd\u003E\r\n\u003Ctd style=\"width: 64px; height: 13px; text-align: center;\"\u003E\u003Cinput name=\"q9\" type=\"radio\" value=\"toujours\" \u002F\u003E \u003C\u002Ftd\u003E\r\n\u003C\u002Ftr\u003E\r\n\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "ICJE"
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "manipulation_check",
              "tardy": true,
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Parmis ces messages, lequel avez-vous vu pendant le jeu ?",
                      "content": "\u003Cform\u003E\n  \u003Cinput type=\"radio\" id=\"risque1\" name=\"rappel_message\" value=\"Famille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Famille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\"\u003EFamille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\n  \u003C\u002Flabel\u003E\u003Cbr\u003E \n\n  \u003Cinput type=\"radio\" id=\"risque2\" name=\"rappel_message\" value=\"Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\"\u003EJouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé)\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"risque3\" name=\"rappel_message\" value=\"Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\" required\u003E\n  \u003Clabel for=\"Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\"\u003ELes jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé)\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \n  \u003Cinput type=\"radio\" id=\"risque4\" name=\"rappel_message\" value=\"Plus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\" required\u003E\n  \u003Clabel for=\"Plus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\"\u003EPlus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \n   \u003Cinput type=\"radio\" id=\"controle1\" name=\"rappel_message\" value=\"Pour bien jouer, il faut parfois moins jouer\" required\u003E\n  \u003Clabel for=\"Pour bien jouer, il faut parfois moins jouer\"\u003EPour bien jouer, il faut parfois moins jouer\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle2\" name=\"rappel_message\" value=\"Jouez malin, jouez avec modération\" required\u003E\n  \u003Clabel for=\"Jouez malin, jouez avec modération\"\u003EJouez malin, jouez avec modération\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle3\" name=\"rappel_message\" value=\"Reprendre le contrôle pour que le jeu reste un plaisir\" required\u003E\n  \u003Clabel for=\"Reprendre le contrôle pour que le jeu reste un plaisir\"\u003EReprendre le contrôle pour que le jeu reste un plaisir\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle4\" name=\"rappel_message\" value=\"Restez maître du jeu ! Fixez vos limites\" required\u003E\n  \u003Clabel for=\"Restez maître du jeu ! Fixez vos limites\"\u003ERestez maître du jeu ! Fixez vos limites\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard1\" name=\"rappel_message\" value=\"N’oubliez pas que c’est uniquement du hasard\" required\u003E\n  \u003Clabel for=\"N’oubliez pas que c’est uniquement du hasard\"\u003EN’oubliez pas que c’est uniquement du hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard2\" name=\"rappel_message\" value=\"Souvenez-vous que c’est un jeu de hasard\" required\u003E\n  \u003Clabel for=\"Souvenez-vous que c’est un jeu de hasard\"\u003ESouvenez-vous que c’est un jeu de hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard3\" name=\"rappel_message\" value=\"Ce jeu est soumis uniquement au hasard\" required\u003E\n  \u003Clabel for=\"Ce jeu est soumis uniquement au hasard\"\u003ECe jeu est soumis uniquement au hasard\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard4\" name=\"rappel_message\" value=\"Le hasard est le seul facteur déterminant de ce jeu\" required\u003E\n  \u003Clabel for=\"Le hasard est le seul facteur déterminant de ce jeu\"\u003ELe hasard est le seul facteur déterminant de ce jeu\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\n\u003C\u002Fform\u003E"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "rappel_message"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "\u003Cdiv style=\"border-radius: 5px; border: 2px solid; padding: 3px; text-align: center; display: flex; justify-content: center; align-items: center;\"\u003E\u003Cp\u003E${this.parameters.message}\u003C\u002Fp\u003E\u003Cbr\u003E\n\u003C\u002Fdiv\u003E \n\n  \u003Cinput type=\"radio\" id=\"risque\" name=\"cat_subj\" value=\"risque\" required\u003E\n  \u003Clabel for=\"risque\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur les \u003Cb\u003Erisques\u003C\u002Fb\u003E, c'est à dire à \u003Cb\u003Edes messages rappelant les risques encourus \u003C\u002Fb\u003Elorsque l'on joue à un jeux de hasard et d'argent.\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"controle\" name=\"cat_subj\" value=\"controle\" required\u003E\n  \u003Clabel for=\"controle\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur le \u003Cb\u003Econtrôle\u003C\u002Fb\u003E, c'est à dire à \u003Cb\u003Edes messages qui mettent l'accent sur le fait que c'est aux individus de contrôler\u002Fde surveiller leurs comportements\u003C\u002Fb\u003E lorsqu'ils jouent à un jeux de hasard et d'argent. \u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Cinput type=\"radio\" id=\"hasard\" name=\"cat_subj\" value=\"hasard\" required\u003E\n  \u003Clabel for=\"hasard\"\u003ECe message renvoie le mieux aux messages de prévention centrés sur le \u003Cb\u003Ehasard\u003C\u002Fb\u003E, c'est à dire à des messages qui mettent l'accent sur le fait que \u003Cb\u003Eles jeux de hasard et d'argent sont uniquement dépendants du hasard\u003C\u002Fb\u003E. \u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n",
                      "title": "Selon vous, à quelle catégorie le message suivant renvoie-t-il le mieux ?"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "categorie_subjective",
                  "tardy": true
                }
              ]
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Une dernière question (en bas de la page) ! ",
                  "content": "\u003Cp style=\"text-align: justify;\"\u003ENous vous remercions d’avoir pris le temps de compléter cette étude portant sur l’effet des messages de prévention relatifs aux jeux de hasard et d’argent sur les comportements effectifs de jeu. Cette étude est menée dans le cadre du financement ANR JEUVIEILLI portée par Valérie Le Floch, professeur à l’Université Toulouse Jean-Jaurès et rattachée au laboratoire CLLE, portant sur l’étude des pratiques récréatives, à risque et excessives des joueurs vieillissants afin d’identifier les facteurs intrinsèques du joueur (cognitifs, motivationnels, émotionnels), du jeu (type de jeu, accessibilité, caractéristiques du jeu) et du contexte de jeu qui influent sur le désir de jouer, l’illusion de contrôle et la prise de risque. \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EL’objectif de cette étude était d’évaluer le potentiel impact de messages de prévention utilisés par les opérateurs de jeu sur les comportements de jeu.  \u003C\u002Fp\u003E\n\n\n\u003Cdiv style=\"border-radius: 5px; border: 2px solid; padding: 3px; color: red\"\u003ESi vous avez ressenti de l’inconfort au moment de la session de jeu, ou si vous pensez avoir besoin d’une écoute ou d’un conseil sur des problématiques liées aux jeux de hasard et d’argent, n’hésitez pas à appeler le 09-74-75-13-13 (appel non surtaxé).  \u003C\u002Fdiv\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EEncore une fois, nous vous remercions pour votre participation. Pour toutes questions, vous pouvez contacter à n’importe quel moment les chercheurs impliqués dans ce projet (en indiquant « participation_ANR_JEUVIEILLI_axe3_etude2 » dans l’objet du mail) :  \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EMagali Bringuier à l’adresse suivante : magali.bringuier@univ-tlse2.fr \u003C\u002Fp\u003E\n\u003Cp style=\"text-align: justify;\"\u003EValérie Le Floch à l’adresse suivante : valerie.le-floch@univ-tlse2.fr  \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003ENous vous rappelons que toutes les informations recueillies dans cette étude seront traitées de façon strictement anonyme. Le logiciel utilisé pour cette étude est paramétré pour ne pas enregistrer l’adresse IP des participants. Les données seront conservées dans un fichier informatique respectant la loi « informatique et liberté » du 6 janvier 1978 modifiée en 2004. Les données, anonymes, seront archivées de manière sécurisée et disponibles aux autres chercheurs de l’équipe, qui pourront alors eux-mêmes les analyser. Les résultats obtenus à l’issue du traitement de cette étude pourront être diffusés (articles scientifiques, colloques, …) avec une totale garantie d’anonymat : aucun renseignement pouvant révéler votre identité ne sera dévoilé. \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003E\u003Cb\u003EEn cliquant sur « oui », vous consentez à ce que vos données soient recueillies et traitées de manière anonyme. Vous comprenez également qu’en cliquant sur « oui », vous ne pourrez plus vous retirer de l’étude. \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EJe comprends et j’accepte que mes données soient recueillies et traitées de manière anonyme : \u003C\u002Fp\u003E"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cbr\u003E\r\n\r\n\u003Ccenter\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"final_consent_oui\" name=\"final_consent\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"final_consent_oui\"\u003E Oui\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"final_consent_non\" name=\"final_consent\" value=\"0\"\u003E\r\n  \u003Clabel for=\"final_consent_non\"\u003E Non\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003Cbr\u003E\r\n\r\n    \u003Cbutton id=\"final_consent_end\" type=\"submit\"\u003ETerminer\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "final_consent"
            }
          ]
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": " \u003Cmain class=\"content-vertical-center\r\n             content-horizontal-center\"\u003E\r\n \u003Cdiv style=\"font-size: 1.2vw; width: 70%;\"\u003E  \r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EVous avez terminé. L'entièreté de cette étude est anonyme et aucune des données recueillies ne permet de vous identifier. \u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003ENous vous remercions de votre participation.\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: justify;\"\u003EPour toutes questions relatives à cette étude, veuillez prendre contact avec la responsable de projet, Mme Valérie Le Floch, professeure des universités et disponible à l'adresse suivante : valerie.le-floch@univ-tlse2.fr\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003E Vous pouvez fermer cette page.\u003C\u002Fp\u003E\r\n \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
function randomID(){
  const length = 10;
  let result = "";
  const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const filename = `${randomID()}-data.json`

const dataJSON = study.internals.controller.datastore.exportJson();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "MdEBAfiAdDUJ",
    filename: filename,
    data: dataJSON,
  }),
});
}
      },
      "title": "end_study"
    }
  ]
})

// Let's go!
study.run()
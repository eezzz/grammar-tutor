/* Chunk Hunt question bank.
   This file holds content only. The game code is in chunk-hunt.html.

   SENTENCES
   One sentence per line, cut into chunks with |. Each chunk starts with its role letters and a colon:
     s  subject (every chunk of the complete subject gets s)
     v  verb, active        V  verb, passive
     p  prepositional phrase
     i  infinitive          g  gerund          a  participle phrase
     c  connector (and, but, when, because, that)
     o  anything else (objects, adverbs, complements)
   A chunk can have two roles: sp = a prepositional phrase inside a subject, sa = a participle phrase
   inside a subject, sg = a gerund used as the subject.
   Every sentence needs at least one verb, one subject and one prepositional phrase.
   Keep punctuation at the end of the chunk it follows.
   After editing, run:  node check-bank.js

   MISSIONS
   For each mission: rule (the tip card), trick (the one-line reminder), ex (worked examples shown after a miss,
   each one [sentence with <b>answer</b>, short note]).
   To show a color in a rule or example, give the <b> a class: rs subject, rv verb, rp prepositional phrase,
   rx verbal, rn no color. Add "us" for a phrase inside a subject, e.g. <b class='rp us'>.
*/
window.CHUNK_HUNT_BANK = {

sentences: [

{ topic: "Field hockey", items: [
"p:After the final whistle,|s:the players|sp:on both teams|v:shook|o:hands,|c:and|s:the coach|v:told|o:us|i:to rest|p:before the next game.",
"p:During the second half,|s:the forward|sa:wearing number nine|v:dribbled|p:past two defenders|c:and|v:scored|p:from the top|p:of the circle.",
"c:Once|s:the rain|v:stopped,|s:the game|sp:between the two rivals|v:continued|p:on the wet turf|c:until|s:the referee|v:blew|o:the whistle.",
"c:If|s:the goalie|v:leaves|o:the net|i:to chase|o:the ball,|s:the defenders|sp:behind her|v:must cover|o:the open space.",
"s:The team|sa:coached by my aunt|v:has won|o:every game|p:since September,|c:and|s:the players|v:hope|i:to reach|o:the state finals|p:in November.",
"i:To make the varsity team,|s:a player|v:needs|o:strong stick skills,|c:so|s:my friend|v:practices|g:dribbling|p:in her driveway|p:after school.",
"c:Until|s:the new turf|V:was installed,|s:games|sp:at our school|V:were canceled|p:after every storm;|o:now|s:the team|v:plays|p:in any weather.",
"p:In the final minute,|s:the midfielder|sa:guarding the left side|v:stole|o:the ball|c:and|v:passed|o:it|p:to the captain|c:before|s:the defenders|v:could react.",
"c:Although|s:our goalie|V:was injured|p:during warmups,|s:she|v:insisted|p:on playing|c:and|v:blocked|o:nine shots|p:in the second half.",
"sg:Running sprints|sp:in the rain|v:is|o:miserable,|c:but|s:the coach|v:believes|c:that|s:hard practices|v:make|o:close games easier.",
"s:The new sticks|sa:ordered by the school|v:arrived|p:on Monday,|c:so|s:every player|sp:on the team|v:stayed|p:after practice|i:to tape|o:the handles.",
"c:When|s:the referee|v:raised|o:her arm,|s:the crowd|sp:behind our bench|v:groaned,|c:but|s:the penalty|V:was given|p:to the other team.",
"i:To earn a starting spot,|s:the youngest player|sp:on the roster|v:practiced|g:hitting|p:against the garage door|p:until dark.",
"s:The championship game|V:was moved|p:to Saturday|c:because|s:the field|sp:behind the gym|V:was flooded|p:by the storm.",
"p:After three overtime periods,|s:the exhausted players|v:walked|p:to the bus|p:in silence,|c:yet|s:nobody|v:wanted|i:to leave|o:the field.",
"p:On the first day|p:of tryouts,|s:forty girls|v:gathered|p:on the turf,|c:but|s:only eighteen|V:were chosen|p:for the team.",
"s:The defender|sa:marking their best scorer|v:stayed|p:beside her|p:for the whole game|c:and|v:refused|i:to give|o:her|o:any space.",
"c:Because|s:the bus|v:broke down|p:on the highway,|s:our team|v:arrived|p:at the tournament|p:with five minutes|i:to warm up.",
"sg:Winning the first game|v:gave|o:us|o:confidence,|c:but|s:the second match|sp:against the defending champions|v:tested|o:every player|p:on the field.",
"c:After|s:the ball|v:hit|o:the post,|s:it|v:bounced|p:across the goal line|c:and|V:was cleared|p:by a diving defender.",
"s:The captain|v:gathered|o:the team|p:in a circle|p:at halftime|i:to remind|o:everyone|c:that|s:one goal|v:could change|o:the game."
]},

{ topic: "Music and concerts", items: [
"c:Although|s:the tickets|V:were sold|p:in ten minutes,|s:my cousin|v:managed|i:to find|o:two seats|p:near the stage.",
"c:When|s:the lights|v:dimmed,|s:thousands|sp:of fans|sa:holding light sticks|v:began|i:to scream;|s:the opening song|V:was drowned|o:out|p:by the noise.",
"c:Because|s:the album|V:was released|p:at midnight,|s:fans|sp:around the world|v:stayed|o:awake|i:to hear|o:it first.",
"s:The seven members|sp:of BTS|v:finished|o:their military service|p:in 2025;|p:within a year,|s:they|v:had recorded|o:a new album|c:and|v:announced|o:a world tour.",
"sg:Learning the choreography|v:took|o:three weeks,|c:but|s:the dancers|v:kept|g:practicing|p:in the studio|c:until|s:every move|v:looked|o:perfect.",
"p:Before the concert,|s:the singer|v:walked|p:onto the stage|i:to check|o:the sound,|c:while|s:her band|v:waited|p:behind the curtain.",
"p:As a surprise,|s:my best friend|v:hid|o:two tickets|p:inside a birthday card;|s:I|v:screamed|c:when|s:I|v:opened|o:it.",
"c:While|s:the crowd|v:was singing|o:the chorus,|s:the drummer|v:stopped|g:playing|p:in the middle|p:of the song|c:so that|s:everyone|v:could hear|o:the voices.",
"s:The song|V:was written|p:in one afternoon,|c:yet|s:it|v:stayed|p:at number one|p:for eight weeks|c:after|s:it|V:was released.",
"s:The fans|sa:waiting outside the arena|V:were given|o:free posters,|c:and|s:the first hundred people|sp:in line|v:met|o:the band|p:after the show.",
"s:The Unraveled Tour|v:opened|p:in Hartford|p:in September,|c:and|s:tickets|sp:for many shows|v:sold out|o:quickly.",
"c:When|s:BTS|v:returned|p:to the stage|p:in March,|s:about 100,000 fans|v:gathered|p:in Gwanghwamun Square|i:to watch|o:the free concert.",
"s:The album|sa:released in March|v:reached|o:number one|p:on the Billboard 200,|c:and|s:the group|v:began|o:a world tour|p:in April.",
"p:During the encore,|s:the lead singer|v:asked|o:the audience|i:to raise|o:their phones,|c:and|s:the whole arena|v:glowed|p:like a sky|p:of stars.",
"sg:Writing honest lyrics|v:takes|o:courage,|c:so|s:many young artists|v:keep|o:a journal|p:beside their bed|i:to save|o:ideas|p:for later.",
"s:The opening band|v:played|p:for thirty minutes|c:while|s:the stage crew|sa:hidden behind a curtain|v:prepared|o:the lights|p:for the main show.",
"c:Because|s:the concert|V:was filmed|p:for a documentary,|s:cameras|sp:on long cranes|v:floated|p:above the crowd|p:throughout the night.",
"s:My cousin|v:waited|p:in line|p:for six hours|i:to buy|o:a tour poster,|c:but|s:the last one|V:was sold|p:to the girl|p:in front of her.",
"c:After|s:the band|v:finished|g:rehearsing,|s:the dancers|v:stayed|p:on stage|i:to practice|o:the hardest part|p:of the routine.",
"s:The song|sa:playing on the radio|v:reminded|o:me|p:of last summer,|c:so|s:I|v:texted|o:the title|p:to my best friend.",
"p:At the soundcheck,|s:the guitarist|v:noticed|c:that|s:one amplifier|v:was buzzing,|c:so|s:a technician|v:replaced|o:it|p:within minutes.",
"s:The setlist|sa:taped to the stage floor|V:was photographed|p:by a fan|p:in the front row,|c:and|s:the picture|v:spread|p:across the internet|p:in an hour.",
"c:While|s:the choir|v:was rehearsing|p:in the auditorium,|s:the band|v:practiced|p:in the hallway|i:to stay|o:warm|p:before the concert.",
"sg:Learning Korean|sp:through song lyrics|v:has helped|o:my friend,|c:and|s:she|v:understands|o:most interviews|p:without subtitles.",
"s:The drummer|v:counted|p:to four,|s:the lights|v:flashed,|c:and|s:the first chord|V:was played|p:by three guitars|p:at once.",
"i:To surprise the audience,|s:the singer|v:appeared|p:at the back|p:of the arena|c:and|v:walked|p:through the crowd|p:toward the stage."
]},

{ topic: "Fashion", items: [
"s:My sister|v:found|o:a vintage jacket|p:at the thrift store|p:for six dollars,|c:and|s:she|v:refuses|i:to lend|o:it|p:to anyone.",
"s:The costume|sa:covered in tiny mirrors|V:was sewn|p:by hand,|c:and|s:it|v:sparkles|p:under the lights|p:during every song.",
"p:At her old school,|s:the uniforms|V:were chosen|p:by the principal,|c:but|s:the students|sp:at her new school|v:design|o:their own team jerseys.",
"sg:Thrifting|v:has become|o:popular|p:with teenagers|c:because|s:it|v:saves|o:money|c:and|v:keeps|o:old clothes|p:out of landfills.",
"s:The dress|sa:hanging in the window|V:was designed|p:by a student,|c:and|s:it|v:sold|p:for two hundred dollars|p:at the school auction.",
"c:Although|s:vintage jeans|v:can be|o:expensive,|s:shoppers|sp:with patience|v:find|o:bargains|p:at garage sales.",
"s:The designer|v:sketched|o:forty outfits|p:in one week;|s:only twelve|sp:of them|V:were chosen|p:for the runway show.",
"c:When|s:the zipper|v:broke|p:before the show,|s:the model|sa:wearing the final gown|V:was sewn|p:into it|p:by two assistants.",
"s:Thrift stores|sp:near college campuses|v:receive|o:donations|p:in May,|c:so|s:smart shoppers|v:plan|i:to visit|o:them|p:at the end|p:of the school year.",
"p:At the spring fashion show,|s:the youngest designer|v:presented|o:a jacket|a:made from recycled denim,|c:and|s:the judges|v:gave|o:her|o:first prize.",
"c:Because|s:the fabric|V:was dyed|p:by hand,|s:each scarf|sp:in the collection|v:has|o:a slightly different shade|p:of blue.",
"sg:Sewing a straight seam|v:sounds|o:simple,|c:but|s:most beginners|v:practice|p:on scrap fabric|p:for weeks|c:before|s:they|v:cut|o:real cloth.",
"s:The sneakers|sa:displayed in the front window|V:were released|p:in limited numbers,|c:so|s:collectors|v:lined up|p:outside the store|p:before sunrise.",
"c:When|s:my aunt|v:cleaned|o:her closet,|s:she|v:gave|o:me|o:a leather bag|p:from the 1980s|c:and|v:told|o:me|i:to take|o:good care|p:of it.",
"p:In the costume shop,|s:rows|sp:of sequined jackets|v:hung|p:beside racks|p:of feathered hats,|c:and|s:every piece|V:was labeled|p:with a performer's name.",
"i:To save money,|s:the drama club|v:borrowed|o:costumes|p:from another school|c:and|v:returned|o:them|p:after the final show.",
"s:The runway|V:was lit|p:from below,|c:so|s:the models|sa:walking in silver boots|v:seemed|i:to float|p:above the floor."
]},

{ topic: "Makeup", items: [
"sg:Blending eyeshadow|v:takes|o:practice,|c:but|s:the artist|sp:in the video|v:finishes|o:each look|p:in five minutes.",
"s:The smudged eyeliner|v:looked|o:terrible|p:at first,|c:but|s:she|v:decided|i:to keep|o:it|c:because|s:the messy style|v:matched|o:her outfit.",
"p:Without a mirror,|s:she|v:finished|o:her makeup|p:in the back seat|p:of the car|c:while|s:her brother|v:was complaining|p:about the traffic.",
"p:Before the dance,|s:my friends|v:met|p:at my house|i:to do|o:our makeup,|c:and|s:the bathroom counter|V:was covered|p:with brushes.",
"sg:Mixing two shades|sp:of lipstick|v:creates|o:a custom color,|c:but|s:the result|v:depends|p:on the lighting|p:in the room.",
"i:To keep her eyeliner sharp,|s:she|v:cleans|o:the brush|p:after every use|c:and|v:stores|o:it|p:in a small case.",
"c:Before|s:the makeup artist|v:started,|s:she|v:studied|o:the actor's face|p:under bright lights|i:to choose|o:the right foundation.",
"s:The glitter|sa:left on the bathroom sink|V:was discovered|p:by my mother,|c:and|s:I|v:cleaned|o:the whole counter|p:before dinner.",
"sg:Applying sunscreen|sp:under makeup|v:protects|o:your skin,|c:yet|s:many people|v:forget|i:to use|o:it|p:on cloudy days.",
"p:For the school play,|s:the actors|sa:playing the ghosts|V:were painted|p:with white powder|c:and|v:wore|o:gray shadows|p:around their eyes.",
"s:A steady hand|v:matters|p:in eyeliner,|c:so|s:my sister|v:rests|o:her elbow|p:on the table|c:while|s:she|v:draws|o:each wing.",
"c:Although|s:the tutorial|v:lasted|o:only ten minutes,|s:the look|sa:shown in the video|v:took|o:me|o:an hour|p:on my first try."
]},

{ topic: "Science and history", items: [
"c:Until|s:the printing press|V:was invented,|s:books|V:were copied|p:by hand,|c:and|s:most people|v:owned|o:none.",
"s:Honeybees|sa:returning to the hive|v:perform|o:a dance|i:to show|o:the direction|p:of the flowers,|c:and|s:the other bees|v:follow|o:it|p:with surprising accuracy.",
"c:When|s:a volcano|v:erupts|p:beneath the ocean,|s:the lava|sa:cooled by seawater|v:hardens|p:into rock|c:and|v:can form|o:a new island|p:over thousands of years.",
"s:The Great Wall|sp:of China|V:was built|p:over many centuries;|s:workers|sp:from different dynasties|v:added|o:new sections|i:to protect|o:the northern border.",
"c:Because|s:the Moon|v:has|o:no atmosphere,|s:footprints|sa:left by astronauts|v:remain|p:on the surface|p:for millions of years.",
"p:In the desert,|s:many animals|v:sleep|p:during the day|i:to avoid|o:the heat,|c:and|s:they|v:hunt|p:at night|c:when|s:the air|v:is|o:cooler.",
"s:The first bicycles|v:had|o:no pedals,|c:so|s:riders|v:moved|p:by pushing their feet|p:against the ground.",
"sg:Recycling one aluminum can|v:saves|o:enough energy|i:to power|o:a television|p:for three hours,|c:yet|s:millions|sp:of cans|V:are thrown|p:in the trash|o:every day.",
"c:Once|s:the railroad|V:was completed|p:in 1869,|s:travelers|v:could cross|o:the country|p:in a week;|p:before that,|s:the journey|v:took|o:months.",
"s:Sea otters|sa:floating on their backs|v:hold|o:hands|c:while|s:they|v:sleep|c:so that|s:the current|v:cannot carry|o:them|p:away from the group.",
"c:When|s:Mount Vesuvius|v:erupted|p:in 79 CE,|s:the city|sp:of Pompeii|V:was buried|p:under ash,|c:and|s:it|v:remained|o:hidden|p:for many centuries.",
"s:Monarch butterflies|sa:born in late summer|v:fly|p:to Mexico|i:to spend|o:the winter,|c:and|s:their journey|v:can cover|o:three thousand miles.",
"p:Before the invention|p:of the telephone,|s:urgent messages|V:were sent|p:by telegraph,|c:and|s:operators|v:translated|o:them|p:from Morse code.",
"sg:Building the pyramids|v:required|o:thousands|p:of workers,|c:and|s:each stone block|V:was moved|p:without modern machines.",
"c:Because|s:sound|v:travels|o:quickly|p:through water,|s:whales|v:can communicate|p:across great distances|p:in the open ocean.",
"s:The scientists|sa:studying the ice cores|v:found|o:tiny bubbles|p:of ancient air|a:trapped inside,|c:and|s:these samples|v:revealed|o:the climate|p:of the distant past.",
"p:During the Middle Ages,|s:books|V:were chained|p:to library shelves|c:because|s:each copy|v:took|o:months|i:to produce.",
"c:Although|s:the octopus|v:has|o:three hearts,|s:one|sp:of them|v:stops|g:beating|c:when|s:the animal|v:swims.",
"s:The astronauts|sa:living on the space station|v:exercise|p:for two hours|o:every day|i:to keep|o:their muscles|o:strong.",
"c:Once|s:the canal|V:was opened|p:in 1914,|s:ships|v:could travel|p:between the two oceans|p:without sailing|p:around South America."
]},

{ topic: "School life", items: [
"c:When|s:the fire alarm|v:rang|p:during the math test,|s:the whole class|v:walked|p:to the parking lot|c:and|v:waited|p:in the cold|p:for twenty minutes.",
"s:The group project|sa:assigned on Monday|V:was finished|p:by Thursday|c:because|s:everyone|sp:in our group|v:agreed|i:to work|p:during lunch.",
"p:After the last bell,|s:the students|sa:waiting for the late bus|v:played|o:cards|p:on the gym floor|c:until|s:the driver|v:arrived.",
"sg:Studying with friends|v:helps|o:some students,|c:but|s:I|v:remember|o:more|c:when|s:I|v:review|o:my notes|p:in a quiet room.",
"i:To finish the yearbook,|s:the editors|v:stayed|p:after school|p:for a week|c:and|v:sorted|p:through hundreds|p:of photos.",
"s:My locker|V:was jammed|p:on the first day,|c:so|s:the custodian|v:opened|o:it|p:with a special key|c:and|v:showed|o:me|o:the trick."
]},
],

missions: {

verb: {
  rule: [
    "A verb shows action (<i>ran</i>) or being (<i>is, was, will be</i>).",
    "Helping verbs count too: <i>was built</i>, <i>has been barking</i>, <i>can change</i>.",
    "<i>to + verb</i> (to learn) is NOT the verb of the sentence. An -ing word with no helper is not one either."
  ],
  trick: "Test it: put I, he or they in front. \"They succeed\" works. \"They to learn\" does not.",
  ex: [
    ["Jimin <b>has been practicing</b> for hours.","Helpers + action count as one verb."],
    ["She <b>wants</b> to sing.","\"to sing\" is to + verb, so it is not the verb."],
    ["The tickets <b>were sold</b> in minutes.","were + sold work together."],
    ["Dancing <b>is</b> hard.","Dancing is a thing here. The verb is \"is\"."],
    ["The girl wearing eyeliner <b>plays</b> defense.","\"wearing\" has no helper, so it only describes her."]
  ]
},

subj: {
  rule: [
    "Find the verb first. Then ask: <i>who or what</i> did it?",
    "The complete subject is that noun PLUS every word describing it.",
    "Each clause has its own subject, so one sentence can have two or three.",
    "Opening phrases like <i>After lunch,</i> are not part of the subject."
  ],
  trick: "\"The paths leading to the hilltops were steep.\" What were steep? All of \"the paths leading to the hilltops\".",
  ex: [
    ["<b>The fans in the front row</b> screamed.","Who screamed? The whole group of words."],
    ["After the show, <b>the band</b> left.","The opening phrase tells when. It is not the subject."],
    ["<b>The goalie</b> dove, and <b>the ball</b> missed.","Two clauses, so two subjects."],
    ["<b>The girl wearing eyeliner</b> is my cousin.","\"wearing eyeliner\" tells which girl, so it belongs."],
    ["When the lights dimmed, <b>tickets to the show</b> were scanned.","What were scanned? Not just \"tickets\"."]
  ]
},

prep: {
  rule: [
    "It starts with a preposition (<i>in, on, at, for, with, by, to, as, after, under</i>...) and ends with a noun.",
    "<i>to + noun</i> is a prepositional phrase: <i>to school</i>.",
    "<i>to + verb</i> is an infinitive, not a prepositional phrase: <i>to meet</i>.",
    "Short ones are easy to miss: <i>for use</i>, <i>as a joke</i>, <i>by hand</i>."
  ],
  trick: "Look at the word after \"to\". A thing or place? Prepositional phrase. An action? Skip it.",
  ex: [
    ["She ran <b>to the field</b> to play.","to + place counts. to + verb does not."],
    ["We waited <b>in line</b> <b>for hours</b>.","Two short phrases, both count."],
    ["<b>As a fan</b>, I cried <b>at the concert</b>.","\"As\" can be a preposition."],
    ["It was made <b>by hand</b> <b>for use</b> <b>on stage</b>.","Two-word phrases are easy to skip."],
    ["She is great <b>at dribbling</b>.","An -ing word can come after a preposition."]
  ]
},

verbal: {
  rule: [
    "A verbal looks like a verb but does a different job.",
    "Gerund: -ing word used as a <b>noun</b>. <i>Running is fun.</i>",
    "Participle: -ing or -ed word used as an <b>adjective</b>. <i>the running water</i>",
    "Infinitive: <b>to + verb</b>. <i>to run</i>"
  ],
  trick: "Swap in \"it\". \"It is hard work\" works, so Dancing is a gerund. \"The it fans\" fails, so dancing is a participle.",
  ex: [
    ["<b>Singing</b> is fun.","Gerund: it names a thing."],
    ["The <b>singing</b> crowd was loud.","Participle: it describes the crowd."],
    ["She wants <b>to sing</b>.","Infinitive: to + verb."],
    ["She walked <b>to the stage</b>.","Prepositional phrase: to + place."],
    ["The <b>painted</b> nails matched her dress.","Participle: -ed word describing nails."]
  ]
},

voice: {
  rule: [
    "Active: the subject DOES the action. <i>Sam kicked the ball.</i>",
    "Passive: the subject RECEIVES the action. <i>The ball was kicked.</i>",
    "Passive = a form of <i>be</i> + past participle (<i>was kicked, is inhabited, were made</i>).",
    "<i>was sleeping</i> and <i>has won</i> are still active."
  ],
  trick: "Add \"by zombies\" after the verb. If it makes sense, it is passive: \"The ball was kicked by zombies.\"",
  ex: [
    ["Fans <b>bought</b> the tickets.","Active: the fans did it."],
    ["The tickets <b>were bought</b> by fans.","Passive: the tickets received the action."],
    ["She <b>was singing</b>.","Active: was + -ing is still her doing it."],
    ["The song <b>was sung</b> by RM.","Passive: was + past participle."],
    ["The team <b>has scored</b> twice.","Active: has + scored, and the team did it."]
  ]
},

paint: {
  rule: [
    "Go in this order, one color at a time.",
    "<b class='rv'>Verbs</b> first. Each clause has one: <b class='rv'>shook</b>, <b class='rv'>was sold</b>.",
    "<b class='rs'>Subjects</b> next: who or what does each verb? Take every word that describes it: <b class='rs'>the players</b>.",
    "<b class='rp'>Prepositional phrases</b>: preposition + noun: <b class='rp'>after the game</b>, <b class='rp'>to the bus</b>.",
    "<b class='rx'>Verbals</b>: to + verb, or an -ing / -ed word that is not working as the verb: <b class='rx'>to rest</b>, <b class='rx'>wearing red</b>.",
    "<b class='rn'>No color</b> for the rest: objects, and, but, when, because.",
    "All together: <b class='rp'>After the game,</b> <b class='rs'>the players</b> <b class='rp us'>on both teams</b> <b class='rv'>shook</b> hands and <b class='rv'>went</b> <b class='rp'>to the bus</b> <b class='rx'>to rest</b>."
  ],
  trick: "A phrase inside a subject, like \"on both teams\", can be the subject color or the phrase color. Both count.",
  ex: [
    ["<b class='rs'>The fans</b> <b class='rp us'>in line</b> <b class='rv'>waited</b>.","\"in line\" is part of the subject and also a prepositional phrase."],
    ["<b class='rs'>She</b> <b class='rv'>stopped</b> <b class='rx'>to rest</b>.","to + verb is a verbal, not a prepositional phrase."],
    ["<b class='rs'>The girl</b> <b class='rx us'>wearing red</b> <b class='rv'>scored</b>.","\"wearing red\" describes the girl. Verbal."],
    ["<b class='rs'>They</b> <b class='rv'>left</b> <b class='rn'>when</b> <b class='rs'>it</b> <b class='rv'>rained</b>.","Words like when, and, but get no color."]
  ]
}
}

};

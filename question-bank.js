/* Chunk Hunt question bank.
   This file holds content only. The game code is in chunk-hunt.html.

   SENTENCES
   One sentence per line, cut into chunks with |. Each chunk starts with its role letters and a colon:
     s  subject (every chunk of the complete subject gets s)
     v  verb, active        V  verb, passive
     p  prepositional phrase
     i  infinitive          g  gerund          a  participle phrase
     c  coordinating conjunction (for, and, nor, but, or, yet, so)
     d  subordinating conjunction (when, because, although, if, while, until, once, after, before, that, so that)
     o  anything else (objects, adverbs, complements)
   A chunk can have two roles: sp = a prepositional phrase inside a subject, sa = a participle phrase
   inside a subject, sg = a gerund used as the subject.
   Every sentence needs at least one verb, one subject and one prepositional phrase.
   Keep punctuation at the end of the chunk it follows.
   After editing, run:  node check-bank.js

   MOODS
   Short sentences for the verb mood set. Put ** around the verb being asked about, then give the answer:
     0 indicative, 1 interrogative, 2 imperative, 3 conditional, 4 subjunctive

   MISSIONS
   The review notes for each set. They show before a round and stay one tap away during it.
     key    the color legend: [class, label]
     rule   the key points
     trick  the one-line reminder
     ex     worked examples: [sentence, short note]. All of them show in the notes; two show after a miss.
   Color a word by giving its <b> a class. Never leave a whole page in one color.
     rs subject   rv verb   rp prepositional phrase   rx verbal or gerund   rk connector or coordinating   rn no color
     ca participle, indicative        cb infinitive, conditional      cc passive
     cd independent clause, imperative   ce subordinating, dependent clause, subjunctive
   Add "us" for a phrase inside a subject, e.g. <b class='rp us'>.
*/
window.CHUNK_HUNT_BANK = {

sentences: [

{ topic: "Field hockey", items: [
"p:After the final whistle,|s:the players|sp:on both teams|v:shook|o:hands,|c:and|s:the coach|v:told|o:us|i:to rest|p:before the next game.",
"p:During the second half,|s:the forward|sa:wearing number nine|v:dribbled|p:past two defenders|c:and|v:scored|p:from the top|p:of the circle.",
"d:Once|s:the rain|v:stopped,|s:the game|sp:between the two rivals|v:continued|p:on the wet turf|d:until|s:the referee|v:blew|o:the whistle.",
"d:If|s:the goalie|v:leaves|o:the net|i:to chase|o:the ball,|s:the defenders|sp:behind her|v:must cover|o:the open space.",
"s:The team|sa:coached by my aunt|v:has won|o:every game|p:since September,|c:and|s:the players|v:hope|i:to reach|o:the state finals|p:in November.",
"i:To make the varsity team,|s:a player|v:needs|o:strong stick skills,|c:so|s:my friend|v:practices|g:dribbling|p:in her driveway|p:after school.",
"d:Until|s:the new turf|V:was installed,|s:games|sp:at our school|V:were canceled|p:after every storm;|o:now|s:the team|v:plays|p:in any weather.",
"p:In the final minute,|s:the midfielder|sa:guarding the left side|v:stole|o:the ball|c:and|v:passed|o:it|p:to the captain|d:before|s:the defenders|v:could react.",
"d:Although|s:our goalie|V:was injured|p:during warmups,|s:she|v:insisted|p:on playing|c:and|v:blocked|o:nine shots|p:in the second half.",
"sg:Running sprints|sp:in the rain|v:is|o:miserable,|c:but|s:the coach|v:believes|d:that|s:hard practices|v:make|o:close games easier.",
"s:The new sticks|sa:ordered by the school|v:arrived|p:on Monday,|c:so|s:every player|sp:on the team|v:stayed|p:after practice|i:to tape|o:the handles.",
"d:When|s:the referee|v:raised|o:her arm,|s:the crowd|sp:behind our bench|v:groaned,|c:but|s:the penalty|V:was given|p:to the other team.",
"i:To earn a starting spot,|s:the youngest player|sp:on the roster|v:practiced|g:hitting|p:against the garage door|p:until dark.",
"s:The championship game|V:was moved|p:to Saturday|d:because|s:the field|sp:behind the gym|V:was flooded|p:by the storm.",
"p:After three overtime periods,|s:the exhausted players|v:walked|p:to the bus|p:in silence,|c:yet|s:nobody|v:wanted|i:to leave|o:the field.",
"p:On the first day|p:of tryouts,|s:forty girls|v:gathered|p:on the turf,|c:but|s:only eighteen|V:were chosen|p:for the team.",
"s:The defender|sa:marking their best scorer|v:stayed|p:beside her|p:for the whole game|c:and|v:refused|i:to give|o:her|o:any space.",
"d:Because|s:the bus|v:broke down|p:on the highway,|s:our team|v:arrived|p:at the tournament|p:with five minutes|i:to warm up.",
"sg:Winning the first game|v:gave|o:us|o:confidence,|c:but|s:the second match|sp:against the defending champions|v:tested|o:every player|p:on the field.",
"d:After|s:the ball|v:hit|o:the post,|s:it|v:bounced|p:across the goal line|c:and|V:was cleared|p:by a diving defender.",
"s:The captain|v:gathered|o:the team|p:in a circle|p:at halftime|i:to remind|o:everyone|d:that|s:one goal|v:could change|o:the game."
]},

{ topic: "Music and concerts", items: [
"d:Although|s:the tickets|V:were sold|p:in ten minutes,|s:my cousin|v:managed|i:to find|o:two seats|p:near the stage.",
"d:When|s:the lights|v:dimmed,|s:thousands|sp:of fans|sa:holding light sticks|v:began|i:to scream;|s:the opening song|V:was drowned|o:out|p:by the noise.",
"d:Because|s:the album|V:was released|p:at midnight,|s:fans|sp:around the world|v:stayed|o:awake|i:to hear|o:it first.",
"s:The seven members|sp:of BTS|v:finished|o:their military service|p:in 2025;|p:within a year,|s:they|v:had recorded|o:a new album|c:and|v:announced|o:a world tour.",
"sg:Learning the choreography|v:took|o:three weeks,|c:but|s:the dancers|v:kept|g:practicing|p:in the studio|d:until|s:every move|v:looked|o:perfect.",
"p:Before the concert,|s:the singer|v:walked|p:onto the stage|i:to check|o:the sound,|d:while|s:her band|v:waited|p:behind the curtain.",
"p:As a surprise,|s:my best friend|v:hid|o:two tickets|p:inside a birthday card;|s:I|v:screamed|d:when|s:I|v:opened|o:it.",
"d:While|s:the crowd|v:was singing|o:the chorus,|s:the drummer|v:stopped|g:playing|p:in the middle|p:of the song|d:so that|s:everyone|v:could hear|o:the voices.",
"s:The song|V:was written|p:in one afternoon,|c:yet|s:it|v:stayed|p:at number one|p:for eight weeks|d:after|s:it|V:was released.",
"s:The fans|sa:waiting outside the arena|V:were given|o:free posters,|c:and|s:the first hundred people|sp:in line|v:met|o:the band|p:after the show.",
"s:The Unraveled Tour|v:opened|p:in Hartford|p:in September,|c:and|s:tickets|sp:for many shows|v:sold out|o:quickly.",
"d:When|s:BTS|v:returned|p:to the stage|p:in March,|s:about 100,000 fans|v:gathered|p:in Gwanghwamun Square|i:to watch|o:the free concert.",
"s:The album|sa:released in March|v:reached|o:number one|p:on the Billboard 200,|c:and|s:the group|v:began|o:a world tour|p:in April.",
"p:During the encore,|s:the lead singer|v:asked|o:the audience|i:to raise|o:their phones,|c:and|s:the whole arena|v:glowed|p:like a sky|p:of stars.",
"sg:Writing honest lyrics|v:takes|o:courage,|c:so|s:many young artists|v:keep|o:a journal|p:beside their bed|i:to save|o:ideas|p:for later.",
"s:The opening band|v:played|p:for thirty minutes|d:while|s:the stage crew|sa:hidden behind a curtain|v:prepared|o:the lights|p:for the main show.",
"d:Because|s:the concert|V:was filmed|p:for a documentary,|s:cameras|sp:on long cranes|v:floated|p:above the crowd|p:throughout the night.",
"s:My cousin|v:waited|p:in line|p:for six hours|i:to buy|o:a tour poster,|c:but|s:the last one|V:was sold|p:to the girl|p:in front of her.",
"d:After|s:the band|v:finished|g:rehearsing,|s:the dancers|v:stayed|p:on stage|i:to practice|o:the hardest part|p:of the routine.",
"s:The song|sa:playing on the radio|v:reminded|o:me|p:of last summer,|c:so|s:I|v:texted|o:the title|p:to my best friend.",
"p:At the soundcheck,|s:the guitarist|v:noticed|d:that|s:one amplifier|v:was buzzing,|c:so|s:a technician|v:replaced|o:it|p:within minutes.",
"s:The setlist|sa:taped to the stage floor|V:was photographed|p:by a fan|p:in the front row,|c:and|s:the picture|v:spread|p:across the internet|p:in an hour.",
"d:While|s:the choir|v:was rehearsing|p:in the auditorium,|s:the band|v:practiced|p:in the hallway|i:to stay|o:warm|p:before the concert.",
"sg:Learning Korean|sp:through song lyrics|v:has helped|o:my friend,|c:and|s:she|v:understands|o:most interviews|p:without subtitles.",
"s:The drummer|v:counted|p:to four,|s:the lights|v:flashed,|c:and|s:the first chord|V:was played|p:by three guitars|p:at once.",
"i:To surprise the audience,|s:the singer|v:appeared|p:at the back|p:of the arena|c:and|v:walked|p:through the crowd|p:toward the stage."
]},

{ topic: "Fashion", items: [
"s:My sister|v:found|o:a vintage jacket|p:at the thrift store|p:for six dollars,|c:and|s:she|v:refuses|i:to lend|o:it|p:to anyone.",
"s:The costume|sa:covered in tiny mirrors|V:was sewn|p:by hand,|c:and|s:it|v:sparkles|p:under the lights|p:during every song.",
"p:At her old school,|s:the uniforms|V:were chosen|p:by the principal,|c:but|s:the students|sp:at her new school|v:design|o:their own team jerseys.",
"sg:Thrifting|v:has become|o:popular|p:with teenagers|d:because|s:it|v:saves|o:money|c:and|v:keeps|o:old clothes|p:out of landfills.",
"s:The dress|sa:hanging in the window|V:was designed|p:by a student,|c:and|s:it|v:sold|p:for two hundred dollars|p:at the school auction.",
"d:Although|s:vintage jeans|v:can be|o:expensive,|s:shoppers|sp:with patience|v:find|o:bargains|p:at garage sales.",
"s:The designer|v:sketched|o:forty outfits|p:in one week;|s:only twelve|sp:of them|V:were chosen|p:for the runway show.",
"d:When|s:the zipper|v:broke|p:before the show,|s:the model|sa:wearing the final gown|V:was sewn|p:into it|p:by two assistants.",
"s:Thrift stores|sp:near college campuses|v:receive|o:donations|p:in May,|c:so|s:smart shoppers|v:plan|i:to visit|o:them|p:at the end|p:of the school year.",
"p:At the spring fashion show,|s:the youngest designer|v:presented|o:a jacket|a:made from recycled denim,|c:and|s:the judges|v:gave|o:her|o:first prize.",
"d:Because|s:the fabric|V:was dyed|p:by hand,|s:each scarf|sp:in the collection|v:has|o:a slightly different shade|p:of blue.",
"sg:Sewing a straight seam|v:sounds|o:simple,|c:but|s:most beginners|v:practice|p:on scrap fabric|p:for weeks|d:before|s:they|v:cut|o:real cloth.",
"s:The sneakers|sa:displayed in the front window|V:were released|p:in limited numbers,|c:so|s:collectors|v:lined up|p:outside the store|p:before sunrise.",
"d:When|s:my aunt|v:cleaned|o:her closet,|s:she|v:gave|o:me|o:a leather bag|p:from the 1980s|c:and|v:told|o:me|i:to take|o:good care|p:of it.",
"p:In the costume shop,|s:rows|sp:of sequined jackets|v:hung|p:beside racks|p:of feathered hats,|c:and|s:every piece|V:was labeled|p:with a performer's name.",
"i:To save money,|s:the drama club|v:borrowed|o:costumes|p:from another school|c:and|v:returned|o:them|p:after the final show.",
"s:The runway|V:was lit|p:from below,|c:so|s:the models|sa:walking in silver boots|v:seemed|i:to float|p:above the floor."
]},

{ topic: "Makeup", items: [
"sg:Blending eyeshadow|v:takes|o:practice,|c:but|s:the artist|sp:in the video|v:finishes|o:each look|p:in five minutes.",
"s:The smudged eyeliner|v:looked|o:terrible|p:at first,|c:but|s:she|v:decided|i:to keep|o:it|d:because|s:the messy style|v:matched|o:her outfit.",
"p:Without a mirror,|s:she|v:finished|o:her makeup|p:in the back seat|p:of the car|d:while|s:her brother|v:was complaining|p:about the traffic.",
"p:Before the dance,|s:my friends|v:met|p:at my house|i:to do|o:our makeup,|c:and|s:the bathroom counter|V:was covered|p:with brushes.",
"sg:Mixing two shades|sp:of lipstick|v:creates|o:a custom color,|c:but|s:the result|v:depends|p:on the lighting|p:in the room.",
"i:To keep her eyeliner sharp,|s:she|v:cleans|o:the brush|p:after every use|c:and|v:stores|o:it|p:in a small case.",
"d:Before|s:the makeup artist|v:started,|s:she|v:studied|o:the actor's face|p:under bright lights|i:to choose|o:the right foundation.",
"s:The glitter|sa:left on the bathroom sink|V:was discovered|p:by my mother,|c:and|s:I|v:cleaned|o:the whole counter|p:before dinner.",
"sg:Applying sunscreen|sp:under makeup|v:protects|o:your skin,|c:yet|s:many people|v:forget|i:to use|o:it|p:on cloudy days.",
"p:For the school play,|s:the actors|sa:playing the ghosts|V:were painted|p:with white powder|c:and|v:wore|o:gray shadows|p:around their eyes.",
"s:A steady hand|v:matters|p:in eyeliner,|c:so|s:my sister|v:rests|o:her elbow|p:on the table|d:while|s:she|v:draws|o:each wing.",
"d:Although|s:the tutorial|v:lasted|o:only ten minutes,|s:the look|sa:shown in the video|v:took|o:me|o:an hour|p:on my first try."
]},

{ topic: "Science and history", items: [
"d:Until|s:the printing press|V:was invented,|s:books|V:were copied|p:by hand,|c:and|s:most people|v:owned|o:none.",
"s:Honeybees|sa:returning to the hive|v:perform|o:a dance|i:to show|o:the direction|p:of the flowers,|c:and|s:the other bees|v:follow|o:it|p:with surprising accuracy.",
"d:When|s:a volcano|v:erupts|p:beneath the ocean,|s:the lava|sa:cooled by seawater|v:hardens|p:into rock|c:and|v:can form|o:a new island|p:over thousands of years.",
"s:The Great Wall|sp:of China|V:was built|p:over many centuries;|s:workers|sp:from different dynasties|v:added|o:new sections|i:to protect|o:the northern border.",
"d:Because|s:the Moon|v:has|o:no atmosphere,|s:footprints|sa:left by astronauts|v:remain|p:on the surface|p:for millions of years.",
"p:In the desert,|s:many animals|v:sleep|p:during the day|i:to avoid|o:the heat,|c:and|s:they|v:hunt|p:at night|d:when|s:the air|v:is|o:cooler.",
"s:The first bicycles|v:had|o:no pedals,|c:so|s:riders|v:moved|p:by pushing their feet|p:against the ground.",
"sg:Recycling one aluminum can|v:saves|o:enough energy|i:to power|o:a television|p:for three hours,|c:yet|s:millions|sp:of cans|V:are thrown|p:in the trash|o:every day.",
"d:Once|s:the railroad|V:was completed|p:in 1869,|s:travelers|v:could cross|o:the country|p:in a week;|p:before that,|s:the journey|v:took|o:months.",
"s:Sea otters|sa:floating on their backs|v:hold|o:hands|d:while|s:they|v:sleep|d:so that|s:the current|v:cannot carry|o:them|p:away from the group.",
"d:When|s:Mount Vesuvius|v:erupted|p:in 79 CE,|s:the city|sp:of Pompeii|V:was buried|p:under ash,|c:and|s:it|v:remained|o:hidden|p:for many centuries.",
"s:Monarch butterflies|sa:born in late summer|v:fly|p:to Mexico|i:to spend|o:the winter,|c:and|s:their journey|v:can cover|o:three thousand miles.",
"p:Before the invention|p:of the telephone,|s:urgent messages|V:were sent|p:by telegraph,|c:and|s:operators|v:translated|o:them|p:from Morse code.",
"sg:Building the pyramids|v:required|o:thousands|p:of workers,|c:and|s:each stone block|V:was moved|p:without modern machines.",
"d:Because|s:sound|v:travels|o:quickly|p:through water,|s:whales|v:can communicate|p:across great distances|p:in the open ocean.",
"s:The scientists|sa:studying the ice cores|v:found|o:tiny bubbles|p:of ancient air|a:trapped inside,|c:and|s:these samples|v:revealed|o:the climate|p:of the distant past.",
"p:During the Middle Ages,|s:books|V:were chained|p:to library shelves|d:because|s:each copy|v:took|o:months|i:to produce.",
"d:Although|s:the octopus|v:has|o:three hearts,|s:one|sp:of them|v:stops|g:beating|d:when|s:the animal|v:swims.",
"s:The astronauts|sa:living on the space station|v:exercise|p:for two hours|o:every day|i:to keep|o:their muscles|o:strong.",
"d:Once|s:the canal|V:was opened|p:in 1914,|s:ships|v:could travel|p:between the two oceans|p:without sailing|p:around South America."
]},

{ topic: "School life", items: [
"d:When|s:the fire alarm|v:rang|p:during the math test,|s:the whole class|v:walked|p:to the parking lot|c:and|v:waited|p:in the cold|p:for twenty minutes.",
"s:The group project|sa:assigned on Monday|V:was finished|p:by Thursday|d:because|s:everyone|sp:in our group|v:agreed|i:to work|p:during lunch.",
"p:After the last bell,|s:the students|sa:waiting for the late bus|v:played|o:cards|p:on the gym floor|d:until|s:the driver|v:arrived.",
"sg:Studying with friends|v:helps|o:some students,|c:but|s:I|v:remember|o:more|d:when|s:I|v:review|o:my notes|p:in a quiet room.",
"i:To finish the yearbook,|s:the editors|v:stayed|p:after school|p:for a week|c:and|v:sorted|p:through hundreds|p:of photos.",
"s:My locker|V:was jammed|p:on the first day,|c:so|s:the custodian|v:opened|o:it|p:with a special key|c:and|v:showed|o:me|o:the trick."
]},
],

moods: [
["BTS **released** a new album in March.",0],
["The team **practices** on the turf every afternoon.",0],
["My sister **has** three vintage jackets.",0],
["The concert **was** louder than I expected.",0],
["Most thrift stores **receive** donations in the spring.",0],
["**Did** you **finish** the choreography?",1],
["Where **is** the nearest thrift store?",1],
["**Have** the tickets **arrived** yet?",1],
["Who **scored** the winning goal?",1],
["**Pass** the ball to the left wing.",2],
["Please **bring** your stick and shin guards tomorrow.",2],
["**Blend** the eyeshadow before it dries.",2],
["**Meet** us at the merch table after the show.",2],
["Never **leave** your brushes dirty.",2],
["If it rained, the game **would move** indoors.",3],
["She **could make** varsity with more practice.",3],
["If I were taller, I **would play** goalie.",3],
["We **might get** front-row seats if we leave now.",3],
["With a steadier hand, my eyeliner **would look** better.",3],
["If I **were** taller, I would play goalie.",4],
["I wish the concert **were** tonight.",4],
["The coach demands that every player **be** on time.",4],
["The director asked that the singer **wear** the silver jacket.",4],
["If she **were** the captain, practices would be shorter.",4],
["It is essential that the goalie **stay** in the circle.",4]
],

missions: {

verb: {
  key: [["rv","Verb"],["rs","Subject"],["rx","Verbal (not the verb)"],["rp","Prepositional phrase"]],
  rule: [
    "A <b class='rv'>verb</b> shows action (<b class='rv'>ran</b>) or being (<b class='rv'>is</b>, <b class='rv'>was</b>, <b class='rv'>will be</b>).",
    "Helping verbs are part of it: <b class='rv'>was built</b>, <b class='rv'>has been barking</b>, <b class='rv'>can change</b>, <b class='rv'>should have left</b>.",
    "Each clause has its own verb. Two clauses, two verbs: <b class='rs'>The lights</b> <b class='rv'>dimmed</b>, <b class='rk'>and</b> <b class='rs'>the crowd</b> <b class='rv'>screamed</b>.",
    "One subject can have two verbs: <b class='rs'>She</b> <b class='rv'>dribbled</b> <b class='rk'>and</b> <b class='rv'>scored</b>.",
    "to + verb is never the verb: <b class='rs'>She</b> <b class='rv'>wants</b> <b class='rx'>to learn</b>.",
    "An -ing word with no helper is not the verb: <b class='rs'>The girl</b> <b class='rx us'>wearing red</b> <b class='rv'>plays</b> goalie."
  ],
  trick: "Test it: put I, he or they in front. \"They succeed\" works. \"They to learn\" does not.",
  ex: [
    ["<b class='rs'>My dog</b> <b class='rv'>has been barking</b> <b class='rp'>at the mail carrier</b> <b class='rp'>since noon</b>.","Two helpers + the action = one verb phrase."],
    ["<b class='rs'>The tickets</b> <b class='rv'>were sold</b> <b class='rp'>in ten minutes</b>.","were + sold work together."],
    ["<b class='rs'>Maya</b> <b class='rv'>wants</b> <b class='rx'>to learn</b> guitar.","\"to learn\" is to + verb, so it is not the verb."],
    ["<b class='rs'>Dancing</b> <b class='rv'>is</b> hard work.","Dancing names a thing here. The verb is \"is\"."],
    ["<b class='rs'>The fans</b> <b class='rx us'>waiting outside</b> <b class='rv'>were given</b> posters.","\"waiting\" has no helper. It only describes the fans."],
    ["<b class='rk'>When</b> <b class='rs'>the lights</b> <b class='rv'>dimmed</b>, <b class='rs'>the fans</b> <b class='rv'>began</b> <b class='rx'>to scream</b>.","Two clauses, two verbs. \"to scream\" is not one of them."],
    ["<b class='rs'>The designer</b> <b class='rv'>did</b> not <b class='rv'>expect</b> so many orders.","\"did expect\" is the verb. \"not\" sits in the middle but is not part of it."],
    ["<b class='rs'>Olivia</b> <b class='rv'>plays</b> guitar <b class='rk'>and</b> <b class='rv'>writes</b> her own songs.","One subject, two verbs."],
    ["<b class='rs'>We</b> <b class='rv'>should have left</b> earlier <b class='rx'>to beat</b> the traffic.","Three words, one verb phrase."],
    ["<b class='rs'>She</b> <b class='rv'>is</b> good <b class='rp'>at dribbling</b>.","\"dribbling\" follows a preposition, so it is not the verb."]
  ]
},

subj: {
  key: [["rs","Subject"],["rv","Verb"],["rp","Prepositional phrase"],["rx","Verbal"],["rk","Connector"]],
  rule: [
    "Find the <b class='rv'>verb</b> first. Then ask: who or what did it? That is the <b class='rs'>subject</b>.",
    "The complete subject is the noun plus every word that describes it: <b class='rs'>The girl</b> <b class='rp us'>with the red backpack</b> <b class='rv'>won</b>.",
    "A describing phrase stays with the subject: <b class='rs'>The player</b> <b class='rx us'>dribbling the ball</b> <b class='rv'>is</b> our captain.",
    "Each clause has its own subject: <b class='rs'>The goalie</b> <b class='rv'>dove</b>, <b class='rk'>and</b> <b class='rs'>the ball</b> <b class='rv'>missed</b>.",
    "An opening phrase is not the subject: <b class='rp'>After lunch</b>, <b class='rs'>my brother</b> <b class='rv'>fell</b> asleep.",
    "An -ing word can be the subject: <b class='rs'>Thrifting</b> <b class='rv'>saves</b> money."
  ],
  trick: "\"The paths leading to the hilltops were steep.\" What were steep? All of \"the paths leading to the hilltops\". A phrase inside a subject keeps its own color and gets the subject underline.",
  ex: [
    ["<b class='rs'>The fans</b> <b class='rp us'>in the front row</b> <b class='rv'>screamed</b>.","Who screamed? The whole group of words."],
    ["<b class='rp'>After the show</b>, <b class='rs'>the band</b> <b class='rv'>left</b>.","The opening phrase tells when. It is not the subject."],
    ["<b class='rs'>The goalie</b> <b class='rv'>dove</b>, <b class='rk'>and</b> <b class='rs'>the ball</b> <b class='rv'>missed</b>.","Two clauses, two subjects."],
    ["<b class='rs'>The girl</b> <b class='rx us'>wearing eyeliner</b> <b class='rv'>is</b> my cousin.","\"wearing eyeliner\" tells which girl, so it belongs."],
    ["<b class='rk'>Once</b> <b class='rs'>roads</b> <b class='rv'>were built</b>, <b class='rs'>access</b> <b class='rp us'>to the heights</b> <b class='rv'>was</b> easy.","What was easy? \"access to the heights\", not just \"access\"."],
    ["<b class='rs'>Three</b> <b class='rp us'>of my friends</b> <b class='rv'>are coming</b>.","Who are coming? \"Three of my friends\"."],
    ["<b class='rk'>When</b> <b class='rs'>the bell</b> <b class='rv'>rang</b>, <b class='rs'>the students</b> <b class='rp us'>in the hallway</b> <b class='rv'>ran</b>.","The first clause has a subject too."],
    ["<b class='rs'>Blending eyeshadow</b> <b class='rv'>takes</b> practice.","The whole -ing phrase is the subject."],
    ["<b class='rs'>My friends and I</b> <b class='rv'>made</b> bracelets.","Two people, one complete subject."],
    ["<b class='rp'>On Friday</b>, <b class='rs'>the seven members</b> <b class='rp us'>of BTS</b> <b class='rv'>arrived</b>.","\"of BTS\" tells which members."]
  ]
},

prep: {
  key: [["rp","Prepositional phrase"],["rx","Infinitive (does not count)"],["rs","Subject"],["rv","Verb"]],
  rule: [
    "A <b class='rp'>prepositional phrase</b> starts with a preposition and ends with a noun: <b class='rp'>in the rain</b>, <b class='rp'>after the game</b>, <b class='rp'>with my cousins</b>.",
    "Common prepositions: in, on, at, for, with, by, to, from, of, as, after, before, during, under, over, behind, between, through, without, until.",
    "to + noun is a prepositional phrase: <b class='rp'>to school</b>. to + verb is an infinitive: <b class='rx'>to meet</b>.",
    "Short ones are easy to miss: <b class='rp'>for use</b>, <b class='rp'>as a joke</b>, <b class='rp'>by hand</b>, <b class='rp'>at first</b>.",
    "Phrases can come in a row: <b class='rp'>from the top</b> <b class='rp'>of the circle</b>.",
    "A word like out, up or along with no noun after it is not a phrase: The lights went out."
  ],
  trick: "Look at the word after \"to\". A thing or a place? Prepositional phrase. An action? Skip it.",
  ex: [
    ["<b class='rs'>She</b> <b class='rv'>ran</b> <b class='rp'>to the field</b> <b class='rx'>to play</b>.","to + place counts. to + verb does not."],
    ["<b class='rs'>We</b> <b class='rv'>waited</b> <b class='rp'>in line</b> <b class='rp'>for hours</b>.","Two short phrases, both count."],
    ["<b class='rp'>As a fan</b>, <b class='rs'>I</b> <b class='rv'>cried</b> <b class='rp'>at the concert</b>.","\"As\" can be a preposition."],
    ["<b class='rs'>It</b> <b class='rv'>was made</b> <b class='rp'>by hand</b> <b class='rp'>for use</b> <b class='rp'>on stage</b>.","Two-word phrases are the easiest to skip."],
    ["<b class='rs'>She</b> <b class='rv'>is</b> great <b class='rp'>at dribbling</b>.","An -ing word can follow a preposition."],
    ["<b class='rs'>The ball</b> <b class='rv'>flew</b> <b class='rp'>over the goalie</b> <b class='rk'>and</b> <b class='rp'>into the net</b>.","\"and\" joins two phrases."],
    ["<b class='rs'>We</b> <b class='rv'>have</b> <b class='rx'>to leave</b> <b class='rp'>by noon</b> <b class='rx'>to get</b> good seats.","Two infinitives to skip. Only \"by noon\" counts."],
    ["<b class='rs'>The song</b> <b class='rp us'>on the radio</b> <b class='rv'>was written</b> <b class='rp'>by a teenager</b>.","A phrase inside the subject still counts."],
    ["<b class='rs'>They</b> <b class='rv'>came</b> <b class='rx'>to watch</b> the ceremonies <b class='rp'>in the spring</b>.","\"to watch\" is an infinitive."],
    ["<b class='rs'>The crowd</b> <b class='rv'>sang</b> along <b class='rp'>until midnight</b>.","\"along\" has no noun after it."]
  ]
},

verbal: {
  key: [["rx","Gerund"],["ca","Participle"],["cb","Infinitive"],["rp","Prepositional phrase"]],
  rule: [
    "A verbal looks like a verb but does a different job.",
    "<b class='rx'>Gerund</b>: an -ing word used as a noun. <b class='rx'>Running</b> is fun. She loves <b class='rx'>baking</b>.",
    "<b class='ca'>Participle</b>: an -ing or -ed word used as an adjective. The <b class='ca'>running</b> water, the <b class='ca'>baked</b> cookies, the girl <b class='ca'>wearing red</b>.",
    "<b class='cb'>Infinitive</b>: to + verb. She wants <b class='cb'>to sing</b>. <b class='cb'>To win</b> was her dream.",
    "<b class='rp'>Prepositional phrase</b>: to + noun. She walked <b class='rp'>to the stage</b>."
  ],
  trick: "Swap in \"it\". \"It is fun\" works, so Running is a gerund. \"The it water\" fails, so running is a participle.",
  ex: [
    ["<b class='rx'>Singing</b> is fun.","It names a thing. Gerund."],
    ["The <b class='ca'>singing</b> crowd was loud.","It describes the crowd. Participle."],
    ["She wants <b class='cb'>to sing</b>.","to + verb. Infinitive."],
    ["She walked <b class='rp'>to the stage</b>.","to + place. Prepositional phrase."],
    ["She practices <b class='rx'>dribbling</b> every morning.","What does she practice? A thing. Gerund."],
    ["The <b class='ca'>smudged</b> eyeliner looked cool.","An -ed word describing eyeliner. Participle."],
    ["The fans <b class='ca'>waiting outside</b> were cold.","The whole phrase describes the fans. Participle."],
    ["<b class='cb'>To make</b> the team, she trained daily.","to + verb, even at the start. Infinitive."],
    ["<b class='rx'>Thrifting</b> saves money.","The subject is a thing. Gerund."],
    ["I gave my ticket <b class='rp'>to my cousin</b>.","to + person. Prepositional phrase."]
  ]
},

voice: {
  key: [["rv","Active verb"],["cc","Passive verb"],["rs","Subject"],["rp","Prepositional phrase"]],
  rule: [
    "<b class='rv'>Active</b>: the subject does the action. <b class='rs'>Sam</b> <b class='rv'>kicked</b> the ball.",
    "<b class='cc'>Passive</b>: the subject receives the action. <b class='rs'>The ball</b> <b class='cc'>was kicked</b>.",
    "Passive = a form of be + past participle: <b class='cc'>was kicked</b>, <b class='cc'>is inhabited</b>, <b class='cc'>were made</b>, <b class='cc'>has been sold</b>.",
    "be + -ing is still active: <b class='rs'>She</b> <b class='rv'>was sleeping</b>.",
    "have + past participle is still active: <b class='rs'>The team</b> <b class='rv'>has won</b>."
  ],
  trick: "Add \"by zombies\" after the verb. If it makes sense, it is passive: \"The ball was kicked by zombies.\"",
  ex: [
    ["<b class='rs'>Fans</b> <b class='rv'>bought</b> the tickets.","The fans did it. Active."],
    ["<b class='rs'>The tickets</b> <b class='cc'>were bought</b> <b class='rp'>by fans</b>.","The tickets received the action. Passive."],
    ["<b class='rs'>She</b> <b class='rv'>was singing</b>.","was + -ing. She is doing it. Active."],
    ["<b class='rs'>The song</b> <b class='cc'>was sung</b> <b class='rp'>by RM</b>.","was + past participle. Passive."],
    ["<b class='rs'>The team</b> <b class='rv'>has scored</b> twice.","has + scored, and the team did it. Active."],
    ["<b class='rs'>Mistakes</b> <b class='cc'>were made</b>.","It does not say who made them. Still passive."],
    ["<b class='rs'>The album</b> <b class='cc'>was released</b> <b class='rp'>in March</b>.","The album did not release itself. Passive."],
    ["<b class='rs'>BTS</b> <b class='rv'>released</b> an album <b class='rp'>in March</b>.","BTS did the releasing. Active."],
    ["<b class='rs'>The stadium</b> <b class='cc'>was filled</b> <b class='rp'>with fans</b>.","was + filled. Passive."],
    ["<b class='rs'>The coach</b> <b class='rv'>is planning</b> a new drill.","is + -ing. Active."]
  ]
},

conj: {
  key: [["rk","Coordinating"],["ce","Subordinating"]],
  rule: [
    "A conjunction joins words or clauses.",
    "<b class='rk'>Coordinating</b>: <b class='rk'>for</b>, <b class='rk'>and</b>, <b class='rk'>nor</b>, <b class='rk'>but</b>, <b class='rk'>or</b>, <b class='rk'>yet</b>, <b class='rk'>so</b>. Remember FANBOYS. They join two equal parts.",
    "<b class='ce'>Subordinating</b>: <b class='ce'>when</b>, <b class='ce'>because</b>, <b class='ce'>although</b>, <b class='ce'>if</b>, <b class='ce'>while</b>, <b class='ce'>until</b>, <b class='ce'>once</b>, <b class='ce'>after</b>, <b class='ce'>before</b>, <b class='ce'>that</b>, <b class='ce'>so that</b>.",
    "A subordinating word starts a clause that cannot stand alone: <b class='ce'>because</b> the crowd cheered."
  ],
  trick: "FANBOYS = coordinating. Any other word that starts a clause is subordinating.",
  ex: [
    ["She sang, <b class='rk'>and</b> the crowd cheered.","and is one of the FANBOYS. Coordinating."],
    ["She sang <b class='ce'>because</b> the crowd cheered.","\"because the crowd cheered\" cannot stand alone. Subordinating."],
    ["<b class='ce'>Although</b> it rained, we played.","Subordinating, even at the start of the sentence."],
    ["We ran, <b class='rk'>so</b> we made the bus.","so is one of the FANBOYS. Coordinating."],
    ["We ran <b class='ce'>so that</b> we would make the bus.","Two words, and subordinating."],
    ["The song is short, <b class='rk'>yet</b> it stayed at number one.","yet is one of the FANBOYS. Coordinating."],
    ["I screamed <b class='ce'>when</b> I opened the card.","\"when I opened the card\" cannot stand alone."],
    ["The coach believes <b class='ce'>that</b> practice matters.","\"that\" starts a clause here. Subordinating."]
  ]
},

stype: {
  key: [["cd","Independent clause"],["ce","Dependent clause"]],
  rule: [
    "Count the clauses. A clause has its own subject and its own verb.",
    "An <b class='cd'>independent clause</b> can stand alone. A <b class='ce'>dependent clause</b> starts with a word like when, because, although, if, that.",
    "<b>Simple</b>: one <b class='cd'>independent clause</b>.",
    "<b>Compound</b>: two or more <b class='cd'>independent clauses</b>, joined by FANBOYS or a semicolon.",
    "<b>Complex</b>: one <b class='cd'>independent clause</b> + at least one <b class='ce'>dependent clause</b>.",
    "<b>Compound-complex</b>: two or more <b class='cd'>independent clauses</b> + at least one <b class='ce'>dependent clause</b>."
  ],
  trick: "One subject doing two things (She ran and jumped) is still one clause. Count the subjects, not the verbs.",
  ex: [
    ["<b class='cd'>The goalie dove and blocked the shot.</b>","One subject, two verbs, one clause. Simple."],
    ["<b class='cd'>The goalie dove,</b> and <b class='cd'>the crowd cheered.</b>","Two independent clauses. Compound."],
    ["<b class='ce'>When the goalie dove,</b> <b class='cd'>the crowd cheered.</b>","One dependent + one independent. Complex."],
    ["<b class='ce'>When the goalie dove,</b> <b class='cd'>the crowd cheered,</b> and <b class='cd'>the coach smiled.</b>","One dependent + two independent. Compound-complex."],
    ["<b class='cd'>The tickets sold out;</b> <b class='cd'>we watched online.</b>","A semicolon joins two independent clauses. Compound."],
    ["<b class='cd'>She kept the eyeliner</b> <b class='ce'>because it matched her outfit.</b>","The dependent clause can come second. Complex."],
    ["<b class='cd'>To make the team, she practiced every day after school.</b>","Long, but only one subject and one verb. Simple."],
    ["<b class='cd'>The band played</b> <b class='ce'>until the lights came on,</b> but <b class='cd'>nobody left.</b>","Two independent + one dependent. Compound-complex."]
  ]
},

mood: {
  key: [["ca","Indicative"],["rk","Interrogative"],["cd","Imperative"],["cb","Conditional"],["ce","Subjunctive"]],
  rule: [
    "Mood shows what the speaker is doing with the verb.",
    "<b class='ca'>Indicative</b> states a fact or opinion: She <b class='ca'>plays</b> defense.",
    "<b class='rk'>Interrogative</b> asks a question: <b class='rk'>Does</b> she <b class='rk'>play</b> defense?",
    "<b class='cd'>Imperative</b> gives a command. The subject \"you\" is hidden: <b class='cd'>Pass</b> the ball.",
    "<b class='cb'>Conditional</b> says what would or could happen: She <b class='cb'>would play</b> if she had a stick.",
    "<b class='ce'>Subjunctive</b> is a wish, a demand, or something contrary to fact: I wish I <b class='ce'>were</b> taller. The coach asked that she <b class='ce'>be</b> on time."
  ],
  trick: "\"If I were\", \"I wish she were\" and \"that he be\" are subjunctive. Would, could and might point to conditional.",
  ex: [
    ["If I <b class='ce'>were</b> a singer, I <b class='cb'>would tour</b> the world.","\"were\" after I is contrary to fact: subjunctive. \"would tour\" is conditional."],
    ["<b class='cd'>Bring</b> your ticket.","A command with a hidden \"you\". Imperative."],
    ["The coach insists that she <b class='ce'>arrive</b> early.","A demand, and no -s on the verb. Subjunctive."],
    ["She <b class='ca'>arrives</b> early every day.","A plain fact. Indicative."],
    ["<b class='rk'>Did</b> the band <b class='rk'>play</b> an encore?","A question. Interrogative."],
    ["We <b class='cb'>could win</b> with a better defense.","could + verb: it depends on something. Conditional."],
    ["I wish the concert <b class='ce'>were</b> tonight.","A wish. Subjunctive."],
    ["Never <b class='cd'>leave</b> your brushes dirty.","Still a command. Imperative."],
    ["The concert <b class='ca'>was</b> loud.","An opinion stated as a fact. Indicative."],
    ["It is important that he <b class='ce'>be</b> ready.","\"be\" instead of \"is\". Subjunctive."]
  ]
},

paint: {
  key: [["rs","Subject"],["rv","Verb"],["rp","Prepositional phrase"],["rx","Verbal"],["rk","Connector"],["rn","No color"]],
  rule: [
    "Go in this order, one color at a time.",
    "<b class='rv'>Verbs</b> first. Each clause has one: <b class='rv'>shook</b>, <b class='rv'>was sold</b>.",
    "<b class='rs'>Subjects</b> next: who or what does each verb? Take every word that describes it: <b class='rs'>the players</b>.",
    "<b class='rp'>Prepositional phrases</b>: preposition + noun: <b class='rp'>after the game</b>, <b class='rp'>to the bus</b>.",
    "<b class='rx'>Verbals</b>: to + verb, or an -ing / -ed word that is not working as the verb: <b class='rx'>to rest</b>, <b class='rx'>wearing red</b>.",
    "<b class='rk'>Connectors</b>: and, but, so, when, because, although, that.",
    "<b class='rn'>No color</b> for the rest: objects and describing words.",
    "All together: <b class='rp'>After the game,</b> <b class='rs'>the players</b> <b class='rp us'>on both teams</b> <b class='rv'>shook</b> hands <b class='rk'>and</b> <b class='rv'>went</b> <b class='rp'>to the bus</b> <b class='rx'>to rest</b>."
  ],
  trick: "A phrase inside a subject, like \"on both teams\", can be the subject color or the phrase color. Both count.",
  ex: [
    ["<b class='rs'>The fans</b> <b class='rp us'>in line</b> <b class='rv'>waited</b>.","\"in line\" is part of the subject and also a prepositional phrase."],
    ["<b class='rs'>She</b> <b class='rv'>stopped</b> <b class='rx'>to rest</b>.","to + verb is a verbal, not a prepositional phrase."],
    ["<b class='rs'>The girl</b> <b class='rx us'>wearing red</b> <b class='rv'>scored</b>.","\"wearing red\" describes the girl. Verbal."],
    ["<b class='rs'>They</b> <b class='rv'>left</b> <b class='rk'>when</b> <b class='rs'>it</b> <b class='rv'>rained</b>.","when, and, but are connectors."],
    ["<b class='rk'>When</b> <b class='rs'>the lights</b> <b class='rv'>dimmed</b>, <b class='rs'>the fans</b> <b class='rv'>began</b> <b class='rx'>to scream</b>.","Connector first, then two clauses."],
    ["<b class='rs'>The dress</b> <b class='rx us'>covered in mirrors</b> <b class='rv'>was sewn</b> <b class='rp'>by hand</b>.","A describing phrase inside the subject."],
    ["<b class='rs'>Thrifting</b> <b class='rv'>saves</b> money <b class='rk'>and</b> <b class='rv'>keeps</b> clothes <b class='rp'>out of landfills</b>.","One subject, two verbs."],
    ["<b class='rp'>Before the show</b>, <b class='rs'>she</b> <b class='rv'>walked</b> <b class='rp'>to the stage</b> <b class='rx'>to check</b> the sound.","to + place is a phrase. to + verb is a verbal."]
  ]
}
}

};

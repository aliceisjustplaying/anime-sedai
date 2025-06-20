import type { Language } from "./src/i18n"

type AnimeItem = {
  titleEn: string
  titleJa: string
  score: number
}

type Data = {
  [key: string]: AnimeItem[]
}

const data: Data = {
  "1986": [
    {
      "titleEn": "Castle in the Sky",
      "titleJa": "天空の城ラピュタ",
      "score": 8.26
    },
    {
      "titleEn": "Maison Ikkoku",
      "titleJa": "めぞん一刻",
      "score": 8.19
    },
    {
      "titleEn": "Silver Fang",
      "titleJa": "銀牙　流れ星銀",
      "score": 8.02
    },
    {
      "titleEn": "Dragon Ball",
      "titleJa": "ドラゴンボール",
      "score": 7.98
    },
    {
      "titleEn": "Saint Seiya: Knights of the Zodiac",
      "titleJa": "聖闘士星矢(セイントセイヤ)",
      "score": 7.76
    },
    {
      "titleEn": "Doraemon the Movie: Nobita and the Steel Troops",
      "titleJa": "映画 ドラえもん のび太と鉄人兵団",
      "score": 7.65
    },
    {
      "titleEn": "Shounan Bakusouzoku",
      "titleJa": "湘南爆走族",
      "score": 7.58
    },
    {
      "titleEn": "The Adventures of Scamper the Penguin",
      "titleJa": "小さなペンギンロロの冒険",
      "score": 7.38
    },
    {
      "titleEn": "Barefoot Gen 2",
      "titleJa": "はだしのゲン　２",
      "score": 7.35
    },
    {
      "titleEn": "Fist of the North Star: The Movie",
      "titleJa": "北斗の拳",
      "score": 7.21
    },
    {
      "titleEn": "Once Upon a Time... Life",
      "titleJa": "生命の科学ミクロパトロール",
      "score": 7.18
    },
    {
      "titleEn": "Bosco Adventure",
      "titleJa": "ボスコアドベンチャー",
      "score": 7.01
    }
  ],
  "1987": [
    {
      "titleEn": "City Hunter",
      "titleJa": "シティーハンター",
      "score": 7.91
    },
    {
      "titleEn": "Fist of the North Star 2",
      "titleJa": "北斗の拳2",
      "score": 7.57
    },
    {
      "titleEn": "Kimagure Orange Road",
      "titleJa": "きまぐれオレンジ☆ロード",
      "score": 7.51
    },
    {
      "titleEn": "Royal Space Force: The Wings of Honneamise",
      "titleJa": "王立宇宙軍 オネアミスの翼",
      "score": 7.45
    },
    {
      "titleEn": "Lady Lady!!",
      "titleJa": "レディレディ！！",
      "score": 7.45
    },
    {
      "titleEn": "Grimm's Fairy Tale Classics",
      "titleJa": "グリム名作劇場",
      "score": 7.41
    },
    {
      "titleEn": "Tales of Little Women",
      "titleJa": "愛の若草物語",
      "score": 7.39
    },
    {
      "titleEn": "Bubblegum Crisis",
      "titleJa": "バブルガムクライシス",
      "score": 7.29
    },
    {
      "titleEn": "Lupin III: The Fuma Conspiracy",
      "titleJa": "ルパン三世　風魔一族の陰謀",
      "score": 7.27
    },
    {
      "titleEn": "Robot Carnival",
      "titleJa": "ロボット・カーニバル",
      "score": 7.21
    },
    {
      "titleEn": "Devilman: The Birth",
      "titleJa": "デビルマン 誕生編",
      "score": 7.17
    },
    {
      "titleEn": "Dirty Pair OVA",
      "titleJa": "ダーティペア (1987)",
      "score": 7.11
    }
  ],
  "1988": [
    {
      "titleEn": "Legend of the Galactic Heroes",
      "titleJa": "銀河英雄伝説",
      "score": 9.01
    },
    {
      "titleEn": "Grave of the Fireflies",
      "titleJa": "火垂るの墓",
      "score": 8.53
    },
    {
      "titleEn": "My Neighbor Totoro",
      "titleJa": "となりのトトロ",
      "score": 8.25
    },
    {
      "titleEn": "Akira",
      "titleJa": "AKIRA（アキラ）",
      "score": 8.16
    },
    {
      "titleEn": "City Hunter 2",
      "titleJa": "シティーハンター2",
      "score": 8.07
    },
    {
      "titleEn": "Legend of the Galactic Heroes: My Conquest is the Sea of Stars",
      "titleJa": "銀河英雄伝説: わが征くは星の大海",
      "score": 7.86
    },
    {
      "titleEn": "Gunbuster",
      "titleJa": "トップをねらえ！ GunBuster",
      "score": 7.85
    },
    {
      "titleEn": "Mobile Suit Gundam: Char's Counterattack",
      "titleJa": "機動戦士ガンダム 逆襲のシャア",
      "score": 7.68
    },
    {
      "titleEn": "Kimagure Orange Road: I Want to Return to That Day",
      "titleJa": "きまぐれオレンジ★ロード　あの日にかえりたい",
      "score": 7.62
    },
    {
      "titleEn": "Hello! Lady Lynn",
      "titleJa": "ハロー! レディリン",
      "score": 7.53
    },
    {
      "titleEn": "Urusei Yatsura Movie 5: The Final Chapter",
      "titleJa": "うる星やつら 完結篇",
      "score": 7.46
    },
    {
      "titleEn": "Charge!! Men's Private School",
      "titleJa": "魁!!男塾",
      "score": 7.42
    }
  ],
  "1989": [
    {
      "titleEn": "Kiki's Delivery Service",
      "titleJa": "魔女の宅急便",
      "score": 8.23
    },
    {
      "titleEn": "Dragon Ball Z",
      "titleJa": "ドラゴンボールZ",
      "score": 8.2
    },
    {
      "titleEn": "Mobile Suit Gundam 0080: War in the Pocket",
      "titleJa": "機動戦士ガンダム 0080 ポケットの中の戦争",
      "score": 7.99
    },
    {
      "titleEn": "City Hunter 3",
      "titleJa": "シティーハンター3",
      "score": 7.8
    },
    {
      "titleEn": "Ranma ½",
      "titleJa": "らんま1/2",
      "score": 7.77
    },
    {
      "titleEn": "Patlabor: The Mobile Police - The TV Series",
      "titleJa": "機動警察パトレイバー ON TELEVISION",
      "score": 7.69
    },
    {
      "titleEn": "Patlabor: The Movie",
      "titleJa": "機動警察パトレイバー the Movie",
      "score": 7.56
    },
    {
      "titleEn": "Yawara!",
      "titleJa": "YAWARA!",
      "score": 7.48
    },
    {
      "titleEn": "City Hunter: .357 Magnum",
      "titleJa": "シティーハンター 愛と宿命のマグナム",
      "score": 7.38
    },
    {
      "titleEn": "Alfred J. Kwak",
      "titleJa": "小さなアヒルの大きな愛の物語 あひるのクワック",
      "score": 7.37
    },
    {
      "titleEn": "Kimagure Orange Road OVA",
      "titleJa": "きまぐれオレンジ☆ロード",
      "score": 7.35
    },
    {
      "titleEn": "Time Quest",
      "titleJa": "たいむとらぶる トンデケマン!",
      "score": 7.35
    }
  ],
  "1990": [
    {
      "titleEn": "Moomin",
      "titleJa": "楽しいムーミン一家",
      "score": 8.27
    },
    {
      "titleEn": "My Daddy Long Legs",
      "titleJa": "私のあしながおじさん",
      "score": 7.7
    },
    {
      "titleEn": "Chibi Maruko-chan",
      "titleJa": "ちびまる子ちゃん",
      "score": 7.66
    },
    {
      "titleEn": "Dragon Ball Z: Bardock, The Father of Goku",
      "titleJa": "DRAGON BALL Z スペシャル たったひとりの最終決戦~フリーザに挑んだZ戦士孫悟空の父~",
      "score": 7.58
    },
    {
      "titleEn": "Mobile Police Patlabor: The New Files",
      "titleJa": "機動警察パトレイバー　NEW OVA",
      "score": 7.56
    },
    {
      "titleEn": "Be-Bop Highschool",
      "titleJa": "ビー・バップ・ハイスクール",
      "score": 7.5
    },
    {
      "titleEn": "Nadia: The Secret of Blue Water",
      "titleJa": "ふしぎの海のナディア",
      "score": 7.5
    },
    {
      "titleEn": "City Hunter: Bay City Wars",
      "titleJa": "シティーハンター ベイシティウォーズ",
      "score": 7.33
    },
    {
      "titleEn": "Record of Lodoss War",
      "titleJa": "ロードス島戦記",
      "score": 7.32
    },
    {
      "titleEn": "City Hunter: Million Dollar Conspiracy",
      "titleJa": "シティーハンター 百万ドルの陰謀",
      "score": 7.32
    },
    {
      "titleEn": "Cyber City",
      "titleJa": "CYBER CITY OEDO 808 (サイバーシティ オーエド ハチマルハチ)",
      "score": 7.2
    },
    {
      "titleEn": "Doraemon the Movie: Nobita and the Animal Planet",
      "titleJa": "映画 ドラえもん のび太とアニマル惑星[プラネット]",
      "score": 7.18
    }
  ],
  "1991": [
    {
      "titleEn": "Dear Brother",
      "titleJa": "おにいさまへ…",
      "score": 7.86
    },
    {
      "titleEn": "City Hunter '91",
      "titleJa": "シティーハンター'91",
      "score": 7.75
    },
    {
      "titleEn": "Who's Left Behind?",
      "titleJa": "うしろの正面だあれ",
      "score": 7.7
    },
    {
      "titleEn": "The Trapp Family Story",
      "titleJa": "トラップ 一家 物語",
      "score": 7.62
    },
    {
      "titleEn": "Dragon Quest: The Adventure of Dai",
      "titleJa": "ドラゴンクエスト・ダイの大冒険",
      "score": 7.56
    },
    {
      "titleEn": "Tanoshii Muumin Ikka Bouken Nikki",
      "titleJa": "楽しいムーミン一家 冒険日記",
      "score": 7.5
    },
    {
      "titleEn": "Only Yesterday",
      "titleJa": "おもひでぽろぽろ",
      "score": 7.44
    },
    {
      "titleEn": "Doraemon the Movie: Nobita's Dorabian Nights",
      "titleJa": "映画 ドラえもん のび太のドラビアンナイト",
      "score": 7.37
    },
    {
      "titleEn": "Future GPX Cyber Formula",
      "titleJa": "新世紀GPXサイバーフォーミュラ",
      "score": 7.35
    },
    {
      "titleEn": "Yokoyama Mitsuteru Sangokushi",
      "titleJa": "横山光輝 三国志",
      "score": 7.35
    },
    {
      "titleEn": "Honoo no Toukyuuji: Dodge Danpei",
      "titleJa": "炎の闘球児・ドッジ弾平",
      "score": 7.3
    },
    {
      "titleEn": "Ranma ½: Big Trouble in Nekonron, China",
      "titleJa": "らんま 1/2 中国寝崑崙大決戦! 掟やぶりの激闘編!!",
      "score": 7.23
    }
  ],
  "1992": [
    {
      "titleEn": "Yu Yu Hakusho: Ghost Files",
      "titleJa": "幽☆遊☆白書",
      "score": 8.46
    },
    {
      "titleEn": "Porco Rosso",
      "titleJa": "紅の豚",
      "score": 7.96
    },
    {
      "titleEn": "Shin Chan",
      "titleJa": "クレヨンしんちゃん",
      "score": 7.81
    },
    {
      "titleEn": "Giant Robo the Animation: The Day the Earth Stood Still",
      "titleJa": "ジャイアントロボ THE ANIMATION 地球が静止する日",
      "score": 7.8
    },
    {
      "titleEn": "Sailor Moon",
      "titleJa": "美少女戦士セーラームーン",
      "score": 7.74
    },
    {
      "titleEn": "Comet in Moominland",
      "titleJa": "ムーミン谷の彗星",
      "score": 7.69
    },
    {
      "titleEn": "Tenchi Muyo! Ryo-Ohki",
      "titleJa": "天地無用！魎皇鬼",
      "score": 7.6
    },
    {
      "titleEn": "Hime-chan no Ribbon",
      "titleJa": "姫ちゃんのリボン",
      "score": 7.45
    },
    {
      "titleEn": "Tekkaman Blade",
      "titleJa": "宇宙の騎士テッカマンブレード",
      "score": 7.43
    },
    {
      "titleEn": "Ranma ½: The Movie 2 - The Battle of Togenkyo: Rescue the Brides!",
      "titleJa": "らんま1/2 決戦桃幻郷! 花嫁を奪りもどせ!!",
      "score": 7.42
    },
    {
      "titleEn": "Mama is Just a Fourth Grade Pupil",
      "titleJa": "ママは小学４年生",
      "score": 7.33
    },
    {
      "titleEn": "Future GPX Cyber Formula 11",
      "titleJa": "新世紀GPXサイバーフォーミュラ11",
      "score": 7.31
    }
  ],
  "1993": [
    {
      "titleEn": "Slam Dunk",
      "titleJa": "スラムダンク",
      "score": 8.55
    },
    {
      "titleEn": "Ramayana: The Legend of Prince Rama",
      "titleJa": "ラーマーヤナ ラーマ王子伝説",
      "score": 8.39
    },
    {
      "titleEn": "Legend of the Galactic Heroes: Overture to a New War",
      "titleJa": "銀河英雄伝説外伝　新たなる戦いの序曲[オーヴァチュア]",
      "score": 8.08
    },
    {
      "titleEn": "Kyou kara Ore wa!!",
      "titleJa": "今日から俺は！！",
      "score": 8.05
    },
    {
      "titleEn": "Patlabor 2: The Movie",
      "titleJa": "機動警察パトレイバー2 the Movie",
      "score": 8.01
    },
    {
      "titleEn": "The Irresponsible Captain Tylor",
      "titleJa": "無責任艦長タイラー",
      "score": 7.84
    },
    {
      "titleEn": "Dragon Ball Z: The History of Trunks",
      "titleJa": "ドラゴンボールＺ・絶望への反抗！！残された超戦士・悟飯とトランク",
      "score": 7.81
    },
    {
      "titleEn": "Sailor Moon R",
      "titleJa": "美少女戦士セーラームーン R",
      "score": 7.73
    },
    {
      "titleEn": "Black Jack",
      "titleJa": "ブラック・ジャック",
      "score": 7.73
    },
    {
      "titleEn": "Ranma ½ OVA",
      "titleJa": "らんま1/2 OVA",
      "score": 7.73
    },
    {
      "titleEn": "Sailor Moon R: The Movie - The Promise of the Rose",
      "titleJa": "美少女戦士セーラームーンＲ THE MOVIE",
      "score": 7.72
    },
    {
      "titleEn": "Ninja Scroll",
      "titleJa": "獣兵衛忍風帖",
      "score": 7.61
    }
  ],
  "1994": [
    {
      "titleEn": "Sailor Moon S",
      "titleJa": "美少女戦士セーラームーン S",
      "score": 7.9
    },
    {
      "titleEn": "Galaxy Warring State Chronicle Rai",
      "titleJa": "銀河戦国群雄伝ライ",
      "score": 7.89
    },
    {
      "titleEn": "Macross Plus",
      "titleJa": "マクロスプラス",
      "score": 7.7
    },
    {
      "titleEn": "Sailor Moon S Movie: Hearts in Ice",
      "titleJa": "美少女戦士セーラームーンS かぐや姫の恋人",
      "score": 7.69
    },
    {
      "titleEn": "Tenchi Muyo! Ryo-Ohki",
      "titleJa": "天地無用！魎皇鬼",
      "score": 7.61
    },
    {
      "titleEn": "Magical Circle Guru Guru",
      "titleJa": "魔法陣グルグル",
      "score": 7.59
    },
    {
      "titleEn": "Mobile Fighter G Gundam",
      "titleJa": "機動武闘伝Gガンダム",
      "score": 7.58
    },
    {
      "titleEn": "Ranma 1/2 Special: Reawakening Memories",
      "titleJa": "らんま1/2 SPECIAL よみがえる記憶",
      "score": 7.57
    },
    {
      "titleEn": "Doraemon the Movie: Nobita's Three Visionary Swordsmen",
      "titleJa": "映画 ドラえもん のび太と夢幻三剣士",
      "score": 7.5
    },
    {
      "titleEn": "Slam Dunk: National Domination! Sakuragi Hanamichi",
      "titleJa": "スラムダンク 全国制覇だ！桜木花道",
      "score": 7.5
    },
    {
      "titleEn": "You're Under Arrest",
      "titleJa": "逮捕しちゃうぞ",
      "score": 7.46
    },
    {
      "titleEn": "Magic Knight Rayearth",
      "titleJa": "魔法騎士（マジックナイト）レイアース",
      "score": 7.45
    }
  ],
  "1995": [
    {
      "titleEn": "Neon Genesis Evangelion",
      "titleJa": "新世紀エヴァンゲリオン",
      "score": 8.36
    },
    {
      "titleEn": "Romeo's Blue Skies",
      "titleJa": "ロミオの青い空",
      "score": 8.31
    },
    {
      "titleEn": "Ghost in the Shell",
      "titleJa": "GHOST IN THE SHELL（攻殻機動隊）",
      "score": 8.27
    },
    {
      "titleEn": "Whisper of the Heart",
      "titleJa": "耳をすませば",
      "score": 8.22
    },
    {
      "titleEn": "Golden Boy",
      "titleJa": "ゴールデンボーイ",
      "score": 8.04
    },
    {
      "titleEn": "Slayers",
      "titleJa": "スレイヤーズ",
      "score": 7.72
    },
    {
      "titleEn": "Memories",
      "titleJa": "MEMORIES（メモリーズ）",
      "score": 7.72
    },
    {
      "titleEn": "Macross Plus Movie Edition",
      "titleJa": "マクロスプラス　ＭＯＶＩＥ　ＥＤＩＴＩＯＮ",
      "score": 7.7
    },
    {
      "titleEn": "Mobile Suit Gundam Wing",
      "titleJa": "新機動戦記ガンダムW",
      "score": 7.67
    },
    {
      "titleEn": "Neighborhood Stories",
      "titleJa": "ご近所物語",
      "score": 7.67
    },
    {
      "titleEn": "Sailor Moon SuperS",
      "titleJa": "美少女戦士セーラームーン Super S",
      "score": 7.63
    },
    {
      "titleEn": "Ranma ½ Super",
      "titleJa": "らんま１／２　ＳＵＰＥＲ",
      "score": 7.63
    }
  ],
  "1996": [
    {
      "titleEn": "Rurouni Kenshin",
      "titleJa": "るろうに剣心 -明治剣客浪漫譚-",
      "score": 8.28
    },
    {
      "titleEn": "Case Closed",
      "titleJa": "名探偵コナン",
      "score": 8.18
    },
    {
      "titleEn": "Kodocha",
      "titleJa": "こどものおもちゃ",
      "score": 8.05
    },
    {
      "titleEn": "Slayers Next",
      "titleJa": "スレイヤーズNEXT",
      "score": 8.01
    },
    {
      "titleEn": "Mobile Suit Gundam: The 08th MS Team",
      "titleJa": "機動戦士ガンダム 第08MS小隊",
      "score": 8
    },
    {
      "titleEn": "Sailor Moon Sailor Stars",
      "titleJa": "美少女戦士セーラームーン セーラースターズ",
      "score": 7.95
    },
    {
      "titleEn": "Sans Famille",
      "titleJa": "家なき子レミ",
      "score": 7.9
    },
    {
      "titleEn": "Baby and Me",
      "titleJa": "赤ちゃんと僕",
      "score": 7.82
    },
    {
      "titleEn": "Kochira Katsushikaku Kameari Kouenmae Hashutsujo",
      "titleJa": "こちら葛飾区亀有公園前派出所 (1996)",
      "score": 7.78
    },
    {
      "titleEn": "The Vision of Escaflowne",
      "titleJa": "天空のエスカフローネ",
      "score": 7.65
    },
    {
      "titleEn": "Hana Yori Dango",
      "titleJa": "花より男子",
      "score": 7.57
    },
    {
      "titleEn": "You're Under Arrest (1996)",
      "titleJa": "逮捕しちゃうぞ (1996)",
      "score": 7.54
    }
  ],
  "1997": [
    {
      "titleEn": "Princess Mononoke",
      "titleJa": "もののけ姫",
      "score": 8.67
    },
    {
      "titleEn": "Berserk",
      "titleJa": "剣風伝奇ベルセルク",
      "score": 8.6
    },
    {
      "titleEn": "Neon Genesis Evangelion: The End of Evangelion",
      "titleJa": "新世紀エヴァンゲリオン劇場版 Air / まごころを, 君に",
      "score": 8.56
    },
    {
      "titleEn": "Revolutionary Girl Utena",
      "titleJa": "少女革命ウテナ",
      "score": 8.22
    },
    {
      "titleEn": "The File of Young Kindaichi",
      "titleJa": "金田一少年の事件簿",
      "score": 7.94
    },
    {
      "titleEn": "Case Closed Movie 01: The Time Bombed Skyscraper",
      "titleJa": "名探偵コナン 時計じかけの摩天楼",
      "score": 7.86
    },
    {
      "titleEn": "King of Braves GaoGaiGar",
      "titleJa": "勇者王ガオガイガー",
      "score": 7.83
    },
    {
      "titleEn": "The Dog of Flanders",
      "titleJa": "フランダースの犬 (1997)",
      "score": 7.81
    },
    {
      "titleEn": "Slayers Try",
      "titleJa": "スレイヤーズ TRY",
      "score": 7.8
    },
    {
      "titleEn": "Mobile Suit Gundam Wing: Endless Waltz",
      "titleJa": "新機動戦記ガンダムW エンドレス・ワルツ",
      "score": 7.73
    },
    {
      "titleEn": "Cooking Master Boy",
      "titleJa": "中華一番",
      "score": 7.6
    },
    {
      "titleEn": "Samurai X: The Motion Picture",
      "titleJa": "るろうに剣心 -明治剣客浪漫譚- 維新志士への鎮魂歌",
      "score": 7.55
    }
  ],
  "1998": [
    {
      "titleEn": "Cowboy Bebop",
      "titleJa": "カウボーイビバップ",
      "score": 8.75
    },
    {
      "titleEn": "Perfect Blue",
      "titleJa": "パーフェクトブルー",
      "score": 8.55
    },
    {
      "titleEn": "Initial D First Stage",
      "titleJa": "頭文字〈イニシャル〉D",
      "score": 8.35
    },
    {
      "titleEn": "Trigun",
      "titleJa": "トライガン",
      "score": 8.22
    },
    {
      "titleEn": "Cardcaptor Sakura",
      "titleJa": "カードキャプターさくら",
      "score": 8.18
    },
    {
      "titleEn": "Legend of the Galactic Heroes Gaiden",
      "titleJa": "銀河英雄伝説外伝／千億の星、千億の光",
      "score": 8.13
    },
    {
      "titleEn": "Serial Experiments Lain",
      "titleJa": "シリアルエクスペリメンツレイン",
      "score": 8.09
    },
    {
      "titleEn": "Case Closed Movie 02: The Fourteenth Target",
      "titleJa": "名探偵コナン １４番目の標的",
      "score": 7.88
    },
    {
      "titleEn": "Outlaw Star",
      "titleJa": "星方武侠アウトロースター",
      "score": 7.83
    },
    {
      "titleEn": "Mobile Suit Gundam Wing: Endless Waltz",
      "titleJa": "新機動戦記ガンダムW Endless Waltz 特別篇",
      "score": 7.77
    },
    {
      "titleEn": "Getter Robo: Armageddon",
      "titleJa": "真(チェンジ!!)ゲッターロボ 世界最後の日",
      "score": 7.73
    },
    {
      "titleEn": "Pokémon: The First Movie - Mewtwo Strikes Back",
      "titleJa": "ポケットモンスター ミュウツーの逆襲",
      "score": 7.67
    }
  ],
  "1999": [
    {
      "titleEn": "One Piece",
      "titleJa": "ONE PIECE",
      "score": 8.73
    },
    {
      "titleEn": "Samurai X: Trust and Betrayal",
      "titleJa": "るろうに剣心―明治剣客浪漫譚―追憶編",
      "score": 8.69
    },
    {
      "titleEn": "Great Teacher Onizuka",
      "titleJa": "グレート・ティーチャー・オニヅカ",
      "score": 8.68
    },
    {
      "titleEn": "Hunter x Hunter",
      "titleJa": "HUNTER×HUNTER（ハンター×ハンター）",
      "score": 8.43
    },
    {
      "titleEn": "Initial D Second Stage",
      "titleJa": "頭文字〈イニシャル〉D SECOND STAGE",
      "score": 8.18
    },
    {
      "titleEn": "Legend of the Galactic Heroes Gaiden (1999)",
      "titleJa": "銀河英雄伝説外伝 螺旋迷宮",
      "score": 8.06
    },
    {
      "titleEn": "Case Closed Movie 03: The Last Wizard of the Century",
      "titleJa": "名探偵コナン 世紀末の魔術師",
      "score": 8.03
    },
    {
      "titleEn": "∀ Gundam",
      "titleJa": "∀ガンダム",
      "score": 7.79
    },
    {
      "titleEn": "Digimon: Digital Monsters",
      "titleJa": "デジモンアドベンチャー",
      "score": 7.78
    },
    {
      "titleEn": "Master Keaton OVA",
      "titleJa": "マスターキートン",
      "score": 7.73
    },
    {
      "titleEn": "Revolutionary Girl Utena: The Adolescence of Utena",
      "titleJa": "少女革命ウテナ　アドゥレセンス黙示録",
      "score": 7.68
    },
    {
      "titleEn": "Cardcaptor Sakura The Movie",
      "titleJa": "劇場版 カードキャプターさくら",
      "score": 7.63
    }
  ],
  "2000": [
    {
      "titleEn": "Fighting Spirit",
      "titleJa": "はじめの一歩 THE FIGHTING!",
      "score": 8.78
    },
    {
      "titleEn": "Cardcaptor Sakura Movie 2: The Sealed Card",
      "titleJa": "劇場版 カードキャプターさくら 封印されたカード",
      "score": 8.21
    },
    {
      "titleEn": "GaoGaiGar Final",
      "titleJa": "勇者王ガオガイガーFINAL",
      "score": 8.09
    },
    {
      "titleEn": "FLCL",
      "titleJa": "フリクリ",
      "score": 8.04
    },
    {
      "titleEn": "Case Closed Movie 04: Captured In Her Eyes",
      "titleJa": "瞳の中の暗殺者",
      "score": 8.02
    },
    {
      "titleEn": "Vampire Hunter D: Bloodlust",
      "titleJa": "バンパイアハンターD",
      "score": 7.96
    },
    {
      "titleEn": "InuYasha",
      "titleJa": "犬夜叉",
      "score": 7.87
    },
    {
      "titleEn": "Digimon: The Movie",
      "titleJa": "デジモンアドベンチャー ぼくらのウォーゲーム！",
      "score": 7.8
    },
    {
      "titleEn": "Jin-Roh: The Wolf Brigade",
      "titleJa": "人狼 JIN-ROH",
      "score": 7.78
    },
    {
      "titleEn": "Ghost Stories",
      "titleJa": "学校の怪談",
      "score": 7.75
    },
    {
      "titleEn": "Banner of the Stars",
      "titleJa": "星界の戦旗",
      "score": 7.65
    },
    {
      "titleEn": "Daa! Daa! Daa!",
      "titleJa": "だぁ! だぁ! だぁ!",
      "score": 7.64
    }
  ],
  "2001": [
    {
      "titleEn": "Spirited Away",
      "titleJa": "千と千尋の神隠し",
      "score": 8.77
    },
    {
      "titleEn": "Cowboy Bebop: The Movie",
      "titleJa": "カウボーイビバップ 天国の扉",
      "score": 8.38
    },
    {
      "titleEn": "Case Closed Movie 05: Countdown to Heaven",
      "titleJa": "名探偵コナン 天国へのカウントダウン",
      "score": 8.11
    },
    {
      "titleEn": "Hikaru no Go",
      "titleJa": "ヒカルの碁",
      "score": 8.07
    },
    {
      "titleEn": "Samurai X: Reflection",
      "titleJa": "るろうに剣心 -明治剣客浪漫譚- 星霜編",
      "score": 7.96
    },
    {
      "titleEn": "Initial D Third Stage",
      "titleJa": "頭文字〈イニシャル〉D THIRD STAGE",
      "score": 7.91
    },
    {
      "titleEn": "The Prince of Tennis",
      "titleJa": "テニスの王子様",
      "score": 7.85
    },
    {
      "titleEn": "Haré+Guu",
      "titleJa": "ジャングルはいつもハレのちグゥ",
      "score": 7.8
    },
    {
      "titleEn": "Banner of the Stars II",
      "titleJa": "星界の戦旗 II",
      "score": 7.77
    },
    {
      "titleEn": "Shaman King",
      "titleJa": "シャーマンキング",
      "score": 7.73
    },
    {
      "titleEn": "Fruits Basket",
      "titleJa": "フルーツバスケット",
      "score": 7.69
    },
    {
      "titleEn": "Digimon Tamers",
      "titleJa": "デジモンテイマーズ",
      "score": 7.65
    }
  ],
  "2002": [
    {
      "titleEn": "Ghost in the Shell: Stand Alone Complex",
      "titleJa": "攻殻機動隊 STAND ALONE COMPLEX",
      "score": 8.42
    },
    {
      "titleEn": "Hunter x Hunter: Original Video Animation",
      "titleJa": "HUNTER×HUNTER Original Video Animation",
      "score": 8.31
    },
    {
      "titleEn": "Case Closed Movie 06: The Phantom of Baker Street",
      "titleJa": "名探偵コナン ベイカー街の亡霊",
      "score": 8.29
    },
    {
      "titleEn": "Millennium Actress",
      "titleJa": "千年女優",
      "score": 8.24
    },
    {
      "titleEn": "Princess Tutu",
      "titleJa": "プリンセスチュチュ",
      "score": 8.14
    },
    {
      "titleEn": "Azumanga Daioh: The Animation",
      "titleJa": "あずまんが大王 THE ANIMATION",
      "score": 8.06
    },
    {
      "titleEn": "Saint Seiya: The Hades Chapter - Sanctuary",
      "titleJa": "聖闘士星矢 冥王ハーデス十二宮編",
      "score": 8.05
    },
    {
      "titleEn": "The Twelve Kingdoms",
      "titleJa": "十二国記",
      "score": 8.01
    },
    {
      "titleEn": "Naruto",
      "titleJa": "ナルト",
      "score": 8.01
    },
    {
      "titleEn": "Haibane Renmei",
      "titleJa": "灰羽連盟",
      "score": 7.98
    },
    {
      "titleEn": "Hanada Shounen-shi",
      "titleJa": "花田少年史",
      "score": 7.98
    },
    {
      "titleEn": "Searching for the Full Moon",
      "titleJa": "満月をさがして",
      "score": 7.93
    }
  ],
  "2003": [
    {
      "titleEn": "Kino's Journey",
      "titleJa": "キノの旅 -the Beautiful World-",
      "score": 8.28
    },
    {
      "titleEn": "Tokyo Godfathers",
      "titleJa": "東京ゴッドファーザーズ",
      "score": 8.28
    },
    {
      "titleEn": "Fighting Spirit: Champion Road",
      "titleJa": "はじめの一歩 -Champion Road-",
      "score": 8.25
    },
    {
      "titleEn": "Planetes",
      "titleJa": "プラネテス",
      "score": 8.25
    },
    {
      "titleEn": "Fighting Spirit: Mashiba vs. Kimura",
      "titleJa": "はじめの一歩 間柴vs木村 死刑執行",
      "score": 8.24
    },
    {
      "titleEn": "Hunter x Hunter: Greed Island",
      "titleJa": "HUNTER×HUNTER Greed Island",
      "score": 8.18
    },
    {
      "titleEn": "Interstella5555: The 5tory of The 5ecret 5tar 5ystem",
      "titleJa": "インターステラ5555",
      "score": 8.13
    },
    {
      "titleEn": "Fullmetal Alchemist",
      "titleJa": "鋼の錬金術師",
      "score": 8.11
    },
    {
      "titleEn": "Fighting Spirit Special",
      "titleJa": "はじめの一歩 THE FIGHTING! ボクサーの拳",
      "score": 8.08
    },
    {
      "titleEn": "Full Metal Panic? Fumoffu",
      "titleJa": "フルメタル・パニック? ふもっふ",
      "score": 8.02
    },
    {
      "titleEn": "Kaleido Star",
      "titleJa": "カレイドスター",
      "score": 7.9
    },
    {
      "titleEn": "Cromartie High School",
      "titleJa": "魁!! クロマティ高校",
      "score": 7.88
    }
  ],
  "2004": [
    {
      "titleEn": "Monster",
      "titleJa": "モンスター",
      "score": 8.89
    },
    {
      "titleEn": "Howl's Moving Castle",
      "titleJa": "ハウルの動く城",
      "score": 8.67
    },
    {
      "titleEn": "Samurai Champloo",
      "titleJa": "サムライチャンプルー",
      "score": 8.52
    },
    {
      "titleEn": "Ghost in the Shell: Stand Alone Complex 2nd GIG",
      "titleJa": "攻殻機動隊 S.A.C. 2nd GIG",
      "score": 8.51
    },
    {
      "titleEn": "Beck: Mongolian Chop Squad",
      "titleJa": "ベック",
      "score": 8.29
    },
    {
      "titleEn": "Hunter x Hunter: Greed Island Final",
      "titleJa": "HUNTER×HUNTER G・I Final",
      "score": 8.25
    },
    {
      "titleEn": "Major S1",
      "titleJa": "メジャー （第1シリーズ）",
      "score": 8.2
    },
    {
      "titleEn": "Initial D Fourth Stage",
      "titleJa": "頭文字〈イニシャル〉D FOURTH STAGE",
      "score": 8.17
    },
    {
      "titleEn": "Gankutsuou: The Count of Monte Cristo",
      "titleJa": "巌窟王",
      "score": 8.11
    },
    {
      "titleEn": "Detective Conan Movie 08: Magician of the Silver Sky",
      "titleJa": "名探偵コナン 銀翼の奇術師[マジシャン]",
      "score": 8.05
    },
    {
      "titleEn": "Wolf's Rain OVA",
      "titleJa": "ウルフズ・レイン",
      "score": 7.98
    },
    {
      "titleEn": "Bleach",
      "titleJa": "BLEACH - ブリーチ -",
      "score": 7.97
    }
  ],
  "2005": [
    {
      "titleEn": "Mushi-Shi",
      "titleJa": "蟲師",
      "score": 8.65
    },
    {
      "titleEn": "Gintama: Jump Festa 2005 Special",
      "titleJa": "銀魂〜何事も最初が肝心なので多少背伸びするくらいが丁度良い〜",
      "score": 8.08
    },
    {
      "titleEn": "Ghost in the Shell: Stand Alone Complex - The Laughing Man",
      "titleJa": "攻殻機動隊 Stand Alone Complex - The Laughing Man",
      "score": 8.06
    },
    {
      "titleEn": "Eureka Seven",
      "titleJa": "交響詩篇エウレカセブン",
      "score": 8.05
    },
    {
      "titleEn": "Glass Mask",
      "titleJa": "ガラスの仮面 (2005)",
      "score": 8.03
    },
    {
      "titleEn": "Honey and Clover",
      "titleJa": "ハチミツとクローバー",
      "score": 7.98
    },
    {
      "titleEn": "Magical Girl Lyrical Nanoha A's",
      "titleJa": "魔法少女リリカルなのは エース",
      "score": 7.95
    },
    {
      "titleEn": "xxxHOLiC The Movie: A Midsummer Night's Dream",
      "titleJa": "劇場版　×××HOLiC　真夏ノ夜ノ夢",
      "score": 7.93
    },
    {
      "titleEn": "Akagi",
      "titleJa": "闘牌伝説アカギ　闇に舞い降りた天才",
      "score": 7.92
    },
    {
      "titleEn": "Eyeshield 21",
      "titleJa": "アイシールド21",
      "score": 7.91
    },
    {
      "titleEn": "Full Metal Panic! The Second Raid",
      "titleJa": "フルメタル パニック！The Second Raid",
      "score": 7.91
    },
    {
      "titleEn": "Paradise Kiss",
      "titleJa": "Paradise kiss",
      "score": 7.87
    }
  ],
  "2006": [
    {
      "titleEn": "Gintama",
      "titleJa": "銀魂",
      "score": 8.93
    },
    {
      "titleEn": "Code Geass: Lelouch of the Rebellion",
      "titleJa": "コードギアス 反逆のルルーシュ",
      "score": 8.7
    },
    {
      "titleEn": "Death Note",
      "titleJa": "デスノート",
      "score": 8.62
    },
    {
      "titleEn": "Nana",
      "titleJa": "NANA [ナナ]",
      "score": 8.56
    },
    {
      "titleEn": "Hellsing Ultimate",
      "titleJa": "HELLSING OVA",
      "score": 8.34
    },
    {
      "titleEn": "Welcome to the N.H.K.",
      "titleJa": "N・H・Kにようこそ！",
      "score": 8.31
    },
    {
      "titleEn": "Major S2",
      "titleJa": "メジャー (第2シリーズ)",
      "score": 8.18
    },
    {
      "titleEn": "Honey and Clover II",
      "titleJa": "ハチミツとクローバー II",
      "score": 8.18
    },
    {
      "titleEn": "Black Lagoon: The Second Barrage",
      "titleJa": "BLACK LAGOON The Second Barrage",
      "score": 8.17
    },
    {
      "titleEn": "Ouran High School Host Club",
      "titleJa": "桜蘭高校ホスト部",
      "score": 8.16
    },
    {
      "titleEn": "Aria the Natural",
      "titleJa": "ARIA The NATURAL",
      "score": 8.16
    },
    {
      "titleEn": "Reborn!",
      "titleJa": "家庭教師ヒットマンREBORN!",
      "score": 8.12
    }
  ],
  "2007": [
    {
      "titleEn": "Gurren Lagann",
      "titleJa": "天元突破グレンラガン",
      "score": 8.64
    },
    {
      "titleEn": "Mononoke",
      "titleJa": "モノノ怪",
      "score": 8.41
    },
    {
      "titleEn": "Baccano!",
      "titleJa": "バッカーノ！",
      "score": 8.35
    },
    {
      "titleEn": "Naruto Shippuden",
      "titleJa": "-ナルト- 疾風伝",
      "score": 8.28
    },
    {
      "titleEn": "Kaiji: Ultimate Survivor",
      "titleJa": "逆境無頼カイジ Ultimate Survivor",
      "score": 8.26
    },
    {
      "titleEn": "Tsubasa RESERVoir CHRoNiCLE: Tokyo Revelations",
      "titleJa": "ツバサ TOKYO REVELATIONS",
      "score": 8.26
    },
    {
      "titleEn": "Nodame Cantabile",
      "titleJa": "のだめカンタービレ",
      "score": 8.25
    },
    {
      "titleEn": "Sword of the Stranger",
      "titleJa": "ストレンヂア -無皇刃譚-",
      "score": 8.25
    },
    {
      "titleEn": "Major S3",
      "titleJa": "メジャー (第3シリーズ)",
      "score": 8.21
    },
    {
      "titleEn": "Higurashi: When They Cry – Kai",
      "titleJa": "ひぐらしのなく頃に解",
      "score": 8.16
    },
    {
      "titleEn": "Moribito - Guardian of the Spirit",
      "titleJa": "精霊の守り人",
      "score": 8.12
    },
    {
      "titleEn": "Mobile Suit Gundam 00",
      "titleJa": "機動戦士ガンダム00",
      "score": 8.1
    }
  ],
  "2008": [
    {
      "titleEn": "Clannad: After Story",
      "titleJa": "CLANNAD〜AFTER STORY〜 クラナド アフターストーリー",
      "score": 8.93
    },
    {
      "titleEn": "Code Geass: Lelouch of the Rebellion R2",
      "titleJa": "コードギアス 反逆のルルーシュ R2",
      "score": 8.91
    },
    {
      "titleEn": "The Garden of Sinners Chapter 5: Paradox Spiral",
      "titleJa": "劇場版 空の境界 the Garden of sinners 第五章『矛盾螺旋』",
      "score": 8.51
    },
    {
      "titleEn": "Aria the Origination",
      "titleJa": "ARIA The ORIGINATION",
      "score": 8.47
    },
    {
      "titleEn": "Gintama: Jump Festa 2008 Special",
      "titleJa": "ジャンプアニメツアー 2008 白夜叉降誕",
      "score": 8.36
    },
    {
      "titleEn": "One Outs",
      "titleJa": "ワンナウツ",
      "score": 8.32
    },
    {
      "titleEn": "Natsume's Book of Friends",
      "titleJa": "夏目友人帳",
      "score": 8.3
    },
    {
      "titleEn": "Spice and Wolf",
      "titleJa": "狼と香辛料",
      "score": 8.21
    },
    {
      "titleEn": "xxxHOLiC◆Kei",
      "titleJa": "×××HOLiC◆継",
      "score": 8.2
    },
    {
      "titleEn": "Major S4",
      "titleJa": "メジャー　（第4シリーズ)",
      "score": 8.18
    },
    {
      "titleEn": "Gurren Lagann The Movie: Childhood's End",
      "titleJa": "劇場版 天元突破グレンラガン 紅蓮篇",
      "score": 8.17
    },
    {
      "titleEn": "Kaiba",
      "titleJa": "カイバ",
      "score": 8.14
    }
  ],
  "2009": [
    {
      "titleEn": "Fullmetal Alchemist: Brotherhood",
      "titleJa": "鋼の錬金術師 FULLMETAL ALCHEMIST",
      "score": 9.1
    },
    {
      "titleEn": "Fighting Spirit: New Challenger",
      "titleJa": "はじめの一歩 新シリーズ",
      "score": 8.67
    },
    {
      "titleEn": "Gurren Lagann The Movie: The Lights in the Sky are Stars",
      "titleJa": "劇場版 天元突破グレンラガン 螺巌篇",
      "score": 8.59
    },
    {
      "titleEn": "Natsume's Book of Friends Season 2",
      "titleJa": "続 夏目友人帳",
      "score": 8.53
    },
    {
      "titleEn": "Major S5",
      "titleJa": "メジャー",
      "score": 8.39
    },
    {
      "titleEn": "Cross Game",
      "titleJa": "クロスゲーム",
      "score": 8.37
    },
    {
      "titleEn": "The Garden of Sinners Chapter 7: A Study in Murder - Part 2",
      "titleJa": "劇場版 空の境界 the Garden of sinners 第七章『殺人考察（後）』",
      "score": 8.37
    },
    {
      "titleEn": "Bakemonogatari",
      "titleJa": "化物語",
      "score": 8.32
    },
    {
      "titleEn": "Evangelion: 2.0 You Can (Not) Advance",
      "titleJa": "ヱヴァンゲリヲン新劇場版:破",
      "score": 8.3
    },
    {
      "titleEn": "Spice and Wolf II",
      "titleJa": "狼と香辛料II",
      "score": 8.3
    },
    {
      "titleEn": "The Beast Player Erin",
      "titleJa": "獣の奏者エリン",
      "score": 8.29
    },
    {
      "titleEn": "Redline",
      "titleJa": "REDLINE",
      "score": 8.29
    }
  ],
  "2010": [
    {
      "titleEn": "The Disappearance of Haruhi Suzumiya",
      "titleJa": "涼宮ハルヒの消失",
      "score": 8.59
    },
    {
      "titleEn": "The Tatami Galaxy",
      "titleJa": "四畳半神話大系",
      "score": 8.55
    },
    {
      "titleEn": "Gintama: The Movie",
      "titleJa": "劇場版 銀魂 新訳紅桜篇",
      "score": 8.52
    },
    {
      "titleEn": "Rainbow",
      "titleJa": "RAINBOW 二舎六房の七人",
      "score": 8.46
    },
    {
      "titleEn": "Katanagatari",
      "titleJa": "刀語",
      "score": 8.3
    },
    {
      "titleEn": "Nodame Cantabile Finale",
      "titleJa": "のだめカンタービレ フィナーレ",
      "score": 8.22
    },
    {
      "titleEn": "K-ON! Season 2",
      "titleJa": "けいおん!!",
      "score": 8.18
    },
    {
      "titleEn": "xxxHOLiC Rou",
      "titleJa": "xxxHOLiC 籠",
      "score": 8.18
    },
    {
      "titleEn": "Bakuman.",
      "titleJa": "バクマン。",
      "score": 8.17
    },
    {
      "titleEn": "Princess Jellyfish",
      "titleJa": "海月姫",
      "score": 8.11
    },
    {
      "titleEn": "Durarara!!",
      "titleJa": "デュラララ!!",
      "score": 8.09
    },
    {
      "titleEn": "Mobile Suit Gundam Unicorn",
      "titleJa": "機動戦士ガンダムUC（ユニコーン）",
      "score": 8.09
    }
  ],
  "2011": [
    {
      "titleEn": "Steins;Gate",
      "titleJa": "STEINS;GATE",
      "score": 9.07
    },
    {
      "titleEn": "Hunter x Hunter",
      "titleJa": "HUNTER×HUNTER（ハンター×ハンター）",
      "score": 9.03
    },
    {
      "titleEn": "Gintama Season 2",
      "titleJa": "銀魂'",
      "score": 9.02
    },
    {
      "titleEn": "Natsume's Book of Friends Season 3",
      "titleJa": "夏目友人帳 参",
      "score": 8.56
    },
    {
      "titleEn": "Nichijou - My Ordinary Life",
      "titleJa": "日常",
      "score": 8.47
    },
    {
      "titleEn": "Puella Magi Madoka Magica",
      "titleJa": "魔法少女まどか★マギカ",
      "score": 8.38
    },
    {
      "titleEn": "K-ON! The Movie",
      "titleJa": "映画 けいおん！",
      "score": 8.35
    },
    {
      "titleEn": "Bakuman. Season 2",
      "titleJa": "バクマン。2ndシーズン",
      "score": 8.33
    },
    {
      "titleEn": "Bunny Drop",
      "titleJa": "うさぎドロップ",
      "score": 8.32
    },
    {
      "titleEn": "Anohana: The Flower We Saw That Day",
      "titleJa": "あの日見た花の名前を僕達はまだ知らない。",
      "score": 8.29
    },
    {
      "titleEn": "Into the Forest of Fireflies' Light",
      "titleJa": "蛍火の杜へ",
      "score": 8.27
    },
    {
      "titleEn": "Fate/Zero",
      "titleJa": "フェイト/ゼロ",
      "score": 8.27
    }
  ],
  "2012": [
    {
      "titleEn": "Gintama: Enchousen",
      "titleJa": "銀魂' 延長戦",
      "score": 9.02
    },
    {
      "titleEn": "Natsume's Book of Friends Season 4",
      "titleJa": "夏目友人帳 肆",
      "score": 8.63
    },
    {
      "titleEn": "Wolf Children",
      "titleJa": "おおかみこどもの雨と雪",
      "score": 8.56
    },
    {
      "titleEn": "Fate/Zero Season 2",
      "titleJa": "フェイト/ゼロ 2ndシーズン",
      "score": 8.54
    },
    {
      "titleEn": "Bakuman. Season 3",
      "titleJa": "バクマン。",
      "score": 8.52
    },
    {
      "titleEn": "Space Brothers",
      "titleJa": "宇宙兄弟",
      "score": 8.48
    },
    {
      "titleEn": "Puella Magi Madoka Magica the Movie Part 2: Eternal",
      "titleJa": "劇場版 魔法少女まどか☆マギカ 永遠の物語",
      "score": 8.37
    },
    {
      "titleEn": "Psycho-Pass",
      "titleJa": "サイコパス",
      "score": 8.33
    },
    {
      "titleEn": "Star Blazers: Space Battleship Yamato 2199",
      "titleJa": "宇宙戦艦ヤマト2199",
      "score": 8.31
    },
    {
      "titleEn": "Steins;Gate: Egoistic Poriomania",
      "titleJa": "シュタインズ ゲート 横行跋扈のポリオマニア",
      "score": 8.29
    },
    {
      "titleEn": "Kids on the Slope",
      "titleJa": "坂道のアポロン",
      "score": 8.29
    },
    {
      "titleEn": "From the New World",
      "titleJa": "新世界より",
      "score": 8.25
    }
  ],
  "2013": [
    {
      "titleEn": "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya",
      "titleJa": "劇場版 銀魂 完結篇 万事屋よ永遠なれ",
      "score": 8.9
    },
    {
      "titleEn": "Monogatari Series: Second Season",
      "titleJa": "〈物語〉シリーズ セカンドシーズン",
      "score": 8.76
    },
    {
      "titleEn": "Fighting Spirit: Rising",
      "titleJa": "はじめの一歩 Rising",
      "score": 8.61
    },
    {
      "titleEn": "Attack on Titan",
      "titleJa": "進撃の巨人",
      "score": 8.56
    },
    {
      "titleEn": "Puella Magi Madoka Magica the Movie: Rebellion",
      "titleJa": "劇場版 魔法少女まどか☆マギカ 叛逆の物語",
      "score": 8.49
    },
    {
      "titleEn": "Steins;Gate: The Movie - Load Region of Déjà Vu",
      "titleJa": "劇場版 シュタインズゲート 負荷領域のデジャヴ",
      "score": 8.45
    },
    {
      "titleEn": "Chihayafuru 2",
      "titleJa": "ちはやふる 2",
      "score": 8.37
    },
    {
      "titleEn": "Berserk: The Golden Age Arc III - The Advent",
      "titleJa": "ベルセルク 黄金時代篇Ⅲ 降臨",
      "score": 8.21
    },
    {
      "titleEn": "The Tale of the Princess Kaguya",
      "titleJa": "かぐや姫の物語",
      "score": 8.21
    },
    {
      "titleEn": "Kuroko's Basketball 2",
      "titleJa": "黒子のバスケ",
      "score": 8.2
    },
    {
      "titleEn": "Magi: The Kingdom of Magic",
      "titleJa": "マギ The kingdom of magic",
      "score": 8.2
    },
    {
      "titleEn": "The Wind Rises",
      "titleJa": "風立ちぬ",
      "score": 8.13
    }
  ],
  "2014": [
    {
      "titleEn": "Mushi-shi: Next Passage Part 2",
      "titleJa": "蟲師 続章",
      "score": 8.72
    },
    {
      "titleEn": "Mushi-shi: Next Passage Part 1",
      "titleJa": "蟲師 続章",
      "score": 8.69
    },
    {
      "titleEn": "Your Lie in April",
      "titleJa": "四月は君の嘘",
      "score": 8.64
    },
    {
      "titleEn": "Ping Pong the Animation",
      "titleJa": "ピンポン THE ANIMATION",
      "score": 8.62
    },
    {
      "titleEn": "Mushi-shi: The Shadow that Devours the Sun",
      "titleJa": "蟲師 特別篇「日蝕む翳」",
      "score": 8.52
    },
    {
      "titleEn": "Haikyu!!",
      "titleJa": "ハイキュー!!",
      "score": 8.44
    },
    {
      "titleEn": "Attack on Titan: No Regrets",
      "titleJa": "進撃の巨人 悔いなき選択",
      "score": 8.41
    },
    {
      "titleEn": "Barakamon",
      "titleJa": "ばらかもん",
      "score": 8.37
    },
    {
      "titleEn": "Parasyte: The Maxim",
      "titleJa": "寄生獣 セイの格率",
      "score": 8.32
    },
    {
      "titleEn": "Silver Spoon 2nd Season",
      "titleJa": "銀の匙",
      "score": 8.27
    },
    {
      "titleEn": "Shirobako",
      "titleJa": "SHIROBAKO",
      "score": 8.27
    },
    {
      "titleEn": "Space Dandy 2nd Season",
      "titleJa": "スペース☆ダンディ 第2シリーズ",
      "score": 8.26
    }
  ],
  "2015": [
    {
      "titleEn": "Gintama Season 4",
      "titleJa": "銀魂°",
      "score": 9.05
    },
    {
      "titleEn": "Haikyu!! 2nd Season",
      "titleJa": "ハイキュー!! セカンドシーズン",
      "score": 8.62
    },
    {
      "titleEn": "One Punch Man",
      "titleJa": "ワンパンマン",
      "score": 8.48
    },
    {
      "titleEn": "Owarimonogatari",
      "titleJa": "終物語",
      "score": 8.45
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
      "titleJa": "ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編",
      "score": 8.44
    },
    {
      "titleEn": "Fate/stay night [Unlimited Blade Works] Season 2",
      "titleJa": "Fate/stay night [Unlimited Blade Works] 2nd シーズン",
      "score": 8.32
    },
    {
      "titleEn": "Ace of Diamond: Second Season",
      "titleJa": "ダイヤのA[エース]～Second Season～",
      "score": 8.3
    },
    {
      "titleEn": "Kuroko's Basketball 3",
      "titleJa": "黒子のバスケ",
      "score": 8.29
    },
    {
      "titleEn": "Steins;Gate: Open the Missing Link - Divide By Zero",
      "titleJa": "シュタインズ・ゲート境界面上のミッシングリンク-Divide By Zero-",
      "score": 8.26
    },
    {
      "titleEn": "Kamisama Kiss Season 2",
      "titleJa": "神様はじめました◎",
      "score": 8.23
    },
    {
      "titleEn": "The Boy and the Beast",
      "titleJa": "バケモノの子",
      "score": 8.23
    },
    {
      "titleEn": "My Teen Romantic Comedy SNAFU TOO!",
      "titleJa": "やはり俺の青春ラブコメはまちがっている。続",
      "score": 8.2
    }
  ],
  "2016": [
    {
      "titleEn": "A Silent Voice",
      "titleJa": "聲の形",
      "score": 8.93
    },
    {
      "titleEn": "Your Name.",
      "titleJa": "君の名は。",
      "score": 8.83
    },
    {
      "titleEn": "Haikyu!! 3rd Season",
      "titleJa": "ハイキュー!! 烏野高校 VS 白鳥沢学園高校",
      "score": 8.77
    },
    {
      "titleEn": "Kizumonogatari Part 2: Hot-Blooded",
      "titleJa": "傷物語〈Ⅱ熱血篇〉",
      "score": 8.56
    },
    {
      "titleEn": "Natsume's Book of Friends Season 5",
      "titleJa": "夏目友人帳 伍",
      "score": 8.56
    },
    {
      "titleEn": "Showa Genroku Rakugo Shinju",
      "titleJa": "昭和元禄落語心中",
      "score": 8.55
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Diamond Is Unbreakable",
      "titleJa": "ジョジョの奇妙な冒険 ダイヤモンドは砕けない",
      "score": 8.5
    },
    {
      "titleEn": "Mob Psycho 100",
      "titleJa": "モブサイコ100",
      "score": 8.49
    },
    {
      "titleEn": "Assassination Classroom Second Season",
      "titleJa": "暗殺教室　第２期",
      "score": 8.47
    },
    {
      "titleEn": "The Disastrous Life of Saiki K.",
      "titleJa": "斉木楠雄のΨ難",
      "score": 8.41
    },
    {
      "titleEn": "March Comes In Like a Lion",
      "titleJa": "3月のライオン",
      "score": 8.37
    },
    {
      "titleEn": "Kizumonogatari Part 1: Iron-Blooded",
      "titleJa": "傷物語〈Ⅰ鉄血篇〉",
      "score": 8.36
    }
  ],
  "2017": [
    {
      "titleEn": "Gintama Season 5",
      "titleJa": "銀魂。",
      "score": 8.98
    },
    {
      "titleEn": "March Comes In Like a Lion 2nd Season",
      "titleJa": "3月のライオン 第2シリーズ",
      "score": 8.9
    },
    {
      "titleEn": "Owarimonogatari Second Season",
      "titleJa": "終物語",
      "score": 8.86
    },
    {
      "titleEn": "Kizumonogatari Part 3: Cold-Blooded",
      "titleJa": "傷物語〈Ⅲ冷血篇〉",
      "score": 8.78
    },
    {
      "titleEn": "Descending Stories: Showa Genroku Rakugo Shinju",
      "titleJa": "昭和元禄落語心中～助六再び篇～",
      "score": 8.7
    },
    {
      "titleEn": "Made in Abyss",
      "titleJa": "メイドインアビス",
      "score": 8.63
    },
    {
      "titleEn": "Natsume's Book of Friends Season 6",
      "titleJa": "夏目友人帳 陸",
      "score": 8.61
    },
    {
      "titleEn": "Attack on Titan Season 2",
      "titleJa": "進撃の巨人 Season2",
      "score": 8.53
    },
    {
      "titleEn": "Gintama. Slip Arc",
      "titleJa": "銀魂。ポロリ編",
      "score": 8.52
    },
    {
      "titleEn": "Land of the Lustrous",
      "titleJa": "宝石の国",
      "score": 8.39
    },
    {
      "titleEn": "KonoSuba: God's Blessing on This Wonderful World! 2",
      "titleJa": "この素晴らしい世界に祝福を！ 2",
      "score": 8.25
    },
    {
      "titleEn": "Black Butler: Book of the Atlantic",
      "titleJa": "劇場版 黒執事 Book of the Atlantic",
      "score": 8.24
    }
  ],
  "2018": [
    {
      "titleEn": "Gintama. Silver Soul Arc - Second Half War",
      "titleJa": "銀魂. 銀ノ魂篇 後半戦",
      "score": 8.88
    },
    {
      "titleEn": "Gintama. Silver Soul Arc",
      "titleJa": "銀魂. 銀ノ魂篇",
      "score": 8.81
    },
    {
      "titleEn": "Violet Evergarden",
      "titleJa": "ヴァイオレット・エヴァーガーデン",
      "score": 8.68
    },
    {
      "titleEn": "Attack on Titan Season 3",
      "titleJa": "進撃の巨人 Season3",
      "score": 8.63
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Golden Wind",
      "titleJa": "ジョジョの奇妙な冒険 黄金の風",
      "score": 8.58
    },
    {
      "titleEn": "I Want To Eat Your Pancreas",
      "titleJa": "君の膵臓をたべたい",
      "score": 8.55
    },
    {
      "titleEn": "Steins;Gate 0",
      "titleJa": "シュタインズ・ゲート ゼロ",
      "score": 8.54
    },
    {
      "titleEn": "A Place Further Than The Universe",
      "titleJa": "宇宙よりも遠い場所",
      "score": 8.51
    },
    {
      "titleEn": "The Master of Diabolism",
      "titleJa": "魔道祖师",
      "score": 8.46
    },
    {
      "titleEn": "Banana Fish",
      "titleJa": "BANANA FISH",
      "score": 8.45
    },
    {
      "titleEn": "Grand Blue Dreaming",
      "titleJa": "ぐらんぶる",
      "score": 8.44
    },
    {
      "titleEn": "The Disastrous Life of Saiki K. 2",
      "titleJa": "斉木楠雄のΨ難 2",
      "score": 8.41
    }
  ],
  "2019": [
    {
      "titleEn": "Attack on Titan Season 3 Part 2",
      "titleJa": "進撃の巨人 Season3 Part.2",
      "score": 9.05
    },
    {
      "titleEn": "Mob Psycho 100 II",
      "titleJa": "モブサイコ100 II",
      "score": 8.78
    },
    {
      "titleEn": "Vinland Saga",
      "titleJa": "ヴィンランド・サガ",
      "score": 8.77
    },
    {
      "titleEn": "Rascal Does Not Dream of a Dreaming Girl",
      "titleJa": "青春ブタ野郎はゆめみる少女の夢を見ない",
      "score": 8.59
    },
    {
      "titleEn": "The Promised Neverland",
      "titleJa": "約束のネバーランド",
      "score": 8.48
    },
    {
      "titleEn": "Fate/stay night: Heaven's Feel - II. Lost Butterfly",
      "titleJa": "劇場版「Fate/stay night [Heaven's Feel] II.lost butterfly」",
      "score": 8.47
    },
    {
      "titleEn": "Demon Slayer: Kimetsu no Yaiba",
      "titleJa": "鬼滅の刃",
      "score": 8.43
    },
    {
      "titleEn": "Zoku Owarimonogatari",
      "titleJa": "続・終物語",
      "score": 8.43
    },
    {
      "titleEn": "Violet Evergarden: Eternity and the Auto Memory Doll",
      "titleJa": "ヴァイオレット・エヴァーガーデン 外伝 -永遠と自動手記人形-",
      "score": 8.42
    },
    {
      "titleEn": "Kono Oto Tomare!: Sounds of Life Season 2",
      "titleJa": "この音とまれ！",
      "score": 8.42
    },
    {
      "titleEn": "KonoSuba: God's Blessing on This Wonderful World! - Legend of Crimson",
      "titleJa": "映画 この素晴らしい世界に祝福を！紅伝説",
      "score": 8.41
    },
    {
      "titleEn": "Saekano the Movie: Finale",
      "titleJa": "冴えない彼女の育てかた Fine",
      "score": 8.41
    }
  ],
  "2020": [
    {
      "titleEn": "Violet Evergarden: The Movie",
      "titleJa": "劇場版 ヴァイオレット・エヴァーガーデン",
      "score": 8.84
    },
    {
      "titleEn": "Kingdom: Season 3",
      "titleJa": "キングダム 第3シリーズ",
      "score": 8.83
    },
    {
      "titleEn": "Fate/stay night: Heaven's Feel - III. Spring Song",
      "titleJa": "劇場版「Fate/stay night [Heaven's Feel] III.spring song」",
      "score": 8.64
    },
    {
      "titleEn": "Kaguya-sama: Love is War?",
      "titleJa": "かぐや様は告らせたい？～天才たちの恋愛頭脳戦～",
      "score": 8.62
    },
    {
      "titleEn": "Made in Abyss: Dawn of the Deep Soul",
      "titleJa": "劇場版メイドインアビス 深き魂の黎明",
      "score": 8.61
    },
    {
      "titleEn": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
      "titleJa": "劇場版 鬼滅の刃 無限列車編",
      "score": 8.56
    },
    {
      "titleEn": "Jujutsu Kaisen",
      "titleJa": "呪術廻戦",
      "score": 8.55
    },
    {
      "titleEn": "Haikyu!! To the Top 2nd-cour",
      "titleJa": "ハイキュー TO THE TOP 第2クール",
      "score": 8.55
    },
    {
      "titleEn": "Fruits Basket 2nd Season",
      "titleJa": "フルーツバスケット 2nd season",
      "score": 8.53
    },
    {
      "titleEn": "Golden Kamuy Season 3",
      "titleJa": "ゴールデンカムイ",
      "score": 8.43
    },
    {
      "titleEn": "Heaven Official's Blessing",
      "titleJa": "天官賜福",
      "score": 8.41
    },
    {
      "titleEn": "Josee, the Tiger and the Fish",
      "titleJa": "ジョゼと虎と魚たち",
      "score": 8.38
    }
  ],
  "2021": [
    {
      "titleEn": "Gintama: The Very Final",
      "titleJa": "銀魂 THE FINAL",
      "score": 9.04
    },
    {
      "titleEn": "Fruits Basket: The Final Season",
      "titleJa": "フルーツバスケット The Final",
      "score": 8.95
    },
    {
      "titleEn": "Attack on Titan: Final Season",
      "titleJa": "進撃の巨人 The Final Season",
      "score": 8.78
    },
    {
      "titleEn": "Link Click",
      "titleJa": "時光代理人",
      "score": 8.72
    },
    {
      "titleEn": "86 Eighty-Six Part 2",
      "titleJa": "86―エイティシックス―",
      "score": 8.72
    },
    {
      "titleEn": "Odd Taxi",
      "titleJa": "オッドタクシー",
      "score": 8.64
    },
    {
      "titleEn": "Mushoku Tensei: Jobless Reincarnation Part 2",
      "titleJa": "無職転生 ～異世界行ったら本気だす～ 第2クール",
      "score": 8.63
    },
    {
      "titleEn": "Evangelion: 3.0+1.0 Thrice Upon a Time",
      "titleJa": "シン・エヴァンゲリオン劇場版𝄇",
      "score": 8.58
    },
    {
      "titleEn": "Laid-Back Camp Season 2",
      "titleJa": "ゆるキャン△ SEASON2",
      "score": 8.5
    },
    {
      "titleEn": "Ranking of Kings",
      "titleJa": "王様ランキング",
      "score": 8.49
    },
    {
      "titleEn": "Re:ZERO -Starting Life in Another World- Season 2 Part 2",
      "titleJa": "Re：ゼロから始める異世界生活",
      "score": 8.42
    },
    {
      "titleEn": "Jujutsu Kaisen 0",
      "titleJa": "劇場版 呪術廻戦 0",
      "score": 8.4
    }
  ],
  "2022": [
    {
      "titleEn": "Bleach: Thousand-Year Blood War",
      "titleJa": "BLEACH 千年血戦篇",
      "score": 8.99
    },
    {
      "titleEn": "Kaguya-sama: Love is War -Ultra Romantic-",
      "titleJa": "かぐや様は告らせたい-ウルトラロマンティック-",
      "score": 8.98
    },
    {
      "titleEn": "Attack on Titan: Final Season Part 2",
      "titleJa": "進撃の巨人 The Final Season Part 2",
      "score": 8.76
    },
    {
      "titleEn": "Bocchi the Rock!",
      "titleJa": "ぼっち・ざ・ろっく！",
      "score": 8.75
    },
    {
      "titleEn": "Kaguya-sama: Love is War -The First Kiss That Never Ends-",
      "titleJa": "かぐや様は告らせたい -ファーストキッスは終わらない-",
      "score": 8.73
    },
    {
      "titleEn": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      "titleJa": "鬼滅の刃 遊郭編",
      "score": 8.72
    },
    {
      "titleEn": "Mob Psycho 100 III",
      "titleJa": "モブサイコ100 III",
      "score": 8.71
    },
    {
      "titleEn": "Cyberpunk: Edgerunners",
      "titleJa": "サイバーパンク エッジランナーズ",
      "score": 8.61
    },
    {
      "titleEn": "Made in Abyss: The Golden City of the Scorching Sun",
      "titleJa": "メイドインアビス 烈日の黄金郷",
      "score": 8.61
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Stone Ocean Part 3",
      "titleJa": "ジョジョの奇妙な冒険 ストーンオーシャン",
      "score": 8.52
    },
    {
      "titleEn": "Summer Time Rendering",
      "titleJa": "サマータイムレンダ",
      "score": 8.47
    },
    {
      "titleEn": "Spy x Family",
      "titleJa": "SPY×FAMILY",
      "score": 8.46
    }
  ],
  "2023": [
    {
      "titleEn": "Frieren: Beyond Journey's End",
      "titleJa": "葬送のフリーレン",
      "score": 9.3
    },
    {
      "titleEn": "The Apothecary Diaries",
      "titleJa": "薬屋のひとりごと",
      "score": 8.87
    },
    {
      "titleEn": "Attack on Titan: Final Season - The Final Chapters",
      "titleJa": "進撃の巨人 The Final Season完結編",
      "score": 8.86
    },
    {
      "titleEn": "Vinland Saga Season 2",
      "titleJa": "ヴィンランド・サガ SEASON2",
      "score": 8.81
    },
    {
      "titleEn": "Jujutsu Kaisen Season 2",
      "titleJa": "呪術廻戦 懐玉・玉折／渋谷事変",
      "score": 8.75
    },
    {
      "titleEn": "Bleach: Thousand-Year Blood War - The Separation",
      "titleJa": "BLEACH 千年血戦篇-訣別譚-",
      "score": 8.7
    },
    {
      "titleEn": "Link Click Season 2",
      "titleJa": "时光代理人 第二季",
      "score": 8.65
    },
    {
      "titleEn": "Bungo Stray Dogs 5",
      "titleJa": "文豪ストレイドッグス",
      "score": 8.62
    },
    {
      "titleEn": "[Oshi No Ko]",
      "titleJa": "【推しの子】",
      "score": 8.57
    },
    {
      "titleEn": "Pluto",
      "titleJa": "プルートウ",
      "score": 8.45
    },
    {
      "titleEn": "Bungo Stray Dogs 4",
      "titleJa": "文豪ストレイドッグス",
      "score": 8.43
    },
    {
      "titleEn": "Rascal Does Not Dream of a Knapsack Kid",
      "titleJa": "青春ブタ野郎はランドセルガールの夢を見ない",
      "score": 8.33
    }
  ],
  "2024": [
    {
      "titleEn": "One Piece Fan Letter",
      "titleJa": "ONE PIECE FAN LETTER",
      "score": 9.04
    },
    {
      "titleEn": "The Dangers in My Heart Season 2",
      "titleJa": "僕の心のヤバイやつ 第2期",
      "score": 8.74
    },
    {
      "titleEn": "Orb: On the Movements of the Earth",
      "titleJa": "チ。―地球の運動について―",
      "score": 8.71
    },
    {
      "titleEn": "Monogatari Series: Off & Monster Season",
      "titleJa": "〈物語〉シリーズ オフ&モンスターシーズン",
      "score": 8.67
    },
    {
      "titleEn": "Bleach: Thousand-Year Blood War - The Conflict",
      "titleJa": "BLEACH 千年血戦篇-相剋譚-",
      "score": 8.67
    },
    {
      "titleEn": "Look Back",
      "titleJa": "ルックバック",
      "score": 8.64
    },
    {
      "titleEn": "Haikyu!! Movie: The Dumpster Battle",
      "titleJa": "劇場版ハイキュー!! ゴミ捨て場の決戦",
      "score": 8.61
    },
    {
      "titleEn": "Delicious in Dungeon",
      "titleJa": "ダンジョン飯",
      "score": 8.6
    },
    {
      "titleEn": "[Oshi No Ko] Season 2",
      "titleJa": "【推しの子】第2期",
      "score": 8.57
    },
    {
      "titleEn": "Dan Da Dan",
      "titleJa": "ダンダダン",
      "score": 8.5
    },
    {
      "titleEn": "Kimi ni Todoke: From Me to You Season 3",
      "titleJa": "君に届け3RD SEASON",
      "score": 8.47
    },
    {
      "titleEn": "Re:ZERO -Starting Life in Another World- Season 3",
      "titleJa": "Re:ゼロから始める異世界生活 3rd season",
      "score": 8.46
    }
  ]
}

// Helper function to get anime title by language
export const getAnimeTitle = (anime: AnimeItem, language: Language): string => {
  if (language === "ja") return anime.titleJa
  return anime.titleEn
}

export default data

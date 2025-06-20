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
      "titleEn": "Bosco Adventure",
      "titleJa": "ボスコアドベンチャー",
      "score": 7.01
    },
    {
      "titleEn": "Ai Shoujo Pollyanna Story",
      "titleJa": "愛少女ポリアンナ物語",
      "score": 6.95
    },
    {
      "titleEn": "Maple Town",
      "titleJa": "メイプルタウン物語",
      "score": 6.86
    },
    {
      "titleEn": "Fight! Kickers",
      "titleJa": "がんばれ！キッカーズ",
      "score": 6.86
    },
    {
      "titleEn": "Uchuusen Sagittarius",
      "titleJa": "宇宙船サジタリウス",
      "score": 6.84
    },
    {
      "titleEn": "The Wonderful Wizard of Oz",
      "titleJa": "オズの魔法使い",
      "score": 6.7
    },
    {
      "titleEn": "Mobile Suit Gundam ZZ",
      "titleJa": "機動戦士ガンダムZZ",
      "score": 6.67
    },
    {
      "titleEn": "Princess Anmitsu",
      "titleJa": "あんみつ姫",
      "score": 6.6
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
      "titleEn": "The Three Musketeers",
      "titleJa": "アニメ三銃士",
      "score": 7.11
    },
    {
      "titleEn": "Mister Ajikko",
      "titleJa": "ミスター味っ子",
      "score": 7.11
    },
    {
      "titleEn": "Sunny Ryoko",
      "titleJa": "陽あたり良好！",
      "score": 7.02
    },
    {
      "titleEn": "Ox Tales",
      "titleJa": "げらげらブース物語",
      "score": 7.02
    },
    {
      "titleEn": "Palm Town",
      "titleJa": "新メイプルタウン物語 パームタウン編",
      "score": 6.87
    },
    {
      "titleEn": "Metal Armor Dragonar",
      "titleJa": "機甲戦記ドラグナー",
      "score": 6.72
    }
  ],
  "1988": [
    {
      "titleEn": "City Hunter 2",
      "titleJa": "シティーハンター2",
      "score": 8.07
    },
    {
      "titleEn": "Hello! Lady Lynn",
      "titleJa": "ハロー! レディリン",
      "score": 7.53
    },
    {
      "titleEn": "Charge!! Men's Private School",
      "titleJa": "魁!!男塾",
      "score": 7.42
    },
    {
      "titleEn": "Little Lord Fauntleroy",
      "titleJa": "小公子セディ",
      "score": 7.33
    },
    {
      "titleEn": "Grimm's Fairy Tale Classics",
      "titleJa": "新グリム名作劇場",
      "score": 7.3
    },
    {
      "titleEn": "Iron Fist Chinmi",
      "titleJa": "鉄拳チンミ",
      "score": 7.25
    },
    {
      "titleEn": "Samurai Troopers",
      "titleJa": "鎧伝サムライトルーパー",
      "score": 7.07
    },
    {
      "titleEn": "Little Baldy Hagemaru",
      "titleJa": "つるピカハゲ丸くん",
      "score": 7.01
    },
    {
      "titleEn": "Oishinbo",
      "titleJa": "美味しんぼ",
      "score": 6.99
    },
    {
      "titleEn": "Mashin Eiyuuden Wataru",
      "titleJa": "魔神英雄伝ワタル",
      "score": 6.94
    },
    {
      "titleEn": "Kiteretsu Encyclopedia",
      "titleJa": "キテレツ大百科",
      "score": 6.89
    },
    {
      "titleEn": "Osomatsu-kun (1988)",
      "titleJa": "おそ松くん",
      "score": 6.79
    }
  ],
  "1989": [
    {
      "titleEn": "Dragon Ball Z",
      "titleJa": "ドラゴンボールZ",
      "score": 8.2
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
      "titleEn": "Yawara!",
      "titleJa": "YAWARA!",
      "score": 7.48
    },
    {
      "titleEn": "Alfred J. Kwak",
      "titleJa": "小さなアヒルの大きな愛の物語 あひるのクワック",
      "score": 7.37
    },
    {
      "titleEn": "Time Quest",
      "titleJa": "たいむとらぶる トンデケマン!",
      "score": 7.35
    },
    {
      "titleEn": "Miracle Giants Doumu-kun",
      "titleJa": "ミラクル・ジャイアンツ童夢くん",
      "score": 7.23
    },
    {
      "titleEn": "Mado King Granzort",
      "titleJa": "魔動王グランゾート",
      "score": 7.2
    },
    {
      "titleEn": "Tenkuu Senki Shurato",
      "titleJa": "天空戦記シュラト",
      "score": 7.18
    },
    {
      "titleEn": "The Jungle Book",
      "titleJa": "ジャングルブック・少年モーグリ",
      "score": 6.99
    },
    {
      "titleEn": "Legendary Idol Eriko",
      "titleJa": "アイドル伝説えり子",
      "score": 6.89
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
      "titleEn": "Nadia: The Secret of Blue Water",
      "titleJa": "ふしぎの海のナディア",
      "score": 7.5
    },
    {
      "titleEn": "The Great Adventures of Robin Hood",
      "titleJa": "ロビンフッドの大冒険",
      "score": 7.11
    },
    {
      "titleEn": "Samurai Pizza Cats",
      "titleJa": "キャッ党忍伝てやんでえ",
      "score": 7.03
    },
    {
      "titleEn": "NG Knight Ramune & 40",
      "titleJa": "NG騎士ラムネ＆４０",
      "score": 7.02
    },
    {
      "titleEn": "The Three-Eyed One",
      "titleJa": "三つ目がとおる",
      "score": 6.96
    },
    {
      "titleEn": "Pygmalio",
      "titleJa": "ピグマリオ",
      "score": 6.93
    },
    {
      "titleEn": "Magical★Taruruuto-kun",
      "titleJa": "まじかる☆タルるートくん",
      "score": 6.88
    },
    {
      "titleEn": "Dragon Warrior",
      "titleJa": "ドラゴンクエスト～勇者アベル伝説～",
      "score": 6.86
    },
    {
      "titleEn": "Spirit Hero Wataru 2",
      "titleJa": "魔神英雄伝ワタル2",
      "score": 6.78
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
      "titleEn": "Goldfish Warning!",
      "titleJa": "きんぎょ注意報！",
      "score": 7.14
    },
    {
      "titleEn": "The Secret Garden",
      "titleJa": "アニメ ひみつの花園",
      "score": 7.09
    },
    {
      "titleEn": "The Two Lottes",
      "titleJa": "わたしとわたし～ふたりのロッテ",
      "score": 7.06
    },
    {
      "titleEn": "The Mischevious Twins",
      "titleJa": "おちゃめな双子　－クレア学院物語－",
      "score": 7.05
    }
  ],
  "1992": [
    {
      "titleEn": "Yu Yu Hakusho: Ghost Files",
      "titleJa": "幽☆遊☆白書",
      "score": 8.46
    },
    {
      "titleEn": "Shin Chan",
      "titleJa": "クレヨンしんちゃん",
      "score": 7.81
    },
    {
      "titleEn": "Sailor Moon",
      "titleJa": "美少女戦士セーラームーン",
      "score": 7.74
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
      "titleEn": "Mama is Just a Fourth Grade Pupil",
      "titleJa": "ママは小学４年生",
      "score": 7.33
    },
    {
      "titleEn": "Mikan Enikki",
      "titleJa": "みかん絵日記",
      "score": 7.18
    },
    {
      "titleEn": "Legendary Brave da Garn",
      "titleJa": "伝説の勇者ダ・ガーン",
      "score": 7.12
    },
    {
      "titleEn": "A Dog of Flanders: My Patrasche",
      "titleJa": "フランダースの犬　～ぼくのパトラッシュ～",
      "score": 7.05
    },
    {
      "titleEn": "Kaze no Naka no Shoujo: Kinpatsu no Jeanie",
      "titleJa": "風の中の少女 金髪のジェニー",
      "score": 7.04
    },
    {
      "titleEn": "Energetic Bomb Ganbaruger",
      "titleJa": "元気爆発ガンバルガー",
      "score": 7.01
    },
    {
      "titleEn": "Bush Baby, Little Angel of the Great Plains",
      "titleJa": "大草原の小さな天使　ブッシュベイビー",
      "score": 7
    }
  ],
  "1993": [
    {
      "titleEn": "Slam Dunk",
      "titleJa": "スラムダンク",
      "score": 8.55
    },
    {
      "titleEn": "The Irresponsible Captain Tylor",
      "titleJa": "無責任艦長タイラー",
      "score": 7.84
    },
    {
      "titleEn": "Sailor Moon R",
      "titleJa": "美少女戦士セーラームーン R",
      "score": 7.73
    },
    {
      "titleEn": "Little Women II: Jo's Boys",
      "titleJa": "若草物語ナンとジョー先生",
      "score": 7.55
    },
    {
      "titleEn": "Blue Legend Shoot!",
      "titleJa": "蒼き伝説　シュート！",
      "score": 7.38
    },
    {
      "titleEn": "Ghost Sweeper Mikami",
      "titleJa": "GS（ゴーストスイーパー）美神",
      "score": 7.23
    },
    {
      "titleEn": "Miracle☆Girls",
      "titleJa": "ミラクル☆ガールズ",
      "score": 7.17
    },
    {
      "titleEn": "Shippuu! Iron Leaguer",
      "titleJa": "疾風！ アイアンリーガー",
      "score": 7.14
    },
    {
      "titleEn": "Legendary Brave Swordsman Yaiba",
      "titleJa": "剣勇伝説ＹＡＩＢＡ",
      "score": 7.12
    },
    {
      "titleEn": "Nekketsu Saikyou Go-Saurer",
      "titleJa": "熱血最強ゴウザウラー",
      "score": 7.09
    },
    {
      "titleEn": "Nintama Rantarou",
      "titleJa": "忍たま乱太郎",
      "score": 7.08
    },
    {
      "titleEn": "Yuusha Tokkyuu Might Gaine",
      "titleJa": "勇者特急マイトガイン",
      "score": 7.05
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
      "titleEn": "Magic Knight Rayearth",
      "titleJa": "魔法騎士（マジックナイト）レイアース",
      "score": 7.45
    },
    {
      "titleEn": "Brave Police J-Decker",
      "titleJa": "勇者警察ジェイデッカー",
      "score": 7.42
    },
    {
      "titleEn": "Red Riding Hood Chacha",
      "titleJa": "赤ずきんチャチャ",
      "score": 7.41
    },
    {
      "titleEn": "Marmalade Boy",
      "titleJa": "ママレード・ボーイ",
      "score": 7.41
    },
    {
      "titleEn": "Tottemo! Luckyman",
      "titleJa": "とっても！ラッキーマン",
      "score": 7.4
    },
    {
      "titleEn": "Tico and Friends",
      "titleJa": "七つの海のティコ",
      "score": 7.37
    },
    {
      "titleEn": "Captain Tsubasa J",
      "titleJa": "キャプテン翼Ｊ",
      "score": 7.28
    },
    {
      "titleEn": "Macross 7",
      "titleJa": "マクロス７",
      "score": 7.13
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
      "titleEn": "Slayers",
      "titleJa": "スレイヤーズ",
      "score": 7.72
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
      "titleEn": "Mysterious Play",
      "titleJa": "ふしぎ遊戯",
      "score": 7.6
    },
    {
      "titleEn": "Mysterious Thief Saint Tail",
      "titleJa": "怪盗セイント・テール",
      "score": 7.54
    },
    {
      "titleEn": "Magic Knight Rayearth II",
      "titleJa": "魔法騎士（マジックナイト）レイアース II",
      "score": 7.49
    },
    {
      "titleEn": "The Ping-Pong Club",
      "titleJa": "行け! 稲中卓球部",
      "score": 7.49
    },
    {
      "titleEn": "Tenchi Muyo! Tenchi Universe",
      "titleJa": "天地無用！",
      "score": 7.42
    },
    {
      "titleEn": "Little Miss Maruko",
      "titleJa": "ちびまる子ちゃん",
      "score": 7.36
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
    },
    {
      "titleEn": "Hell Teacher Nube",
      "titleJa": "地獄先生ぬ～べ～",
      "score": 7.53
    }
  ],
  "1997": [
    {
      "titleEn": "Berserk",
      "titleJa": "剣風伝奇ベルセルク",
      "score": 8.6
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
      "titleEn": "King of Braves GaoGaiGar",
      "titleJa": "勇者王ガオガイガー",
      "score": 7.83
    },
    {
      "titleEn": "Slayers Try",
      "titleJa": "スレイヤーズ TRY",
      "score": 7.8
    },
    {
      "titleEn": "Cooking Master Boy",
      "titleJa": "中華一番",
      "score": 7.6
    },
    {
      "titleEn": "Pokémon",
      "titleJa": "ポケットモンスター",
      "score": 7.41
    },
    {
      "titleEn": "Flame of Recca",
      "titleJa": "烈火の炎",
      "score": 7.34
    },
    {
      "titleEn": "Crayon Kingdom of Dreams",
      "titleJa": "夢のクレヨン王国",
      "score": 7.24
    },
    {
      "titleEn": "Vampire Princess Miyu",
      "titleJa": "吸血姫美夕",
      "score": 7.12
    },
    {
      "titleEn": "Bakusou Kyoudai Let's & Go WGP",
      "titleJa": "爆走兄弟レッツ＆ゴー!!　ＷＧＰ",
      "score": 7.04
    },
    {
      "titleEn": "Super Demon Hero Wataru",
      "titleJa": "超魔神英雄伝ワタル",
      "score": 7.01
    }
  ],
  "1998": [
    {
      "titleEn": "Cowboy Bebop",
      "titleJa": "カウボーイビバップ",
      "score": 8.75
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
      "titleEn": "Serial Experiments Lain",
      "titleJa": "シリアルエクスペリメンツレイン",
      "score": 8.09
    },
    {
      "titleEn": "Outlaw Star",
      "titleJa": "星方武侠アウトロースター",
      "score": 7.83
    },
    {
      "titleEn": "Sexy Commando Gaiden: Sugoi yo!! Masaru-san",
      "titleJa": "セクシーコマンドー外伝 すごいよ!! マサルさん",
      "score": 7.61
    },
    {
      "titleEn": "Master Keaton",
      "titleJa": "マスターキートン",
      "score": 7.61
    },
    {
      "titleEn": "His and Her Circumstances",
      "titleJa": "彼氏彼女の事情",
      "score": 7.6
    },
    {
      "titleEn": "Saber Marionette J to X",
      "titleJa": "セイバーマリオネットJ to X",
      "score": 7.27
    },
    {
      "titleEn": "Legend of Basara",
      "titleJa": "LEGEND OF BASARA",
      "score": 7.26
    },
    {
      "titleEn": "Yu☆Gi☆Oh!",
      "titleJa": "遊☆戯☆王",
      "score": 7.24
    }
  ],
  "1999": [
    {
      "titleEn": "One Piece",
      "titleJa": "ONE PIECE",
      "score": 8.73
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
      "titleEn": "Crest of the Stars",
      "titleJa": "星界の紋章",
      "score": 7.62
    },
    {
      "titleEn": "Now and Then, Here and There",
      "titleJa": "今、そこにいる僕",
      "score": 7.58
    },
    {
      "titleEn": "The Big O",
      "titleJa": "THEビッグオー",
      "score": 7.53
    },
    {
      "titleEn": "Excel Saga",
      "titleJa": "へっぽこ実験アニメーション エクセル♥サーガ",
      "score": 7.48
    },
    {
      "titleEn": "Kamikaze Kaitou Jeanne",
      "titleJa": "神風怪盗ジャンヌ",
      "score": 7.47
    },
    {
      "titleEn": "Gokudo",
      "titleJa": "ゴクドーくん漫遊記",
      "score": 7.4
    }
  ],
  "2000": [
    {
      "titleEn": "Fighting Spirit",
      "titleJa": "はじめの一歩 THE FIGHTING!",
      "score": 8.78
    },
    {
      "titleEn": "InuYasha",
      "titleJa": "犬夜叉",
      "score": 7.87
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
    },
    {
      "titleEn": "Saiyuki",
      "titleJa": "幻想魔伝 最遊記",
      "score": 7.54
    },
    {
      "titleEn": "Shoubushi Densetsu Tetsuya",
      "titleJa": "勝負師伝説哲也",
      "score": 7.51
    },
    {
      "titleEn": "Yu-Gi-Oh!",
      "titleJa": "遊☆戯☆王　デュエルモンスターズ",
      "score": 7.5
    },
    {
      "titleEn": "Ojamajo Doremi Sharp",
      "titleJa": "おジャ魔女どれみ＃",
      "score": 7.46
    },
    {
      "titleEn": ".Koni-chan",
      "titleJa": "ドッとKONIちゃん",
      "score": 7.29
    },
    {
      "titleEn": "Popee the Clown",
      "titleJa": "POPEE the ぱフォーマー",
      "score": 7.27
    },
    {
      "titleEn": "Digimon Adventure 02",
      "titleJa": "デジモンアドベンチャー０２",
      "score": 7.24
    }
  ],
  "2001": [
    {
      "titleEn": "Hikaru no Go",
      "titleJa": "ヒカルの碁",
      "score": 8.07
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
    },
    {
      "titleEn": "Hellsing",
      "titleJa": "Hellsing [ヘルシング]",
      "score": 7.49
    },
    {
      "titleEn": "Baki the Grappler: Saidai Tournament-hen",
      "titleJa": "グラップラー刃牙(バキ) 最大トーナメント編",
      "score": 7.48
    },
    {
      "titleEn": "Motto! Ojamajo Doremi",
      "titleJa": "も〜っと！おジャ魔女どれみ",
      "score": 7.47
    },
    {
      "titleEn": "Captain Tsubasa",
      "titleJa": "キャプテン翼 (2001)",
      "score": 7.46
    },
    {
      "titleEn": "Baki the Grappler",
      "titleJa": "グラップラー刃牙",
      "score": 7.45
    }
  ],
  "2002": [
    {
      "titleEn": "Ghost in the Shell: Stand Alone Complex",
      "titleJa": "攻殻機動隊 STAND ALONE COMPLEX",
      "score": 8.42
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
    },
    {
      "titleEn": "Ojamajo Doremi Dokkaan!",
      "titleJa": "おジャ魔女どれみドッカ〜ン！",
      "score": 7.74
    },
    {
      "titleEn": "Mobile Suit Gundam SEED",
      "titleJa": "機動戦士ガンダムSEED",
      "score": 7.74
    },
    {
      "titleEn": "Full Metal Panic!",
      "titleJa": "フルメタル・パニック！",
      "score": 7.59
    },
    {
      "titleEn": "Getbackers",
      "titleJa": "ゲットバッカーズ　奪還屋",
      "score": 7.57
    }
  ],
  "2003": [
    {
      "titleEn": "Kino's Journey",
      "titleJa": "キノの旅 -the Beautiful World-",
      "score": 8.28
    },
    {
      "titleEn": "Planetes",
      "titleJa": "プラネテス",
      "score": 8.25
    },
    {
      "titleEn": "Fullmetal Alchemist",
      "titleJa": "鋼の錬金術師",
      "score": 8.11
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
    },
    {
      "titleEn": "Gungrave",
      "titleJa": "ガングレイヴ",
      "score": 7.81
    },
    {
      "titleEn": "Wolf's Rain",
      "titleJa": "ウルフズレイン",
      "score": 7.79
    },
    {
      "titleEn": "Last Exile",
      "titleJa": "LAST EXILE（ラストエグザイル）",
      "score": 7.78
    },
    {
      "titleEn": "Texhnolyze",
      "titleJa": "TEXHNOLYZE",
      "score": 7.75
    },
    {
      "titleEn": "Detective School Q",
      "titleJa": "探偵学園Q",
      "score": 7.73
    },
    {
      "titleEn": "Mujin Wakusei Survive",
      "titleJa": "無人惑星サヴァイヴ",
      "score": 7.72
    }
  ],
  "2004": [
    {
      "titleEn": "Monster",
      "titleJa": "モンスター",
      "score": 8.89
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
      "titleEn": "Bleach",
      "titleJa": "BLEACH - ブリーチ -",
      "score": 7.97
    },
    {
      "titleEn": "Yakitate!! Japan",
      "titleJa": "焼きたて!! ジャぱん",
      "score": 7.91
    },
    {
      "titleEn": "School Rumble",
      "titleJa": "スクールランブル",
      "score": 7.88
    },
    {
      "titleEn": "Sgt. Frog",
      "titleJa": "ケロロ軍曹",
      "score": 7.7
    },
    {
      "titleEn": "Paranoia Agent",
      "titleJa": "妄想代理人",
      "score": 7.66
    }
  ],
  "2005": [
    {
      "titleEn": "Mushi-Shi",
      "titleJa": "蟲師",
      "score": 8.65
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
    },
    {
      "titleEn": "Capeta",
      "titleJa": "カペタ",
      "score": 7.82
    },
    {
      "titleEn": "Doraemon (2005)",
      "titleJa": "ドラえもん (2005)",
      "score": 7.73
    },
    {
      "titleEn": "The Law of Ueki",
      "titleJa": "うえきの法則",
      "score": 7.71
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
    },
    {
      "titleEn": "KenIchi: The Mightiest Disciple",
      "titleJa": "史上最強の弟子 ケンイチ",
      "score": 8.04
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
      "titleEn": "Nodame Cantabile",
      "titleJa": "のだめカンタービレ",
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
    },
    {
      "titleEn": "Darker than Black",
      "titleJa": "Darker than BLACK -黒の契約者-",
      "score": 8.04
    },
    {
      "titleEn": "Lovely Complex",
      "titleJa": "ラブ★コン",
      "score": 8.03
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
      "titleEn": "Aria the Origination",
      "titleJa": "ARIA The ORIGINATION",
      "score": 8.47
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
      "titleEn": "Kaiba",
      "titleJa": "カイバ",
      "score": 8.14
    },
    {
      "titleEn": "Nodame Cantabile: Paris-hen",
      "titleJa": "のだめカンタービレ 巴里編",
      "score": 8.13
    },
    {
      "titleEn": "Skip Beat!",
      "titleJa": "スキップ・ビート！",
      "score": 8.07
    },
    {
      "titleEn": "Mobile Suit Gundam 00: Second Season",
      "titleJa": "機動戦士ガンダム00 セカンドシーズン",
      "score": 8.07
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
      "titleEn": "Bakemonogatari",
      "titleJa": "化物語",
      "score": 8.32
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
      "titleEn": "InuYasha: The Final Act",
      "titleJa": "犬夜叉 完結編",
      "score": 8.2
    },
    {
      "titleEn": "Kimi ni Todoke: From Me to You",
      "titleJa": "君に届け",
      "score": 8.01
    },
    {
      "titleEn": "Tokyo Magnitude 8.0",
      "titleJa": "東京マグニチュード8.0",
      "score": 8
    },
    {
      "titleEn": "Kobato.",
      "titleJa": "こばと。",
      "score": 7.94
    }
  ],
  "2010": [
    {
      "titleEn": "The Tatami Galaxy",
      "titleJa": "四畳半神話大系",
      "score": 8.55
    },
    {
      "titleEn": "Rainbow",
      "titleJa": "RAINBOW 二舎六房の七人",
      "score": 8.46
    },
    {
      "titleEn": "Major S6",
      "titleJa": "メジャー 第6シリーズ",
      "score": 8.31
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
      "titleEn": "Angel Beats!",
      "titleJa": "Angel Beats!（エンジェルビーツ!）",
      "score": 8.05
    },
    {
      "titleEn": "Maid Sama!",
      "titleJa": "会長はメイド様!",
      "score": 7.99
    },
    {
      "titleEn": "Big Windup! 2",
      "titleJa": "おおきく振りかぶって　〜夏の大会編〜",
      "score": 7.95
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
      "titleEn": "Fate/Zero",
      "titleJa": "フェイト/ゼロ",
      "score": 8.27
    },
    {
      "titleEn": "Kaiji: Against All Rules",
      "titleJa": "逆境無頼カイジ 破戒録篇",
      "score": 8.24
    },
    {
      "titleEn": "SKET Dance",
      "titleJa": "スケットダンス",
      "score": 8.2
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
      "titleEn": "Psycho-Pass",
      "titleJa": "サイコパス",
      "score": 8.33
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
    },
    {
      "titleEn": "Daily Lives of High School Boys",
      "titleJa": "男子高校生の日常",
      "score": 8.23
    },
    {
      "titleEn": "Nisemonogatari",
      "titleJa": "偽物語",
      "score": 8.13
    },
    {
      "titleEn": "Kamisama Kiss",
      "titleJa": "神様はじめました",
      "score": 8.12
    },
    {
      "titleEn": "Initial D Fifth Stage",
      "titleJa": "頭文字 D Fifth Stage",
      "score": 8.11
    }
  ],
  "2013": [
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
      "titleEn": "Chihayafuru 2",
      "titleJa": "ちはやふる 2",
      "score": 8.37
    },
    {
      "titleEn": "Kingdom: Season 2",
      "titleJa": "キングダム 第2シリーズ",
      "score": 8.3
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
      "titleEn": "Little Busters! ~Refrain~",
      "titleJa": "リトルバスターズ！～Refrain～",
      "score": 8.17
    },
    {
      "titleEn": "Ace of Diamond",
      "titleJa": "ダイヤのA[エース]",
      "score": 8.11
    },
    {
      "titleEn": "Silver Spoon",
      "titleJa": "銀の匙",
      "score": 8.09
    },
    {
      "titleEn": "Kill la Kill",
      "titleJa": "キルラキル",
      "score": 8.03
    },
    {
      "titleEn": "My Teen Romantic Comedy SNAFU",
      "titleJa": "やはり俺の青春ラブコメはまちがっている。",
      "score": 8
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
      "titleEn": "Haikyu!!",
      "titleJa": "ハイキュー!!",
      "score": 8.44
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
    },
    {
      "titleEn": "Fate/stay night [Unlimited Blade Works]",
      "titleJa": "Fate/stay night [Unlimited Blade Works]",
      "score": 8.18
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Stardust Crusaders",
      "titleJa": "ジョジョの奇妙な冒険 スターダストクルセイダース",
      "score": 8.11
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
      "titleEn": "Kamisama Kiss Season 2",
      "titleJa": "神様はじめました◎",
      "score": 8.23
    },
    {
      "titleEn": "My Teen Romantic Comedy SNAFU TOO!",
      "titleJa": "やはり俺の青春ラブコメはまちがっている。続",
      "score": 8.2
    },
    {
      "titleEn": "Non Non Biyori Repeat",
      "titleJa": "のんのんびより りぴーと",
      "score": 8.18
    },
    {
      "titleEn": "Noragami Aragoto",
      "titleJa": "ノラガミ ARAGOTO",
      "score": 8.14
    }
  ],
  "2016": [
    {
      "titleEn": "Haikyu!! 3rd Season",
      "titleJa": "ハイキュー!! 烏野高校 VS 白鳥沢学園高校",
      "score": 8.77
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
      "titleEn": "Sound! Euphonium 2",
      "titleJa": "響け！ユーフォニアム2",
      "score": 8.33
    },
    {
      "titleEn": "Erased",
      "titleJa": "僕だけがいない街",
      "score": 8.3
    },
    {
      "titleEn": "Re:ZERO -Starting Life in Another World-",
      "titleJa": "Re:ゼロから始める異世界生活",
      "score": 8.24
    },
    {
      "titleEn": "Mobile Suit Gundam: Iron-Blooded Orphans 2nd Season",
      "titleJa": "機動戦士ガンダム 鉄血のオルフェンズ 第2期",
      "score": 8.23
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
      "titleEn": "Girls' Last Tour",
      "titleJa": "少女終末旅行",
      "score": 8.23
    },
    {
      "titleEn": "Welcome to the Ballroom",
      "titleJa": "ボールルームへようこそ",
      "score": 8.18
    },
    {
      "titleEn": "Black Clover",
      "titleJa": "ブラッククローバー",
      "score": 8.14
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
    },
    {
      "titleEn": "Run with the Wind",
      "titleJa": "風が強く吹いている",
      "score": 8.38
    },
    {
      "titleEn": "Laid-Back Camp",
      "titleJa": "ゆるキャン△",
      "score": 8.27
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
      "titleEn": "The Promised Neverland",
      "titleJa": "約束のネバーランド",
      "score": 8.48
    },
    {
      "titleEn": "Chihayafuru 3",
      "titleJa": "ちはやふる 3",
      "score": 8.46
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
      "titleEn": "Kono Oto Tomare!: Sounds of Life Season 2",
      "titleJa": "この音とまれ！",
      "score": 8.42
    },
    {
      "titleEn": "Kaguya-sama: Love is War",
      "titleJa": "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
      "score": 8.4
    },
    {
      "titleEn": "Given",
      "titleJa": "ギヴン",
      "score": 8.3
    },
    {
      "titleEn": "Ace of Diamond Act II",
      "titleJa": "ダイヤのA[エース] actII",
      "score": 8.27
    },
    {
      "titleEn": "Dr. Stone",
      "titleJa": "ドクターストーン",
      "score": 8.26
    }
  ],
  "2020": [
    {
      "titleEn": "Kingdom: Season 3",
      "titleJa": "キングダム 第3シリーズ",
      "score": 8.83
    },
    {
      "titleEn": "Kaguya-sama: Love is War?",
      "titleJa": "かぐや様は告らせたい？～天才たちの恋愛頭脳戦～",
      "score": 8.62
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
      "titleEn": "Haikyu!! To the Top",
      "titleJa": "ハイキュー!! TO THE TOP",
      "score": 8.37
    },
    {
      "titleEn": "My Teen Romantic Comedy SNAFU Climax!",
      "titleJa": "やはり俺の青春ラブコメはまちがっている。完",
      "score": 8.35
    },
    {
      "titleEn": "Re:ZERO -Starting Life in Another World- Season 2",
      "titleJa": "Re：ゼロから始める異世界生活",
      "score": 8.33
    },
    {
      "titleEn": "Great Pretender",
      "titleJa": "GREAT PRETENDER",
      "score": 8.2
    },
    {
      "titleEn": "Moriarty the Patriot",
      "titleJa": "憂国のモリアーティ",
      "score": 8.17
    },
    {
      "titleEn": "A Certain Scientific Railgun T",
      "titleJa": "とある科学の超電磁砲[レールガン]T",
      "score": 8.14
    }
  ],
  "2021": [
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
      "titleEn": "Vivy -Fluorite Eye's Song-",
      "titleJa": "Vivy -Fluorite Eye's Song- (ヴィヴィ -フローライトアイズソング-)",
      "score": 8.38
    },
    {
      "titleEn": "Non Non Biyori Nonstop",
      "titleJa": "のんのんびより のんすとっぷ",
      "score": 8.36
    },
    {
      "titleEn": "Mushoku Tensei: Jobless Reincarnation",
      "titleJa": "無職転生 ～異世界行ったら本気だす～",
      "score": 8.35
    },
    {
      "titleEn": "That Time I Got Reincarnated as a Slime Season 2",
      "titleJa": "転生したらスライムだった件",
      "score": 8.35
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
      "titleEn": "Kingdom: Season 4",
      "titleJa": "キングダム 第4シリーズ",
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
      "titleEn": "Made in Abyss: The Golden City of the Scorching Sun",
      "titleJa": "メイドインアビス 烈日の黄金郷",
      "score": 8.61
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
    },
    {
      "titleEn": "Chainsaw Man",
      "titleJa": "チェンソーマン",
      "score": 8.45
    },
    {
      "titleEn": "Teasing Master Takagi-san 3",
      "titleJa": "からかい上手の高木さん3",
      "score": 8.38
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
      "titleEn": "Bungo Stray Dogs 4",
      "titleJa": "文豪ストレイドッグス",
      "score": 8.43
    },
    {
      "titleEn": "Dr. Stone: New World Part 2",
      "titleJa": "Dr.STONE NEW WORLD",
      "score": 8.32
    },
    {
      "titleEn": "The Eminence in Shadow Season 2",
      "titleJa": "陰の実力者になりたくて！ 2nd Season",
      "score": 8.29
    },
    {
      "titleEn": "Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2",
      "titleJa": "ダンジョンに出会いを求めるのは間違っているだろうかⅣ深章 厄災篇",
      "score": 8.25
    },
    {
      "titleEn": "The Dangers in My Heart",
      "titleJa": "僕の心のヤバイやつ",
      "score": 8.23
    }
  ],
  "2024": [
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
      "titleEn": "Bleach: Thousand-Year Blood War - The Conflict",
      "titleJa": "BLEACH 千年血戦篇-相剋譚-",
      "score": 8.67
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
      "titleEn": "Re:ZERO -Starting Life in Another World- Season 3",
      "titleJa": "Re:ゼロから始める異世界生活 3rd season",
      "score": 8.46
    },
    {
      "titleEn": "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
      "titleJa": "無職転生 II ～異世界行ったら本気だす～ (第2クール)",
      "score": 8.42
    },
    {
      "titleEn": "Girls Band Cry",
      "titleJa": "ガールズバンドクライ",
      "score": 8.38
    },
    {
      "titleEn": "KonoSuba: God's Blessing on This Wonderful World! 3",
      "titleJa": "この素晴らしい世界に祝福を！3",
      "score": 8.35
    },
    {
      "titleEn": "Kaiju No. 8",
      "titleJa": "怪獣8号",
      "score": 8.28
    },
    {
      "titleEn": "Shangri-La Frontier Season 2",
      "titleJa": "シャングリラ・フロンティア～クソゲーハンター、神ゲーに挑まんとす～ 2nd season",
      "score": 8.28
    }
  ]
}

// Helper function to get anime title by language
export const getAnimeTitle = (anime: AnimeItem, language: Language): string => {
  if (language === "ja") return anime.titleJa
  return anime.titleEn
}

export default data

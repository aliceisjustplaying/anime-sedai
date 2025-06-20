import type { Language } from "./src/i18n"

type AnimeItem = {
  titleEn: string
  titleJa: string
  popularity: number
}

type Data = {
  [key: string]: AnimeItem[]
}

const data: Data = {
  "1986": [
    {
      "titleEn": "Dragon Ball",
      "titleJa": "ドラゴンボール",
      "popularity": 150
    },
    {
      "titleEn": "Saint Seiya: Knights of the Zodiac",
      "titleJa": "聖闘士星矢(セイントセイヤ)",
      "popularity": 1319
    },
    {
      "titleEn": "Maison Ikkoku",
      "titleJa": "めぞん一刻",
      "popularity": 2618
    },
    {
      "titleEn": "Mobile Suit Gundam ZZ",
      "titleJa": "機動戦士ガンダムZZ",
      "popularity": 3463
    },
    {
      "titleEn": "Silver Fang",
      "titleJa": "銀牙　流れ星銀",
      "popularity": 4465
    },
    {
      "titleEn": "Fight! Kickers",
      "titleJa": "がんばれ！キッカーズ",
      "popularity": 6792
    },
    {
      "titleEn": "Ai Shoujo Pollyanna Story",
      "titleJa": "愛少女ポリアンナ物語",
      "popularity": 8146
    },
    {
      "titleEn": "Hikari no Densetsu",
      "titleJa": "光の伝説",
      "popularity": 8169
    },
    {
      "titleEn": "Magical Idol Pastel Yumi",
      "titleJa": "魔法のアイドル パステルユーミ",
      "popularity": 9684
    },
    {
      "titleEn": "Maple Town",
      "titleJa": "メイプルタウン物語",
      "popularity": 10098
    },
    {
      "titleEn": "The Wonderful Wizard of Oz",
      "titleJa": "オズの魔法使い",
      "popularity": 10405
    },
    {
      "titleEn": "Animated Classics of Japanese Literature",
      "titleJa": "青春アニメ全集",
      "popularity": 10963
    }
  ],
  "1987": [
    {
      "titleEn": "City Hunter",
      "titleJa": "シティーハンター",
      "popularity": 2457
    },
    {
      "titleEn": "Kimagure Orange Road",
      "titleJa": "きまぐれオレンジ☆ロード",
      "popularity": 3323
    },
    {
      "titleEn": "Fist of the North Star 2",
      "titleJa": "北斗の拳2",
      "popularity": 4187
    },
    {
      "titleEn": "Tales of Little Women",
      "titleJa": "愛の若草物語",
      "popularity": 6791
    },
    {
      "titleEn": "Lady Lady!!",
      "titleJa": "レディレディ！！",
      "popularity": 7705
    },
    {
      "titleEn": "Metal Armor Dragonar",
      "titleJa": "機甲戦記ドラグナー",
      "popularity": 7977
    },
    {
      "titleEn": "Zillion",
      "titleJa": "赤い光弾ジリオン",
      "popularity": 8135
    },
    {
      "titleEn": "Sunny Ryoko",
      "titleJa": "陽あたり良好！",
      "popularity": 8347
    },
    {
      "titleEn": "The Three Musketeers",
      "titleJa": "アニメ三銃士",
      "popularity": 8417
    },
    {
      "titleEn": "Grimm's Fairy Tale Classics",
      "titleJa": "グリム名作劇場",
      "popularity": 8589
    },
    {
      "titleEn": "Mister Ajikko",
      "titleJa": "ミスター味っ子",
      "popularity": 8634
    },
    {
      "titleEn": "Lemon Angel",
      "titleJa": "くりぃむレモン レモンエンジェル",
      "popularity": 8857
    }
  ],
  "1988": [
    {
      "titleEn": "City Hunter 2",
      "titleJa": "シティーハンター2",
      "popularity": 4377
    },
    {
      "titleEn": "Samurai Troopers",
      "titleJa": "鎧伝サムライトルーパー",
      "popularity": 5209
    },
    {
      "titleEn": "Charge!! Men's Private School",
      "titleJa": "魁!!男塾",
      "popularity": 5721
    },
    {
      "titleEn": "Osomatsu-kun (1988)",
      "titleJa": "おそ松くん",
      "popularity": 7926
    },
    {
      "titleEn": "Kiteretsu Encyclopedia",
      "titleJa": "キテレツ大百科",
      "popularity": 8006
    },
    {
      "titleEn": "Oishinbo",
      "titleJa": "美味しんぼ",
      "popularity": 8746
    },
    {
      "titleEn": "Little Lord Fauntleroy",
      "titleJa": "小公子セディ",
      "popularity": 8884
    },
    {
      "titleEn": "Sore Ike! Anpanman",
      "titleJa": "それいけ！アンパンマン",
      "popularity": 9090
    },
    {
      "titleEn": "Iron Fist Chinmi",
      "titleJa": "鉄拳チンミ",
      "popularity": 9096
    },
    {
      "titleEn": "Hello! Lady Lynn",
      "titleJa": "ハロー! レディリン",
      "popularity": 9192
    },
    {
      "titleEn": "F",
      "titleJa": "Ｆ-エフ",
      "popularity": 9444
    },
    {
      "titleEn": "Sonic Soldier Borgman",
      "titleJa": "超音戦士ボーグマン",
      "popularity": 9572
    }
  ],
  "1989": [
    {
      "titleEn": "Dragon Ball Z",
      "titleJa": "ドラゴンボールZ",
      "popularity": 114
    },
    {
      "titleEn": "Ranma ½",
      "titleJa": "らんま1/2",
      "popularity": 961
    },
    {
      "titleEn": "Patlabor: The Mobile Police - The TV Series",
      "titleJa": "機動警察パトレイバー ON TELEVISION",
      "popularity": 3658
    },
    {
      "titleEn": "City Hunter 3",
      "titleJa": "シティーハンター3",
      "popularity": 4035
    },
    {
      "titleEn": "Yawara!",
      "titleJa": "YAWARA!",
      "popularity": 4854
    },
    {
      "titleEn": "Tenkuu Senki Shurato",
      "titleJa": "天空戦記シュラト",
      "popularity": 6305
    },
    {
      "titleEn": "The Jungle Book",
      "titleJa": "ジャングルブック・少年モーグリ",
      "popularity": 7426
    },
    {
      "titleEn": "Laughing Salesman",
      "titleJa": "笑ゥせぇるすまん",
      "popularity": 7584
    },
    {
      "titleEn": "Legendary Idol Eriko",
      "titleJa": "アイドル伝説えり子",
      "popularity": 7907
    },
    {
      "titleEn": "Alfred J. Kwak",
      "titleJa": "小さなアヒルの大きな愛の物語 あひるのクワック",
      "popularity": 8241
    },
    {
      "titleEn": "Jungle Taitei (1989)",
      "titleJa": "ジャングル大帝",
      "popularity": 8511
    },
    {
      "titleEn": "Peter Pan & Wendy",
      "titleJa": "ピーターパンの冒険",
      "popularity": 8897
    }
  ],
  "1990": [
    {
      "titleEn": "Nadia: The Secret of Blue Water",
      "titleJa": "ふしぎの海のナディア",
      "popularity": 2695
    },
    {
      "titleEn": "Moomin",
      "titleJa": "楽しいムーミン一家",
      "popularity": 4292
    },
    {
      "titleEn": "My Daddy Long Legs",
      "titleJa": "私のあしながおじさん",
      "popularity": 5342
    },
    {
      "titleEn": "Samurai Pizza Cats",
      "titleJa": "キャッ党忍伝てやんでえ",
      "popularity": 5840
    },
    {
      "titleEn": "Chibi Maruko-chan",
      "titleJa": "ちびまる子ちゃん",
      "popularity": 6025
    },
    {
      "titleEn": "The Great Adventures of Robin Hood",
      "titleJa": "ロビンフッドの大冒険",
      "popularity": 6910
    },
    {
      "titleEn": "Dragon Warrior",
      "titleJa": "ドラゴンクエスト～勇者アベル伝説～",
      "popularity": 7582
    },
    {
      "titleEn": "NG Knight Ramune & 40",
      "titleJa": "NG騎士ラムネ＆４０",
      "popularity": 9127
    },
    {
      "titleEn": "Mahou no Angel Sweet Mint",
      "titleJa": "魔法のエンジェル スイートミント",
      "popularity": 9526
    },
    {
      "titleEn": "The Brave Fighter Exkizer",
      "titleJa": "勇者エクスカイザー",
      "popularity": 9990
    },
    {
      "titleEn": "Karasu Tengu Kabuto",
      "titleJa": "カラス天狗カブト",
      "popularity": 10358
    },
    {
      "titleEn": "Magical★Taruruuto-kun",
      "titleJa": "まじかる☆タルるートくん",
      "popularity": 10869
    }
  ],
  "1991": [
    {
      "titleEn": "Dear Brother",
      "titleJa": "おにいさまへ…",
      "popularity": 3298
    },
    {
      "titleEn": "City Hunter '91",
      "titleJa": "シティーハンター'91",
      "popularity": 4568
    },
    {
      "titleEn": "Dragon Quest: The Adventure of Dai",
      "titleJa": "ドラゴンクエスト・ダイの大冒険",
      "popularity": 4735
    },
    {
      "titleEn": "Future GPX Cyber Formula",
      "titleJa": "新世紀GPXサイバーフォーミュラ",
      "popularity": 6757
    },
    {
      "titleEn": "The Trapp Family Story",
      "titleJa": "トラップ 一家 物語",
      "popularity": 7078
    },
    {
      "titleEn": "Tanoshii Muumin Ikka Bouken Nikki",
      "titleJa": "楽しいムーミン一家 冒険日記",
      "popularity": 7725
    },
    {
      "titleEn": "The Secret Garden",
      "titleJa": "アニメ ひみつの花園",
      "popularity": 8057
    },
    {
      "titleEn": "Yokoyama Mitsuteru Sangokushi",
      "titleJa": "横山光輝 三国志",
      "popularity": 8075
    },
    {
      "titleEn": "Honoo no Toukyuuji: Dodge Danpei",
      "titleJa": "炎の闘球児・ドッジ弾平",
      "popularity": 8462
    },
    {
      "titleEn": "Top Striker",
      "titleJa": "燃えろ! トップストライカー",
      "popularity": 9058
    },
    {
      "titleEn": "Kinnikuman: Kinnikusei Oui Soudatsu-hen",
      "titleJa": "キン肉マン　キン肉星王位争奪編",
      "popularity": 9155
    },
    {
      "titleEn": "Fairy Princess Minky Momo 2nd",
      "titleJa": "魔法のプリンセス　ミンキーモモ（夢を抱きしめて）",
      "popularity": 9287
    }
  ],
  "1992": [
    {
      "titleEn": "Yu Yu Hakusho: Ghost Files",
      "titleJa": "幽☆遊☆白書",
      "popularity": 299
    },
    {
      "titleEn": "Sailor Moon",
      "titleJa": "美少女戦士セーラームーン",
      "popularity": 634
    },
    {
      "titleEn": "Shin Chan",
      "titleJa": "クレヨンしんちゃん",
      "popularity": 2409
    },
    {
      "titleEn": "Tekkaman Blade",
      "titleJa": "宇宙の騎士テッカマンブレード",
      "popularity": 5414
    },
    {
      "titleEn": "Hime-chan no Ribbon",
      "titleJa": "姫ちゃんのリボン",
      "popularity": 6644
    },
    {
      "titleEn": "Mama is Just a Fourth Grade Pupil",
      "titleJa": "ママは小学４年生",
      "popularity": 7575
    },
    {
      "titleEn": "Legendary Brave da Garn",
      "titleJa": "伝説の勇者ダ・ガーン",
      "popularity": 8995
    },
    {
      "titleEn": "Kaze no Naka no Shoujo: Kinpatsu no Jeanie",
      "titleJa": "風の中の少女 金髪のジェニー",
      "popularity": 9309
    },
    {
      "titleEn": "Hana no Mahoutsukai Mary Bell",
      "titleJa": "花の魔法使いマリーベル",
      "popularity": 9917
    },
    {
      "titleEn": "Bush Baby, Little Angel of the Great Plains",
      "titleJa": "大草原の小さな天使　ブッシュベイビー",
      "popularity": 10170
    },
    {
      "titleEn": "Mikan Enikki",
      "titleJa": "みかん絵日記",
      "popularity": 10211
    },
    {
      "titleEn": "Tsuyoshi Shikkari Shinasai",
      "titleJa": "ツヨシしっかりしなさい",
      "popularity": 10269
    }
  ],
  "1993": [
    {
      "titleEn": "Slam Dunk",
      "titleJa": "スラムダンク",
      "popularity": 808
    },
    {
      "titleEn": "Sailor Moon R",
      "titleJa": "美少女戦士セーラームーン R",
      "popularity": 1550
    },
    {
      "titleEn": "The Irresponsible Captain Tylor",
      "titleJa": "無責任艦長タイラー",
      "popularity": 3275
    },
    {
      "titleEn": "Mobile Suit Victory Gundam",
      "titleJa": "機動戦士Vガンダム",
      "popularity": 4358
    },
    {
      "titleEn": "Blue Legend Shoot!",
      "titleJa": "蒼き伝説　シュート！",
      "popularity": 5666
    },
    {
      "titleEn": "Ghost Sweeper Mikami",
      "titleJa": "GS（ゴーストスイーパー）美神",
      "popularity": 5717
    },
    {
      "titleEn": "Legendary Brave Swordsman Yaiba",
      "titleJa": "剣勇伝説ＹＡＩＢＡ",
      "popularity": 6678
    },
    {
      "titleEn": "Nintama Rantarou",
      "titleJa": "忍たま乱太郎",
      "popularity": 7418
    },
    {
      "titleEn": "Little Women II: Jo's Boys",
      "titleJa": "若草物語ナンとジョー先生",
      "popularity": 7744
    },
    {
      "titleEn": "Miracle☆Girls",
      "titleJa": "ミラクル☆ガールズ",
      "popularity": 8307
    },
    {
      "titleEn": "Yuusha Tokkyuu Might Gaine",
      "titleJa": "勇者特急マイトガイン",
      "popularity": 9753
    },
    {
      "titleEn": "Jungle no Ouja Tar-chan",
      "titleJa": "ジャングルの王者ターちゃん",
      "popularity": 10058
    }
  ],
  "1994": [
    {
      "titleEn": "Sailor Moon S",
      "titleJa": "美少女戦士セーラームーン S",
      "popularity": 1640
    },
    {
      "titleEn": "Magic Knight Rayearth",
      "titleJa": "魔法騎士（マジックナイト）レイアース",
      "popularity": 2699
    },
    {
      "titleEn": "Mobile Fighter G Gundam",
      "titleJa": "機動武闘伝Gガンダム",
      "popularity": 2761
    },
    {
      "titleEn": "Marmalade Boy",
      "titleJa": "ママレード・ボーイ",
      "popularity": 3102
    },
    {
      "titleEn": "DNA²",
      "titleJa": "Ｄ・Ｎ・Ａ²　～何処かで失くしたあいつのアイツ～",
      "popularity": 3519
    },
    {
      "titleEn": "Macross 7",
      "titleJa": "マクロス７",
      "popularity": 4180
    },
    {
      "titleEn": "Blue Seed",
      "titleJa": "ブルーシード",
      "popularity": 4256
    },
    {
      "titleEn": "Captain Tsubasa J",
      "titleJa": "キャプテン翼Ｊ",
      "popularity": 4296
    },
    {
      "titleEn": "Galaxy Warring State Chronicle Rai",
      "titleJa": "銀河戦国群雄伝ライ",
      "popularity": 5514
    },
    {
      "titleEn": "Red Riding Hood Chacha",
      "titleJa": "赤ずきんチャチャ",
      "popularity": 5533
    },
    {
      "titleEn": "Magical Circle Guru Guru",
      "titleJa": "魔法陣グルグル",
      "popularity": 6377
    },
    {
      "titleEn": "Super Pig",
      "titleJa": "愛と勇気のピッグガール　とんでぶーりん",
      "popularity": 6477
    }
  ],
  "1995": [
    {
      "titleEn": "Neon Genesis Evangelion",
      "titleJa": "新世紀エヴァンゲリオン",
      "popularity": 45
    },
    {
      "titleEn": "Mobile Suit Gundam Wing",
      "titleJa": "新機動戦記ガンダムW",
      "popularity": 1556
    },
    {
      "titleEn": "Slayers",
      "titleJa": "スレイヤーズ",
      "popularity": 1677
    },
    {
      "titleEn": "Sailor Moon SuperS",
      "titleJa": "美少女戦士セーラームーン Super S",
      "popularity": 1913
    },
    {
      "titleEn": "Mysterious Play",
      "titleJa": "ふしぎ遊戯",
      "popularity": 1929
    },
    {
      "titleEn": "Tenchi Muyo! Tenchi Universe",
      "titleJa": "天地無用！",
      "popularity": 2502
    },
    {
      "titleEn": "Romeo's Blue Skies",
      "titleJa": "ロミオの青い空",
      "popularity": 3240
    },
    {
      "titleEn": "Magic Knight Rayearth II",
      "titleJa": "魔法騎士（マジックナイト）レイアース II",
      "popularity": 4001
    },
    {
      "titleEn": "Neighborhood Stories",
      "titleJa": "ご近所物語",
      "popularity": 4429
    },
    {
      "titleEn": "Street Fighter II: The Animated Series",
      "titleJa": "ストリートファイターII V",
      "popularity": 4454
    },
    {
      "titleEn": "Wedding Peach",
      "titleJa": "愛天使伝説 ウェディングピーチ",
      "popularity": 4769
    },
    {
      "titleEn": "Sorcerer Hunters",
      "titleJa": "爆れつハンター",
      "popularity": 4819
    }
  ],
  "1996": [
    {
      "titleEn": "Dragon Ball GT",
      "titleJa": "ドラゴンボールGT",
      "popularity": 350
    },
    {
      "titleEn": "Rurouni Kenshin",
      "titleJa": "るろうに剣心 -明治剣客浪漫譚-",
      "popularity": 469
    },
    {
      "titleEn": "Case Closed",
      "titleJa": "名探偵コナン",
      "popularity": 701
    },
    {
      "titleEn": "The Vision of Escaflowne",
      "titleJa": "天空のエスカフローネ",
      "popularity": 1522
    },
    {
      "titleEn": "Sailor Moon Sailor Stars",
      "titleJa": "美少女戦士セーラームーン セーラースターズ",
      "popularity": 2010
    },
    {
      "titleEn": "Kodocha",
      "titleJa": "こどものおもちゃ",
      "popularity": 2720
    },
    {
      "titleEn": "Slayers Next",
      "titleJa": "スレイヤーズNEXT",
      "popularity": 2736
    },
    {
      "titleEn": "Hana Yori Dango",
      "titleJa": "花より男子",
      "popularity": 2947
    },
    {
      "titleEn": "Martian Successor Nadesico",
      "titleJa": "機動戦艦ナデシコ",
      "popularity": 3131
    },
    {
      "titleEn": "You're Under Arrest (1996)",
      "titleJa": "逮捕しちゃうぞ (1996)",
      "popularity": 3816
    },
    {
      "titleEn": "After War Gundam X",
      "titleJa": "機動新世紀ガンダムX",
      "popularity": 3895
    },
    {
      "titleEn": "Baby and Me",
      "titleJa": "赤ちゃんと僕",
      "popularity": 3982
    }
  ],
  "1997": [
    {
      "titleEn": "Berserk",
      "titleJa": "剣風伝奇ベルセルク",
      "popularity": 302
    },
    {
      "titleEn": "Pokémon",
      "titleJa": "ポケットモンスター",
      "popularity": 349
    },
    {
      "titleEn": "Revolutionary Girl Utena",
      "titleJa": "少女革命ウテナ",
      "popularity": 1126
    },
    {
      "titleEn": "Flame of Recca",
      "titleJa": "烈火の炎",
      "popularity": 2812
    },
    {
      "titleEn": "Slayers Try",
      "titleJa": "スレイヤーズ TRY",
      "popularity": 3122
    },
    {
      "titleEn": "Vampire Princess Miyu",
      "titleJa": "吸血姫美夕",
      "popularity": 3665
    },
    {
      "titleEn": "Tenchi in Tokyo",
      "titleJa": "新・天地無用!",
      "popularity": 3889
    },
    {
      "titleEn": "The File of Young Kindaichi",
      "titleJa": "金田一少年の事件簿",
      "popularity": 4101
    },
    {
      "titleEn": "King of Braves GaoGaiGar",
      "titleJa": "勇者王ガオガイガー",
      "popularity": 4843
    },
    {
      "titleEn": "Cooking Master Boy",
      "titleJa": "中華一番",
      "popularity": 5118
    },
    {
      "titleEn": "Dr. Slump",
      "titleJa": "ドクタースランプ",
      "popularity": 5285
    },
    {
      "titleEn": "CLAMP School Detectives",
      "titleJa": "CLAMP学園探偵団",
      "popularity": 5708
    }
  ],
  "1998": [
    {
      "titleEn": "Cowboy Bebop",
      "titleJa": "カウボーイビバップ",
      "popularity": 42
    },
    {
      "titleEn": "Serial Experiments Lain",
      "titleJa": "シリアルエクスペリメンツレイン",
      "popularity": 241
    },
    {
      "titleEn": "Trigun",
      "titleJa": "トライガン",
      "popularity": 260
    },
    {
      "titleEn": "Cardcaptor Sakura",
      "titleJa": "カードキャプターさくら",
      "popularity": 522
    },
    {
      "titleEn": "Initial D First Stage",
      "titleJa": "頭文字〈イニシャル〉D",
      "popularity": 604
    },
    {
      "titleEn": "Yu☆Gi☆Oh!",
      "titleJa": "遊☆戯☆王",
      "popularity": 1024
    },
    {
      "titleEn": "His and Her Circumstances",
      "titleJa": "彼氏彼女の事情",
      "popularity": 1079
    },
    {
      "titleEn": "Outlaw Star",
      "titleJa": "星方武侠アウトロースター",
      "popularity": 1568
    },
    {
      "titleEn": "Orphen",
      "titleJa": "魔術士オーフェン",
      "popularity": 3430
    },
    {
      "titleEn": "Bubblegum Crisis Tokyo 2040",
      "titleJa": "バブルガムクライシス TOKYO2040",
      "popularity": 3730
    },
    {
      "titleEn": "Record of Lodoss War: Chronicles of the Heroic Knight",
      "titleJa": "ロードス島戦記　英雄騎士伝",
      "popularity": 3958
    },
    {
      "titleEn": "Master Keaton",
      "titleJa": "マスターキートン",
      "popularity": 4340
    }
  ],
  "1999": [
    {
      "titleEn": "One Piece",
      "titleJa": "ONE PIECE",
      "popularity": 17
    },
    {
      "titleEn": "Great Teacher Onizuka",
      "titleJa": "グレート・ティーチャー・オニヅカ",
      "popularity": 220
    },
    {
      "titleEn": "Hunter x Hunter",
      "titleJa": "HUNTER×HUNTER（ハンター×ハンター）",
      "popularity": 376
    },
    {
      "titleEn": "Digimon: Digital Monsters",
      "titleJa": "デジモンアドベンチャー",
      "popularity": 609
    },
    {
      "titleEn": "Initial D Second Stage",
      "titleJa": "頭文字〈イニシャル〉D SECOND STAGE",
      "popularity": 1052
    },
    {
      "titleEn": "Now and Then, Here and There",
      "titleJa": "今、そこにいる僕",
      "popularity": 1634
    },
    {
      "titleEn": "Excel Saga",
      "titleJa": "へっぽこ実験アニメーション エクセル♥サーガ",
      "popularity": 2067
    },
    {
      "titleEn": "The Big O",
      "titleJa": "THEビッグオー",
      "popularity": 2224
    },
    {
      "titleEn": "Blue Gender",
      "titleJa": "BLUE GENDER",
      "popularity": 2489
    },
    {
      "titleEn": "Pet Shop of Horrors",
      "titleJa": "Pet Shop of Horrors (ペットショップ・オブ・ホラーズ)",
      "popularity": 2754
    },
    {
      "titleEn": "Medabots",
      "titleJa": "メダロット",
      "popularity": 3024
    },
    {
      "titleEn": "Magical DoReMi",
      "titleJa": "おジャ魔女どれみ",
      "popularity": 3068
    }
  ],
  "2000": [
    {
      "titleEn": "InuYasha",
      "titleJa": "犬夜叉",
      "popularity": 247
    },
    {
      "titleEn": "Fighting Spirit",
      "titleJa": "はじめの一歩 THE FIGHTING!",
      "popularity": 356
    },
    {
      "titleEn": "Yu-Gi-Oh!",
      "titleJa": "遊☆戯☆王　デュエルモンスターズ",
      "popularity": 608
    },
    {
      "titleEn": "Love Hina",
      "titleJa": "ラブひな",
      "popularity": 957
    },
    {
      "titleEn": "Ghost Stories",
      "titleJa": "学校の怪談",
      "popularity": 1116
    },
    {
      "titleEn": "Digimon Adventure 02",
      "titleJa": "デジモンアドベンチャー０２",
      "popularity": 1164
    },
    {
      "titleEn": "Boogiepop Phantom",
      "titleJa": "ブギーポップは笑わない Boogiepop Phantom",
      "popularity": 1704
    },
    {
      "titleEn": "Gravitation",
      "titleJa": "グラビテーション",
      "popularity": 1945
    },
    {
      "titleEn": "Vandread",
      "titleJa": "ヴァンドレッド",
      "popularity": 2456
    },
    {
      "titleEn": "Ceres, Celestial Legend",
      "titleJa": "妖しのセレス",
      "popularity": 2955
    },
    {
      "titleEn": "Hamtaro",
      "titleJa": "とっとこハム太郎",
      "popularity": 2993
    },
    {
      "titleEn": "Descendants of Darkness",
      "titleJa": "闇の末裔",
      "popularity": 3130
    }
  ],
  "2001": [
    {
      "titleEn": "Hellsing",
      "titleJa": "Hellsing [ヘルシング]",
      "popularity": 285
    },
    {
      "titleEn": "Fruits Basket",
      "titleJa": "フルーツバスケット",
      "popularity": 433
    },
    {
      "titleEn": "Shaman King",
      "titleJa": "シャーマンキング",
      "popularity": 684
    },
    {
      "titleEn": "Digimon Tamers",
      "titleJa": "デジモンテイマーズ",
      "popularity": 1269
    },
    {
      "titleEn": "The Prince of Tennis",
      "titleJa": "テニスの王子様",
      "popularity": 1350
    },
    {
      "titleEn": "Baki the Grappler",
      "titleJa": "グラップラー刃牙",
      "popularity": 1607
    },
    {
      "titleEn": "Hikaru no Go",
      "titleJa": "ヒカルの碁",
      "popularity": 1709
    },
    {
      "titleEn": "Noir",
      "titleJa": "ノワール",
      "popularity": 2008
    },
    {
      "titleEn": "Beyblade",
      "titleJa": "爆転シュート　ベイブレード",
      "popularity": 2015
    },
    {
      "titleEn": "Rave Master",
      "titleJa": "レイヴ",
      "popularity": 2194
    },
    {
      "titleEn": "Baki the Grappler: Saidai Tournament-hen",
      "titleJa": "グラップラー刃牙(バキ) 最大トーナメント編",
      "popularity": 2277
    },
    {
      "titleEn": "X",
      "titleJa": "X−エックス−",
      "popularity": 2475
    }
  ],
  "2002": [
    {
      "titleEn": "Naruto",
      "titleJa": "ナルト",
      "popularity": 9
    },
    {
      "titleEn": "Full Metal Panic!",
      "titleJa": "フルメタル・パニック！",
      "popularity": 467
    },
    {
      "titleEn": "Chobits",
      "titleJa": "ちょびっツ",
      "popularity": 485
    },
    {
      "titleEn": "Ghost in the Shell: Stand Alone Complex",
      "titleJa": "攻殻機動隊 STAND ALONE COMPLEX",
      "popularity": 612
    },
    {
      "titleEn": "Azumanga Daioh: The Animation",
      "titleJa": "あずまんが大王 THE ANIMATION",
      "popularity": 637
    },
    {
      "titleEn": "Haibane Renmei",
      "titleJa": "灰羽連盟",
      "popularity": 850
    },
    {
      "titleEn": "Pokémon: Advanced",
      "titleJa": "ポケットモンスター　アドバンスジェネレーション",
      "popularity": 1326
    },
    {
      "titleEn": ".hack//Sign",
      "titleJa": ".hack//SIGN",
      "popularity": 1374
    },
    {
      "titleEn": "Please Teacher!",
      "titleJa": "おねがい☆ティーチャー",
      "popularity": 1412
    },
    {
      "titleEn": "Mobile Suit Gundam SEED",
      "titleJa": "機動戦士ガンダムSEED",
      "popularity": 1436
    },
    {
      "titleEn": "Princess Tutu",
      "titleJa": "プリンセスチュチュ",
      "popularity": 1446
    },
    {
      "titleEn": "The Twelve Kingdoms",
      "titleJa": "十二国記",
      "popularity": 1567
    }
  ],
  "2003": [
    {
      "titleEn": "Fullmetal Alchemist",
      "titleJa": "鋼の錬金術師",
      "popularity": 85
    },
    {
      "titleEn": "Wolf's Rain",
      "titleJa": "ウルフズレイン",
      "popularity": 758
    },
    {
      "titleEn": "Kino's Journey",
      "titleJa": "キノの旅 -the Beautiful World-",
      "popularity": 768
    },
    {
      "titleEn": "Full Metal Panic? Fumoffu",
      "titleJa": "フルメタル・パニック? ふもっふ",
      "popularity": 877
    },
    {
      "titleEn": "Texhnolyze",
      "titleJa": "TEXHNOLYZE",
      "popularity": 969
    },
    {
      "titleEn": "Planetes",
      "titleJa": "プラネテス",
      "popularity": 983
    },
    {
      "titleEn": "Chrono Crusade",
      "titleJa": "クロノクルセイド",
      "popularity": 1139
    },
    {
      "titleEn": "Gungrave",
      "titleJa": "ガングレイヴ",
      "popularity": 1243
    },
    {
      "titleEn": "Gunslinger Girl",
      "titleJa": "ガンスリンガー・ガール",
      "popularity": 1321
    },
    {
      "titleEn": "D.N.Angel",
      "titleJa": "Ｄ・Ｎ・ＡＮＧＥＬ",
      "popularity": 1381
    },
    {
      "titleEn": "Last Exile",
      "titleJa": "LAST EXILE（ラストエグザイル）",
      "popularity": 1427
    },
    {
      "titleEn": "Lunar Legend Tsukihime",
      "titleJa": "真月譚 月姫",
      "popularity": 1472
    }
  ],
  "2004": [
    {
      "titleEn": "Bleach",
      "titleJa": "BLEACH - ブリーチ -",
      "popularity": 35
    },
    {
      "titleEn": "Elfen Lied",
      "titleJa": "エルフェンリート",
      "popularity": 78
    },
    {
      "titleEn": "Samurai Champloo",
      "titleJa": "サムライチャンプルー",
      "popularity": 108
    },
    {
      "titleEn": "Monster",
      "titleJa": "モンスター",
      "popularity": 121
    },
    {
      "titleEn": "Paranoia Agent",
      "titleJa": "妄想代理人",
      "popularity": 549
    },
    {
      "titleEn": "Gantz",
      "titleJa": "ガンツ",
      "popularity": 691
    },
    {
      "titleEn": "Beck: Mongolian Chop Squad",
      "titleJa": "ベック",
      "popularity": 721
    },
    {
      "titleEn": "School Rumble",
      "titleJa": "スクールランブル",
      "popularity": 770
    },
    {
      "titleEn": "Gankutsuou: The Count of Monte Cristo",
      "titleJa": "巌窟王",
      "popularity": 1010
    },
    {
      "titleEn": "Ghost in the Shell: Stand Alone Complex 2nd GIG",
      "titleJa": "攻殻機動隊 S.A.C. 2nd GIG",
      "popularity": 1127
    },
    {
      "titleEn": "Yu-Gi-Oh! GX",
      "titleJa": "遊☆戯☆王　デュエルモンスターズ GX",
      "popularity": 1167
    },
    {
      "titleEn": "Rozen Maiden",
      "titleJa": "ローゼンメイデン",
      "popularity": 1236
    }
  ],
  "2005": [
    {
      "titleEn": "Mushi-Shi",
      "titleJa": "蟲師",
      "popularity": 225
    },
    {
      "titleEn": "Shakugan no Shana: Season I",
      "titleJa": "灼眼のシャナ",
      "popularity": 437
    },
    {
      "titleEn": "Eureka Seven",
      "titleJa": "交響詩篇エウレカセブン",
      "popularity": 548
    },
    {
      "titleEn": "Blood+",
      "titleJa": "ブラッドプラス",
      "popularity": 657
    },
    {
      "titleEn": "Hell Girl",
      "titleJa": "地獄少女",
      "popularity": 690
    },
    {
      "titleEn": "Air",
      "titleJa": "AIR",
      "popularity": 874
    },
    {
      "titleEn": "Shuffle!",
      "titleJa": "SHUFFLE! (シャッフル!)",
      "popularity": 917
    },
    {
      "titleEn": "Honey and Clover",
      "titleJa": "ハチミツとクローバー",
      "popularity": 945
    },
    {
      "titleEn": "Black Cat",
      "titleJa": "ブラックキャット",
      "popularity": 949
    },
    {
      "titleEn": "Full Metal Panic! The Second Raid",
      "titleJa": "フルメタル パニック！The Second Raid",
      "popularity": 988
    },
    {
      "titleEn": "Paradise Kiss",
      "titleJa": "Paradise kiss",
      "popularity": 1074
    },
    {
      "titleEn": "Tsubasa RESERVoir CHRoNiCLE",
      "titleJa": "ツバサ・クロニクル",
      "popularity": 1129
    }
  ],
  "2006": [
    {
      "titleEn": "Death Note",
      "titleJa": "デスノート",
      "popularity": 2
    },
    {
      "titleEn": "Code Geass: Lelouch of the Rebellion",
      "titleJa": "コードギアス 反逆のルルーシュ",
      "popularity": 22
    },
    {
      "titleEn": "Ouran High School Host Club",
      "titleJa": "桜蘭高校ホスト部",
      "popularity": 133
    },
    {
      "titleEn": "Gintama",
      "titleJa": "銀魂",
      "popularity": 147
    },
    {
      "titleEn": "Black Lagoon",
      "titleJa": "BLACK LAGOON",
      "popularity": 158
    },
    {
      "titleEn": "Fate/stay night",
      "titleJa": "Fate/stay night",
      "popularity": 185
    },
    {
      "titleEn": "The Melancholy of Haruhi Suzumiya",
      "titleJa": "涼宮ハルヒの憂鬱",
      "popularity": 193
    },
    {
      "titleEn": "The Familiar of Zero",
      "titleJa": "ゼロの使い魔",
      "popularity": 239
    },
    {
      "titleEn": "Higurashi: When They Cry",
      "titleJa": "ひぐらしのなく頃に",
      "popularity": 246
    },
    {
      "titleEn": "Welcome to the N.H.K.",
      "titleJa": "N・H・Kにようこそ！",
      "popularity": 266
    },
    {
      "titleEn": "Nana",
      "titleJa": "NANA [ナナ]",
      "popularity": 297
    },
    {
      "titleEn": "D.Gray-man",
      "titleJa": "ディー・グレイマン",
      "popularity": 305
    }
  ],
  "2007": [
    {
      "titleEn": "Naruto Shippuden",
      "titleJa": "-ナルト- 疾風伝",
      "popularity": 16
    },
    {
      "titleEn": "Gurren Lagann",
      "titleJa": "天元突破グレンラガン",
      "popularity": 67
    },
    {
      "titleEn": "Clannad",
      "titleJa": "CLANNAD",
      "popularity": 93
    },
    {
      "titleEn": "Darker than Black",
      "titleJa": "Darker than BLACK -黒の契約者-",
      "popularity": 181
    },
    {
      "titleEn": "Baccano!",
      "titleJa": "バッカーノ！",
      "popularity": 199
    },
    {
      "titleEn": "Claymore",
      "titleJa": "クレイモア",
      "popularity": 318
    },
    {
      "titleEn": "School Days",
      "titleJa": "スクールデイズ",
      "popularity": 323
    },
    {
      "titleEn": "Lucky☆Star",
      "titleJa": "らき☆すた",
      "popularity": 340
    },
    {
      "titleEn": "Lovely Complex",
      "titleJa": "ラブ★コン",
      "popularity": 375
    },
    {
      "titleEn": "The Familiar of Zero: Knight of the Twin Moons",
      "titleJa": "ゼロの使い魔 ～双月の騎士～",
      "popularity": 461
    },
    {
      "titleEn": "Higurashi: When They Cry – Kai",
      "titleJa": "ひぐらしのなく頃に解",
      "popularity": 477
    },
    {
      "titleEn": "Kaze no Stigma",
      "titleJa": "風のスティグマ",
      "popularity": 528
    }
  ],
  "2008": [
    {
      "titleEn": "Toradora!",
      "titleJa": "とらドラ！",
      "popularity": 25
    },
    {
      "titleEn": "Code Geass: Lelouch of the Rebellion R2",
      "titleJa": "コードギアス 反逆のルルーシュ R2",
      "popularity": 47
    },
    {
      "titleEn": "Soul Eater",
      "titleJa": "ソウルイーター",
      "popularity": 64
    },
    {
      "titleEn": "Clannad: After Story",
      "titleJa": "CLANNAD〜AFTER STORY〜 クラナド アフターストーリー",
      "popularity": 120
    },
    {
      "titleEn": "Black Butler",
      "titleJa": "黒執事",
      "popularity": 122
    },
    {
      "titleEn": "Spice and Wolf",
      "titleJa": "狼と香辛料",
      "popularity": 237
    },
    {
      "titleEn": "A Certain Magical Index",
      "titleJa": "とある魔術の禁書目録",
      "popularity": 240
    },
    {
      "titleEn": "Rosario + Vampire",
      "titleJa": "ロザリオとバンパイア",
      "popularity": 311
    },
    {
      "titleEn": "To Love Ru",
      "titleJa": "To LOVEる -とらぶる-",
      "popularity": 345
    },
    {
      "titleEn": "Vampire Knight",
      "titleJa": "ヴァンパイア騎士〈ナイト〉",
      "popularity": 381
    },
    {
      "titleEn": "Natsume's Book of Friends",
      "titleJa": "夏目友人帳",
      "popularity": 426
    },
    {
      "titleEn": "The Familiar of Zero: Rondo of Princesses",
      "titleJa": "ゼロの使い魔 ～三美姫（プリンセッセ）の輪舞（ロンド）～",
      "popularity": 535
    }
  ],
  "2009": [
    {
      "titleEn": "Fullmetal Alchemist: Brotherhood",
      "titleJa": "鋼の錬金術師 FULLMETAL ALCHEMIST",
      "popularity": 3
    },
    {
      "titleEn": "Fairy Tail",
      "titleJa": "FAIRY TAIL（フェアリーテイル）",
      "popularity": 54
    },
    {
      "titleEn": "Bakemonogatari",
      "titleJa": "化物語",
      "popularity": 96
    },
    {
      "titleEn": "K-ON!",
      "titleJa": "けいおん!",
      "popularity": 153
    },
    {
      "titleEn": "Kimi ni Todoke: From Me to You",
      "titleJa": "君に届け",
      "popularity": 169
    },
    {
      "titleEn": "A Certain Scientific Railgun",
      "titleJa": "とある科学の超電磁砲",
      "popularity": 371
    },
    {
      "titleEn": "Eden of The East",
      "titleJa": "東のエデン",
      "popularity": 409
    },
    {
      "titleEn": "The Melancholy of Haruhi Suzumiya Season 2",
      "titleJa": "涼宮ハルヒの憂鬱",
      "popularity": 435
    },
    {
      "titleEn": "Spice and Wolf II",
      "titleJa": "狼と香辛料II",
      "popularity": 473
    },
    {
      "titleEn": "Heaven's Lost Property",
      "titleJa": "そらのおとしもの",
      "popularity": 492
    },
    {
      "titleEn": "Pandora Hearts",
      "titleJa": "パンドラハーツ",
      "popularity": 561
    },
    {
      "titleEn": "Darker than Black: Gemini of the Meteor",
      "titleJa": "DARKER THAN BLACK 流星の双子",
      "popularity": 593
    }
  ],
  "2010": [
    {
      "titleEn": "Angel Beats!",
      "titleJa": "Angel Beats!（エンジェルビーツ!）",
      "popularity": 32
    },
    {
      "titleEn": "High School of the Dead",
      "titleJa": "学園黙示録 HIGHSCHOOL OF THE DEAD",
      "popularity": 79
    },
    {
      "titleEn": "Durarara!!",
      "titleJa": "デュラララ!!",
      "popularity": 94
    },
    {
      "titleEn": "Maid Sama!",
      "titleJa": "会長はメイド様!",
      "popularity": 109
    },
    {
      "titleEn": "K-ON! Season 2",
      "titleJa": "けいおん!!",
      "popularity": 298
    },
    {
      "titleEn": "OreImo",
      "titleJa": "俺の妹がこんなに可愛いわけがない",
      "popularity": 316
    },
    {
      "titleEn": "Baka & Test: Summon the Beasts",
      "titleJa": "バカとテストと召喚獣",
      "popularity": 355
    },
    {
      "titleEn": "The World God Only Knows",
      "titleJa": "神のみぞ知るセカイ",
      "popularity": 360
    },
    {
      "titleEn": "Bakuman.",
      "titleJa": "バクマン。",
      "popularity": 363
    },
    {
      "titleEn": "Shiki",
      "titleJa": "屍鬼",
      "popularity": 374
    },
    {
      "titleEn": "Kiss x Sis (TV)",
      "titleJa": "キスシス",
      "popularity": 402
    },
    {
      "titleEn": "Black Butler II",
      "titleJa": "黒執事II",
      "popularity": 406
    }
  ],
  "2011": [
    {
      "titleEn": "Hunter x Hunter",
      "titleJa": "HUNTER×HUNTER（ハンター×ハンター）",
      "popularity": 8
    },
    {
      "titleEn": "Steins;Gate",
      "titleJa": "STEINS;GATE",
      "popularity": 14
    },
    {
      "titleEn": "The Future Diary",
      "titleJa": "未来日記",
      "popularity": 37
    },
    {
      "titleEn": "Blue Exorcist",
      "titleJa": "青の祓魔師",
      "popularity": 41
    },
    {
      "titleEn": "Anohana: The Flower We Saw That Day",
      "titleJa": "あの日見た花の名前を僕達はまだ知らない。",
      "popularity": 72
    },
    {
      "titleEn": "Fate/Zero",
      "titleJa": "フェイト/ゼロ",
      "popularity": 82
    },
    {
      "titleEn": "Puella Magi Madoka Magica",
      "titleJa": "魔法少女まどか★マギカ",
      "popularity": 104
    },
    {
      "titleEn": "Deadman Wonderland",
      "titleJa": "デッドマン・ワンダーランド",
      "popularity": 113
    },
    {
      "titleEn": "Guilty Crown",
      "titleJa": "ギルティクラウン",
      "popularity": 119
    },
    {
      "titleEn": "Nichijou - My Ordinary Life",
      "titleJa": "日常",
      "popularity": 195
    },
    {
      "titleEn": "Haganai: I don't have many friends",
      "titleJa": "僕は友達が少ない",
      "popularity": 245
    },
    {
      "titleEn": "Infinite Stratos",
      "titleJa": "IS 〈インフィニット・ストラトス〉",
      "popularity": 346
    }
  ],
  "2012": [
    {
      "titleEn": "Sword Art Online",
      "titleJa": "ソードアート・オンライン",
      "popularity": 6
    },
    {
      "titleEn": "JoJo's Bizarre Adventure (2012)",
      "titleJa": "ジョジョの奇妙な冒険",
      "popularity": 58
    },
    {
      "titleEn": "Another",
      "titleJa": "アナザー",
      "popularity": 62
    },
    {
      "titleEn": "Psycho-Pass",
      "titleJa": "サイコパス",
      "popularity": 65
    },
    {
      "titleEn": "High School DxD",
      "titleJa": "ハイスクールD×D",
      "popularity": 90
    },
    {
      "titleEn": "Hyouka",
      "titleJa": "氷菓",
      "popularity": 98
    },
    {
      "titleEn": "Love, Chunibyo & Other Delusions!",
      "titleJa": "中二病でも恋がしたい!",
      "popularity": 101
    },
    {
      "titleEn": "The Pet Girl of Sakurasou",
      "titleJa": "さくら荘のペットな彼女",
      "popularity": 111
    },
    {
      "titleEn": "Kuroko's Basketball",
      "titleJa": "黒子のバスケ",
      "popularity": 117
    },
    {
      "titleEn": "Fate/Zero Season 2",
      "titleJa": "フェイト/ゼロ 2ndシーズン",
      "popularity": 137
    },
    {
      "titleEn": "My Little Monster",
      "titleJa": "となりの怪物くん",
      "popularity": 142
    },
    {
      "titleEn": "Magi: The Labyrinth of Magic",
      "titleJa": "マギ The labyrinth of magic",
      "popularity": 154
    }
  ],
  "2013": [
    {
      "titleEn": "Attack on Titan",
      "titleJa": "進撃の巨人",
      "popularity": 1
    },
    {
      "titleEn": "Kill la Kill",
      "titleJa": "キルラキル",
      "popularity": 57
    },
    {
      "titleEn": "The Devil is a Part-Timer!",
      "titleJa": "はたらく魔王さま!",
      "popularity": 74
    },
    {
      "titleEn": "My Teen Romantic Comedy SNAFU",
      "titleJa": "やはり俺の青春ラブコメはまちがっている。",
      "popularity": 86
    },
    {
      "titleEn": "Beyond the Boundary",
      "titleJa": "境界の彼方",
      "popularity": 126
    },
    {
      "titleEn": "Log Horizon",
      "titleJa": "ログ・ホライズン",
      "popularity": 138
    },
    {
      "titleEn": "Golden Time",
      "titleJa": "ゴールデンタイム",
      "popularity": 152
    },
    {
      "titleEn": "Date A Live",
      "titleJa": "デート・ア・ライブ",
      "popularity": 156
    },
    {
      "titleEn": "Danganronpa: The Animation",
      "titleJa": "ダンガンロンパ 希望の学園と絶望の高校生 THE ANIMATION",
      "popularity": 184
    },
    {
      "titleEn": "High School DxD New",
      "titleJa": "ハイスクールD×D NEW",
      "popularity": 196
    },
    {
      "titleEn": "Kuroko's Basketball 2",
      "titleJa": "黒子のバスケ",
      "popularity": 214
    },
    {
      "titleEn": "Magi: The Kingdom of Magic",
      "titleJa": "マギ The kingdom of magic",
      "popularity": 223
    }
  ],
  "2014": [
    {
      "titleEn": "Tokyo Ghoul",
      "titleJa": "東京喰種-トーキョーグール-",
      "popularity": 10
    },
    {
      "titleEn": "No Game, No Life",
      "titleJa": "ノーゲーム・ノーライフ",
      "popularity": 19
    },
    {
      "titleEn": "Your Lie in April",
      "titleJa": "四月は君の嘘",
      "popularity": 24
    },
    {
      "titleEn": "Noragami",
      "titleJa": "ノラガミ",
      "popularity": 27
    },
    {
      "titleEn": "Akame ga Kill!",
      "titleJa": "アカメが斬る！",
      "popularity": 30
    },
    {
      "titleEn": "The Seven Deadly Sins",
      "titleJa": "七つの大罪",
      "popularity": 33
    },
    {
      "titleEn": "Haikyu!!",
      "titleJa": "ハイキュー!!",
      "popularity": 36
    },
    {
      "titleEn": "Sword Art Online II",
      "titleJa": "ソードアート・オンライン II",
      "popularity": 40
    },
    {
      "titleEn": "Parasyte: The Maxim",
      "titleJa": "寄生獣 セイの格率",
      "popularity": 43
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Stardust Crusaders",
      "titleJa": "ジョジョの奇妙な冒険 スターダストクルセイダース",
      "popularity": 110
    },
    {
      "titleEn": "Terror in Resonance",
      "titleJa": "残響のテロル",
      "popularity": 123
    },
    {
      "titleEn": "Nisekoi: False Love",
      "titleJa": "ニセコイ",
      "popularity": 125
    }
  ],
  "2015": [
    {
      "titleEn": "One Punch Man",
      "titleJa": "ワンパンマン",
      "popularity": 4
    },
    {
      "titleEn": "Assassination Classroom",
      "titleJa": "暗殺教室",
      "popularity": 34
    },
    {
      "titleEn": "Death Parade",
      "titleJa": "デス・パレード",
      "popularity": 50
    },
    {
      "titleEn": "Tokyo Ghoul √A",
      "titleJa": "東京喰種√A",
      "popularity": 52
    },
    {
      "titleEn": "Food Wars! Shokugeki no Soma",
      "titleJa": "食戟のソーマ",
      "popularity": 63
    },
    {
      "titleEn": "Charlotte",
      "titleJa": "Charlotte（シャーロット）",
      "popularity": 66
    },
    {
      "titleEn": "Overlord",
      "titleJa": "オーバーロード",
      "popularity": 69
    },
    {
      "titleEn": "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
      "titleJa": "ダンジョンに出会いを求めるのは間違っているだろうか",
      "popularity": 76
    },
    {
      "titleEn": "Noragami Aragoto",
      "titleJa": "ノラガミ ARAGOTO",
      "popularity": 84
    },
    {
      "titleEn": "Haikyu!! 2nd Season",
      "titleJa": "ハイキュー!! セカンドシーズン",
      "popularity": 88
    },
    {
      "titleEn": "Seraph of the End: Vampire Reign",
      "titleJa": "終わりのセラフ",
      "popularity": 102
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
      "titleJa": "ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編",
      "popularity": 134
    }
  ],
  "2016": [
    {
      "titleEn": "My Hero Academia",
      "titleJa": "僕のヒーローアカデミア",
      "popularity": 7
    },
    {
      "titleEn": "Re:ZERO -Starting Life in Another World-",
      "titleJa": "Re:ゼロから始める異世界生活",
      "popularity": 23
    },
    {
      "titleEn": "Mob Psycho 100",
      "titleJa": "モブサイコ100",
      "popularity": 28
    },
    {
      "titleEn": "Erased",
      "titleJa": "僕だけがいない街",
      "popularity": 29
    },
    {
      "titleEn": "KonoSuba: God's Blessing on This Wonderful World!",
      "titleJa": "この素晴らしい世界に祝福を！",
      "popularity": 39
    },
    {
      "titleEn": "Assassination Classroom Second Season",
      "titleJa": "暗殺教室　第２期",
      "popularity": 87
    },
    {
      "titleEn": "Bungo Stray Dogs",
      "titleJa": "文豪ストレイドッグス",
      "popularity": 89
    },
    {
      "titleEn": "Haikyu!! 3rd Season",
      "titleJa": "ハイキュー!! 烏野高校 VS 白鳥沢学園高校",
      "popularity": 116
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Diamond Is Unbreakable",
      "titleJa": "ジョジョの奇妙な冒険 ダイヤモンドは砕けない",
      "popularity": 129
    },
    {
      "titleEn": "The Disastrous Life of Saiki K.",
      "titleJa": "斉木楠雄のΨ難",
      "popularity": 132
    },
    {
      "titleEn": "Food Wars! The Second Plate",
      "titleJa": "食戟のソーマ 弍ノ皿",
      "popularity": 135
    },
    {
      "titleEn": "ReLIFE",
      "titleJa": "ReLIFE",
      "popularity": 151
    }
  ],
  "2017": [
    {
      "titleEn": "Attack on Titan Season 2",
      "titleJa": "進撃の巨人 Season2",
      "popularity": 12
    },
    {
      "titleEn": "My Hero Academia Season 2",
      "titleJa": "僕のヒーローアカデミア",
      "popularity": 15
    },
    {
      "titleEn": "Black Clover",
      "titleJa": "ブラッククローバー",
      "popularity": 56
    },
    {
      "titleEn": "KonoSuba: God's Blessing on This Wonderful World! 2",
      "titleJa": "この素晴らしい世界に祝福を！ 2",
      "popularity": 77
    },
    {
      "titleEn": "Kakegurui",
      "titleJa": "賭ケグルイ",
      "popularity": 80
    },
    {
      "titleEn": "Made in Abyss",
      "titleJa": "メイドインアビス",
      "popularity": 91
    },
    {
      "titleEn": "Classroom of the Elite",
      "titleJa": "ようこそ実力至上主義の教室へ",
      "popularity": 103
    },
    {
      "titleEn": "Miss Kobayashi's Dragon Maid",
      "titleJa": "小林さんちのメイドラゴン",
      "popularity": 112
    },
    {
      "titleEn": "Food Wars! The Third Plate",
      "titleJa": "食戟のソーマ 餐ノ皿",
      "popularity": 171
    },
    {
      "titleEn": "Saga of Tanya the Evil",
      "titleJa": "幼女戦記",
      "popularity": 177
    },
    {
      "titleEn": "The Ancient Magus' Bride",
      "titleJa": "魔法使いの嫁",
      "popularity": 180
    },
    {
      "titleEn": "Masamune-kun's Revenge",
      "titleJa": "政宗くんのリベンジ",
      "popularity": 200
    }
  ],
  "2018": [
    {
      "titleEn": "Attack on Titan Season 3",
      "titleJa": "進撃の巨人 Season3",
      "popularity": 18
    },
    {
      "titleEn": "My Hero Academia Season 3",
      "titleJa": "僕のヒーローアカデミア",
      "popularity": 26
    },
    {
      "titleEn": "Violet Evergarden",
      "titleJa": "ヴァイオレット・エヴァーガーデン",
      "popularity": 46
    },
    {
      "titleEn": "Rascal Does Not Dream of Bunny Girl Senpai",
      "titleJa": "青春ブタ野郎はバニーガール先輩の夢を見ない",
      "popularity": 49
    },
    {
      "titleEn": "DARLING in the FRANXX",
      "titleJa": "ダーリン・イン・ザ・フランキス",
      "popularity": 61
    },
    {
      "titleEn": "That Time I Got Reincarnated as a Slime",
      "titleJa": "転生したらスライムだった件",
      "popularity": 81
    },
    {
      "titleEn": "Tokyo Ghoul:re",
      "titleJa": "東京喰種トーキョーグール：re",
      "popularity": 118
    },
    {
      "titleEn": "Goblin Slayer",
      "titleJa": "ゴブリンスレイヤー",
      "popularity": 131
    },
    {
      "titleEn": "The Seven Deadly Sins: Revival of the Commandments",
      "titleJa": "七つの大罪 戒めの復活",
      "popularity": 136
    },
    {
      "titleEn": "Sword Art Online: Alicization",
      "titleJa": "ソードアート・オンライン アリシゼーション",
      "popularity": 148
    },
    {
      "titleEn": "JoJo's Bizarre Adventure: Golden Wind",
      "titleJa": "ジョジョの奇妙な冒険 黄金の風",
      "popularity": 149
    },
    {
      "titleEn": "Overlord II",
      "titleJa": "オーバーロードⅡ",
      "popularity": 155
    }
  ],
  "2019": [
    {
      "titleEn": "Demon Slayer: Kimetsu no Yaiba",
      "titleJa": "鬼滅の刃",
      "popularity": 5
    },
    {
      "titleEn": "Attack on Titan Season 3 Part 2",
      "titleJa": "進撃の巨人 Season3 Part.2",
      "popularity": 21
    },
    {
      "titleEn": "The Promised Neverland",
      "titleJa": "約束のネバーランド",
      "popularity": 38
    },
    {
      "titleEn": "Dr. Stone",
      "titleJa": "ドクターストーン",
      "popularity": 48
    },
    {
      "titleEn": "Kaguya-sama: Love is War",
      "titleJa": "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
      "popularity": 51
    },
    {
      "titleEn": "My Hero Academia Season 4",
      "titleJa": "僕のヒーローアカデミア",
      "popularity": 53
    },
    {
      "titleEn": "One Punch Man Season 2",
      "titleJa": "ワンパンマン",
      "popularity": 55
    },
    {
      "titleEn": "The Rising of the Shield Hero",
      "titleJa": "盾の勇者の成り上がり",
      "popularity": 68
    },
    {
      "titleEn": "Vinland Saga",
      "titleJa": "ヴィンランド・サガ",
      "popularity": 70
    },
    {
      "titleEn": "Mob Psycho 100 II",
      "titleJa": "モブサイコ100 II",
      "popularity": 73
    },
    {
      "titleEn": "Fire Force",
      "titleJa": "炎炎ノ消防隊",
      "popularity": 95
    },
    {
      "titleEn": "Dororo",
      "titleJa": "どろろ",
      "popularity": 107
    }
  ],
  "2020": [
    {
      "titleEn": "Jujutsu Kaisen",
      "titleJa": "呪術廻戦",
      "popularity": 13
    },
    {
      "titleEn": "Kaguya-sama: Love is War?",
      "titleJa": "かぐや様は告らせたい？～天才たちの恋愛頭脳戦～",
      "popularity": 99
    },
    {
      "titleEn": "Re:ZERO -Starting Life in Another World- Season 2",
      "titleJa": "Re：ゼロから始める異世界生活",
      "popularity": 127
    },
    {
      "titleEn": "Rent-a-Girlfriend",
      "titleJa": "彼女、お借りします",
      "popularity": 163
    },
    {
      "titleEn": "Tower of God",
      "titleJa": "神之塔 -Tower of God-",
      "popularity": 168
    },
    {
      "titleEn": "Haikyu!! To the Top",
      "titleJa": "ハイキュー!! TO THE TOP",
      "popularity": 172
    },
    {
      "titleEn": "The God of High School",
      "titleJa": "THE GOD OF HIGH SCHOOL ゴッド・オブ・ハイスクール",
      "popularity": 190
    },
    {
      "titleEn": "Haikyu!! To the Top 2nd-cour",
      "titleJa": "ハイキュー TO THE TOP 第2クール",
      "popularity": 218
    },
    {
      "titleEn": "The Misfit of Demon King Academy",
      "titleJa": "魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～",
      "popularity": 229
    },
    {
      "titleEn": "Fire Force Season 2",
      "titleJa": "炎炎ノ消防隊 弐ノ章",
      "popularity": 230
    },
    {
      "titleEn": "Tonikawa: Over The Moon For You",
      "titleJa": "トニカクカワイイ",
      "popularity": 265
    },
    {
      "titleEn": "My Teen Romantic Comedy SNAFU Climax!",
      "titleJa": "やはり俺の青春ラブコメはまちがっている。完",
      "popularity": 270
    }
  ],
  "2021": [
    {
      "titleEn": "Attack on Titan: Final Season",
      "titleJa": "進撃の巨人 The Final Season",
      "popularity": 31
    },
    {
      "titleEn": "Horimiya",
      "titleJa": "ホリミヤ",
      "popularity": 83
    },
    {
      "titleEn": "Mushoku Tensei: Jobless Reincarnation",
      "titleJa": "無職転生 ～異世界行ったら本気だす～",
      "popularity": 92
    },
    {
      "titleEn": "Tokyo Revengers",
      "titleJa": "東京リベンジャーズ",
      "popularity": 105
    },
    {
      "titleEn": "My Hero Academia Season 5",
      "titleJa": "僕のヒーローアカデミア",
      "popularity": 115
    },
    {
      "titleEn": "Dr. Stone: Stone Wars",
      "titleJa": "ドクターストーン STONE WARS",
      "popularity": 140
    },
    {
      "titleEn": "That Time I Got Reincarnated as a Slime Season 2",
      "titleJa": "転生したらスライムだった件",
      "popularity": 161
    },
    {
      "titleEn": "Mushoku Tensei: Jobless Reincarnation Part 2",
      "titleJa": "無職転生 ～異世界行ったら本気だす～ 第2クール",
      "popularity": 166
    },
    {
      "titleEn": "Re:ZERO -Starting Life in Another World- Season 2 Part 2",
      "titleJa": "Re：ゼロから始める異世界生活",
      "popularity": 174
    },
    {
      "titleEn": "The Promised Neverland Season 2",
      "titleJa": "約束のネバーランド",
      "popularity": 189
    },
    {
      "titleEn": "Komi Can't Communicate",
      "titleJa": "古見さんは、コミュ症です。",
      "popularity": 191
    },
    {
      "titleEn": "To Your Eternity",
      "titleJa": "不滅のあなたへ",
      "popularity": 198
    }
  ],
  "2022": [
    {
      "titleEn": "Chainsaw Man",
      "titleJa": "チェンソーマン",
      "popularity": 59
    },
    {
      "titleEn": "Spy x Family",
      "titleJa": "SPY×FAMILY",
      "popularity": 60
    },
    {
      "titleEn": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      "titleJa": "鬼滅の刃 遊郭編",
      "popularity": 75
    },
    {
      "titleEn": "Attack on Titan: Final Season Part 2",
      "titleJa": "進撃の巨人 The Final Season Part 2",
      "popularity": 97
    },
    {
      "titleEn": "My Dress-Up Darling",
      "titleJa": "その着せ替え人形は恋をする",
      "popularity": 130
    },
    {
      "titleEn": "Spy x Family Part 2",
      "titleJa": "SPY×FAMILY",
      "popularity": 164
    },
    {
      "titleEn": "Kaguya-sama: Love is War -Ultra Romantic-",
      "titleJa": "かぐや様は告らせたい-ウルトラロマンティック-",
      "popularity": 167
    },
    {
      "titleEn": "The Rising of the Shield Hero Season 2",
      "titleJa": "盾の勇者の成り上がり Season2",
      "popularity": 253
    },
    {
      "titleEn": "Blue Lock",
      "titleJa": "ブルーロック",
      "popularity": 255
    },
    {
      "titleEn": "Mob Psycho 100 III",
      "titleJa": "モブサイコ100 III",
      "popularity": 268
    },
    {
      "titleEn": "The Eminence in Shadow",
      "titleJa": "陰の実力者になりたくて！",
      "popularity": 272
    },
    {
      "titleEn": "My Hero Academia Season 6",
      "titleJa": "僕のヒーローアカデミア",
      "popularity": 294
    }
  ],
  "2023": [
    {
      "titleEn": "Jujutsu Kaisen Season 2",
      "titleJa": "呪術廻戦 懐玉・玉折／渋谷事変",
      "popularity": 128
    },
    {
      "titleEn": "Frieren: Beyond Journey's End",
      "titleJa": "葬送のフリーレン",
      "popularity": 139
    },
    {
      "titleEn": "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
      "titleJa": "鬼滅の刃 刀鍛冶の里編",
      "popularity": 176
    },
    {
      "titleEn": "[Oshi No Ko]",
      "titleJa": "【推しの子】",
      "popularity": 192
    },
    {
      "titleEn": "Hell's Paradise",
      "titleJa": "地獄楽",
      "popularity": 250
    },
    {
      "titleEn": "Vinland Saga Season 2",
      "titleJa": "ヴィンランド・サガ SEASON2",
      "popularity": 290
    },
    {
      "titleEn": "Mashle: Magic and Muscles",
      "titleJa": "マッシュル-MASHLE-",
      "popularity": 315
    },
    {
      "titleEn": "Mushoku Tensei: Jobless Reincarnation Season 2",
      "titleJa": "無職転生 II ～異世界行ったら本気だす～",
      "popularity": 332
    },
    {
      "titleEn": "The Apothecary Diaries",
      "titleJa": "薬屋のひとりごと",
      "popularity": 352
    },
    {
      "titleEn": "Zom 100: Bucket List of the Dead",
      "titleJa": "ゾン100～ゾンビになるまでにしたい100のこと～",
      "popularity": 373
    },
    {
      "titleEn": "Spy x Family Season 2",
      "titleJa": "SPY×FAMILY Season 2",
      "popularity": 398
    },
    {
      "titleEn": "Heavenly Delusion",
      "titleJa": "天国大魔境",
      "popularity": 423
    }
  ],
  "2024": [
    {
      "titleEn": "Solo Leveling",
      "titleJa": "俺だけレベルアップな件",
      "popularity": 186
    },
    {
      "titleEn": "Dan Da Dan",
      "titleJa": "ダンダダン",
      "popularity": 293
    },
    {
      "titleEn": "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc",
      "titleJa": "鬼滅の刃 柱稽古編",
      "popularity": 368
    },
    {
      "titleEn": "Kaiju No. 8",
      "titleJa": "怪獣8号",
      "popularity": 393
    },
    {
      "titleEn": "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
      "titleJa": "無職転生 II ～異世界行ったら本気だす～ (第2クール)",
      "popularity": 489
    },
    {
      "titleEn": "KonoSuba: God's Blessing on This Wonderful World! 3",
      "titleJa": "この素晴らしい世界に祝福を！3",
      "popularity": 490
    },
    {
      "titleEn": "Delicious in Dungeon",
      "titleJa": "ダンジョン飯",
      "popularity": 498
    },
    {
      "titleEn": "Classroom of the Elite III",
      "titleJa": "ようこそ実力至上主義の教室へ 3rd Season",
      "popularity": 524
    },
    {
      "titleEn": "Mashle: Magic and Muscles The Divine Visionary Candidate Exam Arc",
      "titleJa": "マッシュル-MASHLE- 神覚者候補選抜試験編",
      "popularity": 551
    },
    {
      "titleEn": "[Oshi No Ko] Season 2",
      "titleJa": "【推しの子】第2期",
      "popularity": 554
    },
    {
      "titleEn": "Alya Sometimes Hides Her Feelings in Russian",
      "titleJa": "時々ボソッとロシア語でデレる隣のアーリャさん",
      "popularity": 589
    },
    {
      "titleEn": "That Time I Got Reincarnated as a Slime Season 3",
      "titleJa": "転生したらスライムだった件 第3期",
      "popularity": 593
    }
  ]
}

// Helper function to get anime title by language
export const getAnimeTitle = (anime: AnimeItem, language: Language): string => {
  if (language === "ja") return anime.titleJa
  return anime.titleEn
}

export default data

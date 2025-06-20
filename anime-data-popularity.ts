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
      "titleEn": "Castle in the Sky",
      "titleJa": "天空の城ラピュタ",
      "popularity": 464
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
      "titleEn": "Dragon Ball: Curse of the Blood Rubies",
      "titleJa": "ドラゴンボール 神龍の伝説",
      "popularity": 2765
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
      "titleEn": "Project A-Ko",
      "titleJa": "プロジェクトＡ子",
      "popularity": 4886
    },
    {
      "titleEn": "Fist of the North Star: The Movie",
      "titleJa": "北斗の拳",
      "popularity": 4949
    },
    {
      "titleEn": "M.D. Geist",
      "titleJa": "装鬼兵ＭＤガイスト",
      "popularity": 5401
    },
    {
      "titleEn": "Barefoot Gen 2",
      "titleJa": "はだしのゲン　２",
      "popularity": 5836
    },
    {
      "titleEn": "Violence Jack: Slumking",
      "titleJa": "バイオレンス ジャック 〜ハーレム・ボンバー編〜",
      "popularity": 5860
    }
  ],
  "1987": [
    {
      "titleEn": "City Hunter",
      "titleJa": "シティーハンター",
      "popularity": 2457
    },
    {
      "titleEn": "Dragon Ball: Sleeping Princess in Devil's Castle",
      "titleJa": "ドラゴンボール 魔神城のねむり姫",
      "popularity": 2830
    },
    {
      "titleEn": "Wicked City",
      "titleJa": "妖獣都市",
      "popularity": 3013
    },
    {
      "titleEn": "Bubblegum Crisis",
      "titleJa": "バブルガムクライシス",
      "popularity": 3050
    },
    {
      "titleEn": "Kimagure Orange Road",
      "titleJa": "きまぐれオレンジ☆ロード",
      "popularity": 3323
    },
    {
      "titleEn": "Royal Space Force: The Wings of Honneamise",
      "titleJa": "王立宇宙軍 オネアミスの翼",
      "popularity": 3404
    },
    {
      "titleEn": "Neo Tokyo",
      "titleJa": "Manie-Manie 迷宮物語",
      "popularity": 3972
    },
    {
      "titleEn": "Devilman: The Birth",
      "titleJa": "デビルマン 誕生編",
      "popularity": 4136
    },
    {
      "titleEn": "Fist of the North Star 2",
      "titleJa": "北斗の拳2",
      "popularity": 4187
    },
    {
      "titleEn": "Robot Carnival",
      "titleJa": "ロボット・カーニバル",
      "popularity": 4440
    },
    {
      "titleEn": "Saint Seiya: Evil Goddess Eris",
      "titleJa": "聖闘士星矢 邪神エリス",
      "popularity": 5163
    },
    {
      "titleEn": "Black Magic M-66",
      "titleJa": "ブラックマジックＭ（マリオ）－６６",
      "popularity": 5237
    }
  ],
  "1988": [
    {
      "titleEn": "My Neighbor Totoro",
      "titleJa": "となりのトトロ",
      "popularity": 144
    },
    {
      "titleEn": "Akira",
      "titleJa": "AKIRA（アキラ）",
      "popularity": 209
    },
    {
      "titleEn": "Grave of the Fireflies",
      "titleJa": "火垂るの墓",
      "popularity": 300
    },
    {
      "titleEn": "Legend of the Galactic Heroes",
      "titleJa": "銀河英雄伝説",
      "popularity": 754
    },
    {
      "titleEn": "Gunbuster",
      "titleJa": "トップをねらえ！ GunBuster",
      "popularity": 1772
    },
    {
      "titleEn": "Dragon Ball: Mystical Adventure",
      "titleJa": "ドラゴンボール 摩訶不思議大冒険",
      "popularity": 3019
    },
    {
      "titleEn": "Mobile Suit Gundam: Char's Counterattack",
      "titleJa": "機動戦士ガンダム 逆襲のシャア",
      "popularity": 3201
    },
    {
      "titleEn": "Legend of the Galactic Heroes: My Conquest is the Sea of Stars",
      "titleJa": "銀河英雄伝説: わが征くは星の大海",
      "popularity": 3697
    },
    {
      "titleEn": "Patlabor: The Mobile Police",
      "titleJa": "機動警察パトレイバー",
      "popularity": 3742
    },
    {
      "titleEn": "Appleseed",
      "titleJa": "アップル・シード",
      "popularity": 4164
    },
    {
      "titleEn": "Dragon Ball Specials",
      "titleJa": "ドラゴンボール",
      "popularity": 4190
    },
    {
      "titleEn": "City Hunter 2",
      "titleJa": "シティーハンター2",
      "popularity": 4377
    }
  ],
  "1989": [
    {
      "titleEn": "Dragon Ball Z",
      "titleJa": "ドラゴンボールZ",
      "popularity": 114
    },
    {
      "titleEn": "Kiki's Delivery Service",
      "titleJa": "魔女の宅急便",
      "popularity": 372
    },
    {
      "titleEn": "Ranma ½",
      "titleJa": "らんま1/2",
      "popularity": 961
    },
    {
      "titleEn": "Dragon Ball Z: Dead Zone",
      "titleJa": "ドラゴンボールZ オラの悟飯をかえせッ!!",
      "popularity": 1864
    },
    {
      "titleEn": "Mobile Suit Gundam 0080: War in the Pocket",
      "titleJa": "機動戦士ガンダム 0080 ポケットの中の戦争",
      "popularity": 2909
    },
    {
      "titleEn": "Patlabor: The Movie",
      "titleJa": "機動警察パトレイバー the Movie",
      "popularity": 3294
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
      "titleEn": "Angel Cop",
      "titleJa": "エンゼルコップ",
      "popularity": 4728
    },
    {
      "titleEn": "Riding Bean",
      "titleJa": "ライディング・ビーン",
      "popularity": 4731
    },
    {
      "titleEn": "Yawara!",
      "titleJa": "YAWARA!",
      "popularity": 4854
    },
    {
      "titleEn": "Baoh the Visitor",
      "titleJa": "バオー来訪者",
      "popularity": 5079
    }
  ],
  "1990": [
    {
      "titleEn": "Dragon Ball Z: The Tree of Might",
      "titleJa": "ドラゴンボールZ 地球まるごと超決戦",
      "popularity": 1711
    },
    {
      "titleEn": "Dragon Ball Z: The World's Strongest",
      "titleJa": "ドラゴンボールZ この世で一番強いヤツ",
      "popularity": 2001
    },
    {
      "titleEn": "Dragon Ball Z: Bardock, The Father of Goku",
      "titleJa": "DRAGON BALL Z スペシャル たったひとりの最終決戦~フリーザに挑んだZ戦士孫悟空の父~",
      "popularity": 2099
    },
    {
      "titleEn": "Record of Lodoss War",
      "titleJa": "ロードス島戦記",
      "popularity": 2463
    },
    {
      "titleEn": "Nadia: The Secret of Blue Water",
      "titleJa": "ふしぎの海のナディア",
      "popularity": 2695
    },
    {
      "titleEn": "Cyber City",
      "titleJa": "CYBER CITY OEDO 808 (サイバーシティ オーエド ハチマルハチ)",
      "popularity": 4079
    },
    {
      "titleEn": "Moomin",
      "titleJa": "楽しいムーミン一家",
      "popularity": 4292
    },
    {
      "titleEn": "Devilman: The Demon Bird",
      "titleJa": "デビルマン 妖鳥シレーヌ編",
      "popularity": 4729
    },
    {
      "titleEn": "A Wind Named Amnesia",
      "titleJa": "風の名はアムネジア",
      "popularity": 5007
    },
    {
      "titleEn": "AD Police Files",
      "titleJa": "ADポリス",
      "popularity": 5150
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
    }
  ],
  "1991": [
    {
      "titleEn": "Dragon Ball Z: Cooler's Revenge",
      "titleJa": "ドラゴンボールZ とびっきりの最強対最強",
      "popularity": 1605
    },
    {
      "titleEn": "Only Yesterday",
      "titleJa": "おもひでぽろぽろ",
      "popularity": 1611
    },
    {
      "titleEn": "Dragon Ball Z: Lord Slug",
      "titleJa": "ドラゴンボールZ 超サイヤ人だ孫悟空",
      "popularity": 1898
    },
    {
      "titleEn": "Dear Brother",
      "titleJa": "おにいさまへ…",
      "popularity": 3298
    },
    {
      "titleEn": "Mobile Suit Gundam 0083: Stardust Memory",
      "titleJa": "機動戦士ガンダム0083 STARDUST MEMORY",
      "popularity": 3427
    },
    {
      "titleEn": "Roujin Z",
      "titleJa": "老人Ｚ",
      "popularity": 3759
    },
    {
      "titleEn": "Mobile Suit Gundam F91",
      "titleJa": "機動戦士ガンダムＦ91",
      "popularity": 4050
    },
    {
      "titleEn": "Otaku no Video",
      "titleJa": "おたくのビデオ",
      "popularity": 4150
    },
    {
      "titleEn": "3x3 Eyes",
      "titleJa": "3×3EYES",
      "popularity": 4374
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
      "titleEn": "Ranma ½: Big Trouble in Nekonron, China",
      "titleJa": "らんま 1/2 中国寝崑崙大決戦! 掟やぶりの激闘編!!",
      "popularity": 4826
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
      "titleEn": "Porco Rosso",
      "titleJa": "紅の豚",
      "popularity": 966
    },
    {
      "titleEn": "Dragon Ball Z: The Return of Cooler",
      "titleJa": "ドラゴンボールZ 激突!!100億パワーの戦士たち",
      "popularity": 1804
    },
    {
      "titleEn": "Dragon Ball Z: Super Android 13!",
      "titleJa": "ドラゴンボールZ 極限バトル!!三大超サイヤ人",
      "popularity": 1860
    },
    {
      "titleEn": "Shin Chan",
      "titleJa": "クレヨンしんちゃん",
      "popularity": 2409
    },
    {
      "titleEn": "Midori",
      "titleJa": "地下幻燈劇画 少女椿",
      "popularity": 2795
    },
    {
      "titleEn": "Tenchi Muyo! Ryo-Ohki",
      "titleJa": "天地無用！魎皇鬼",
      "popularity": 3171
    },
    {
      "titleEn": "Bastard!!",
      "titleJa": "バスタード!! 暗黒の破壊神",
      "popularity": 3509
    },
    {
      "titleEn": "Ai no Kusabi",
      "titleJa": "間の楔",
      "popularity": 3842
    },
    {
      "titleEn": "Video Girl Ai",
      "titleJa": "電影少女 VIDEO・GIRL・AI",
      "popularity": 4225
    },
    {
      "titleEn": "Giant Robo the Animation: The Day the Earth Stood Still",
      "titleJa": "ジャイアントロボ THE ANIMATION 地球が静止する日",
      "popularity": 4426
    }
  ],
  "1993": [
    {
      "titleEn": "Slam Dunk",
      "titleJa": "スラムダンク",
      "popularity": 808
    },
    {
      "titleEn": "Dragon Ball Z: Broly - The Legendary Super Saiyan",
      "titleJa": "ドラゴンボールZ 燃えつきろ!!熱戦・烈戦・超激戦",
      "popularity": 1507
    },
    {
      "titleEn": "Sailor Moon R",
      "titleJa": "美少女戦士セーラームーン R",
      "popularity": 1550
    },
    {
      "titleEn": "Ninja Scroll",
      "titleJa": "獣兵衛忍風帖",
      "popularity": 1651
    },
    {
      "titleEn": "The Ocean Waves",
      "titleJa": "海がきこえる",
      "popularity": 1713
    },
    {
      "titleEn": "JoJo's Bizarre Adventure",
      "titleJa": "ジョジョの奇妙な冒険",
      "popularity": 1744
    },
    {
      "titleEn": "Dragon Ball Z: The History of Trunks",
      "titleJa": "ドラゴンボールＺ・絶望への反抗！！残された超戦士・悟飯とトランク",
      "popularity": 1874
    },
    {
      "titleEn": "Dragon Ball Z: Bojack Unbound",
      "titleJa": "ドラゴンボールZ 銀河ギリギリ!!ぶっちぎりの凄い奴",
      "popularity": 1882
    },
    {
      "titleEn": "Sailor Moon R: The Movie - The Promise of the Rose",
      "titleJa": "美少女戦士セーラームーンＲ THE MOVIE",
      "popularity": 2818
    },
    {
      "titleEn": "Battle Angel Alita",
      "titleJa": "銃夢 GUNNM",
      "popularity": 2933
    },
    {
      "titleEn": "Oh! My Goddess",
      "titleJa": "ああっ女神さまっ",
      "popularity": 3165
    },
    {
      "titleEn": "The Irresponsible Captain Tylor",
      "titleJa": "無責任艦長タイラー",
      "popularity": 3275
    }
  ],
  "1994": [
    {
      "titleEn": "Sailor Moon S",
      "titleJa": "美少女戦士セーラームーン S",
      "popularity": 1640
    },
    {
      "titleEn": "Dragon Ball Z: Broly - Second Coming",
      "titleJa": "ドラゴンボールZ 危険なふたり!超戦士はねむれない",
      "popularity": 1750
    },
    {
      "titleEn": "Dragon Ball Z: Bio-Broly",
      "titleJa": "ドラゴンボールZ 超戦士撃破!!勝のはオレだ",
      "popularity": 1861
    },
    {
      "titleEn": "Pom Poko",
      "titleJa": "平成狸合戦ぽんぽこ",
      "popularity": 2048
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
      "titleEn": "Sailor Moon S Movie: Hearts in Ice",
      "titleJa": "美少女戦士セーラームーンS かぐや姫の恋人",
      "popularity": 3153
    },
    {
      "titleEn": "Macross Plus",
      "titleJa": "マクロスプラス",
      "popularity": 3311
    },
    {
      "titleEn": "Young GTO",
      "titleJa": "湘南純愛組!",
      "popularity": 3434
    },
    {
      "titleEn": "DNA²",
      "titleJa": "Ｄ・Ｎ・Ａ²　～何処かで失くしたあいつのアイツ～",
      "popularity": 3519
    },
    {
      "titleEn": "Genocyber",
      "titleJa": "ジェノサイバー",
      "popularity": 3720
    }
  ],
  "1995": [
    {
      "titleEn": "Neon Genesis Evangelion",
      "titleJa": "新世紀エヴァンゲリオン",
      "popularity": 45
    },
    {
      "titleEn": "Ghost in the Shell",
      "titleJa": "GHOST IN THE SHELL（攻殻機動隊）",
      "popularity": 341
    },
    {
      "titleEn": "Golden Boy",
      "titleJa": "ゴールデンボーイ",
      "popularity": 573
    },
    {
      "titleEn": "Whisper of the Heart",
      "titleJa": "耳をすませば",
      "popularity": 654
    },
    {
      "titleEn": "Mobile Suit Gundam Wing",
      "titleJa": "新機動戦記ガンダムW",
      "popularity": 1556
    },
    {
      "titleEn": "Dragon Ball Z: Fusion Reborn",
      "titleJa": "ドラゴンボールZ 復活のフュージョン!!悟空とベジータ",
      "popularity": 1581
    },
    {
      "titleEn": "Slayers",
      "titleJa": "スレイヤーズ",
      "popularity": 1677
    },
    {
      "titleEn": "Memories",
      "titleJa": "MEMORIES（メモリーズ）",
      "popularity": 1685
    },
    {
      "titleEn": "Dragon Ball Z: Wrath of the Dragon",
      "titleJa": "ドラゴンボールZ 龍拳爆発!!悟空がやらねば誰がやる",
      "popularity": 1754
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
      "titleEn": "Mobile Suit Gundam: The 08th MS Team",
      "titleJa": "機動戦士ガンダム 第08MS小隊",
      "popularity": 2417
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
      "titleEn": "Dragon Ball: The Path to Power",
      "titleJa": "ドラゴンボール 最強への道",
      "popularity": 2918
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
      "titleEn": "Angel Densetsu",
      "titleJa": "エンジェル伝説",
      "popularity": 3552
    }
  ],
  "1997": [
    {
      "titleEn": "Princess Mononoke",
      "titleJa": "もののけ姫",
      "popularity": 106
    },
    {
      "titleEn": "Neon Genesis Evangelion: The End of Evangelion",
      "titleJa": "新世紀エヴァンゲリオン劇場版 Air / まごころを, 君に",
      "popularity": 178
    },
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
      "titleEn": "Neon Genesis Evangelion: Death & Rebirth",
      "titleJa": "新世紀エヴァンゲリオン劇場版 シト新生",
      "popularity": 968
    },
    {
      "titleEn": "Revolutionary Girl Utena",
      "titleJa": "少女革命ウテナ",
      "popularity": 1126
    },
    {
      "titleEn": "Dragon Ball GT: A Hero's Legacy",
      "titleJa": "ドラゴンボールGT 悟空外伝! 勇気の証しは四星球(スーシンチュウ)",
      "popularity": 2553
    },
    {
      "titleEn": "Case Closed Movie 01: The Time Bombed Skyscraper",
      "titleJa": "名探偵コナン 時計じかけの摩天楼",
      "popularity": 2682
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
      "titleEn": "Samurai X: The Motion Picture",
      "titleJa": "るろうに剣心 -明治剣客浪漫譚- 維新志士への鎮魂歌",
      "popularity": 3233
    },
    {
      "titleEn": "Mobile Suit Gundam Wing: Endless Waltz",
      "titleJa": "新機動戦記ガンダムW エンドレス・ワルツ",
      "popularity": 3381
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
      "titleEn": "Perfect Blue",
      "titleJa": "パーフェクトブルー",
      "popularity": 280
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
      "titleEn": "Pokémon: The First Movie - Mewtwo Strikes Back",
      "titleJa": "ポケットモンスター ミュウツーの逆襲",
      "popularity": 952
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
      "titleEn": "Case Closed Movie 02: The Fourteenth Target",
      "titleJa": "名探偵コナン １４番目の標的",
      "popularity": 2876
    },
    {
      "titleEn": "Mobile Suit Gundam Wing: Endless Waltz",
      "titleJa": "新機動戦記ガンダムW Endless Waltz 特別篇",
      "popularity": 2974
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
      "titleEn": "Samurai X: Trust and Betrayal",
      "titleJa": "るろうに剣心―明治剣客浪漫譚―追憶編",
      "popularity": 915
    },
    {
      "titleEn": "Initial D Second Stage",
      "titleJa": "頭文字〈イニシャル〉D SECOND STAGE",
      "popularity": 1052
    },
    {
      "titleEn": "Pokémon: The Movie 2000",
      "titleJa": "ポケットモンスター 幻のポケモンルギア爆誕",
      "popularity": 1318
    },
    {
      "titleEn": "Now and Then, Here and There",
      "titleJa": "今、そこにいる僕",
      "popularity": 1634
    },
    {
      "titleEn": "Digimon: The Movie",
      "titleJa": "デジモンアドベンチャー 劇場版",
      "popularity": 2037
    },
    {
      "titleEn": "Excel Saga",
      "titleJa": "へっぽこ実験アニメーション エクセル♥サーガ",
      "popularity": 2067
    },
    {
      "titleEn": "Cardcaptor Sakura The Movie",
      "titleJa": "劇場版 カードキャプターさくら",
      "popularity": 2209
    },
    {
      "titleEn": "The Big O",
      "titleJa": "THEビッグオー",
      "popularity": 2224
    }
  ],
  "2000": [
    {
      "titleEn": "FLCL",
      "titleJa": "フリクリ",
      "popularity": 228
    },
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
      "titleEn": "Vampire Hunter D: Bloodlust",
      "titleJa": "バンパイアハンターD",
      "popularity": 1183
    },
    {
      "titleEn": "Jin-Roh: The Wolf Brigade",
      "titleJa": "人狼 JIN-ROH",
      "popularity": 1338
    },
    {
      "titleEn": "Pokémon 3: The Movie",
      "titleJa": "ポケットモンスター 結晶塔の帝王 ENTEI",
      "popularity": 1404
    },
    {
      "titleEn": "One Piece: The Movie",
      "titleJa": "ONE PIECE",
      "popularity": 1691
    },
    {
      "titleEn": "Boogiepop Phantom",
      "titleJa": "ブギーポップは笑わない Boogiepop Phantom",
      "popularity": 1704
    }
  ],
  "2001": [
    {
      "titleEn": "Spirited Away",
      "titleJa": "千と千尋の神隠し",
      "popularity": 44
    },
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
      "titleEn": "Cowboy Bebop: The Movie",
      "titleJa": "カウボーイビバップ 天国の扉",
      "popularity": 642
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
      "titleEn": "Initial D Third Stage",
      "titleJa": "頭文字〈イニシャル〉D THIRD STAGE",
      "popularity": 1325
    },
    {
      "titleEn": "The Prince of Tennis",
      "titleJa": "テニスの王子様",
      "popularity": 1350
    },
    {
      "titleEn": "Pokémon 4Ever",
      "titleJa": "ポケットモンスター セレビィ 時を越えた遭遇（であい）",
      "popularity": 1588
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
      "titleEn": "The Cat Returns",
      "titleJa": "猫の恩返し",
      "popularity": 898
    },
    {
      "titleEn": "Millennium Actress",
      "titleJa": "千年女優",
      "popularity": 1303
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
      "titleEn": "Tokyo Godfathers",
      "titleJa": "東京ゴッドファーザーズ",
      "popularity": 845
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
      "titleEn": "Howl's Moving Castle",
      "titleJa": "ハウルの動く城",
      "popularity": 100
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
      "titleEn": "Naruto the Movie 1: Ninja Clash in the Land of Snow",
      "titleJa": "劇場版　NARUTO　大活劇！雪姫忍法帖だってばよ!!",
      "popularity": 856
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
      "titleEn": "Fullmetal Alchemist: The Movie - Conqueror of Shamballa",
      "titleJa": "劇場版 鋼の錬金術師 シャンバラを征く者",
      "popularity": 767
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
      "titleEn": "Naruto the Movie 2: Legend of the Stone of Gelel",
      "titleJa": "劇場版　NARUTO　大激突！幻の地底遺跡だってばよ",
      "popularity": 1070
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
      "titleEn": "Hellsing Ultimate",
      "titleJa": "HELLSING OVA",
      "popularity": 182
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
      "titleEn": "The Girl Who Leapt Through Time",
      "titleJa": "時をかける少女",
      "popularity": 254
    },
    {
      "titleEn": "Welcome to the N.H.K.",
      "titleJa": "N・H・Kにようこそ！",
      "popularity": 266
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
      "titleEn": "5 Centimeters per Second",
      "titleJa": "秒速５センチメートル",
      "popularity": 179
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
      "titleEn": "Evangelion: 1.0 You Are (Not) Alone",
      "titleJa": "ヱヴァンゲリヲン新劇場版:序",
      "popularity": 400
    },
    {
      "titleEn": "The Familiar of Zero: Knight of the Twin Moons",
      "titleJa": "ゼロの使い魔 ～双月の騎士～",
      "popularity": 461
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
      "titleEn": "Ponyo",
      "titleJa": "崖の上のポニョ",
      "popularity": 378
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
      "titleEn": "Evangelion: 2.0 You Can (Not) Advance",
      "titleJa": "ヱヴァンゲリヲン新劇場版:破",
      "popularity": 424
    },
    {
      "titleEn": "The Melancholy of Haruhi Suzumiya Season 2",
      "titleJa": "涼宮ハルヒの憂鬱",
      "popularity": 435
    },
    {
      "titleEn": "Summer Wars",
      "titleJa": "サマーウォーズ",
      "popularity": 448
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
      "titleEn": "The Disappearance of Haruhi Suzumiya",
      "titleJa": "涼宮ハルヒの消失",
      "popularity": 370
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
      "titleEn": "Into the Forest of Fireflies' Light",
      "titleJa": "蛍火の杜へ",
      "popularity": 233
    },
    {
      "titleEn": "Haganai: I don't have many friends",
      "titleJa": "僕は友達が少ない",
      "popularity": 245
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
      "titleEn": "The Garden of Words",
      "titleJa": "言の葉の庭",
      "popularity": 210
    },
    {
      "titleEn": "Kuroko's Basketball 2",
      "titleJa": "黒子のバスケ",
      "popularity": 214
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
      "titleEn": "Your Name.",
      "titleJa": "君の名は。",
      "popularity": 11
    },
    {
      "titleEn": "A Silent Voice",
      "titleJa": "聲の形",
      "popularity": 20
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
      "titleEn": "Devilman: Crybaby",
      "titleJa": "DEVILMAN crybaby",
      "popularity": 124
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
      "titleEn": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
      "titleJa": "劇場版 鬼滅の刃 無限列車編",
      "popularity": 71
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
      "titleEn": "Jujutsu Kaisen 0",
      "titleJa": "劇場版 呪術廻戦 0",
      "popularity": 143
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
      "titleEn": "Cyberpunk: Edgerunners",
      "titleJa": "サイバーパンク エッジランナーズ",
      "popularity": 207
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
      "titleEn": "Attack on Titan: Final Season - The Final Chapters",
      "titleJa": "進撃の巨人 The Final Season完結編",
      "popularity": 277
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

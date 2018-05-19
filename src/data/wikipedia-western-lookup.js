// https://en.wikipedia.org/wiki/List_of_emoticons
// inversed data, for lookup:
// [{ ":D" : 'big grin' }, … ]

const wikimojis = getWikimojis();

const westernEmojiLookup = wikimojis.reduce((aggregator, wikimoji) => {
  const { names, emos } = wikimoji;
  const hashmap = emos.reduce(
    (agg, emo) => ({
      ...agg,
      [emo]: names
    }),
    {}
  );

  return {
    ...aggregator,
    ...hashmap
  };
}, {});

export default westernEmojiLookup;

function getWikimojis() {
  return [
    {
      names: ["happy"],
      emos: [
        ":-)",
        ":)",
        ":-]",
        ":]",
        ":-3",
        ":3",
        ":->",
        ":>",
        "8-)",
        "8)",
        ":-}",
        ":}",
        ":o)",
        ":c)",
        ":^)",
        "=]",
        "=)"
      ]
    },
    {
      names: [
        "laughing",
        "big grin",
        "laugh with glasses",
        "wide-eyed surprise"
      ],
      emos: [":-D", ":D", "8-D", "8D", "x-D", "xD", "X-D", "XD", "=D"]
    },
    {
      names: ["frown", "pouting", "sad", "unhappy"],
      emos: [
        ":-(",
        ":(",
        ":-c",
        ":c",
        ":-<",
        ":<",
        ":-[",
        ":[",
        ":-||",
        ">:[",
        ":{",
        ":@"
      ]
    },
    {
      names: ["tears of happiness"],
      emos: [":'-)", ":')"]
    },
    {
      names: ["surprise", "chock"],
      emos: [":-O", ":O", ":-o", ":o", ":-0", "8-0"]
    },
    {
      names: ["kiss"],
      emos: [":-*", ":*", ":×"]
    },
    {
      names: ["wink", "smirk"],
      emos: [";-)", ";)", "*-)", "*)", ";-]", ";]", ";^)", ":-,", ";D"]
    },
    {
      names: [
        "tongue sticking out",
        "cheeky",
        "playful",
        "blowing a raspberry"
      ],
      emos: [
        ":-P",
        ":P",
        "X-P",
        "XP",
        "x-p",
        "xp",
        ":-p",
        ":p",
        ":-Þ",
        ":Þ",
        ":-þ",
        ":þ",
        ":-b",
        ":b",
        "=p",
        ">:P"
      ]
    },
    {
      names: ["skeptical", "annoyed", "hesitant"],
      emos: [
        ":-/",
        ":/",
        ":-.",
        ">:\\",
        ">:/",
        ":\\",
        "=/",
        "=\\",
        ":L",
        "=L",
        ":S"
      ]
    },
    {
      names: ["straight face", "no expression", "indecision"],
      emos: [":-|", ":|"]
    },
    {
      names: ["sealed lips", "wearing braces", "tongue-tied"],
      emos: [":-X", ":X", ":-#", ":#", ":-&", ":&"]
    },
    {
      names: ["angel", "saint", "innocent", "holy"],
      emos: ["O:-)", "O:)", "0:-3", "0:3", "0:-)", "0:)", "0;^)"]
    },
    {
      names: ["evil", "devilish"],
      emos: [">:-)", ">:)", "}:-)", "}:)", "3:-)", "3:)", ">;)"]
    },
    {
      names: ["partied all night"],
      emos: ["#-)"]
    },
    {
      names: ["drunk", "confused"],
      emos: ["%-)"]
    }
    //  {
    //     names: ['amazed'],
    //     emos: [
    //       "(*_*)",
    //       "(*_*;",
    //       "(+_+)",
    //       "(@_@)",
    //       "(@_@。",
    //       "(＠_＠;)",
    //       "＼(◎o◎)／！",
    //     ]
    //   }, {
    //     names: ['shame'],
    //     emos: [
    //       "(-.-)",
    //       "(-_-)",
    //       "(一一)",
    //       "(；一_一)",
    //       "(ー_ー)!!",
    //     ]
    //   }, {
    //     names: ['confused'],
    //     emos: [
    //       "((+_+))",
    //       "(+o+)",
    //       "(°°)",
    //       "(°-°)",
    //       "(°.°)",
    //       "(°_°)",
    //       "(°_°>)",
    //       "(°レ°)",
    //       "(・・?",
    //       "(?_?)",
    //     ]
    //   }, {
    //     names: ['wink'],
    //     emos: [
    //       "(^_-)",
    //       "(^_-)-☆",
    //     ]
    //   }, {
    //     names: ['nervous', 'embarrassed', 'troubled', 'shy'],
    //     emos: [
    //       "(^^ゞ",
    //       "(^_^;)",
    //       "(-_-;)",
    //       "(~_~;)",
    //       "(・.・;)",
    //       "(・_・;)",
    //       "(・・;)",
    //       "^_^;",
    //       "(#^.^#)",
    //     ]
    //   }, {
    //     names: ['crying', 'sad'],
    //     emos: [
    //       ":'-(",
    //       ":'(",
    //       "('_')",
    //       "(/_;)",
    //       "(T_T)",
    //       "(;_;)",
    //       "(;_;",
    //       "(;_:)",
    //       "(;O;)",
    //       "(:_;)",
    //       "(ToT)",
    //       "(Ｔ▽Ｔ)",
    //       "Q.Q",
    //       "QQ",
    //       "Q_Q",
    //     ]
    // }
  ];
}

/**
 * 吴拼到吴语罗马音的基础映射数据。
 *
 * 规则说明：
 * 1. 声母按最长字符串优先匹配，例如 tsh 会先于 ts 匹配。
 * 2. 韵母采用通用默认写法；有方言差异的项目记录在 ambiguousFinals 中。
 * 3. 声调数字只用于切分音节，不写入吴语罗马音结果。
 */
window.WU_ROMAN_DATA = Object.freeze({
  name: "吴拼到吴语罗马音基础映射",
  version: "0.1.0",
  toneDigits: "12345678",

  initials: Object.freeze({
    "tsh": "c",
    "ts": "z",
    "dz": "zz",
    "ph": "p",
    "th": "t",
    "kh": "k",
    "ch": "q",
    "sh": "x",
    "zh": "xx",
    "gn": "n",
    "ny": "n",
    "ng": "ng",
    "gh": "hh",
    "p": "b",
    "b": "bb",
    "t": "d",
    "d": "dd",
    "k": "g",
    "g": "gg",
    "s": "s",
    "z": "ss",
    "c": "j",
    "j": "jj",
    "f": "f",
    "v": "ff",
    "h": "h",
    "n": "n",
    "l": "l",
    "m": "m",
    "w": "w",
    "y": "y"
  }),

  finals: Object.freeze({
    "iang": "iang",
    "iong": "iong",
    "iuq": "iuq",
    "ioq": "ioq",
    "iun": "iun",
    "uang": "uang",
    "aeq": "aaq",
    "aon": "aong",
    "iaq": "iaq",
    "ieu": "ieu",
    "uoe": "uoe",
    "ioe": "ioe",
    "ang": "ang",
    "ong": "ong",
    "an": "ang",
    "on": "ong",
    "un": "un",
    "yu": "iiu",
    "iu": "iu",
    "oe": "oe",
    "au": "au",
    "eu": "eu",
    "aq": "aq",
    "eq": "eq",
    "oq": "oq",
    "iq": "iq",
    "ia": "ia",
    "ie": "i",
    "ua": "ua",
    "ue": "ue",
    "in": "in",
    "en": "en",
    "ou": "ou",
    "er": "er",
    "a": "a",
    "o": "u",
    "u": "uu",
    "y": "i(i)",
    "i": "i",
    "e": "e",
    "m": "m",
    "n": "n",
    "ng": "ng"
  }),

  ambiguousFinals: Object.freeze({
    "u": "按通用默认写作 uu；部分方言或环境可写作 ou 或 ur。",
    "y": "按通用写法记作 i(i)；尖团不分时可简写为 i。",
    "i": "默认按新派上海话写作 i；部分苏州话音位可能写作 ir。",
    "iu": "默认写作 iu；苏州话的部分对应音位可能写作 iur。",
    "ieu": "默认写作 ieu；苏州话的部分对应音位可能写作 iu。"
  })
});

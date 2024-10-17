export interface PollingSource {
  name: string;
  code: string;
  value: boolean;
}

export const defaultSources: Record<string, PollingSource> = {
  formosa: {
    name: "Formosa",
    code: "美麗島",
    value: true,
  },
  cnews: {
    name: "CNews",
    code: "匯流",
    value: true,
  },
  newtalk: {
    name: "NewTalk",
    code: "新頭殼",
    value: true,
  },
  ettoday: {
    name: "ETtoday",
    code: "ETtoday",
    value: true,
  },
  tpof: {
    name: "TPOF",
    code: "台灣民意基金會",
    value: true,
  },
  tvbs: {
    name: "TVBS",
    code: "TVBS",
    value: true,
  },
};

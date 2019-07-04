export const ls = {
  hasKey: key => !!localStorage[key] && !!localStorage[key].length,
  get: key => {
    if (!ls.hasKey(key)) {
      return false;
    }
    var data = localStorage[key];
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      localStorage.setItem(key, value);
    }
  },
  remove: key => localStorage.removeItem(key),
  clear: () => localStorage.clear()
};

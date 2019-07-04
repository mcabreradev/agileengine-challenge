import axios from "axios";

const config = {
  method: "GET",
  headers: {
    Accept: "*/*"
  }
};

export const getWords = (word) => {
  return axios.get('https://api.datamuse.com/words?max=5&ml=' + word, config)
}

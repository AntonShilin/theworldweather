import { GETLATESTNEWS } from "../Types/MainTypes";

export function fetchLatestNews() {
  return (dispatch) => {
    fetch(
      "https://newsapi.org/v2/top-headlines?q=weather&apiKey=20f3c47ba88f40959e5c50ebf472a722"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((result) => dispatch({ type: GETLATESTNEWS, payload: result }))
      .catch(function (err) {
        throw new Error(err);
      });
  };
}

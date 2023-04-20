// import showSearchElem from "@/pages/showSearchElem";
import showSearchHistory from "./showSearchHistory";

const deleteSearchHis = (text, e) => {
  if (text === "Clear All") {
    document.getElementById('searchHistoryElem').remove();
    localStorage.removeItem('searchHistory')
  } else {
    const elem = e.target.closest('li')
    elem.remove()
    let searchHis = JSON.parse(localStorage.getItem('searchHistory'))
    let valIndex = searchHis.indexOf(text)
    searchHis.splice(valIndex, 1)
    localStorage.setItem('searchHistory', JSON.stringify(searchHis))
    showSearchHistory(searchHis)
  }
}

export default deleteSearchHis;
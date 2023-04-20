import showSearchElem from "@/pages/showSearchElem";
import showSearchPage from "@/pages/showSearchPage";

const searchFunc = (e) => {
  if (e.key === 'Enter') {

    let oldSearches = JSON.parse(localStorage.getItem('searchHistory'));
    // console.log(oldSearches)
    if (oldSearches) {

      // console.log(oldSearches)
      oldSearches.push(e.target.value)
      oldSearches = [...new Set(oldSearches)]
      localStorage.setItem('searchHistory', JSON.stringify(oldSearches))
      document.getElementById('showResult').append(showSearchElem(oldSearches))
      showSearchPage(e.target.value)
      document.getElementById('searchInput').value = ''
    } else {
      let searchHisArr = [];
      searchHisArr.push(e.target.value)
      localStorage.setItem('searchHistory', JSON.stringify(searchHisArr))
      document.getElementById('showResult').append(showSearchElem(searchHisArr))
      showSearchPage(searchHisArr[0])
      document.getElementById('searchInput').value = ''
    }

  }


}

export default searchFunc;
const tea4TeamFCC = getTea(40)
///////////////////////////////////////
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
///////////////////////////////////////
var tabsAfterIndex = this.tabs.splice(1);
//////////////////////////////////////
return fixedValue + 1
/////////////////////////////////////
function incrementer (valueToIncrement) {
    return valueToIncrement + 1;
//////////////////////////////////////
function add (list, bookName) {
    return [...list,bookName];
    {
      
    }
    
    }   
    function remove (list, bookName)
    {
      return list.filter(book => book != bookName);
        }
    /////////////////////////////////////
    const ratings=watchList.map(item =>({
        title: item["Title"],
        rating: item["imdbRating"]
      }));
////////////////////////////////////////////////////
for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  /////////////////////////////////////

  var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
   
    return parseFloat(movie.rating) >= 8.0;
  });
//////////////////////////////////////////  
this.forEach(element => {
   
    if (callback(element)) {
      newArray.push(element);
    }
    });
    /////////////////////////////////////////
    return anim.slice(beginSlice,endSlice)
    ////////////////////////////////////////
    return cities.slice(0,3);
    //////////////////////////////////
    return original.concat(newItem);
    ////////////////////////////////////////
    const averageRating = watchList.reduce(({ sum, count }, { Director: dir, imdbRating: rating },  idx, arr) => {
        if (dir === 'Christopher Nolan') {
          count++;
          sum += Number(rating);
        }
        return idx === arr.length - 1
          ? sum / count
          : { sum, count };
      }, { sum: 0, count: 0 });
    ////////////////////////////////////////////////////////
    const squareList = arr => {
        return arr.reduce((sqrIntegers, num) => {
          return Number.isInteger(num) && num > 0
            ? sqrIntegers.concat(num * num)
            : sqrIntegers;
        }, []);
      };
      
      
      
      
  

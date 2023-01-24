function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])) {
      return true;
    } else {
      return false;
    }
  }

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(users => users.gender === gender).reduce((acc, item, idx, arr) => acc + item.age / arr.length, 0); 
    return result;
}
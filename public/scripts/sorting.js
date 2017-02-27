function sortByName(grudges) {
  let sortedGrudges = grudges.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return 1;
    } else if (nameB > nameA) {
      return -1;
    } else {
      return 0;
    }
    });
    return sortedGrudges
}

function sortByDate(grudges) {
  let sortedGrudges = grudges.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;
    if (dateA > dateB) {
      return 1;
    } else if (dateB > dateA) {
      return -1;
    } else {
      return 0;
    }
    });
    return sortedGrudges
}

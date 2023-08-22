export function alphabetizeContacts(array) {
    const refactoredObject = {};
    array.forEach(item => {
        if (item.last_name) {
            const firstLetter = item.last_name.charAt(0).toUpperCase();
            if (!refactoredObject[firstLetter]) {
                refactoredObject[firstLetter] = [];
            }
            refactoredObject[firstLetter].push(item);
        }
    });
    const sortedRefactoredObject  = {};
    Object.keys(refactoredObject)
        .sort()
        .forEach(key => {
            sortedRefactoredObject[key] = refactoredObject[key];
        });
    return sortedRefactoredObject;
}


export function getInitials(first_name, last_name) {
    return first_name.charAt(0).toUpperCase() + last_name.charAt(0).toUpperCase();
}


export function daysFrom(targetDate) {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return "Today";
  } else if (daysDifference > 0) {
    return `in ${daysDifference} day${daysDifference !== 1 ? "s" : ""}`;
  } else {
    return `${-daysDifference} day${-daysDifference !== 1 ? "s" : ""} ago`;
  }
}

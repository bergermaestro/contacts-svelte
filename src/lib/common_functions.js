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

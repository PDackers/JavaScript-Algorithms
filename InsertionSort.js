function insertionSort(array) {
    let temp = null;
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        let j = null;
        for (j = i - 1; array[j] > temp && j >= 0; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}

insertionSort([3, 4, 7, 2, 1, 9, 8]);

function selectionSort(array) {
    let min = null;
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

selectionSort([3, 4, 7, 2, 1, 9, 8]);

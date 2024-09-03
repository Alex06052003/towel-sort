// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    if (matrix.length == 0) return [];
    matrix.forEach((item, index) =>
        index % 2 != 0 ? item.sort((a, b) => b - a) : item
    );
    return matrix.join(",").split(",").map(Number);
};

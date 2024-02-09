const getReviewColor = (total, reviews) => {

    if (reviews == 0) {
        return { color: "#282829", txt: 'No Rating Points' }
    } else {
        const avg = total / reviews;

        if (avg > 0 && avg <= 3) {
            return { color: "#09e81c", txt: 'Need to improve' };
        } else if (avg > 3 && avg <= 6) {
            return { color: "#304bfc", txt: 'Good' };
        } else if (avg > 6 && avg <= 9) {
            return { color: "#9e20f7", txt: 'Very Good' };
        } else if (avg > 9) {
            return { color: "#ffc400", txt: 'Excellent' };
        }
    }
}

const obj = {
    func: getReviewColor
}

export default obj;
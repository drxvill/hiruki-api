export const getSeason = () => {
    const month = new Date().getMonth() + 1
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "WINTER";
        case 3:
        case 4:
        case 5:
            return "SPRING";
        case 6:
        case 7:
        case 8:
            return "SUMMER";
        case 9:
        case 10:
        case 11:
            return "FALL";
        default:
            return null
    }
}

export const getNextSeason = () => {
    const month = new Date().getMonth() + 1
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "SPRING";
        case 3:
        case 4:
        case 5:
            return "SUMMER";
        case 6:
        case 7:
        case 8:
            return "FALL";
        case 9:
        case 10:
        case 11:
            return "WINTER";
        default:
            return null
    }
}
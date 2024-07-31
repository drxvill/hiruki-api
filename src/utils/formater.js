export const formatType = (format) => {
    switch (format) {
        case "TV":
            return "TV Show";
        case "TV_SHORT":
            return "TV Short";
        case "MOVIE":
            return "Movie";
        case "SPECIAL":
            return "Special";
        case "MUSIC":
            return "Music";
        default:
            return format
    }
}

export const formatStatus = (status) => {
    switch (status) {
        case "FINISHED":
            return "Finished";
        case "RELEASING":
            return "Releasing";
        case "NOT_YET_RELEASED":
            return "Not Yet Released";
        case "CANCELLED":
            return "Cancelled";
        default:
            return status
    }
}

export const formatSeason = (format) => {
    switch (format) {
        case "WINTER":
            return "Winter";
        case "SPRING":
            return "Spring";
        case "SUMMER":
            return "Summer";
        case "FALL":
            return "Fall";
        default:
            return format
    }
}
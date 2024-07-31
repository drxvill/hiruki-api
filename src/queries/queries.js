export const SpotlightsQuery =
    () => `query {
        Page(page: 1, perPage: 25) {
            media(type: ANIME, sort: [TRENDING_DESC, POPULARITY_DESC]) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                bannerImage
                format
                status
                season
                seasonYear
                averageScore
                episodes
                description(asHtml: false)
                genres
            }
        }
    }`

export const TrendingQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: TRENDING_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                status
                season
                seasonYear
                averageScore
                episodes
            }
        }
    }`

export const PopularQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: POPULARITY_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                status
                season
                seasonYear
                averageScore
                episodes
            }
        }
    }`

export const UpcomingQuery =
    (page, per, season) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: POPULARITY_DESC, season: ${season}, seasonYear: ${new Date().getFullYear()}) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                status
                season
                seasonYear
                averageScore
                episodes
            }
        }
    }`

export const FavoriteQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: FAVOURITES_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                status
                season
                seasonYear
                averageScore
                episodes
            }
        }
    }`

export const TopQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: SCORE_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                status
                season
                seasonYear
                averageScore
                episodes
            }
        }
    }`

export const MoviesQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: POPULARITY_DESC, format: MOVIE) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                status
                season
                seasonYear
                averageScore
                episodes
            }
        }
    }`

export const SearchQuery =
    (page, per, q) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, search: "${q}") {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                status
                season
                seasonYear
                averageScore
                episodes
            }
        }
    }`

export const InfoQuery =
    (id) => `query {
        Media(id: ${id}, type: ANIME) {
            id
            title {
                romaji
            }
            coverImage {
                extraLarge
            }
            format
            status
            season
            seasonYear
            averageScore
            episodes
            description(asHtml: false)
            genres
            studios(isMain: true) {
                nodes {
                  name
                }
            }
            characters(sort: ROLE, page: 1) {
                edges {
                    node {
                        id
                    name {
                        full
                    }
                    image {
                        large
                    }
                }
                role
            }
                }
        }
    }`

export const RecommendationsQuery =
    (id) => `query {
        Media(id: ${id}, type: ANIME) {
            recommendations(page: 1) {
                nodes {
                    mediaRecommendation {
                        id
                        title {
                            romaji
                        }
                        coverImage {
                            extraLarge
                        }
                        format
                        status
                        season
                        seasonYear
                        averageScore
                        episodes
                    }
                }
            }
        }
    }`
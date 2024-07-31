import axios from "axios";
import { config } from "dotenv"; config();
import {
    SpotlightsQuery,
    TrendingQuery,
    PopularQuery,
    UpcomingQuery,
    FavoriteQuery,
    TopQuery,
    MoviesQuery,
    SearchQuery,
    InfoQuery,
    RecommendationsQuery
} from "../queries/queries.js";
import { formatType, formatStatus, formatSeason } from "../utils/formater.js";
import { getNextSeason } from "../utils/timing.js";
import { getEpisodes, getSources } from "../utils/provider.js";

const getData = axios.create({
    baseURL: process.env.ANILIST_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export const getSpotlights = async () => {
    const query = SpotlightsQuery();
    const response = (await getData.post("", { query })).data

    const data = response.data.Page.media
        .filter(media => media.bannerImage !== null)
        .slice(0, 10)
        .map((media, index) => ({
            rank: index + 1,
            id: media.id,
            title: media.title.romaji,
            cover: media.coverImage.extraLarge,
            banner: media.bannerImage,
            format: formatType(media.format),
            status: formatStatus(media.status),
            season: formatSeason(media.season),
            year: media.seasonYear,
            score: media.averageScore ? `${media.averageScore}%` : null,
            episodes: media.episodes,
            description: media.description,
            genres: media.genres,
        }));

    return { data }
}

export const getTrending = async (page, per) => {
    const query = TrendingQuery(page, per);
    const response = (await getData.post("", { query })).data

    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        lastPage: response.data.Page.pageInfo.lastPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }

    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        format: formatType(media.format),
        status: formatStatus(media.status),
        season: formatSeason(media.season),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
    }));

    return { pagination, data }
}

export const getPopular = async (page, per) => {
    const query = PopularQuery(page, per);
    const response = (await getData.post("", { query })).data

    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        lastPage: response.data.Page.pageInfo.lastPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }

    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        format: formatType(media.format),
        status: formatStatus(media.status),
        season: formatSeason(media.season),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
    }));

    return { pagination, data }
}

export const getUpcoming = async (page, per) => {
    const query = UpcomingQuery(page, per, getNextSeason());
    const response = (await getData.post("", { query })).data

    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        lastPage: response.data.Page.pageInfo.lastPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }

    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        format: formatType(media.format),
        status: formatStatus(media.status),
        season: formatSeason(media.season),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
    }));

    return { pagination, data }
}

export const getFavorite = async (page, per) => {
    const query = FavoriteQuery(page, per);
    const response = (await getData.post("", { query })).data

    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        lastPage: response.data.Page.pageInfo.lastPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }

    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        format: formatType(media.format),
        status: formatStatus(media.status),
        season: formatSeason(media.season),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
    }));

    return { pagination, data }
}

export const getTop = async (page, per) => {
    const query = TopQuery(page, per);
    const response = (await getData.post("", { query })).data

    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        lastPage: response.data.Page.pageInfo.lastPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }

    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        format: formatType(media.format),
        status: formatStatus(media.status),
        season: formatSeason(media.season),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
    }));

    return { pagination, data }
}

export const getMovies = async (page, per) => {
    const query = MoviesQuery(page, per);
    const response = (await getData.post("", { query })).data

    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        lastPage: response.data.Page.pageInfo.lastPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }

    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        format: formatType(media.format),
        status: formatStatus(media.status),
        season: formatSeason(media.season),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
    }));

    return { pagination, data }
}

export const getSearch = async (page, per, q) => {
    const query = SearchQuery(page, per, q);
    const response = (await getData.post("", { query })).data

    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        lastPage: response.data.Page.pageInfo.lastPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }

    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        format: formatType(media.format),
        status: formatStatus(media.status),
        season: formatSeason(media.season),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
    }));

    return { pagination, data }
}

export const getAnimeInfo = async (id) => {
    const query = InfoQuery(id);
    const response = (await getData.post("", { query })).data

    const characters = [];
    if (response.data.Media.characters.edges.length > 0) {
        response.data.Media.characters.edges.map(character => {
            characters.push({
                name: character.node.name.full,
                image: character.node.image.large,
                role: character.role === "MAIN"
                    ? "Main" : character.role === "SUPPORTING"
                        ? "Supporting" : character.role
            });
        });
    }

    return {
        id: response.data.Media.id,
        title: response.data.Media.title.romaji,
        cover: response.data.Media.coverImage.extraLarge,
        format: formatType(response.data.Media.format),
        status: formatStatus(response.data.Media.status),
        season: formatSeason(response.data.Media.season),
        year: response.data.Media.seasonYear,
        score: response.data.Media.averageScore ? `${response.data.Media.averageScore}%` : null,
        episodes: response.data.Media.episodes,
        description: response.data.Media.description,
        studio: response.data.Media.studios.nodes.length > 0 ? response.data.Media.studios.nodes[0].name : null,
        genres: response.data.Media.genres,
        tags: response.data.Media.tags,
        characters
    }
}

export const getAnimeRecommendations = async (id) => {
    const query = RecommendationsQuery(id);
    const response = (await getData.post("", { query })).data

    const recommendations = [];
    if (response.data.Media.recommendations.nodes.length > 0) {
        response.data.Media.recommendations.nodes.map(media => {
            if (media && media.mediaRecommendation) {
                recommendations.push({
                    id: media.mediaRecommendation.id,
                    title: media.mediaRecommendation.title.romaji,
                    cover: media.mediaRecommendation.coverImage.extraLarge,
                    format: formatType(media.mediaRecommendation.format),
                    status: formatStatus(media.mediaRecommendation.status),
                    season: formatSeason(media.mediaRecommendation.season),
                    year: media.mediaRecommendation.seasonYear,
                    score: media.mediaRecommendation.averageScore ? `${media.mediaRecommendation.averageScore}%` : null,
                    episodes: media.mediaRecommendation.episodes
                });
            }
        });
    }

    return { recommendations }
}

export const getAnimeEpisodes = async (id) => {
    return { episodes: await getEpisodes(id) }
}

export const getStreamSources = async (episodeid) => {
    const data = await getSources(episodeid);
    return { sources: data.sources }
}

export const getDownloadLink = async (episodeid) => {
    const data = await getSources(episodeid);
    return { link: data.download }
}

export const getRandomID = async () => {
    const data = (await axios.get("https://raw.githubusercontent.com/5H4D0WILA/IDFetch/main/ids.txt")).data
    const identifiers = data.split("\n");
    let id = null

    for (let i = 0; i < 1; i++) {
        const random = Math.floor(Math.random() * identifiers.length);
        id = identifiers[random];
    }

    return { id }
}
import { META, ANIME } from "@consumet/extensions";
import axios from "axios";

const gogoanime = new ANIME.Gogoanime();
const hianime = new ANIME.Zoro();
const anilist = new META.Anilist();

export const getStreamingProviders = async (id) => {
    const url = `https://raw.githubusercontent.com/drxvill/anilistsync/main/data/${id}.json`;
    const response = (await axios.get(url)).data;
    const keys = Object.keys(response.mappings);
    return keys
}


const getIdentifier = async (id, provider) => {
    if (provider === "gogoanime") {
        const url = `https://raw.githubusercontent.com/drxvill/anilistsync/main/data/${id}.json`;
        const response = (await axios.get(url)).data;
        if (response.mappings && response.mappings.gogoanime && response.mappings.gogoanime.length > 0) {
            return response.mappings.gogoanime[0];
        } else {
            return null
        }
    } else if (provider === "hianime") {
        const url = `https://raw.githubusercontent.com/drxvill/anilistsync/main/data/${id}.json`;
        const response = (await axios.get(url)).data;
        if (response.mappings && response.mappings.hianime && response.mappings.hianime.length > 0) {
            return response.mappings.hianime[0];
        } else {
            return null
        }
    }
}

export const getEpisodes = async (id, provider) => {
    try {
        if (provider === "gogoanime") {
            const data = (await gogoanime.fetchAnimeInfo(await getIdentifier(id, provider))).episodes
            const episodes = [];
            if (data.length > 0) {
                data.map(i => {
                    episodes.push({
                        id: i.id,
                        episode: i.number
                    });
                });
            }
            return episodes
        } else if (provider === "hianime") {
            const response = await hianime.fetchAnimeInfo(await getIdentifier(id, provider))
            const episodes = [];
            if (response.episodes.length > 0) {
                response.episodes.map(i => {
                    episodes.push({
                        id: i.id,
                        episode: i.number
                    });
                });
            }
            return episodes
        }
    } catch (error) {
        return []
    }
}

export const getSources = async (id, provider) => {
    if (provider === "gogoanime") {
        const data = await anilist.fetchEpisodeSources(id);
        const sources = {
            default: data.sources.find(source => source.quality === "default").url,
            backup: data.sources.find(source => source.quality === "backup").url
        }
        return { sources, download: data.download }
    } else if (provider === "hianime") {
        const data = await hianime.fetchEpisodeSources(id);
        const sources = {
            default: data.sources[0].url
        }
        return { sources, download: null }
    }
}
import { META, ANIME } from "@consumet/extensions";
import axios from "axios";

const gogoanime = new ANIME.Gogoanime();
const anilist = new META.Anilist();

export const getIsSuborDub = async (id) => {
    try {
        const url = `https://raw.githubusercontent.com/drxvill/anilistsync/main/data/${id}.json`;
        const response = await axios.get(url);
        const data = response.data;
        if (data && data.mappings && data.mappings.gogoanime) {
            const gogoanime = data.mappings.gogoanime;
            const dub = gogoanime.filter(s => s.endsWith("-dub"));
            const count = dub.length;
            if (count === 1 && gogoanime.length < 2) return "Dub Only"
            if (count > 0 && gogoanime.length > 1) return "Sub & Dub"
            if (gogoanime.length > 0) return "Sub Only"
        } else {
            return null
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null
        }
        return null
    }
}

const getGogoIdentifier = async (id) => {
    try {
        const url = `https://raw.githubusercontent.com/drxvill/anilistsync/main/data/${id}.json`;
        const response = (await axios.get(url)).data;
        if (response.mappings && response.mappings.gogoanime && response.mappings.gogoanime.length > 0) {
            return response.mappings.gogoanime[0];
        } else {
            return null
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null
        }
        return null
    }
}

export const getEpisodes = async (id) => {
    try {
        const data = (await gogoanime.fetchAnimeInfo(await getGogoIdentifier(id))).episodes
        const episodes = [];
        if (data.length > 0) {
            data.map((i, index) => {
                episodes.push({
                    id: i.id,
                    episode: i.number
                });
            });
        }
        return episodes
    } catch (error) {
        return []
    }
}

export const getSources = async (id) => {
    const data = await anilist.fetchEpisodeSources(id);
    const sources = {
        default: data.sources.find(source => source.quality === "default").url,
        backup: data.sources.find(source => source.quality === "backup").url
    }
    return { sources, download: data.download }
}

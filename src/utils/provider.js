import { META, ANIME } from "@consumet/extensions";
import axios from "axios";

const gogoanime = new ANIME.Gogoanime();
const anilist = new META.Anilist();

const getGogoIdentifier = async (id) => {
    const url = `https://raw.githubusercontent.com/drxvill/mal-backup/master/anilist/anime/${id}.json`;
    const response = (await axios.get(url)).data;
    if (response && response.Sites && response.Sites.Gogoanime) {
        const gogoanime = response.Sites.Gogoanime
        const result = Object.values(gogoanime)[0];
        if (result) {
            const identifier = result.identifier
            return identifier
        } else {
            return null
        }
    } else {
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

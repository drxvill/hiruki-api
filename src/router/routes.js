import express from "express";
const router = express.Router();

import {
    getSpotlights,
    getTrending,
    getPopular,
    getUpcoming,
    getFavorite,
    getTop,
    getMovies,
    getSearch,
    getAnimeInfo,
    getAnimeRecommendations,
    getAnimeEpisodes,
    getStreamSources,
    getDownloadLink,
    getRandomID
} from "../modules/modules.js";

router.get("/spotlights", async (request, response) => {
    try {
        response.status(200).json(await getSpotlights());
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/trending", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        response.status(200).json(await getTrending(page, per));
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/popular", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        response.status(200).json(await getPopular(page, per));
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/upcoming", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        response.status(200).json(await getUpcoming(page, per));
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/favorite", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        response.status(200).json(await getFavorite(page, per));
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/top", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        response.status(200).json(await getTop(page, per));
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/movies", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        response.status(200).json(await getMovies(page, per));
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/search", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        const q = request.query.q
        if (q) {
            response.status(200).json(await getSearch(page, per, q));
        } else {
            response.status(400).json({ message: "?q= query param is missing!" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/info", async (request, response) => {
    try {
        const id = request.query.id
        if (id) {
            return response.status(200).json(await getAnimeInfo(id));
        } else {
            response.status(400).json({ message: "?id= query param is missing!" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/recommendations", async (request, response) => {
    try {
        const id = request.query.id
        if (id) {
            response.status(200).json(await getAnimeRecommendations(id));
        } else {
            response.status(400).json({ message: "?id= query param is missing!" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/episodes", async (request, response) => {
    try {
        const id = request.query.id
        const provider = request.query.provider || "gogoanime"
        if (id) {
            response.status(200).json(await getAnimeEpisodes(id, provider));
        } else {
            response.status(400).json({ message: "?id= query param is missing!" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/stream", async (request, response) => {
    try {
        const episodeid = request.query.episodeid
        const provider = request.query.provider || "gogoanime"
        if (episodeid) {
            return response.status(200).json(await getStreamSources(episodeid, provider));
        } else {
            response.status(400).json({ message: "?episodeid= query param is missing!" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/download", async (request, response) => {
    try {
        const episodeid = request.query.episodeid
        const provider = request.query.provider || "gogoanime"
        if (episodeid) {
            return response.status(200).json(await getDownloadLink(episodeid, provider));
        } else {
            response.status(400).json({ message: "?episodeid= query param is missing!" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/random", async (request, response) => {
    try {
        return response.status(200).json(await getRandomID());
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});

export default router
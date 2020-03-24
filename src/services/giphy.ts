import { AxiosResponse, get } from "axios";
import { IGif } from "../interfaces/gif";
import { IGiphyResponse, IGiphyData } from "../interfaces/giphy-response";

const GIPHY_API_KEY: string = "7ECXkiVGyLbwtKY3aaSWTY9CnH6ZEHsh";

class GiphyService {
  async searchGifs(search: string, page: number): Promise<IGif[]> {
    const response: AxiosResponse<IGiphyResponse> = await get(
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          api_key: GIPHY_API_KEY,
          q: search,
          limit: 10,
          offset: (page - 1) * 10
        }
      }
    );

    return response.data.data.map((data: IGiphyData) => ({
      title: data.title,
      id: data.id,
      previewUrl: data.images.preview_gif.url,
      giphyUrl: data.url,
      originalUrl: data.images.original.mp4
    }));
  }
}

export default new GiphyService();

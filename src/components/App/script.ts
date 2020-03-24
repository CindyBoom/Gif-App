import { Component, Vue } from "vue-property-decorator";

import { IGif } from "../../interfaces/gif";
import GiphyService from "../../services/giphy";

@Component
class App extends Vue {
  search: string = "";
  page: number = 1;
  gifs: IGif[] = [];
  stopNextPage: boolean = true;

  currentSearch: string;

  searchNewGifs() {
    this.page = 1;
    this.currentSearch = this.search;
    this.gifs = [];
    this.fetchFromGiphy();
  }

  getNextPage() {
    this.page++;
    this.fetchFromGiphy();
  }

  async fetchFromGiphy() {
    const response: IGif[] = await await GiphyService.searchGifs(
      this.currentSearch,
      this.page
    );

    this.gifs = [...this.gifs, ...response];
    this.stopNextPage = this.gifs.length === 100 || response.length < 10;
  }
}

export default App;

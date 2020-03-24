export interface IGiphyPagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface IGiphyMeta {
  status: number;
  msg: string;
  response_id: string;
}

export interface IGiphyData {
  type: string;
  id: string;
  title: string;
  url: string;
  images: { [key: string]: any };
}

export interface IGiphyResponse {
  data: IGiphyData[];
  pagination: IGiphyPagination;
  meta: IGiphyMeta;
}

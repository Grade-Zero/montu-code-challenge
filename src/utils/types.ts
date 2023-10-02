interface Gif {
  type: string;
  id: string;
  url: string;
  title: string;
  import_datetime: string;
  trending_datetime: string;
  images: {
    fixed_width: {
      url: string;
      height: string;
      width: string;
    }
  }
}

interface ResultModel {
  data: Gif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  }
  meta: {
    status: number;
    msg: string;
    response_id: string;
  }
}

export type { ResultModel, Gif };
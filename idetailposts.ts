export interface IDetailPosts {
    id: number;
    title: string;
    thumbnailUrl: string;
    body: string;
    creationDate: Date;
    likes: number;
    dislikes: number;
    comments: Comment[];
  }

 // Deklarerar interfacet med vilka olika datatyper som ska användas.

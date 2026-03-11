export interface BlogPostMetadata {
    id: string;
    title: string;
    tags: Array<string>;
    date: string;
}

export interface BlogPostContent {
    metadata: BlogPostMetadata;
    body: string;
}
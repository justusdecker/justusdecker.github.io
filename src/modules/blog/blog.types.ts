export interface BlogPostMetadata {
    id: string;
    title: string;
    date: string;
}

export interface BlogPostContent {
    metadata: BlogPostMetadata;
    body: string;
}
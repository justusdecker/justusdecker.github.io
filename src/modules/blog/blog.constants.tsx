import { GitHubRawBaseUrl } from "../common/constants";

export const getBlogIndexUrl = (): string => {
  return `${GitHubRawBaseUrl}webpage-data/main/posts/index.json`;
};

export const getBlogPostUrl = (id: string): string => {
  return `${GitHubRawBaseUrl}webpage-data/main/posts/${id}.md`;
};
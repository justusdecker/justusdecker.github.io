export interface PortfolioMetadata {
    id: string;
    title: string;
    timespan: string;
}

export interface PortfolioEntryContent {
    metadata: PortfolioMetadata;
    body: string;
}
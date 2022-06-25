// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MarkdownItEnv {
  // to be extended with module augmentation
}

export interface MarkdownItHeader {
  level: number;
  title: string;
  slug: string;
  children: MarkdownItHeader[];
}

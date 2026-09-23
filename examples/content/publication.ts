export type PublishableContent = {
  published: boolean;
  noindex: boolean;
  title: string;
};

export type PublicState = {
  visible: boolean;
  indexable: boolean;
};

export function resolvePublicState(
  content: PublishableContent,
): PublicState {
  const hasMeaningfulTitle = content.title.trim().length > 0;
  const visible = content.published && hasMeaningfulTitle;

  return {
    visible,
    indexable: visible && !content.noindex,
  };
}

import { describe, expect, it } from "vitest";

import { resolvePublicState } from "./publication";

describe("resolvePublicState", () => {
  it("publishes and indexes validated content", () => {
    expect(
      resolvePublicState({
        published: true,
        noindex: false,
        title: "Casa Demo",
      }),
    ).toEqual({
      visible: true,
      indexable: true,
    });
  });

  it("allows a visible page to remain noindex", () => {
    expect(
      resolvePublicState({
        published: true,
        noindex: true,
        title: "Conteúdo em validação",
      }),
    ).toEqual({
      visible: true,
      indexable: false,
    });
  });

  it("does not expose unpublished content", () => {
    expect(
      resolvePublicState({
        published: false,
        noindex: false,
        title: "Rascunho",
      }),
    ).toEqual({
      visible: false,
      indexable: false,
    });
  });
});

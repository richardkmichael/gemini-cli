/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

type Model = string;
type TokenCount = number;

// Many models can support more tokens than this but performance degrades
// and it's not worth the extra resources.
export const DEFAULT_TOKEN_LIMIT = 200_000;

export function tokenLimit(model: Model): TokenCount {
  // Add other models if they are below the DEFAULT_TOKEN_LIMIT
  // Pulled from https://ai.google.dev/gemini-api/docs/models
  switch (model) {
    case 'gemini-2.0-flash-preview-image-generation':
      return 32_000;
    default:
      return DEFAULT_TOKEN_LIMIT;
  }
}

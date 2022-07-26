import { TAG_NAME_SCRIPT, TAG_NAME_STYLE } from './constants.js';
import type { SfcBlock, SfcPluginOptions } from './types.js';

export const SCRIPT_SETUP_TAG_OPEN_REGEXP = /^<script\s+.*?\bsetup\b.*?>$/is;

export interface SfcRegExpMatchArray extends Omit<RegExpMatchArray, 'groups'> {
  groups: SfcBlock;
}

/**
 * Generate RegExp for sfc blocks
 */
export const createSfcRegexp = ({
  customBlocks,
}: Required<Pick<SfcPluginOptions, 'customBlocks'>>): RegExp => {
  const sfcTags = Array.from(
    new Set([TAG_NAME_SCRIPT, TAG_NAME_STYLE, ...customBlocks]),
  ).join('|');
  return new RegExp(
    `^\\s*(?<content>(?<tagOpen><(?<type>${sfcTags})\\s?.*?>)(?<contentStripped>.*)(?<tagClose><\\/\\k<type>\\s*>))\\s*$`,
    'is',
  );
};

// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild


/**
 * A variable-length unsigned integer using base128 encoding. 1-byte groups
 * consist of 1-bit flag of continuation and 7-bit value chunk, and are ordered
 * "most significant group first", i.e. in "big-endian" manner.
 * 
 * This particular encoding is specified and used in:
 * 
 * * Standard MIDI file format
 * * ASN.1 BER encoding
 * * RAR 5.0 file format
 * 
 * More information on this encoding is available at
 * https://en.wikipedia.org/wiki/Variable-length_quantity
 * 
 * This particular implementation supports serialized values to up 8 bytes long.
 */
declare class VlqBase128Be {
  constructor(io: any, parent?: any, root?: any);
  __type: 'VlqBase128Be';
  last: number;

  /**
   * Resulting value as normal integer
   */
  value: number;
  groups: VlqBase128Be.Group[];
}


/**
 * One byte group, clearly divided into 7-bit "value" chunk and 1-bit "continuation" flag.
 */
declare namespace VlqBase128Be {
  class Group {
    constructor(io: any, parent?: any, root?: any);
    __type: 'Group';

    /**
     * If true, then we have more bytes to read
     */
    hasNext: boolean;

    /**
     * The 7-bit (base128) numeric value chunk of this group
     */
    value: number;
    b: number;
  }
}

export = VlqBase128Be;
export as namespace VlqBase128Be;

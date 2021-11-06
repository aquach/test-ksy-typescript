// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

import VlqBase128Be from './VlqBase128Be';
/**
 * SQLite3 is a popular serverless SQL engine, implemented as a library
 * to be used within other applications. It keeps its databases as
 * regular disk files.
 *
 * Every database file is segmented into pages. First page (starting at
 * the very beginning) is special: it contains a file-global header
 * which specifies some data relevant to proper parsing (i.e. format
 * versions, size of page, etc). After the header, normal contents of
 * the first page follow.
 *
 * Each page would be of some type, and generally, they would be
 * reached via the links starting from the first page. First page type
 * (`root_page`) is always "btree_page".
 * @see {@link https://www.sqlite.org/fileformat.html|Source}
 */
declare class Sqlite3 {
  constructor(io: any, parent?: any, root?: any);
  __type: 'Sqlite3';
  lenPage: number;
  magic: Uint8Array;

  /**
   * The database page size in bytes. Must be a power of two between
   * 512 and 32768 inclusive, or the value 1 representing a page size
   * of 65536.
   */
  lenPageMod: number;
  writeVersion: Sqlite3.Versions;
  readVersion: Sqlite3.Versions;

  /**
   * Bytes of unused "reserved" space at the end of each page. Usually 0.
   */
  reservedSpace: number;

  /**
   * Maximum embedded payload fraction. Must be 64.
   */
  maxPayloadFrac: number;

  /**
   * Minimum embedded payload fraction. Must be 32.
   */
  minPayloadFrac: number;

  /**
   * Leaf payload fraction. Must be 32.
   */
  leafPayloadFrac: number;
  fileChangeCounter: number;

  /**
   * Size of the database file in pages. The "in-header database size".
   */
  numPages: number;

  /**
   * Page number of the first freelist trunk page.
   */
  firstFreelistTrunkPage: number;

  /**
   * Total number of freelist pages.
   */
  numFreelistPages: number;
  schemaCookie: number;

  /**
   * The schema format number. Supported schema formats are 1, 2, 3, and 4.
   */
  schemaFormat: number;

  /**
   * Default page cache size.
   */
  defPageCacheSize: number;

  /**
   * The page number of the largest root b-tree page when in auto-vacuum or incremental-vacuum modes, or zero otherwise.
   */
  largestRootPage: number;

  /**
   * The database text encoding. A value of 1 means UTF-8. A value of 2 means UTF-16le. A value of 3 means UTF-16be.
   */
  textEncoding: Sqlite3.Encodings;

  /**
   * The "user version" as read and set by the user_version pragma.
   */
  userVersion: number;

  /**
   * True (non-zero) for incremental-vacuum mode. False (zero) otherwise.
   */
  isIncrementalVacuum: number;

  /**
   * The "Application ID" set by PRAGMA application_id.
   */
  applicationId: number;
  reserved: Uint8Array;
  versionValidFor: number;
  sqliteVersionNumber: number;
  rootPage: Sqlite3.BtreePage;
}

declare namespace Sqlite3 {
  class Serial {
    constructor(io: any, parent?: any, root?: any);
    __type: 'Serial';
    isBlob: boolean;
    isString: boolean;
    lenContent: number;
    code: VlqBase128Be;
  }
}

declare namespace Sqlite3 {
  class BtreePage {
    constructor(io: any, parent?: any, root?: any);
    __type: 'BtreePage';
    pageType: number;
    firstFreeblock: number;
    numCells: number;
    ofsCells: number;
    numFragFreeBytes: number;
    rightPtr: number;
    cells: Sqlite3.RefCell[];
  }
}


/**
 * @see {@link https://www.sqlite.org/fileformat.html#b_tree_pages|Source}
 */
declare namespace Sqlite3 {
  class CellIndexLeaf {
    constructor(io: any, parent?: any, root?: any);
    __type: 'CellIndexLeaf';
    lenPayload: VlqBase128Be;
    payload: Sqlite3.CellPayload;
    _raw_payload: Uint8Array;
  }
}

declare namespace Sqlite3 {
  class Serials {
    constructor(io: any, parent?: any, root?: any);
    __type: 'Serials';
    entries: VlqBase128Be[];
  }
}


/**
 * @see {@link https://www.sqlite.org/fileformat.html#b_tree_pages|Source}
 */
declare namespace Sqlite3 {
  class CellTableLeaf {
    constructor(io: any, parent?: any, root?: any);
    __type: 'CellTableLeaf';
    lenPayload: VlqBase128Be;
    rowId: VlqBase128Be;
    payload: Sqlite3.CellPayload;
    _raw_payload: Uint8Array;
  }
}


/**
 * @see {@link https://sqlite.org/fileformat2.html#record_format|Source}
 */
declare namespace Sqlite3 {
  class CellPayload {
    constructor(io: any, parent?: any, root?: any);
    __type: 'CellPayload';
    lenHeaderAndLen: VlqBase128Be;
    columnSerials: Sqlite3.Serials;
    columnContents: Sqlite3.ColumnContent[];
    _raw_columnSerials: Uint8Array;
  }
}


/**
 * @see {@link https://www.sqlite.org/fileformat.html#b_tree_pages|Source}
 */
declare namespace Sqlite3 {
  class CellTableInterior {
    constructor(io: any, parent?: any, root?: any);
    __type: 'CellTableInterior';
    leftChildPage: number;
    rowId: VlqBase128Be;
  }
}


/**
 * @see {@link https://www.sqlite.org/fileformat.html#b_tree_pages|Source}
 */
declare namespace Sqlite3 {
  class CellIndexInterior {
    constructor(io: any, parent?: any, root?: any);
    __type: 'CellIndexInterior';
    leftChildPage: number;
    lenPayload: VlqBase128Be;
    payload: Sqlite3.CellPayload;
    _raw_payload: Uint8Array;
  }
}

declare namespace Sqlite3 {
  class ColumnContent {
    constructor(io: any, parent?: any, root?: any);
    __type: 'ColumnContent';
    serialType: Sqlite3.Serial;
    asInt: number | number | number | number | number | number | undefined;
    asFloat: number;
    asBlob: Uint8Array;
    asStr: string;
    ser: any;
  }
}

declare namespace Sqlite3 {
  class RefCell {
    constructor(io: any, parent?: any, root?: any);
    __type: 'RefCell';
    body: Sqlite3.CellTableLeaf | Sqlite3.CellTableInterior | Sqlite3.CellIndexLeaf | Sqlite3.CellIndexInterior | undefined;
    ofsBody: number;
  }
}

declare namespace Sqlite3 {
  enum Versions {
    LEGACY = 1,
    WAL = 2,
  }
}

declare namespace Sqlite3 {
  enum Encodings {
    UTF_8 = 1,
    UTF_16LE = 2,
    UTF_16BE = 3,
  }
}

export = Sqlite3;
export as namespace Sqlite3;

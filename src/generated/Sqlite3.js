// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './VlqBase128Be'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./VlqBase128Be'));
  } else {
    root.Sqlite3 = factory(root.KaitaiStream, root.VlqBase128Be);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream, VlqBase128Be) {
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

var Sqlite3 = (function() {
  Sqlite3.Versions = Object.freeze({
    LEGACY: 1,
    WAL: 2,

    1: "LEGACY",
    2: "WAL",
  });

  Sqlite3.Encodings = Object.freeze({
    UTF_8: 1,
    UTF_16LE: 2,
    UTF_16BE: 3,

    1: "UTF_8",
    2: "UTF_16LE",
    3: "UTF_16BE",
  });

  function Sqlite3(_io, _parent, _root) {
    this.__type = 'Sqlite3';
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Sqlite3.prototype._read = function() {
    this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.magic = this._io.readBytes(16);
    this._debug.magic.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.magic, [83, 81, 76, 105, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 51, 0]) == 0))) {
      throw new KaitaiStream.ValidationNotEqualError([83, 81, 76, 105, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 51, 0], this.magic, this._io, "/seq/0");
    }
    this._debug.lenPageMod = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.lenPageMod = this._io.readU2be();
    this._debug.lenPageMod.end = this._io.pos;
    this._debug.writeVersion = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Sqlite3.Versions" };
    this.writeVersion = this._io.readU1();
    this._debug.writeVersion.end = this._io.pos;
    this._debug.readVersion = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Sqlite3.Versions" };
    this.readVersion = this._io.readU1();
    this._debug.readVersion.end = this._io.pos;
    this._debug.reservedSpace = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.reservedSpace = this._io.readU1();
    this._debug.reservedSpace.end = this._io.pos;
    this._debug.maxPayloadFrac = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.maxPayloadFrac = this._io.readU1();
    this._debug.maxPayloadFrac.end = this._io.pos;
    this._debug.minPayloadFrac = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.minPayloadFrac = this._io.readU1();
    this._debug.minPayloadFrac.end = this._io.pos;
    this._debug.leafPayloadFrac = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.leafPayloadFrac = this._io.readU1();
    this._debug.leafPayloadFrac.end = this._io.pos;
    this._debug.fileChangeCounter = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.fileChangeCounter = this._io.readU4be();
    this._debug.fileChangeCounter.end = this._io.pos;
    this._debug.numPages = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.numPages = this._io.readU4be();
    this._debug.numPages.end = this._io.pos;
    this._debug.firstFreelistTrunkPage = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.firstFreelistTrunkPage = this._io.readU4be();
    this._debug.firstFreelistTrunkPage.end = this._io.pos;
    this._debug.numFreelistPages = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.numFreelistPages = this._io.readU4be();
    this._debug.numFreelistPages.end = this._io.pos;
    this._debug.schemaCookie = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.schemaCookie = this._io.readU4be();
    this._debug.schemaCookie.end = this._io.pos;
    this._debug.schemaFormat = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.schemaFormat = this._io.readU4be();
    this._debug.schemaFormat.end = this._io.pos;
    this._debug.defPageCacheSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.defPageCacheSize = this._io.readU4be();
    this._debug.defPageCacheSize.end = this._io.pos;
    this._debug.largestRootPage = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.largestRootPage = this._io.readU4be();
    this._debug.largestRootPage.end = this._io.pos;
    this._debug.textEncoding = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Sqlite3.Encodings" };
    this.textEncoding = this._io.readU4be();
    this._debug.textEncoding.end = this._io.pos;
    this._debug.userVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.userVersion = this._io.readU4be();
    this._debug.userVersion.end = this._io.pos;
    this._debug.isIncrementalVacuum = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.isIncrementalVacuum = this._io.readU4be();
    this._debug.isIncrementalVacuum.end = this._io.pos;
    this._debug.applicationId = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.applicationId = this._io.readU4be();
    this._debug.applicationId.end = this._io.pos;
    this._debug.reserved = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.reserved = this._io.readBytes(20);
    this._debug.reserved.end = this._io.pos;
    this._debug.versionValidFor = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.versionValidFor = this._io.readU4be();
    this._debug.versionValidFor.end = this._io.pos;
    this._debug.sqliteVersionNumber = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.sqliteVersionNumber = this._io.readU4be();
    this._debug.sqliteVersionNumber.end = this._io.pos;
    this._debug.rootPage = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.rootPage = new BtreePage(this._io, this, this._root);
    this.rootPage._read();
    this._debug.rootPage.end = this._io.pos;
  }

  var Serial = Sqlite3.Serial = (function() {
    function Serial(_io, _parent, _root) {
      this.__type = 'Serial';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Serial.prototype._read = function() {
      this._debug.code = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.code = new VlqBase128Be(this._io, this, null);
      this.code._read();
      this._debug.code.end = this._io.pos;
    }
    Object.defineProperty(Serial.prototype, 'isBlob', {
      get: function() {
        if (this._m_isBlob !== undefined)
          return this._m_isBlob;
        this._debug._m_isBlob = {  };
        this._m_isBlob =  ((this.code.value >= 12) && (KaitaiStream.mod(this.code.value, 2) == 0)) ;
        return this._m_isBlob;
      }
    });
    Object.defineProperty(Serial.prototype, 'isString', {
      get: function() {
        if (this._m_isString !== undefined)
          return this._m_isString;
        this._debug._m_isString = {  };
        this._m_isString =  ((this.code.value >= 13) && (KaitaiStream.mod(this.code.value, 2) == 1)) ;
        return this._m_isString;
      }
    });
    Object.defineProperty(Serial.prototype, 'lenContent', {
      get: function() {
        if (this._m_lenContent !== undefined)
          return this._m_lenContent;
        if (this.code.value >= 12) {
          this._debug._m_lenContent = {  };
          this._m_lenContent = Math.floor((this.code.value - 12) / 2);
        }
        return this._m_lenContent;
      }
    });

    return Serial;
  })();

  var BtreePage = Sqlite3.BtreePage = (function() {
    function BtreePage(_io, _parent, _root) {
      this.__type = 'BtreePage';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BtreePage.prototype._read = function() {
      this._debug.pageType = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pageType = this._io.readU1();
      this._debug.pageType.end = this._io.pos;
      this._debug.firstFreeblock = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.firstFreeblock = this._io.readU2be();
      this._debug.firstFreeblock.end = this._io.pos;
      this._debug.numCells = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numCells = this._io.readU2be();
      this._debug.numCells.end = this._io.pos;
      this._debug.ofsCells = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ofsCells = this._io.readU2be();
      this._debug.ofsCells.end = this._io.pos;
      this._debug.numFragFreeBytes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numFragFreeBytes = this._io.readU1();
      this._debug.numFragFreeBytes.end = this._io.pos;
      if ( ((this.pageType == 2) || (this.pageType == 5)) ) {
        this._debug.rightPtr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.rightPtr = this._io.readU4be();
        this._debug.rightPtr.end = this._io.pos;
      }
      this._debug.cells = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cells = new Array(this.numCells);
      this._debug.cells.arr = new Array(this.numCells);
      for (var i = 0; i < this.numCells; i++) {
        this._debug.cells.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_cells = new RefCell(this._io, this, this._root);
        _t_cells._read();
        this.cells[i] = _t_cells;
        this._debug.cells.arr[i].end = this._io.pos;
      }
      this._debug.cells.end = this._io.pos;
    }

    return BtreePage;
  })();

  /**
   * @see {@link https://www.sqlite.org/fileformat.html#b_tree_pages|Source}
   */

  var CellIndexLeaf = Sqlite3.CellIndexLeaf = (function() {
    function CellIndexLeaf(_io, _parent, _root) {
      this.__type = 'CellIndexLeaf';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CellIndexLeaf.prototype._read = function() {
      this._debug.lenPayload = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lenPayload = new VlqBase128Be(this._io, this, null);
      this.lenPayload._read();
      this._debug.lenPayload.end = this._io.pos;
      this._debug.payload = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_payload = this._io.readBytes(this.lenPayload.value);
      var _io__raw_payload = new KaitaiStream(this._raw_payload);
      this.payload = new CellPayload(_io__raw_payload, this, this._root);
      this.payload._read();
      this._debug.payload.end = this._io.pos;
    }

    return CellIndexLeaf;
  })();

  var Serials = Sqlite3.Serials = (function() {
    function Serials(_io, _parent, _root) {
      this.__type = 'Serials';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Serials.prototype._read = function() {
      this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.entries = [];
      this._debug.entries.arr = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_entries = new VlqBase128Be(this._io, this, null);
        _t_entries._read();
        this.entries.push(_t_entries);
        this._debug.entries.arr[this.entries.length - 1].end = this._io.pos;
        i++;
      }
      this._debug.entries.end = this._io.pos;
    }

    return Serials;
  })();

  /**
   * @see {@link https://www.sqlite.org/fileformat.html#b_tree_pages|Source}
   */

  var CellTableLeaf = Sqlite3.CellTableLeaf = (function() {
    function CellTableLeaf(_io, _parent, _root) {
      this.__type = 'CellTableLeaf';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CellTableLeaf.prototype._read = function() {
      this._debug.lenPayload = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lenPayload = new VlqBase128Be(this._io, this, null);
      this.lenPayload._read();
      this._debug.lenPayload.end = this._io.pos;
      this._debug.rowId = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rowId = new VlqBase128Be(this._io, this, null);
      this.rowId._read();
      this._debug.rowId.end = this._io.pos;
      this._debug.payload = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_payload = this._io.readBytes(this.lenPayload.value);
      var _io__raw_payload = new KaitaiStream(this._raw_payload);
      this.payload = new CellPayload(_io__raw_payload, this, this._root);
      this.payload._read();
      this._debug.payload.end = this._io.pos;
    }

    return CellTableLeaf;
  })();

  /**
   * @see {@link https://sqlite.org/fileformat2.html#record_format|Source}
   */

  var CellPayload = Sqlite3.CellPayload = (function() {
    function CellPayload(_io, _parent, _root) {
      this.__type = 'CellPayload';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CellPayload.prototype._read = function() {
      this._debug.lenHeaderAndLen = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lenHeaderAndLen = new VlqBase128Be(this._io, this, null);
      this.lenHeaderAndLen._read();
      this._debug.lenHeaderAndLen.end = this._io.pos;
      this._debug.columnSerials = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_columnSerials = this._io.readBytes((this.lenHeaderAndLen.value - 1));
      var _io__raw_columnSerials = new KaitaiStream(this._raw_columnSerials);
      this.columnSerials = new Serials(_io__raw_columnSerials, this, this._root);
      this.columnSerials._read();
      this._debug.columnSerials.end = this._io.pos;
      this._debug.columnContents = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.columnContents = new Array(this.columnSerials.entries.length);
      this._debug.columnContents.arr = new Array(this.columnSerials.entries.length);
      for (var i = 0; i < this.columnSerials.entries.length; i++) {
        this._debug.columnContents.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_columnContents = new ColumnContent(this._io, this, this._root, this.columnSerials.entries[i]);
        _t_columnContents._read();
        this.columnContents[i] = _t_columnContents;
        this._debug.columnContents.arr[i].end = this._io.pos;
      }
      this._debug.columnContents.end = this._io.pos;
    }

    return CellPayload;
  })();

  /**
   * @see {@link https://www.sqlite.org/fileformat.html#b_tree_pages|Source}
   */

  var CellTableInterior = Sqlite3.CellTableInterior = (function() {
    function CellTableInterior(_io, _parent, _root) {
      this.__type = 'CellTableInterior';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CellTableInterior.prototype._read = function() {
      this._debug.leftChildPage = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.leftChildPage = this._io.readU4be();
      this._debug.leftChildPage.end = this._io.pos;
      this._debug.rowId = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rowId = new VlqBase128Be(this._io, this, null);
      this.rowId._read();
      this._debug.rowId.end = this._io.pos;
    }

    return CellTableInterior;
  })();

  /**
   * @see {@link https://www.sqlite.org/fileformat.html#b_tree_pages|Source}
   */

  var CellIndexInterior = Sqlite3.CellIndexInterior = (function() {
    function CellIndexInterior(_io, _parent, _root) {
      this.__type = 'CellIndexInterior';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CellIndexInterior.prototype._read = function() {
      this._debug.leftChildPage = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.leftChildPage = this._io.readU4be();
      this._debug.leftChildPage.end = this._io.pos;
      this._debug.lenPayload = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lenPayload = new VlqBase128Be(this._io, this, null);
      this.lenPayload._read();
      this._debug.lenPayload.end = this._io.pos;
      this._debug.payload = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_payload = this._io.readBytes(this.lenPayload.value);
      var _io__raw_payload = new KaitaiStream(this._raw_payload);
      this.payload = new CellPayload(_io__raw_payload, this, this._root);
      this.payload._read();
      this._debug.payload.end = this._io.pos;
    }

    return CellIndexInterior;
  })();

  var ColumnContent = Sqlite3.ColumnContent = (function() {
    function ColumnContent(_io, _parent, _root, ser) {
      this.__type = 'ColumnContent';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.ser = ser;
      this._debug = {};

    }
    ColumnContent.prototype._read = function() {
      if ( ((this.serialType.code.value >= 1) && (this.serialType.code.value <= 6)) ) {
        this._debug.asInt = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this.serialType.code.value) {
        case 4:
          this.asInt = this._io.readU4be();
          break;
        case 6:
          this.asInt = this._io.readU8be();
          break;
        case 1:
          this.asInt = this._io.readU1();
          break;
        case 3:
          this.asInt = this._io.readBitsIntBe(24);
          break;
        case 5:
          this.asInt = this._io.readBitsIntBe(48);
          break;
        case 2:
          this.asInt = this._io.readU2be();
          break;
        }
        this._debug.asInt.end = this._io.pos;
      }
      if (this.serialType.code.value == 7) {
        this._debug.asFloat = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.asFloat = this._io.readF8be();
        this._debug.asFloat.end = this._io.pos;
      }
      if (this.serialType.isBlob) {
        this._debug.asBlob = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.asBlob = this._io.readBytes(this.serialType.lenContent);
        this._debug.asBlob.end = this._io.pos;
      }
      this._debug.asStr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.asStr = KaitaiStream.bytesToStr(this._io.readBytes(this.serialType.lenContent), "UTF-8");
      this._debug.asStr.end = this._io.pos;
    }
    Object.defineProperty(ColumnContent.prototype, 'serialType', {
      get: function() {
        if (this._m_serialType !== undefined)
          return this._m_serialType;
        this._debug._m_serialType = {  };
        this._m_serialType = this.ser;
        return this._m_serialType;
      }
    });

    return ColumnContent;
  })();

  var RefCell = Sqlite3.RefCell = (function() {
    function RefCell(_io, _parent, _root) {
      this.__type = 'RefCell';
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    RefCell.prototype._read = function() {
      this._debug.ofsBody = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ofsBody = this._io.readU2be();
      this._debug.ofsBody.end = this._io.pos;
    }
    Object.defineProperty(RefCell.prototype, 'body', {
      get: function() {
        if (this._m_body !== undefined)
          return this._m_body;
        var _pos = this._io.pos;
        this._io.seek(this.ofsBody);
        this._debug._m_body = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._parent.pageType) {
        case 13:
          this._m_body = new CellTableLeaf(this._io, this, this._root);
          this._m_body._read();
          break;
        case 5:
          this._m_body = new CellTableInterior(this._io, this, this._root);
          this._m_body._read();
          break;
        case 10:
          this._m_body = new CellIndexLeaf(this._io, this, this._root);
          this._m_body._read();
          break;
        case 2:
          this._m_body = new CellIndexInterior(this._io, this, this._root);
          this._m_body._read();
          break;
        }
        this._debug._m_body.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_body;
      }
    });

    return RefCell;
  })();
  Object.defineProperty(Sqlite3.prototype, 'lenPage', {
    get: function() {
      if (this._m_lenPage !== undefined)
        return this._m_lenPage;
      this._debug._m_lenPage = {  };
      this._m_lenPage = (this.lenPageMod == 1 ? 65536 : this.lenPageMod);
      return this._m_lenPage;
    }
  });

  /**
   * The database page size in bytes. Must be a power of two between
   * 512 and 32768 inclusive, or the value 1 representing a page size
   * of 65536.
   */

  /**
   * Bytes of unused "reserved" space at the end of each page. Usually 0.
   */

  /**
   * Maximum embedded payload fraction. Must be 64.
   */

  /**
   * Minimum embedded payload fraction. Must be 32.
   */

  /**
   * Leaf payload fraction. Must be 32.
   */

  /**
   * Size of the database file in pages. The "in-header database size".
   */

  /**
   * Page number of the first freelist trunk page.
   */

  /**
   * Total number of freelist pages.
   */

  /**
   * The schema format number. Supported schema formats are 1, 2, 3, and 4.
   */

  /**
   * Default page cache size.
   */

  /**
   * The page number of the largest root b-tree page when in auto-vacuum or incremental-vacuum modes, or zero otherwise.
   */

  /**
   * The database text encoding. A value of 1 means UTF-8. A value of 2 means UTF-16le. A value of 3 means UTF-16be.
   */

  /**
   * The "user version" as read and set by the user_version pragma.
   */

  /**
   * True (non-zero) for incremental-vacuum mode. False (zero) otherwise.
   */

  /**
   * The "Application ID" set by PRAGMA application_id.
   */

  return Sqlite3;
})();
return Sqlite3;
}));

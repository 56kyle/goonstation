

export type TelesciConsoleData = {
  xtarget: number,
  ytarget: number,
  ztarget: number,
  padnum: number,
  host_id: string,
  panel_open: boolean,
  allow_scan: boolean,
  allow_bookmarks: boolean,
  bookmarks: BookmarkProps[],
};

export type BookmarkProps = {
  title: string;
  x: number,
  y: number,
  z: number,
};



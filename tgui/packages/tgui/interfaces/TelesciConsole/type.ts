

export type TelesciConsoleData = {
  host_id: string,
  panel_open: boolean,
  allow_scan: boolean,
  allow_bookmarks: boolean,
  bookmarks: BookmarkData[],
};

export type BookmarkData = {
  label: string;
};



# Cloud Code #

This folder contains the cloud functions for the server seperated into folders.
Folders are laid out this way to automatically setup each individual piece
by file with the parse server.

1.  [pfobjects](./pfobjects) contains the parse objects for the system.
    *   automatically registers objects that have `static parseClassName()` defined
1.  [helpers](./helpers) contains helper modules for the system.
2.  [event-handlers](./event-handlers) contains the hanlders for when objects
    are saved, deleted, and found.
3.  [functions](./functions) contains the cloud functions
    *  automatically registers functions by filename
4.  [jobs](./jobs) contains cloud jobs
    *  automatically registers jobs by filename

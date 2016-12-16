# firebase-event-bug-repro
A repro for child_added firing only after all data has been downloaded.

## Install & run
```bash
npm i
npm run start
```

## Interpretation
When subscribing to the large (1M entries at time of writing) data branch,
on a fast connection it takes ~7s for the first child_added event to fire,
whereas when we .limitToFirst(50) the Firebase reference, the first event
fires after ~1s.

I believe this to be because the entire branch is downloaded before any
events are fired, whereas child_added events could be fired as data is
being downloaded.

This is probably not wanted behaviour in a system that was designed to
stream in large amounts of data in realtime.
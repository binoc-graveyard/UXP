function testWorkerAbortedFetch() {
  var fc = new AbortController();
  fc.abort();

  fetch('slow.sjs', { signal: fc.signal }).then(() => {
    postMessage(false);
  }, e => {
    postMessage(e.name == "AbortError");
  });
}

function testWorkerFetchAndAbort() {
  var fc = new AbortController();

  var p = fetch('slow.sjs', { signal: fc.signal });
  fc.abort();

  p.then(() => {
    postMessage(false);
  }, e => {
    postMessage(e.name == "AbortError");
  });
}

onmessage = function(e) {
  self[e.data]();
}

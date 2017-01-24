function* cd(time) {
  const deadline = (new Date()).getTime() + Math.max(0, time);
  let now = (new Date()).getTime();
  while (now < deadline) {
    yield deadline - now;
    now = (new Date()).getTime();
  }
}

function expiryTimer(milliseconds) {
  let timer = cd(milliseconds);
  timer.next();

  return {
    done: () => timer.next().done,
    reset: (newLength) => {
      if (typeof newLength === 'undefined') {
        timer = cd(milliseconds);
      } else {
        timer = cd(newLength);
      }

      timer.next();
    },
  };
}

export default expiryTimer;

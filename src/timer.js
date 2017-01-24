function expiryTimer(milliseconds) {
  function* cd(time) {
    const deadline = (new Date()).getTime() + Math.max(0, time);
    let now = (new Date()).getTime();
    while (now < deadline) {
      yield deadline - now;
      now = (new Date()).getTime();
    }
  }

  let timer = cd(milliseconds);
  timer.next();

  return {
    done: () => timer.next().done,
    reset: () => {
      timer = cd(milliseconds);
      timer.next();
    },
  };
}

export default expiryTimer;

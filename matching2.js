window.addEventListener('load', function() {
    var h1 = document.querySelector('h1');
    var cycles = 0;
    var stage = 0;
    
    var interval = setInterval(function() {
        if (stage === 0) {
            h1.innerHTML = 'Wait a moment while we finish and bundle you with the other orders.';
            stage = 1;
        } else if (stage === 1) {
            h1.innerHTML = 'Wait a moment while we finish and bundle you with the other orders..';
            stage = 2;
        } else if (stage === 2) {
            h1.innerHTML = 'Wait a moment while we finish and bundle you with the other orders...';
            stage = 0;
        }
        if (stage == 0) {
            cycles++;
        }
        if (cycles === 3) {
            clearInterval(interval);
            window.location.href = 'done_screen.html';
        }
    }, 1000);
});
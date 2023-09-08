import init, { play } from './pkg/index.js';

async function run() {
    await init();

    let handle = null;
    const play_button = document.getElementById("play");
    play_button.addEventListener("click", event => {
        handle = play();
    });
    const stop_button = document.getElementById("stop");
    stop_button.addEventListener("click", event => {
        if (handle != null) {
            handle.free();
	        handle = null;
        }
    });
};

run();

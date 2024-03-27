export default function navigate() {
    return 0;
}

function __window_back() {
    window.history.back();
}

function __window_forward() {
    window.history.forward();
}

export { __window_back, __window_forward }
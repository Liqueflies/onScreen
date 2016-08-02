import scrollHandler from '../helpers/scroll-handler';

/**
 * Debounces the scroll event to avoid performance issues
 *
 * @return {void}
 */
function debouncedScroll() {
    let timeout;

    const lastScrollTop = this.scrollTop;
    const currentScrollTop = window.scrollY;
    const direction = (lastScrollTop - currentScrollTop > 0) ? 'up' : 'down';

    return () => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            scrollHandler(this.trackedElements, direction, this.options);
        }, this.options.throttle);
    };
}

export default debouncedScroll;

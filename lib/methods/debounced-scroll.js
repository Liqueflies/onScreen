import scrollHandler from '../helpers/scroll-handler';

/**
 * Debounces the scroll event to avoid performance issues
 *
 * @return {void}
 */
function debouncedScroll() {
    let timeout;

    const lastHorizontalScroll = this.prevScrollStatus.x;
    const lastVerticalScroll = this.prevScrollStatus.y;

    const currentHorizontalScroll = window.scrollX;
    const currentVerticalScroll = window.scrollY;

    const direction = {

        up() {
            return (currentVerticalScroll - lastVerticalScroll > 0);
        },
        down() {
            return (currentVerticalScroll - lastVerticalScroll < 0);
        },
        left() {
            return (currentHorizontalScroll - lastHorizontalScroll < 0);
        },
        right() {
            return (currentHorizontalScroll - lastHorizontalScroll > 0);
        }
    };

    return () => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            scrollHandler(this.trackedElements, direction, this.options);
        }, this.options.throttle);
    };
}

export default debouncedScroll;

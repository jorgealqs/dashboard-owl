const { useRef, onMounted } = owl;

export function useAutofocus(refName) {
    const ref = useRef(refName);
    onMounted(() => {
        ref.el.focus();
    });
    return ref;
}
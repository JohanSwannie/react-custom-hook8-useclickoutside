import useEventListener from "./useEventListener";

export default function useClickOutside(ref, callback) {
  useEventListener(
    "click",
    (event) => {
      if (ref.current == null || ref.current.contains(event.target)) {
        return;
      } else {
        callback(event);
      }
    },
    document
  );
}

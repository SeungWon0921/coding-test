import top100Films from "./top100Films.json";

type Data = Array<{ value: string; label: string }>;

/**
 * @description 300ms 지연 후 `top100Films`을 리턴해야 합니다.
 */
const fetchTop100Films = async (): Promise<Data> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(top100Films);
    }, 300);
  });

export { fetchTop100Films };

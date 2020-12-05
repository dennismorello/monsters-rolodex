export const MonsterImage = ({ monster, size }) => {
  const scaledSize = size * devicePixelRatio;

  return (
    <img
      alt="Monster"
      height={size}
      width={size}
      src={`https://robohash.org/${monster.id}?set=set2&size=${scaledSize}x${scaledSize}`}
    />
  );
};

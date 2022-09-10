export default function ColorBox({ color }) {
  const styles = {
    backgroundColor: `${color[0]}`,
  };
  return (
    <div className="h-40 w-40 border-2 border-black rounded-lg hover:scale-110 transition-all">
      <div style={styles} className="w-full h-32 rounded-t-lg"></div>
      <div className="text-center">{color}</div>
    </div>
  );
}

function College({ children, color }) {
  console.log("College color prop:", color); // add this
  return (
    <>
      <hr />
      <div style={{ color:color }}>{children}</div>
    </>
  );
}
export default College
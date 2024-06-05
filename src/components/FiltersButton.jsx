import Button from "./Button";
function FiltersButton() {
  const list = [
    "All",
    "Live",
    "Sports",
    "Cricket",
    "Songs",
    "Games",
    "Movies",
    "Cooking",
  ];
  return (
    <div className="flex m-4 px-20 gap-4">
      {list.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
}

export default FiltersButton;

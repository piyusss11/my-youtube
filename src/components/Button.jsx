function Button(props) {
  const { name } = props;
  return (
    <div>
      <button className="text-lg border-2 px-3 py-1 rounded-xl bg-gray-200 ">
        {name}
      </button>
    </div>
  );
}

export default Button;

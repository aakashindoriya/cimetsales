type PaginationProps = {
  startFrom: number;
  setStartForm: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ startFrom, setStartForm }: PaginationProps) => {
  const arr = new Array(10).fill(0).map((el, index) => (el = index + 1));

  return (
    <div className="w-[80%] p-1 flex justify-between m-auto">
      <button
        className="w-20 border p-2 rounded-sm"
        disabled={startFrom == 0 ? true : false}
        onClick={() => {
          setStartForm((pre) => pre - 10);
        }}
      >
        prev
      </button>
      {arr.map((el) => (
        <button
          key={el}
          style={{
            backgroundColor: startFrom / 10 + 1 == el ? "gray" : "white",
          }}
          className={`w-10 border p-2 rounded-md`}
          onClick={() => setStartForm((el - 1) * 10)}
        >
          {el}
        </button>
      ))}
      <button
        disabled={startFrom == 90 ? true : false}
        className="w-20 border p-2 rounded-sm"
        onClick={() => {
          setStartForm((pre) => pre + 10);
        }}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;

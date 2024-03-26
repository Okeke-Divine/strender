export default function SportCardHeadlines({title,newsChannel,date,col}) {
  return (
    <>
      <div className={`${col[0]} w-100 opacity-70 duration-300 hover:opacity-100 cursor-pointer rounded-lg p-5 flex justify-between`}>
        <div className="w-3/4">
          <div className="text-white font-bold text-xl">{title}</div>
          <div className="text-white font-xl mt-3">{newsChannel}</div>
          <div className={`${col[1]} mt-1`}>{date}</div>
        </div>
        <div className="w-1/4"></div>
      </div>
    </>
  );
}

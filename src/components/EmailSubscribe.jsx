export default function EmailSubscribe() {
  return (
    <>
      <div className="font-bold">Subscribe to our resources</div>
      <div className="text-gray-500 text-sm font-semibold mt-1">
        Add your email to get notified each time we top a new content
      </div>
      <div className="mt-5 flex border-2 rounded-lg py-2 px-2 gap-x-2">
        <div className="w-fit">
            <i className="fi fi-ts-bars-staggered relative top-[0.1rem]"></i>
        </div>
        <div className="w-full">
            <input className="w-full bg-transparent border-none outline-none" placeholder="Enter your email" />
        </div>
      </div>
    </>
  );
}

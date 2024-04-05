export default function Comment({ post_id }) {
  return (
    <>
      <div className="mt-5">
        <div className="font-bold mb-2">Comments:</div>
        <form>
          <textarea
            placeholder="What's on your mind? (Anonymous)"
            className="outline-none rounded-lg border-2 p-5 w-full"
            required
          ></textarea>
          <br />
          <button
            className="uppercase py-3 px-10 w-fit bg-blue-500 text-white rounded-lg text-sm font-semibold tracking-[1px]"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

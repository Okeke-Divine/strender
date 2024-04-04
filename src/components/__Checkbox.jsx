export default function __Checkbox({name}) {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <div>
          <input type="checkbox" className="relative top-[1px]" />
        </div>
        <div className="text-sm font-semibold">{name}</div>
      </div>
    </>
  );
}

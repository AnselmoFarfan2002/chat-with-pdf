export default function Loading() {
  return (
    <div className="relative">
      <div className="loading-bar w-full p-8 font-extrabold" />
      <div className="absolute w-full bottom-1/2 translate-y-1/2 font-extrabold yellow-black text-2xl">Loading...</div>
    </div>
  );
}

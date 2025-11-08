import { Button } from "@/components/ui/button";

export default function UnsubscribePage() {
  return (
    <div className="bg-[#e8dccb] pb-10 flex flex-col h-full">
      <div className="absolute w-full">
        <div className=" bg-[#fdb415] h-[200px]" />
        <div className="w-full aspect-[5/1] flex items-center justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <polygon points="0,0 100,0 50,5" fill="#fdb415" />
          </svg>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="bg-zinc-100/30 shadow backdrop-blur-md p-2 rounded-md border-1 w-full md:w-[400px] xl:w-[500px]">
          <p className=" font-bold">Are you sure you want to unsubscribe?</p>
          <p className="text-sm">
            You will no longer receieve new content from DuckCross.
          </p>
          <div className="flex flex-row mt-4">
            <Button className="ml-auto">Unsubscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

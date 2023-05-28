import lirikData from "../../../lirik.json";

export default function Lagu({ params }) {
  const lagu = lirikData[params.lagu];

  return (
    <div className="flex flex-col items-center">
      {lagu ? (
        <div>
          <iframe
            className="rounded-md my-4 w-[420px] h-[250px] sm:w-[540px] sm:h-[320px]"
            src={lagu.linkVideo}
          ></iframe>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-sm sm:text-lg font-medium"></div>
            <div className="">{lagu.judul}</div>
            <div>
              {lagu.lirik.map((lirik, index) => (
                <div key={index}>
                  <p>{lirik}</p>
                  <p>{lagu.pinyin[index]}</p>
                  {lagu["newLine"].includes(index + 1) && <br />}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Lagu tidak ditemukan</div>
      )}
    </div>
  );
}

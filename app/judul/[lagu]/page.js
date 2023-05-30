import lirikData from "../../../lirik.json";

export default function Lagu({ params }) {
  const lagu = lirikData[params.lagu];

  return (
    <div className="flex flex-col border md:items-center mt-2">
      {lagu ? (
        <div className="border md:w-3/4 lg:w-1/2">
          <iframe className="w-full aspect-video" src={lagu.linkVideo}></iframe>

          <div className="flex flex-col px-3">
            <table className="text-lg my-5 border">
              <tbody>
                <tr>
                  <td className="w-[58px]">Singer</td>
                  <td className=" w-[5px] pr-1">:</td>
                  <td className="font-semibold"> {lagu.penyanyi}</td>
                </tr>
                <tr>
                  <td className="w-[58px]">Title</td>
                  <td className="w-[5px] pr-1">:</td>
                  <td className="font-semibold"> {lagu.judul}</td>
                </tr>
              </tbody>
            </table>

            <div className="mb-5">
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

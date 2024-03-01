import lirikData from "../../../lirik.json";

export default function Lagu({ params }) {
  //  Output %E7%83%9F%E8%8A%B1%E6%98%93%E5%86%B7 sebenarnya merupakan representasi URL dari teks Bahasa Mandarin "烟花易冷". Untuk memperoleh teks asli, perlu mendekode URL tersebut. Maka lakukan : decodeURIComponent(params.lagu)
  const lagu = lirikData[decodeURIComponent(params.lagu)];

  return (
    <div className="flex flex-col border md:items-center mt-2">
      {lagu ? (
        <div className="border md:w-3/4 lg:w-1/2">
          <iframe className="w-full aspect-video" src={lagu.linkVideo}></iframe>

          <div className="flex flex-col px-3">
            <table className="text-lg my-5">
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
                  <p className="border text-sm">{lagu.pinyin[index]}</p>
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

export default function ProjectItem({ data }) {
  // 외부에서데이터로넘어오면 텍스트를 정리해줌
  const title = data.properties.이름.title[0]?.plain_text;

  const github = data.properties.Github.url;

  const youtube = data.properties.Youtube.url;

  const description2 = data.properties.Description.rich_text[0].plain_text;
  return (
    <div className='flex flex-col p-6 m-3 bg-slate-700 rounded-md '>
      <h1>{title}</h1>
      {/* 링크 */}
      <h3>{}</h3>
      <a href={github}>깃허브 바로가기</a>
      <a href={youtube}>youtube</a>
    </div>
  );
}

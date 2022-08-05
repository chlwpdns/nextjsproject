// next js 이미지
import Image from 'next/image';

export default function ProjectItem({ data }) {
  // 외부에서데이터로넘어오면 텍스트를 정리해줌
  const title = data.properties.이름.title[0]?.plain_text;

  const github = data.properties.Github.url;

  const youtube = data.properties.Youtube.url;

  const description = data.properties.Description.rich_text[0]?.plain_text;

  const imgSrc = data.cover?.external?.url || data.cover?.external.url;

  const tag = data.properties.태그.multi_select;
  //   const tags = data.properties.Tags.multi_select;
  //   const start = data.properties.WorkPeriod.date.start;
  //   const end = data.properties.WorkPeriod.date.end;

  return (
    <div className='flex flex-col m-3 bg-slate-700 rounded-xl w-full'>
      {/* width와 height를 지정해주고 중요한건 노션의 외부에서 이미지나 데이터를가져올때 도메인이 설정되어있어야도미 NEXT.js*/}
      <Image
        className='rounded-t-xl'
        src={imgSrc}
        // 이미지가 없을때에는
        alt='cover image'
        width='100%'
        height='60%'
        layout='responsive'
        // 넘어가는부분은자르기
        objectFit='cover'
        quality={100}
      />
      <div className='flex flex-col p-4'>
        <h1>{title}</h1>
        {/* 링크 */}
        <h3 className='mt-4 text-xl'>{description}</h3>
        <a href={github}>깃허브 바로가기</a>
        <a href={youtube}>youtube</a>

        <div className='flex flex-col p-4'>
            {tag.map(a)=>(
                <h1>{a.name}</h1>
            )}
        </div>
      </div>
    </div>
  );
}

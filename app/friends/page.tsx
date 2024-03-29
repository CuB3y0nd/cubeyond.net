import friendsData from '@/data/friendsData'
import FriendCard from '@/components/FriendCard'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/CommentsWithoutProperty'
import { Important } from '@/components/Admonitions'

export const metadata = genPageMetadata({ title: '友链' })

export default function Friends() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-20">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            友链
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            需要交换友链的朋友下方留言哦～
          </p>
        </div>
        <div className="container py-12">
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            {friendsData.map((d) => (
              <FriendCard
                key={d.name}
                title={d.name}
                description={d.description}
                imgSrc={d.avatar}
                href={d.url}
              />
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-extrabold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-4xl md:leading-10">
        提交格式
      </h2>
      <pre>
        <code>
          {`
{
  name: 'Your name',
  avatar: 'Your avatar link',
  url: 'Your website link,
  description: 'Your description',
}
          `}
        </code>
      </pre>
      <Important>
        <p>1. 您可以通过 <a href="https://github.com/CuB3y0nd/cubeyond.net/edit/master/data/friendsData.ts" target="blank" style={{ color: `#8e91f2` }}><u>创建 PR</u></a> 或在评论区按照上述指定的格式进行提交友链。</p><br />
        <p>2. 那些不尊重他人劳动成果、无出处转载、有恶意行为的网站请勿前来交流。</p>
      </Important>
      <center>
        <p>
          <b>网站失效、停止维护、不当内容都可能被取消链接！</b>
        </p>
        <p>
          <b>仅限个人非商业博客/网站！</b>
        </p>
      </center>
      {siteMetadata.comments && (
        <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
          <Comments />
        </div>
      )}
    </>
  )
}

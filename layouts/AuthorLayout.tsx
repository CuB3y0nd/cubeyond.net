import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/CommentsWithoutProperty'
import Link from '@/components/Link'
import { Mail, Github, Twitter } from 'lucide-react'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, email, twitter, github } = content

  return (
    <>
      <div className="mt-20 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            关于我
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">心之所向，一苇以航。</p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="top-12 flex flex-col items-center space-x-2 pt-8 xl:sticky">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="flex space-x-3 pt-6">
              <Link href={`mailto:${email}`}>
                <Mail className="rotate" size={24} strokeWidth={2} />
              </Link>
              <Link href={`${github}`} target="_blank">
                <Github className="rotate" size={24} strokeWidth={2} />
              </Link>
              <Link href={`${twitter}`} target="_blank">
                <Twitter className="rotate" size={24} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
      {siteMetadata.comments && (
        <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
          <Comments />
        </div>
      )}
    </>
  )
}

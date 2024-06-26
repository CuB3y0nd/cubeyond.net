'use client'

import Image from './Image'
import Link from './Link'

import { motion } from 'framer-motion'

const FriendCard = ({ title, description, imgSrc, href }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1.05 }}
      whileTap={{
        scale: 0.8,
        rotate: -1.05,
        borderRadius: "100%"
      }}
      className="flex flex-col h-full transform overflow-hidden rounded-md border-2 border-solid bg-transparent bg-opacity-20 dark:bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-surface0 dark:hover:bg-surface0-dark"
    >
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-30 lg:h-30"
                width={500}
                height={300}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-30 lg:h-30"
              width={500}
              height={300}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              访问 TA 的主页 &rarr;
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default FriendCard

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const mdDirPath = (markdownDirectory) => {
  return path.join(process.cwd(), markdownDirectory)
}

export function getSortedMarkdownData(markdownDirectory) {
  // Get file names under markdownDirectory
  const fileNames = fs.readdirSync(mdDirPath(markdownDirectory))
  const allMarkdownData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(mdDirPath(markdownDirectory), fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by order
  return allMarkdownData.sort(({ order: a }, { order: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllMarkdownIds(markdownDirectory) {
  const fileNames = fs.readdirSync(mdDirPath(markdownDirectory))
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getMarkdownData(id, markdownDirectory) {
  const fullPath = path.join(mdDirPath(markdownDirectory), `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
